import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    title: "Small Burger",
    cetagory: "fixing",
    price: "$10",
    imgurl: "/1.png",
    bgColor: "bg-red-600",
  },

  {
    id: 2,
    title: "Large Burger",
    cetagory: "delight",
    price: "$20",
    imgurl: "/3.png",
    bgColor: "bg-yellow-500",
  },

  {
    id: 3,
    title: "XL Burger",
    cetagory: "fixing",
    price: "$25",
    imgurl: "/2.png",
    bgColor: "bg-red-600",
  },
];

const ProductList = () => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col items-center mt-10 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm w-60 h-80`}
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
            width={100}
            height={100}
            className="relative w-60"
          />
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.cetagory}</span>
            <div className="flex justify-between mt-3"> {/* Added margin-top for spacing */}
              <span className="block font-semibold text-sm mr-4"> {/* Added margin-right for spacing */}
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

export default ProductList;
