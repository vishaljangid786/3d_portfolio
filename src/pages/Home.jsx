import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Reveal
      gsap.fromTo(".hero-title", 
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" }
      );

      // Section 1: Intro
      gsap.fromTo(".intro-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".intro-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Section 2: Cards
      gsap.fromTo(".home-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cards-section",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Horizontal text scroll
      gsap.to(".scrolling-text", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".scrolling-text-container",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Update scroll progress
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => setScrollProgress(self.progress * 100),
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="home" className="relative w-full overflow-hidden">
      {/* Custom Scroll Progress Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-white/10 z-50 hidden md:block">
        <div 
          className="absolute top-0 left-0 w-full bg-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.5)] transition-all duration-100"
          style={{ height: `${scrollProgress}%` }}
        ></div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-orbitron text-[10px] text-[#c5a059] rotate-90 whitespace-nowrap">
          WELCOME: {Math.round(scrollProgress)}%
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute top-20 left-10 font-orbitron text-[10px] text-gray-600 hidden md:block">
          PORTFOLIO_V4.0<br />
          LOCATION: INDIA<br />
          STATUS: ONLINE
        </div>
        
        <h1 className="hero-title text-7xl md:text-[14rem] font-orbitron font-black text-white leading-none tracking-tighter">
          VISHAL<br />
          <span className="glow-text-gold glitch" data-text="JANGID">JANGID</span>
        </h1>
        <p className="mt-8 text-xl font-orbitron text-[#c5a059] tracking-[0.4em] uppercase animate-pulse">
          Full Stack Developer
        </p>
      </section>

      {/* Intro Section */}
      <section className="intro-section min-h-[80vh] flex items-center justify-center px-8 md:px-32">
        <div className="intro-text max-w-4xl glass-card border-l-4 border-[#c5a059] p-12 bg-black/40">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#c5a059] animate-ping"></span>
            <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-widest">
              My Vision
            </h2>
          </div>
          <p className="text-xl md:text-3xl text-gray-300 font-exo leading-relaxed font-light italic break-words">
            "I don't just write code, I build digital experiences that feel real and easy to use."
          </p>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <section className="scrolling-text-container py-24 bg-white/5 overflow-hidden">
        <div className="scrolling-text whitespace-nowrap text-9xl md:text-[18rem] font-orbitron font-black text-white/5 uppercase select-none">
          BUILDING QUALITY APPS • MODERN DESIGN • QUALITY WORK • 
          BUILDING QUALITY APPS • MODERN DESIGN • QUALITY WORK • 
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section py-20 px-8 md:px-32 flex flex-col items-center">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-4">
            Quick Links
          </h2>
          <div className="h-1 w-24 bg-[#c5a059] mx-auto shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl perspective-1000">
          {[
            { title: "Projects", id: "projects", color: "#c5a059", icon: "01", desc: "Check out my latest web and mobile apps." },
            { title: "About", id: "about", color: "#4a5568", icon: "02", desc: "Learn more about my skills and experience." },
            { title: "Certificates", id: "certificate", color: "#00f2ff", icon: "03", desc: "View my professional certifications." },
            { title: "Contact", id: "contact", color: "#f8f9fa", icon: "04", desc: "Say hello and let's start a conversation." },
          ].map((card) => (
            <button 
              key={card.title} 
              onClick={() => scrollToSection(card.id)}
              className="home-card relative glass-card group overflow-hidden border-t-2 pt-16 text-left"
              style={{ borderColor: card.color }}
            >
              <span className="absolute top-6 left-8 font-orbitron text-4xl text-white/10 group-hover:text-white/30 transition-colors">
                {card.icon}
              </span>
              <h3 className="text-4xl font-orbitron font-bold text-white mb-6 group-hover:translate-x-2 transition-transform">
                {card.title}
              </h3>
              <p className="text-gray-500 font-exo mb-10 text-sm tracking-wide">
                {card.desc}
              </p>
              <div className="flex justify-between items-center group-hover:text-[#c5a059] transition-colors">
                <span className="font-orbitron text-[10px] tracking-widest">CLICK_TO_SEE</span>
                <span className="text-2xl">→</span>
              </div>
              {/* Animated corner decorations */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: card.color }}></div>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
