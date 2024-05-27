import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Navbar2",
    link: "/#services",
  },
  {
    id: 3,
    name: "Navbar3",
    link: "/#",
  },
  {
    id: 3,
    name: "Navbar4",
    link: "/#",
  },
  {
    id: 3,
    name: "Navbar5",
    link: "/#",
  },
];

const dropdownLinks = [
  {
    id: 1,
    name: "detail1",
    link: "/#",
  },
  {
    id: 2,
    name: "detail2",
    link: "/#",
  },
  {
    id: 3,
    name: "detail3",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-500 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-secondary/40 py-2 sm:py-3">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
            >
              <img src={Logo} alt="Logo" className="w-80" />
              <span></span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block opacity-0">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order Button */}
            <button
              onClick={() => alert("사전 등록이 완료되었습니다")}
              className="bg-gradient-to-r from-primary to-primary transition-all duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 shrink-0"
            >
              <span className="transition-all duration-200">사전 등록하기</span>
              {/* <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" /> */}
            </button>
            {/* Darkmode Switch */}
            <div className="flex-shrink-0">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="hover:text-primary duration-200 inline-block px-4 "
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Navbar6
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow">
              <ul>
                {dropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/10"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
