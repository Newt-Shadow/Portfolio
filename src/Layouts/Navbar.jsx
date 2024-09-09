import { useState } from "react";
import { NavLink } from "react-router-dom";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      {/* Menu Toggle Button for Mobile */}
      <div
        className="sm:cursor-pointer fixed top-5 left-5 z-[999] rounded-lg bg-white/40 p-2 sm:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={30} />
      </div>

      {/* Navbar Menu */}
      <nav
        className={`fixed z-[999] flex items-center gap-3 bg-slate-200/60 px-4 py-2 backdrop-blur-md rounded-full text-dark_primary duration-300 
          ${showMenu ? "bottom-10" : "bottom-[-100%]"}
          sm:bottom-10 sm:gap-5 sm:px-6 sm:py-3 sm:bg-slate-200/60 sm:backdrop-blur-md sm:rounded-full`}
      >
        {nav.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            onClick={() => setActive(i)}
            className={`text-lg sm:text-xxl p-2 rounded-full sm:cursor-pointer 
              ${i === active ? "bg-dark_primary text-white" : ""}`}
          >
            {createElement(item.icon)}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
