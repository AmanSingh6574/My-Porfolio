import { Link } from "react-scroll";

function Loader() {
    return ( 
        <div className="cursor-pointer hidden lg:block">

            <Link to="About" className="loader"></Link>
        </div>
     );
}

export default Loader;
