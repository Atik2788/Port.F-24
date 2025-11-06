import React, { useEffect, useState } from "react";
import { ProjectsDivMobile } from "./ProjectDivMobile";
import { ProjectsModal } from "./ProjectsModal";
import { projects } from '../data/projectsData'
import { Project } from "../type/types";
import ProjectDivPC from "./ProjectDivPC";


export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setCurrentImageIndex(0);
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setCurrentImageIndex(0);
  };

  // ✅ Auto change image every 3 seconds for current project
  useEffect(() => {
    const imageTimer = setInterval(() => {
      const len = projects[currentIndex].images.length;
      setCurrentImageIndex((prev) => (prev + 1) % len);
    }, 1500);
    return () => clearInterval(imageTimer);
  }, [currentIndex]);

  // ✅ For mobile auto-slide
  const [mobileImageIndices, setMobileImageIndices] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const mobileTimer = setInterval(() => {
      setMobileImageIndices((prev) =>
        prev.map((val, i) => (val + 1) % projects[i].images.length)
      );
    }, 3000);
    return () => clearInterval(mobileTimer);
  }, []);

  const slideWidth = 300;
  const offset = -currentIndex * (slideWidth + 24);



  // for see details modal:
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };



  return (
    <section id="projects" className="w-full min-h-screen bg-dark-deep overflow-visible">


        {/* Card Section */}
        <div className="hidden lg:flex md:flex relative justify-center items-center p-8 overflow-visible">
          {/* Arrows */}
            
          {/* Floating Cards */}
          <div className="overflow-visible w-full">
            <ProjectDivPC
              projects={projects}
              // currentIndex={currentIndex}
              // currentImageIndex={currentImageIndex}
              onViewMore={openModal}
            ></ProjectDivPC>
          </div>
        </div>
      {/* </div> */}



      {/* Mobile View */}
      <div className="lg:hidden md:hidden grid grid-cols-1 gap-6 p-6 justify-items-center">
        <ProjectsDivMobile
          projects={projects}
          mobileImageIndices={mobileImageIndices}
          onViewMore={openModal}
        ></ProjectsDivMobile>
      </div>


      <ProjectsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />


    </section>


  );
};