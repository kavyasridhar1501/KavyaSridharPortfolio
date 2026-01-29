"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBrain, FaDatabase, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const highlights = [
  {
    icon: FaBrain,
    title: "Machine Learning",
    description: "Expertise in NLP, LLMs, RAG systems, and adversarial training techniques.",
  },
  {
    icon: FaDatabase,
    title: "Data Engineering",
    description: "Building scalable ETL pipelines with Spark, SQL, and cloud technologies.",
  },
  {
    icon: FaGraduationCap,
    title: "Research",
    description: "Published IEEE research on adversarial attacks and deep learning interpretability.",
  },
];

const education = [
  {
    degree: "Master of Science, Data Science",
    school: "University of California San Diego",
    location: "La Jolla, CA",
    period: "Sep 2024 – Mar 2026",
    gpa: "GPA: 3.916/4.0",
  },
  {
    degree: "B.E. Computer Science and Engineering",
    school: "College of Engineering Guindy, Anna University",
    location: "Chennai, India",
    period: "Aug 2019 – Apr 2023",
    gpa: "GPA: 3.98/4.0",
  },
];

const experience = [
  {
    title: "Software Engineer",
    company: "Société Générale Global Solution Centre",
    location: "Chennai, India",
    period: "Jul 2023 – Aug 2024",
    highlights: [
      "Optimized SQL-based CI/CD pipelines in Palantir Foundry, reducing AML query processing time by 20%",
      "Developed dashboards eliminating 100% of manual analysis time, improving compliance efficiency by 50%",
      "Migrated 7 critical AML datasets with 50M+ records and zero data loss",
      "Maintained 20+ production ETL pipelines achieving 98% on-time delivery",
    ],
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image/Avatar section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-hover rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-secondary rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-heading font-bold gradient-text">
                    KS
                  </span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-primary p-6 rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-4 text-accent flex items-center gap-2">
                <FaGraduationCap /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <h4 className="text-text-primary font-semibold">{edu.degree}</h4>
                    <p className="text-accent text-sm">{edu.school}</p>
                    <p className="text-text-secondary text-sm">{edu.location} | {edu.period}</p>
                    <p className="text-text-secondary text-sm font-medium">{edu.gpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-text-primary">
              Data Scientist & ML Engineer
            </h3>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              I&apos;m a Master&apos;s student in Data Science at UC San Diego with a strong foundation
              in Machine Learning, NLP, Large Language Models, and Algorithm design. I&apos;m passionate
              about leveraging data-driven solutions to drive meaningful impact.
            </p>

            {/* Experience */}
            <div className="bg-primary p-6 rounded-2xl mb-6">
              <h3 className="text-xl font-heading font-semibold mb-4 text-accent flex items-center gap-2">
                <FaBriefcase /> Experience
              </h3>
              {experience.map((exp, index) => (
                <div key={index}>
                  <h4 className="text-text-primary font-semibold">{exp.title}</h4>
                  <p className="text-accent text-sm">{exp.company}</p>
                  <p className="text-text-secondary text-sm mb-3">{exp.location} | {exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" download className="btn-primary inline-block">
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-primary p-8 rounded-2xl card-hover text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-accent text-2xl" />
              </div>
              <h4 className="text-xl font-heading font-semibold mb-3 text-text-primary">
                {item.title}
              </h4>
              <p className="text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
