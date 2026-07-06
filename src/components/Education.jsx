import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

import SectionTitle from "./SectionTitle";

import education from "../models/education";
import certifications from "../models/certifications";
import { RiCertificate2Fill } from "react-icons/ri";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Education & Certifications"
          subtitle="My academic journey and professional learning."
        />

        {/* Education */}

        <div className="relative border-l-2 border-sky-500 ml-4">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="mb-12 ml-10 relative"
            >
              <div className="absolute -left-15 bg-sky-500 rounded-full p-3">
                <FaGraduationCap />
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <span className="text-sky-400 font-semibold">{item.year}</span>

                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                <p className="text-slate-300 mt-2">{item.institute}</p>

                <p className="text-slate-400">{item.location}</p>

                <p className="text-sky-400 mt-2">Score : {item.score}</p>

                <p className="text-slate-400 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">
            Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-slate-800 rounded-2xl border border-slate-700 p-8 text-center"
              >
                <RiCertificate2Fill className="mx-auto text-5xl text-sky-400 mb-5" />

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="text-slate-400 mt-3">{item.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
