import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center text-teal-300 sm:justify-start">
            <h1 className="text-2xl font-bold">Car Bazaar</h1>
          </div>

          <p className="mt-4 max-w-md text-center leading-relaxed sm:text-left lg:mt-0">
            "Empowering you to achieve greatness, one step at a time."
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white pt-16 md:grid-cols-4 lg:grid-cols-6">
          {/* About Us */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">About Us</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a href="#" className="hover:underline">Company History</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Meet the Team</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Careers</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">Resources</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a href="#" className="hover:underline">Online Guides</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Downloads</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Upcoming Events</a>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium">Helpful Links</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a href="#" className="hover:underline">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Support</a>
              </li>
            </ul>
          </div>

          {/* Stay in Touch */}
          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium">Stay in Touch</p>
            <div className="mx-auto mt-8 max-w-md">
              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <input
                    className="w-full rounded-full border-gray-200 bg-white px-6 py-3 shadow-sm dark:border-gray-700"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    className="block rounded-full bg-teal-600 px-8 py-3 font-medium transition hover:bg-teal-700"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm">
            &copy; 2024 Car Bazaar. All rights reserved.
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:text-teal-300"
              >
                <FaFacebook size={24} />
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:text-teal-300"
              >
                <FaInstagram size={24} />
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:text-teal-300"
              >
                <FaTwitter size={24} />
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:text-teal-300"
              >
                <FaGithub size={24} />
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
