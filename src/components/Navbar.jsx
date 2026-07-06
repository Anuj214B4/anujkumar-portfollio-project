import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const sections = [
  "hero",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleScroll("hero")}
          className="text-2xl font-bold px-3 py-1 rounded-lg border border-sky-400/30 bg-white/5 backdrop-blur-sm hover:bg-sky-400/10 transition-all duration-300"
        >
          <span className="text-sky-400">&lt;</span>
          <span className="text-white"> Anuj </span>
          <span className="text-sky-400">/&gt;</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href.substring(1))}
              className={`relative pb-1 transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-sky-400"
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 bottom-0 h-[2] bg-sky-400 transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } bg-slate-900/95 backdrop-blur-lg`}
      >
        <nav className="flex flex-col py-4">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href.substring(1))}
              className={`text-left px-6 py-3 transition ${
                activeSection === item.href.substring(1)
                  ? "text-sky-400 bg-slate-800"
                  : "hover:bg-slate-800"
              }`}
            >
              {item.name}
            </button>
          ))}

          <div className="flex gap-6 px-6 py-5 text-2xl">
            <a
              href="https://github.com/Anuj214B4"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/anuj-kumar-b793b6273/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="px-6">
            <a
              href="/ANUJ_KUMAR.pdf"
              download
              className="block text-center bg-sky-500 hover:bg-sky-600 rounded-lg py-3 transition"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
