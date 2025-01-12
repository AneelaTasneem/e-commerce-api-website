import React from "react";
import { FaHamburger, FaSearch, FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="px-3 py-3 rounded-xl border w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/* Burger Icon */}
                <FaHamburger className="w-8 h-8 text-red-600 hover:text-yellow-400" />

                {/* Search Icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl px-3 py-3 outline-none text-xs w-[350px] pr-10 hidden  lg:block md:block "
                    placeholder="Explore your favorite burger menu ! "
                  />
                  <FaSearch className="w-5 h-5 text-red-600 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block " />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2 ml-[600px] ">
                <FaBolt className="w-5 h-5 text-yellow-400 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it within
                  <span className="text-red-600 hover:text-yellow-600"> 15 MINUTES</span>
                </p>
              </div>

              <div className="relative items-center justify-center w-8 h-8 rounded-full ring-2 ring-red-600 hover:ring-yellow-500 ml-auto hidden lg:block md:block mr-8">
  <FaCartShopping className="text-red-600 w-6 h-6 hover:text-yellow-500 mt-1 min-w-4" />
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
