import React, { useState } from 'react'
import { Chatbot } from 'react-chatbot-kit'
import ActionProvider from './actionprovider'
import config from './config'
import MessageParser from './messageparser'
import './chatbotcomp.css'


function Chatbotcomp() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div>
      <div style={{marginLeft:"850px",position:"absolute",zIndex:11}}>
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      )}
      </div>
      <div  style={{position:"fixed",zIndex:10,float:"right"}}>
        <button className="open-button" onClick={() => toggleBot((prev) => !prev)}>Bot</button>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Chatbotcomp