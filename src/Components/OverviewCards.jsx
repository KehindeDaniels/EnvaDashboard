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
      percentage: 3.2,
      remark: "New Items",
      icon: items,
    },
    {
      name: "Low Stock",
      count: 110,
      percentage: 3.2,
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
      count: 1256,
      percentage: 3.2,
      remark: "New Items",
      icon: cart,
    },
  ];

  const cardElements = cards.map((c, index) => (
    <div key={index} className="flex-1 border border-b-gray-300 p-4">
      <div className="card-name flex items-center gap-2 mb-2">
        <img src={c.icon} alt={c.name} className="w-8 h-8" />
        <p className="font-semibold">{c.name}</p>
      </div>
      <div className="card-count flex items-center gap-2 text-xl font-bold mb-2">
        {c.count}
        <span className="text-sm text-green-500">
          {c.percentage}% <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>
      <p className="text-xs">{c.remark}</p>
    </div>
  ));

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardElements}
    </div>
  );
};

export default OverviewCards;
