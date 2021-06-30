import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

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
      <h1 className="text-center text-3xl">
        {`<`} Portfolio {`/>`}
      </h1>
      <div className="w-2/4 flex flex-wrap justify-between mx-auto mt-10">
        {/* Project */}
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md text-white bg-black flex justify-between px-2">
            <div className="group relative">
              <a
                href="google.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center">Title</h3>
            <div className="group relative">
              <a
                href="github.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
                Code
              </div>
            </div>
          </div>
          <img className="rounded-md" src="/img/project.jpg" alt="project" />
        </div>
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md text-white bg-black flex justify-between px-2">
            <div className="group relative">
              <a
                href="google.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center">Title</h3>
            <div className="group relative">
              <a
                href="github.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
                Code
              </div>
            </div>
          </div>
          <img className="rounded-md" src="/img/project.jpg" alt="project" />
        </div>
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md text-white bg-black flex justify-between px-2">
            <div className="group relative">
              <a
                href="google.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center">Title</h3>
            <div className="group relative">
              <a
                href="github.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
                Code
              </div>
            </div>
          </div>
          <img className="rounded-md" src="/img/project.jpg" alt="project" />
        </div>
        <div className="w-max relative mb-2">
          <div className="p-1 absolute bottom-0 w-full rounded-md text-white bg-black flex justify-between px-2">
            <div className="group relative">
              <a
                href="google.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -right-1 transform -translate-y-2/4 translate-x-full">
                Final
              </div>
            </div>
            <h3 className="text-2xl text-center">Title</h3>
            <div className="group relative">
              <a
                href="github.com"
                className="block w-10 h-10 bg-white rounded-full"
              ></a>
              <div className="absolute bg-blue-400 px-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-900 top-2/4 -left-1 transform -translate-y-2/4 -translate-x-full">
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
