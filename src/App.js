import React, { useEffect, useState } from "react";
import style from "./app.module.css";
import NavBar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Loader from "./components/Loader/Loader";
import "./App.css";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let interval = null;
    console.log("entre al usefect");
    interval = setTimeout(() => {
      setLoader(true);
    }, 1500);

    return () => {
      clearInterval(interval);
      setLoader(false);
    };
  }, []);
  return (
    <div>
      {!loader ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <div className={style.contentContainer}>
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
