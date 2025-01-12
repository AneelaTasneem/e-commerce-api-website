"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image from next/image

import ProductCard from "./ProductCard";
import { Product } from '../../types/product';

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    // Load cart from local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => setShowCart((prev) => !prev);
  const goToCheckout = () => setIsCheckout(true);
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Delicious Burgers Of our Menu
          </h1>
          <p className="text-xl text-white">
            Order Now! Explore our mouthwatering Burgers
          </p>
        </div>

        {/* Product section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

{/* Cart Section */}
<div className="flex flex-col items-center max-w-6xl mx-auto mt-8 p-4 md:p-6 md:mx-auto text-center">
  <button
    onClick={toggleCart}
    className="bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200 ease-in-out transform mx-auto"
  >
    {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
  </button>

  {showCart && (
    <div className="mt-6 bg-white md:p-6 p-4 rounded-lg shadow max-w-full w-full md:max-w-4xl flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-yellow-600">
        Your Cart Items Include:
      </h2>
      {cart.length > 0 ? (
        <div className="w-full">
          <ul>
            {cart.map((product, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="inline-block transition-transform duration-300 ease-in-out"
                />
                <span className="mt-2 sm:mt-0 sm:ml-4 text-lg font-medium text-slate-600 text-center sm:text-left">
                  {product.name} - ${product.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-black">
            <span className="font-semibold text-xl">
              Total: $
              {cart.reduce((total, product) => total + product.price, 0)}
            </span>
            <div className="flex gap-4">
              <button
                onClick={goToCheckout}
                className="bg-green-600 py-2 text-xs md:text-lg px-4 rounded-lg  shadow-md hover:bg-red-600 duration-300 ease-in-out text-white transform hover:scale-110"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="bg-red-600 py-2 px-4  text-xs md:text-lg rounded-lg  shadow-md hover:bg-green-600 duration-300 ease-in-out text-white transform hover:scale-110"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-lg font-medium text-slate-600 mt-4">
          Your Cart is empty
        </p>
      )}
    </div>
  )}
</div>


        {/* Checkout Section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 ">
              <h2 className="text-4xl font-bold text-red-700 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-yellow-600">
                Please confirm your order before proceeding!
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li
                      key={index}
                      className="flex justify-between mb-4"
                    >
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-700 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert("Order Confirmed! Will deliver at your door step!")
                  }
                  className="bg-red-700 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
