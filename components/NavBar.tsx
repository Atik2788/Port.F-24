import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Md. Atikur Rahman Shanta";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  // Typewriter effect logic
  useEffect(() => {
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval); // Clear the interval when finished
      }
    }, 100); // Adjust the speed as needed

    // Cleanup the interval on component unmount
    return () => clearInterval(typeInterval);
  }, []); // Empty dependency array to start the typing effect once

  

  const navList = (
    <>
      <li className="green">
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/#about">About Me</Link>
      </li>
      <li>
        <Link href="/#skill">Skills</Link>
      </li>
      <li>
        <Link href="/#projects">Project&rsquo;s</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="flex light-bg justify-space p-0">
      <div className="logo white flex_nav">
        <h1><Link href="/" className="nav__name">{displayedName}</Link></h1>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <div className="hamburger-icon">&#9776;</div>
        </div>
      </div>

      <div className={'nav_list_div_small'}>
        <ul className={`flex white ${menuOpen ? 'navList_small_show' : 'navList_small_hide'}`}>
          {navList}
        </ul>
      </div>

      <ul className="flex white navList__big nav_style">{navList}</ul>
    </nav>
  );
}
