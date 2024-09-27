import React from 'react';
import Search from './Search';

function Hero() {
  return (
    <div className=' relative flex flex-col items-center py-16 gap-6 h-[600px] w-full bg-[#efa44f]' >
        <h2 className='text-lg'>Find your dream car for sale and for rent near you</h2>
        <h2 className='text-[60px] font-bold'>Find your dream car</h2>
        <Search />
        <img src="/black-tesla.png" alt="My car" className='mt-4' width={1095}/>

        {/* <img src="/tesla-car.png" alt="My car" className='' width={1100} /> */}
        {/* <img src="/bmw.png" alt="My car" className='absolute mt-[180px]' width={1000} height={50} /> */}
    </div>
  );
}

export default Hero;
