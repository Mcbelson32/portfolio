import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

const SkillBar = ({ percentage }) => {
  return (
    <LazyLoad height={10} offset={100}>
      <div className="progress-bar" style={{ width: "inherit" }}>
        <span className="absolute -top-7 right-1 text-lg font-semibold">
          {percentage}%
        </span>
        <div
          className="progress-value"
          style={{ "--skill": `${percentage}%` }}
        ></div>
      </div>
    </LazyLoad>
  );
};

export default SkillBar;
