import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <nav className="bg-[#f5f5f5] shadow-md fixed w-full top-0 z-50 py-4 px-8 flex justify-between items-center">
      {/* Logo and Brand Name */}
      <Link to="/">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Cooking Pot Logo" className="w-16 h-16" />
          <div className="hidden md:block text-2xl text-[#4a2f23] font-extrabold">
            Sangeeta's <span className="text-[#ff5722]">Food Paradise</span>
          </div>
        </div>
      </Link>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:items-center gap-3 pb-5 lg:pb-0 lg:gap-5 absolute lg:static top-[6rem] lg:top-0 left-0 w-full bg-[#f5f5f5] lg:w-auto lg:bg-transparent transition-all`}
      >
        <Link
          to="/"
          className="block lg:inline-block text-center px-4 py-2 cursor-pointer text-[#4a2f23] hover:text-orange-500 font-medium text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/recipes"
          className="block lg:inline-block text-center px-4 py-2 cursor-pointer text-[#4a2f23] hover:text-orange-500 font-medium text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Recipes
        </Link>
        <HashLink
          to="/#about" // Use hash link for smooth scroll
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          } // Enable smooth scroll behavior
          className="block lg:inline-block text-center px-4 py-2 cursor-pointer text-[#4a2f23] hover:text-orange-500 font-medium text-lg"
          onClick={() => setMenuOpen(false)}
        >
          About
        </HashLink>
        <Link
          to="/contact"
          className="block lg:inline-block text-center px-4 py-2 cursor-pointer text-[#4a2f23] hover:text-orange-500 font-medium text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <a
          href="https://www.youtube.com/sangeetasfoodparadise"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-32 lg:w-auto mx-auto px-6 py-2 mt-4 lg:mt-0 bg-red-600 text-white text-center rounded-full transition hover:bg-red-700 text-lg"
          onClick={() => setMenuOpen(false)}
        >
          YouTube
        </a>
      </div>

      {/* Hamburger Icon */}
      <div
        className="lg:hidden text-4xl cursor-pointer z-50 text-[#4a2f23]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
