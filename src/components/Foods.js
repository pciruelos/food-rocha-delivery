import React, { useState } from "react";
import { data } from "../data/data";

const Foods = () => {
  const [foods, setFoods] = useState(data);

  //filter type burgers category

  const filterType = (category) => { 
    setFoods(
        data.filter(i => {
            return i.category === category
        })
    )
   };
   //filter price

   const filterPRice = (price) => { 
    setFoods(
        data.filter(i => {
            return i.price >= 10 && i.price <= 15;
        })
    )
    };

  return (

    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-green-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={ () => setFoods(data)} className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              all
            </button>
            <button onClick={ () => filterType('Burger')} className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              Burger
            </button>
            <button onClick={ () => filterType('Sandwich')} className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              Sandwich
            </button>
            <button onClick={ () => filterType('Salad')} className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              Salads
            </button>
            <button onClick={ () => filterType('Pizza')} className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              Pizza
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=> filterPRice('price')} className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              $
            </button>
            <button className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              $$
            </button>
            <button className="m-1 border-green-700 text-green-600 hover:bg-green-600 hover:text-white">
              $$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {foods.map((f, i) => (
          <div key={i} className='border shadow-lg hover:scale-110 duration-200 rounded-lg'>
            <img src={f.image} alt={f.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{f.name}</p>
                <p><span className="bg-green-600 text-white p-1 rounded-full">${f.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
