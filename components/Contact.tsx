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
      className="opacity-0 w-screen py-10"
    >
      <h1 className="text-center text-3xl">
        {`<`} Contact {`/>`}
      </h1>
      {/* Social Links */}
      <div className="w-2/4 mx-auto mt-10">
        <div className="text-center text-lg mb-3">
          FeelFree To Contact Me At{" "}
          <a href="#" className="text-blue-600">
            salemmazen27@gmail.com
          </a>
        </div>
        <div className="flex justify-around pb-28">
          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-blue-600 rounded-full">
            <span>G</span>
            <div className="bg-black mt-1 text-white opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white">
                salemmazen27
                <br />
                @gmail.com
              </div>
              <div className="w-full cursor-pointer text-center border-b-2 border-white">
                copy
              </div>
              <div className="w-full cursor-pointer text-center">go</div>
            </div>
          </div>
          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-blue-600 rounded-full">
            <span>G</span>
            <div className="bg-black mt-1 text-white opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white">
                salemmazen27
                <br />
                @gmail.com
              </div>
              <div className="w-full cursor-pointer text-center border-b-2 border-white">
                copy
              </div>
              <div className="w-full cursor-pointer text-center">go</div>
            </div>
          </div>
          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-blue-600 rounded-full">
            <span>G</span>
            <div className="bg-black mt-1 text-white opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white">
                salemmazen27
                <br />
                @gmail.com
              </div>
              <div className="w-full cursor-pointer text-center border-b-2 border-white">
                copy
              </div>
              <div className="w-full cursor-pointer text-center">go</div>
            </div>
          </div>
          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-blue-600 rounded-full">
            <span>G</span>
            <div className="bg-black mt-1 text-white opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white">
                salemmazen27
                <br />
                @gmail.com
              </div>
              <div className="w-full cursor-pointer text-center border-b-2 border-white">
                copy
              </div>
              <div className="w-full cursor-pointer text-center">go</div>
            </div>
          </div>
          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-blue-600 rounded-full">
            <span>G</span>
            <div className="bg-black mt-1 text-white opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white">
                salemmazen27
                <br />
                @gmail.com
              </div>
              <div className="w-full cursor-pointer text-center border-b-2 border-white">
                copy
              </div>
              <div className="w-full cursor-pointer text-center">go</div>
            </div>
          </div>
          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-blue-600 rounded-full">
            <span>G</span>
            <div className="bg-black mt-1 text-white opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white">
                salemmazen27
                <br />
                @gmail.com
              </div>
              <div className="w-full cursor-pointer text-center border-b-2 border-white">
                copy
              </div>
              <div className="w-full cursor-pointer text-center">go</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* 
        <div className="bg-green-400">
          <p className="bg-red-900 text-center text-xl">
            Feel Free to contact me
          </p>
          <div className="bg-blue-300 flex justify-between">
            <form className="bg-red-800">
              <h2 className="text-lg mb-1 bg-green-400 text-center">
                Freelancing & Invistment
              </h2>
              <div className="bg-blue-100 relative">
                <input
                  className="contactInput border-b-2 border-black focus:outline-none"
                  type="text"
                  id="name"
                />
                <label
                  className="bg-purple-600 transition-all duration-700 absolute bottom-0 left-0"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor="massage">Massage</label>
                <textarea id="massage" />
              </div>
            </form>
            <form>
              <h2>company jobs</h2>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor="massage">Massage</label>
                <textarea id="massage" />
              </div>
            </form>
          </div>
        </div> 
        */
}
