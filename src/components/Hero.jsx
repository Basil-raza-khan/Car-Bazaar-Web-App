import React, { useEffect, useState } from "react";
import Search from "./Search";
import { motion } from "framer-motion"; // For animation

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotateTires, setRotateTires] = useState(false); 

  useEffect(() => {
    setIsLoaded(true);

    const timer = setTimeout(() => {
      setRotateTires(true);
    }, 3500);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center py-16 gap-6 h-[720px] w-full bg-[#a7b6ff] overflow-hidden">
      {/* Animated Heading 1 */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg"
      >
        Find your dream car for sale and for rent near you
      </motion.h2>

      {/* Animated Heading 2 */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-[40px] md:text-[60px] font-bold text-center"
      >
        Find your dream car
      </motion.h2>

      {/* Search Component with Slide-In Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="w-full flex justify-center items-center px-4"
      >
        <Search />
      </motion.div>

      {/* Car with Rotating Tires */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.8,
          x: isLoaded ? 0 : 100,
        }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="relative mt-4"
      >
        <img
          src="/Updated-Tesla.png"
          alt="My car"
          className="w-full max-w-[500px] md:max-w-[1095px] object-contain"
        />

        {/* Front Tire (Rotating Image) */}
        <motion.img
          src="/Updated-Tyre.png"
          alt="Front tire"
          className="absolute top-[51%] left-[13%] w-[50px] h-[50px] md:top-[51%] md:left-[13%] md:w-[130px] md:h-[130px] z-10"
          animate={rotateTires ? { rotate: 360 } : {}} // Conditional rotation
          transition={{
            repeat: rotateTires ? Infinity : 0, // Rotate only if `rotateTires` is true
            duration: 3,
            ease: "linear",
          }}
          style={{ transformOrigin: "center" }}
        />

        {/* Rear Tire (Rotating Image) */}
        <motion.img
          src="/Updated-Tyre.png"
          alt="Rear tire"
          className="absolute top-[51%] left-[76%] w-[50px] h-[50px] md:top-[51%] md:left-[76%] md:w-[130px] md:h-[130px] z-10"
          animate={rotateTires ? { rotate: 360 } : {}} // Conditional rotation
          transition={{
            repeat: rotateTires ? Infinity : 0, // Rotate only if `rotateTires` is true
            duration: 3,
            ease: "linear",
          }}
          style={{ transformOrigin: "center" }}
        />

      </motion.div>
    </div>
  );
}

export default Hero;
