import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import projects from "../models/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModel";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Projects"
          subtitle="Some of my recent work and backend applications."
        />

        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}

              <div className="overflow-hidden rounded-2xl border border-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-[500] object-contain rounded-2xl"
                />
              </div>

              {/* Content */}

              <div>
                <h3 className="text-4xl font-bold text-sky-400">
                  {project.title}
                </h3>

                <p className="text-slate-300 mt-6 leading-8">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500 text-sky-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {project.features.map((feature) => (
                    <div key={feature} className="bg-slate-800 rounded-lg p-3">
                      ✓ {feature}
                    </div>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 mt-10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl
                      bg-gradient-to-r from-slate-700 to-slate-800
                      hover:from-sky-600 hover:to-cyan-600
                      transition-all duration-300 hover:scale-105"
                  >
                    View Details
                  </button>

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
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
