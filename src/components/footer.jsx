import React from "react";
import { Link } from "react-scroll";

import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="contatiner bg-purple rounded-t-2xl mt-32 text-white">
      <div className="w-full flex flex-wrap justify-around items-center pt-6 pb-4">
        <div>
          <Link
            active={true}
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
            to="home"
          >
            <h1 className="text-xl text-secondary font-semibold uppercase">
              <span className="text-white">mc</span>bel.
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex w-full flex-wrap flex-col  sm:flex-row items-center gap-x-10 gap-y-3 font-semibold text-sm lg:gap-x-14 lg:text-base">
            <li>
              <Link
                to="home"
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                to="about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                to="skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                to="portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-md:w-full flex justify-center items-center gap-x-6 text-2xl my-6">
          <a href="mailto:mcwelson92@gmail.com"><BiMailSend /></a>
          <a href="https://wa.me/251904537541"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/makbel-hailu-bab1571a2"><FiLinkedin /></a>
        </div>
      </div>
      <hr className="w-[90%] mx-auto bg-primary  " />
      <p className="down w-full text-xs text-center py-4">
        &copy; Copyright 2024 | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
