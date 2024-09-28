import React from "react";
import { FaCheck } from "react-icons/fa";

function Features({ features }) {
  return (
    <div className="p-4 md:p-10 border shadow-md rounded-xl my-7">
      <h2 className="font-medium text-2xl">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
        {Object.entries(features ?? {}).map(([feature, value]) => (
          <div key={feature} className="flex gap-2 items-center">
            <FaCheck className="text-lg p-1 rounded-full text-primary" />
            <h2>{feature}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
