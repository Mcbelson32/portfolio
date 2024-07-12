import React from "react";
import Card from "../components/card";

import skycastMockup from "../assets/mockup/skycast_mockup.png";
import veteranMockup from "../assets/mockup/veteran_mockup.png";
import tributeMockup from "../assets/mockup/tribute_mockup.png";
import encImg from "../assets/mockup/file_encryption.jpg";

const Portfolio = () => {
  const data = [
    {
      img: skycastMockup,
      name: "React Weather App",
      type: "Website/weather",
      link: "https://skycast-et.vercel.app",
    },
    {
      img: veteranMockup,
      name: "Ethio-Korea veteran dashboard",
      type: "Website/Dashboard",
      link: "https://github.com/Mcbelson32/project",
    },
    {
      img: tributeMockup,
      name: "Tribute page about Elon Musk",
      type: "website/Tribute Page",
      link: "https://github.com/Makbelhailu/codsoft_1/tree/main/tribute",
    },
    {
      img: encImg,
      name: "File Encryption System",
      type: "Project/Encryption",
      link: "https://github.com/Mcbelson32/file_encryption",
    },
  ];
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
        {data.map((content) => (
          <Card
            img={content.img}
            name={content.name}
            type={content.type}
            link={content.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
