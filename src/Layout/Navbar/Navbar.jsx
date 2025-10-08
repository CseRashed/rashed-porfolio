import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { BiFoodMenu, BiSolidContact } from "react-icons/bi";
import { PiBagSimpleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { icon: <TiHomeOutline />, to: "/", tooltip: "Home" },
    { icon: <FaRegUser />, to: "/about", tooltip: "About" },
    { icon: <BiFoodMenu />, to: "/resume/experience", tooltip: "Resume" },
    { icon: <PiBagSimpleFill />, to: "/portfolio/myWork", tooltip: "Portfolio" },
    { icon: <BiSolidContact />, to: "/contact", tooltip: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-[#2c4750] rounded-md lg:rounded-2xl w-full sm:w-[400px] shadow-lg">
        <ul className="flex text-white justify-between p-2 gap-5 relative">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group text-xl sm:text-2xl md:text-3xl">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `p-2 rounded-full transition-all duration-300 flex items-center justify-center
                  ${isActive ? "text-[#1fcaff] shadow-[0px_0px_20px_5px_#1fcaff]" : "text-gray-300 hover:text-[#1fcaff] hover:shadow-[0px_0px_15px_3px_#1fcaff]"}`
                }
              >
                {item.icon}
              </NavLink>

              {/* Tooltip */}
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.tooltip}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Page content wrapper: make sure content doesn't overlap */}
      <div className="pb-28"></div>
    </>
  );
}
