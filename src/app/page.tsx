import { H1 } from "@/components/UI/H1";
import { P } from "@/components/UI/P";

import { Metadata } from "next";
import Image from "next/image";
import me from '../assets/me.jpeg';
import Navbar from "@/components/Navbar";
import ProjectButton from "@/components/UI/ProjectButton";
import ThemeToggle from "@/components/UI/ThemeToggle";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - Smart Portfolio"
}

export default function Home() {
  return (
    
    <section className="space-y-16 px-1 py-8 flex justify-center align-middle flex-col sm:flex-row-reverse sm:justify-between">
      {/* for mobile set 1 column then 670px and obove set 2 column layout  */}
      <section>
      <ThemeToggle/>
      </section>
      <section className="grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="  space-y-3 mb-5  bg-[url('/background.png')] bg-no-repeat bg-cover bg-center">
      
          <H1 className="  text-center sm:text-start">Hello, I&apos;m Marinkie Thupi</H1>

          <p className="  text-center sm:text-start">Full Stack Developer: No layer left <span className="text-purple-500">unturned.</span></p>
          
          <Navbar />
        </div>
      </section>
      {/* <section> */}
        {/* <video className="w-full h-full sm:w-auto object-coverrounded-lg shadow-md" loop muted autoPlay playsInline>
          <source src="../assets/video.mp4" type="video/mp4" />
          {/* Your browser does not support the video tag. 
        </video> */}

      {/* </section> */}
      <section> {/* Scrollable section */}
        <section className="space-y-3 items-center"> {/* Nested section for list items */}
          <ProjectButton projectLink="/" projectName="Portfolio" projectYear="2024" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="AWS AI/PartyRock App" projectYear="2024" githubLink="https://github.com/Marinkiet/PartyRockAPPDemo"/>
          <ProjectButton projectLink="/neumorphism" projectName="UI/Neumorphism " projectYear="2024" githubLink=""/>
          <ProjectButton projectLink="/onboarding" projectName="UI/Onboarding" projectYear="2024" githubLink=""/>
          <ProjectButton projectLink="/codepencil" projectName="Clone/CodePencil" projectYear="2024" githubLink=""/>
          <ProjectButton projectLink="/habittracker" projectName="Habit Tracker App" projectYear="2024" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="Job Search App" projectYear="2023" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="UI/Shopping Website" projectYear="2022" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="Tap Sound Player" projectYear="2022" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="Clone/Google Search" projectYear="2021" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="Clone/Tesla" projectYear="2021" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="Clone/Instagram" projectYear="2021" githubLink=""/>
          <ProjectButton projectLink="/partyrock" projectName="View More On Github..."  githubLink="https://github.com/Marinkiet?tab=repositories"/>
        </section>
      </section>

    </section>

  );
}

