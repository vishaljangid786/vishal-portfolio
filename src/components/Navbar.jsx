import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
// Navbar container
const navVariants = {
  hidden: { y: -80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      when: "beforeChildren", // 🔥 pehle navbar
    },
  },
};

// Logo animation
const logoVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2, // 🔥 navbar ke baad
      type: "spring",
      stiffness: 120,
    },
  },
};

// Nav links container (stagger)
const navListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // 🔥 ek ek krke
      delayChildren: 0.4, // 🔥 logo ke baad
    },
  },
};

// Single nav item
const navItemVariants = {
  hidden: { y: -10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
          {/* LOGO */}
          <motion.div variants={logoVariants}>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}>
              <img src={logo} alt="logo" className="object-contain w-9 h-9" />
              <p className="text-white text-[18px] font-bold cursor-pointer flex">
                Vishal &nbsp;
                <span className="hidden xl-600:inline">| Web Developer</span>
              </p>
            </Link>
          </motion.div>

          {/* DESKTOP NAV LINKS */}
          <motion.ul
            variants={navListVariants}
            className="flex-row gap-10 list-none  hidden xl-1245:flex">
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={navItemVariants}
                whileHover={{ y: -3, scale: 1.05 }}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </motion.li>
            ))}
          </motion.ul>

          {/* MOBILE MENU */}
          <div className="flex items-center justify-end flex-1 xl-1245:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          {/* MOBILE DROPDOWN (below navbar) */}
        </div>
      </motion.nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl-1245:hidden w-full bg-primary border-t border-white/10 
             relative z-30 mt-[80px]">
            <ul className="flex flex-col items-center pb-10 gap-4 px-6 py-4 list-none">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[28px] border-b w-full text-center hover:text-tertiary font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}>
                  <a href={`#${link.id}`} onClick={() => setToggle(false)}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
