import { useEffect, useState } from "react";
import { Link } from "react-scroll";
// import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../features/theme/themeSlice";

const Header = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(0);

  const handleScroll = () => {
    let position = window.pageYOffset;
    setIsScrolled(position);
    
  };

  const toggleTheme = () => {
    let currentTheme = !isDark;

    dispatch(changeTheme());
    localStorage.setItem("theme", currentTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    
    // to query the system theme but i found it not relevant
    /* const systemTheme = window.matchMedia(
       "(prefers-color-scheme: dark)"
     ).matches;
     */
      if (userTheme === "dark") {
      document.documentElement.classList.add("dark");
      dispatch(changeTheme(true));
    } else {
      dispatch(changeTheme(false));
    }
  
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`container max-xl:w-[90%] py-2 rounded-lg fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-center justify-between px-10 text-center dark:text-light md:px-8 xl:px-6 transition-colors ${isScrolled > 100 ? "light-glass dark:dark-glass text-dark" : ""}`}
      id="header"
    >
      <div className="logo">
        <Link
          active="true"
          activeClass="active"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
          to="home"
        >
          <h1 className="text-xl font-semibold uppercase">
            <span className="text-purple">mc</span>bel.
          </h1>
        </Link>
      </div>
      <nav className="hidden md:flex ">
        <ul className="flex w-full items-center gap-x-10  text-sm lg:gap-x-14 lg:text-base">
          <li className="nav-item">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              to="about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              to="skills"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              to="portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              spy={true}
              offset={20}
              smooth={true}
              duration={500}
              to="contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="theme-switch-wrapper flex cursor-pointer items-center justify-center gap-x-10">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value={isDark}
            checked={isDark}
            onChange={toggleTheme}
          />

          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className={`swap-off h-7 w-7 fill-current  2xl:text-dark ${isScrolled > 560 ? "md:text-dark" : "md:text-light"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </header>
  );
};

export default Header;
