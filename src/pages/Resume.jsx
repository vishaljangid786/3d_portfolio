import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { DownloadIcon } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Resume = () => {
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        setWidth(screenWidth - 32);
      } else if (screenWidth < 1024) {
        setWidth(600);
      } else {
        setWidth(800);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="max-container pt-32">
      <h1 className="text-4xl font-orbitron font-bold text-white mb-8 break-words">
        My <span className="neon-text-cyan">Resume</span>
      </h1>

      <div className="flex flex-col gap-8">
        {/* Download Button */}
        <div className="flex justify-between items-center glass-card border-l-4 border-l-[#ff00ff]">
          <h2 className="text-xl font-orbitron font-bold text-white tracking-widest">Download PDF</h2>

          <a
            href="/resume.pdf"
            download="Vishal_Resume"
            className="flex items-center gap-2 px-8 py-3 bg-[#ff00ff] text-black font-orbitron font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(255,0,255,0.4)]"
          >
            Download Now
            <DownloadIcon size={16} />
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="glass-card flex justify-center overflow-x-auto border border-white/10 p-6">
          <div className="relative">
            <div className="absolute inset-0 border border-[#00f2ff]/20 pointer-events-none z-10"></div>
            <Document file="/resume.pdf">
              <Page 
                pageNumber={1} 
                width={width} 
                className="shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;