import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionref = useRef();
  useEffect(() => {
    gsap.to(sectionref.current, {
      delay: 0.1,
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: sectionref.current,
        start: "top center",
        end: "bottom center",
      },
    });
  });
  return (
    <div
      ref={sectionref}
      id="aboutsection"
      className="py-10 w-screen opacity-0"
    >
      <h1 className="text-center text-3xl text-primary dark:text-primarydark">
        {`<`}ABOUT ME {`/>`}
      </h1>
      <p className="text-lg w-2/4 mx-auto mt-10">
        I’m a front-end web developer with over a decade of experience. I work
        with agencies across the globe to create high performance {`&`} rich
        interactive websites that work across all platforms {`&`} devices.
        Although I'm very familiar with using frameworks, my websites are
        primarily hand-coded using HTML5, CSS3, SVG {`&`} JavaScript. With a
        strong emphasis on "Progressive Enhancement", I look for creative ways
        to push the boundaries of website front-end code without compromising on
        browser support and performance. In a quest for always keeping myself
        updated, I read books and attend conferences {`&`} meetups.
        <br />
        <a
          className="mt-3 inline-block bg-black text-white dark:bg-white dark:text-black hover:bg-primary dark:hover:bg-primarydark transition duration-700 px-2 rounded-md text-xl"
          href="#contactsection"
        >
          Let's Talk
        </a>
      </p>
    </div>
  );
}
