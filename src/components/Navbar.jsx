import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = ["about", "projects", "certificate", "contact", "resume"];

  return (
    <header className="header z-20 flex justify-between items-center relative px-3 md:px-0">

      <NavLink to="/">
        <h1 className="text-lg md:text-xl font-semibold shadow-lg px-3 py-2 rounded-lg">
          VJ
        </h1>
      </NavLink>

      {/* ✅ Responsive Nav */}
      <nav className="flex flex-wrap md:flex-nowrap items-center 
                      text-[10px] sm:text-xs md:text-lg 
                      gap-2 sm:gap-3 md:gap-7 
                      font-medium">

        {navItems.map((path) => (
          <NavLink
            key={path}
            to={`/${path}`}
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-300 ${
                isActive ? "text-blue-600" : "text-black"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="whitespace-nowrap">
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </span>

                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-1/2 opacity-100" : "w-0 opacity-0"
                  }`}
                ></span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

    </header>
  );
};

export default Navbar;