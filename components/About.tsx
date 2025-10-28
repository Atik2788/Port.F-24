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
            &ldquo;Front-end development isn&rsquo;t just about making things look good –
            it&rsquo;s about crafting interfaces that are intuitive and work
            effortlessly for users.&rdquo;
          </h3>
          <p className="gray">
            I am a hard-working, honest, self-motivated Web Developer with
            knowledge in React, NextJS, Node, MongoDB, JavaScript, HTML, CSS,
            SASS, and mobile responsive web Development. I already do some
            projects.
            <br />
            <br />I am naturally persevered, self-confident, quietly curious,
            innovative and constantly challenging my skills.
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
