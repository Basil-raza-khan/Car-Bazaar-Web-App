import Service from '@/Shared/Service';
import { CarImages, CarListing } from './../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '@/components/Search';
import CarItems from '@/components/CarItems';
import Header from '@/components/Header';
import { db } from './../../configs';
import AnimatedSection from '@/AnimatedSection';

function SearchByOption() {
    const [searchParam] = useSearchParams();
    const condition = searchParam.get('cars');
    const price = searchParam.get('price');
    const make = searchParam.get('make');
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        GetCarListing();
    }, []);

    const GetCarListing = async () => {
        const result = await db
            .select()
            .from(CarListing)
            .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(condition !== undefined && eq(CarListing.condition, condition))
            .where(make !== undefined && eq(CarListing.make, make));
        const res = Service.FormatResult(result);
        setCarList(res);
    };

    return (
        <div>
            <Header />
            <div className='p-4 md:p-11 bg-gradient-to-r from-blue-400 to-blue-600 justify-center flex'>
                <Search />
            </div>
            <div className='p-4 md:p-10 lg:px-20 '>
                <h2 className='font-bold text-2xl md:text-4xl'>Search Result</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
                    {carList?.length > 0 ? (
                        carList.map((item, index) => (
                            <div key={index}>
                                <AnimatedSection>
                                    <CarItems car={item} />
                                </AnimatedSection>
                            </div>
                        ))
                    ) : (
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div className='h-[370px] rounded-xl bg-gradient-to-r from-blue-400 to-blue-200 animate-pulse' key={index}></div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchByOption;
