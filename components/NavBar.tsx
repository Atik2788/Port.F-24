import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked");
  };

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
        <Link href="/#projects">Project's</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white flex_nav">
        <Link href="/" className="nav_link">Md. Atikur Rahman Shanta</Link>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <div className="hamburger-icon">&#9776;</div>
        </div>
      </div>


      {/* Conditionally render the menu based on screen size and state */}
      <div className="nav_list_div">
        {/* {menuOpen && <ul className="flex white navList_small">{navList}</ul>} */}
         <ul className={`flex white ${menuOpen === true ? 'navList_small_show': 'navList_small'}`}>{navList}</ul>
      </div>

      <ul className="flex white navList__big nav_style">{navList}</ul>

    </nav>
  );
}
