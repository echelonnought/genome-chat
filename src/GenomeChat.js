import React from 'react';
import './GenomeChat.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function GenomeChat() {
    return (
        <div className="genome__chat">
            {/* Sidebar */}
            <Sidebar />
            {/* Chat */}

            <Chat />
        </div>
    )
}

export default GenomeChat
