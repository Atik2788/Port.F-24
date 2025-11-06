import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Project } from "../type/types";

interface Props {
  projects: Project[];
  onViewMore: (project: Project) => void;
}

const ProjectDivPC: React.FC<Props> = ({ projects, onViewMore }) => {
  const [imageIndices, setImageIndices] = useState(projects.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndices((prev) =>
        prev.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [projects]);

  // Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation control
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Animation variants
  const cardVariants = (i: number) => ({
    hidden: {
      opacity: 0,
      y: i % 2 === 0 ? 300 : -160,
      x: i % 3 === 0 ? -150 : 250,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: [0, -10, 0, 10, 0],
      scale: 1,
      transition: {
        duration: 1,
        delay: i * 0.2,
        ease: "easeOut",
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          // delay: Math.random() * 2,
        },
      },
    },
  });

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-wrap justify-center items-center gap-12 w-full overflow-visible py-20"
    >
      {projects.map((project, i) => {
        const currentImage = project.images[imageIndices[i]].src;

        return (
          <motion.div
            key={project.id}
            variants={cardVariants(i)}
            initial="hidden"
            animate={controls}
            className={`relative w-[500px] h-[600px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.5)]`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url(${currentImage})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>



            {/* Content */}
            <div className="absolute bottom-0 w-full bg-black/60 p-6 text-white backdrop-blur-sm">
              <h2 className="text-[#3fd6c7] font-bold text-xl mb-3">
                {project.name}
              </h2>

              {/* ✅ Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-[#3fd6c7]/80 text-black font-semibold text-xs px-3 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onViewMore(project)}
                className="bg-[#3fd6c7] hover:bg-[#35b5a3] w-full text-black font-semibold px-4 py-2 rounded-md shadow-md transition-all duration-300"
              >
                View More
              </button>
            </div>

          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectDivPC;
