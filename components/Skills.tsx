import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Portfolio() {
  const skills = [
    { skill: "html", year: 3 },
    { skill: "css", year: 3 },
    { skill: "js", year: 3 },
    { skill: "react", year: 1 },
  ];
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
      id="skillsection"
      className="opacity-0 py-10 w-screen"
    >
      <h3 className="text-center text-3xl">
        {`<`} Skills {`/>`}
      </h3>
      <div className="text-lg w-2/4 mx-auto mt-5 flex justify-around space-y-1 items-center flex-wrap">
        {skills.map((skill) => (
          <div className="bg-black text-white p-3 rounded-md w-full">
            <div className="inline-block">{skill.skill}</div>
            <div className="float-right w-max">{skill.year} years</div>
          </div>
        ))}
      </div>
    </div>
  );
}
