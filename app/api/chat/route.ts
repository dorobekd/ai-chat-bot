import { openai } from "@ai-sdk/openai";
import { Message, streamText } from "ai";

type RequestData = {
    messages: Message[];
  };

export const POST = async (req: Request) => {
    const { messages }: RequestData = await req.json();
  
    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages,
    });
  
    return result.toDataStreamResponse();
}