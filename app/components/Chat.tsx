'use client'
import { useState } from "react";
import ChatMessageItem, { ChatMessage } from "./ChatMessageItem";

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [incomingMessage, setIncomingMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true)
    setPrompt('')
    setMessages(prevMessages => [ ...prevMessages, { role: 'user', content: prompt }])

    const response = await fetch('./api/chat', {
      method: 'POST',
      body: JSON.stringify({ prompt })
    })

    if (!response.body) return

    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader()

    if (reader) setIsLoading(false)

    let incomingMessage = '';
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: incomingMessage }])
        setIncomingMessage("")
        break;
      }

      if (value) {
        incomingMessage += value;
        setIncomingMessage(incomingMessage);
      }
    }
  }

  return (
    <div>
      {messages.map((message, index) => (
        <ChatMessageItem message={message} key={index} />
      ))}
      {incomingMessage && <ChatMessageItem message={{ role: 'assistant', content: incomingMessage }} />}
      {isLoading && <div>Loading...</div>}
      <form onSubmit={handleSubmit}>
        <input type='content' value={prompt} onChange={(event) => setPrompt(event.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Chat;