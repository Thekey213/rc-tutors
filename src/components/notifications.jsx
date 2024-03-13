// Your React component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css'; // Import your styles
import bell from "../../src/assets/icons/ringing.png";
import message from '../../src/assets/icons/message.png';

const Notification = () => (
  <div>
     <img src={bell} alt="Image 1" className=" w-10 h-10" />
      <p className='title'>Notifications</p>
    <div className="connector-line">
     
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
      </div>

      <p className='title'>Messages</p>
      <img src={message} alt="Image 2" className=" w-8 h-8" />
      <div className="connector-line">
      <ul>
        <li>List item 5</li>
        <li>List item 6</li>
        <li>List item 7</li>
        <li>List item 8</li>
      </ul>
    </div>
  </div>
);

export default Notification;
