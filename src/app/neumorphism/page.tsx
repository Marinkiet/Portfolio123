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

export default function Neumorphism() {
    const images = [
        '/demo1.png',
        '/demo2.png',
        '/demo3.png',
        '/demo1.png',
        '/demo2.png',
        '/demo3.png',
    ];
    return (
        <section className="h-screen">
            <section className="px-1 py-8 flex justify-start  sm:justify-between gap-8">
                <Link  className="hover:bg-purple-200 rounded-full p-1 flex" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
                <div className="align-middle justify-center">
                    <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="onboarding" projectName="Next -> Onboarding " projectYear="2024" githubLink="" />
                    <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="partyrock" projectName="<- Back StudyParti " projectYear="2024" githubLink="" />
                </div>

            </section>
            <section className="min-h-full">
                <H1>Neumorphism</H1>
                <P>Study Buddy empowers students to stay on top of their coursework using the power of Artificial Intelligence.
                    This web application leverages AWS AI Party Rock&apos;s generative AI capabilities to automatically generate personalized notes and quizzes based on any topic you choose.
                    Simply enter your class subjects for the day, and Study Parti will create concise summaries and targeted questions to solidify your understanding.</P>
                <section className="min-h-screen px-4 py-8 flex flex-col justify-between">
                    <section className="w-full h-auto mb-8">
                        <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
                        <section className="w-full overflow-x-scroll justify-around md:flex gap-4">
                            <video
                                src="/hike.mp4"
                                muted
                                loop
                                autoPlay
                                height={220}
                                width={220}
                                playsInline
                                className="h-400 rounded-sm "
                            />
                            <video
                                src="/hike.mp4"
                                muted
                                loop
                                autoPlay
                                height={220}
                                width={220}
                                playsInline
                                className="h-400 rounded-sm "
                            />
                            <video
                                src="/hike.mp4"
                                muted
                                loop
                                autoPlay
                                height={220}
                                width={220}
                                playsInline
                                className="h-400 rounded-sm "
                            />
                        </section>
                    </section>
                    <h2 className="text-2xl font-bold mb-4 mt-10">Project Screenshots</h2>
                    <section className="md:flex md:justify-between sm:justify-between mb-10 overflow-x-scroll gap-4">
                        <Image
                            className="object-contain"
                            src="/neu1.png"
                            alt="home image"
                            layout="fixed"
                            width={220}
                            height={300}
                        />
                        <Image
                            className="object-contain"
                            src="/neu4.png"
                            alt="home image"
                            layout="fixed"
                            width={220}
                            height={300}
                        />
                        <Image
                            className="object-contain"
                            src="/neu5.png"
                            alt="home image"
                            layout="fixed"
                            width={220}
                            height={300}
                        />
                        <Image
                            className="object-contain"
                            src="/neu2.png"
                            alt="home image"
                            layout="fixed"
                            width={220}
                            height={300}
                        />
                        <Image
                            className="object-contain"
                            src="/neu3.png"
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

