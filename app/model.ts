import { anthropic } from "@ai-sdk/anthropic";
import { deepseek } from "@ai-sdk/deepseek";
import { groq } from "@ai-sdk/groq";
import { openai } from "@ai-sdk/openai";

const openaiModel = openai("gpt-4o-mini");
const anthropic35Model = anthropic("claude-3-5-sonnet-latest");
const anthropic37Model = anthropic("claude-3-7-sonnet-20250219");
const deepseekModel = deepseek("deepseek-chat");
const groqModel = groq("gemma2-9b-it");

export const MODELS = {
  "gpt-4o-mini": openaiModel,
  "claude-3-5-sonnet-latest": anthropic35Model,
  "claude-3-7-sonnet-20250219": anthropic37Model,
  "deepseek-chat": deepseekModel,
  "gemma2-9b-it": groqModel,

} as const;