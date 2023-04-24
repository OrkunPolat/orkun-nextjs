import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/data";

const orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4 ">
        <h2>Siparişler</h2>
        <h2>Tekrardan Hoş geldin, Orkun</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Sipariş</span>
            <span className="sm:text-left text-right">Durumu</span>
            <span className="hidden md:grid">Son sipariş</span>
            <span className="hidden sm:grid">Ödeme Şekli</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer "
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      {order.total.toLocaleString()}₺
                    </p>
                    <p className="text-gray-800 text-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                    <span className={order.status == 'Yolda'
                     ? 'bg-green-200 p-2 rounded-lg ' 
                     : order.status == 'Şubede' 
                     ? 'bg-blue-200 p-2 rounded-lg'
                     : 'bg-yellow-200 p-2 rounded-lg'
                     }
                     
                     >{order.status}
                     </span>

                  </p>
                  <p className="hidden md:flex">{order.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
