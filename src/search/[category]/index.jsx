import Header from '@/components/Header';
import Search from '@/components/Search';
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from '@/Shared/Service';
import CarItems from '@/components/CarItems';
import AnimatedSection from '@/AnimatedSection';
import Footer from '@/components/Footer';

function SearchByCategory() {
    const { category } = useParams();
    const [carList, setCarList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetCarList();
    }, [category]);

    const GetCarList = async () => {
        setLoading(true);
        const result = await db.select().from(CarListing)
            .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(eq(CarListing.category, category));
        const res = Service.FormatResult(result);
        setCarList(res);
        setLoading(false);
        // console.log(res)
    };

    return (
        <div>
            <Header />
            <div className='p-11 bg-gradient-to-r from-blue-400 to-blue-600 justify-center flex'>
                <Search />
            </div>
            <div className='p-10 md:px-20 '>
                <h2 className='font-bold text-4xl '>{category}</h2>
                {loading ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5 '>
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className='h-[300px] rounded-xl bg-gradient-to-r from-blue-400 to-blue-200 animate-pulse'></div>
                        ))}
                    </div>
                ) : carList.length === 0 ? (
                    <div className='mt-7 text-center text-xl text-gray-600'>
                        No car available for this category
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
                        {carList.map((item, index) => (
                            <div key={index} className='w-full'>
                                <AnimatedSection><CarItems car={item} /></AnimatedSection>
                                
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default SearchByCategory;
