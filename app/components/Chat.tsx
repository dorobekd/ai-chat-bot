'use client'

import { useChat } from "@ai-sdk/react";
import ChatMessageItem from "./ChatMessageItem";

const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

  
    return (
    <div>
      {messages.map((message) => <ChatMessageItem key={message.id} message={message} />)}
        <form onSubmit={handleSubmit}>
        <input name='prompt' value={input} onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  ); 
}

export default Chat;