import { useState, useEffect } from "react";
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

  return (
    <div
      className="w-full h-screen bg-center bg-cover transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "rgba(0,0,0,0.4)",
        backgroundBlendMode: "multiply",
      }}
    >
      <nav className="fixed top-0 left-0 w-full flex items-center py-4 px-8">
        <h1 className="text-white text-3xl font-black hover:text-blue-200 transition duration-300">
        <Link to="/">Car Bazaar</Link>
        </h1>
        <ul className="flex-1 text-center">
          <li className="inline-block mx-5 text-white text-xl hover:text-blue-200">
            <Link to="/">Home</Link>
          </li>
          <li className="inline-block mx-5">
            <a
              href="#"
              className="text-white text-lg  hover:underline hover:text-emerald-500 ease-linear"
              onClick={() => changeModel("Model S")}
            >
              Model S
            </a>
          </li>
          <li className="inline-block mx-5">
            <a
              href="#"
              className="text-white text-lg hover:underline hover:text-emerald-500 ease-linear"
              onClick={() => changeModel("Model 3")}
            >
              Model 3
            </a>
          </li>
          <li className="inline-block mx-5">
            <a
              href="#"
              className="text-white text-lg  hover:underline hover:text-emerald-500 ease-linear"
              onClick={() => changeModel("Model X")}
            >
              Model X
            </a>
          </li>
          <li className="inline-block mx-5">
            <a
              href="#"
              className="text-white text-lg  hover:underline hover:text-emerald-500 ease-linear"
              onClick={() => changeModel("Model Y")}
            >
              Model Y
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="text-white border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Reserve Now
        </a>
      </nav>

      <div className="w-full flex justify-center items-center absolute bottom-12 px-8 text-white">
        <div className="mx-5 text-center">
          <motion.h2
            className="text-4xl font-light"
            animate={accelerationControls}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {acceleration}s
          </motion.h2>
          <p>60 mph</p>
        </div>
        <div className="mx-5 text-center">
          <motion.h2
            className="text-4xl font-light"
            animate={topSpeedControls}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {topSpeed} mph
          </motion.h2>
          <p>Top Speed</p>
        </div>
        <div className="mx-5 text-center">
          <motion.h2
            className="text-4xl font-light"
            animate={maxRangeControls}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {maxRange} mi
          </motion.h2>
          <p>Max Range</p>
        </div>
        <div className="flex-1 mx-5 bg-white h-1"></div>
        <div className="mx-5 text-center">
          <h2 className="text-4xl font-bold">{currentModel}</h2>
        </div>
      </div>
    </div>
  );
}

export default PreOwned;
