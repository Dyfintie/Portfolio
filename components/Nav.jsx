"use client";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed bg-[#F5F5DC] top-0 left-0 w-full px-10  flex justify-between items-center z-10">
      <div className="nav-logo text-2xl font-bold cursor-pointer">
        <button data-section="home">Varun</button>
      </div>

      <div className="nav-links flex gap-8 text-sm font-semibold">
        <button
          data-section="home"
          className="opacity-80 hover:opacity-100 transition"
        >
          Work
        </button>
        <button
          data-section="about"
          className="opacity-80 hover:opacity-100 transition"
        >
          About
        </button>
        <button
          data-section="contact"
          className="opacity-80 hover:opacity-100 transition"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Nav;
