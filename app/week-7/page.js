"use client"
import React, { useState, useEffect } from "react";
import NewItemForm from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const [meals, setMeals] = useState([]);

useEffect(() => {
    console.log('Some stuff');
})

  return (
    <main className="min-h-screen bg-amber-300 w-full">
      <div>
        <h1 className="bg-blue-950 text-3xl text-white">Shopping List</h1>
        <NewItemForm onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}


