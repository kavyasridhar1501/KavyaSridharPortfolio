"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaBook } from "react-icons/fa";

const projects = [
  {
    title: "HemsHappen App",
    subtitle: "RAG-Based Medical Chatbot",
    date: "Sep 2025",
    description:
      "Developed a RAG-based medical chatbot using FAISS vector search and Claude Sonnet 4 over curated GI clinical guidelines. Evaluated across medical accuracy, safety, and patient communication by LLM-as-judge and human experts.",
    highlights: [
      "Achieved 100% clinical safety pass rate",
      "Outperformed medical-tuned baseline by 42 percentage points",
      "Submitted to DDW 2025",
    ],
    technologies: ["Python", "RAG", "FAISS", "LLM Evaluation", "Claude API"],
    github: "#",
    live: null,
  },
  {
    title: "LegalInsight",
    subtitle: "Self-RAG Legal Contract Analyzer",
    date: "Jan 2025",
    description:
      "Developed a legal contract analysis tool using Self-RAG with EigenScore validation for hallucination detection. Implemented Flask backend and FAISS vector store for semantic search across 6,858 LegalBench-RAG queries.",
    highlights: [
      "74.65% semantic consistency in AI-generated contract reviews",
      "4.26x faster review time compared to manual analysis",
      "Supports multiple LLM providers",
    ],
    technologies: ["Python", "JavaScript", "Flask", "Self-RAG", "FAISS"],
    github: "#",
    live: null,
  },
];

const publications = [
  {
    title: "Understanding DeepFool Adversarial Attack and Defense with Skater Interpretations",
    venue: "2023 International Conference on WiSPNET, IEEE",
    date: "May 2023",
    description:
      "Improved ResNet50 robustness against adversarial attacks by 43% using adversarial training techniques and quantified attack impact through Skater visual interpretation analysis.",
    link: "#",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent work in ML, NLP, and data science
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-primary rounded-2xl overflow-hidden card-hover"
            >
              {/* Project Header */}
              <div className="h-32 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
                <div className="relative z-10 text-center">
                  <span className="text-3xl font-heading font-bold gradient-text">
                    {project.title.charAt(0)}
                  </span>
                  <p className="text-text-secondary text-sm mt-1">{project.date}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-1 text-text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-accent text-sm mb-3">{project.subtitle}</p>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-text-secondary text-xs flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            <span className="gradient-text">Publications</span>
          </h3>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-primary p-6 rounded-2xl card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaBook className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold text-text-primary mb-1">
                    {pub.title}
                  </h4>
                  <p className="text-accent text-sm mb-2">{pub.venue}</p>
                  <p className="text-text-secondary text-xs mb-1">{pub.date}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {pub.description}
                  </p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-300 mt-3 text-sm"
                    >
                      <FaExternalLinkAlt size={12} />
                      View Publication
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/kavyasridhar1501"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
