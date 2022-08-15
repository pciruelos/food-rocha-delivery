import React from "react";
import { AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl md:text-4xl px-2">
          Rocha Vegan<span className="font-bold"> Eats</span>
        </h1>
        <div className="hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pick up</p>
        </div>
      </div>
      {/* Search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] md:w-[400px]">
        <AiOutlineSearch size={20}/>
        <input className="bg-transparent p-2 focus:outline-none" type="text" placeholder="Search foods"/>
      </div>
      {/* Cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className='mr-2'/> Cart
      </button>
    </div>
  );
}

export default Navbar;
