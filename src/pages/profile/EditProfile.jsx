import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../firebase/firebase'; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from '../../firebase/AuthProvider'; 
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import userIcon from '../../../src/assets/icons/user.png'; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState('');
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

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (imageFile) {
            const storage = getStorage();
            const storageRef = ref(storage, `profileImages/${user.uid}`);
            const uploadTask = uploadBytesResumable(storageRef, imageFile);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    // You can use this section to display upload progress
                }, 
                (error) => {
                    console.error("Upload failed:", error);
                }, 
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setImageURL(downloadURL);
                    // Update Firestore document with the new image URL
                    const userDocRef = doc(db, "users", user.uid);
                    await updateDoc(userDocRef, { ...userData, profileImage: downloadURL });
                    navigate("/profile");
                }
            );
        } else {
            // If no image file is selected, just update the Firestore document
            const userDocRef = doc(db, "users", user.uid);
            await updateDoc(userDocRef, userData);
            navigate("/profile");
        }
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileImage">
                            Profile Image
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" name="profileImage" onChange={handleImageChange} />
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
