import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Vishal
        </span>{" "}
        👋
      </h1>

      <div className="flex flex-col gap-3 mt-5 text-slate-500">
        <p>
          I am a passionate Full Stack Developer with hands-on experience in
          building modern web applications using React, Node.js, and MongoDB. I
          enjoy creating clean, responsive user interfaces and writing efficient
          backend logic that delivers real-world solutions. I am continuously
          learning and improving my skills, with a strong focus on performance,
          user experience, and scalable architecture. My goal is to build
          impactful digital products that solve real problems.
        </p>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="subhead-text">
          My{" "}
          <span className="font-semibold pl-2 blue-gradient_text drop-shadow">
            Skills
          </span>
        </h3>

        <div className="flex flex-wrap gap-12 mt-16 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Animated Icon Container */}
              <div className="w-20 h-20 block-container relative">
                <div className="btn-back rounded-xl absolute inset-0" />
                <div className="flex items-center justify-center btn-front rounded-xl relative z-10 w-full h-full">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="object-contain w-1/2 h-1/2"
                  />
                </div>
              </div>

              {/* Hover Name */}
              <span
                className="mt-3 text-xs font-medium
                   opacity-0 translate-y-2
                   transition-all duration-300
                   group-hover:opacity-100 group-hover:translate-y-0"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="flex flex-col gap-3 mt-5 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="flex mt-12">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-black font-poppins">
                    {experience.title}
                  </h3>
                  <p
                    className="text-base font-medium text-black-500"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 ml-5 space-y-2 list-disc">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="pl-1 text-sm font-normal text-black-500/50"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
