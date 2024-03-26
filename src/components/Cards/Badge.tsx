import { H1 } from "@/components/UI/H1";
import { H2 } from "@/components/UI/H2";
import { H3 } from "@/components/UI/H3";
import { Metadata } from "next";
import Image from "next/image";
import me from '../assets/me.jpeg'
import Navbar from "@/components/Navbar";

//page specifuic metadata
export const metadata: Metadata = {
  title: "Marinkie Thupi - Certifications"
}

export default function Badge(props:any) {
  return (
   
        <div className="relative p-2">
        <a className="hover:cursor-pointer" href={props.badgeLink} target="_blank" rel="noopener noreferrer">
         <Image
            className=" w-50 h-50 p-1"
            src={props.imagePath}
            alt={props.badgeName}
            layout="fixed" // Maintain aspect ratio
            width={250}
            height={250}
          />
         </a>
        </div>


  );
}

