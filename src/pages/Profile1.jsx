import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import WorkProfile from "../components/WorkProfile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Profile1 = () => {
  const fullText = "Binit BT";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 400); // Adjust the delay (in milliseconds) as needed
      return () => clearTimeout(timer);
    }
  }, [displayText, fullText]);

  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    // gsap.fromTo(
    //   ".animate-h1",
    //   { scale: 1 },
    //   {
    //     scale: 5,
    //     scrollTrigger: {
    //       trigger: ".animate-h1",
    //       start: "top center",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true // Remove markers for production
    //     }
    //   }
    // );

    gsap.fromTo(
      ".animate-p",
      { y: 0 }, // Start at the original position
      {
        y: -200, // Move up by 600 units
        scrollTrigger: {
          trigger: ".animate-p",
          start: "top center", // Start animation when the top of the trigger hits the center of the viewport
          end: "bottom center", // End animation when the bottom of the trigger hits the center of the viewport
          scrub: 2, // Sync animation progress with scroll position
          // markers: true // Uncomment this to see markers for debugging
        }
      }
    );
    
  }, []);

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="/dirt.gif"
          alt="Dirt Bike"
          className="w-full h-screen object-cover"
          style={{ zIndex: -1 }}
        />
        <div className="absolute bottom-20 left-0 p-4 text-white">
          <h1 className="text-6xl md:text-6xl font-allura font-extralight animate-h1">
            {displayText}
          </h1>
          <p className="font-poppins font-extralight max-w-[400px] animate-p">
            I'm <span className="font-allura text-3xl text-green-800">Binit</span>, and I've been a graphic designer for 2 years now. I love creating cool designs and bringing ideas to life. Besides graphic design, I'm really into video editing, videography, and making eye-catching thumbnails. Web designing is also something I enjoy a lot.
          </p>
          <div onClick={handleClick} className="flex mt-4 items-center cursor-pointer">
            <FaAngleDown />
            <p className="mx-2 font-poppins">
              Explore Work
            </p>
          </div>
        </div>
      </div>
      <WorkProfile />
    </>
  );
};

export default Profile1;
