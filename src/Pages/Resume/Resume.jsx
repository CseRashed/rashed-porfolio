import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Resume() {
  return (
    <div className="relative min-h-screen text-white ">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md z-50 border-b-4 border-[#687d84] pb-2 shadow-md">
        <div className="py-4">
          <h1 className="lg:text-5xl text-3xl font-bold text-center bg-gradient-to-r from-[#1fcaff] to-[#0ea5e9] text-transparent bg-clip-text">
            Resume
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex px-2 justify-between gap-10 pb-3">
          <NavLink
            to="experience"
            end
            className={({ isActive }) =>
              isActive
                ? "text-[#1fcaff] text-2xl font-bold transition-all duration-300"
                : "text-[#687d84] text-2xl font-bold hover:text-[#1fcaff] transition-all duration-300"
            }
          >
            Experience
          </NavLink>

          <NavLink
            to="skills"
            className={({ isActive }) =>
              isActive
                ? "text-[#1fcaff] text-2xl font-bold transition-all duration-300"
                : "text-[#687d84] text-2xl font-bold hover:text-[#1fcaff] transition-all duration-300"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="education"
            className={({ isActive }) =>
              isActive
                ? "text-[#1fcaff] text-2xl font-bold transition-all duration-300"
                : "text-[#687d84] text-2xl font-bold hover:text-[#1fcaff] transition-all duration-300"
            }
          >
            Education
          </NavLink>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="pt-[100px]  px-4">
        <Outlet />
      </div>
    </div>
  );
}
