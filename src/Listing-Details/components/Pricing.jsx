import React, { useState } from 'react';
import { MdLocalOffer } from "react-icons/md";
import { Button } from '@/components/ui/button';
import MakeanOffer from './MakeanOffer'; // Import your new component

function Pricing({ carDetails }) {
  const [showOfferCard, setShowOfferCard] = useState(false);

  const handleMakeOfferClick = () => {
    setShowOfferCard(true);
  };

  return (
    <div className='p-10 rounde-xl border shadow-md'>
      <h2>Our Price</h2>
      <h2 className='font-bold text-4xl'>${carDetails?.sellingPrice}</h2>
      <Button className="w-full mt-7" size="lg" onClick={handleMakeOfferClick}>
        <MdLocalOffer className='text-lg mr-2' /> Make an Offer
      </Button>
      {showOfferCard && <MakeanOffer onClose={() => setShowOfferCard(false)} />} {/* Show card conditionally */}
    </div>
  );
}

export default Pricing;
