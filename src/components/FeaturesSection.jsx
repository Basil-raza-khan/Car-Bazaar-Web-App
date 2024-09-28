import React from "react";
import { Button } from "./ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Your Ultimate Resource for Researching New or Used Cars
        </h2>
        <p className="text-lg mb-8">Discover Top Car Listings in Pakistan</p>

        <div className="flex justify-center items-center">
          {isSignedIn ? (
            <div className="flex items-center gap-5">
              <Link to={"/profile"}>
                <Button className="bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-gray-200 transition">
                  Explore Listing
                </Button>
              </Link>
            </div>
          ) : (
            // <Button>Submit Listing</Button>
            <SignInButton mode="modal" redirectUrl="/profile">
              <Button className="bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-gray-200 transition">
                Explore Listing
              </Button>
            </SignInButton>
          )}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-blue-700 rounded-lg shadow-xl p-6 flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const features = [
  {
    icon: "👨‍🔧",
    title: "Best Team",
    description:
      "Our expert team is dedicated to finding the perfect used car for you. Trust us to guide you through every step.",
  },
  {
    icon: "📄",
    title: "Simplified Paperwork",
    description:
      "Receive clear and complete paperwork with every used car purchase, ensuring a smooth process.",
  },
  {
    icon: "🏆",
    title: "Popular Choice",
    description:
      "Discover why our used car listings are the top choice for buyers across Pakistan.",
  },
  {
    icon: "🔍",
    title: "Detailed Information",
    description:
      "Access comprehensive details on our used car listings, helping you make informed decisions.",
  },
  {
    icon: "💰",
    title: "Price Guarantee",
    description:
      "Get the best prices on used cars with our unbeatable price guarantee, ensuring great value.",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description:
      "Every car goes through a rigorous inspection process to guarantee quality and reliability for our customers.",
  },
  {
    icon: "📞",
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any inquiries or issues you may have.",
  },
  {
    icon: "🔑",
    title: "Easy Financing Options",
    description:
      "We offer flexible financing solutions to help you purchase your dream car with ease, making it more affordable than ever.",
  },
];

export default FeaturesSection;
