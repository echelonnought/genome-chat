import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";
import db, { auth } from "./firebase";


function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => {
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    })

    return () => {
      unsubscribe();
    }
  }, []);

  const addChat = () => {
    const chatName = prompt('Please enter a chat name');
    if(chatName) {
    db.collection('chats').add({
      chatName 
    }) }
  }
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          src={user.photo}
          className="sidebar__avatar"
          onClick={() => auth.signOut()}
        />
        <div className="sidebar__input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton variant="outline" className="sidebar__inputButtonn">
          <RateReviewOutlinedIcon onClick={addChat}/>
        </IconButton>
      </div>

      <div className="sidebar__chats">
        
        {chats.map(({id, data: {chatName}}) => (<SidebarChat key={id} id={id} chatName={chatName} />))}
      </div>
    </div>
  );
}

export default Sidebar;
