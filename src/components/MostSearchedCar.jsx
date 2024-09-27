import React, { useEffect, useState } from "react";
import CarItems from "./CarItems";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { asc, desc, eq } from "drizzle-orm";
import Service from "./../Shared/Service";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchedCar() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetPopularCarList();
  }, []);

  const GetPopularCarList = async () => {
    const result = await db
    .select()
    .from(CarListing)
    .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
    
    const res = Service.FormatResult(result);
    setCarList(res);

    // console.log("Raw result from database:", result);
    // console.log("Formatted result:", res);
  };

  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Searched Car
      </h2>

      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <CarItems car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
