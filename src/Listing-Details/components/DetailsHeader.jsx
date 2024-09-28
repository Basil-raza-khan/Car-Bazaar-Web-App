import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";

function DetailsHeader({ carDetails }) {
  return (
    <div>
      {carDetails?.listingTitle ? (
        <div>
          <h2 className='font-bold text-2xl md:text-3xl'>{carDetails?.listingTitle}</h2>
          <p className='text-sm'>{carDetails?.tagline}</p>

          <div className='flex flex-wrap gap-2 mt-3'>
            <div className='flex gap-2 items-center bg-blue-50 rounded-full text-primary p-2 px-3 '>
              <FaRegCalendarAlt className='h-5 w-5 md:h-7 md:w-7 text-primary' />
              <h2 className='text-primary text-xs md:text-sm'>{carDetails?.year}</h2>
            </div>
            <div className='flex gap-2 items-center bg-blue-50 rounded-full text-primary p-2 px-3 '>
              <IoSpeedometerOutline className='h-5 w-5 md:h-7 md:w-7 text-primary' />
              <h2 className='text-primary text-xs md:text-sm'>{carDetails?.mileage}</h2>
            </div>
            <div className='flex gap-2 items-center bg-blue-50 rounded-full text-primary p-2 px-3 '>
              <GiGearStickPattern className='h-5 w-5 md:h-7 md:w-7 text-primary' />
              <h2 className='text-primary text-xs md:text-sm'>{carDetails?.transmission}</h2>
            </div>
            <div className='flex gap-2 items-center bg-blue-50 rounded-full text-primary p-2 px-3 '>
              <BsFuelPumpFill className='h-5 w-5 md:h-7 md:w-7 text-primary' />
              <h2 className='text-primary text-xs md:text-sm'>{carDetails?.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full rounded-xl h-[100px] bg-slate-200 animate-pulse'></div>
      )}
    </div>
  );
}

export default DetailsHeader;
