import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";


const Showreel1 = () => {
    // useEffect(() => {

    //     if(window.innerWidth >= 1024){
    //     gsap.from(".video-iframe", {
    //       y: 20,
    //       duration: 3.5,
    //       ease: "power4.out",
    //       stagger: 0.3,
    //       scrollTrigger: {
    //         trigger: ".video-container",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play none none none",
    //       },
    //     });
    
    //     gsap.from(".text-content", {
    //       y: 50,
    //       duration: 1,
    //       delay: 0.5,
    //       ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: ".text-content",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play none none none",
    //       },
    //     });
    
    //     gsap.from(".text-content h2", {
    //       y: 20,
    //       duration: 0.8,
    //       delay: 1,
    //       ease: "power2.out",
    //       scrollTrigger: {
    //         trigger: ".text-content",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play none none none",
    //       },
    //     });
    
    //     gsap.from(".text-content p", {
    //       y: 20,
    //       duration: 0.8,
    //       delay: 1.2,
    //       ease: "power2.out",
    //       scrollTrigger: {
    //         trigger: ".text-content",
    //         start: "top 80%",
    //         end: "bottom 20%",
    //         toggleActions: "play none none none",
    //       },
    //     });
    
    //     gsap.fromTo(
    //       ".hero",
    //       { y: 1800 },
    //       {
    //         y: 300,
    //         duration: 1,
    //         ease: "none",
    //         scrollTrigger: {
    //           trigger: ".text-content",
    //           start: "top top",
    //           end: "bottom bottom",
    //           scrub: 1
    //         },
    //       }
    //     );
    
    //     gsap.fromTo(
    //       ".hero1",
    //       { y: 1800 },
    //       {
    //         y: 300,
    //         duration: 1,
    //         ease: "none",
    //         scrollTrigger: {
    //           trigger: ".text-content",
    //           start: "top top",
    //           end: "bottom bottom",
    //           scrub: 1
    //         },
    //       }
    //     );
    //   }}, []);
    
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

              <h1 className='text-3xl font-poppins text-white text-center my-16 hover:underline'>TECH VIDEOS</h1>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <iframe 
                  className="video-iframe rounded-lg shadow-lg"
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/T0QYBqxaLO4?autoplay=1&mute=1"
                  allowFullScreen
                  title="YouTube Video 1"
                  allow="autoplay; encrypted-media"
                ></iframe>
                </div>
    
                <div className='row-span-2 h-full w-full'>
                <iframe
                  className="video-iframe my-4 h-full rounded-lg shadow-lg"
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/c1C0RyVilGM?autoplay=1&mute=1"
                  allowFullScreen
                  title="YouTube Video 2"
                  allow="autoplay; encrypted-media"
                ></iframe>
                </div>
    

                    <div>
                <iframe
                  className="video-iframe rounded-lg shadow-lg"
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/JryalWWIn1A?autoplay=1&mute=1"
                  allowFullScreen
                  title="YouTube Video 3"
                  allow="autoplay; encrypted-media"
                ></iframe>
                </div>
                 

                 <div>
    
                <iframe
                  className="video-iframe my-4 rounded-lg shadow-lg"
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/BbggumaJ59o?autoplay=1&mute=1"
                  allowFullScreen
                  title="YouTube Video 4"
                  allow="autoplay; encrypted-media"
                ></iframe>
                </div>

                <div>
    
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
                
             
    
          
            </div>


    
            {/* REAL STATE VIDEOS */}


            <h1 className='text-3xl font-poppins text-white text-center cursor-pointer my-16 hover:underline'>REAL STATES</h1>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <iframe 
                  className="video-iframe rounded-lg shadow-lg"
                  width="100%"
                  height="500"
                  src="https://youtube.com/embed/yXVX3DcUpLg?autoplay=1&mute=1"
                  allowFullScreen
                  title="YouTube Video 1"
                  allow="autoplay; encrypted-media"
                ></iframe>
                </div>
    
                <div className='row-span-2 h-full w-full'>
                <iframe
                  className="video-iframe my-4 h-full rounded-lg shadow-lg"
                  width="100%"
                  height="500"
                  src="https://youtube.com/embed/PIeVbeZyaNI?autoplay=1&mute=1"
                  allowFullScreen
                  title="YouTube Video 2"
                  allow="autoplay; encrypted-media"
                ></iframe>
                </div>
    

                    <div>
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
                 

                
             
    
          
            </div>
    
    
    
    
            
          </div>
        </div>
      );
    };
    
export default Showreel1
