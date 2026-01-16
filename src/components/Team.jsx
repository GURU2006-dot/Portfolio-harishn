import { motion } from "framer-motion";
import "./Team.css";

const FRIENDS = [
  {
    name: "C Guna Shekhar",
    img: "./guna.png",
    role: "Data Science | Backend Developer",
    link: "https://gunaworkss.netlify.app/",
    intro:
      "Data Science Engineer designing intelligent systems that solve real problems efficiently and elegantly.",
  },
  {
    name: "A Jahnavi",
    img: "./prapti.jpg",
    role: "Frontend Developer | UI Designer",
    link: "https://www.linkedin.com/in/jahnavi-a-491aa33a3",
    intro:
      "Crafting clean interfaces and intuitive user experiences with a strong focus on usability.",
  },
  {
    name: "L.Guru",
    img: "./guru.jpeg",
    role: "Frontend Developer | UI Designer",
    link: "https://www.linkedin.com/in/jahnavi-a-491aa33a3",
    intro:
      "Focused on planning and presenting clean, intuitive interfaces that enhance usability and user engagement.",
  },
];

export function Team() {
  return (
    <section id="team" className="team-section">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="team-title"
      >
        My <span className="grad">Creative Companions</span>
      </motion.h2>

      <div className="team-grid">
        {FRIENDS.map((f, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <img src={f.img} alt={f.name} className="team-photo" />

            <div className="team-info">
              <h3 className="team-name">{f.name}</h3>
              <p className="team-role">{f.role}</p>
              <p className="team-intro">{f.intro}</p>

              <motion.a
                href={f.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08 }}
                className="team-link"
              >
                Visit Profile →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
