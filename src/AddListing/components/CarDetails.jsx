import React from "react";
import { useLocation } from "react-router-dom";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import features from "./../../Shared/features.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";
import { FaCar } from "react-icons/fa";

// -----------------------
import { FaClipboardList } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";



function CarDetails() {
  const location = useLocation();
  const { car } = location.state;

  //   useEffect(() => {
  //     console.log("hello", car.features);
  //   }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 ">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="md:w-1/1">
                {car?.images.length > 1 ? (
                  <Carousel>
                    <CarouselContent>
                      {car.images.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/1">
                          <img
                            src={image.imageUrl}
                            width={'100%'} height={250}
                            alt={`Car ${index + 1}`}
                            className=" h-[300px] object-cover rounded-lg "
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-black text-white bold ml-6 " />
                    <CarouselNext className="bg-black text-white bold mr-2.5 " />
                  </Carousel>
                ) : (
                  <img
                    src={car?.images[0].imageUrl}
                    alt="Car"
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
              <div className="md:w-1/2 md:pl-10 mt-4 md:mt-0">
                <h1 className="text-4xl font-bold">{car?.listingTitle}</h1>
                <h5 className="text-xl text-gray-500 mb-2">{car?.tagline}</h5>
                <div className="flex flex-wrap mb-4 gap-2">
                  <Badge>{car?.year}</Badge>
                  <Badge>{car?.mileage} Miles</Badge>
                  <Badge>{car?.transmission}</Badge>
                  <Badge>{car?.fuelType}</Badge>
                </div>
                <h4 className="text-2xl font-bold text-green-600">
                  Our Price: ${car?.sellingPrice}
                </h4>
                <h5 className="text-xl text-gray-500">
                  Make an Offer: ${car?.originalPrice}
                </h5>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="text-4xl font-bold mb-5">Specifications:</h4>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex gap-2 items-center">
                <FaCar className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Category:</strong> {car?.category}
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Condition:</strong> {car?.condition}
              </li>
              <li className="flex gap-2 items-center">
              <FaIndustry className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Make:</strong> {car?.make}
              </li>
              <li className="flex gap-2 items-center">
                <FaCarSide className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Model:</strong> {car?.model}
              </li>
              <li className="flex gap-2 items-center">
                <FaRoad className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Drive Type:</strong> {car?.driveType}
              </li>
              <li className="flex gap-2 items-center">
                <FaWrench className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Engine Size:</strong> {car?.engineSize}
              </li>
              <li className="flex gap-2 items-center">
                <FaCircle className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Cylinder:</strong> {car?.cylinder}
              </li>
              <li className="flex gap-2 items-center">
                <FaPalette className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Color:</strong> {car?.color}
              </li>
              <li className="flex gap-2 items-center">
                <FaDoorClosed className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>Door:</strong> {car?.door}
              </li>
              <li className="flex gap-2 items-center">
              <FaIdCard className="text-primary bg-blue-100 rounded-full text-xl mt-1"/> 
                <strong>VIN:</strong> {car?.vin}
              </li>
            </ul>
          </CardContent>
          <Separator />
          <CardContent>
            <h4 className="text-4xl font-bold mb-2">Features:</h4>
            <ul className="list-disc ml-5">
              {Object.entries(car?.features || {}).map(
                ([feature, isAvailable]) => (
                  <li key={feature}>
                    <strong>
                      {feature
                        .replace(/([A-Z])/g, " $1") // Add space before capital letters
                        .replace(/^./, (str) => str.toUpperCase())}{" "}
                      
                    </strong>
                    : {isAvailable ? "Available" : "Not Available"}
                  </li>
                )
              )}
            </ul>
            
          </CardContent>
          <Separator />
          <CardFooter>
            <div className=""><h4 className="text-4xl font-bold mb-2">Description:</h4>
            <p>{car?.listingDescription}</p></div>
            
          </CardFooter>
        </Card>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default CarDetails;
