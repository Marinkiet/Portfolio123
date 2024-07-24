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
                <Link className="hover:bg-purple-200 rounded-full p-1 flex" href={"/"}><Lamp size={30} color="#a855f7"></Lamp></Link>
                <div className="align-middle justify-center">
                    <ProjectButton nextStyle="hover:bg-green-100 rounded-lg hover:shadow-md" projectLink="onboarding" projectName="Next -> Onboarding " projectYear="2024" githubLink="" />
                    <ProjectButton nextStyle="hover:bg-gray-100 rounded-lg hover:shadow-md" projectLink="partyrock" projectName="<- Back StudyParti " projectYear="2024" githubLink="" />
                </div>

            </section>
            <section className="min-h-full">
               
                <H1>Neumorphism</H1>
                <br />
                <P>Neumorphism creates a soft, almost carved impression by using subtle highlights and insets. Imagine pressing a button softly into a background.</P>
                <br />
                <hr />
                <br />
                <P> Music App:
                    Background: Use a neutral, light background for a clean and airy feel.
                    Elements: For buttons, album covers, and sliders, create a raised effect with a slightly lighter shade towards the top and a slightly darker shade towards the bottom. This simulates a soft bulge without harsh shadows.
                    Icons: Employ two-toned icons with a lighter primary color and a slightly darker secondary color for depth.
                    Playback bar: Use a progress bar with a slightly raised base and a lighter colored progress indicator for a smooth, continuous look</P>
                <br />
                <hr />
                <br />
                <P>Smart Home Controls:

                    Background: Consider a slightly darker background for a more sophisticated look.
                    Tiles: Design individual control tiles with a subtle raised effect using lighter and darker tones.
                    Icons: Similar to the music app, use two-toned icons for depth within the tiles.
                    Status Indicators: For lights, thermostats, etc., create toggles or buttons that shift color (e.g., blue for cool, orange for warm) to indicate status without needing contrasting shadows.</P>

                <section className="min-h-screen px-4 py-8 flex flex-col justify-between">
                    <section className="w-full h-auto mb-8">
                        <h2 className="text-2xl font-bold mb-4">Project Demo</h2>
                        {/* <section className="w-full overflow-x-scroll justify-around md:flex gap-4">
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
                        </section> */}
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

