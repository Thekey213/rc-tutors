// Chat.jsx
import React from 'react';
import MemberList from './MemberList';
import ChatArea from './ChatArea';
import './ChatStyle.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/header';
import chat from '../../assets/icons/message.png';


const Chat = ({ userId }) => {
  return (
    <>
      <Sidebar />
      <Header Description={"Chat"} logo={chat} />

      <section className="chat-section">
        <div className="container">
          <div className="row">
            {/* Ensure MemberList is receiving any required props if necessary */}
            <MemberList />
            
            {/* Pass userId to ChatArea if it requires it */}
            <ChatArea userId={userId} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
