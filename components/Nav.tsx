import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Nav({ setdark, dark }) {
  const nameref = useRef();
  const aboutref = useRef();
  const skillsref = useRef();
  const Eref = useRef();
  const portfolioref = useRef();
  const contentref = useRef();
  const nav = useRef();
  const color = dark ? "#FF4532" : "#3F0CFF";

  useEffect(() => {
    gsap.to(nav.current, {
      y: 0,
      delay: 0.2,
      duration: 0.7,
      ease: "back",
    });

    gsap.to(nameref.current, {
      scrollTrigger: {
        trigger: "#namesection",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
      },
      color: color,
      duration: 0.2,
    });

    gsap.to(aboutref.current, {
      scrollTrigger: {
        trigger: "#aboutsection",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
      },
      color: color,
      duration: 0.2,
    });

    gsap.to(skillsref.current, {
      scrollTrigger: {
        trigger: "#skillsection",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
      },
      color: color,
      duration: 0.2,
    });

    gsap.to(Eref.current, {
      scrollTrigger: {
        trigger: "#esection",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
        markers: true,
        onUpdate: () => {
          alert(color);
        },
      },
      color: color,
      duration: 0.2,
    });

    gsap.to(portfolioref.current, {
      scrollTrigger: {
        trigger: "#portfoliosection",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
      },
      color: color,
      duration: 0.2,
    });

    gsap.to(contentref.current, {
      scrollTrigger: {
        trigger: "#contactsection",
        toggleActions: "play reverse play reverse",
        start: "top center",
        end: "bottom center",
      },
      color: color,
      duration: 0.2,
    });
  }, [dark]);
  return (
    <div
      ref={nav}
      className="transform translate-y-full fixed bottom-0 right-4 p-0 w-10 h-64 flex flex-col justify-between items-center"
    >
      <div className="group w-6 h-6 relative cursor-pointer">
        <svg
          onClick={() => {
            setdark(!dark);
          }}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="adjust"
          className={(dark ? "text-white" : "text-black") + "fill-current"}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
          ></path>
        </svg>
        <span className="w-0 h-0 opacity-0 dark:group-hover:bg-white dark:group-hover:text-black cursor-default text-transparent text-0 group-hover:text-base group-hover:text-white group-hover:opacity-100 group-hover:w-max group-hover:h-full bg-black mr-1 transition-opacity duration-1000 px-3 rounded-md absolute top-2/4 transform -translate-y-2/4 right-full">
          {dark ? "light" : "dark"} mode
        </span>
      </div>

      <div className="mt-1 group relative">
        <a
          ref={nameref}
          className="text-xl text-black dark:text-white"
          href="#namesection"
        >
          N
        </a>
        <span className="w-0 h-0 dark:group-hover:bg-white dark:group-hover:text-black opacity-0 cursor-default text-transparent text-0 group-hover:text-base group-hover:text-white group-hover:opacity-100 group-hover:w-max group-hover:h-full bg-black mr-1 transition-opacity duration-1000 px-3 rounded-md absolute top-2/4 transform -translate-y-2/4 right-full">
          name
        </span>
      </div>

      <div className="group relative">
        <a ref={aboutref} className="text-xl text-white" href="#aboutsection">
          A
        </a>
        <span className="w-0 h-0 dark:group-hover:bg-white dark:group-hover:text-black opacity-0 cursor-default text-transparent text-0 group-hover:text-base group-hover:text-white group-hover:opacity-100 group-hover:w-max group-hover:h-full bg-black mr-1 transition-opacity duration-1000 px-3 rounded-md absolute top-2/4 transform -translate-y-2/4 right-full">
          about
        </span>
      </div>

      <div className="group relative">
        <a ref={skillsref} className="text-xl text-white" href="#skillsection">
          S
        </a>
        <span className="w-0 h-0 dark:group-hover:bg-white dark:group-hover:text-black opacity-0 cursor-default text-transparent text-0 group-hover:text-base group-hover:text-white group-hover:opacity-100 group-hover:w-max group-hover:h-full bg-black mr-1 transition-opacity duration-1000 px-3 rounded-md absolute top-2/4 transform -translate-y-2/4 right-full">
          skills
        </span>
      </div>

      <div className="group relative">
        <a ref={Eref} className="text-xl text-white" href="#esection">
          T
        </a>
        <span className="w-0 h-0 dark:group-hover:bg-white dark:group-hover:text-black opacity-0 cursor-default text-transparent text-0 group-hover:text-base group-hover:text-white group-hover:opacity-100 group-hover:w-max group-hover:h-full bg-black mr-1 transition-opacity duration-1000 px-3 rounded-md absolute top-2/4 transform -translate-y-2/4 right-full">
          testimonials
        </span>
      </div>

      <div className="group relative">
        <a
          ref={portfolioref}
          className="text-xl text-white"
          href="#portfoliosection"
        >
          P
        </a>
        <span className="w-0 h-0 dark:group-hover:bg-white dark:group-hover:text-black opacity-0 cursor-default text-transparent text-0 group-hover:text-base group-hover:text-white group-hover:opacity-100 group-hover:w-max group-hover:h-full bg-black mr-1 transition-opacity duration-1000 px-3 rounded-md absolute top-2/4 transform -translate-y-2/4 right-full">
          portfolio
        </span>
      </div>

      <div className="group relative">
        <a
          ref={contentref}
          className="text-xl text-white"
          href="#contactsection"
        >
          C
        </a>
        <span className="w-0 h-0 dark:group-hover:bg-white dark:group-hover:text-black opacity-0 cursor-default text-transparent text-0 group-hover:text-base group-hover:text-white group-hover:opacity-100 group-hover:w-max group-hover:h-full bg-black mr-1 transition-opacity duration-1000 px-3 rounded-md absolute top-2/4 transform -translate-y-2/4 right-full">
          contact
        </span>
      </div>

      <div className="w-0.5 h-full bg-black dark:bg-white"></div>
    </div>
  );
}
