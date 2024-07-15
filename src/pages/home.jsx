import homeBg from "../assets/img/bg.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section
      id="home"
      className="home w-full items-center max-md:text-center gap-8 lg:container dark:text-light md:flex md:h-[500px] xl:h-[800px] 2xl:h-dscreen "
    >
      <div className="home_content_container container h-full items-center justify-start gap-y-10 sm:flex">
        <div className="home_content w-full text-center max-md:pt-24 md:text-start md:w-1/2 sm:px-12 md:px-0 md:pr-8 ">
          <h1 data-aos="fade-right" data-aos-delay="1000" className="mx-0 text-[2rem] font-bold uppercase xl:text-[4rem]">
            makbel hailu
          </h1>
          <h3 data-aos="fade-right" data-aos-delay="1000" className="flex items-center max-md:justify-center gap-x-2 mx-0 text-[1rem] font-semibold uppercase xl:text-2xl">
            <span>i'm a </span>
            <span className="text-purple">
              <Typewriter
              className="inline"
                options={{
                  strings: ['FullStack Developer', 'UI/UX Designer', 'Programmer'],
                  autoStart: true,
                  loop: true,
                }}
            />
            </span>
          </h3>
          <p data-aos="fade-right" data-aos-delay="1000" className="my-4 text-center text-[.75rem] md:text-start xl:text-sm">
          A full stack developer and UI/UX designer. Proficient in MERN, Django, React Native, and PHP, I create seamless and dynamic digital experiences. With a strong foundation in both frontend and backend technologies, I deliver high-quality, user-centered solutions that bring innovative ideas to life.
          </p>

          <div data-aos="fade-up" data-aos-delay="1000" className="buttons flex items-center gap-6 max-md:justify-center">
            <Link
              active={false}
              spy={true}
              offset={10}
              smooth={true}
              duration={500}
              to="contact"
            >
              <button className="btn rounded-xl border-0 bg-gradient-45 text-light hover:bg-gradient-225 dark:hover:text-light">
                contact me
              </button>
            </Link>

            <Link
              active={false}
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              to="portfolio"
            >
              <button className="btn rounded-xl border-2 bg-transparent  text-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark">
                portfolios
              </button>
            </Link>
          </div>
        </div>
        <img
          src={homeBg}
          className="home_img right-0 top-0 -z-[2] h-auto  max-md:hidden  absolute md:w-[50%] "
        />
      </div>
    </section>
  );
};

export default Home;
