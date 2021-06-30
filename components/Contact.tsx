import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Contact() {
  const sectionref = useRef();
  useEffect(() => {
    gsap.to(sectionref.current, {
      delay: 0.1,
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: sectionref.current,
        start: "top 70%",
        end: "bottom center",
      },
    });
  });
  return (
    <div
      ref={sectionref}
      id="contactsection"
      className="opacity-0 w-screen h-screen"
    ></div>
  );
}
