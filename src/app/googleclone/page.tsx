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
        {/* <br /> */}
        <br />
        <P>This project demonstrates a strong grasp of fundamental web development principles through the meticulous recreation of the Google homepage. 
          By leveraging HTML for structure and CSS for styling, 
          I have accurately replicated the layout, typography, and color scheme of the original design.</P>
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
