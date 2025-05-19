import { MODELS } from "@/app/model";
import { Message, streamText } from "ai";

type RequestData = {
    messages: Message[];
    model: keyof typeof MODELS;
  };

export const POST = async (req: Request) => {
    const { messages, model: selectedModel }: RequestData = await req.json();
  
    const model = MODELS[selectedModel]

    const result = streamText({
      model,
      messages,
    });
  
    return result.toDataStreamResponse({
        getErrorMessage(error) {
          return (error as Error).message; //workaround for error not parsing correctly
        },
      });
}