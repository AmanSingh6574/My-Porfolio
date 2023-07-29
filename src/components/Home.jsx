import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Loader from "./Loader";
import myimg from "../assets/myimg.jpg";

function Home() {
  return (
    <div
      name="Home"
      className="min-h-screen mx-auto w-full flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg grid sm:grid-cols-2 p-4 justify-between items-start sm:items-center">
        <div className="flex flex-col h-full justify-center mt-14 space-y-4 sm:space-y-6 text-center sm:text-left">
          <h1 className="text-5xl font-bold sm:text-6xl">
            Hi, I'm{"  "}
            <span className="font-extrabold text-transparent text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-yellow-600 to-red-400">
            Aman
            </span>
          </h1>
          <code className="text-gray-500 text-2xl sm:text-3xl">
          &lt;I develop attractive user interfaces and web applications/&gt;
          </code>

          <div className="w-fit mx-auto sm:mx-0">
            <a
              name="resume"
              target="_blank"
              href="https://drive.google.com/file/d/1Zwd_tbzXrZBvTjKbo1zQXfQ9eHiYPuja/view?usp=sharing"
              className="flex group justify-start items-center gap-3  w-fit py-3 cursor-pointer px-6 my-2 rounded-xl border"
            >
              My Resume{" "}
              <span className="group-hover:rotate-180 duration-300">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-14 md:mt-0">
          <img
            className="rounded-full mx-auto w-2/3 md:w-[350px]"
            loading="lazy"
            src={myimg}
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
