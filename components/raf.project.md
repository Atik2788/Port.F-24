

import React, { useEffect, useState } from "react";
import { ProjectsDivMobile } from "./ProjectDivMobile";

type Project = {
  id: number;
  name: string;
  images: { src: string; title1: string; title2: string, link: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        title2: "Aa finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=600&q=90&fit=clip",
        title1: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        title2: "Modern dashboard or a finance app",
        link: "https://drive.google.com/drive/u/1/home",
      },
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        title2: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        title2: "Modern dashboard design with ine data updates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=600&q=90&fit=clip",
        title1: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        title2: "Modern dashboard design with and real-tima finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        title2: "Modern dashbinteractive charts and real-time data updates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboard design with interactive chnd real-time data updates for a finance app",
        title2: "Modern dashboard desigs and real-time data updates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=600&q=90&fit=clip",
        title1: "Modern dashboard design with interactitime data updates for a finance app",
        title2: "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboard design with intce app",
        title2: "Modern dashboard design with interactive charts and real-tupdates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
    ],
  },
  {
    id: 4,
    name: "Project 4",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboard design with for a finance app",
        title2: "Modern dashboard design with interactive charts and reaapp",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dashboaata updates for a finance app",
        title2: "Modern dashboard design with interactive nance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title1: "Modern dasrts and real-time data updates for a finance app",
        title2: "Modern dashboard design with interacdates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
    ],
  },
];



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


  // Modla for see details, 
    const [selectedProject, setSelectedProject] = useState(null);



  return (
    <section id="projects" className="w-full bg-dark-deep">
      {/* Desktop View */}
      <div className="hidden lg:flex md:flex relative justify-center items-center p-8 overflow-hidden">
        {/* Global arrows */}
        <button
          onClick={prevProject}
          className="absolute left-2 text-4xl z-20 hover:text-gray-300 text-black bg-[#3fd6c7] rounded-full px-3 py-1"
        >
          &#60;
        </button>
        <button
          onClick={nextProject}
          className="absolute right-2 text-4xl z-20 hover:text-gray-300 text-black bg-[#3fd6c7] rounded-full px-3 py-1"
        >
          &#62;
        </button>

        <div className="relative w-full flex justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${offset + 500}px)` }}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`relative w-80 h-96 flex-shrink-0 mx-3 rounded-lg shadow-lg overflow-hidden ${
                  i === currentIndex
                    ? "scale-105 z-20"
                    : "scale-90 blur-sm opacity-60 z-10"
                } transition-all duration-700`}
              >
                <div
                  className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4 transition-all duration-1000"
                  style={{
                    backgroundImage: `url(${project.images[
                      i === currentIndex ? currentImageIndex : 0
                    ].src})`,
                  }}
                >
                  
                  <div className="relative h-96 p-4 justify-end">
                    <div className="text-white bg-black/50 p-2 rounded mb-2">
                      {
                        project.images[
                          i === currentIndex ? currentImageIndex : 0
                        ].title1
                      }
                    </div>
                    <div className="text-white bg-black/50 p-2 rounded mb-2">
                      {
                        project.images[
                          i === currentIndex ? currentImageIndex : 0
                        ].title2
                      }
                    </div>
                    <a
                      // href={
                      //   project.images[
                      //     i === currentIndex ? currentImageIndex : 0
                      //   ].link
                      // }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-7 left-4 right-4 text-center dark-bg p-2 text-white rounded"
                    >
                      View More
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Mobile View */}
      <div className="lg:hidden md:hidden grid grid-cols-1 gap-6 p-6 justify-items-center">
        <ProjectsDivMobile projects={projects}></ProjectsDivMobile>
        {/* {projects.map((project, i) => (
          <div
            key={project.id}
            className="relative w-80 h-96 rounded-lg shadow-lg overflow-hidden transition-all duration-700"
          >
            <div
              className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4 transition-all duration-1000"
              style={{
                backgroundImage: `url(${project.images[mobileImageIndices[i]].src})`,
              }}
            >
              <div className="relative h-96 p-4 flex flex-col justify-end">
                <div className="text-white bg-black/50 p-2 rounded mb-2">
                  {project.images[mobileImageIndices[i]].title1}
                </div>
                <div className="text-white bg-black/50 p-2 rounded mb-2">
                  {project.images[mobileImageIndices[i]].title2}
                </div>
                <a
                  href={project.images[mobileImageIndices[i]].link}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="absolute bottom-0 left-4 right-4 text-center dark-bg p-2 text-white rounded"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        ))} */}
      </div>


    </section>
  );
};