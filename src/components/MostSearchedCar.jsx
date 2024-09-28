import React, { useEffect, useState } from "react";
import CarItems from "./CarItems";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { eq } from "drizzle-orm";
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
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId));

    const res = Service.FormatResult(result);
    setCarList(res);
  };

  return (
    <div className="mx-4 md:mx-24 relative">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Searched Car
      </h2>

      <Carousel>
        <CarouselContent className="flex gap-4">
          {carList.map((car, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center flex-grow md:basis-1/4"
            >
              <div className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[400px]">
                <CarItems car={car} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
