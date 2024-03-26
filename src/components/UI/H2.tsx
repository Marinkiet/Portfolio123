import { cn } from "@/lib/utils";

export function H2(props: React.HTMLProps<HTMLHeadingElement>) {   //ensure that H1 takes same styles as nornaml H1
    return <h2
    {...props} 
    className={cn("text-2xl font-semibold tracking-tight", 
    props.className //allow class names from the outside
    )}
/>
} 