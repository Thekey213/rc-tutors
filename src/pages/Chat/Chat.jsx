// Chat.jsx
import React from 'react';
import MemberList from './MemberList';
import ChatArea from './ChatArea';
import './ChatStyle.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/header';
import chat from '../../assets/icons/message.png';

const Chat = () => {
  return (
    <>
    <Sidebar/><Header Description={"Profile"} logo={chat}/>
    <section className="chat-section">
                    
      <div className="container">
        <div className="row">
          <MemberList />
          <ChatArea />
        </div>
      </div>
    </section>
    </> 
    
  );
};

export default Chat;
