import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoFolderOpenOutline,
  IoCallOutline,
  IoCodeSlash,
} from "react-icons/io5";

const SmallNave = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-3xl light-glass px-6 py-4 dark:dark-glass md:hidden">
      <ul className="small-nav flex items-center gap-x-10 text-2xl font-bold text-light sm:gap-x-16">
        <li className="nav-item">
          <Link
            activeClass="active"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            to="home"
          >
            <IoHomeOutline className="" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            to="about"
          >
            <IoPersonOutline className="" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            to="skills"
          >
            <IoCodeSlash className="" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            to="portfolio"
          >
            <IoFolderOpenOutline className="" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            to="contact"
          >
            <IoCallOutline className="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SmallNave;
