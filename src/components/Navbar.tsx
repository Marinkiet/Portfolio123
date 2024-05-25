import Link from "next/link";

export default function Navbar() {
    return (
        <header className=" bg-background sticky">
            <div className="max-w-3xl flex flex-wrap gap-2 px-3 py-4 items-center">
                <nav className="space-x-4 font-sans text-gray-400 items-center">
                    <Link className="hover:text-purple-400 hover:cursor-pointer" href="/">home</Link>
                    <Link className="hover:text-purple-400 hover:cursor-pointer" href="/about">about</Link>
                    <Link className="hover:text-yellow-500 hover:cursor-pointer" href="/certifications">certifications</Link>
                    <Link className="hover:text-pink-500 hover:cursor-pointer" target="_blank" href="https://github.com/Marinkiet">Github</Link>
                    <Link className="hover:text-blue-400 hover:cursor-pointer" target="_blank" href="https://www.linkedin.com/in/marinkie-thupi/">Linkedin</Link>
                </nav>
            </div>
        </header>
    )
}