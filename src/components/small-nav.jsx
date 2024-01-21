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
  const linkProps = {
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500,
  };
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-3xl bg-gradient-45 px-6 py-4 dark:bg-[#4c00ffcb] md:hidden">
      <ul className="small-nav flex items-center gap-x-12 text-2xl font-bold text-light sm:gap-x-16">
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
            <span className="absolute -bottom-[115%] left-1/2 -translate-x-1/2 text-[8px] text-light">
              home
            </span>
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
            <span className="absolute -bottom-[115%] left-1/2 -translate-x-1/2 text-[8px] text-light">
              about
            </span>
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
            <span className="absolute -bottom-[115%] left-1/2 -translate-x-1/2 text-[8px] text-light">
              skills
            </span>
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
            <span className="absolute -bottom-[115%] left-1/2 -translate-x-1/2 text-[8px] text-light">
              portfolio
            </span>
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
            <span className="absolute -bottom-[115%] left-1/2 -translate-x-1/2 text-[8px] text-light">
              contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SmallNave;
