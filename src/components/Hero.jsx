import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-slate-900 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sky-400 text-lg font-semibold">Hello, I'm</p>

            <h1
              className="text-5xl lg:text-7xl font-bold mt-3"
              style={{ fontFamily: "Poppins" }}
            >
              Anuj Kumar
            </h1>

            <TypeAnimation
              sequence={[
                "Java Backend Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="h2"
              repeat={Infinity}
              className="text-2xl mt-6 text-sky-400 font-semibold"
            />

            <p className="text-slate-400 leading-8 mt-8 max-w-xl">
              Passionate Computer Science graduate specializing in Java, Spring
              Boot, REST APIs, Spring Security, JWT Authentication, React, and
              MySQL. I enjoy designing scalable backend systems and building
              modern web applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="public\ANUJ_KUMAR.pdf"
                download
                className="border border-sky-500 px-6 py-3 rounded-xl hover:bg-sky-500 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 mt-10 text-3xl">
              <a
                href="https://github.com/Anuj214B4"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/anuj-kumar-b793b6273/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-sky-500 blur-3xl opacity-20 absolute"></div>

              <img
                src="src\assets\images\profile.png"
                alt="Anuj Kumar"
                className="relative w-80 h-80 object-fill rounded-full border-4 border-sky-500 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
