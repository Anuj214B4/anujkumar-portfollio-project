import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
      >
        <div className="relative">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="rounded-t-2xl"
          >
            {project.images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[450px] object-"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-10 bg-slate-900/80 hover:bg-red-500 transition p-3 rounded-full"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-4xl font-bold text-sky-400">{project.title}</h2>

          <p className="mt-6 text-slate-300 leading-8">{project.description}</p>

          <h3 className="text-2xl font-semibold mt-10">Architecture</h3>

          <ul className="mt-5 space-y-3">
            {project.architecture.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mt-10">Features</h3>

          <div className="grid md:grid-cols-2 gap-4 mt-5">
            {project.features.map((feature) => (
              <div key={feature} className="bg-slate-800 rounded-lg p-3">
                {feature}
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-10">Technologies</h3>

          <div className="flex flex-wrap gap-3 mt-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-10 flex-wrap">
            {project.githubFrontend && (
              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl
                      bg-gradient-to-r from-slate-700 to-slate-800
                      hover:from-sky-600 hover:to-cyan-600
                      transition-all duration-300 hover:scale-105"
              >
                <FaGithub />
                Frontend
              </a>
            )}

            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl
                      bg-gradient-to-r from-slate-700 to-slate-800
                      hover:from-sky-600 hover:to-cyan-600
                      transition-all duration-300 hover:scale-105"
              >
                <FaGithub />
                Backend
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="bg-sky-500 px-5 py-3 rounded-xl flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
