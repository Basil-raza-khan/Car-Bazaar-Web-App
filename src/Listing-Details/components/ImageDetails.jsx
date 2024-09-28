import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ImageDetails({ carDetails }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setPreviewImage(imageUrl);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setPreviewImage("");
  };

  return (
    <div className="relative mx-4 md:mx-1 md:w-full">
      {carDetails?.images?.length > 0 ? (
        <>
          <Carousel>
            <CarouselContent className="flex gap-4">
              {carDetails.images.map((image, index) => (
                <CarouselItem key={index} className="flex justify-center flex-grow ">
                  <div className="w-full max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%]">
                    <img
                      src={image.imageUrl}
                      className="w-full h-[300px] md:h-[500px] object-cover rounded-xl cursor-pointer"
                      alt={`Car Image ${index + 1}`}
                      onClick={() => handleImageClick(image.imageUrl)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
          </Carousel>

          {isPreviewOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleClosePreview}
            >
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img
                  src={previewImage}
                  className="max-w-full max-h-full object-cover rounded-xl"
                  alt="Preview"
                />
                <button
                  className="absolute top-2 right-2 bg-white rounded-full p-1"
                  onClick={handleClosePreview}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-full rounded-xl h-[300px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default ImageDetails;




// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// function ImageDetails({ carDetails }) {
//   return (
//     <div className="relative mx-4 md:mx-24">
//       {carDetails?.images?.length > 0 ? (
//         <Carousel>
//           <CarouselContent className="flex gap-4">
//             {carDetails.images.map((image, index) => (
//               <CarouselItem key={index} className="flex justify-center flex-grow">
//                 <div className="w-full">
//                   <img
//                     src={image.imageUrl}
//                     className="w-full h-auto max-h-[500px] object-cover rounded-xl"
//                     alt={`Car Image ${index + 1}`}
//                   />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
//           <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
//         </Carousel>
//       ) : (
//         <div className="w-full rounded-xl h-[300px] bg-slate-200 animate-pulse"></div>
//       )}
//     </div>
//   );
// }

// export default ImageDetails;

