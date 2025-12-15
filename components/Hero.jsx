"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BackgroundBars from "./BackgroundBars";

const Hero = () => {
  const roles = [
    { number: 1, title: "Full Stack Developer" },
    { number: 2, title: "Competitive Programmer" },
    { number: 3, title: "Tech Enthusiast" },
  ];
  function RoleDisplay({ roles }) {
    const [i, setI] = useState(0);

    useEffect(() => {
      const t = setInterval(() => {
        setI((i + 1) % roles.length);
      }, 2000);
      return () => clearInterval(t);
    });
    return (
      <span className="text-white" key={roles[i].number}>
        {roles[i].title}
      </span>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-row gap-5  ">
      {/* Text */}
      <BackgroundBars />
      <div className=" ml-5 mt-10 h-72 w-[50%] bg-white/50 shadow-2xl rounded-md blur-md "></div>

      <div className="absolute flex ml-5 mt-10 h-72 w-[50%] flex-col items-center shadow-md border-2 border-white/20 justify-start rounded-md backdrop-blur-md ">
        <div className="flex text-center  text-3xl md:text-5xl mt-10 mb-5 font-custom">
          {/* ḥead text */}
          Hi, I am Varun Pandey
        </div>
        <div className="flex gap-3 text-center semi-bold text-xl md:text-3xl font-custom">
          {/* subtext */}I am a {<RoleDisplay roles={roles} />}
        </div>
      </div>
      {/* Image */}

      <div className="w-[50%] h-[60vh] flex justify-center items-start">
        <div className="relative mt-10 h-[300] w-[300] bg-white/50 shadow-2xl rounded-md blur-md z-10"></div>
        <Image
          src="/hero.png"
          alt="hero"
          width={300}
          height={300}
          className="absolute rounded-md shadow-md border-2 border-white/30 mt-10 z-10"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
