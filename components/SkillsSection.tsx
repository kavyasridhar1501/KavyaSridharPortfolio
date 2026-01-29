"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaReact,
  FaJs
} from "react-icons/fa";
import {
  SiApachespark,
  SiPytorch,
  SiFlask,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";
import { BiData } from "react-icons/bi";

const skills = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
  { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "AWS (S3)", icon: FaAws, color: "#FF9900" },
  { name: "FAISS", icon: BiData, color: "#00D4FF" },
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["PyTorch", "LLMs", "RAG", "Adversarial Training", "Skater", "MLOps"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "FAISS", "Palantir Foundry", "ETL Pipelines"],
  },
  {
    title: "Web Frameworks",
    skills: ["Flask", "React", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Git", "GitHub", "AWS (S3)", "CI/CD", "Docker"],
  },
  {
    title: "Relevant Coursework",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Mining"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section bg-primary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build data-driven solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-secondary p-6 rounded-2xl card-hover flex flex-col items-center justify-center aspect-square">
                <skill.icon
                  className="text-4xl md:text-5xl mb-3 transition-colors duration-300"
                  style={{ color: skill.color }}
                />
                <span className="text-text-secondary text-sm text-center group-hover:text-text-primary transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-secondary p-6 rounded-2xl"
            >
              <h3 className="text-lg font-heading font-semibold mb-4 text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 bg-primary text-text-secondary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
