import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailsHeader from '../components/DetailsHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import ImageDetails from '../components/ImageDetails';
import Description from '../components/Description';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Specification from '../components/Specification';
import OwnerDetails from '../components/OwnerDetails';
import FinancialCalculator from '../components/FinancialCalculator';
import Footer from '@/components/Footer';
import MostSearchedCar from '@/components/MostSearchedCar';


function ListingDetails() {
    const {id} = useParams();
    const [carDetails,SetcarDetails] = useState();

    useEffect(()=>{
        GetCarDetails();
    },[])

    const GetCarDetails = async()=>{
        const result =await db.select().from(CarListing).innerJoin(CarImages,eq(CarListing?.id,CarImages.carListingId))
        .where(eq(CarListing.id,id));

        const res = Service.FormatResult(result);
        SetcarDetails(res[0]);
        // console.log(res[0]);
        
    }
    

  return (
    <div>
        <Header/>
        <div className='p-10 md:px-20'>
            <DetailsHeader carDetails={carDetails}/>

            <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5'>
                {/* Left */}
                <div className='md:col-span-2 '>
                    {/* image */}
                    <ImageDetails carDetails={carDetails}/>
                    {/* description */}
                    <Description carDetails={carDetails}/>
                    {/* featurelist */}
                    <Features features={carDetails?.features}/>
                    <FinancialCalculator carDetail={carDetails}/>
                </div>

                {/* Right */}
                <div className=''>
                    {/* pricing */}
                    <Pricing carDetails={carDetails}/>
                    {/* car properties */}
                    <Specification carDetail={carDetails}/>
                    {/* owner details */}
                    <OwnerDetails carDetails={carDetails}/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ListingDetails
