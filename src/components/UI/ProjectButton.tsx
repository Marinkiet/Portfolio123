
import { H2 } from "@/components/UI/H2";
import { Github } from 'lucide-react';



export default function ProjectButton(props:any) {
  // const [isVideoVisible, setIsVideoVisible] = useState(false);

  // const handleButtonClick = () => {
  //   setIsVideoVisible(true);
  // };
  return (
    <section className="flex justify-center items-center px-1">
      <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
  <Github size={30} color="#9ca3af" className="hover:cursor-pointer hover:bg-slate-200 rounded-full p-1"  />
</a>
      <h2 className="text-zinc-600 hover:rounded-lg hover:shadow-md px-5 py-1 hover:bg-white hover:cursor-pointer">{props.projectName}<span className="text-gray-400"> {props.projectYear}</span></h2>
      
    </section>
  );
}

