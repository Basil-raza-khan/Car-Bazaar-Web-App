import React from 'react';
import { Button } from './ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
          <button className="md:hidden text-primary p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-4 mt-4 w-48">
          <DropdownMenuItem asChild>
            <Link to="/" className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</DropdownMenuItem>
          <DropdownMenuItem className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/preowned" className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            {isSignedIn ? (
              <>
                <UserButton className="md:text-base text-sm" />
                <Link to="/profile">
                  <Button className="text-sm md:text-md w-full mt-2">Submit Listing</Button>
                </Link>
              </>
            ) : (
              <SignInButton mode="modal" redirectUrl="/profile">
                <Button className="text-sm md:text-md w-full mt-2">Submit Listing</Button>
              </SignInButton>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="hidden md:flex items-center gap-2 md:gap-5 ml-auto">
        {isSignedIn ? (
          <>
            <UserButton className="md:text-base text-sm" />
            <Link to="/profile">
              <Button className="text-sm md:text-md">Submit Listing</Button>
            </Link>
          </>
        ) : (
          <SignInButton mode="modal" redirectUrl="/profile">
            <Button className="text-sm md:text-md">Submit Listing</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Header;























// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const { isSignedIn } = useUser();
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State for navbar visibility

//   const toggleNavbar = () => {
//     setIsNavbarOpen((prev) => !prev); // Toggle navbar visibility
//   };

//   return (
//     <div className='flex md:flex-row justify-between items-center shadow-sm p-5'>
//       {/* Logo Section */}
//       <Link to="/" className="flex-shrink-0">
//         <img src="/logo.svg" alt="Logo" width={50} height={100} className="cursor-pointer" />
//       </Link>

//       {/* Mobile Navbar Toggle Button */}
//       <button onClick={toggleNavbar} className='md:hidden text-primary p-2 ml-auto'>
//         {isNavbarOpen ? (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         )}
//       </button>

//       {/* Mobile Navbar Links */}
//       <div>
//         {isNavbarOpen && (
//           <div className='flex flex-col md:hidden gap-4 mt-4'>
//             <ul className='flex flex-col gap-4 '>
//               <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to="/">Home</Link></li>
//               <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
//               <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
//               <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to={"/preowned"}>Preowned</Link></li>
//             </ul>
//             {/* Mobile User Actions */}
//             <div className='flex flex-col gap-2 '>
//               {isSignedIn ? (
//                 <>
//                   <UserButton className="md:text-base text-sm" />
//                   <Link to={"/profile"}>
//                     <Button className="text-sm md:text-md">Submit Listing</Button>
//                   </Link>
//                 </>
//               ) : (
//                 <SignInButton mode='modal' redirectUrl='/profile'>
//                   <Button className="text-sm md:text-md">Submit Listing</Button>
//                 </SignInButton>
//               )}
//             </div>
//           </div>
//         )}
//       </div>


//       {/* Desktop Navbar Links */}
//       <ul className='hidden md:flex md:gap-16 flex-grow justify-center items-center'>
//         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to="/">Home</Link></li>
//         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
//         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
//         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to={"/preowned"}>Preowned</Link></li>
//       </ul>

//       {/* Desktop User Actions */}
//       <div className='hidden md:flex items-center gap-5 ml-auto'>
//         {isSignedIn ? (
//           <>
//             <UserButton className="md:text-base text-sm" />
//             <Link to={"/profile"}>
//               <Button className="text-sm md:text-md">Submit Listing</Button>
//             </Link>
//           </>
//         ) : (
//           <SignInButton mode='modal' redirectUrl='/profile'>
//             <Button className="text-sm md:text-md">Submit Listing</Button>
//           </SignInButton>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;
