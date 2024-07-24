import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";

import Link from "next/link";
import { Lamp } from 'lucide-react';
import ProjectButton from "@/components/UI/ProjectButton";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - TapMusic"
}

export default function TapMusic() {
  return (
    <section className="h-screen">
      <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
        <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <div className="align-middle justify-center">
          <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="googleclone" projectName="Next ->  Clone/Google" projectYear="2021" githubLink="" />
          <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="shopping" projectName="<- MaryKay Shoping Website" projectYear="2021" githubLink="" />
        </div>

      </section>
      <section className="min-h-full">  {/* Set min-height to full viewport */}
        <H1>Tap Music</H1>
        <br />
        <Link href="https://marinkiet.github.io/Tapmusic/" target="_blank" className="text-purple-400 underline">Preview</Link>
        <br />
        <br />
        <P>This web application offers a playful and engaging interface where users can create music by simply tapping on tiles.
           Each tile is assigned a unique sound, which is triggered upon interaction. 
           To enhance visual feedback, a vibrant ball animates with a bouncy effect on the clicked tile.</P>
        <br />

        <section className="min-h-screen px-4 py-8 flex flex-col justify-between">
          <section className="w-full h-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
            <section className="w-full overflow-x-scroll justify-around md:flex gap-4">
              <video
                src="/musicvideo.mov"
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

