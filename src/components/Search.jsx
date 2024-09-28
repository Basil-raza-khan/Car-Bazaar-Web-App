import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Data from '@/Shared/Data';
import { useState } from 'react';

function Search() {
    const [cars, setCars] = useState();
    const [make, setMake] = useState();
    const [price, setPrice] = useState();

    return (
        <div className='p-4 md:p-6 bg-gradient-to-r from-white to-gray-100 md:rounded-full rounded-lg shadow-lg flex flex-col md:flex-row gap-4 
        items-center w-[80%] md:w-[60%] space-y-0 md:space-y-0 md:space-x-8 transition-all duration-500 ease-in-out'>
            
            <Select onValueChange={(value) => setCars(value)}>
                <SelectTrigger className='outline-none w-full text-lg bg-white shadow-md hover:bg-gray-50 transition-all 
                duration-300 rounded-full px-3 py-2'>
                    <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Used">Used</SelectItem>
                    <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="hidden md:block" />

            <Select onValueChange={(value) => setMake(value)}>
                <SelectTrigger className='outline-none w-full text-lg bg-white shadow-md hover:bg-gray-50 transition-all 
                duration-300 rounded-full px-3 py-2'>
                    <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                    {Data.CarMakes.map((maker, index) => (
                        <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="hidden md:block" />

            <Select onValueChange={(value) => setPrice(value)}>
                <SelectTrigger className='outline-none w-full text-lg bg-white shadow-md hover:bg-gray-50 transition-all 
                duration-300 rounded-full px-3 py-2'>
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                    {Data.Pricing.map((price, index) => (
                        <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Link to={'/search?cars=' + cars + "&make=" + make + "&price=" + price}>
                <CiSearch className='text-[50px] rounded-full bg-primary p-3 text-white hover:scale-110 hover:rotate-12 transition-all 
                duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-2xl' />
            </Link>
        </div>
    )
}

export default Search;
