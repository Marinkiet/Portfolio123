"use client"

import { Bot } from "lucide-react";
import { useState } from "react"
import AIChatBot from "../AIChatBot";

export default function AIChatButton() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    return (
        <>
            <button onClick={() => setChatBoxOpen(true)} className="hover:text-green-400 hover:cursor-pointer transition-all hover:scale-100 hover:rotate-180">
                <Bot size={24} />
            </button>
            <AIChatBot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
        </>

    )

}