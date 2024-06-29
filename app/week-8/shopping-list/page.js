
"use client";
import React, { useState } from "react";
import NewItemForm from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <main className="min-h-screen bg-amber-300 w-full">
      <div className="flex flex-col items-center">
        <h1 className="bg-blue-950 text-3xl text-white p-4 w-full text-center">Shopping List</h1>
        <div className="flex flex-row w-full p-4">
          <div className="w-1/2 p-4">
            <NewItemForm onAddItem={handleAddItem} />
          </div>
          <div>
          <ItemList items={items} onItemSelect={handleItemSelect}/>
          </div>
          <div className="w-1/2 p-4">
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
          </div>
        </div>
      </div>
    </main>
  );
}





