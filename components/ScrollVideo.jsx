"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        if (!video || !video.duration) return;
        video.currentTime = self.progress * video.duration;
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-[200vh] relative self-end mr-10">
      <div className="sticky top-0 h-screen overflow-hidden  rounded-lg">
        <video
          height={500}
          width={500}
          ref={videoRef}
          src="/videos/demo.mp4"
          className=" object-cover"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
