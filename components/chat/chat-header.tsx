"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChatConfig } from "@/lib/types";

interface ChatHeaderProps {
  config: ChatConfig;
  onConfigChange: (config: Partial<ChatConfig>) => void;
}

export function ChatHeader({ config, onConfigChange }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">AI Chat</h2>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Chat Settings</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Model</Label>
              <Select
                value={config.model}
                onValueChange={(value) => onConfigChange({ model: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="llama2">Llama 2</SelectItem>
                  <SelectItem value="codellama">Code Llama</SelectItem>
                  <SelectItem value="mistral">Mistral</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>System Prompt</Label>
              <Textarea
                value={config.systemPrompt}
                onChange={(e) => onConfigChange({ systemPrompt: e.target.value })}
                className="min-h-[100px]"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}