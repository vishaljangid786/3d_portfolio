import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CTA, Card } from "../components";
import { projects } from "../constants";
import Loading from "../components/Loading";
import { ArrowRight } from "lucide-react";
import NativeProjects from "../components/NativeProjects";
import WebProjects from "../components/WebProjects";

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

  if (loading) {
    return <Loading title={"Projects"} />;
  }

  return (
    <section className="max-container">
      {/* head text */}
      <h1 className="head-text">
        My{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Projects
        </span>
      </h1>

      <p className="mt-2 leading-relaxed text-slate-500">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
      </p>

      <hr className="border-slate-200 my-10" />

      {/* ✅ OLD STATIC PROJECTS (UNCHANGED) */}
      <NativeProjects />

      <hr className="border-slate-200 my-10" />

      {/* ✅ NEW API PROJECTS (CTA ke upar show hoga) */}
      <WebProjects />

      {/* ✅ CTA (Sabse last me hi rahega) */}
      <hr className="border-slate-200 my-10" />
      <CTA />
    </section>
  );
};

export default Projects;
