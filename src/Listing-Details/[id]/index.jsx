import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import ImageDetails from "../components/ImageDetails";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnerDetails from "../components/OwnerDetails";
import FinancialCalculator from "../components/FinancialCalculator";
import Footer from "@/components/Footer";
import MostSearchedCar from "@/components/MostSearchedCar";
import AnimatedSection from "@/AnimatedSection";

function ListingDetails() {
  const { id } = useParams();
  const [carDetails, SetcarDetails] = useState();

  useEffect(() => {
    GetCarDetails();
  }, []);

  const GetCarDetails = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing?.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const res = Service.FormatResult(result);
    SetcarDetails(res[0]);
    // console.log(res[0]);
  };

  return (
    <div>
      <Header />
      <div className="px-4 py-6 md:px-24 md:py-10">
        <DetailsHeader carDetails={carDetails} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 md:mt-10">
          {/* Left */}
          <div className="md:col-span-2 space-y-6">
            {/* image */}
            <AnimatedSection>
              <ImageDetails carDetails={carDetails} />
            </AnimatedSection>

            {/* description */}
            <AnimatedSection>
              <Description carDetails={carDetails} />
            </AnimatedSection>

            {/* featurelist */}
            <AnimatedSection>
              <Features features={carDetails?.features} />
            </AnimatedSection>
            {/*  */}
            <AnimatedSection>
              <FinancialCalculator carDetail={carDetails} />
            </AnimatedSection>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* pricing */}
            <AnimatedSection>
              <Pricing carDetails={carDetails} />
            </AnimatedSection>

            {/* car properties */}

            <AnimatedSection>
              <Specification carDetail={carDetails} />
            </AnimatedSection>
            {/* owner details */}
            <AnimatedSection>
              <OwnerDetails carDetails={carDetails} />
            </AnimatedSection>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListingDetails;
