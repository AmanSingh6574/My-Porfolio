// import ProjectCard from "./ProjectCard";
// import shopyimg from "../assets/shopzy.png";
// import tour from "../assets/tour.png";
// import connectimg from "../assets/connect-app.png";
// import pdfimg from "../assets/PDF.png";
// function Project() {
//   const project_data = [
//     {
//       name: "Social Networking Web App",
//       img: connectimg,
//       description:
//         " A vibrant full-stack web application fostering meaningful connections, featuring JWT-powered user authentication for security.Implemented Cloudinary for seamless media uploads and storage, enabling users to share captivating images and videos within the community, enhancing interactivity and content creation. Utilized responsive design principles to ensure the app’s adaptability across various devices",
//       gitid: "https://github.com/AmanSingh6574",
//       link: "https://connect-social-networking-app.onrender.com/",
//     },
//     {
//       name: "Automated PDF Generator Website",
//       img: pdfimg,
//       description:
//         "Developed a web application that simplifies the document submission process for any company. Users can input work details and upload images to generate PDFs directly. Utilized the inherent capabilities of web browsers to implement the required functions.",
//       gitid: "https://github.com/AmanSingh6574/Site-Report",
//     },
//     {
//       name: "Shopzy App",
//       img: shopyimg,
//       description:
//         "Tech Stack used: React.js | JavaScript | HTML | CSS | Redux The website consists of two pages, the homepage which displays a list of products, and the cart page which displays the selected product details and the summary of the total shopping amount Integrated an API to fetch products from fake store api and used Redux for easy state management",
//       gitid: "https://github.com/AmanSingh6574/Shopzy-App",
//       link:"https://main--bespoke-pony-3956e6.netlify.app/"
//     },
//     {
//       name: "Tour Guide Website",
//       img: tour,
//       description:
//         "Its a Frontend Project. Tech Stack used: React.js | JavaScript | HTML.The website is mobile and desktop responsive and consists of different sections like about , service , contact and Signup",
//       gitid: "https://github.com/AmanSingh6574/Tour-Guide-Website",
//       link: "https://gleaming-mermaid-6f5449.netlify.app/",
//     },
 
  
//   ];
//   return (
//     <div
//       name="Projects"
//       className="w-full min-h-screen mx-auto p-4 flex flex-col justify-center items-center "
//     >
//       <div className=" mt-[70px] max-w-screen-lg mx-auto text-center">
//         <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 w-44 ">
//           Projects
//         </h1>

//         <p className=" mt-6 text-2xl text-gray-700 font-bold ">
//           Check Out some of my Work.{" "}
//         </p>

//         <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0 justify-center mt-10">
//           {project_data.map((item , index) => {
//             return <ProjectCard item={item} key={index}></ProjectCard>;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Project;



import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCarousel from "./ProjectCarousel";
import shopyimg from "../assets/shopzy.png";
import tour from "../assets/tour.png";
import connectimg from "../assets/connect-app.png";
import pdfimg from "../assets/PDF.png";

function Project() {
  const projectData = [
    {
      name: "Social Networking Web App",
      img: connectimg,
      description:
        "A vibrant full-stack web application fostering meaningful connections, featuring JWT-powered user authentication for security. Implemented Cloudinary for seamless media uploads and storage, enabling users to share captivating images and videos within the community, enhancing interactivity and content creation. Utilized responsive design principles to ensure the app’s adaptability across various devices",
      gitid: "https://github.com/AmanSingh6574",
      link: "https://connect-social-networking-app.onrender.com/",
    },
    {
      name: "Automated PDF Generator Website",
      img: pdfimg,
      description:
        "Developed a web application that simplifies the document submission process for any company. Users can input work details and upload images to generate PDFs directly. Utilized the inherent capabilities of web browsers to implement the required functions.",
      gitid: "https://github.com/AmanSingh6574/Site-Report",
    },
    {
      name: "Shopzy App",
      img: shopyimg,
      description:
        "Tech Stack used: React.js | JavaScript | HTML | CSS | Redux The website consists of two pages, the homepage which displays a list of products, and the cart page which displays the selected product details and the summary of the total shopping amount Integrated an API to fetch products from fake store api and used Redux for easy state management",
      gitid: "https://github.com/AmanSingh6574/Shopzy-App",
      link: "https://shopzy.onrender.com/",
    },
    {
      name: "Tour Guide Website",
      img: tour,
      description:
        "Its a Frontend Project. Tech Stack used: React.js | JavaScript | HTML.The website is mobile and desktop responsive and consists of different sections like about , service , contact and Signup",
      gitid: "https://github.com/AmanSingh6574/Tour-Guide-Website",
      link: "https://gleaming-mermaid-6f5449.netlify.app/",
    },
  ];

  return (
    <div name="Projects" className="w-full min-h-screen mx-auto p-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 w-44 mt-9">Projects</h1>
      <p className="mt-6 text-2xl text-gray-700 font-bold">Check Out some of my Work.</p>

      <div className=" w-full lg:max-w-screen-lg mx-auto mt-10">
        <ProjectCarousel projectData={projectData} />
      </div>
    </div>
  );
}

export default Project;

