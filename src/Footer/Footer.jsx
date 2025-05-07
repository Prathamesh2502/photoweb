import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="text-gray-400 mt-2">
            We are dedicated to providing the best artistic content and showcasing
talented creators worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="text-gray-400 mt-2">Email: example@email.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Address: 123 Art Street, City, Country</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li><a href="/home" className="hover:text-white">Home</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2025 Art Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
