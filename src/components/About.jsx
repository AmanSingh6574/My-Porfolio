
import collegeimg from "../assets/vjti.jpg";
function About() {


  return (
    <div
      name="About"
      className="w-full min-h-screen mx-auto p-4 flex flex-col justify-center items-center "
    >
      <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 w-44" >Overview</h1>
      <div className="text-cente mt-[60px] lg:mt-16 flex flex-wrap gap-10 justify-center items-center mx-auto ">
        <div className="w-[300px] md:w-[500px] flex flex-col flex-wrap gap-3 p-2 items-center">
          <p className="text-center leading-relaxed lg:text-left">
            Greetings! I am Aman Singh, presently in the 
            concluding phase of my Bachelor's Degree at VJTI, 
            specializing in Electronics and Telecommunication, 
            and holding a current CGPA of 7.85. My enthusiasm is 
            deeply rooted in software development and contributing to 
            open source projects, particularly in the realm of full stack 
            development
          </p>
          <p className="text-center leading-relaxed lg:text-left">
            As a problem solver, I am dedicated to overcoming challenges and
            finding innovative solutions. I believe in the power of hard work
            and continuously strive for excellence in my work.
          </p>
        </div>
        <div className="mx-auto mt-7 md:mt-0 sm:w-[400px] ">
          <img
            src={collegeimg} loading="lazy"
            className="w-full rounded-md mx-auto lg:mx-0 hover:scale-105 transition-all duration-500 "
            alt="College"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
