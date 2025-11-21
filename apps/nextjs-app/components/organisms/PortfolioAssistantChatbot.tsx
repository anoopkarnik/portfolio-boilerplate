"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@repo/ui/atoms/shadcn/button";
import { Textarea } from "@repo/ui/atoms/shadcn/textarea";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Skeleton } from "@repo/ui/molecules/shadcn/skeleton";
import { FaRobot } from "react-icons/fa";

type Message = {
  role: "user" | "assistant";
  value: string;
};

const PortfolioAssistantChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [waitingForReply, setWaitingForReply] = useState(false);
  const [firstMessage, setFirstMessage] = useState(true);

  const formatMessage = (message: string): string => {
    return message
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") // **bold**
      .replace(/_(.+?)_/g, "<i>$1</i>") // _italics_
      .replace(/`(.+?)`/g, "<code>$1</code>") // `code`
      .replace(/\n/g, "<br>"); // line breaks
  };

  const sendMessage = async () => {
    if (!userInput.trim() || waitingForReply) return;

    const input = userInput.trim();

    setWaitingForReply(true);
    setUserInput("");
    setMessages((prev) => [...prev, { role: "user", value: input }]);

    try {
      const res = await fetch("/api/portfolio-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error("Failed to reach assistant");
      }

      const data = await res.json();
      const reply = data.reply ?? "Sorry, I didn't get a response.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", value: reply as string },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          value: "Sorry, something went wrong talking to the assistant.",
        },
      ]);
    } finally {
      setWaitingForReply(false);
    }
  };

  useEffect(() => {
  if (firstMessage) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        value: "Hello! I'm your Portfolio Assistant. What would you like to know?",
      },
    ]);
    setFirstMessage(false);
  }
}, [firstMessage]);

  return (
    <div className="flex flex-col gap-3 rounded-md bg-popover">
      {/* Header + description */}
      <div className="space-y-1 px-1 border-b border-border pb-2">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <ChatBubbleIcon className="w-4 h-4" />
          Portfolio Assistant
        </h3>
        <p className="text-xs text-muted-foreground">
          Talk to an AI assistant trained on my projects, experience, education, and skills.
          Ask anything about my portfolio, how I’d fit your project, timelines, or pricing.
        </p>
      </div>

      {/* Chat window */}
      <div className="text-foreground h-[380px] overflow-y-auto px-1 pb-2 flex flex-col gap-2 text-paragraph scrollbar scrollbar-track-secondary scrollbar-thumb-sidebar">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[80%] flex items-start gap-2 ${
              message.role === "user"
                ? "bg-sidebar-accent text-foreground self-start"
                : "bg-sidebar-accent text-foreground self-end"
            }`}
          >
            {message.role === "user" &&  (
              <Image
                src={"/anoop.jpg"}
                alt="User"
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            {message.role === "assistant" && (
                <FaRobot size={25} className="text-foreground" />
            )}
            <div
              dangerouslySetInnerHTML={{
                __html:
                  message.role === "assistant"
                    ? formatMessage(message.value)
                    : message.value,
              }}
              className="py-1 pr-2 rounded-lg max-w-full"
            ></div>
          </div>
        ))}

        <div className="text-description self-end">
          {waitingForReply && (
            <div className="flex items-center gap-4">
              <span className="text-xs">Assistant is typing (may take upto a minute)</span>
              <Skeleton className="w-[140px] h-[24px] rounded-lg bg-primary text-primary" />
            </div>
          )}
        </div>
      </div>

      {/* Input + buttons */}
    <div className="flex flex-col gap-2">
        <div
            role="button"
            tabIndex={0}
            className="flex items-center rounded-xl bg-background border border-border shadow-sm 
                    hover:shadow-md transition-shadow duration-200"
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
        >
            <Textarea
            className="flex-1 border-none bg-transparent px-4 py-3 resize-none min-h-[60px] max-h-[90px]
                        focus-visible:ring-0 focus-visible:ring-offset-0"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask something about Anoop’s portfolio…"
            />

            <Button
                onClick={sendMessage}
                className="m-0 px-6 rounded-none rounded-tr-lg border-0 min-h-[60px] max-h-[90px] pb-6 font-bold"
            >
                Send
            </Button>
        </div>
    </div>
    </div>
  );
};

export default PortfolioAssistantChatbot;
