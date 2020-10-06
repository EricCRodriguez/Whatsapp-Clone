import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://www.englishone.co.za/wp-content/uploads/2015/12/PEOPLE-HANGING-OUT.jpg" />

      <div className="sidebarChat__info">
        <h2>Chat Room </h2>
        <p>Add your friends and start Chatting! </p>
      </div>
    </div>
  );
}

export default SidebarChat;
