import React from 'react'
import { Button } from './ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';



function Header() {
  const { isSignedIn } = useUser();
  // const history = useHistory();

  // const handleButtonClick = () => {
  //   if (isSignedIn) {
  //     history.push('/profile');
  //   }
  // };

  return (

    <div className='flex justify-between items-center shadow-sm p-5'>
      <Link to="/"><img src="/logo.svg" alt="" width={50} height={100} /></Link>
      

      <ul className='hidden md:flex gap-16'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to="/">Home</Link></li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to={"/preowned"}>Preowned</Link></li>
      </ul>
      {/* <SignInButton mode='modal' forceRedirectUrl='/'>
                      <Button>Submit Listing</Button>
                    </SignInButton> */}

      {isSignedIn ? (
        <div className='flex items-center gap-5'>
          <UserButton />
          <Link to={"/profile"}>
            <Button className="text-md">Submit Listing</Button>
          </Link>
        </div>
      ) : (
        // <Button>Submit Listing</Button>
        <SignInButton mode='modal' redirectUrl='/profile'>
          <Button className="text-md">Submit Listing</Button>
        </SignInButton>
      )}

    </div>
  )
}

export default Header