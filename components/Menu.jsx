"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu as Monu } from "lucide-react";
import { motion } from "framer-motion";

const Menu = () => {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MotionLink = motion(Link);
  const menuLink = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  // GSAP overlay drop
  useEffect(() => {
    if (!overlayRef.current) return;

    gsap.set(overlayRef.current, {
      y: "-100%",
      opacity: 0,
      pointerEvents: "none",
    });
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isMenuOpen) {
      gsap.to(overlayRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        pointerEvents: "auto",
      });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(overlayRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        pointerEvents: "none",
      });
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="relative z-50 h-10">
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white text-lg font-semibold">
          {/* Logo */}
        </Link>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-sm uppercase tracking-widest"
        >
          <Monu />
        </button>
      </div>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-blue-800 text-white z-50"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold"></Link>

          {/* CLOSE ICON */}
          <motion.div
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="h-full w-full px-6 flex flex-col justify-start space-y-10">
          {menuLink.map((link, index) => (
            <MotionLink
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              initial={{ y: 40, opacity: 0 }}
              animate={
                isMenuOpen ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }
              }
              whileHover={{ x: 20 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
              className="font-custom z-100 text-black text-5xl md:text-6xl font-light"
            >
              {link.label}
            </MotionLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
