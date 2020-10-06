import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Demo App",
      timestamp: "Just Now",
      received: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://cdn57.androidauthority.net/wp-content/uploads/2019/09/Coder-Programmer-Working-Late-on-Computers-1200x641.jpg" />
        <div className="chat___headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ....</p>
        </div>
      </div>

      <div className="chat__headerRight">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p className={"chat__message {message.received && chat__receiver}"}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
