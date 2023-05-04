import {BsGithub} from "react-icons/bs"

 
function ProjectCard({ item }) {

  return (
    <div className="flex  relative bg-tertiary flex-col mb-10 gap-4 w-[320px] rounded-2xl  justify-center items-center p-4 h-[400px]">
      <div>
        <a name={item.name} target="_blank" href={item.link}> <img
          src={item.img}
          loading="lazy"
          className="cursor-pointer rounded-2xl h-42 items-center text-center justify-center hover:scale-105 duration-200"
          alt="not found"
        /></a>
        <a name={item.name} target="_blank" href={item.gitid} ><BsGithub size={40} className="absolute hover:scale-105 bg-black rounded-full duration-200 top-2 right-4 cursor-pointer"/></a>
      </div>

      <div>
        <h1 className="font-semibold text-xl font-mono">{item.name}</h1>
      </div>

      <div className=" h-[100px] text-left ">
        <p className="text-sm text-gray-300 ">
          {item.description.split(" ").slice(0, 20).join(" ") + "..."}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
