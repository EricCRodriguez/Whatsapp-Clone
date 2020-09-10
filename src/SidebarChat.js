import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="SidebarChat">
      <Avatar />
      <div className="SidebarChat__info">
        <h2>Room Name</h2>
        <p>This is the last messge </p>
      </div>
    </div>
  );
}

export default SidebarChat;