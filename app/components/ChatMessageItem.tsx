'use client'
import { Message } from "ai";

const ChatMessageItem = ({ message }: { message: Message }) => {
  return (
    <div>
      {message.role === "user" ? "User: " : "AI: "}
      {message.content}
    </div>
  );
};

export default ChatMessageItem;