import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";
import Image from "next/image";
import NeomorphismUi from "@/components/UI/ProjectButton";
import Link from "next/link";
import { Lamp } from 'lucide-react';
import ProjectButton from "@/components/UI/ProjectButton";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - JobSearch"
}

export default function JobSearch() {
  return (
    <section className="h-screen">
      <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
        <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <div className="align-middle justify-center">
          <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="shopping" projectName="Next -> Shopping Website " projectYear="2022" githubLink="" />
          <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="codepencil" projectName="<- Clone/CodePencil" projectYear="2024" githubLink="" />
        </div>

      </section>
      <section className="min-h-full ">  {/* Set min-height to full viewport */}
        <H1>Job Search App</H1>
        <br />
        <P>This job search app leverages React Native&apos;s cross-platform capabilities to deliver a native-like experience on both Android and iOS devices. Expo streamlines the development process, allowing for rapid prototyping and deployment.
             Finally, I used Rapid API integration to fuel the app with a vast database of job postings, ensuring users have a wide range of opportunities to explore.</P>
          <br />
        <section className="flex justify-around align-middle overflow-scroll">
          <video
            src="/jobvideo.mp4"
            muted
            loop
            autoPlay
            height={300}
            width={220}
            playsInline
            className="h-400 rounded-2xl"
          />
          <section className="flex justify-between gap-3"> 
          <Image
            className="object-contain"
            src="/jobpt.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
           <Image
            className="object-contain"
            src="/jobabout.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
           <Image
            className="object-contain"
            src="/jobq.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
            <Image
            className="object-contain"
            src="/jobr.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
        
          </section>
        </section>
      </section>

    </section>

  );
}

