import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../firebase/firebase'; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from '../../firebase/AuthProvider'; 
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import userIcon from '../../../src/assets/icons/user.png'; 



const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    setUserData(userDocSnap.data());
                } else {
                    console.log("No such document!");
                }
            }
        };

        fetchUserData();
    }, [user]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, userData);
        navigate("/profile");
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (

        <>

       <Header Description={"Profile Edit"} logo={userIcon}/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

               
           
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" value={userData.email || ''} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="phone" value={userData.phone || ''} onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="age" value={userData.age || ''} onChange={handleChange} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
        </>

        
    );
};

export default EditProfile;
