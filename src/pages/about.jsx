import aboutImgDark from "../assets/img/type-dark.gif";
import aboutImgLight from "../assets/img/type-light.gif";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";

import { PiMedalDuotone } from "react-icons/pi";
import { FiBriefcase } from "react-icons/fi";
import { PiHeadsetFill } from "react-icons/pi";

const About = () => {
  const theme = useSelector((state) => state.theme.isDark);
 
  return (
    <section
      className="container h-auto xl:h-screen w-full py-20 2xl:py-32 dark:text-light"
      id="about"
    >
      <h2 className="text-center text-3xl font-bold">
        About <span className="text-purple">Me</span>
      </h2>
      <p className="text-[13px] font-medium opacity-60">My Introduction</p>
      <div className="container mt-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="img flex-1">
          <LazyLoad height={200} offset={100}>
            <img
              className="h-auto w-[400px] rounded-bl-[10px] rounded-br-[40%] rounded-tl-[40%] rounded-tr-[10px] "
              src={theme ? aboutImgDark : aboutImgLight}
              alt="programming about image"
              srcSet=""
              loading="lazy"
            />
          </LazyLoad>
        </div>
        <div className="about__contents flex flex-1 flex-col items-center md:items-start justify-center gap-y-8">
          <div className="cards flex items-center justify-center md:justify-start gap-x-8 ">
            <div className="card aspect-video w-24 lg:w-32  bg-[#d5ccdd] text-center font-bold p-4 flex felx-col justify-start gap-1 items-center dark:border-2 dark:border-primary dark:bg-secondary-dark">
              <PiMedalDuotone className="text-3xl mb-3"/>
              <h3 className="text-sm">Experiance</h3>
              <p className="text-xs opacity-75 font-semibold">3 + Years</p>
            </div>
            <div className="card aspect-video w-24 lg:w-32  bg-[#d5ccdd] text-center font-bold p-4 flex felx-col justify-start gap-1 items-center dark:border-2 dark:border-primary dark:bg-secondary-dark">
            <FiBriefcase className="text-3xl mb-3"/>
              <h3 className="text-sm">Completed</h3>
              <p className="text-xs opacity-75 font-semibold">5 + Projects</p>
            </div>
            <div className="card aspect-video w-24 lg:w-32  bg-[#d5ccdd] text-center font-bold p-4 flex felx-col justify-start gap-1 items-center dark:border-2 dark:border-primary dark:bg-secondary-dark">
            <PiHeadsetFill className="text-3xl mb-3"/>
              <h3 className="text-sm">Support</h3>
              <p className="text-xs opacity-75 font-semibold">Online 24/7</p>
            </div>
          </div>
          <div className="content text-center md:text-start text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              eaque necessitatibus eius corrupti fugiat deleniti culpa deserunt
              unde et dolorum sunt, aut ab quia nam quae. Libero at quasi qui!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              fugiat tenetur nobis modi qui impedit earum velit consequuntur
              deserunt eligendi culpa veritatis, vitae aperiam quas quos. Earum
              praesentium reprehenderit laborum?
            </p>
          </div>
          <button className="flex w-44 items-center gap-x-1 rounded-lg border-[2px] border-dark bg-dark bg-none px-3 py-3 text-light hover:bg-transparent hover:text-dark  dark:hover:bg-light">
            view certificate <FaAngleRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
