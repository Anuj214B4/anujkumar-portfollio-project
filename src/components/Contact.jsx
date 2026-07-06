import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "anujkumar.x461@gmail.com",
    link: "mailto:anujkumar.x461@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 9693399082",
    link: "tel:+919693399082",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Current Location",
    value: "Faridabad, Haryana",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Let's Connect"
          subtitle="Open to Software Engineer, Java Backend, and Full Stack opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>

            <p className="text-slate-400 leading-8 mb-10">
              I'm currently looking for Software Engineer and Java Backend
              Developer opportunities. If you have an exciting project,
              internship, or full-time role, feel free to contact me.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 bg-slate-800 p-5 rounded-xl border border-slate-700"
                >
                  <div className="text-sky-400 text-2xl">{item.icon}</div>

                  <div>
                    <h4 className="font-semibold">{item.title}</h4>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-slate-400 hover:text-sky-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-400">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-10 text-3xl">
              <a
                href="https://github.com/Anuj214B4"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/anuj-kumar-b793b6273/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900 rounded-lg p-4 outline-none border border-slate-700 focus:border-sky-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900 rounded-lg p-4 outline-none border border-slate-700 focus:border-sky-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-900 rounded-lg p-4 outline-none border border-slate-700 focus:border-sky-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-slate-900 rounded-lg p-4 outline-none border border-slate-700 focus:border-sky-500"
              />

              <button
                type="submit"
                className="w-full bg-sky-500 py-4 rounded-xl hover:bg-sky-600 transition font-semibold"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
