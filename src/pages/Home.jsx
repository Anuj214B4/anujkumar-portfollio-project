import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Educations from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Home = () => {
  return (
    <>
      <ScrollProgress />
      <main className="bg-slate-900 text-white min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Educations />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
