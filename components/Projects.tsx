

import React, { useState } from "react";

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

  const prevImage = () => {
    const len = projects[currentIndex].images.length;
    setCurrentImageIndex((prev) => (prev === 0 ? len - 1 : prev - 1));
  };

  const nextImage = () => {
    const len = projects[currentIndex].images.length;
    setCurrentImageIndex((prev) => (prev + 1) % len);
  };

  const slideWidth = 300; // card width + gap
  const offset = -currentIndex * (slideWidth + 24); // 24px gap

  /* For Mobile   */

  const [mobileImageIndices, setMobileImageIndices] = useState(
    projects.map(() => 0) // প্রতিটি project এর জন্য 0
  );

  const prevMobileImage = (i: number) => {
    setMobileImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[i] =
        (newIndices[i] - 1 + projects[i].images.length) % projects[i].images.length;
      return newIndices;
    });
  };

  const nextMobileImage = (i: number) => {
    setMobileImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[i] = (newIndices[i] + 1) % projects[i].images.length;
      return newIndices;
    });
  };

  return (
    <section id="projects" className="w-full bg-dark-deep">

      <div className="hidden lg:flex md:flex relative justify-center items-center p-8 overflow-hidden">
        {/* Global arrows */}
        <div className=" rounded-full flex items-center justify-center py-1 px-3">
        <button
          onClick={prevProject}
          className="absolute left-2 text-4xl z-20  hover:text-gray-300 text-black bg-[#3fd6c7] rounded-full px-2 flex justify-center items-center"
        >
          <span className="">&#60;</span>
        </button>
        </div>
        <button
          onClick={nextProject}
          className="absolute right-2 text-4xl z-20 hover:text-gray-300 text-black bg-[#3fd6c7] rounded-full px-2 flex justify-center items-center"
        >
          <span>&#62;</span>
        </button>


        <div className="relative w-full flex justify-center overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${offset + 500}px)` }} // center adjustment
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`relative w-80 h-96 flex-shrink-0 mx-3 rounded-lg shadow-lg overflow-hidden ${i === currentIndex ? "scale-105 z-20" : "scale-90 blur-sm z-10"
                  } transition-all duration-700`}
              >
                <div
                  className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4"
                  style={{
                    backgroundImage: `url(${project.images[i === currentIndex ? currentImageIndex : 0]
                      .src
                      })`,
                  }}
                >
                  <div className="relative h-96 p-4">
                    <div>
                      <div className="text-white bg-black/50 p-2 rounded mb-2">
                        {
                          project.images[i === currentIndex ? currentImageIndex : 0]
                            .title1
                        }
                      </div>
                      <div className="text-white bg-black/50 p-2 rounded">
                        {
                          project.images[i === currentIndex ? currentImageIndex : 0]
                            .title2
                        }
                      </div>
                      <a
                        href={
                          project.images[i === currentIndex ? currentImageIndex : 0].link
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 right-4 text-center bg-white text-black p-4 rounded"
                      >
                        <button className="button">Go Live Site</button>
                      </a>

                    </div>
                  </div>

                  {i === currentIndex && project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
                      >
                        &#60;
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
                      >
                        &#62;
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>



      <div className="flex justify-center items-center">
        <div className="lg:hidden md:hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="relative w-80 h-96 rounded-lg shadow-lg overflow-hidden transition-all duration-700"
            >
              <div
                className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4"
                style={{
                  backgroundImage: `url(${project.images[mobileImageIndices[i]].src})`,
                }}
              >
                <div className="relative h-96 p-4">
                  <div className="flex flex-col md:flex-col gap-2">
                    <div className="text-white bg-black/50 p-2 rounded">
                      {project.images[mobileImageIndices[i]].title1}
                    </div>
                    <div className="text-white bg-black/50 p-2 rounded">
                      {project.images[mobileImageIndices[i]].title2}
                    </div>

                    <a
                      href={project.images[mobileImageIndices[i]].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-4 right-4 text-center text-black p-2 rounded"
                    >
                      <button className="button"> Go Live Site</button>
                    </a>
                  </div>
                </div>

                {/* Arrow buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevMobileImage(i)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
                    >
                      &#60;
                    </button>
                    <button
                      onClick={() => nextMobileImage(i)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
                    >
                      &#62;
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>






    </section>


  );
};

