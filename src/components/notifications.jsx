// Your React component
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css'; // Import your styles
import bell from "../../src/assets/icons/ringing.png";
import message from '../../src/assets/icons/message.png';

const Notification = () => (
  <div>
   
    <div style={{display: "flex", alignItems: "center"}}>
      <img src={bell} alt="Image 1" className="w-7 h-7 inline-block mr-2" style={{verticalAlign: "middle"}}/>
      <h2 className='title' style={{display: "inline", margin: "0 10px", textAlign: "center"}}>Notifications</h2>
    </div>

    <div className="connector-line">
     
      <ul style={{width: "80vw", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
        <li style={{width: "auto"}}>These words come from a very deep deep place in my heart</li>
        <li style={{width: "auto"}}>List item 2</li>
        <li style={{width: "auto"}}>List item 3</li>
        <li style={{width: "auto"}}>List item 4</li>
        </ul>
    </div>

      <div style={{display: "flex", alignItems: "center"}}>
      <img src={message} alt="Image 1" className="w-7 h-7 inline-block mr-2" style={{verticalAlign: "middle"}}/>
      <h2 className='title' style={{display: "inline", margin: "0 10px", textAlign: "center"}}>Messages</h2>
    </div>
    
    <div className="connector-line">
     
     <ul style={{width: "80vw", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
       <li style={{width: "auto"}}>These words come from a very deep deep place in my heart</li>
       <li style={{width: "auto"}}>List item 2</li>
       <li style={{width: "auto"}}>List item 3</li>
       <li style={{width: "auto"}}>List item 4</li>
       </ul>
    </div>

    
  </div>
);

export default Notification;
