import React from "react";

function ImageDetails({ carDetails }) {
  return (
    <div>
      {carDetails?.images[0].imageUrl ? (
        <div>
          <img
            src={carDetails?.images[0].imageUrl}
            className="w-full h-[500px] object-cover rounded-xl"
            alt=""
          />
        </div>
      ) : (
        <div className="w-full rounded-xl h-[300px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default ImageDetails;
