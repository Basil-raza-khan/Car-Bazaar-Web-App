import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { Button } from '@/components/ui/button'
import { CarImages, CarListing } from './../../../configs/schema'
import { db } from './../../../configs/index';
import { index } from 'drizzle-orm/mysql-core';
import { eq } from 'drizzle-orm';

function UploadImages({ triggerUploadImages ,setLoader,carInfo,mode}) {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [EditCarImageList, setEditCarImageList] = useState([]);

  useEffect(()=>{
    if(mode=='edit'){
      setEditCarImageList([]);
      carInfo?.images.forEach((image)=>{
        setEditCarImageList(prev=>[...prev,image?.imageUrl ])
        // console.log("image=",image);
        
      })
    }
  },[carInfo])  

  useEffect(() => {
    if (mode === 'edit') {
      setEditCarImageList(carInfo?.images?.map((image) => image.imageUrl) || []);
    }
  }, [carInfo]);
  
  useEffect(()=>{
    if(triggerUploadImages){
      UploadImagesToServer(); 
    }
  },[triggerUploadImages])   


  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove=(image,index)=> {
    const result = selectedFileList.filter((item)=>item!=image);
    setSelectedFileList(result);
  }

  const onImageRemoveFromDB=async(image,index)=>{
    // console.log(carInfo?.images[index]);
    const result = await db.delete(CarImages).where(eq(CarImages.id,carInfo?.images[index]?.id)).returning({id:CarImages.id});
    const imageList = EditCarImageList.filter(item=>item!=image);
    setEditCarImageList(imageList);
    console.log("pass");
    
    
  }

  const UploadImagesToServer = async() => {
    setLoader(true)
    await selectedFileList.forEach((file) => {
      const filename = Date.now() + 'jpeg';
      const storageRef = ref(storage, 'car-bazaar/' + filename);
      const metaData = {
        contentType: 'image/jpeg',
      };
      uploadBytes(storageRef, file, metaData).then((snapshot) => {
        console.log('Uploaded File');
        return getDownloadURL(storageRef);
      }).then(async (downloadUrl) => {
        console.log(downloadUrl);
        await db.insert(CarImages).values({
          imageUrl: downloadUrl,
          carListingId: triggerUploadImages, // Ensure this is an integer ID
        });
      }).catch((error) => {
        console.error("Error uploading image: ", error);
      });
      setLoader(false)
    });
  };
  return (
    <div>
      <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>

      {mode=='edit'&&
      EditCarImageList.map((image, index) => (
        <div key={index}>
          <IoCloseCircle
           className='absolute m-2 text-lg bg-black text-white rounded-xl hover:text-red-600 transition-all'
           onClick={()=>onImageRemoveFromDB(image,index)}
           />
          <img src={image}
          className='w-full h-[130px] object-cover rounded-xl' />
        </div>
      ))   
      }

      {selectedFileList.map((image, index) => (
          <div key={index}>
            <IoCloseCircle
             className='absolute m-2 text-lg bg-black text-white rounded-xl hover:text-red-600 transition-all'
             onClick={()=>onImageRemove(image,index)}
             />
            <img src={URL.createObjectURL(image)}
            className='w-full h-[130px] object-cover rounded-xl' />
          </div>
        ))}
        <label htmlFor='upload-images'>
          <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 hover:shadow-lg cursor-pointer'>
            <h2 className='text-lg text-center text-primary'>+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id='upload-images'
          onChange={onFileSelected}
          className='opacity-0'
        />
      </div>
    </div>
  );
}

export default UploadImages;