export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatConfig {
  model: string;
  systemPrompt: string;
}