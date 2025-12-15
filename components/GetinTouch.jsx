"use client";
import React from "react";
import ParallaxSection from "@/components/ParallaxSection";
import RevealText from "@/components/RevealText";
import Link from "next/link";
import { motion } from "framer-motion";
import { once } from "events";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
  },
  {
    name: "Email",
    href: "mailto:youremail@gmail.com",
  },
];
const MotionLink = motion(Link);
const GetInTouch = () => {
  return (
    <section className="h-[60vh] w-full bg-[#F5F5DC] text-black flex items-center justify-center overflow-hidden">
      <ParallaxSection speed={0.25}>
        <div className="flex flex-col items-center text-black text-center gap-8 px-6">
          {/* Heading */}

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-6xl text-black md:text-7xl font-bold tracking-tight"
          >
            Get in Touch
          </motion.h2>

          {/* Sub text */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-2xl text-black md:text-3xl font-bold tracking-tight"
          >
            Interested in collaborating, discussing ideas, or just saying hello?
            I am always open to meaningful conversations.
          </motion.h2>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {socials.map((social, i) => (
              <MotionLink
                key={i}
                href={social.href}
                target="_blank"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="px-6 py-3 border border-[#e3e4d8] rounded-full
                             text-sm uppercase tracking-wider
                             transition-all duration-300                             
                             text-black hover:bg-gray-500
                             
                             "
              >
                {social.name}
              </MotionLink>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default GetInTouch;
