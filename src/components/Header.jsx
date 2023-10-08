import React from "react";

const Header = ({search, searchValue}) => {
  return (
    <div className="bg-gray-900 flex py-4 gap-10 shadow-lg">
      <div className="gap-2 flex  bg-black p-1 rounded-lg cursor-pointer ml-5">
        <h1 className="text-xl font-medium text-white px-1">Movies</h1>
        <h1 className="text-xl font-bold bg-green-500 text-black rounded-md px-2 ">
          info
        </h1>
      </div>

      <div className="bg-slate-700 rounded-xl flex items-center px-2 mr-5 ">
        <i className="fas fa-search text-slate-400"></i>
        <input
        value={searchValue}
          onChange={search}
          type="text"
          className="w-full border-0 outline-0 bg-slate-700 rounded-xl  text-white px-2"
          placeholder="Search Movies"
        />
      </div>
    </div>
  );
};

export default Header;
