import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-10 bg-[#111827]">
      <div className="mx-8 px-4 sm:px-6 lg:px-8 py-6 text-center bg-[#1F2937] rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F1E1] mb-4 sm:mb-6">
          Connect with Us on Social Media
        </h2>
        <p className="text-base sm:text-lg text-[#F5F1E1] mb-4 sm:mb-6">
          Follow us for updates, events, and more from the Arts Council of
          Pakistan, Karachi.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 sm:p-4 rounded-full bg-[#F5F1E1] shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaFacebookF className="text-[#B30B00] text-xl sm:text-2xl group-hover:text-green-700" />
            </div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 sm:p-4 rounded-full bg-[#F5F1E1] shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaInstagram className="text-[#B30B00] text-xl sm:text-2xl group-hover:text-green-700" />
            </div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 sm:p-4 rounded-full bg-[#F5F1E1] shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaLinkedinIn className="text-[#B30B00] text-xl sm:text-2xl group-hover:text-green-700" />
            </div>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 sm:p-4 rounded-full bg-[#F5F1E1] shadow-lg transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
              <FaYoutube className="text-[#B30B00] text-xl sm:text-2xl group-hover:text-green-700" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;