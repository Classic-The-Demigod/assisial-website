"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoBlack from "@/app/assets/images/logo_black.png";
import arrow from "@/app/assets/images/arrow.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import hamburger from "@/app/assets/images/hamburger.png";

import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRouteClick = () => {
    setIsMenuOpen(false);
  };

  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/casestudies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Talents", path: "/talents" },
    { name: "Career", path: "/career" },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <nav className="relative flex items-center justify-between p-4">
      <motion.div initial="initial" animate="animate" variants={logoVariants}>
        <Image src={logoBlack} alt="Logo" />
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex min-h-[66px] items-center py-2 border border-black rounded-4xl">
        {routes.map((route, index) => {
          const isActive =
            pathname === route.path ||
            (route.path !== "/" && pathname.startsWith(route.path + "/"));

          return (
            <Link
              key={index}
              href={route.path}
              className={`mx-2 text-black text-[16px] font-bold ${
                isActive
                  ? "px-4 py-3 bg-[#404356] text-white rounded-4xl"
                  : "mx-4"
              }`}
            >
              {route.name}{" "}
            </Link>
          );
        })}
      </div>

      <motion.button
        className="hidden sm:flex items-center gap-2 px-3 py-2 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Link href="/" className="text-[16px] font-bold">
          Get Started
        </Link>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
        >
          <Image src={arrow} alt="icon" />
        </motion.span>
      </motion.button>

      {/* Mobile hamburger button */}
      <motion.button
        className="md:hidden block"
        onClick={() => setIsMenuOpen(true)}
        whileTap={{ scale: 0.9 }}
      >
        <Image src={hamburger} alt="Menu" width={24} height={24} />
      </motion.button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-full bg-white z-50 shadow-lg md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <motion.div
                initial="initial"
                animate="animate"
                variants={logoVariants}
              >
                <Image src={logoBlack} alt="Logo" />
              </motion.div>

              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 font-bold text-3xl"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                X
              </motion.button>
            </div>

            <div className="flex flex-col py-4">
              {routes.map((route) => {
                const isActive =
                  pathname === route.path ||
                  (route.path !== "/" && pathname.startsWith(route.path + "/"));

                return (
                  <motion.div
                    key={route.name}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={route.path}
                      onClick={handleRouteClick}
                      className={`block py-3 px-4 text-black text-[16px] font-bold ${
                        isActive
                          ? "bg-[#404356] text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {route.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div className="mt-6 px-4" variants={itemVariants}>
                <motion.button
                  className="flex min-w-[180px] items-center gap-2 px-3 justify-center py-2 text-white bg-gradient-to-r from-[#160F92] to-[#AF47AA] rounded-4xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link href="/" className="text-[16px] font-bold">
                    Get Started
                  </Link>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: 3,
                      duration: 0.8,
                    }}
                  >
                    <Image src={arrow} alt="icon" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
