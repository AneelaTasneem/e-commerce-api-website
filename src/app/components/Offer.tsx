"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffer: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Exclusive 3-Day Offer:",
      description: "Grab Your Favorite Deals at 50% Off!",
    },
    {
      title: "A Deal You Can't Miss!",
      description: "Order 2 Burgers and Get a Discounted Coupon",
    },
    {
      title: "Cheers to Great Deals",
      description: "Enjoy a Complimentary Drink with Your Order",
    },

    {
      title: "Mid Night Deals",
      description: "Enjoy a Complimentary coupen of 5% off",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offers</h2>
        <div className="grid grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-lg rounded-lg text-center p-6 hover:bg-gray-300 transition duration-300 transform hover:scale-105 "
            >
              <h3 className="text-2xl font-semibold text-red-700 ">
                {offer.title}
              </h3>
              <p className="text-gray-900 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
