import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const MemberList = ({ userId, conversationId, userIds, setUserIds }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        if (searchTerm.trim() === '') return;

        const q = query(collection(db, 'users'), where('firstName', '==', searchTerm));
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSearchResults(users);
    };

    const handleAddUser = async (newUserId) => {
        if (userIds.includes(newUserId)) return;

        const conversationRef = doc(db, 'conversations', conversationId);
        await updateDoc(conversationRef, {
            members: [...userIds, newUserId]
        });
        setUserIds(prevUserIds => [...prevUserIds, newUserId]);
    };

    return (
        <div className="col-md-4">
            <h3>Members</h3>
            <ul>
                {userIds && userIds.map(memberId => (
                    <Member key={memberId} userId={memberId} />
                ))}
            </ul>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults && searchResults.map(user => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                        <button onClick={() => handleAddUser(user.id)}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Member = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userDoc = await getDoc(doc(db, 'users', userId));
            setUser({ id: userDoc.id, ...userDoc.data() });
        };

        fetchUser();
    }, [userId]);

    if (!user) return null;

    return (
        <li>
            {user.firstName} {user.lastName}
        </li>
    );
};

export default MemberList;
