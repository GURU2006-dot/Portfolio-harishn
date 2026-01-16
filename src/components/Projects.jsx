import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "🏆 College Score Event Management System",
    desc: "Web-based scoring platform for college events with role-based access for Super Admin, Sub Admin, and Judges, enabling real-time score updates across devices.",
    ss: "/score-event.png",
    tech: ["React", "JavaScript", "Tailwind CSS","HTML","CSS"],
    live: "https://event-scorer.netlify.app/",
    code: "https://github.com/Harish1234560/event-management-system",
  },
  { title: "🧠 Mental Health Analyzer",
     desc: "NLP-based system that analyzes user text for anxiety, stress, and depression indicators.", 
     ss: "/mentalhealth.jpg", tech: ["Python", "Transformers", "NLTK", "scikit-learn"], 
     live: "https://mental-health-analyzer.streamlit.app/", 
     code: "https://github.com/Harish1234560/", },
  {
    title: "🎉 College Event Feast Management",
    desc: "Event management system designed to handle registrations, schedules, and participant coordination for college fests with a clean and user-friendly interface.",
    ss: "/event-feast.png",
    tech: ["React", "JavaScript", "CSS","HTML","Supabase"],
    live: "https://ashv-2k26.netlify.app/",
    code: "https://github.com/Harish1234560/",
  },
  {
    title: "🎂 Birthday Wishes Web Application",
    desc: "Interactive birthday greeting website featuring animations, personalized messages, and responsive design for all devices.",
    ss: "/birthday.png",
    tech: ["HTML", "CSS", "JavaScript","React","Supabase"],
    live: "https://harish-birthdaywish.netlify.app/",
    code: "https://github.com/Harish1234560/birthday--wish",
  },
  {
    title: "🧭 Tourist Guidance System",
    desc: "Tourism assistance platform that provides information about tourist places, attractions, and travel guidance with easy navigation.",
    ss: "/tourist.png",
    tech: ["React", "JavaScript","HTML","CSS","Express.js"],
    live: "https://touristguard.netlify.app/",
    code: "https://github.com/Harish1234560/",
  },
  {
    title: "💼 Advanced Portfolio Website",
    desc: "Modern personal portfolio showcasing projects, skills, and contact information with smooth animations and responsive UI.",
    ss: "/portfolio.jpg",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    live: "https://portfolio-nhkr.netlify.app",
    code: "https://github.com/Harish1234560/portfolio-2",
  },
  {
    title: "🔤 Text Transfer Application",
    desc: "Text transformation tool that converts, formats, and manipulates text efficiently for user convenience.",
    ss: "/text-transfer.png",
    tech: ["JavaScript", "HTML","CSS"],
    live: "https://text-trans.netlify.app/",
    code: "https://github.com/Harish1234560/text-translation-",
  },
];


export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
