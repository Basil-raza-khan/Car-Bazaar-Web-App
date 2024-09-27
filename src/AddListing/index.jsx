import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import carDetails from '../Shared/carDetails.json'
import InputField from './components/InputField'
import DropDownField from './components/DropDownField'
import TextAreaField from './components/TextAreaField'
import { Separator } from "@/components/ui/separator"
import features from '../Shared/features.json'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { CarImages, CarListing } from './../../configs/schema'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'

function AddListing() {
    const [formData, setFormData] = useState([]);
    const [featuresData, setFeaturesData] = useState([]);
    const [triggerUploadImages, setTriggerUploadImages] = useState();
    const [searchParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const { user } = useUser();
    const [carInfo, SetCarInfo] = useState();

    const mode = searchParams.get('mode')
    const recordId = searchParams.get('id')
    

    useEffect(() => {
        if (mode == 'edit') {
            GetListingDetails();
        }
        
    }, [])

    const GetListingDetails = async () => {
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.id, recordId));
        const res = Service.FormatResult(result)
        // console.log(res);
        SetCarInfo(res[0]);
        setFormData(res[0]);
        // console.log("Respone",res)
        // console.log("CarInfo",carInfo)
        setFeaturesData(res[0].features);
    }


    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleFeaturesData = (name, value) => {
        setFeaturesData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const onSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();
        console.log(formData);
        toast('Please wait...')

        if(mode=='edit'){
            const result = await db.update(CarListing).set({
                ...formData,
                features:featuresData,
                createdBy:user?.primaryEmailAddress?.emailAddress,
                userName:user?.fullName,
                userImageUrl:user?.imageUrl,
                postedOn:moment().format('DD/MM/yyyy')
            }).where(eq(CarListing.id,recordId)).returning({id:CarListing.id});
            console.log(result);
            navigate("/profile")
            setLoader(false);
        }
        else{
            try {
            const result = await db.insert(CarListing).values({
                ...formData,
                features: featuresData,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                userName:user?.fullName,
                userImageUrl:user?.imageUrl,
                postedOn:moment().format('DD/MM/yyyy')
            },
        ).returning({ id: CarListing.id })
            if (result) {
                console.log("Data Saved");
                setTriggerUploadImages(result[0]?.id)
                setLoader(false)
            }
            } catch (error) {
            console.log(error);

            }
    }

    }
    return (
        <div>
            <Header />
            <div className='px-10 md:px-20 my-10'>
                <h2 className='font-bold text-4xl'>New Listing</h2>
                <form className='p-10 border rounded-xl mt-10 bg-slate-100'>
                    <div>
                        <h2 className='font-bold text-xl mb-6'>Car Detail</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {carDetails.carDetails.map((item, index) => (
                                <div key={index}>
                                    <label className='text-lg flex gap-2 items-center mb-2'><IconField icon={item?.icon} /> {item?.label} {item?.required && <span className='text-red-600'>*</span>}</label>
                                    {item.fieldType == 'text' || item.fieldType == 'number' ? <InputField
                                        item={item}
                                        handleInputChange={handleInputChange} carInfo={carInfo}/>
                                        : item?.fieldType == 'dropdown' ? <DropDownField item={item}
                                            handleInputChange={handleInputChange} carInfo={carInfo} />
                                            : item?.fieldType == 'textarea' ? <TextAreaField item={item}
                                                handleInputChange={handleInputChange} carInfo={carInfo} />
                                                : null}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ----- */}
                    <Separator className='my-6' />
                    <div>
                        <h2 className='font-medium text-xl my-6'>Features</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                            {features.features.map((item, index) => (
                                <div key={index} className='flex gap-2 items-center'>
                                    <Checkbox onCheckedChange={(value) => handleFeaturesData(item.name, value)}
                                    checked={featuresData?.[item.name]} />
                                        
                                    <h2>{item.label}</h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- */}
                    <Separator className="my-6" />
                    <UploadImages triggerUploadImages={triggerUploadImages}
                        carInfo={carInfo}
                        mode={mode}
                        setLoader={(v) => { setLoader(v); navigate('/profile') }} />
                    <div className='mt-10 flex justify-end'>
                        <Button type="submit"
                            disabled={loader}
                            onClick={(e) => onSubmit(e)}>
                            {!loader ? 'Submit' : <BiLoaderAlt className={'animate-spin text-lg'} />}
                        </Button>
                    </div>

                </form>
               
            </div>
        </div>
    )
}

export default AddListing