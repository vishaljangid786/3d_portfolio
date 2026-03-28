import {CTA, HoverCarBackground} from "../components";
import NativeProjects from "../components/NativeProjects";
import WebProjects from "../components/WebProjects";

const Projects = () => {


    return (
        <section className="max-container relative">
            <HoverCarBackground/>
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

            <hr className="border-slate-200 my-10"/>

            {/* ✅ OLD STATIC PROJECTS (UNCHANGED) */}
            <NativeProjects/>

            <hr className="border-slate-200 my-10"/>

            {/* ✅ NEW API PROJECTS (CTA ke upar show hoga) */}
            <WebProjects/>

            {/* ✅ CTA (Sabse last me hi rahega) */}
            <hr className="border-slate-200 my-10"/>
            <CTA/>
        </section>
    );
};

export default Projects;
