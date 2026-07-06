import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skillCategories } from "../models/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I use to build scalable backend systems and responsive web applications."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl border border-slate-700 p-8"
            >
              <h3 className="text-2xl font-bold text-sky-400 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                              flex items-center
                              gap-2 sm:gap-4
                              rounded-xl
                              bg-slate-900
                              p-3 sm:p-4
                              hover:bg-slate-700
                              transition
                              duration-300
                              "
                    >
                      <Icon className="text-xl sm:text-3xl text-sky-400 shrink-0" />

                      <span className="text-sm sm:text-base font-medium leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
