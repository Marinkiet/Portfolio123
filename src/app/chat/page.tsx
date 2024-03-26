import { H1 } from "@/components/UI/H1";
import { H2 } from "@/components/UI/H2";
import { H3 } from "@/components/UI/H3";
import { Metadata } from "next";
import Image from "next/image";
import me from '../assets/me.jpeg'
import Navbar from "@/components/Navbar";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - Chat to Marinkie"
}

export default function Chat() {
  return (
    <section className=" space-y-16 px-1 py-8 flex justify-center flex-col sm:flex-row-reverse sm:justify-between md:flex-col">
    {/* for mobile set 1 column then 670px and obove set 2 column layout  */}
    <section className="grid-cols-1 items-center gap-8 sm:grid-cols-2">
      <div className="  space-y-3 mb-5  bg-[url('/background.png')] bg-no-repeat bg-cover bg-center">
        <H1 className="  text-center sm:text-start">Hello, I&apos;m Marinkie Thupi</H1>
        <p className="  text-center sm:text-start">Full Stack Developer: No layer left <span className="text-purple-500">unturned.</span></p>
        <Navbar />
      </div>
    </section>
    </section>

  );
}

