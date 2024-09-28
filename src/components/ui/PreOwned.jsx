import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function PreOwned() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://i.postimg.cc/mg7L1t7Z/image-1.png"
  );
  const [currentModel, setCurrentModel] = useState("Model S");
  const [acceleration, setAcceleration] = useState(1.9);
  const [topSpeed, setTopSpeed] = useState(200);
  const [maxRange, setMaxRange] = useState(396);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State for navbar visibility

  const carSpecs = {
    "Model S": {
      acceleration: 1.9,
      speed: "60 mph",
      topSpeed: 200,
      maxRange: 396,
      imageUrl: "https://i.postimg.cc/mg7L1t7Z/image-1.png",
    },
    "Model 3": {
      acceleration: 3.1,
      speed: "60 mph",
      topSpeed: 162,
      maxRange: 358,
      imageUrl: "https://i.postimg.cc/FRCNXcXp/image-2.png",
    },
    "Model X": {
      acceleration: 2.6,
      speed: "60 mph",
      topSpeed: 163,
      maxRange: 340,
      imageUrl: "https://i.postimg.cc/KYNmQw9d/image-3.png",
    },
    "Model Y": {
      acceleration: 3.5,
      speed: "60 mph",
      topSpeed: 155,
      maxRange: 330,
      imageUrl: "https://i.postimg.cc/1t3sdB24/image-4.png",
    },
  };

  const accelerationControls = useAnimation();
  const topSpeedControls = useAnimation();
  const maxRangeControls = useAnimation();

  const changeModel = (modelName) => {
    const specs = carSpecs[modelName];
    setBackgroundImage(specs.imageUrl);
    setCurrentModel(modelName);

    // Animate changes using Framer Motion's `start` method
    accelerationControls.start({ to: specs.acceleration, from: acceleration });
    topSpeedControls.start({ to: specs.topSpeed, from: topSpeed });
    maxRangeControls.start({ to: specs.maxRange, from: maxRange });

    // Update the state values to match the new model
    setAcceleration(specs.acceleration);
    setTopSpeed(specs.topSpeed);
    setMaxRange(specs.maxRange);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev); // Toggle the navbar visibility
  };

  return (
    <div
      className="w-full h-screen bg-center bg-cover transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "rgba(0,0,0,0.4)",
        backgroundBlendMode: "multiply",
      }}
    >
      <nav className="fixed top-0 left-0 w-full flex items-center py-4 px-4 md:px-8">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-white text-2xl md:text-3xl font-black hover:text-blue-200 transition duration-300">
            <Link to="/">
              <div className="flex items-center justify-center gap-2">
                <img src="/logo.svg" alt="" width={40} height={40} />
                Car Bazaar
              </div>
            </Link>
          </h1>

          {/* Hamburger Icon for Mobile View */}
          <button onClick={toggleNavbar} className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:flex md:items-center md:bg-transparent bg-gray-800 md:bg-transparent transition-all duration-300 ${isNavbarOpen ? "block" : "hidden md:block"}`}
        >
          {Object.keys(carSpecs).map((model) => (
            <li key={model} className="block md:inline-block mx-2 md:mx-5 text-white text-lg hover:underline hover:text-emerald-500">
              <a
                href="#"
                className="hover:scale-105 transition-all cursor-pointer"
                onClick={() => {
                  changeModel(model);
                  setIsNavbarOpen(false); // Close the navbar on model selection
                }}
              >
                {model}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Car Specs Section */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center absolute bottom-12 px-4 md:px-8 text-white">
        {/* Wrap the specs in a single row for mobile view */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="mx-2 sm:mx-5 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-light"
              animate={accelerationControls}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {acceleration}s
            </motion.h2>
            <p className="text-sm md:text-base">60 mph</p>
          </div>
          <div className="mx-2 sm:mx-5 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-light"
              animate={topSpeedControls}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {topSpeed} mph
            </motion.h2>
            <p className="text-sm md:text-base">Top Speed</p>
          </div>
          <div className="mx-2 sm:mx-5 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-light"
              animate={maxRangeControls}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {maxRange} mi
            </motion.h2>
            <p className="text-sm md:text-base">Max Range</p>
          </div>
        </div>
        <div className="flex-1 mx-2 sm:mx-5 bg-white h-1"></div>
        <div className="mx-2 sm:mx-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{currentModel}</h2>
        </div>
      </div>
    </div>
  );
}

export default PreOwned;
