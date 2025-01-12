import React from "react";

const Progressor = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-start max-w-screen-lg w-full mx-auto mt-10 space-y-6 md:space-y-0">
        {/* Step 1 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 bg-red-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-white font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-yellow-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-red-600">
              Step 1: Chose your dish
            </h6>
            <p className="text-xs text-white">
              Explore our delicious menu and select your favorite meal.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 bg-red-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-white font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-yellow-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-red-600">
              Step 2: Customise your order
            </h6>
            <p className="text-xs text-white">
              Tailor your meal to your taste.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 bg-red-600 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-white font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-yellow-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-red-600">
              Step 3: Place your order
            </h6>
            <p className="text-xs text-white">
              Ready to eat? Proceed to checkout to place your order!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressor;
