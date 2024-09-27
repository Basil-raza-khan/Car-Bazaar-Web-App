import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PhoneInput from 'react-phone-input-2'; 
import 'react-phone-input-2/lib/style.css'; 
import TextAreaField from '@/AddListing/components/TextAreaField';

function MakeanOffer({ onClose }) {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [price, setPrice] = useState('');
  const [carDetails,SetcarDetails] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User:', username, 'Phone:', phoneNumber);
    onClose(); 
  };

  const GetCarDetails = async()=>{
    const result = await db.select().from(CarListing).innerJoin(CarImages,eq(CarListing?.id,CarImages.carListingId))
    .where(eq(CarListing.id,id));

    const res = Service.FormatResult(result);
    SetcarDetails(res[0]);
    console.log(res[0]);
    
    }   

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <Card className="w-full max-w-md bg-slate-100">
        <CardHeader>
          <CardTitle>Make an Offer</CardTitle>
          <CardDescription>Enter your details below to make an offer.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium ">Username</label>
              <Input
              className="bg-white "
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
           
            <div>
              <label htmlFor="phone" className="block text-sm font-medium w-full">Phone Number</label>
              <PhoneInput
                className=""
                country={'pk'} 
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }}
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium ">Your Offer</label>
              <Input
              className="bg-white "
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="textarea" className="block text-sm font-medium">Comments</label>
              <TextAreaField
                className="bg-white"
                id="textarea"
                type="text"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="space-x-2">
            <Button type="submit">Submit Offer</Button>
            <Button variant="outline" onClick={onClose}>Cancel</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default MakeanOffer;
