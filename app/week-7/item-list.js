import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="p-6">
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;