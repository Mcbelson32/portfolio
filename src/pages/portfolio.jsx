import React from "react";
import Card from "../components/card";
const Portfolio = () => {
  return (
    <section
      className="md:container h-auto my-32 xl:my-0 xl:h-screen w-full flex flex-col justify-center items-center dark:text-light"
      id="portfolio"
    >
      <h2 className="text-center text-3xl font-bold">
        My <span className="text-purple">Portfolios</span>
      </h2>
      <p className="text-[13px] font-medium opacity-60">Projects</p>
      <div className="w-full grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mt-16">
        <Card img={""} content={""} type={""} link={""} />
        <Card img={""} content={""} type={""} link={""} />
        <Card img={""} content={""} type={""} link={""} />
        <Card img={""} content={""} type={""} link={""} />
        <Card img={""} content={""} type={""} link={""} />
        <Card img={""} content={""} type={""} link={""} />
      </div>
    </section>
  );
};

export default Portfolio;
