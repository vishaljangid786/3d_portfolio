import { DownloadIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = ["about", "projects", "certificate", "contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-xl font-semibold shadow-lg px-3 py-2 rounded-lg">
            VJ
          </h1>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 font-medium text-lg">
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
                  <span>{path.charAt(0).toUpperCase() + path.slice(1)}</span>
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-1/2 opacity-100" : "w-0 opacity-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}

          <NavLink
            to="/resume"
            className="flex items-center font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600"
          >
            Resume
            <DownloadIcon className="ml-2" size={16} />
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col w-full bg-white shadow-md font-medium">
          {navItems.map((path) => (
            <div key={path} className="w-full text-center">
              <NavLink
                to={`/${path}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full py-4 text-lg transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-black hover:bg-gray-50"
                  }`
                }
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>

              <hr className="w-full border-gray-200" />
            </div>
          ))}

          {/* Resume Button */}
          <div className="w-full text-center">
            <NavLink
              to="/resume"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex justify-center items-center gap-2 py-4 text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-black hover:bg-gray-50"
                }`
              }
            >
              Resume
              <DownloadIcon size={16} />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
