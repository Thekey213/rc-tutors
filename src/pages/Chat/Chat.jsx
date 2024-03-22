import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';

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
        <List>
            {users.map(user => (
                <ListItem button key={user.id}>
                    <ListItemAvatar>
                        <Avatar src={user.profilePic} />
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={
                        <React.Fragment>
                            <Typography component="span" variant="body2" color="textPrimary">
                                {user.lastMessage}
                            </Typography>
                            <Typography component="span" variant="body2" color="textSecondary">
                                &nbsp;– {user.lastSentTime}
                            </Typography>
                        </React.Fragment>
                    } />
                    <ChatIcon />
                </ListItem>
            ))}
        </List>
    );
}

export default Chat;
