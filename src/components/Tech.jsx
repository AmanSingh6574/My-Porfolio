import React from "react";
import html from "../assets/stack/HTML.png";
import tailwind from "../assets/stack/Tailwind.png";
import css from "../assets/stack/CSS.png";
import javascript from "../assets/stack/Javascript.svg";
import express from "../assets/stack/Express.png";
import NodeJs from "../assets/stack/NodeJs.svg";
import MongoDB from "../assets/stack/MongoDB.svg";
import Redux from "../assets/stack/Redux.svg";
import Vercel from "../assets/stack/Vercel.svg";

function Tech() {
  return (
    <div name="tech-stack" className="w-full min-h-screen mx-auto text-center p-4 flex flex-col justify-center items-center">
      <div className="mt-8 md:mt-16 max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 w-44">
          Tech Stack
        </h1>
        <div className="mt-8 lg:mt-16 flex flex-wrap gap-10 justify-center items-center text-center mx-aut0 bg-slate-100 p-8 rounded-lg shadow-lg">
          <div className="md:w-[500px]">
            <p className="text-center lg:text-left text-gray-800">
              My tech stack includes MongoDB for efficient database management,
              Express.js for fast and flexible APIs, and React.js for
              interactive user interfaces. I work with Node.js for server-side
              operations. To maintain clean UI design, I use Tailwind CSS. This
              diverse stack empowers me to create cutting-edge web applications
              with seamless user experiences.
            </p>
          </div>
          <div className="w-full md:w-[400px] grid grid-cols-3 self-center place-content-center p-4 mx-auto gap-4">
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={html}
              alt="HTML"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={css}
              alt="CSS"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={javascript}
              alt="JavaScript"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={express}
              alt="Express.js"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={tailwind}
              alt="Tailwind CSS"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={NodeJs}
              alt="Node.js"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={MongoDB}
              alt="MongoDB"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={Redux}
              alt="Redux"
            />
            <img
              className="w-[80px] h-[80px] hover:scale-110 transition-transform"
              src={Vercel}
              alt="Vercel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
