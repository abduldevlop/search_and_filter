import React from "react";

const Header = () => {
  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl text-white font-bold">Search and Filter</h1>
      <div className="mt-5 flex items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-1 outline-none"
        />
        <button className="bg-blue-600 text-white px-2 py-1 cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
