import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react" //hook from Vercel AI for streaming chat
import { Bot, SendHorizontalIcon, Trash, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useEffect, useRef } from "react";
interface AIChatBoxProps {
    open: Boolean,
    onClose: () => void
}

export default function AIChatBot({ open, onClose }: AIChatBoxProps) {
    const {
        messages, //messages between user and bot
        input, //input state 
        handleInputChange, //handles inout state
        handleSubmit, //for the form submission to API Endpoint
        setMessages, //can empty chat
        isLoading,
        error

    } = useChat(); //auto calls default path /api/chat

    //scroll to bottom and focus  on chat input
    const inputRef = useRef<HTMLInputElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(scrollRef.current){
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    },[messages])

    useEffect(()=>{
        if(open){
            inputRef.current?.focus()
        }
    },[open])

    const lastMessageIsUser = messages[messages.length - 1]?.role == "user";

    return <div className={cn("bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-100", open ? "fixed" : "hidden")}>
        <button onClick={onClose} className="mb-1 ms-auto flex p-2"><XCircle size={30} color="#a855f7" className="rounded-full bg-background cursor-pointer" /></button>
        <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl" >
            <div className="mt-3 h-full overflow-y-auto px-3 " ref={scrollRef}>
                {messages.map(message => (
                    <ChatMessage message={message} key={message.id} />
                ))}
                {isLoading && lastMessageIsUser && (
                    <ChatMessage
                        message={{
                            id: "loading",
                            role: "assistant",
                            content: "Thinking ...",
                        }} />
                )}
                {error && (

                    <ChatMessage
                        message={{
                            id: "error",
                            role: "assistant",
                            content: "Oops something went wrong. Please try again.",
                        }} />
                )}
                {!error && messages.length === 0 && (
                    <div className="flex flex-col h-full items-center justify-center gap-3 text-center mx-8">
                        <Bot color="#00da6a" size={24} />
                        <p className="text-lg font-medium">Sent a message to the start AI chat!</p>
                        <p className="text-muted-foreground text-sm">
                            This brainiac bot can relay out answers about me like a digital parrot. Ask away!
                        </p>


                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="m-3 flex gap-1">
                <button
                    type="button"
                    className="flex items-center justify-center w-10 flex-none"
                    title="Clear chat"
                    onClick={() => setMessages([])}>
                    <Trash size={24} color="#a855f7"
                />
                </button>

                <input value={input}
                    ref={inputRef}
                    onChange={handleInputChange}
                    placeholder="Ask me anything.."
                    className="grow border rounded bg-background px-3 py-2 text-sm border-purple-500"
                />

                <button 
                type="submit"
                title="Submit Message"
                className="flex items-center justify-center w-10 flex-none  disabled:opacity-50"
                    disabled={isLoading || input.length === 0}>
                    <SendHorizontalIcon size={24} color="#a855f7"/>
                </button>
            </form>


        </div>
    </div>
}
interface ChatMessageProps {
    message: Message
}
function ChatMessage({ message: { role, content } }: ChatMessageProps) {
    const isAiMessage = role == "assistant"

    return (
        <div className={cn("mb-3 flex items-center  font-light", isAiMessage ? "me-5 justify-start" : "ms-5 justify-end")}>
            {isAiMessage && <Bot color="#00da6a" className="mr-2 flex-none" />}
            <div className={cn("rounded-md border px-3 py-2", isAiMessage ? "bg-background" : "bg-foreground text-background",)}>
                <ReactMarkdown components={{
                    a: ({ node, ref, ...props }) => (
                        <Link {...props}
                            href={props.href ?? ""} //incase it's undefied set to empty string
                            className="text-purple-500 hover:underline"
                        />),

                    p: ({ node, ...props }) => (
                        <p {...props} className="mt-3 first:mt-0"
                        />),

                    ul: ({ node, ...props }) => (
                        <ul {...props} className="mt-3 list-inside list-disc first:mt-0"
                        />),

                    li: ({ node, ...props }) => (
                        <li {...props} className="mt-1 "
                        />)
                }}>
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    )
}