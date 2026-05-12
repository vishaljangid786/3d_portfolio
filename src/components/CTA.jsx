const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden glass-card flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-16 mt-16 border-t border-white/5">

      <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059] shadow-[0_0_20px_#c5a059]"></div>
      
      <div className="flex-1">
        <h2 className="font-orbitron text-2xl md:text-3xl text-white font-bold mb-6 tracking-tight">
          Have a <span className="text-[#c5a059]">Project</span> in mind?
        </h2>
        <p className="font-exo text-lg text-gray-400 max-w-lg">
          Let's work together to build something amazing that everyone will love.
        </p>
      </div>

      <button 
        onClick={scrollToContact}
        className="group relative px-12 py-5 bg-[#c5a059] text-black font-orbitron font-extrabold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] text-center whitespace-nowrap"
      >
        <span className="relative z-10">Let's Talk</span>
        <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
      </button>
    </section>
  );
};

export default CTA;

