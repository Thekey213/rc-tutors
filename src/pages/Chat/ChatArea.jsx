import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, query, where, onSnapshot, orderBy, addDoc, Timestamp } from 'firebase/firestore';
import './ChatStyle.css'; // Ensure this CSS file is correctly named and located

const ChatArea = ({ userId }) => {
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!userId) {
      console.error("User ID is not defined.");
      return;
    }

    const q = query(collection(db, 'conversations'), where('members', 'array-contains', userId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const conversation = snapshot.docs[0];
        setConversationId(conversation.id);
      } else {
        console.log("No conversations found.");
      }
    });

    return () => unsubscribe();
  }, [userId]);

  useEffect(() => {
    if (!conversationId) return;

    const q = query(collection(db, `conversations/${conversationId}/messages`), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [conversationId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    await addDoc(collection(db, `conversations/${conversationId}/messages`), {
      content: newMessage,
      senderId: userId,
      timestamp: Timestamp.fromDate(new Date())
    });

    setNewMessage('');
  };

  return (
    <div className="col-md-6 col-lg-7 col-xl-8 chat-area">
      <ul className="list-unstyled mt-5 chat-messages">
        {messages.map(msg => (
          <li key={msg.id} className={`d-flex justify-content-between mb-4 ${msg.senderId === userId ? 'me' : 'other'}`}>
            {msg.senderId !== userId && (
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
            )}
            <div className={`card ${msg.senderId === userId ? 'sent' : 'received'}`}>
              <div className="card-header d-flex justify-content-between p-3">
                <p className="fw-bold mb-0">{msg.senderId === userId ? 'Me' : 'Brad Pitt'}</p>
                <p className="text-muted small mb-0">
                  <i className="far fa-clock"></i> {new Date(msg.timestamp.seconds * 1000).toLocaleTimeString()}
                </p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  {msg.content}
                </p>
              </div>
            </div>
            {msg.senderId === userId && (
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            )}
          </li>
        ))}
      </ul>
      <div className="input bg-white p-3">
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage} className="btn btn-success btn-rounded ms-3">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
