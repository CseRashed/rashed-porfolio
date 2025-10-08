import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import klypto from "../../assets/projects_img/klypto.png";
import smart_mess from "../../assets/projects_img/smart_mess.png";

const projects = [
  {
    title: "Klypto E-commerce",
    description:
      "A Platform where sellers list products and admin Manages operations, built as a role-based eCommerce system.",
    link: "https://klypto-ecommerce.netlify.app",
    tech: ["React", "Tailwind", "Firebase", "Framer Motion"],
    img: klypto,
  },
  {
    title: "Smart Mess Management",
    description:
      "Dynamic Mess Management system enabling multiple Manager to handle their members, meals and payments in real-time.",
    link: "https://smart-mess-management-frontend.vercel.app",
    tech: [
      "React",
      "Tailwind",
      "Firebase",
      "Node.js",
      "MongoDB",
      "JWT",
      "Node Mailer",
    ],
    img: smart_mess,
  },
];

export default function MyWork() {
  return (
    <section className="relative text-white px-6 py-16">
      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/10 p-[1px] shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all"
          >
            {/* Inner Card */}
            <div className="bg-[#0f172a]/90 backdrop-blur-xl rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:bg-[#13203a]/90">
              
              {/* Project Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#1e293b]/70 text-xs rounded-full border border-cyan-700/40 text-gray-200 hover:bg-cyan-400/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-400 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
