import { FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa"; // Importing the arrow icon

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-[#4a2f23] text-[#f5f5f5] text-center py-8 text-base">
      {/* Footer Content */}
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Main Footer Flex Container */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Social Media Links */}
                    <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/sangeeta_food_paradise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff5722] transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/sangeetasfoodparadise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff5722] transition duration-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
          {/* Copyright Text */}
          <p className="text-lg md:text-xl mb-4 md:mb-0">
            &copy; {currentYear} Sangeeta's Food Paradise. All rights reserved.
          </p>

          {/* Back to Top Link with Icon */}
          <div className="flex justify-center items-center gap-2  md:mt-0">
            <a
              href="#top"
              className="inline-flex items-center text-[#ff5722] hover:text-white text-lg font-medium transition duration-300"
            >
              <FaArrowUp size={20} className="mr-2" />
              Back to Top
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
