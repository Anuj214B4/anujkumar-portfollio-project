import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { FaCss } from "react-icons/fa6";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiApachemaven,
  SiMongodb,
  SiSpringsecurity,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpringsecurity },
      { name: "Hibernate", icon: SiHibernate },
      { name: "JPA", icon: FaDatabase },
      { name: "REST APIs", icon: FaDatabase },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Mongodb", icon: SiMongodb },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Maven", icon: SiApachemaven},
      { name: "Postman", icon: SiPostman },
    ],
  },
];