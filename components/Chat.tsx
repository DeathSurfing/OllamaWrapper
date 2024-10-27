"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChatHeader } from "@/components/chat/chat-header";
import { MessageList } from "@/components/chat/message-list";
import { ChatInput } from "@/components/chat/chat-input";
import { Message, ChatConfig } from "@/lib/types";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [config, setConfig] = useState<ChatConfig>({
    model: "llama2",
    systemPrompt: "You are a helpful AI assistant focused on providing accurate and concise information.",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newMessage],
          ...config,
        }),
      });

      const data = await response.json();
      if (data.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfigChange = (newConfig: Partial<ChatConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <Card className="w-full max-w-4xl p-4 h-[calc(100vh-2rem)] flex flex-col">
      <ChatHeader config={config} onConfigChange={handleConfigChange} />
      <div className="flex-1 overflow-hidden mt-4">
        <MessageList messages={messages} isLoading={isLoading} />
      </div>
      <ChatInput
        input={input}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onInputChange={setInput}
      />
    </Card>
  );
}