import React from "react";
import Image, { StaticImageData } from "next/image";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" className="dark-bg px-6 md:px-20 py-10">
      <div className="w-full flex flex-col md:flex-col lg:flex-row justify-start lg:justify-between gap-10">
        {/* Left / Text Section */}
        <div className="about-text lg:w-1/2">
        <h5 className="gray">Introduce</h5>
        <h1 className="white">Hello, I&#39;m Atik</h1>
          <h3 className="white">
            &ldquo;Web development isn&rsquo;t just about building websites –
            it&rsquo;s about creating complete digital experiences that look great,
            work fast, and feel natural for users.&rdquo;
          </h3>
          <p className="gray">
            I am a dedicated and self-motivated <span className="text-white font-semibold">Full Stack Web Developer</span> 
            skilled in both front-end and back-end technologies.  
            My expertise includes <span className="text-white">React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB,</span> 
            and modern JavaScript frameworks for building fast, responsive, and scalable web applications.
            <br />
            <br />
            I love crafting clean, intuitive UI with React and ensuring robust, secure back-end logic with Node and MongoDB.  
            <br />
            <br />
            I’m naturally perseverant, curious, and always eager to explore new technologies to refine my development skills.
          </p>
      </div>

        {/* Right / Skills Section */}
        <div id="skill" className="lg:w-1/2">
          <Skills />
        </div>
      </div>
    </section>


  );
}

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  projects: number;
};

// function AboutCard({ title, icon, description, projects }: Props) {
//   return (
//     <div className="light-bg about-card">
//       <div className="flex justify-space">
//         <h3 className="green">{title}</h3>
//         <Image src={icon} width={28} height={28} alt={title} />
//       </div>
//       <p className="white">{description}</p>
//       <span className="gray">{projects.toString()} projects</span>
//     </div>
//   );
// }
