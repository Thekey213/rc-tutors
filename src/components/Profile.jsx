import React, { useState } from 'react';
import profileImg from '../../src/assets/images/profileExample.jpeg';

const Profile = ({ fullName, email, phone, password }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="mt-5">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                <div className="flex flex-col items-center mb-4">
                <div className="rounded-full w-40 h-40 overflow-hidden mx-auto mb-4 border-4 flex items-center justify-center" style={{backgroundImage: `url(${profileImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                 </div>

                    <div>
                    <a href="/profile/edit" className="text-sm text-gray-500 hover:text-gray-700 no-underline">
                     Edit Profile
                    </a>

                    </div>
                </div>
                {/* Centering full name */}
                <h3 className="text-2xl font-semibold mb-3 text-center font-sans">{fullName}</h3>
                <p className="text-gray-700 mb-2">Email<br/><span className="font-bold">{email}</span></p>
                <p className="text-gray-700 mb-2 ">Phone<br/> <span className="font-bold">{phone}</span></p>
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        <p className="text-gray-700 mr-2">Password<br/><span className="font-bold">{password}</span><br/></p>
                       
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Profile;
