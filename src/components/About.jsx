import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Cards from "./Cards";

function About() {
    const { ref, inView } = useInView({
        threshold: 0.3,
      });
    
      const animation = useAnimation();
    
      useEffect(() => {
        if (inView) {
          animation.start({
            x: 0,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.3,
            },
          });
        }
        if (!inView) {
          animation.start({ x: "-100vw" });
        }
      }, [inView]);


  return (
    <div name="About" className="w-full  ">
      <div ref={ref} className="flex flex-col p-4 mx-auto max-w-screen-lg w-full h-full justify-center ">
        <p className=" mb-9  text-3xl sm:mt-0 mt-11 hidden md:inline sm:text-7xl opacity-10 font-extrabold -z-30" >INTRODUCTION</p>
        <h1 className=" mt-9 text-4xl font-bold inline border-b-4 border-gray-500 w-44" >Overview</h1>
        <motion.p className="text-lg  leading-8 mt-14 -z-30  " animate={animation}>
          I'm a skilled Full Stack software developer with experience in
          JavaScript, and expertise in frameworks like React. I'm a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let's work together to bring your ideas to life!
        </motion.p>
        <Cards/>
      </div>
    </div>
  );
}

export default About;
