import React, { useEffect, useState } from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import Service from "./../../Shared/Service";
import { FaTrashAlt } from "react-icons/fa";
import CarItems from "@/components/CarItems";
import { FaEdit } from "react-icons/fa";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
function MyListing() {
    const { user } = useUser();
    const [carList, setCarList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [carIdToDelete, setCarIdToDelete] = useState(null); // State for the car ID to delete

    useEffect(() => {
        if (user) {
            GetUserCarListing();
        }
    }, [user]);

    const GetUserCarListing = async () => {
        try {
            const result = await db.select()
                .from(CarListing)
                .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
                .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(CarListing.id));

            const res = Service.FormatResult(result);
            console.log('new Formatted result:', res);
            setCarList(res);
        } catch (error) {
            setErrorMessage("Error fetching your car listings. Please try again later.");
            console.error('Error fetching user car listings:', error);
        }
    };

    const handleDelete = async () => {
        if (carIdToDelete) {
            try {
                // First delete all associated car images
                await db.delete(CarImages)
                    .where(eq(CarImages.carListingId, carIdToDelete));

                // Then delete the car listing
                await db.delete(CarListing)
                    .where(eq(CarListing.id, carIdToDelete));

                // Update the local state to remove the deleted car
                setCarList(carList.filter(car => car.id !== carIdToDelete));
                setCarIdToDelete(null); // Reset car ID to delete
            } catch (error) {
                setErrorMessage("Error deleting the car listing. Please try again later.");
                console.error('Error deleting car listing:', error);
            }
        }
    };

    return (
        <div className="mt-6">
            {errorMessage && (
                <div className="bg-red-500 text-white p-2 rounded mb-4">
                    {errorMessage}
                </div>
            )}
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-4xl">My Listing</h2>
                <Link to={"/add-listing"}>
                    <Button>+ Add Listing</Button>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
                {carList.map((item, index) => (
                    <div key={index}>
                        <CarItems car={item} className="shadow-md" />
                        <div className="p-2 shadow-lg flex rounded-lg justify-between gap-3">
                            <Link to={'/add-listing?mode=edit&id=' + item?.id} className="w-full">
                                <Button variant="outline" className="w-full text-lg"><FaEdit /></Button>
                            </Link>
                            
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button 
                                        variant="destructive" 
                                        onClick={() => setCarIdToDelete(item.id)} // Set car ID to delete
                                    >
                                        <FaTrashAlt />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete Listing</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Are you sure you want to delete this Car Post This action cannot be undone.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <div className="flex justify-end">
                                        <AlertDialogCancel onClick={() => setCarIdToDelete(null)}>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDelete} className="ml-2">Delete</AlertDialogAction>
                                    </div>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyListing;