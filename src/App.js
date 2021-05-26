import "./App.css";
import style from "./app.module.css";
import NavBar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
