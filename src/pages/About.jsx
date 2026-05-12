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
      <h1 className="about-title text-4xl md:text-7xl font-orbitron font-bold text-white mb-8 break-words">
        About <span className="glow-text-gold">Me</span>
      </h1>

      <div className="about-bio max-w-[85%] mx-auto glass-card mb-20 border-l-4 border-l-[#c5a059] !p-4 sm:!p-10">
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed font-exo break-words whitespace-normal overflow-wrap-anywhere text-center">
          I am a passionate Full Stack Developer who loves building modern web applications. 
          I have experience working with React, Node.js, and MongoDB. I enjoy making 
          clean, easy-to-use interfaces and solving real-world problems with my code.
        </p>
      </div>

      <div className="py-10 overflow-hidden">
        <h3 className="tech-stack-header text-2xl sm:text-3xl font-orbitron font-bold text-[#c5a059] mb-8 px-2 text-center">
          My Tech Skills
        </h3>

        <div className="relative overflow-hidden py-8 sm:py-20 bg-white/5 border-y border-white/5">
          {/* Moving Rows - 4 Rows */}
          <div className="flex flex-col gap-4 sm:gap-12">
            {/* Row 1: Left */}
            <div className="marquee-container flex whitespace-nowrap gap-4 sm:gap-12 animate-marquee-left">
              {[...skills.slice(0, 4), ...skills.slice(0, 4)].map((skill, index) => (
                <div key={`${skill.name}-1-${index}`} className="flex items-center gap-3 bg-black/40 border border-white/10 px-3 py-2 rounded-full">
                  <div className="w-5 h-5 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white p-1">
                    <img src={skill.imageUrl} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-orbitron text-[9px] sm:text-xl font-bold text-white uppercase">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Row 2: Right */}
            <div className="marquee-container flex whitespace-nowrap gap-4 sm:gap-12 animate-marquee-right">
              {[...skills.slice(4, 8), ...skills.slice(4, 8)].map((skill, index) => (
                <div key={`${skill.name}-2-${index}`} className="flex items-center gap-3 bg-black/40 border border-white/10 px-3 py-2 rounded-full">
                  <div className="w-5 h-5 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white p-1">
                    <img src={skill.imageUrl} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-orbitron text-[9px] sm:text-xl font-bold text-white uppercase">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Row 3: Left */}
            <div className="marquee-container flex whitespace-nowrap gap-4 sm:gap-12 animate-marquee-left">
              {[...skills.slice(8, 12), ...skills.slice(8, 12)].map((skill, index) => (
                <div key={`${skill.name}-3-${index}`} className="flex items-center gap-3 bg-black/40 border border-white/10 px-3 py-2 rounded-full">
                  <div className="w-5 h-5 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white p-1">
                    <img src={skill.imageUrl} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-orbitron text-[9px] sm:text-xl font-bold text-white uppercase">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Row 4: Right */}
            <div className="marquee-container flex whitespace-nowrap gap-4 sm:gap-12 animate-marquee-right">
              {[...skills.slice(12), ...skills.slice(12)].map((skill, index) => (
                <div key={`${skill.name}-4-${index}`} className="flex items-center gap-3 bg-black/40 border border-white/10 px-3 py-2 rounded-full">
                  <div className="w-5 h-5 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white p-1">
                    <img src={skill.imageUrl} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-orbitron text-[9px] sm:text-xl font-bold text-white uppercase">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 w-full overflow-hidden">
        <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-[#c5a059] mb-12 px-2">
          Work Experience
        </h3>

        <div className="mt-12 dark-timeline w-[90vw]">
          <VerticalTimeline animate={true} lineColor="#333" layout="1-column-left">
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
                  padding: "1rem",
                  width: "calc(100% - 40px)",
                  marginLeft: "40px",
                }}
                contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.1)" }}
                iconStyle={{
                  background: "#050505",
                  border: `2px solid ${experience.iconBg}`,
                  boxShadow: `0 0 10px ${experience.iconBg}44`,
                  width: "30px",
                  height: "30px",
                  left: "5px",
                }}
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
                <div className="overflow-hidden">
                  <h3 className="text-base sm:text-xl font-orbitron font-bold text-[#c5a059] break-all leading-tight">
                    {experience.title}
                  </h3>
                  <p className="text-[#4a5568] font-orbitron text-[8px] sm:text-sm !m-0 uppercase tracking-tighter">
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-4 ml-4 space-y-2 list-disc text-gray-400 font-exo">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="pl-1 text-[10px] sm:text-sm leading-relaxed overflow-wrap-anywhere">
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

