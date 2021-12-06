import React from 'react'
import Chat from './Chat'
import './Chats.css'

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Sarah" message="Yo whats up"
                timestamp="40 seconds ago"
                profilepic="https://randomuser.me/api/portraits/women/2.jpg"
                />
            <Chat
                name="Kate" message="How are you"
                timestamp="55 minutes ago"
                profilepic="https://randomuser.me/api/portraits/women/9.jpg"
            />
            <Chat
                name="Sandra" message="I am fine"
                timestamp="3 days ago"
                profilepic="https://randomuser.me/api/portraits/women/3.jpg"
            />
            <Chat
                name="Rose" message="How are you"
                timestamp="1 week ago"
                profilepic="https://randomuser.me/api/portraits/women/20.jpg"
            />
            
        </div>
    )
}

export default Chats
