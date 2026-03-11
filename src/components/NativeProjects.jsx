import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Card from "./Card";
import ProjectDetailModal from "./ProjectDetailModal";
import { nativeProjects } from "../constants";
import { ExternalLink } from "lucide-react";

const NativeProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);


  const openProjectModal = (project, index) => {
    
    setSelectedProject(project);
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };

  const handleProjectChange = (index) => {
    const project = nativeProjects[index];
    setSelectedProject(project);
    setCurrentProjectIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="my-16">
      <h3 className="subhead-text">
        React Native{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Projects
        </span>
      </h3>

     <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
  {nativeProjects.map((project, index) => (
    <div
      key={project.title}
      className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div
        className="relative cursor-pointer"
        onClick={() => openProjectModal(project, index)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <span className="text-white font-semibold text-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4
          className="text-xl font-semibold font-poppins cursor-pointer group-hover:text-blue-600 transition"
          onClick={() => openProjectModal(project, index)}
        >
          {project.title}
        </h4>

        <p className="mt-2 text-sm text-slate-500">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills?.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-slate-100 rounded-full text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Live <ArrowRight size={16} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold border rounded-lg border-slate-300 hover:bg-slate-100 transition"
            >
              GitHub <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        allProjects={nativeProjects}
        currentProjectIndex={currentProjectIndex}
        onProjectChange={handleProjectChange}
      />
    </div>
  );
};

export default NativeProjects;
