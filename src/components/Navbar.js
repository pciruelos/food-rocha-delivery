import React,{useState} from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose,AiFillTag } from "react-icons/ai";
import { BsFillCartFill,BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends,FaWallet } from "react-icons/fa";
import { MdFavorite,MdHelp } from "react-icons/md";

function Navbar() {
    const [nav, setNav] = useState(false)

    const toggleShow = () => { setNav(!nav) };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left Side */}
      <div className="flex items-center">
        <div onClick={toggleShow} className="cursor-pointer">
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
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobil menu */}
      {/* overlay */}
      {
        nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''
      }
      
      {/* side drawer menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500"}>
        <AiOutlineClose
        onClick={toggleShow}
          className="absolute right-4 top-4 cursor-pointer"
          size={30}
        />
        <h2 className="text-2xl p-4">
          Rocha Vegan<span className="font-bold"> Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4" />Orders</li>
            <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4" />Favorites</li>
            <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4" />Wallet</li>
            <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4" />Help</li>
            <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" />Promotion</li>
            <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4" />Best Ones</li>
            <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
