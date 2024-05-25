"use client"

import { Bot } from "lucide-react";
import { useState } from "react"
import AIChatBot from "../AIChatBot";

export default function AIChatButton() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    return (
        <>
            <button onClick={() => setChatBoxOpen(true)} className="text-purple-500 hover:text-green-500 hover:cursor-pointer transition-all hover:scale-100 hover:rotate-180">
                <Bot size={30} />
            </button>
            <AIChatBot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
        </>

    )

}