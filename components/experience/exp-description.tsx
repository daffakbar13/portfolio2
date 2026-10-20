import React from "react";

const ExperienceDescription: React.FC<{
  paragraphs: string[];
  highlights?: { title: string; description: string }[];
  bulletsTitle?: string;
  bullets: string[];
}> = ({ paragraphs, highlights, bulletsTitle, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      {highlights && (
        <ul className="list-disc pl-6 mb-4">
          {highlights.map((highlight, index) => (
            <li key={index}>
              <strong>{highlight.title}</strong>: {highlight.description}
            </li>
          ))}
        </ul>
      )}
      {bulletsTitle && <p className="mb-4">{bulletsTitle}</p>}
      <ul className="list-disc pl-6 mt-4">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceDescription;
