import React from 'react';
import Image from 'next/image';

const products = [
  {
    id: 4,
    title: "Small Burger",
    cetagory: "fixing",
    price: "$30",
    imgurl: "/4.png",
    bgColor: "bg-yellow-500",
  },
  {
    id: 5,
    title: "Large Burger",
    cetagory: "delight",
    price: "$35.00",
    imgurl: "/5.png",
    bgColor: "bg-red-600",
  },
  {
    id: 6,
    title: "XL Burger",
    cetagory: "fixing",
    price: "$40.00",
    imgurl: "/6.png",
    bgColor: "bg-yellow-500",
  },
];

const Burgers = () => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col items-center m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm w-60 h-80`}
        >
          {/* Background Design */}
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 flex items-center justify-center group-hover:scale-110 transition-transform"></div>
          <Image
            src={product.imgurl}
            alt={product.title}
            width={240} // Adjust as needed
            height={240} // Adjust as needed
            className="relative w-60"
          />
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-2">{product.cetagory}</span>
            <div className="flex justify-between mt-3"> 
              <span className="block font-bold text-sm mr-4"> {/* Added margin-right here */}
                {product.title}
              </span>
              <span className="ml-1 block bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Burgers;
