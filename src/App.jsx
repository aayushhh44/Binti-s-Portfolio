import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Showreel1 from './pages/Showreel1';
import Profile1 from './pages/Profile1';
import ScrollAnimation from './components/Test';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Lottie from 'react-lottie';
import AnimationData from './Lottie/Lottie.json';
import './Circle.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const circlesRef = useRef([]);

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

  useEffect(() => {
    if (circlesRef.current.length > 0) {
      const coords = { x: 0, y: 0 };
      const colors = [
        "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c", "#df685c",
        "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f", "#950f5f",
        "#830060", "#7c0060", "#680060", "#60005f", "#48005f", "#3d005e"
      ];

      circlesRef.current.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      });

      const handleMouseMove = (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animateCircles = () => {
        let x = coords.x;
        let y = coords.y;

        circlesRef.current.forEach((circle, index) => {
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
      };

      animateCircles();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [loading]);

  const Header = () => (
    <>
      {Array.from({ length: 21 }).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <Lottie options={animationFunction()} width={400} height={500} />
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <Header />
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
