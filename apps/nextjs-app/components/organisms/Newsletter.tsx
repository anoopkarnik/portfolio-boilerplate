"use client"
import { Button } from '@repo/ui/atoms/shadcn/button'
import { Input } from '@repo/ui/atoms/shadcn/input'
import React, { useState } from 'react'
import { toast } from 'sonner'

const Newsletter = ({setActivePanel}:{setActivePanel: any}) => {

    const [newsletterEmail, setNewsletterEmail] = useState("");



    const handleJoinNewsletter = () => {
        toast.success("Newsletter subscription", {
          description: "It is coming soon! Stay tuned.",
        })
  };
  return (
        <div className="flex flex-col gap-3 rounded-md bg-popover ">
    <div className="space-y-1">
        <h3 className="text-sm font-semibold">Join my newsletter</h3>
        <p className="text-xs text-muted-foreground">
        Get updates on new projects, tools, and behind-the-scenes breakdowns. No spam, just useful stuff.
        </p>
    </div>
    <Input
        placeholder="Your email"
        className="w-full bg-background"
        value={newsletterEmail}
        onChange={(e) => setNewsletterEmail(e.target.value)}
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
        <Button size="sm" onClick={handleJoinNewsletter}>
        Subscribe
        </Button>
    </div>
    </div>
  )
}

export default Newsletter