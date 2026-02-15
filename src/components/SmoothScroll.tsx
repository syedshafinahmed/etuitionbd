"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    // Initialize ScrollSmoother correctly
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current, // outer container (keeps scrollbar)
      content: contentRef.current, // inner container that moves smoothly
      smooth: 1,
      effects: true,
    });

    // Example fade-in animation
    gsap.from(".fade-in", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      smoother?.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;

