import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
} from "lucide-react";

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
  allProjects,
  currentProjectIndex,
  onProjectChange,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const modalRef = useRef(null);

  const images = project?.images || [project?.image || project?.iconUrl];
  const currentProjectType = project?.type || "web";

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % allProjects.length;
    onProjectChange(nextIndex);
    setCurrentImageIndex(0);
  };

  const handlePrevProject = () => {
    const prevIndex =
      (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
    onProjectChange(prevIndex);
    setCurrentImageIndex(0);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNextImage();
    if (isRightSwipe) handlePrevImage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") handlePrevImage();
    if (e.key === "ArrowRight") handleNextImage();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const getRelatedProjects = () => {
    return allProjects.filter(
      (p, index) =>
        p.type === currentProjectType && index !== currentProjectIndex,
    );
  };

  const relatedProjects = getRelatedProjects();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-scroll hide-scrollbar relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Project Navigation */}
        <button
          onClick={handlePrevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Modal Content */}
        <div className="grid lg:grid-cols-2 gap-6 p-6 lg:p-8 max-h-[90vh] overflow-hidden">
          {/* Left Column: Images + desc2 */}
          <div className="flex flex-col h-full">
            {/* Image Carousel */}
            <div
              className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[currentImageIndex]}
                alt={`${project.name || project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="flex justify-center mt-3 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Desc2 Box */}
            {project.desc2 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm overflow-y-auto max-h-40">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {project.desc2}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Project Details */}
          <div className="flex flex-col h-full overflow-y-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {project.name || project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Skills/Technologies */}
            {project.skills && project.skills.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            <div className="flex gap-4 mb-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={18} /> GitHub
                </a>
              )}
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-gray-200 p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Related {currentProjectType === "web" ? "Web" : "Native"} Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedProjects.map((relatedProject, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const relatedIndex = allProjects.findIndex(
                      (p) => p === relatedProject,
                    );
                    onProjectChange(relatedIndex);
                  }}
                  className="cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <div className="aspect-video bg-gray-100 rounded mb-2 overflow-hidden">
                    <img
                      src={
                        relatedProject.type === "native"
                          ? relatedProject.image ||
                            relatedProject.images?.[0] ||
                            relatedProject.iconUrl
                          : relatedProject.images?.[0] ||
                            relatedProject.image ||
                            relatedProject.iconUrl
                      }
                      alt={relatedProject.name || relatedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {relatedProject.name || relatedProject.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedProject.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailModal;
