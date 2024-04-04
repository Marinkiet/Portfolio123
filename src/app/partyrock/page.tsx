import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";
import Image from "next/image";
import ProjectButton from "@/components/UI/ProjectButton";
import Link from "next/link";
import { Lamp } from 'lucide-react';

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - PartyRock"
}

export default function PartyRock() {
  return (
    <section className="h-screen">
      <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
        <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="neumorphism" projectName="Next -> UI/Neumorphism " projectYear="2024" githubLink="" />
      </section>
      <section className="min-h-full overflow-x-hidden sm:overflow-y-scroll">  
        <H1>AWS StudyParti</H1>
        <P>Study Buddy empowers students to stay on top of their coursework using the power of Artificial Intelligence.
          This application leverages AWS AI Party Rock&apos;s generative AI capabilities to automatically generate personalized notes and quizzes based on any topic you choose.
          Simply enter your class subjects for the day, and Study Parti will create concise summaries and targeted questions to solidify your understanding.
          </P>
        <br />
        <section className="min-h-screen px-4 py-8 flex flex-col justify-between">
          <section className="w-full h-auto mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
            <section className="w-full aspect-video overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JCVYuQ5xsVY" // Replace with YouTube link
                title="Project Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </section>
          </section>
          <h2 className="text-2xl font-bold mb-4">Project Screenshots</h2>
          <section className="md:flex md:justify-around sm:justify-between gap-4 overflow-x-auto ">
            <Image
              className="object-contain"
              src="/demo1.png"
              alt="home image"
              layout="fixed"
              width={220}
              height={300}
            />
            <Image
               className="object-contain"
              src="/demo2.png"
              alt="home image"
              layout="fixed"
              width={220}
              height={300}
            />
            <Image
               className="object-contain"
              src="/demo3.png"
              alt="home image"
              layout="fixed"
              width={220}
              height={300}
            />
          </section>
        </section>
      </section>
    </section>

  );
}

