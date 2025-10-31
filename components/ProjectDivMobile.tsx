import React from "react";
import { ProjectsDivMobileProps } from "../type/types";

export const ProjectsDivMobile: React.FC<ProjectsDivMobileProps> = ({
  projects,
  mobileImageIndices,
  onViewMore,
}) => {
  return (
    <>
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="relative w-80 h-96 rounded-lg shadow-lg overflow-hidden transition-all duration-700"
        >
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center relative transition-all duration-1000"
            style={{
              backgroundImage: `url(${project.images[mobileImageIndices[i]].src})`,
            }}
          >

            <div className="absolute top-2 left-2 right-2 p-3 rounded text-center">
              <h2 className="text-[#3fd6c7] bg-black/80 rounded-full py-1 font-bold text-lg mb-1">
                {project.name}
              </h2>

              {project.images[mobileImageIndices[i]].info1 && (
                <p className="text-white text-sm mb-2 bg-black/60 p-2 rounded-md">
                  {project.images[mobileImageIndices[i]].info1}
                </p>
              )}

              {project.images[mobileImageIndices[i]].info2 && (
                <p className="text-white text-sm mb-2 bg-black/60 p-2 rounded-md">
                  {project.images[mobileImageIndices[i]].info2}
                </p>
              )}

              {project.images[mobileImageIndices[i]].info3 && (
                <p className="text-white text-sm mb-2 bg-black/60 p-2 rounded-md">
                  {project.images[mobileImageIndices[i]].info3}
                </p>
              )}
            </div>


            <button
              onClick={() => onViewMore(project)}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#3fd6c7] hover:bg-[#35b5a3] text-black px-4 py-2 rounded font-semibold shadow-md transition-all duration-300"
            >
              View More
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
