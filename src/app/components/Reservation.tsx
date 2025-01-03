import React from "react";

const Reservation = () => {
  return (
    <section className="bg-gradient-to-r from-black to-slate-900 py-10">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-extrabold mb-6 text-white">
          Make A Reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md
                 required"
            />
          </div>

          <div className="mb-4 text-white">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-md
                 required"
            />
          </div>

          <div className="mb-4 text-white">
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md
                 required"
            />
          </div>

          <div className="mb-4 text-white">
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-md
                 required"
            />
          </div>

          <div className="mb-4">
            <button className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-yellow-600 hover:text-black">
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
