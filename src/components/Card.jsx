import React from "react";

const Card = ({
  image,
  title,
  description,
  subtitle,
  date,
  skills,
  links,
  imageClassName = "object-cover p-2 rounded-xl w-full h-48",
}) => {
  return (
    <div className="overflow-hidden transition duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={title}
          className={imageClassName}
        />
      )}

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-semibold">{title}</h3>

        {/* Subtitle (e.g., "Issued By") */}
        {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}

        {/* Description */}
        {description && (
          <p className="mt-2 text-slate-500 leading-relaxed">{description}</p>
        )}

        {/* Date */}
        {date && (
          <p className="mt-1 text-sm text-gray-400">
            {typeof date === "string"
              ? date
              : new Date(date).toLocaleDateString()}
          </p>
        )}

        {/* Skills/Badges */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Links Section */}
        {links && links.length > 0 && (
          <div className="flex items-center gap-6 mt-5 font-poppins">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold hover:underline ${link.className || "text-blue-600"}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
