import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="contatiner bg-purple rounded-t-2xl mt-8 text-white">
      <div className="flex justify-around items-center">
        <Link
          active={true}
          activeClass="active"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          to="home"
        >
          <h1 className="text-xl text-black font-semibold uppercase">
            <span className="text-white">mc</span>bel.
          </h1>
        </Link>
      </div>
      <hr className="w-[90%] mx-auto bg-primary  " />
      <p className="down w-full text-xs text-center py-4">
        &copy; Copyright 2024 | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
