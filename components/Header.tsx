import React, { useState } from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
  const [isModalVisible, setModalVisible] = useState(false);

  // Whats Number copy function
  const handleWhatsAppClicked = (e: any) => {
    e.preventDefault();

    navigator.clipboard
      .writeText("atikur.rahman2788@gmail.com")
      .then(() => {
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("Failed to copy email", err);
      });
  };


  const handleOpenWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  const phoneNumber = "8801303012788"; 
  const message = encodeURIComponent("Hello Atik! I want to discuss a project with you.");

  // WhatsApp API URL
  const whatsappURL = `https://wa.me/${phoneNumber}?Hi, I am Atik, thank you for your text, I will response you as soon as possible=${message}`;

  // Browser বা mobile এ WhatsApp খুলবে
  window.open(whatsappURL, "_blank");
};


  return (
    <header className="light-bg px-6 md:px-20 py-12">
      <NavBar />
      <div className="header w-full flex justify-start lg:justify-between md:justify-between mt-20 light-bg">
        <div>
          <button className="button">Full Stack Developer</button>
          <h1 className="white slide__right">Talk is cheap.</h1>
          <h1 className="white slide__left">Show me the code!</h1>
          <p className="gray slide__bottom">
            I design and code beautiful simple things, and I love what I do.
          </p>
          <div className="slide__bottom gap-4">
            {/* Email button */}
            <a className="green slide__left cursor-pointer" onClick={handleOpenWhatsApp}>
              Let&#39;s chat!
            </a>

            {/* Resume download button */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/15miA-SbKnXe0MdLLzWu5o-bctZtotb8n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-center text-black rounded-sm cursor-pointer  bg-[#3fd6c7] py-2 px-4"
                style={{ textDecoration: "none" }} // <-- underline remove
              >
                 <span className="text-sm">See The Resume</span>
              </a>


            </div>
          </div>
        </div>

        <div className="pro-pic-container">
          <div className="pro-pic-ani">
            <Image
              className="pro-pic"
              src="/images/partners/atik pro.jpg"
              width={450}
              height={450}
              alt="atik"
            />
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div className="copyEmail_modal">
          <p>What's App Number Copied...</p>
        </div>
      )}

      <style jsx>{`
        .copyEmail_modal {
          position: fixed;
          top: 52%;
          left: -100%; /* Start from off-screen to the left */
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 1rem 3rem;
          border-radius: 5px;
          text-align: center;
          z-index: 1000;
          animation: slideInOut 2.5s ease forwards; /* Apply animation */
        }

        @keyframes slideInOut {
          0% {
            left: -100%; /* Start off-screen */
          }
          25% {
            left: 50%; /* Slide to center */
            transform: translate(-50%, -50%);
          }
          75% {
            left: 50%; /* Stay in the center */
            transform: translate(-50%, -50%);
          }
          100% {
            left: 150%; /* Slide off-screen to the right */
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </header>
  );
}
