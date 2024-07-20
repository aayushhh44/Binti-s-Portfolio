import React from "react";
import { IoMdArrowUp } from "react-icons/io";

const Footer = () => {
  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-footer pt-8">
        <div className="p-8">
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-0">
            <div className="flex flex-col w-full sm:w-1/3">
              <p className="font-poppins text-footertext mb-2">Menu</p>
              <p className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Home
              </p>
              <p className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                About
              </p>
              <p className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Show reels
              </p>
              <p className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Profile
              </p>
              <p className="font-poppins text-white cursor-pointer hover:underline hover:uppercase">
                Contact
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full sm:w-1/3">
              <div>
                <p className="font-poppins text-footertext mb-2">
                  Get in touch
                </p>
                <p className="font-poppins text-white">+977 9843249388</p>
                <p className="font-poppins text-white">binitbtm@gmail.com</p>
              </div>

              <div className="my-2">
                <p className="font-poppins text-footertext">Address</p>
                <p className="font-p text-white">
                  Milan Chowk Kathmandu, Nepal
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full sm:w-1/3">
              <p className="font-poppins mb-2 text-footertext">
                About Binit Btm.
              </p>
              <p className="font-poppins text-white">
                Binit btm is a video editor | graphic designer | web designer
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>

              <div className="flex mt-4 gap-4 sm:gap-8 flex-col sm:flex-row">
                <p className="font-poppins px-4 py-1 cursor-pointer w-36 sm:w-44  border-[#D0C1B3] rounded-2xl text-footertext border">
                  Instagram
                </p>

                <p className="font-poppins px-4 py-1 cursor-pointer w-36 sm:w-44 border-[#D0C1B3] rounded-2xl text-footertext border">
                  <a target="_blank" href="https://www.linkedin.com/in/binit-budhathoki-magar-b539a9280/">Linkedin</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full overflow-hidden">
          <h1 className="xl:text-[320px] lg:text-[260px] md:text-[190px] font-extrabold font-poppins text-center text-footertext text-8xl text-nowrap">
            BINIT BT
          </h1>
        </div>

        <div className="flex justify-between flex-col sm:flex-row gap-4 p-8 items-center">
          <p className="text-footertext text-nowrap font-poppins">Bint btm ©</p>
          <p className="text-footertext text-nowrap font-poppins">
            Designed by:
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aayush-poudel-915007223/"
            >
              Aayush Poudel
            </a>
          </p>

          <div
            onClick={ScrollUp}
            className="flex items-center cursor-pointer transform translate duration-150 hover:scale-125"
          >
            <button className="text-footertext font-poppins">
              Back to Top{" "}
            </button>
            <IoMdArrowUp className="text-footertext font-poppins" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
