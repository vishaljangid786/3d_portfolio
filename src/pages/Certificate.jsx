import React, { useEffect, useState } from "react";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(
          "https://my-portfolio-backend-one-tau.vercel.app/api/certificates",
        );

        const data = await response.json();

        if (data.success) {
          setCertificates(data.data);
        } else {
          setError("Failed to fetch certificates");
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
        Loading Certificates...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <section className="min-h-screen max-container px-6 py-16">
      <h1 className="head-text">
        My{" "}
        <span className="font-semibold blue-gradient_text drop-shadow">
          Qualities
        </span>
      </h1>

      <p className="mt-2 leading-relaxed text-slate-500">
        These certifications represent my continuous learning journey and
        commitment to improving my technical expertise. Each certificate
        reflects the skills, knowledge, and hands-on experience I’ve gained
        through courses, competitions, and hackathons that have strengthened my
        development career.
      </p>
      <hr className="border-slate-200 my-10" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert._id}
            className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="object-cover p-2 rounded-xl w-full h-48"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="mt-2 text-gray-500">Issued By: {cert.issuedBy}</p>
              <p className="mt-1 text-sm text-gray-400">
                {new Date(cert.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
