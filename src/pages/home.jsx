import homeBg from "../assets/img/bg.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="home w-full items-center gap-8 lg:container dark:text-light sm:flex md:h-[calc(100vh/2)] lg:h-dscreen"
    >
      <div className="home__content__container container h-full items-center justify-start gap-y-10 sm:flex">
        <div className="home__content w-full text-center max-md:pt-32 sm:text-start xl:w-1/2">
          <h1 className="mx-0 text-[2rem] font-bold uppercase lg:text-[4rem]">
            makbel hailu
          </h1>
          <h3 className="mx-0 text-[1rem] font-semibold uppercase lg:text-2xl">
            i'm a full stack <span className="text-purple">developer</span>
          </h3>
          <p className="my-4 text-center text-[.75rem] sm:text-start lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            commodi deserunt quia odio similique laudantium, nisi perferendis
            sapiente vero provident? Quas explicabo odit cumque enim natus iste!
            At, quis sequi!
          </p>

          <div className="buttons flex items-center gap-6 max-sm:justify-center">
            <Link
              active={false}
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              to="contact"
            >
              <button className="btn rounded-full border-0 bg-gradient-45 text-light hover:bg-gradient-225 dark:hover:text-light">
                contact me
              </button>
            </Link>

            <Link
              active={false}
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              to="portfolio"
            >
              <button className="btn rounded-full border-2 bg-transparent  text-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark">
                portfolios
              </button>
            </Link>
          </div>
        </div>
        <img
          src={homeBg}
          className="right-0 top-[300px] -z-[2] h-[calc(100vh/2)] max-md:scale-125 max-md:rounded-full max-sm:hidden sm:top-0 md:absolute md:w-[75%] lg:h-dscreen"
        />
      </div>
    </section>
  );
};

export default Home;
