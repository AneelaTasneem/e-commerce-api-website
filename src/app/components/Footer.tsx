import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center mb-0 p-10 bg-gradient-to-r from-black to-slate-900 text-slate-500">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-lg">
        <a href="#" className="hover:text-yellow-600 text-red-600">
          Home
        </a>
        <a href="#" className="hover:text-yellow-600 text-red-600">
          About
        </a>
        <a href="#" className="hover:text-yellow-600 text-red-600">
          Delivery
        </a>
        <a href="#" className="hover:text-yellow-600 text-red-600">
          Contact
        </a>
      </nav>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/?size=48&id=118497&format=png"
            alt="Facebook Logo"
            width={48}
            height={48}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/?size=48&id=32323&format=png"
            alt="Instagram Logo"
            width={48}
            height={48}
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/?size=48&id=13930&format=png"
            alt="LinkedIn Logo"
            width={48}
            height={48}
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png"
            alt="Twitter Logo"
            width={48}
            height={48}
          />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://img.icons8.com/?size=48&id=16713&format=png"
            alt="WhatsApp Logo"
            width={48}
            height={48}
          />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-red-700 font-medium mb-8 hover:text-yellow-600">
        &copy; 2025 Aneela Tasneem. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
