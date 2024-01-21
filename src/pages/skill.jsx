import React from "react";
import { useSelector } from "react-redux";
import SkillBar from "../components/skillbar";

const Skills = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const myRef = document.getElementById("skills");

  return (
    <section
      className="container flex h-screen  w-full flex-col gap-y-24 pt-14 dark:text-light"
      id="skills"
    >
      <div className="title">
        <h2 className="text-center text-3xl font-bold">
          Professional <span className="text-purple">skills</span>
        </h2>
        <p className="text-[13px] font-medium opacity-60">Talents</p>
      </div>
      <div className="skills-container flex w-full flex-wrap items-center justify-center gap-8">
        <div className="skill-list flex aspect-square w-[500px] flex-col items-center justify-start gap-y-8">
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">HTML5 / CSS3</h3>
            <SkillBar percentage={95} />
          </div>
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">Tailwind</h3>
            <SkillBar percentage={90} />
          </div>
          <div className="skill">
            <h3 className=" text-start text-lg font-semibold">JavaScript</h3>
            <SkillBar percentage={85} />
          </div>
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">React</h3>
            <SkillBar percentage={75} />
          </div>
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">Git & GitHub</h3>
            <SkillBar percentage={80} />
          </div>
        </div>
        <div className="skill-list flex aspect-square w-[500px] flex-col items-center justify-start gap-y-8">
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">NodeJS</h3>
            <SkillBar percentage={75} />
          </div>
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">Python</h3>
            <SkillBar percentage={80} />
          </div>
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">mysql</h3>
            <SkillBar percentage={89} />
          </div>
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">MongoDB</h3>
            <SkillBar percentage={80} />
          </div>
          <div className="skill">
            <h3 className="text-start text-lg font-semibold">
              ExpressJS / Django
            </h3>
            <SkillBar percentage={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
