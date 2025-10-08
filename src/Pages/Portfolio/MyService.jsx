import React from 'react';
import ui from './../../assets/service/ui-ux.png';
import design from './../../assets/service/web-design.png';
import development from '/src/assets/service/website-development.png';
import { motion } from "framer-motion";

export default function MyService() {

  const services = [
    {
      img: ui,
      title: "UI/UX",
      desc: "I create intuitive and visually appealing interfaces focused on user experience."
    },
    {
      img: design,
      title: "Web Design",
      desc: "I design responsive, modern websites that reflect your brand identity."
    },
    {
      img: development,
      title: "Web Development",
      desc: "I develop fast, functional websites using HTML, CSS, JavaScript, and React."
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4 lg:p-16">
      {/* Services Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-[280px] sm:w-[320px] shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl flex flex-col items-center text-center py-4 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="w-20 h-20 mb-6 rounded-full overflow-hidden flex items-center justify-center">
              <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
