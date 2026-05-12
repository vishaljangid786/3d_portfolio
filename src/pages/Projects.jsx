import { useEffect, useRef } from "react";
import NativeProjects from "../components/NativeProjects";
import WebProjects from "../components/WebProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 85%",
        }
      });

      gsap.from(".projects-list", {
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="max-container section-padding">
      <div className="projects-header">
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-8 break-words">
          My <span className="glow-text-gold">Projects</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 font-exo leading-relaxed mb-12 max-w-3xl border-l-4 border-[#c5a059] pl-6 py-4 glass-card break-words">
          I have worked on many projects over the years. Here are some of my 
          favorite ones. You can check the code and see how they work.
        </p>
      </div>




      <div className="projects-list space-y-20">
        <NativeProjects />
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <WebProjects />
      </div>



    </section>
  );
};

export default Projects;

