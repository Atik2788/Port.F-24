import React from "react";
import { ProjectDivPCProps } from "../type/types";


export const ProjectDivPC: React.FC<ProjectDivPCProps> = ({
  projects,
  currentIndex,
  currentImageIndex,
  onViewMore,
}) => {
  return (
    <>
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={`relative w-80 h-96 flex-shrink-0 mx-3 rounded-lg shadow-lg overflow-hidden ${i === currentIndex ? "scale-105 z-20" : "scale-90 blur-sm opacity-60 z-10"
            } transition-all duration-700`}
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center relative flex flex-col justify-end px-4 transition-all duration-1000"
            style={{
              backgroundImage: `url(${project.images[i === currentIndex ? currentImageIndex : 0].src})`,
            }}
          >
            <div className="absolute top-2 left-2 right-2 p-3 rounded text-center">
              <h2 className="text-[#3fd6c7] bg-black/80 rounded-full py-1 font-bold text-lg mb-1">
                {project.name}
              </h2>

              {/* Info */}
              {["info1", "info2", "info3"].map((key) => {
                const info = project.images[i === currentIndex ? currentImageIndex : 0][key as keyof typeof project.images[0]];
                return info ? (
                  <p
                    key={key}
                    className="text-white text-sm mb-2 bg-black/60 p-2 rounded-md"
                  >
                    {info}
                  </p>
                ) : null;
              })}
            </div>

            {/* View More Button */}
            <button
              onClick={() => onViewMore(project)}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3fd6c7] hover:bg-[#35b5a3] text-black px-4 py-2 rounded font-semibold shadow-md transition-all duration-300"
            >
              View More
            </button>


          </div>
        </div>
      ))}
    </>
  );
};
