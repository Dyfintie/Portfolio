"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "./Logo";

const PageTransition = ({ children }) => {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const logoOverlayRef = useRef(null);
  const blockRef = useRef([]);
  const isTransitioning = useRef(false);

  const revealPage = () => {
    const tl = gsap.timeline({
      onComplete: () => (isTransitioning.current = false),
    });

    tl.to(blockRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none",
      },
      "-=0.2"
    );
  };

  const coverAndScroll = (sectionId) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    gsap.set(overlayRef.current, { opacity: 1, pointerEvents: "auto" });
    gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left" });

    const tl = gsap.timeline({
      onComplete: () => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });

        // wait a tick so scroll starts
        setTimeout(revealPage, 400);
      },
    });

    tl.set(logoOverlayRef.current, { opacity: 1 })
      .to(logoRef.current.querySelectorAll("path"), {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power2.inOut",
      })
      .to(
        logoRef.current.querySelectorAll("path"),
        {
          fill: "#e3e4d8",
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(blockRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
      })
      .to(logoOverlayRef.current, { opacity: 0, duration: 0.25 });
  };

  useEffect(() => {
    // create blocks
    overlayRef.current.innerHTML = "";
    blockRef.current = [];

    for (let i = 0; i < 20; i++) {
      const block = document.createElement("div");
      block.className = "block";
      overlayRef.current.appendChild(block);
      blockRef.current.push(block);
    }

    // init logo paths
    logoRef.current?.querySelectorAll("path").forEach((p) => {
      const l = p.getTotalLength();
      gsap.set(p, {
        strokeDasharray: l,
        strokeDashoffset: l,
        fill: "transparent",
      });
    });

    revealPage();

    // attach section click listeners
    document.querySelectorAll("[data-section]").forEach((el) => {
      el.addEventListener("click", () => coverAndScroll(el.dataset.section));
    });

    return () => {
      document.querySelectorAll("[data-section]").forEach((el) => {
        el.onclick = null;
      });
    };
  }, []);

  return (
    <>
      <div ref={overlayRef} className="transition-overlay" />
      <div ref={logoOverlayRef} className="logo-overlay">
        <div ref={logoRef} className="logo-container">
          <Logo  />
        </div>
      </div>
      {children}
    </>
  );
};

export default PageTransition;
