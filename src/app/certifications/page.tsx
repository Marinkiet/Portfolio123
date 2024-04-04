import { H1 } from "@/components/UI/H1";
import { H2 } from "@/components/UI/H2";
import { P } from "@/components/UI/P";
import { Metadata } from "next";
import Image from "next/image";
import me from '../assets/me.jpeg'
import Navbar from "@/components/Navbar";
import Badge from "@/components/Cards/Badge";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - Certifications"
}

export default function Certifications() {
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

      <section className="flex justify-evenly flex-wrap md:mt-20">
        {/* Responsive grid */}
        <Badge imagePath="/FIRSTAID.png" badgeName="First Aid/Basic Life Support"/>
        <Badge imagePath="/SHEREP.png" badgeName="Health and Safety Represenatative"/>
        {/* <Badge imagePath="/earth.jpeg" badgeName="Earth hackathon"/> */}
        <Badge badgeLink="https://university.atlassian.com/student/award/h7UannJNRdj41qQSbtxaBM1J" imagePath="/CONFLUENCE.png" badgeName="JIRA Confluence"/>
        <Badge badgeLink="https://university.atlassian.com/student/award/Lv9FVP5N7ykzFmKNGaJ9dfvD" imagePath="/JIRA.png" badgeName="JIRA Fundamentals"/>
        <Badge badgeLink="https://university.atlassian.com/student/award/9BabmYqBXap2nkvPkGw3BzgQ" imagePath="/JIRASERV.png" badgeName="JIRA Service Management"/>
        <Badge badgeLink="https://bcert.me/bc/html/show-badge.html?b=shyxpnzy" imagePath="/CSM.png" badgeName="AWS Scrum Alliance Scrum Master"/>
        <Badge badgeLink="https://www.credly.com/badges/c19749e5-78b9-4516-9275-b180993b9083/public_url" imagePath="/FINOPS.png" badgeName="FINOPS"/>
        <Badge badgeLink="https://www.credly.com/badges/713c0689-4248-4b31-9ed7-59ab92484944/public_url" imagePath="/SAA.png" badgeName="AWS Solutions Architect"/>
        <Badge badgeLink="https://www.credly.com/badges/682dd95d-498d-44ca-a645-82ddda0cfce4/public_url" imagePath="/CPC.png" badgeName="AWS Cloud Practitioner"/>
        <Badge badgeLink="https://www.credly.com/badges/d4062d64-0294-411a-9aaf-96d938702a6c/public_url" imagePath="/AWSTECH.png" badgeName="AWS Technical Partner"/>
        <Badge badgeLink="https://www.credly.com/badges/a3fe851e-6151-4f20-9cd3-000ec251d1a5/public_url" imagePath="/AWSECO.png" badgeName="AWS Cloud Economics Partner"/>
        <Badge badgeLink="https://www.credly.com/badges/d9e929a4-115c-4117-bfbd-651bd0e519e0/public_url" imagePath="/AWSSALES.png" badgeName="AWS SALES Partner"/>
        {/* <Badge imagePath="/air2.png" badgeName="Air Quality hackathon"/> */}

      </section>

    </section>

  );
}

