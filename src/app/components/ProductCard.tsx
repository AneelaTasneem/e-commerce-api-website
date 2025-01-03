
import { Product } from '../../types/product';

import React from "react";
import Image from "next/image";

interface productCardProps extends Product {
  onAddToCart: (product: Product) => void;
}
const ProductCard: React.FC<productCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
     <Image
  src={image}
  alt={name}
  width={300}
  height={224}
  className="w-full h-56 object-cover rounded-md transform transition-all duration-300 ease-in-out hover:scale-110"
/>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-slate-600 mb-4">{price}</p>

      <button onClick={() => onAddToCart({id, name, price, image})}
        className="bg-red-600 text-white px-4 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out">
          Add To Cart
        </button>
    </div>
  );
};

export default ProductCard;