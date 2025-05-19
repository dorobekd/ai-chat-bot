'use client'

import { useChat } from "@ai-sdk/react";
import ChatMessageItem from "./ChatMessageItem";
import ChatModelSelect from "./ChatModelSelect";
import { MODELS } from "../model";
import { useState } from "react";

const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    const [selectedModel, setSelectedModel] = useState<keyof typeof MODELS>('gpt-4o-mini')

  
    return (
    <div>
      {messages.map((message) => <ChatMessageItem key={message.id} message={message} />)}
      <form onSubmit={(event) => handleSubmit(event, { body: { model: selectedModel }})}>
        <ChatModelSelect value={selectedModel} onChange={setSelectedModel} />
        <input name='prompt' value={input} onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  ); 
}

export default Chat;