import Link from "next/link";

export default function Navbar (){
    return (
        <header className=" bg-background sticky">
            <div className="max-w-3xl mx-auto flex flex-wrap gap-3 px-3 py-4">
               <nav className="space-x-4 font-sans text-gray-400">
                <Link className="hover:text-purple-400 hover:cursor-pointer" href="/">home</Link>
                <Link className="hover:text-purple-400 hover:cursor-pointer" href="/about">about</Link>
                <Link className="hover:text-purple-400 hover:cursor-pointer" href="/chat">chatBot</Link>
                <Link className="hover:text-blue-400 hover:cursor-pointer" target="_blank" href="https://www.linkedin.com/in/marinkie-thupi/">Linkedin</Link>

               
               </nav>
            </div>
        </header>
    )
}