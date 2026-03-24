import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

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
import ProjectDetails from "./ProjectDetails";


// 🔥 Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


// 🔥 Home Page Component
function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />

      <header className="hero">
        <h1>Charan Portfolio</h1>
        <p>Full Stack Developer | React + FastAPI</p>
      </header>

      <main>
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Interests />
        <Strengths />
        <Contact />
      </main>

      <Footer />
    </>
  );
}


// 🔥 Main App
function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ scroll fix */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;