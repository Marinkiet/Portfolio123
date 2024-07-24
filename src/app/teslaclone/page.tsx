import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";

import NeomorphismUi from "@/components/UI/ProjectButton";
import Link from "next/link";
import { Lamp } from 'lucide-react';
import ProjectButton from "@/components/UI/ProjectButton";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - TeslaClone"
}

export default function TestlaClone() {
  return (
    <section className="h-screen">
      <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
        <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <div className="align-middle justify-center">
          <ProjectButton target="_blank" nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="http://mtportfolio12.s3-website-eu-west-1.amazonaws.com/" projectName="Next -> Old Portfolio " projectYear="----" githubLink="" />
          <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="googleclone" projectName="<- Back Clone/Google  " projectYear="2021" githubLink="" />
        </div>

      </section>
      <section className="min-h-full">  {/* Set min-height to full viewport */}
        <H1>Tesla Clone</H1>
        <br />
      
        <br />
        <P>This project replicates the clean, futuristic aesthetic of Tesla's official website, 
          showcasing a strong understanding of design principles and web development fundamentals. By utilizing HTML for structure and CSS for styling, 
          I have created a visually appealing and user-friendly webpage that embodies Tesla's brand identity.</P>
        <br />

        <section className="min-h-screen px-4 py-8 flex flex-col justify-between">
          <section className="w-full h-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
            <section className="w-full overflow-x-scroll justify-around md:flex gap-4">
              <video
                src="/teslavideo.mov"
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

