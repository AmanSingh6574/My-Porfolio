import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link} from "react-scroll";

function Navbar() {
  const [nav, setnav] = useState(true);
 
  return (
    <div className="flex md:justify-around justify-between items-center fixed backdrop-blur-xl w-full h-20 text-white z-20 px-4">
      <Link to="Home"><h1 className="cursor-pointer shadow-gray-800 shadow-xl no-border font-signature text-5xl ml-2 rounded-full ">Aman</h1></Link>

      <div className="hidden md:flex   ">
        <ul className="px-4 font-semibold text-lg cursor-pointer capitalize hover:scale-125 duration-200">
          <Link to="About" >
            About
          </Link>
        </ul>
        <ul className="px-4 font-semibold text-lg cursor-pointer capitalize hover:scale-125 duration-200">
          <Link to="Projects">
            Projects
          </Link>
        </ul>
        <ul className="px-4 font-semibold text-lg cursor-pointer capitalize hover:scale-125 duration-200">
          <Link to="Contact">
            Contact
          </Link>
        </ul>
      </div>

      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {!nav && (
        <ul 
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full
      h-screen bg-gradient-to-b from-black to-gray-800 md:hidden "
        >
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500  font-bold opacity-90">
            <Link onClick={()=>{setnav(!nav)}} to="About" >
              About{" "}
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 font-bold opacity-80">
            <Link onClick={()=>{setnav(!nav)}} to="Projects" >
              Projects
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 font-bold opacity-75">
            <Link onClick={()=>{setnav(!nav)}} to="Contact" >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
