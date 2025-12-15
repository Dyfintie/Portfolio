"use client";
import React from "react";
import Link from "next/link";
import {
  Menu,
  Home,
  User,
  Github,
  Projector,
  Code,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const menuItems = [
    { icon: Projector, name: "Projects", route: "/projects" },
    { icon: User, name: "About Me", route: "/about" },
    { icon: Github, name: "Github", route: "/github" },
    { icon: Code, name: "Competitive Coding", route: "/competitive-coding" },
    { icon: Linkedin, name: "LinkedIn", route: "/linkedin" },
    { icon: Twitter, name: "X", route: "/x" },
  ];
  return (
    <div className="h-25 flex justify-center z-0">
      <nav
        className="relative mt-5 z-10 h-17 w-[90%]  md:w-[40%] 
 rounded-lg flex justify-center border-white/30  border-2 items-center gap-3 md:gap-8 "
      >
        <div className="absolute h-15 w-full rounded-md bg-white/60  blur-sm"></div>
        {menuItems.map((item) => (
          <motion.div
            title={item.name}
            className="shadow-md flex items-center justify-center w-9 md:w-11  h-9 md:h-11 z-50 bg-white/40 rounded-xl backdrop-blur-md "
            key={item.route}
            whileHover={{ scale: 1.1 }}
          >
            <Link className="w-[50%] flex items-center" href={item.route}>
              <item.icon className="text-black" size={40} />
            </Link>
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
