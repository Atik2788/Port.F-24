import React, { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "React JS",
    "Nest JS",
    "MongoDB",
    "Firebase",
    "Node JS",
    "Express JS",
    "React Query",
  ];
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    function showArrow() {
      if (window.scrollY >= 120 ) {
        setActive(true)}
      else{
        setActive(false)
      }
    }

    window.addEventListener("scroll", showArrow);

    return () => {
      window.addEventListener("scroll", showArrow);
    };
  }, []);

  return (
    <div className="skills_sec lg:mt-3">
      <h1>Skills</h1>
      <div className="skills_name">
        {skills.map((skill, index) => (
          <h4 key={index} className={isActive ? "slide__left": 'none'} style={{animationDelay: `${index * 0.2}s`}}>
            {skill}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Skills;
