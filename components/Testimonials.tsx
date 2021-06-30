import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Testimonials() {
  const sectionref = useRef();
  useEffect(() => {
    gsap.to(sectionref.current, {
      opacity: 1,
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: sectionref.current,
        start: "top center",
        end: "bottom center",
      },
    });
  });
  return (
    <div ref={sectionref} id="esection" className="opacity-0 w-screen pt-10">
      <h1 className="text-center text-3xl">
        {`<`} Testimonials {`/>`}
      </h1>
      <div className="text-lg w-3/5 mx-auto mt-10 flex flex-wrap">
        <div className="relative mr-3 mb-32 bg-bg w-33 px-2 py-3">
          <p className="z-20 relative">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
          </p>
          <div className="z-0 bottom-0 left-3 transform translate-y-2/4 rotate-45 absolute w-8 h-8 bg-bg border-bg border-r-8 border-b-8"></div>
          <div className="absolute flex space-x-3 -bottom-7 transform translate-y-full">
            <img
              className="rounded-full w-16 h-16"
              src="./img/user.jpg"
              alt="user"
            />
            <p className="w-max text-black">
              <h2 className="text-xl">Ben Johnson</h2>
              <span className="text-sm">CEO of Company Inc.</span>
            </p>
          </div>
        </div>
        <div className="relative mr-3 mb-32 bg-bg w-33 px-2 py-3">
          <p className="z-20 relative">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
          </p>
          <div className="z-0 bottom-0 left-3 transform translate-y-2/4 rotate-45 absolute w-8 h-8 bg-bg border-bg border-r-8 border-b-8"></div>
          <div className="absolute flex space-x-3 -bottom-7 transform translate-y-full">
            <img
              className="rounded-full w-16 h-16"
              src="./img/user.jpg"
              alt="user"
            />
            <p className="w-max text-black">
              <h2 className="text-xl">Ben Johnson</h2>
              <span className="text-sm">CEO of Company Inc.</span>
            </p>
          </div>
        </div>
        <div className="relative mr-3 mb-32 bg-bg w-33 px-2 py-3">
          <p className="z-20 relative">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
          </p>
          <div className="z-0 bottom-0 left-3 transform translate-y-2/4 rotate-45 absolute w-8 h-8 bg-bg border-bg border-r-8 border-b-8"></div>
          <div className="absolute flex space-x-3 -bottom-7 transform translate-y-full">
            <img
              className="rounded-full w-16 h-16"
              src="./img/user.jpg"
              alt="user"
            />
            <p className="w-max text-black">
              <h2 className="text-xl">Ben Johnson</h2>
              <span className="text-sm">CEO of Company Inc.</span>
            </p>
          </div>
        </div>
        <div className="relative mr-3 mb-32 bg-bg w-33 px-2 py-3">
          <p className="z-20 relative">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
          </p>
          <div className="z-0 bottom-0 left-3 transform translate-y-2/4 rotate-45 absolute w-8 h-8 bg-bg border-bg border-r-8 border-b-8"></div>
          <div className="absolute flex space-x-3 -bottom-7 transform translate-y-full">
            <img
              className="rounded-full w-16 h-16"
              src="./img/user.jpg"
              alt="user"
            />
            <p className="w-max text-black">
              <h2 className="text-xl">Ben Johnson</h2>
              <span className="text-sm">CEO of Company Inc.</span>
            </p>
          </div>
        </div>
        <div className="relative mr-3 mb-32 bg-bg w-33 px-2 py-3">
          <p className="z-20 relative">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
          </p>
          <div className="z-0 bottom-0 left-3 transform translate-y-2/4 rotate-45 absolute w-8 h-8 bg-bg border-bg border-r-8 border-b-8"></div>
          <div className="absolute flex space-x-3 -bottom-7 transform translate-y-full">
            <img
              className="rounded-full w-16 h-16"
              src="./img/user.jpg"
              alt="user"
            />
            <p className="w-max text-black">
              <h2 className="text-xl">Ben Johnson</h2>
              <span className="text-sm">CEO of Company Inc.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
