import { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";
import Certificates from "./Certificates";
import Strengths from "./Strengths";
import Interests from "./Interests";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // add visible class
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="hero">
        <h1>Charan Portfolio</h1>
        <p>Full Stack Developer | React + FastAPI</p>
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Education/>
        <Projects /> {/* Projects is now a section */}
        <Certificates/>
        <Interests/>
        <Strengths/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;