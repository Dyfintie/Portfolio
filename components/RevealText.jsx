"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({ children, delay = 0 }) => {
  const wrapRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: "120%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden">
      <div
        ref={textRef}
        className="text-2xl leading-snug will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};

export default RevealText;
