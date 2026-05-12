import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".about-title", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        }
      });

      // Bio Text Animation
      gsap.from(".about-bio", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-bio",
          start: "top 85%",
        }
      });

      // Tech Stack Reveal
      gsap.from(".tech-stack-header", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
          trigger: ".tech-stack-header",
          start: "top 90%",
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="max-container section-padding">
      <h1 className="about-title text-5xl md:text-7xl font-orbitron font-bold text-white mb-8 break-words">
        About <span className="glow-text-gold">Me</span>
      </h1>

      <div className="about-bio glass-card mb-20 border-l-4 border-l-[#c5a059]">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-exo break-words">
          I am a passionate Full Stack Developer who loves building modern web applications. 
          I have experience working with React, Node.js, and MongoDB. I enjoy making 
          clean, easy-to-use interfaces and solving real-world problems with my code.
        </p>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="tech-stack-header text-3xl font-orbitron font-bold text-[#c5a059] mb-12">
          My Tech Skills
        </h3>



        <div className="relative overflow-hidden py-20 bg-white/5 border-y border-white/5">
          {/* Moving Rows */}
          <div className="flex flex-col gap-12">
            {/* Row 1: Left */}
            <div className="marquee-container flex whitespace-nowrap gap-12 animate-marquee-left">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-1-${index}`}
                  className="flex items-center gap-6 bg-black/40 border border-white/10 px-8 py-4 rounded-full hover:border-[#c5a059] transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white p-2 group-hover:scale-110 transition-transform">
                    <img src={skill.imageUrl} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-orbitron text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors uppercase">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2: Right */}
            <div className="marquee-container flex whitespace-nowrap gap-12 animate-marquee-right">
              {[...skills.slice().reverse(), ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-2-${index}`}
                  className="flex items-center gap-6 bg-black/40 border border-white/10 px-8 py-4 rounded-full hover:border-[#c5a059] transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white p-2 group-hover:scale-110 transition-transform">
                    <img src={skill.imageUrl} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-orbitron text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors uppercase">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08080a] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#08080a] to-transparent z-10"></div>
        </div>
      </div>

      <div className="py-20">
        <h3 className="text-3xl font-orbitron font-bold text-[#c5a059] mb-12">
          Work Experience
        </h3>
        
        <div className="mt-12 dark-timeline">
          <VerticalTimeline animate={true} lineColor="#333">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "2rem",
                }}
                contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.1)" }}
                iconStyle={{ background: "#050505", border: `2px solid ${experience.iconBg}` }}
                icon={
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
              >
                <h3 className="text-xl font-orbitron font-bold text-[#c5a059]">
                  {experience.title}
                </h3>
                <p className="text-[#4a5568] font-orbitron text-sm !m-0">
                  {experience.company_name}
                </p>

                <ul className="my-5 ml-5 space-y-2 list-disc text-gray-400 font-exo">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>


    </section>
  );
};

export default About;

