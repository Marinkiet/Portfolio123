import { H1 } from "@/components/UI/H1";
import { H3 } from "@/components/UI/H3";

import { P } from "@/components/UI/P";
import { Metadata } from "next";
import Image from "next/image";
import me from '../assets/me.jpeg'
import Navbar from "@/components/Navbar";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - About Marinkie"
}


export default function About() {
  return (
    <section className=" space-y-16 px-1 py-8 flex justify-center flex-col sm:flex-row-reverse sm:justify-between md:flex-col">
      {/* for mobile set 1 column then 670px and obove set 2 column layout  */}
      <section className="grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="  space-y-3 mb-5  bg-[url('/background.png')] bg-no-repeat bg-cover bg-center">
          <H1 className="  text-center sm:text-start">Hello, I&apos;m Marinkie Thupi</H1>
          <p className="  text-center sm:text-start">Full Stack Developer: No layer left <span className="text-purple-500">unturned.</span></p>
          <Navbar />
        </div>
      </section>
      <section>
        <H1 className="font-extrabold">I am passionate about creating all things new from<span className="font-thin italic"> what I learn.</span></H1>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 overflow-y-scroll justify-items-center px-2 lg:px-80 md:px-50">

        {/* Responsive grid */}


          <div>
          <Image
            src={"/me.jpeg"}
            alt="photo of me"
            height={400}
            width={300}
            className="object-cover shadow-md dark:border-foreground h-full w-full flex-shrink-0"
          />
         
          </div>
        <div >
          <H3>This is my story — From mountain trails to QWERTY with CMD+C & CMD+V.</H3>
        </div>


        <div >
          <H3>My background and software tingles</H3>
          <P>April of 2022, I graduated from Tshwane University of Technology as a software developer.
            There, I became fascinated by the inner workings of tech giants.
          </P>
          <br />
          <P>Witnessing the entire process, from conception to market, with a keen eye for future improvements, left me utterly captivated.</P>
        </div>
        <Image
          src={"/me.jpeg"}
          alt="photo of me"
          height={400}
          width={300}
          className="object-cover shadow-md dark:border-foreground h-full w-full"
        />


        <Image
          src={"/me.jpeg"}
          alt="photo of me"
          height={400}
          width={300}
          className="object-cover shadow-md dark:border-foreground h-full w-full"
        />
        <div >
          <H3>But I wanted more.</H3>
          <P>But, the academic spark wasn&apos;t enough. While I thrived on the creative freedom of university projects, the slow pace of real-world implementation frustrated me.
          </P>
          <br />
          <P>Coding intricate solutions in a classroom was thrilling, but the reach felt limited. </P>
          <br />
          <P>I craved the challenge of pushing code to production, seeing my designs impact a vast user base, and iterating at lightning speed. Here, in the fast-paced tech world, was the chance to make a real difference on a global scale. </P>
        </div>

        <div >
          <H3>The Cloud Whisperer Awakens.</H3>
          <P>The pandemic hit, and like many, I looked for new horizons. Hackathons became my battlegrounds, each a test of speed and innovation.
          </P>
          <br />
          <P>Here, I discovered the power of cloud development tools. AWS, in particular, became my gateway to building scalable solutions. Through countless challenges and thrilling victories, a developer reborn – a cloud whisperer emerged.</P>
        </div>
        <Image
          src={"/me.jpeg"}
          alt="photo of me"
          height={400}
          width={300}
          className="object-cover shadow-md dark:border-foreground h-full w-full"
        />

        <Image
          src={"/me.jpeg"}
          alt="photo of me"
          height={400}
          width={300}
          className="object-cover shadow-md dark:border-foreground h-full w-full"
        />
        <div >
          <H3>Making it all happen.</H3>
          <P>The WIL program became my coding bootcamp. It was there I discovered the thrill of working in a versatile team. One day I&apos;d be crafting product roadmaps, the next designing databases.
          </P>
          <br />
          <P>UI/UX design and coding became my twin sabers, forging stunning interfaces and their underlying logic. Cloud services became my allies, enabling scalable solutions.  </P>
          <br />
          <P>Currently, tech support offered a window into the hearts of users, their needs fueling my passion to build even better experiences.</P>
        </div>

        <div >
          <H3>In my spare time.</H3>
          <P>You might find me lost in a world of creation. Whether it&apos;s wielding brushes and paints, capturing moments through sketches, or scaling new heights on a hike, I crave exploration. </P>
          <br />
          <P>A good book is a constant companion, and fueling my developer mind are TEDx talks, online tutorials, and even random lectures from around the globe. There&apos;s always something new to learn, and YouTube is my gateway to endless knowledge.</P>
          <br />
          <P>But let&apos;s be honest, sometimes you just gotta unwind. That&apos;s when I&apos;m scrolling through memes, taking pictures of all my wild adventures (hackathons included!), or hitting the mountains for a hike to clear my head.</P>
          <br />
          <P>Balance is key, and for me, that means embracing creativity, learning new things, and having a little fun along the way.</P>
        </div>
        <Image
          src={"/me.jpeg"}
          alt="photo of me"
          height={400}
          width={300}
          className="object-cover shadow-md dark:border-foreground h-full w-full"
        />
      </section>
      <H3>Thanks for stopping by.</H3>
      <hr></hr>
    </section>
  );
}

