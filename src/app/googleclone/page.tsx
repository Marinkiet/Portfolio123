import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";

import NeomorphismUi from "@/components/UI/ProjectButton";
import Link from "next/link";
import { Lamp } from 'lucide-react';
import ProjectButton from "@/components/UI/ProjectButton";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - GoogleClone"
}

export default function GoogleClone() {
  return (
    <section className="h-screen">
      <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
        <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <div className="align-middle justify-center">
          <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="teslaclone" projectName="Next -> Clone/Tesla " projectYear="2024" githubLink="" />
          <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="tapmusic" projectName="<- Back Tap Music " projectYear="2024" githubLink="" />
        </div>

      </section>
      <section className="min-h-full">  {/* Set min-height to full viewport */}
        <H1>Google Clone</H1>
        <br />
        <Link href="https://marinkiet.github.io/Tapmusic/" target="_blank" className="text-purple-400 underline">Preview</Link>
        <br />
        <br />
        <P>Breathe life into your code creations with a CodePen clone built using cutting-edge web technologies.
          This interactive platform empowers you to code, preview, and share your HTML, CSS, and JavaScript masterpieces with ease.
          Imagine a seamless workspace where you can experiment, collaborate, and showcase your coding prowess.
          The CodePencil fosters a vibrant community of developers, allowing you to learn from others creations and inspire them with your own.
          Dive into the world of front-end development, refine your skills, and ignite your creative spark all within a user-friendly and collaborative environment.</P>
        <br />

        <section className="min-h-screen px-4 py-8 flex flex-col justify-between">
          <section className="w-full h-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
            <section className="w-full overflow-x-scroll justify-around md:flex gap-4">
              <video
                src="/googlevideo.mov"
                muted
                loop
                autoPlay
                height="full"
                width="full"
                playsInline
                // className="h-600"
              />
            

            </section>
          </section>
        </section>
      </section>
    </section>

  );
}

