import React, { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Choose Us", href: "/choose-us" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-[0_4px_12px_rgba(119,55,165,0.25)]">
      <div className=" md:max-w-12xl mx-w-14xl md:px-22 px-10 sm:px-6 md:px-22 lg:px-32  flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img src={logo} alt="Happinex Hub" className="md:h-25 md:w-25 h-20 w-20" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-9 text-[18px] font-medium text-brandBlack">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative pb-1 transition-colors duration-300
                  ${isActive ? "text-primary" : "text-brandBlack"}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-primary
                  ${isActive ? "after:w-full" : "after:w-0"}
                `}
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md bg-primary text-white hover:bg-primaryDark transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-[0_6px_16px_rgba(119,55,165,0.2)] flex flex-col px-4 py-6 gap-4 md:hidden">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({top: 0, behavior: 'smooth'});
                }}
                className={`font-medium transition-colors ${
                  isActive ? "text-primary" : "text-brandBlack"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
});

Header.displayName = "Header";
export default Header;
