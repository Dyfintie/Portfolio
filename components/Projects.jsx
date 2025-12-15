import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollSequence from "./Scroll";
import ScrollVideo from "./ScrollVideo";
const Projects = () => {
  const proj = [
    {
      title: "Kudam - A Mental Health Platform",
      content: "New content",
      isimage: true,
      
    },
    {
      title: "Kudam",
      content: "New content2",
      isimage: false,
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="text-center text-white text-3xl w-full h-15 font-semibold font-custom">
        My Projects
      </div>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden overflow-y-hidden gap-10">
        {/* carousel of cards */}
        {proj.map((card) => (
          <div key={card.title} className="relative w-full h-[140vh] ">
            <div className="absolute inset-0 bg-white/30 rounded-xl blur-md"></div>
            <div
              key={card.title}
              className="absolute flex flex-col justify-start items-center w-full h-[140vh] border-2 rounded-lg shadow-2xl"
            >
              <h1 className="text-white text-3xl font-custom">{card.title}</h1>
              <p className="text-white text-xl font-custom"> {card.content}</p>
              {/* <Image width={300} height={300} src={}></Image> */}
              {card.isimage ? <ScrollSequence /> : <ScrollVideo />}

              {/* <Link src={card.link}></Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
