import React from "react";

const experienceData = [
  {
    title: "Industrial Attachment (Internship)",
    company: "BD Calling IT Ltd",
    period: "September 2025 - Present",
    description:
      "Completed my Industrial Attachment at BD Calling IT Ltd, where I gained practical experience in front-end development using React.js and Tailwind CSS. Worked on building responsive UI and learned about teamwork, communication, and project structure in a professional environment.",
    align: "left",
  },
];

const ExperienceCard = ({ exp }) => {
  return (
    <div
      className={`relative w-full lg:w-1/2 p-6 ${
        exp.align === "left"
          ? "lg:mr-auto lg:translate-x-[-20px]"
          : "lg:ml-auto lg:translate-x-[20px]"
      }`}
    >
      <div className="backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl border-gradient-to-r from-[#00baf3] via-[#0088ff] to-[#00eaff] p-6 transition-transform duration-300 hover:scale-105 border border-transparent bg-[linear-gradient(#fff,#fff)_padding-box,linear-gradient(to_right,#00baf3,#0088ff,#00eaff)_border-box]">
        <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#00baf3] to-[#00eaff] text-transparent bg-clip-text">
          {exp.title}
        </h2>
        <h3 className="text-gray-700 mt-2 font-bold">{exp.company}</h3>
        <p className="text-blue-700 font-bold mt-1">{exp.period}</p>
        <p className="text-gray-800 mt-2 text-sm font-medium">
          {exp.description}
        </p>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 relative">
      {/* Timeline connecting line */}
      <div className="hidden lg:block absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00baf3] via-[#0088ff] to-[#00eaff] z-0 rounded-full"></div>

      <div className="flex flex-col lg:flex-col gap-16 relative z-10">
        {experienceData.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </div>
  );
}
