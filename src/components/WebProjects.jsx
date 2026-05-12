import React, { useState } from 'react'
import { projects } from '../constants'
import { ArrowRight, ExternalLink } from 'lucide-react'
import ProjectDetailModal from './ProjectDetailModal'


const WebProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openProjectModal = (project, index) => {
    setSelectedProject(project);
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };

  const handleProjectChange = (index) => {
    const project = projects[index];
    setSelectedProject(project);
    setCurrentProjectIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="py-10">
      <h3 className="text-3xl font-orbitron font-bold text-white mb-10">
        Web <span className="glow-text-gold">Projects</span>
      </h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="group relative flex flex-col glass-card border border-white/10 hover:border-gold transition-all duration-500 overflow-hidden"
          >
            {/* Project Image */}
            <div
              className="relative aspect-video cursor-pointer overflow-hidden"
              onClick={() => openProjectModal(project, index)}
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-orbitron text-xs bg-black/80 text-[#c5a059] px-4 py-2 border border-[#c5a059]">
                  View Details
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <h4
                className="text-xl font-orbitron font-bold text-white mb-3 group-hover:glow-text-gold transition-colors"
                onClick={() => openProjectModal(project, index)}
              >
                {project.name}
              </h4>

              <p className="text-sm text-gray-400 font-exo line-clamp-3 mb-6">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {project.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-orbitron border border-white/20 text-gray-500 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-xs font-orbitron font-bold text-black bg-[#c5a059] hover:bg-white transition-all shadow-[0_0_10px_rgba(197,160,89,0.3)]"
                  >
                    LIVE <ExternalLink size={14} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-xs font-orbitron font-bold border border-white/20 text-white hover:border-[#c5a059] hover:text-[#c5a059] transition-all"
                  >
                    CODE <ArrowRight size={14} />
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
        allProjects={projects}
        currentProjectIndex={currentProjectIndex}
        onProjectChange={handleProjectChange}
      />
    </div>
  )
}

export default WebProjects