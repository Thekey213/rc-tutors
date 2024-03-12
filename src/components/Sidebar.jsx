import React, { useState } from 'react';
import rc_logo from '../../src/assets/images/rc_logo.jpeg';
import user from '../../src/assets/icons/user.png'; 
import teacher from '../../src/assets/icons/teacher.png';
import world from '../../src/assets/icons/world.png';
import message from '../../src/assets/icons/message.png';
import './style.css'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSignOut = () => {
    // Collapse the sidebar by setting sidebarOpen to false
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div className="bg-red-600 text-white h-screen w-1/9 fixed top-0 left-0 pr-6">
          {/* Sidebar Content */}
          <div className="flex flex-col h-full justify-between">
            <div >
              <div className="p-4">
                <img src={rc_logo} alt="rc-logo" className="sidebar_img" />
              </div>
              
              <ul>
                <li className="mb-2 flex items-center p-1">
                  <img src={user} alt="icon1" className="w-7 h-7 mr-2" />
                  <a href="#" className="text-black no-underline font-semibold">
                    profile
                  </a>
                </li>
                <li className="mb-2 flex items-center p-1">
                  <img src={teacher} alt="icon2" className="w-7 h-7 mr-2" />
                  <a href="#" className="text-black no-underline font-semibold">
                   tutors
                  </a>
                </li>
                <li className="mb-2 flex items-center p-1">
                  <img src={world} alt="icon2" className="w-7 h-7 mr-2" />
                  <a href="#" className="text-black no-underline font-semibold">
                   Activity stream
                  </a>
                </li>
                <li className="mb-2 flex items-center p-1">
                  <img src={message} alt="icon2" className="w-7 h-7 mr-2" />
                  <a href="#" className="text-black no-underline font-semibold">
                   chat
                  </a>
                </li>
                {/* Add more sidebar links as needed */}
              </ul>
            </div>

            {/* Sign Out Button */}
            <div className='pb-4 pl-3 pr-3'>
              <button
                onClick={handleSignOut}
                className="bg-white text-red-500 font- px-4 py-2 rounded-md w-full"
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
            className="bg-red-500 text-white p-2 rounded-sm"
          >
            ☰
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
