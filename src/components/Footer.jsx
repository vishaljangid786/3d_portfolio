import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-8 py-12 mt-20 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-orbitron text-sm text-gray-500 uppercase tracking-widest">
            © 2026 <span className="text-[#c5a059]">Vishal Jangid</span>
          </p>
          <p className="text-[10px] font-orbitron text-gray-600">
            Made with love by Vishal
          </p>
        </div>

        <div className="flex gap-6 items-center">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/10 hover:border-[#c5a059] hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-300 rounded-sm"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-5 h-5 object-contain filter invert opacity-50 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

