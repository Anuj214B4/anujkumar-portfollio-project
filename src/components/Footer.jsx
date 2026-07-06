import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <h2 className="text-2xl font-bold text-sky-400">Anuj Kumar</h2>

          <p className="text-slate-400 mt-2">
            Java Backend Developer | Spring Boot | React
          </p>
        </div>

        <div className="flex gap-5 text-2xl">
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
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Anuj Kumar</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
