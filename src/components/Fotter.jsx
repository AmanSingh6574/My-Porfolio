import {BsLinkedin , BsTwitter , BsGithub} from "react-icons/bs"
import {SiGeeksforgeeks ,SiLeetcode} from "react-icons/si"
import { Link } from "react-scroll";

function Fotter() {
    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-800">
            <div class="footer-container flex flex-wrap gap-4 sm:justify-between justify-center items-center mx-auto text-center mb-4">
                <div class="footer-logo">
                    <h1 className="text-transparent text-xl font-bold bg-clip-text bg-gradient-to-b from-white to-purple-600">My Portfolio</h1>
                </div>

                <div class="footer-social">
                    <ul>
                        <li className="hover:scale-110 transition-all duration-300 "><a href="https://www.linkedin.com/in/aman-singh-aa6073247/" target="_blank"><BsLinkedin size={25}/></a></li>
                        <li className="hover:scale-110 transition-all duration-300 "><a href="https://twitter.com/AMAN43589925" target="_blank"><BsTwitter size={25}/></a></li>
                        <li className="hover:scale-110 transition-all duration-300 "><a href="https://github.com/AmanSingh6574" target="_blank"><BsGithub size={25}/></a></li>
                        <li className="hover:scale-110 transition-all duration-300 "><a href="https://auth.geeksforgeeks.org/user/amansinxh3o/practice" target="_blank"><SiGeeksforgeeks size={25}/></a></li>
                        <li className="hover:scale-110 transition-all duration-300 "><a href="https://leetcode.com/AmanSingh6574/" target="_blank"><SiLeetcode size={25}/></a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-links">
                <ul className="flex flex-col gap-4 flex-wrap cursor-pointer">
                    <Link to="Home"> Home </Link>
                    <Link to="About"> About </Link>
                    <Link to="tech-stack"> Tech </Link>
                    <Link to="Projects"> Projects </Link>
                </ul>
            </div>

            <div class="footer-line" ></div>

            <div class="footer-bottom">
                <div>
                    <p>All rights reserved. &copy; 2023 Portfolio</p>
                </div>
                <div class="footer-git">
                    <p>Designed by <a href="https://www.linkedin.com/in/aman-singh-aa6073247/" target="_blank">Aman Singh</a></p>
                </div>

            </div>

        </footer>
    );
}

export default Fotter;