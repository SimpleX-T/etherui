"use client";

import { ChevronDown } from "lucide-react";
import HamburgerToggle from "./hamburger-toggle";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Nav items array for reusability
const NAV_ITEMS = [
  {
    label: "Learn",
    href: "#learn",
    subItems: [
      { label: "Docs", href: "#docs" },
      { label: "Tutorials", href: "#tutorials" },
    ],
  },
  {
    label: "Build",
    href: "#build",
    subItems: [
      { label: "SDK", href: "#sdk" },
      { label: "API", href: "#api" },
    ],
  },
  { label: "Product", href: "#product" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu and handle body scroll
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Prevent scroll when menu is open
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center py-4 md:py-6 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-white font-turret z-10"
        >
          Ether
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              subItems={item.subItems}
            />
          ))}
        </div>

        <HamburgerToggle
          isOpen={isOpen}
          onClick={toggleMenu}
          aria-expanded={isOpen}
        />
      </motion.nav>

      {/* Mobile Menu with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-black p-6 md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-primary-purple text-lg font-medium transition-colors"
                      onClick={toggleMenu} // Close menu on link click
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  label,
  subItems,
}: {
  label: string;
  subItems?: { label: string; href: string }[];
}) {
  const hasSubmenu = subItems && subItems.length > 0;

  return (
    <div className="relative group">
      <Link
        href={`#${label.toLowerCase()}`}
        className="text-white hover:text-purple-400 transition-colors flex items-center"
      >
        {label}
        {hasSubmenu && (
          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
        )}
      </Link>

      {/* Hover underline animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6843EC] origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
      />

      {/* Dropdown */}
      {hasSubmenu && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-black rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-200 ease-out z-20">
          {subItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-sm text-white hover:bg-[#6843EC]/20 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
