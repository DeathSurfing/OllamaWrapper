"use client";

import { Message } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <ScrollArea className="h-full pr-4">
      <div className="space-y-4 pb-4">
        {messages.map((message, i) => (
          <div
            key={i}
            className={cn(
              "flex w-max max-w-[80%] rounded-lg px-4 py-2",
              message.role === "user"
                ? "ml-auto bg-primary text-primary-foreground"
                : "bg-muted"
            )}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="bg-muted w-max max-w-[80%] rounded-lg px-4 py-2">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}