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
        setWidth(screenWidth - 32); // mobile padding adjustment
      } else if (screenWidth < 1024) {
        setWidth(600);
      } else {
        setWidth(800);
      }
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="max-container px-4">
      <h1 className="sectionHeading">Resume</h1>

      <div className="flex flex-col gap-5">
        {/* Download Button */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Resume.pdf</h2>

          <a
            href="/resume.pdf"
            download="Vishal Resume"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-colors"
          >
            Download
            <DownloadIcon className="inline-block ml-2" size={16} />
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex justify-center overflow-x-auto">
          <Document file="/resume.pdf">
            <Page pageNumber={1} width={width} />
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Resume;