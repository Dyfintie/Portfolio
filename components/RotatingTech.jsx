"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiGraphql,
  SiPython,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Postgres", Icon: SiPostgresql },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Git", Icon: SiGit },
  { name: "Docker", Icon: SiDocker },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Python", Icon: SiPython },
];

const RotatingTech = () => {
  const bandRef = useRef(null);

  useGSAP(() => {
    const band = bandRef.current;
    let x = 0;
    let dir = -1;
    const speed = 0.6;

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        dir = self.direction === 1 ? -1 : 1;
      },
    });

    const tick = () => {
      x += dir * speed;
      const half = band.scrollWidth / 2;

      if (x <= -half) x += half;
      if (x >= 0) x -= half;

      gsap.set(band, { x });
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden z-200 w-full py-4 m-0  bg-black">
      <div ref={bandRef} className="flex w-max will-change-transform">
        {[...techStack, ...techStack, ...techStack].map(({ name, Icon }, i) => (
          <span
            key={i}
            className="mx-3 flex items-center gap-2 px-5 py-3 rounded-full
                       bg-white text-black text-sm font-medium whitespace-nowrap"
          >
            <Icon size={18} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RotatingTech;
