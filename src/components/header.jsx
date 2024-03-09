import React from 'react';
import world from '../assets/icons/world.png';
function Header() {
  return (
    <header className="bg-red-500 p-4">
        <img src={world} alt="icon2" className="w-7 h-7 mr-2" />
      <h1 className="text-white text-2xl font-bold">Activity Stream</h1>
    </header>
  );
}

export default Header;