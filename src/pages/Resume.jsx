import { Document, Page, pdfjs } from "react-pdf";

import workerSrc from "pdfjs-dist/build/pdf.worker?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
const Resume = () => {
  return (
    <section className="max-container">
      <h1 className="sectionHeading">Resume</h1>

      <div className="flex flex-col gap-5">
        {/* Download Button */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Resume.pdf</h2>

          <a
            href="/resume.pdf"
            download="Resume"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex justify-center">
          <Document file="/resume.pdf">
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Resume;