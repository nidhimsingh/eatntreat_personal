import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "./actionprovider";
import config from "./config";
import MessageParser from "./messageparser";

import ChatBubble from "@material-ui/icons/ChatBubble";


function Chatbotcomp() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div>
      <div
        style={{
          marginTop: "70px",
          marginLeft: "850px",
          position: "fixed",
          zIndex: 100,
          padding: "5px",
        }}
      >
        {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}
      </div>
      <div style={{ position: "fixed", zIndex: 10, float: "right" }}>
        <button
          id="123"
          className="open-button"
          onClick={() => {
            toggleBot((prev) => !prev);
          }}
        >
          <ChatBubble
            style={{ height: "30px", width: "30px", display: "block" }}
          />
        </button>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Chatbotcomp;
