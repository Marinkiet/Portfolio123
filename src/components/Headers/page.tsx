
import ProjectButton from "@/components/UI/ProjectButton";
import Link from "next/link";
import { Lamp } from 'lucide-react';


export default function ProjectHeader() {
    return (
        <section className = "px-1 py-8 flex justify-start  sm:justify-between gap-8" >

        <Link href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
        <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="neumorphism" projectName="Next -> UI/Neumorphism " projectYear="2024" githubLink="" />
      </section >
    )
}