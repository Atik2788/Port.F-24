






import React, { useState } from "react";

type Project = {
  id: number;
  name: string;
  images: { src: string; title: string; link: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Project 4",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
];

export const ProjectsCarousel: React.FC = () => {
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

  return (
    <section className="relative w-full justify-center items-center p-8 overflow-hidden dark-bg-deep hidden md:flex">
      {/* Global arrows */}
      <button
        onClick={prevProject}
        className="absolute left-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white "
      >
        &#60;
      </button>
      <button
        onClick={nextProject}
        className="absolute right-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white"
      >
        &#62;
      </button>
      

      <div className="relative w-full flex justify-center overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${offset + 500}px)` }} // center adjustment
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`relative w-80 h-96 flex-shrink-0 mx-3 rounded-lg shadow-lg overflow-hidden ${
                i === currentIndex ? "scale-105 z-20" : "scale-90 blur-sm z-10"
              } transition-all duration-700`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4"
                style={{
                  backgroundImage: `url(${
                    project.images[i === currentIndex ? currentImageIndex : 0]
                      .src
                  })`,
                }}
              >
                <div className="text-white bg-black/50 p-2 rounded">
                  {
                    project.images[i === currentIndex ? currentImageIndex : 0]
                      .title
                  }
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





    </section>
  );
};











import React, { useState } from "react";

type Project = {
  id: number;
  name: string;
  images: { src: string; title: string; link: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "https://chatgpt.com/c/68fe45e3-f1c8-8320-9691-68d537d63e0e",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Project 4",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "https://chatgpt.com/c/68fe45e3-f1c8-8320-9691-68d537d63e0e",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
];

export const ProjectsCarousel: React.FC = () => {
  // ======= PC Version (Carousel) =======
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

  const slideWidth = 300;
  const offset = -currentIndex * (slideWidth + 24);

  return (
    <>
      {/* ✅ PC / Large Screen View */}
      <section className="relative w-full justify-center items-center p-8 overflow-hidden dark-bg-deep hidden md:flex">
        {/* Navigation arrows */}
        <button
          onClick={prevProject}
          className="absolute left-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white "
        >
          &#60;
        </button>
        <button
          onClick={nextProject}
          className="absolute right-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white"
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
                    : "scale-90 blur-sm z-10 opacity-70"
                } transition-all duration-700`}
              >
                <div
                  className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4"
                  style={{
                    backgroundImage: `url(${
                      project.images[i === currentIndex ? currentImageIndex : 0]
                        .src
                    })`,
                  }}
                >
                  <div className="text-white bg-black/50 p-2 rounded">
                    {
                      project.images[
                        i === currentIndex ? currentImageIndex : 0
                      ].title
                    }
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
      </section>

      {/* ✅ Mobile + Tablet View */}
      <section className="md:hidden w-full px-4 py-6 space-y-6 dark-bg-deep">
        {projects.map((project, i) => {
          const [imgIndex, setImgIndex] = useState(0);
          const len = project.images.length;

          const prevImg = () =>
            setImgIndex((prev) => (prev === 0 ? len - 1 : prev - 1));
          const nextImg = () =>
            setImgIndex((prev) => (prev + 1) % len);

          return (
            <div
              key={project.id}
              className="relative w-full h-80 bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${project.images[imgIndex].src})`,
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {project.images[imgIndex].title}
                </h3>
              </div>

              {len > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
                  >
                    &#60;
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full"
                  >
                    &#62;
                  </button>
                </>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};













import React, { useState } from "react";

type Project = {
  id: number;
  name: string;
  images: { src: string; title: string; link: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    name: "Project 2",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Project 4",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
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

  return (
    <section className="relative w-full justify-center items-center p-8 overflow-hidden dark-bg-deep flex md:flex">
      {/* Global arrows */}
      <button
        onClick={prevProject}
        className="absolute left-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white "
      >
        &#60;
      </button>
      <button
        onClick={nextProject}
        className="absolute right-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white"
      >
        &#62;
      </button>
      

      <div className="relative w-full flex justify-center overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${offset + 500}px)` }} // center adjustment
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`relative w-80 h-96 flex-shrink-0 mx-3 rounded-lg shadow-lg overflow-hidden ${
                i === currentIndex ? "scale-105 z-20" : "scale-90 blur-sm z-10"
              } transition-all duration-700`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4"
                style={{
                  backgroundImage: `url(${
                    project.images[i === currentIndex ? currentImageIndex : 0]
                      .src
                  })`,
                }}
              >
                <div className="text-white bg-black/50 p-2 rounded">
                  {
                    project.images[i === currentIndex ? currentImageIndex : 0]
                      .title
                  }
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

    </section>
  );
};







/*************/


import React, { useState } from "react";

type Project = {
  id: number;
  name: string;
  images: { src: string; title: string; link: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "https://github.com/Atik2788?tab=repositories",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
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
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Project 3",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Project 4",
    images: [
      {
        src: "https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1",
        title:
          "Modern dashboard design with interactive charts and real-time data updates for a finance app",
        link: "#",
      },
      {
        src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
        title:
          "User profile and settings section with responsive design and dark mode support",
        link: "#",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        title:
          "Interactive analytics page with graphs, filters, and export options for data-driven decisions",
        link: "#",
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

  return (
    <section className="relative w-full justify-center items-center p-8 overflow-hidden flex md:flex bg-dark-deep">
      {/* Global arrows */}
      <button
        onClick={prevProject}
        className="absolute left-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white hidden lg:flex"
      >
        &#60;
      </button>
      <button
        onClick={nextProject}
        className="absolute right-2 text-4xl z-20 bg-transparent hover:text-gray-300 text-white hidden lg:flex"
      >
        &#62;
      </button>
      

      <div className="relative w-full flex justify-center overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
             style={{
                    transform:
                      window.innerWidth >= 1024 // lg breakpoint (1024px)
                        ? `translateX(${offset + 500}px)` // শুধুমাত্র PC তে
                        : "translateX(0)", // mobile/tablet এ normal থাকবে
                  }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`relative w-80 h-96 flex-shrink-0 mx-3 rounded-lg shadow-lg overflow-hidden ${
                i === currentIndex ? "scale-105 z-20" : "scale-90 blur-sm z-10"
              } transition-all duration-700`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative flex flex-col justify-end p-4"
                style={{
                  backgroundImage: `url(${
                    project.images[i === currentIndex ? currentImageIndex : 0]
                      .src
                  })`,
                }}
              >
                <div className="text-white bg-black/50 p-2 rounded">
                  {
                    project.images[i === currentIndex ? currentImageIndex : 0]
                      .title
                  }
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

    </section>
  );
};

