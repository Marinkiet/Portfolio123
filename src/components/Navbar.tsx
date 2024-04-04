import Link from "next/link";

export default function Navbar (){
    return (
        <header className=" bg-background sticky">
            <div className="max-w-3xl flex flex-wrap gap-2 px-3 py-4 items-center justify-center">
               <nav className="space-x-4 font-sans text-gray-400">
                <Link className="hover:text-purple-400 hover:cursor-pointer" href="/">home</Link>
                <Link className="hover:text-purple-400 hover:cursor-pointer" href="/about">about</Link>
                <Link className="hover:text-purple-400 hover:cursor-pointer" href="/chat">chatBot</Link>
                <Link className="hover:text-yellow-500 hover:cursor-pointer"  href="/certifications">Certifications</Link>       
                <Link className="hover:text-blue-400 hover:cursor-pointer" target="_blank" href="https://www.linkedin.com/in/marinkie-thupi/">Linkedin</Link>
               </nav>
            </div>
        </header>
    )
}