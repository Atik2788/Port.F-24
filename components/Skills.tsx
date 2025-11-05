import React, { useEffect, useState } from "react";

const Skills = () => {
const skills = [
  // 🧱 Frontend
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React JS",
  "Next JS",
  "React Query",
  "Redux Toolkit",
  "Framer Motion",
  "Shadcn"

  // ⚙️ Backend
  "Node JS",
  "Express JS",
  "Nest JS",
  "MongoDB",
  "Mongoose",
  "REST API",
  "JWT Authentication",
  "ZOD",

  // ☁️ Tools & Others
  "Firebase",
  "Git & GitHub",
  "VS Code",
  "Postman",
  "Vercel",
  "Netlify",
  "Render",
  "Linux (Basic)",
  
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
