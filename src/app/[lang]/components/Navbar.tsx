"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Locale } from "../../../../i18n.config";
import LocaleSwitcher from "./locale-switcher";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar({ lang, table }: { lang: Locale; table: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full bg-gradient-to-l from-[#0A2A1A]/80 to-[#1A3A2A]/80 text-white z-30 transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold">
              <div className="flex items-baseline">
                <motion.span
                  className="text-[#D4AF37] text-3xl font-extrabold tracking-wide"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  WORLD
                </motion.span>
                <motion.span
                  className="text-white text-3xl font-extrabold tracking-wide ml-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  POOL
                </motion.span>
              </div>
              <motion.div
                className="text-sm font-medium text-center mt-[-2px] tracking-[0.2em] text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                CHAMPIONSHIP
              </motion.div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.ul
            className="flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.4,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.li
              className="relative"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/"
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium text-lg relative group"
              >
                <span> {table.home.home}</span>
                <motion.div
                  className="absolute bottom-[-8px] left-0 right-0 h-[3px] bg-[#D4AF37] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                ></motion.div>
              </Link>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/${lang}/about`}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium text-lg"
              >
                {table.navigation.about}
              </Link>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/${lang}/life-in-jeddah`}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium text-lg"
              >
                {table.navigation.lifeInJeddah}
              </Link>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/${lang}/media-center`}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium text-lg"
              >
                {table.navigation.mediaCenter}
              </Link>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/${lang}/matchs`}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium text-lg"
              >
                {table.navigation.matches}
              </Link>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/${lang}/contact-us`}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium text-lg"
              >
                {table.navigation.contactUs}
              </Link>
            </motion.li>
          </motion.ul>

          {/* Language Selector */}
          <div className="ltr:ml-8 rtl:mr-8">
            <LocaleSwitcher lang={lang} />
          </div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-white focus:outline-none hover:text-[#D4AF37] transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-[#0A2A1A] via-[#1A3A2A] to-[#0A2A1A] bg-opacity-98 z-50 flex flex-col items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.ul
                className="flex flex-col items-center gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.2,
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`/${lang}`}
                    className="text-white text-2xl font-medium py-3 hover:text-[#D4AF37] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {table.home.home}
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`/${lang}/about`}
                    className="text-white text-2xl font-medium py-3 hover:text-[#D4AF37] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {table.navigation.about}
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`/${lang}/life-in-jeddah`}
                    className="text-white text-2xl font-medium py-3 hover:text-[#D4AF37] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {table.navigation.lifeInJeddah}
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`/${lang}/media-center`}
                    className="text-white text-2xl font-medium py-3 hover:text-[#D4AF37] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {table.navigation.mediaCenter}
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`/${lang}/matchs`}
                    className="text-white text-2xl font-medium py-3 hover:text-[#D4AF37] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {table.navigation.matches}
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={`/${lang}/contact-us`}
                    className="text-white text-2xl font-medium py-3 hover:text-[#D4AF37] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {table.navigation.contactUs}
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.nav>

            {/* Language Selector in Mobile Menu */}
            <div className="mt-12">
              <LocaleSwitcher lang={lang} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
