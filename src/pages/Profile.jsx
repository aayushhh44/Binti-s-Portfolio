import React, { useState, useEffect } from 'react';

const Home = () => {
  const fullText = "Binit BT";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 200); // Adjust the delay (in milliseconds) as needed
      return () => clearTimeout(timer);
    }
  }, [displayText, fullText]);

  // setTimeout(() =>{
  //   setDisplayText(fullText)
  // })

  return (
    <>
    <div className="h-screen -mt-20 flex flex-col items-center justify-center">
      <h1 className='text-6xl md:text-9xl font-allura text-center font-extralight'>
        {displayText}
      </h1>
     
      <p className='text-centerfont-poppins mx-10'>Web designer | Graphic designer | Video editor | Thumbnai Designer </p>

      <div className='mt-6 font-allura'>

      <p className='font-poppins font-extralight text-center max-w-[1000px]'>I'm <span className='font-allura text-3xl text-green-800'>Binit</span>, and I've been a graphic designer for 2 years now. I love creating cool designs and bringing ideas to life. Besides graphic design, I'm really into video editing, videography, and making eye-catching thumbnails. Web designing is also something I enjoy a lot.</p>
      </div>
    </div>
    

    </>
  );
};

export default Home;
