import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './animate.css'
import { GiCrossMark, GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {

  const[navbar, setNavbar] = useState(false);
  return (



    <>
    <div className='p-4 hidden sm:block'>
      
       <div className='flex justify-between items-center z-10'>
      {/* <Link to='/' className='font-poppins text-2xl'>Binit Bt</Link> */}
      <Link to='/'>
      <img src="/assets/Logo.png" className='w-28 scale-in cursor-pointer' alt="Logo" />
      </Link>

      <div className='flex space-x-4'>
      <Link to='/' className='text-center cursor-pointer text-xl focus:text-black font-poppins text-customGray'>Portfolio</Link>
      <Link to='/showreel' className='text-center cursor-pointer text-xl focus:text-black font-poppins text-customGray'>Showreel</Link>
      <Link to='/profile' className='text-center cursor-pointer text-xl focus:text-black font-poppins text-customGray'>Profile</Link>
      <Link to='/contact' className='text-center text-xl cursor-pointer font-poppins focus:text-black text-customGray'>Contact</Link>
      </div>
    </div>
   

 
    </div>

    <div className='sm:hidden p-8'>

    <GiHamburgerMenu size={32} onClick={() => setNavbar(!navbar)} className={`${navbar ? 'hidden' : 'block'} cursor-pointer absolute top-4 right-4 transition-opacity duration-1000`}/>

    {navbar && (

      <>
          <GiCrossMark size={32} onClick={() => setNavbar(!navbar)} className='cursor-pointer absolute top-4 right-4 transition-opacity duration-500' />
          <div className='absolute mt-12 top-0 left-0 w-full justify-center h-full bg-white z-20 flex flex-col items-center space-y-4'>
            <Link onClick={() => setNavbar(false)} to='/' className='text-center hover:underline cursor-pointer text-xl focus:text-black font-poppins text-customGray'>Portfolio</Link>
            <Link onClick={() => setNavbar(false)} to='/showreel' className='text-center hover:underline cursor-pointer text-xl focus:text-black font-poppins text-customGray'>Showreel</Link>
            <Link onClick={() => setNavbar(false)} to='/profile' className='text-center hover:underline cursor-pointer text-xl focus:text-black font-poppins text-customGray'>Profile</Link>
            <Link onClick={() => setNavbar(false)} to='/contact' className='text-center hover:underline cursor-pointer text-xl font-sans focus:text-poppins text-customGray'>Contact</Link>
          </div>
          </>
        )}
   </div>


    </>



  )
}

export default Navbar
