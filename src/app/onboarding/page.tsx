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
  title: "Marinkie Thupi - Neumorphism"
}

export default function Onboarding() {
  return (
    <section className="h-screen">
      <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
        <Link className="hover:bg-purple-200 rounded-full p-1" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <div className="align-middle justify-center">
          <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="codepencil" projectName="Next -> Clone/CodePencil " projectYear="2024" githubLink="" />
          <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="neumorphism" projectName="<- Back UI/Neumorphism" projectYear="2024" githubLink="" />
        </div>

      </section>
      <section className="min-h-full">  {/* Set min-height to full viewport */}
        <H1>Onboarding</H1>
        <br />
        <P>Imagine navigating your onboarding experience with a delightful flow. The Reanimated library by React Native empowers you to craft precisely that. By leveraging shared animated values, you can orchestrate seamless transitions between onboarding screens. As users swipe through content, elements like titles, descriptions, and images can gracefully animate in and out, creating a captivating introduction to your music app or smart home system. This smooth user experience not only enhances aesthetics but also reinforces the intuitive nature of your app, setting the stage for a positive first impression.</P>
          <br />
        <section className="flex justify-around align-middle overflow-scroll">
          <video
            src="/onboardingvideo.mp4"
            muted
            loop
            autoPlay
            height={300}
            width={220}
            playsInline
            className="h-400 rounded-2xl mr-5"
          />
          <section className="flex justify-between gap-3"> 
          <Image
            className="object-contain"
            src="/onb1.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
           <Image
            className="object-contain"
            src="/onb2.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
           <Image
            className="object-contain"
            src="/onb3.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
            <Image
            className="object-contain"
            src="/onb4.png"
            alt="home image"
            layout="fixed"
            width={220}
            height={220}
          />
            <Image
            className="object-contain"
            src="/onb5.png"
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

