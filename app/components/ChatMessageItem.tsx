'use client'
export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
}

const ChatMessageItem = ({ message }: { message: ChatMessage }) => {
  return (
    <div>
      {message.role === "user" ? "User: " : "AI: "}
      {message.content}
    </div>
  );
};

export default ChatMessageItem;