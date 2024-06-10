import React from "react";
import items from "../assets/items.png";
import stock from "../assets/stock.png";
import expiry from "../assets/expiry.png";
import cart from "../assets/cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const OverviewCards = () => {
  const cards = [
    {
      name: "Total Items",
      count: 1256,
      percentage: "Total Items",
      remark: "12 New Items",
      icon: items,
    },
    {
      name: "Low Stock",
      count: 110,
      percentage: "",
      remark: "97 out of stock 23 low in stock",
      icon: stock,
    },
    {
      name: "Expired Items",
      count: 16,
      percentage: 3.2,
      remark: "12 expiring soon",
      icon: expiry,
    },
    {
      name: "Reordered Items",
      count: 123,
      percentage: 3.2,
      remark: "24 New Items Added",
      icon: cart,
    },
  ];

  const cardElements = cards.map((c, index) => (
    <div
      key={index}
      className={`flex flex-col items-start p-4 rounded-md justify-center  ${
        index === 0
          ? "bg-blue-500 text-white"
          : "bg-transparent text-gray-700 border border-gray-50`"
      }`}
    >
      <div className="card-name flex flex-col items-start justify-start gap-2 mb-2">
        <img
          src={c.icon}
          alt={c.name}
          className={`w-5 h-w-5 ${
            index === 0 && "bg-white/30 rounded-full w-8 p-1"
          }`}
        />
        <p className="text-xs">{c.name}</p>
      </div>
      <div className="card-count flex items-center gap-2 text-2xl font-bold mb-2">
        {c.count}
        <span className="text-sm text-green-500">
          {/* {c.percentage}% <FontAwesomeIcon icon={faArrowDown} /> */}
        </span>
      </div>
      <p className="text-xs">{c.remark}</p>
    </div>
  ));

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
      {cardElements}
    </div>
  );
};

export default OverviewCards;
