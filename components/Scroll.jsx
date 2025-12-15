"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSequenceGSAP() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  const images = [
    "/images/one.png",
    "/images/two.png",
    "/images/three.png",
    "/images/four.png",
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top center",
      end: "+=100%",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const i = Math.floor(self.progress * images.length);
        setIndex(Math.min(i, images.length - 1));
      },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="h-screen flex items-start self-end mr-10 mb-5"
    >
      <Image
        className="rounded-md shadow-xl mb-5"
        src={images[index]}
        alt="sequence"
        width={500}
        height={500}
        priority
      />
    </section>
  );
}
