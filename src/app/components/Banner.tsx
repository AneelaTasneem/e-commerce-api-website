import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-black font-sans px-6 py-12 mb-7">
      <div className="mx-4 absolute inset-0 opacity-20 ">
        <Image
          src="/burgerpoint.jpg"
          alt="Delicious Burger Banner"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the area without distortion
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-3xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Avail Our Exclusive Offers Now!
        </p>

        <button
          type="button"
          className="bg-red-700 text-white hover:text-black text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-150"
        >
          Exciting Deals Are Near To Launch
        </button>
      </div>
    </div>
  );
};

export default Banner;
