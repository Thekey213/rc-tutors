import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../firebase/firebase';
import { doc, getDoc} from 'firebase/firestore';
import { AuthContext } from '../../firebase/AuthProvider'; 
import { useNavigate, Link } from 'react-router-dom'; 
import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import profileImg from '../../../src/assets/images/profileHolder.png';
import userImg from '../../assets/icons/user.png';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const data = userDocSnap.data();
                    const imageURL = data.profileImage;
                    if (imageURL) {
                        try {
                            const storage = getStorage();
                            const imageRef = ref(storage, imageURL);
                            const fetchedImageURL = await getDownloadURL(imageRef);
                            setUserData({ ...data, profileImageURL: fetchedImageURL });
                        } catch (error) {
                            console.error("Error fetching image URL:", error);
                            setUserData({ ...data, profileImageURL: profileImg });
                        }
                    } else {
                        setUserData({ ...data, profileImageURL: profileImg });
                    }
                } else {
                    console.log("No such document!");
                }
            }
        };

        fetchUserData();
    }, [user]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header Description={"Profile"} logo={userImg}/>
            <div className="mt-5">
                <Sidebar/>
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                    <div className="flex flex-col items-center mb-4">
                        <div className="rounded-full w-32 h-32 overflow-hidden mx-auto mb-4 border-4 flex items-center justify-center" style={{backgroundImage: `url(${userData.profileImageURL || profileImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        </div>
                        <div>
                            <Link to="/edit" className="text-sm text-gray-500 hover:text-gray-700 no-underline" >
                               Edit Profile
                            </Link>
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-1 text-center font-sans">{userData.firstName} {userData.lastName}</h3>
                    <p className="text-2xl mb-3 text-center font-sans">{userData.studentnumber}</p>
                    <p className="text-gray-700 mb-2">Email<br/><span className="font-bold">{userData.email}</span></p>
                    <hr className="border-b border-gray-600 my-2" />
                    <p className="text-gray-700 mb-2 ">Phone<br/> <span className="font-bold">{userData.phone}</span></p>
                    <hr className="border-b border-gray-600 my-2" />
                    <p className="text-gray-700 mb-2 ">Age<br/> <span className="font-bold">{userData.age}</span></p>
                    <hr className="border-b border-gray-600 my-2" />
                    <div className="flex items-center mb-2">
                        <p className="text-gray-700 mr-2">Tutor Verified<br/><span className="font-bold">{userData.isVerified ? 'Yes' : 'No'}</span><br/></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

