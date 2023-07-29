// import {BsGithub} from "react-icons/bs"

// function ProjectCard({ item }) {

//   return (
//     <div className="flex  relative bg-tertiary flex-col mb-10 gap-4 w-[320px] rounded-2xl  justify-center items-center p-4 h-[400px]">
//       <div>
//         <a name={item.name} target="_blank" href={item.link}> <img
//           src={item.img}
//           loading="lazy"
//           className="cursor-pointer rounded-2xl h-42 items-center text-center justify-center hover:scale-105 duration-200"
//           alt="not found"
//         /></a>
//         <a name={item.name} target="_blank" href={item.gitid} ><BsGithub size={40} className="absolute hover:scale-105 bg-black rounded-full duration-200 top-2 right-4 cursor-pointer"/></a>
//       </div>

//       <div>
//         <h1 className="font-semibold text-xl font-mono">{item.name}</h1>
//       </div>

//       <div className=" h-[100px] text-left ">
//         <p className="text-sm text-gray-300 ">
//           {item.description.split(" ").slice(0, 20).join(" ") + "..."}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

import React from "react";

function ProjectCard({ item }) {
  return (
    <div className="max-w-md mx-auto  rounded overflow-hidden mb-8">
      <img
        className="w-full h-44 object-cover hover:scale-105 transition-all duration-500"
        src={item.img}
        alt={item.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-400 text-center text-sm">
          {" "}
          {item.description.split(" ").slice(0, 30).join(" ") + "..."}
        </p>
      </div>
      <div className="px-6 py-4 flex flex-wrap gap-4 justify-center ">
        <a
          href={item.gitid}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-100 text-white font-bold py-2 px-4 rounded-full"
        >
          View Code
        </a>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 transition-all duration-100 text-white font-bold py-2 px-4 rounded-full"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
