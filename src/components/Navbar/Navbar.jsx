/* eslint-disable no-undef */
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md: items-center text-white px-10 pt-6 md:px-20">
      <h1 className="text-2xl font-bold tracking-wide">Jannatul Ferdous</h1>
      

      <ul
        className={` ${
            menu ? "block" : "hidden"
          }  mx-24 pb-4 mt-4 font-semibold bg-black px-2 rounded-xl file:bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Resume">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Resume
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {setMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}


    </nav>
  );
};

export default Navbar;