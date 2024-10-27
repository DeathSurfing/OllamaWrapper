"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (value: string) => void;
}

export function ChatInput({ input, isLoading, onSubmit, onInputChange }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2 mt-4">
      <Textarea
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Type your message..."
        disabled={isLoading}
        className="min-h-[44px] resize-none py-3"
        rows={1}
      />
      <Button type="submit" disabled={isLoading} size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}