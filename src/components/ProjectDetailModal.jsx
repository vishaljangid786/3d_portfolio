import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";

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
    const prevIndex = (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
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

  const relatedProjects = allProjects.filter(
    (p, index) => p.type === currentProjectType && index !== currentProjectIndex
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-[#08080a] border border-white/10 rounded-sm max-w-6xl w-full max-h-[95vh] overflow-y-auto hide-scrollbar relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Header */}
        <div className="sticky top-0 z-20 bg-[#0a0a0a] border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#c5a059] shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
            <span className="font-orbitron text-xs text-gray-500 tracking-widest uppercase">
              PROJECT DETAILS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:text-[#c5a059] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="grid lg:grid-cols-2 gap-10 p-8 lg:p-12">
          {/* Left Column: Images */}
          <div className="flex flex-col gap-6">
            <div
              className="relative aspect-video bg-white/5 border border-white/10 overflow-hidden group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images[currentImageIndex]?.endsWith(".mp4") ||
              images[currentImageIndex]?.endsWith(".webm") ? (
                <video
                  src={images[currentImageIndex]}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={images[currentImageIndex]}
                  alt="Project View"
                  className="w-full h-full object-contain"
                />
              )}

              {images.length > 1 && (
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={handlePrevImage}
                    className="p-2 bg-black/80 border border-white/10 text-white hover:text-[#c5a059]"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="p-2 bg-black/80 border border-white/10 text-white hover:text-[#c5a059]"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>

            {/* Indicators */}
            {images.length > 1 && (
              <div className="flex justify-center gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1 transition-all ${
                      index === currentImageIndex
                        ? "bg-[#c5a059] w-12"
                        : "bg-white/10 w-4 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Description Extended */}
            {project.desc2 && (
              <div className="p-6 bg-white/5 border-l-2 border-[#c5a059] font-exo">
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {project.desc2}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
                {project.name || project.title}
              </h2>
              <p className="text-lg text-gray-400 font-exo italic">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-orbitron text-xs text-[#c5a059] uppercase tracking-widest mb-4">
                Built With
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs font-orbitron rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div>
                <h3 className="font-orbitron text-xs text-[#c5a059] uppercase tracking-widest mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 font-exo">
                      <span className="text-[#c5a059] mt-1">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Links */}
            <div className="flex gap-4 mt-auto">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-[#c5a059] text-black font-orbitron font-bold text-center hover:bg-white transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                >
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 border border-white/20 text-white font-orbitron font-bold text-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all"
                >
                  Github Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Related Section */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-white/10 bg-black/50 p-12">
            <h3 className="font-orbitron text-xs text-gray-500 uppercase tracking-widest mb-8">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 3).map((related, idx) => (
                <div
                  key={idx}
                  onClick={() => onProjectChange(allProjects.indexOf(related))}
                  className="cursor-pointer glass-card border-white/5 hover:border-[#c5a059]/50 group transition-all p-4"
                >
                  <h4 className="font-orbitron text-sm text-white group-hover:text-[#c5a059] transition-colors mb-2">
                    {related.name || related.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-exo line-clamp-2">
                    {related.description}
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
