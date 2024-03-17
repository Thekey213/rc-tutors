// eslint-disable-next-line no-unused-vars
import React from 'react';
import world from '../assets/icons/world.png';
function Header({ Description }) {
  return (

    <header>
        <div className=' justify-center flex pt-2 pb-1 items-center font-semibold bg-red-600'>
             <img src={world} alt="icon2" className="w-7 h-7 mr-2" />
            <h2 className="text-black text-2xl font-semibold">{Description}</h2>
       
       
        </div>
        
    </header>
  );
}

export default Header;