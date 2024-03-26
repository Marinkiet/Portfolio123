import { H1 } from "@/components/UI/H1";
import { H2 } from "@/components/UI/H2";
import { H3 } from "@/components/UI/H3";
import { Metadata } from "next";
import Image from "next/image";
import me from '../assets/me.jpeg'
import Navbar from "@/components/Navbar/Navbar";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - Smart Portfolio"
}

export default function Home() {
  return (
    <section className=" space-y-16 px-1 py-8 flex justify-center align-middle flex-col sm:flex-row-reverse sm:justify-between">
      {/* for mobile set 1 column then 670px and obove set 2 column layout  */}
      <section className="grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="  space-y-3 mb-5  bg-[url('/background.png')] bg-no-repeat bg-cover bg-center">
          <H1 className="  text-center sm:text-start">Hello, I&apos;m Marinkie Thupi</H1>
          <p className="  text-center sm:text-start">Full Stack Developer: No layer left <span className="text-purple-500">unturned.</span></p>
          <Navbar />
        </div>
        {/* <div className="flex justify-center">
          <Image
            src={me}
            alt="photo of me"
            height={300}
            width={300}
            className="rounded-full aspect-square object-cover shadow-md dark:border-foreground"
          />

        </div> */}
      </section>
      <section>
      <video className="w-full h-full sm:w-auto object-cover rounded-lg shadow-md" loop muted autoPlay playsInline> 
        <source src="../assets/video.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

        </section>
      <section> {/* Scrollable section */}
        <section className="space-y-3 text-center"> {/* Nested section for list items */}
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
          <h2 className=" text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">Project 1 <span className="text-gray-400">2024</span></h2>
        
        </section>
       

      </section>
      

    </section>

  );
}

