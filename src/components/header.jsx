import React from 'react';
import world from '../assets/icons/world.png';
function Header() {
  return (

    <header>
        <div className=' justify-center flex pt-3 pb-2 items-center font-semibold bg-red-600'>
             <img src={world} alt="icon2" className="w-8 h-8 mr-2" />
            <h1 className="text-black text-2xl font-semibold">Activity Stream</h1>
       
       
        </div>
        
    </header>
  );
}

export default Header;