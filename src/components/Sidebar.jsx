// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AuthContext } from '../firebase/AuthProvider';
import rc_logo from '../../src/assets/images/rc_logo.jpeg';
import user from '../../src/assets/icons/user.png'; 
import teacher from '../../src/assets/icons/teacher.png';
import world from '../../src/assets/icons/world.png';
import message from '../../src/assets/icons/message.png';
import './style.css';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const auth = useContext(AuthContext); // Access the authentication context

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSignOut = () => {
    if (auth) {
      auth.logOut(); // Call the logOut function from the authentication context
    }
    // Collapse the sidebar by setting sidebarOpen to false
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div className="bg-red-600 text-white h-screen w-1/9 fixed top-0 left-0 pr-6 "  style={{ zIndex: 1 }}>
          <div className="fixed top-0 left-0 pr-6">
            <button
              onClick={toggleSidebar}
              className="bg-red-600 text-white pl-4 pr-4 pt-3  rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col h-full justify-between">
            <div className="pt-4 pl-1" >
              <div className=" pt-5 pb-6 pl-7 pr-0">
                <img src={rc_logo} alt="rc-logo" className="sidebar_img" />
              </div>
              <ul>
                <li className="mb-2 flex items-center p-1">
                  <div className='hover:translate-x-1 transition duration-100'>
                    <img src={user} alt="icon1" className="w-7 h-7 mr-2 inline" />
                    {/* Use Link instead of anchor tag */}
                    <Link to="/profile" className="text-black no-underline font-semibold inline">Profile</Link>
                  </div>
                </li>
                <li className="mb-2 flex items-center p-1">
                  <div className='hover:translate-x-1 transition duration-100'>
                    <img src={teacher} alt="icon2" className="w-7 h-7 mr-2 inline"  />
                    {/* Use Link instead of anchor tag */}
                    <Link to="/tutors" className="text-black no-underline font-semibold inline ">
                      Tutors
                    </Link>
                  </div>
                </li>
                <li className="mb-2 flex items-center p-1">
                  <div className='hover:translate-x-1 transition duration-100'>
                    <img src={world} alt="icon2" className="w-7 h-7 mr-2 inline" />
                    {/* Use Link instead of anchor tag */}
                    <Link to="/activity-stream" className="text-black no-underline font-semibold inline">
                      Activity stream
                    </Link>
                  </div> 
                </li>
                <li className="mb-2 flex items-center p-1">
                  <div className='hover:translate-x-1 transition duration-100'>
                    <img src={message} alt="icon2" className="w-7 h-7 mr-2 inline" />
                    {/* Use Link instead of anchor tag */}
                    <Link to="/chat" className="text-black no-underline font-semibold inline">
                      Chat
                    </Link>
                  </div>
                </li>
                {/* Add more sidebar links as needed */}
              </ul>
            </div>
            {/* Sign Out Button */}
            <div className='pb-4 pl-3 pr-3'>
              <button
                onClick={handleSignOut}
                className="bg-white text-red-600 font-semibold px-4 py-2 rounded-md w-full"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Button to toggle sidebar */}
      {!sidebarOpen && (
        <div className="fixed top-0 left-0 pr-6">
          <button
            onClick={toggleSidebar}
            className="bg-red-600 text-white pl-4 pr-4 pt-3  rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
