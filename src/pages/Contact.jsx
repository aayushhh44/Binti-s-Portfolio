import React, { useEffect } from 'react';
import { CiFacebook, CiInstagram, CiMail, CiPhone, CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Contact = () => {
  useEffect(() => {
    gsap.from('.contact-container', { 
      duration: 1.5, 
      opacity: 1, 
      y: 50, 
      ease: 'power4.out', 
      stagger: {
        amount: 0.3
      }
    });
    gsap.from('.contact-item', {
      duration: 1, 
      opacity: 1, 
      y: 20, 
      ease: 'power3.out', 
      stagger: {
        amount: 0.3
      }
    });
    gsap.from('.form-item', {
      duration: 1, 
      opacity: 1, 
      y: 20, 
      ease: 'power3.out', 
      delay: 0.5,
      stagger: {
        amount: 0.3
      }
    });
  }, []);

  return (
    <div className='p-8 contact-container mb-14'>
      <h1 className='text-center text-3xl font-poppins -mt-16 mb-8'>Get in touch</h1>
      <div className='flex flex-col sm:flex-row'>
        <div className='sm:w-1/3 w-full'>
          <div className='flex flex-col items-center gap-10 justify-center border border-black h-[500px] sm:h-[600px]'>
            <div className='flex gap-2 items-center transform transition-transform duration-300 hover:scale-110 cursor-pointer contact-item'>
              <CiMail size={19} />
              <p className='text-lg font-poppins md:text-xl'>binitbt@gmail.com</p>
            </div>
            <div className='flex gap-2 items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer contact-item'>
              <CiPhone size={19} />
              <p className='text-lg font-poppins md:text-xl'>+977 9843249388</p>
            </div>
            <div className='flex gap-2 items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer contact-item'>
              <CiInstagram size={19} />
              <Link className='text-lg font-poppins md:text-xl' to="binitbt">bintibtm</Link>
            </div>
            <div className='flex gap-2 items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer contact-item'>
              <CiFacebook size={19} />
              <Link className='text-lg font-poppins md:text-xl' to="binitbt">bintibtm</Link>
            </div>
            <div className='flex gap-2 items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer contact-item'>
              <CiYoutube size={19} />
              <Link className='text-lg font-poppins md:text-xl' to="binitbt">bintibtm</Link>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-2/3 bg-footer'>
          <div className='flex flex-col p-20'>
            <h2 className='font-poppins text-footertext text-3xl'>I'd love to hear from you</h2>
            <p className='font-poppins text-white'>Leave a message below, and I'll get back to you as soon as possible</p>
            <form className=' flex flex-col gap-4 mt-4'>
              <div className='flex flex-col w-72 form-item'>
                <label className='text-footertext' htmlFor="">Name</label>
                <input className='px-4 w-52 sm:w-96 py-1 placeholder:font-poppins font-poppins border rounded-sm focus:outline-none focus:ring-2 focus:ring-black' type="text" placeholder='First Last' />
              </div>
              <div className='flex flex-col w-72 form-item'>
                <label className='text-footertext' htmlFor="">Email</label>
                <input className='px-4 w-52 py-1 sm:w-96 placeholder:font-poppins font-poppins border rounded-sm focus:outline-none focus:ring-2 focus:ring-black' type="text" placeholder='Enter your email' />
              </div>
              <div className='flex flex-col w-72 form-item'>
                <label className='text-footertext' htmlFor="">Message</label>
                <input className='px-4 w-52 py-1 sm:w-96 placeholder:font-poppins font-poppins border rounded-sm focus:outline-none focus:ring-2 focus:ring-black' type="text" placeholder='Enter your message' />
              </div>
              <button type='submit' className='transform transition-transform duration-300 hover:scale-105 bg-white w-32 mt-3 p-2 text-nowrap text-left form-item'>
                Send Message
              </button>   
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
