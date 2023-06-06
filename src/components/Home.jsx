import myimg from "../assets/myimg.jpg";

import { FaArrowRight } from "react-icons/fa";
import Loader from "./Loader";


function Home() {
  

  return (
    <div  name="Home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto  grid sm:grid-cols-2 px-4 justify-evenly items-start sm:items-center h-full  ">
        
        
        <div className="flex flex-col h-full justify-center mt-14 ">
          <span className="text-3xl font-bold sm:text-7xl ">
            Hi, I'm <span className="text-4xl sm:text-8xl text-[#915EEF]">Aman</span>
          </span>
          <span className="text-gray-500 text-2xl">I develop Attractive user</span>
          <span className="text-gray-500 text-2xl">interaces and web application</span>

          <div className="">
            <a name="resume" target="_blank" href="https://drive.google.com/file/d/1mIIoGwm00Edpiwp48rFk8pwqzAYsXhG0/view?usp=drive_link" className="flex group justify-start items-center  gap-3  w-fit py-3 cursor-pointer px-6 my-2 rounded-xl border">My Resume 
            <span className="group-hover:rotate-180 duration-300"><FaArrowRight /></span></a>
          </div>
        </div>

        <div className="mt-14">
          <img className="rounded-full mx-auto w-2/3 md:w-[350px]" src={myimg}  alt="not found"
          />
        </div>
        <Loader className="" />

      </div>

      

      
    </div>
  );
}

export default Home;
