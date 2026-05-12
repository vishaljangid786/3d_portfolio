import { DownloadIcon, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navItems = ["About", "Projects", "Certificate", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-orbitron font-bold glow-text-gold tracking-tighter"
        >
          VJ<span className="animate-pulse">_</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-orbitron text-sm uppercase tracking-widest">
          {navItems.map((path) => (
            <button
              key={path}
              onClick={() => scrollToSection(path)}
              className="relative transition-all duration-300 text-gray-400 hover:text-[#c5a059] group"
            >
              <span>{path}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] shadow-[0_0_10px_rgba(197,160,89,0.5)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(197,160,89,0.3)]"
          >
            Resume
            <DownloadIcon size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#c5a059]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-8 gap-6 font-orbitron text-lg text-center uppercase tracking-widest">
          {navItems.map((path) => (
            <button
              key={path}
              onClick={() => scrollToSection(path)}
              className="text-gray-400 hover:text-[#c5a059]"
            >
              {path}
            </button>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 py-3 border border-[#c5a059] text-[#c5a059]"
          >
            Resume <DownloadIcon size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
