import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
export default function Header() {
  const nameref = useRef(null);
  const titleref = useRef(null);
  const sectionref = useRef(null);
  useEffect(() => {
    gsap.to(nameref.current, {
      y: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionref.current,
        toggleActions: "play none play none",
      },
    });
    gsap.to(titleref.current, {
      y: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionref.current,
        toggleActions: "play none play none",
      },
    });
  });
  return (
    <>
      <div
        ref={sectionref}
        id="namesection"
        className="w-screen h-screen p-0 m-0 flex flex-col justify-center items-center"
      >
        <div className="relative text-4xl sm:text-6xl md:text-8xl">
          <div
            ref={nameref}
            className="text-primary dark:text-primarydark w-screen text-center transform translate-y-full"
          >
            MAZEN SALEM
          </div>
          <div className="absolute w-full h-full bg-white dark:bg-black"></div>
        </div>
        <div className="relative mt-6 text-lg md:text-xl">
          <div
            ref={titleref}
            className="text-black dark:text-tertiary transform translate-y-full"
          >
            Front End Developer
          </div>
          <div className="absolute w-full h-full bg-white dark:bg-black"></div>
        </div>
      </div>
    </>
  );
}
