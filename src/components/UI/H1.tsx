import { cn } from "@/lib/utils";

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {   //ensure that H1 takes same styles as nornaml H1
    return <h1
    {...props} 
    className={cn("text-3xl font-sans tracking-wide sm:text-4xl", 
    props.className //allow class names from the outside
    )}
/>
} 