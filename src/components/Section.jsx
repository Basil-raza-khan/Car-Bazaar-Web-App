import React from 'react';
import { motion } from 'framer-motion';

function Section() {
  return (
    <section>
      <motion.div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <motion.div 
            className="relative z-10 lg:py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="Stunning Car"
                src="https://s7d1.scene7.com/is/image/hyundai/2024-sonata-hev-dn8hev-0458-carousel:2560-2560x1240?qlt=85,0&fmt=webp"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="relative flex items-center bg-gray-100"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Discover the Future of Driving
              </h2>

              <p className="mt-4 text-gray-600">
                Experience unparalleled performance and cutting-edge technology with our latest models.
                Designed to elevate your driving experience, our cars combine luxury, efficiency, and innovation.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Section;
