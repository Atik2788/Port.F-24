import React, { useState } from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
  const [isModalVisible, setModalVisible] = useState(false);

  // shoing modal function
  const handleEmailClicked = (e: any) => {
    e.preventDefault();

    // Copy the email to the clipboard
    navigator.clipboard
      .writeText("atikur.rahman2788@gmail.com")
      .then(() => {
        // Show the modal
        setModalVisible(true);

        // Hide the modal after 2 seconds
        setTimeout(() => {
          setModalVisible(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("Failed to copy email", err);
      });
  };

  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <button>Front-End Developer</button>
          <h1 className="white">Talk is cheap.</h1>
          <h1 className="white">Show me the code!</h1>
          <p className="gray">
            I design and code beautiful simple things, and I love what I do.
          </p>
          <a className="green" onClick={handleEmailClicked}>
            Let&#39;s chat!
          </a>
        </div>
        <div className="pro-pic-container">
          <Image className="pro-pic" src="/images/atik.png" width={463} height={450} alt="atik" />
        </div>
      </div>
      {isModalVisible && (
        <div className="copyEmail_modal">
          <p>Email Copied...</p>
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
          animation: slideInOut 2s ease forwards; /* Apply animation */
        }

        @keyframes slideInOut {
          0% {
            left: -100%; /* Start off-screen */
          }
          25% {
            left: 25%; /* Slide to center */
            transform: translate(-50%, -50%);
          }
          75% {
            left: 25%; /* Stay in the center */
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
