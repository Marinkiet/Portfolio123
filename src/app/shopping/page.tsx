import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";
import Link from "next/link";
import { Lamp } from 'lucide-react';
import ProjectButton from "@/components/UI/ProjectButton";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - Shopping Website"
}

export default function Shopping() {
  return (
    <section className="h-screen">
      <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
        <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <div className="align-middle justify-center">
          <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="tapmusic" projectName="Next -> Tap Music " projectYear="2022" githubLink="" />
          <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="jobapp" projectName="<- Job Search App" projectYear="2022" githubLink="" />
        </div>

      </section>
      <section className="min-h-full">  {/* Set min-height to full viewport */}
        <H1>MaryKay Shoping Website UI/UX</H1>
        <br />
        <Link href="https://marinkiet.github.io/MaryKAY/" target="_blank" className="text-purple-400 underline">Preview</Link>
        <br />
        <br />
        <P>MaryKay: Where Style Meets Sustainability (A Clothing E-commerce Experience)
Embrace a future of fashion that&apos;s kind to both you and the planet at MaryKay. Thus thoughtfully curated e-commerce platform offers a world of possibilities for the conscious shopper.
This was build using basic HTML,CSS and Javascript</P>
        <br />

        <section className="min-h-screen px-4 py-8 flex flex-col justify-between">
          <section className="w-full h-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
            <section className="w-full overflow-x-scroll justify-around md:flex gap-4">
              <video
                src="/shopping.mov"
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

