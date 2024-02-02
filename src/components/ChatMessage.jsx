import React from "react";
import {USER_LOGO} from "../utils/constant";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center  m-2">
      <img className="h-8" src={USER_LOGO} alt="user-logo" />
      <span className="font-bold px-2">{name}</span>
      <span className="font-semibold">{message}</span>
    </div>
  );
};

export default ChatMessage;
