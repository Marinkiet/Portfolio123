import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";

import NeomorphismUi from "@/components/UI/ProjectButton";
import Link from "next/link";
import { Lamp } from 'lucide-react';
import ProjectButton from "@/components/UI/ProjectButton";

//page specifuic metadata
export const metadata: Metadata = {
    title: "Marinkie Thupi - Neumorphism"
}

export default function CodePencil() {
    return (
        <section className="h-screen">
        <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
          <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
          <div className="align-middle justify-center">
          <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="habittracker" projectName="Next -> Habit Tracker " projectYear="2024" githubLink="" />
          <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="onboarding" projectName="<- Back Onboarding " projectYear="2024" githubLink="" />
          </div>
        
        </section>
        <section className="min-h-full">  {/* Set min-height to full viewport */}
          <H1>CodePencil</H1>
          <P>Study Buddy empowers students to stay on top of their coursework using the power of Artificial Intelligence.
             This web application leverages AWS AI Party Rock&apos;s generative AI capabilities to automatically generate personalized notes and quizzes based on any topic you choose. 
             Simply enter your class subjects for the day, and Study Parti will create concise summaries and targeted questions to solidify your understanding.</P>
        </section>
      </section>

    );
}

