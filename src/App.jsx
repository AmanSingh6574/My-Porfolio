import "./App.css";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Tech from "./components/Tech";
import Fotter from "./components/Fotter";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Tech/>
      <Project />
      <Contact /> 
      <Fotter/>
    </div>
  );
}

export default App;
