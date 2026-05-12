import Loading from "../components/Loading";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef();

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://my-portfolio-backend-one-tau.vercel.app/api/certificates"
        );
        const data = await response.json();
        if (data.success) {
          setCertificates(data.data || []);
        } else {
          setError("Could not load certificates from server.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Something went wrong while fetching certificates.");
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  useEffect(() => {
    if (!loading && certificates.length > 0) {
      const ctx = gsap.context(() => {
        gsap.fromTo(".cert-card", 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".cert-grid",
              start: "top 90%",
              toggleActions: "play none none none",
            }
          }
        );
      }, containerRef);
      
      // Refresh ScrollTrigger as content has loaded
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      return () => ctx.revert();
    }
  }, [loading, certificates]);

  if (error) {
    return (
      <section id="certificate" className="max-container section-padding px-6 min-h-[400px] flex justify-center items-center">
        <div className="text-[#ff00ff] font-orbitron text-xl">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="certificate" className="max-container section-padding px-6 min-h-[600px] relative">
      <h1 className="text-5xl font-orbitron font-bold text-white mb-8 break-words">
        My <span className="glow-text-gold">Certificates</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 font-exo leading-relaxed mb-12 max-w-3xl border-l-4 border-[#00f2ff] pl-6 py-4 glass-card break-words">
        These are the certificates I have earned while learning new technologies. 
        Each one shows a new skill I have picked up.
      </p>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-[#00f2ff] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : certificates.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
          <p className="font-orbitron text-gray-500 uppercase tracking-widest animate-pulse">
            No certificates found yet.
          </p>
        </div>
      ) : (
        <div className="cert-grid grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div key={cert._id} className="cert-card glass-card hover:neon-border-cyan transition-all duration-500 flex flex-col group">
              <div className="relative aspect-video overflow-hidden mb-4 rounded-lg">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x225?text=Certificate+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-[8px] font-orbitron text-[#00f2ff] border border-[#00f2ff] z-10">
                  ID: {cert._id.slice(-6).toUpperCase()}
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-orbitron font-bold text-white mb-2 group-hover:text-[#00f2ff] transition-colors">{cert.title}</h3>
                <p className="text-xs font-orbitron text-gray-500 mb-4 tracking-tighter uppercase">{cert.issuedBy}</p>
                <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-orbitron text-gray-400">ISSUED: {new Date(cert.createdAt).toLocaleDateString()}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse"></div>
                    <span className="text-[9px] font-orbitron text-[#00f2ff]">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>

  );
};

export default Certificate;

