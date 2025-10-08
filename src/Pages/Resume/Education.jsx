import React from "react";

const educationData = [
  {
    title: "Secondary School Certificate",
    institute: "Osmanpur High School",
    period: "2016-2021",
    description:
      "Completed secondary education with focus on science and mathematics.",
    align: "left",
  },
  {
    title: "Diploma in Computer Science",
    institute: "Sherpur Polytechnic Institute",
    period: "Present",
    description:
      "Studying Computer Science and focusing on Web Development and MERN stack.",
    align: "right",
  },
];

const EducationCard = ({ edu }) => {
  return (
    <div
      className={`relative w-full lg:w-1/2 p-6 ${
        edu.align === "left" ? "lg:mr-auto lg:translate-x-[-20px]" : "lg:ml-auto lg:translate-x-[20px]"
      }`}
    >
      <div className=" backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#1fcaff] to-[#0ea5e9] text-transparent bg-clip-text">
          {edu.title}
        </h2>
        <h3 className="text-gray-700 mt-2 font-bold">{edu.institute}</h3>
        <p className="text-blue-700 font-bold mt-1">{edu.period}</p>
        <p className="text-gray-8800 mt-2 text-sm text-gray-600 font-medium">{edu.description}</p>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 relative">
      {/* Timeline connecting line */}
      <div className="hidden lg:block absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-r from-[#00baf3] via-[#0088ff] to-[#00eaff] rounded-full"></div>

      <div className="flex flex-col lg:flex-col gap-16 relative z-10">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} edu={edu} />
        ))}
      </div>
    </div>
  );
}
