// ProjectsModal.tsx
import React, { useState } from "react";
import { ProjectsModalProps } from "../type/types";


export const ProjectsModal: React.FC<ProjectsModalProps> = ({
    isOpen,
    onClose,
    project,
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev === 0 ? project.images.length - 1 : prev - 1)
        );
    };

    const nextImage = () => {
        setCurrentImageIndex(
            (prev) => (prev === project.images.length - 1 ? 0 : prev + 1)
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="dark-bg rounded-lg md:max-w-7xl w-10/12 h-[80vh] mx-4 md:flex overflow-y-auto relative">

                {/* Top Center Project Name */}
                <div className="absolute w-full top-6 left-1/2 -translate-x-1/2 z-50 bg-black/70 text-[#3fd6c7] font-bold text-xl md:text-2xl py-2 px-6 shadow-lg text-center">
                    {project.name}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-2xl font-bold text-black hover:text-white bg-[#53d7d5] hover:bg-[#35b5a3] rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors"
                >
                    ×
                </button>


                {/* Left Side */}
                <div className="md:w-1/2 p-6 flex flex-col md:flex-col justify-center min-h-full mb-10 md:mb-0">
                    {/* Project Info */}
                    <p className="text-xl font-bold text-[#3fd6c7]  md:mt-20 mt-32">Project Info:</p>
                    {project.images.map((img, idx) => (
                        <div key={idx} className="mb-4">
                            {img.info1 && (
                                <p className="text-md font-bold  mb-2">{img.info1}</p>
                            )}
                            {img.info2 && (
                                <p className="text-md font-bold mb-2">{img.info2}</p>
                            )}
                            {img.info3 && (
                                <p className="text-md font-bold mb-2">{img.info3}</p>
                            )}

                        </div>
                    ))}

                    { /* Stack Info */}
                    <p className="text-xl font-bold text-[#3fd6c7]">Tech Stack:</p>
                    <div className=" gap-2 mt-2 flexUi">
                        {project.techStack.map((tech, idx) => (
                            <p
                                key={idx}
                                className=" text-[#3fd6c7] font-medium text-sm bg-black/70 px-2 rounded-sm"
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                    <a href={project.git}  target="_blank" className="mt-8 text-sm font-bold text-[#3fd6c7]">(To get more info, please visit GitHub)</a>

                </div>


                {/* Right Side */}
                <div className="md:w-1/2  lg:w-full relative flex flex-col md:flex-col items-center justify-center p-4 md:mt-0 md:mb-0 -mt-20 mb-10">
                    {/* Image */}
                    <img
                        src={project.images[currentImageIndex].src}
                        alt={project.name}
                        className="max-h-[80vh] md:max-h-[90vh] w-full object-contain rounded shadow-lg"
                    />

                    {/* Left Arrow */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl font-bold text-white bg-[#53d7d5] hover:bg-black/60 rounded-full px-3 py-1 transition-all"
                    >
                        &#60;
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl font-bold text-white bg-[#53d7d5] hover:bg-black/60 rounded-full px-3 py-1 transition-all"
                    >
                        &#62;
                    </button>


                    {/* View Links */}
                    <div className="flex w-[30vh] md:absolute md:left-30 md:bottom-24 lg:bottom-10 ">
                       <div className="flexUix gap-4 w-full items-center justify-center mt-5">
                         <a
                            href={project.git}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#3fd6c7] w-40 md:w-64 hover:bg-[#35b5a3] text-black px-4 py-2 rounded text-center"
                        >
                            GitHub
                        </a>
                        <a
                            href={project.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#3fd6c7] w-40 md:w-64 hover:bg-[#35b5a3] text-black px-4 py-2 rounded text-center"
                        >
                            Live Site
                        </a>
                       </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
