import React from 'react';
import { Button } from './ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <Link to="/" className="flex-shrink-0">
        <img src="/logo.svg" alt="Logo" width={50} height={100} className="cursor-pointer" />
      </Link>

      <ul className="hidden md:flex gap-20 flex-grow justify-center items-center text-lg">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          <Link to="/preowned">Preowned</Link>
        </li>
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="md:hidden text-primary p-2 ml-9">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2 mt-4 w-48">
          <DropdownMenuItem asChild>
            <Link to="/" className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</DropdownMenuItem>
          <DropdownMenuItem className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/preowned" className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</Link>
          </DropdownMenuItem>

          {/* User Button and Submit Listing Button */}


        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex md:flex justify-center items-center gap-2 md:gap-3">
        {isSignedIn ? (
          <>
            <UserButton className="md:text-base text-lg " />
            <Link to="/profile">
              <Button className="text-sm md:text-md">Submit Listing</Button>
            </Link>
          </>
        ) : (
          <SignInButton mode="modal" redirectUrl="/profile">
            <Button className="text-lg md:text-md">Submit Listing</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Header;
