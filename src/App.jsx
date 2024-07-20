import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Showreel from './pages/Showreel';
import { Route, Routes } from 'react-router-dom';
// import Profile from './pages/Profile'
import ScrollAnimation from './components/Test';
import Profile1 from './pages/Profile1';
import AnimationData from './Lottie/Lottie.json';
import Lottie from 'react-lottie';
import Home1 from './components/Home1';
import Contact from './pages/Contact';
import Showreel1 from './pages/Showreel1';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  const animationFunction = () => {
    return {
      loop: true,
      autoplay: true,
      animationData: AnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        {/* <div className="loading-spinner border-8 border-t-8 border-gray-2   00 border-t-blue-500 rounded-full w-24 h-24 animate-spin"></div> */}
      
        <Lottie options={animationFunction()} width={500} height={500} />
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/showreel" element={<Showreel1 />} />
        <Route path="/profile" element={<Profile1 />} />
        <Route path="/scroll" element={<ScrollAnimation />} />
        <Route path="/contact" element={<Contact />} />
     
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
