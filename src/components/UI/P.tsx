import { cn } from "@/lib/utils";

export function P(props: React.HTMLProps<HTMLHeadingElement>) {  
    return <p
    {...props} 
    className={cn("text-sm font-sans tracking-wide sm:text-sm", 
    props.className //allow class names from the outside
    )}
/>
} 