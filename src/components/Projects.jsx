import ProjectCard from "./ProjectCard";
import shopyimg from "../assets/shopzy.png"
import passimg from "../assets/password_generator.png"

import Weatherimg from "../assets/weather.png"

import tikimg from "../assets/tik-tak-toe.png"

import gifimg from "../assets/gif_generator.png"




function Project() {
  const project_data = [
    {
      id: "1",
      name: "Shopzy App",
      img: shopyimg,
      description:"Tech Stack used: React.js | JavaScript | HTML | CSS | Redux The website consists of two pages, the homepage which displays a list of products, and the cart page which displays the selected product details and the summary of the total shopping amount Integrated an API to fetch products from fake store api and used Redux for easy state management",
      gitid : "https://github.com/AmanSingh6574/Shopzy_App"
        
        
    },
    {
      id: "2",
      name: "Weather Application",
      img: Weatherimg,
      description:
        "Developed this application using Javascript and Progressive Web App (PWA) technologies which fetches data from OpenWeather API. The application provides users with real-time weather information for their current location or any location in the world. The user have to grant acces for their current location to see the weather conditions.",
      gitid : "https://github.com/AmanSingh6574/Weather-App",
      link :"https://cosmic-platypus-62ed6a.netlify.app"
    },

    {
      id: "3",
      name: "tic-tac-toe-game ",
      img: tikimg,
      description:
        "This is a simple game of Tic-Tac-Toe built with HTML, CSS, and JavaScript",
        gitid:"https://github.com/AmanSingh6574/tic-tac-toe-game",
        link:"https://steady-llama-8085e6.netlify.app/"
    },
    {
      id: "4",
      name: "Password Generator ",
      img: passimg,
      description:
        "Generates the password automatically according to the given conditions such as include uppercase, lowercase letters, no of password required, etc. It also checks for the strength of the password generated and indicates it with green and red colors.",
        gitid:"https://github.com/AmanSingh6574/Password-Generator",
        link:"https://gleeful-dolphin-629efe.netlify.app"
    },
    {
      id: "5",
      name: "GIF Generator ",
      img: gifimg,
      description:
        "Tech Stack used: React.js | JavaScript | HTML. it generates Gif Randomly or by giving some instructions , used Giphy AIP to fecth the data from the server ",
        gitid:"https://github.com/AmanSingh6574/Random-Gif-Generator",
        link:"https://frabjous-semifreddo-487fed.netlify.app"
    },
  ];
  return (
    <div name="Projects" className="mt-10  w-full  mx-auto">
      <div className="mx-auto max-w-screen-lg w-full h-full justify-center items-center sm:mt-0 mt-44 p-4">

        <div >
          <h1  className=" mt-9 text-4xl font-bold inline border-b-4 border-gray-500 w-44">
            Projects
          </h1>
        </div>
          <p className=" mt-6 text-2xl text-gray-700 font-bold " >Check Out some of my Work. </p>

        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0 justify-center items-center justify-items-center mt-10">
          {project_data.map((item) => {
            return <ProjectCard item={item} key={item.id}></ProjectCard>;
          })}
        </div>

      </div>
    </div>
  );
}

export default Project;
