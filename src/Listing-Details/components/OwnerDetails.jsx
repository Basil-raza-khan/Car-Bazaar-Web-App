import { Button } from '@/components/ui/button';
import Service from '@/Shared/Service';
import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function OwnerDetails({ carDetails }) {
  const { user } = useUser();
  const navigation = useNavigate();

  const onUserClick = async () => {
    const userId = user.primaryEmailAddress.emailAddress.split('@')[0];
    const ownerUserId = carDetails?.createdBy.split('@')[0];
    
    // Create Current User ID
    try {
      await Service.CreateSendBirdUser(userId, user?.fullName, user?.imageUrl)
        .then(resp => {
          console.log('User successfully created in SendBird:', resp);
        })

        .catch(error => {
          if (error?.response?.data?.message?.includes('violates unique constraint')) {
            console.log('User already exists in SendBird');
          } else {
            console.error('Error creating user:', error);
          }
        });
    } catch (error) {
      console.error('Unexpected error occurred:', error);
    }

    // Owner User ID
    try {
      await Service.CreateSendBirdUser(ownerUserId,carDetails?.userName,carDetails?.userImageUrl)
        .then(resp => {
          console.log(resp);
        })
    } catch (error) {
      
    }

    // Create Channel
    try {
      await Service.CreateSendBirdChannel([userId,ownerUserId],carDetails?.listingTitle)
      .then(resp=>{
        console.log(resp);
        console.log('Channel is created');
        navigation('/profile');
        
      })
    } catch (error) {
      
    }    
  };

  return (
    <div className='p-10 border rounded-xl shadow-md'>
      <h2 className='font-medium text-3xl my-3'>Owner Details</h2>
      <img src={carDetails?.userImageUrl} className='w-[60px] h-[60px] rounded-full' alt='' />
      <h2 className='mt-2 font-bold text-xl'>{carDetails?.userName}</h2>
      <h2 className='mt-2 text-gray-500'>{carDetails?.createdBy}</h2>

      <Button className='w-full mt-6' onClick={onUserClick}>
        Message Owner
      </Button>
    </div>
  );
}

export default OwnerDetails;
