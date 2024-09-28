import Data from '@/Shared/Data';
import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse by type</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20 cursor-pointer">
        {Data.Category.map((category, index) => (
          <Link key={index} to={`search/${category.name}`}>
            <div className="border rounded-xl p-2 items-center flex flex-col hover:shadow-2xl">
              <img src={category.icon} width={35} height={35} alt="" />
              <h2 className="mt-2 text-xs sm:text-sm md:text-base  ">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;