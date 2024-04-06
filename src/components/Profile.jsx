import React, { useState } from 'react';
import profileImg from '../../src/assets/images/profileExample.jpeg';
import user from '../../src/assets/icons/user.png'; 
import Sidebar from './Sidebar';
import Header from './header';
const Profile = ({ fullName, studentnumber, email, phone, password, age, contactNumber, isVerified }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
     <div><Header Description={"Profile"} logo={user}/>
        <div className="mt-5">
            
            <Sidebar/>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                <div className="flex flex-col items-center mb-4">
                <div className="rounded-full w-32 h-32 overflow-hidden mx-auto mb-4 border-4 flex items-center justify-center" style={{backgroundImage: `url(${profileImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                 </div>

                    <div>
                    <a href="/profile/edit" className="text-sm text-gray-500 hover:text-gray-700 no-underline">
                     Edit Profile
                    </a>

                    </div>
                </div>
                {/* Centering full name */}
                <h3 className="text-2xl font-semibold mb-1 text-center font-sans">{fullName}</h3>
                <p className="text-2xl mb-3 text-center font-sans">{studentnumber}</p>


                <p className="text-gray-700 mb-2">Email<br/><span className="font-bold">{email}</span></p>


                <hr className="border-b border-gray-600 my-2" />
                <p className="text-gray-700 mb-2 ">Phone<br/> <span className="font-bold">{phone}</span></p>

                <hr className="border-b border-gray-600 my-2" />
                <p className="text-gray-700 mb-2 ">Age<br/> <span className="font-bold">{age}</span></p>

                <hr className="border-b border-gray-600 my-2" />
                <div className="flex items-center mb-2">
                <p className="text-gray-700 mr-2">Tutor Verified<br/><span className="font-bold">{isVerified ? 'Yes' : 'No'}</span><br/></p>
                </div>
                <div className="flex justify-center sm:justify-end mt-4">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => navigate("/profile/edit")}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;

