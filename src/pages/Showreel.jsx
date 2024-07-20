import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const Showreel = () => {
  useEffect(() => {

    if(window.innerWidth >= 1024){
    gsap.from(".video-iframe", {
      y: 20,
      duration: 3.5,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".video-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".text-content", {
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".text-content h2", {
      y: 20,
      duration: 0.8,
      delay: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".text-content p", {
      y: 20,
      duration: 0.8,
      delay: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      ".hero",
      { y: 1800 },
      {
        y: 300,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".text-content",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        },
      }
    );

    gsap.fromTo(
      ".hero1",
      { y: 1800 },
      {
        y: 300,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".text-content",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        },
      }
    );
  }}, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore My Showreel
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl">
            Check out some of my latest work and projects in motion design,
            videography, and more. Each video showcases my skills and creativity
            in delivering high-quality visual content.
          </p>
        </div>


          {/* TECH VIDEOS */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="video-container">
            <iframe 
              className="video-iframe rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/T0QYBqxaLO4?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 1"
              allow="autoplay; encrypted-media"
            ></iframe>

            <iframe
              className="video-iframe my-4 rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/c1C0RyVilGM?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 2"
              allow="autoplay; encrypted-media"
            ></iframe>

            <iframe
              className="video-iframe rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/JryalWWIn1A?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 3"
              allow="autoplay; encrypted-media"
            ></iframe>

            <iframe
              className="video-iframe my-4 rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/BbggumaJ59o?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 4"
              allow="autoplay; encrypted-media"
            ></iframe>

            <iframe
              className="video-iframe rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/T0QYBqxaLO4?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 5"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>

          <div className="text-content justify-center md:justify-normal flex md:flex-col items-center p-6  bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">T</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">E</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">C</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">H</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">-</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">V</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">I</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">D</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">E</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">O</h2>
            <h2 className="text-3xl md:text-9xl font-bold text-white hero mb-4">S</h2>
          </div>
        </div>

        {/* REAL STATE VIDEOS */}


        <div className="grid grid-cols-1 gap-6 mt-44 lg:grid-cols-2">
          <div className="video-container">
            <iframe 
              className="video-iframe rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://youtube.com/embed/yXVX3DcUpLg?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 1"
              allow="autoplay; encrypted-media"
            ></iframe>

            <iframe
              className="video-iframe my-4 rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://youtube.com/embed/PIeVbeZyaNI?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 2"
              allow="autoplay; encrypted-media"
            ></iframe>

            <iframe
              className="video-iframe rounded-lg shadow-lg"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/s651tGBQiGE?autoplay=1&mute=1"
              allowFullScreen
              title="YouTube Video 3"
              allow="autoplay; encrypted-media"
            ></iframe>

            
          </div>

          <div className="text-content justify-center md:justify-normal flex md:flex-col items-center p-6  bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">R</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">E</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">A</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">L</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">-</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">E</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">S</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">T</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">A</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">T</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">E</h2>
            <h2 className="text-3xl md:text-6xl font-bold text-white hero1 mb-4">S</h2>
          </div>
        </div>



        
      </div>
    </div>
  );
};

export default Showreel;
