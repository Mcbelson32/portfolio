import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Card = ({ img, name, type, link }) => {
  return (
    <div data-aos="zoom-in" className="max-w-96 w-full md:w-80 lg:w-[300px] xl:w-80 h-auto rounded-2xl">
      <img
        src={img}
        alt="project Image"
        className="w-full h-60 lg:h-56 rounded-2xl shadow-lg shadow-secondary dark:shadow-primary"
      />
      <div className="text flex items-center justify-between px-1 mt-3">
        <div className="text-start">
          <h3>{name}</h3>
          <p className="text-xs text-gray-600">{type}</p>
        </div>
        <a href={link} target="blank">
          <BsFillArrowUpRightCircleFill className="text-secondary dark:text-primary text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Card;
