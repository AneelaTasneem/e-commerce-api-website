import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Delicious Burgers
        </h2>
        <p className="text-white mb-4">
          Experience the juiciest burger in town, made with fresh ingredients
          and grilled to perfection.
        </p>
        <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-200 hover:text-black">
          Order Now{" "}
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          Coming Soon: Our New Burger Sensations! 🍔
        </h3>

        <ul className="text-white">
          <li>
            <strong>Cheese Volcano Burger 🌋</strong> A molten explosion of
            gooey cheddar and creamy Swiss—brace yourself for a cheesy eruption!
          </li>
          <br />
          <li>
            <strong>Smoky Ranch Burger 🌿🔥</strong> Juicy beef meets smoked
            barbecue and ranch in a flavor-packed adventure.
          </li>
          <br />
          <li>
            <strong>Triple Crunch Burger 🥓🧅</strong> Crispy onion rings,
            pickles, and a tender patty stacked for the ultimate crunch!
          </li>
          <br />
          <li>
            <strong>Fiery Fiesta Burger 🌶️🎉</strong> Spiced with jalapeños,
            pepper jack, and zesty chipotle sauce—bring the heat!
          </li>
          <br />
          <li>
            <strong>Garden Bliss Burger 🥑🍃</strong> A refreshing veggie twist
            with avocado and green goddess sauce.
          </li>
          <br />
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/card.avif"
          alt="Delicious Burger"
          width={740}
          height={500}
          className="h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};

export default Card;
