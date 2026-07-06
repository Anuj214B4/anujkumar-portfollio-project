import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaJava, FaReact, FaDatabase, FaServer } from "react-icons/fa";

const highlights = [
  {
    icon: <FaJava size={30} />,
    title: "Java",
    description:
      "Strong foundation in Core Java, OOP, Collections and Java 8+.",
  },
  {
    icon: <FaServer size={30} />,
    title: "Spring Boot",
    description: "REST APIs, Spring Security, JWT Authentication & Hibernate.",
  },
  {
    icon: <FaReact size={30} />,
    title: "React",
    description: "Responsive frontend using React, Vite and Tailwind CSS.",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "MySQL",
    description: "Database design using MySQL, JPA and Hibernate ORM.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Backend-focused developer passionate about building scalable and secure web applications."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Java & Spring Boot Developer
            </h3>

            <p className="text-slate-300 leading-8">
              I am a Computer Science graduate passionate about backend
              engineering and full-stack development. My primary focus is
              building scalable REST APIs with Java, Spring Boot, Spring
              Security, JWT Authentication, and MySQL.
            </p>

            <p className="text-slate-300 leading-8 mt-6">
              I enjoy solving real-world problems, writing clean code, designing
              maintainable architectures, and creating responsive frontend
              applications using React and Tailwind CSS.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="text-sky-400 font-semibold">Name</h4>

                <p>Anuj Kumar</p>
              </div>

              <div>
                <h4 className="text-sky-400 font-semibold">Location</h4>

                <p>Faridabad, Haryana</p>
              </div>

              <div>
                <h4 className="text-sky-400 font-semibold">Qualification</h4>

                <p>B.Tech CSE</p>
              </div>

              <div>
                <h4 className="text-sky-400 font-semibold">Focus</h4>

                <p>Backend Development</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-sky-400 transition duration-300"
              >
                <div className="text-sky-400 mb-4">{item.icon}</div>

                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>

                <p className="text-slate-400 text-sm leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-sky-400">2+</h2>
            <p className="mt-2 text-slate-400">Major Projects</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-sky-400">10+</h2>
            <p className="mt-2 text-slate-400">Technologies</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-4xl font-bold text-sky-400">2025</h2>
            <p className="mt-2 text-slate-400">Graduate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
