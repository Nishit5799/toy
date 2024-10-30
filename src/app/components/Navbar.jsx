"use client";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Navbar = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const options = ["Category", "Age", "Brand", "Characters"];

  const handleNextPageScroll = () => {
    const element = document.querySelector(".page2");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });

    // Close the menu when a menu item is clicked
    setIsMenuOpen(false);
  };

  // GSAP Animation for the Navbar
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo", {
      y: "-200%",
      duration: 2,
      ease: "expo.out",
    }).from(
      ".options h1",
      {
        y: "-50%",
        stagger: 0.1,
        ease: "expo.out",
        opacity: 0,
      },
      0
    );
  });

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="max-w-screen-3xl  py-4 sm:pt-2 sm:pb-0 w-full px-10 mx-auto sm:px-[5vw] flex justify-between items-center font-['Bayon'] absolute bg-transparent top-0 left-0 bg-[#F7F1EC] z-10">
        {/* Logo */}
        <div className="logo-container h-16 w-16 rounded-full  overflow-hidden sm:h-28 sm:w-28 cursor-pointer">
          <Link href="/">
            <Image
              src="/logoo.svg"
              height={1000}
              width={1000}
              alt="funtoy"
              className="w-full h-full logo-white"
            />
          </Link>
        </div>

        {/* Options (visible on large screens) */}
        <div className="hidden sm:flex gap-14 overflow-hidden z-15">
          {options.map((e, i) => (
            <div
              key={i}
              className="options text-lg w-fit h-7 text-white font-normal sm:hover:-translate-y-8 sm:text-2xl sm:hover:text-slate-400 sm:transition-all sm:duration-300 cursor-pointer"
            >
              <h1 onClick={handleNextPageScroll}>
                {e} <br /> {e}
              </h1>
            </div>
          ))}
        </div>

        {/* Menu Icon (visible on small screens) */}
        <div className="sm:hidden">
          <IoMdMenu
            size={24}
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Sliding Screen (visible when menu is open) */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-[#f7f1eccb] bg-cover bg-center z-50 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/800x600')`, // Random background image
        }}
      >
        <div className="p-6 flex justify-end text-black">
          {/* Close button */}
          <IoMdClose
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Menu options inside the sliding screen */}
        <div className="flex flex-col items-center space-y-6 mt-10">
          {options.map((option, index) => (
            <h1
              key={index}
              className="text-2xl text-black cursor-pointer hover:text-black"
              onClick={handleNextPageScroll} // Close the menu when an option is clicked
            >
              {option}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
