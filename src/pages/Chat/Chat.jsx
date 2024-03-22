import React from 'react';

const Chat = () => {
    const users = [
        {
            id: 'user1',
            name: 'John Doe',
            profilePic: 'https://picsum.photos/id/100/100',
            lastMessage: 'Hey there!',
            lastSentTime: '12:45 pm',
        },
        {
            id: 'user2',
            name: 'Jane Doe',
            profilePic: 'https://picsum.photos/id/101/100',
            lastMessage: 'How are you?',
            lastSentTime: '11:20 am',
        },
        {
            id: 'user3',
            name: 'Bob',
            profilePic: 'https://picsum.photos/id/102/100',
            lastMessage: 'I\'m good. Thanks!',
            lastSentTime: '10:45 am',
        },
    ]

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="flex flex-col w-full max-w-xs bg-white shadow-md px-8 py-4 rounded-lg">
                <ul className="list-none">
                    {users.map(user => (
                        <li key={user.id} className="flex flex-row justify-between mb-2">
                            <div className="flex flex-row items-center">
                                <img src={user.profilePic} className="w-10 h-10 rounded-full" alt="" />
                                <span className="mx-2 font-semibold">{user.name}</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <span className="text-sm font-light">{user.lastMessage}</span>
                                <span className="text-sm font-light ml-2">{user.lastSentTime}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Chat;


