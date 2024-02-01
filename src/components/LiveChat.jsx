/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="ml-4 p-2 shadow-lg bg-gray-100 rounded-lg border border-gray-500 h-[500px] overflow-y-scroll flex flex-col-reverse ">
          {chatMessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className=" mx-4 my-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name : "Arjun",
            message : liveChat
          }));
          setLiveChat("");
        }}
      >
        <input
          className="border border-gray-900 rounded-md outline-none p-2 w-80"
          type="text"
          placeholder="Chat..."
          value={liveChat}
          onChange={(e) => setLiveChat(e.target.value)}
        />
        <button className="py-2 mx-2 w-16 bg-slate-400 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
