import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CTA, Card } from "../components";
import { projects } from "../constants"; 
import Loading from "../components/Loading";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [apiProjects, setApiProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://my-portfolio-backend-one-tau.vercel.app/api/projects",
        );
        const data = await res.json();

        if (data.success) {
          setApiProjects(data.data);
        }
      } catch (error) {
        console.error("Error fetching API projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if(loading){
    return (
      <Loading title={'Projects'} />
    );
  }

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Projects
        </span>
      </h1>

      <p className="mt-2 leading-relaxed text-slate-500">
        I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements.
      </p>

      <hr className="border-slate-200 my-10" />

      {/* ✅ OLD STATIC PROJECTS (UNCHANGED) */}
      <div>
        <h3 className="subhead-text">
          My  Web
          <span className="font-semibold pl-2 blue-gradient_text drop-shadow">
            Projects
          </span>
        </h3>

        <div className="flex flex-wrap gap-16 my-10">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="w-12 h-12 block-container">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="flex items-center justify-center btn-front rounded-xl">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="object-contain w-1/2 h-1/2"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <h4 className="text-2xl font-semibold font-poppins">
                  {project.name}
                </h4>

                <p className="mt-2 text-slate-500">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-200 rounded-full text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 mt-10 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold flex items-center gap-2 text-blue-600"
                  >
                    Live Link <ArrowRight  className="inline-block " size={18} />
                  </Link>

                  {project.github && (
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold flex items-center gap-2 text-gray-700"
                    >
                      GitHub <ArrowRight  className="inline-block "  size={18}/>
                    </Link>
                  )}
                </div>
                <hr className="mt-4"/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200 my-10" />

      {/* ✅ NEW API PROJECTS (CTA ke upar show hoga) */}
      <div className="my-16">
        <h3 className="subhead-text">
          React Native{" "}
          <span className="font-semibold blue-gradient_text drop-shadow">
            Projects
          </span>
        </h3>

        {loading ? (
          <p className="mt-5 text-slate-500">Loading projects...</p>
        ) : (
          <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {apiProjects.map((project) => (
              <Card
                key={project._id}
                image={project.image}
                title={project.title}
                description={project.description}
                skills={project.skills}
                links={[
                  ...(project.liveLink
                    ? [{ label: "Live Link", url: project.liveLink, className: "text-blue-600" }]
                    : []),
                  ...(project.github
                    ? [{ label: "GitHub", url: project.github, className: "text-gray-700" }]
                    : []),
                ]}
                imageClassName="object-cover w-full h-48"
              />
            ))}
          </div>
        )}
      </div>

      {/* ✅ CTA (Sabse last me hi rahega) */}
      <hr className="border-slate-200 my-10" />
      <CTA />
    </section>
  );
};

export default Projects;
