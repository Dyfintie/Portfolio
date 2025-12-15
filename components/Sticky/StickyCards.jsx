"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const cardData = [
    {
      index: "01",
      title: "Little Cafe",
      image: "/images/uno.png",
      content:
        "A cozy cafe website with a warm color palette, featuring a menu, location, and contact information.",
    },
    {
      index: "02",
      title: "Hacktoberfest",
      image: "/images/dos.png",
      content:
        "Hacktoberfest is an annual event that encourages open source contributions during the month of October.",
    },
    {
      index: "03",
      title: "World Quant",
      image: "/images/tres.png",
      content:
        "A financial services firm that specializes in quantitative trading and investment strategies.",
    },
    {
      index: "04",
      title: "Kudam Counselling",
      image: "/images/quadro.png",
      content:
        "A mental health counseling service that provides support and guidance to individuals seeking help.",
    },
  ];

  const container = useRef(null);

  useGSAP(
    () => {
      const stickyCards = gsap.utils.toArray(".sticky-card");

      // IMPORTANT: sticky opacity fix
      gsap.set(stickyCards, { opacity: 0, willChange: "transform, opacity" });

      gsap.to(stickyCards, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            pin: true,
            pinSpacing: false,
          });

          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const p = self.progress;

              gsap.set(card, {
                scale: 1 - p * 0.25,
                rotation: (index % 2 === 0 ? 5 : -5) * p,
                opacity: 1 - p,
                "--after-opacity": p,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    // this is the sticky card divs
    <div className="sticky-cards" ref={container}>
      {cardData.map((card, index) => (
        <div className="sticky-card" key={index}>
          <div className="sticky-card-index">
            <h1>{card.index}</h1>
          </div>

          <div className="sticky-card-content">
            <div className="sticky-card-content-wrapper">
              <h1 className="sticky-card-header">{card.title}</h1>

              <div className="sticky-card-image">
                <Image
                  width={700}
                  height={700}
                  src={card.image}
                  alt={card.title}
                ></Image>
              </div>

              <div className="sticky-card-copy">
                <div className="sticky-card-copy-title">
                  <p>{"About"}</p>
                </div>
                <div className="sticky-card-copy-description">
                  <p>{card.content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
