import { cn } from "@/lib/utils";

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {   //ensure that H1 takes same styles as nornaml H1
    return <h3
    {...props} 
    className={cn("text-xl font-semibold tracking-tight", 
    props.className //allow class names from the outside
    )}
/>
} 