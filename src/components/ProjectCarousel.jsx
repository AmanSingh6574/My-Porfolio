import React from "react";
import ProjectCard from "./ProjectCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectCarousel({ projectData }) {
  const responsiveConfig = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      emulateTouch={true}
      showStatus={false}
      responsive={responsiveConfig}
    >
      {projectData.map((item, index) => (
        <div key={index} className="flex justify-center">
          <ProjectCard item={item} />
        </div>
      ))}
    </Carousel>
  );
}

export default ProjectCarousel;
