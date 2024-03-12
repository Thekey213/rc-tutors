// Your React component
import React from 'react';
import './style.css'; // Import your styles
import bell from "../../src/assets/icons/ringing.png";
import message from '../../src/assets/icons/message.png';

const Notification = () => {
  return (
    <ul className="list-none">
      <li className="flex items-center mb-4 relative">
        {/* Image 1 */}
        <img src={bell} alt="Image 1" className="mr-2 w-8 h-8" />
        <div>
          <p>Title 1</p>
          <div className="connector-line"></div>
          <ul className="list-none pl-4">
            {/* Nested list items */}
            <li className="notilist">List item 1</li>
            <li className="notilist">List item 2</li>
            <li className="notilist">List item 3</li>
            <li className="notilist">List item 4</li>
          </ul>
        </div>
      </li>

      <li className="flex items-center mb-4 relative">
        {/* Image 2 */}
        <img src={message} alt="Image 2" className="mr-2 w-8 h-8" />
        <div>
          <p>Title 2</p>
          <div className="connector-line"></div>
          <ul className="list-none pl-4">
            {/* Nested list items */}
            <li className="notilist">List item 5</li>
            <li className="notilist">List item 6</li>
            <li className="notilist">List item 7</li>
            <li className="notilist">List item 8</li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default Notification;
