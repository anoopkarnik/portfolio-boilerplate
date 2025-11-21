"use client"
import { Button } from '@repo/ui/atoms/shadcn/button'
import { Input } from '@repo/ui/atoms/shadcn/input'
import { Textarea } from '@repo/ui/atoms/shadcn/textarea'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Message = ({setActivePanel}:{setActivePanel: any}) => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const handleSendMessage = () => {
        toast.info("Message is coming soon!")
    };
    return (
        <div className="flex flex-col gap-3 rounded-md bg-popover">
        <div className="space-y-1">
            <h3 className="text-sm font-semibold">Send me a message</h3>
            <p className="text-xs text-muted-foreground">
            Have questions or want to collaborate or hire me for work? Send me a message!
            </p>
        </div>
        <Input
            placeholder="Subject"
            className="w-full bg-background"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
        />
        <Textarea
            placeholder="Message (Required)"
            className="w-full h-[160px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
        />
        <div className="flex justify-between items-center gap-2 pt-1">
            <Button
            variant="ghost"
            size="sm"
            onClick={() => setActivePanel(null)}
            >
            Back
            </Button>
            <Button size="sm" onClick={handleSendMessage}>
            Send Message
            </Button>
        </div>
    </div>
  )
}

export default Message