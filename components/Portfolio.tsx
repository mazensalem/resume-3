import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import CustomArraw from "./CustomArraw";

gsap.registerPlugin(ScrollTrigger);
export default function Portfolio() {
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
      id="portfoliosection"
      className="opacity-0 py-10 w-screen"
    >
      <h1 className="text-center dark:text-primarydark text-primary text-3xl">
        {`<`} Portfolio {`/>`}
      </h1>
      <div className="w-2/4 flex flex-wrap justify-between mx-auto mt-10">
        {/* Project */}
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md bg-primary dark:bg-primarydark flex justify-between px-2">
            <div className="group relative">
              <a
                target="_blank"
                href="github.com"
                className="block w-10 h-10 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center text-white dark:text-black">
              TITLE
            </h3>
            <div className="group relative">
              <a
                href="github.com"
                target="_blank"
                className="block w-10 h-10 bg-transparent rounded-full"
              >
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  width="32"
                  aria-hidden="true"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-full h-full fill-current bg-transparent"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
                Code
              </div>
            </div>
          </div>
          <img className="rounded-md" src="/img/project.jpg" alt="project" />
        </div>
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md bg-primary dark:bg-primarydark flex justify-between px-2">
            <div className="group relative">
              <a
                target="_blank"
                href="github.com"
                className="block w-10 h-10 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center text-white dark:text-black">
              TITLE
            </h3>
            <div className="group relative">
              <a
                href="github.com"
                target="_blank"
                className="block w-10 h-10 bg-transparent rounded-full"
              >
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  width="32"
                  aria-hidden="true"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-full h-full fill-current bg-transparent"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
                Code
              </div>
            </div>
          </div>
          <img className="rounded-md" src="/img/project.jpg" alt="project" />
        </div>
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md bg-primary dark:bg-primarydark flex justify-between px-2">
            <div className="group relative">
              <a
                target="_blank"
                href="github.com"
                className="block w-10 h-10 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center text-white dark:text-black">
              TITLE
            </h3>
            <div className="group relative">
              <a
                href="github.com"
                target="_blank"
                className="block w-10 h-10 bg-transparent rounded-full"
              >
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  width="32"
                  aria-hidden="true"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-full h-full fill-current bg-transparent"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
                Code
              </div>
            </div>
          </div>
          <img className="rounded-md" src="/img/project.jpg" alt="project" />
        </div>
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md bg-primary dark:bg-primarydark flex justify-between px-2">
            <div className="group relative">
              <a
                target="_blank"
                href="github.com"
                className="block w-10 h-10 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center text-white dark:text-black">
              TITLE
            </h3>
            <div className="group relative">
              <a
                href="github.com"
                target="_blank"
                className="block w-10 h-10 bg-transparent rounded-full"
              >
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  width="32"
                  aria-hidden="true"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-full h-full fill-current bg-transparent"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
              <div className="absolute bg-white text-black px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
                Code
              </div>
            </div>
          </div>
          <img className="rounded-md" src="/img/project.jpg" alt="project" />
        </div>
      </div>
    </div>
  );
}
