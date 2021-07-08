import React, { useEffect, useRef, useState } from "react";
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
  const [emailtext, settextemail] = useState("copy");
  const [phonetext, settextphone] = useState("copy");
  const [githubtext, settextgithub] = useState("copy");
  const [facebooktext, settextfacebook] = useState("copy");

  useEffect(() => {
    if (emailtext === "copyed") {
      setTimeout(() => {
        settextemail("copy");
      }, 1000);
    }
  }, [emailtext]);

  useEffect(() => {
    if (phonetext === "copyed") {
      setTimeout(() => {
        settextphone("copy");
      }, 1000);
    }
  }, [phonetext]);

  useEffect(() => {
    if (githubtext === "copyed") {
      setTimeout(() => {
        settextgithub("copy");
      }, 1000);
    }
  }, [githubtext]);

  useEffect(() => {
    if (facebooktext === "copyed") {
      setTimeout(() => {
        settextfacebook("copy");
      }, 1000);
    }
  }, [facebooktext]);

  return (
    <div
      ref={sectionref}
      id="contactsection"
      className="opacity-0 w-screen py-10"
    >
      <h1 className="text-center text-3xl dark:text-primarydark text-primary">
        {`<`} Contact {`/>`}
      </h1>
      {/* Social Links */}
      <div className="w-2/4 mx-auto mt-10">
        <div className="text-center text-lg mb-3">
          FeelFree To Contact Me At{" "}
          <a
            href="mailto:salemmazen27@gmail.com"
            className="text-primary dark:text-primarydark"
          >
            salemmazen27@gmail.com
          </a>
        </div>

        <div className="flex justify-around pb-28">
          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-primary dark:bg-primarydark rounded-full">
            <span>E</span>
            <div className="dark:bg-white bg-black text-white mt-1 dark:text-black opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white dark:border-black">
                salemmazen27@gmail.com
              </div>
              <div
                onClick={() => {
                  navigator.clipboard.writeText("salemmazen27@gmail.com");
                  settextemail("copyed");
                }}
                className="w-full cursor-pointer text-center border-b-2 border-white dark:border-black"
              >
                {emailtext}
              </div>
              <a
                href="mailto:salemmazen27@gmail.com"
                className="block w-full cursor-pointer text-center"
              >
                send
              </a>
            </div>
          </div>

          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-primary dark:bg-primarydark rounded-full">
            <span>P</span>
            <div className="dark:bg-white bg-black text-white mt-1 dark:text-black opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white dark:border-black">
                ‎+201285301916
              </div>
              <div
                onClick={() => {
                  navigator.clipboard.writeText("‎+201285301916");
                  settextphone("copyed");
                }}
                className="w-full cursor-pointer text-center border-b-2 border-white dark:border-black"
              >
                {phonetext}
              </div>
              <a
                href="tel:+201285301916"
                className="block w-full cursor-pointer text-center"
              >
                phone
              </a>
            </div>
          </div>

          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-primary dark:bg-primarydark rounded-full">
            <span>G</span>
            <div className="dark:bg-white bg-black text-white mt-1 dark:text-black opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white dark:border-black">
                ‎Github.com
              </div>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(
                    "‎https://github.com/mazensalem"
                  );
                  settextgithub("copyedborder-white dark:");
                }}
                className="w-full cursor-pointer text-center border-b-2 border-white dark:border-black"
              >
                {githubtext}
              </div>
              <a
                href="https://github.com/mazensalem"
                target="_blank"
                className="block w-full cursor-pointer text-center"
              >
                go
              </a>
            </div>
          </div>

          <div className="group relative cursor-pointer w-14 flex justify-center items-center h-14 bg-primary dark:bg-primarydark rounded-full">
            <span>F</span>
            <div className="dark:bg-white bg-black text-white mt-1 dark:text-black opacity-0 group-hover:opacity-100 transition duration-700 absolute text-lg cursor-default top-full left-2/4 transform -translate-x-2/4 rounded-md">
              <div className="text-base text-center border-b-2 border-white dark:border-black">
                Facebook.com
              </div>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://www.facebook.com/mazen.salem.796569"
                  );
                  settextfacebook("copyedborder-white dark:");
                }}
                className="w-full cursor-pointer text-center border-b-2 border-white dark:border-black"
              >
                {facebooktext}
              </div>
              <a
                href="https://www.facebook.com/mazen.salem.796569"
                target="_blank"
                className="block w-full cursor-pointer text-center"
              >
                go
              </a>
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
