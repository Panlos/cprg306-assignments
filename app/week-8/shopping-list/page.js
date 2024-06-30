
"use client";
import React, { useEffect, useState } from "react";
import NewItemForm from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
 const {user} = useUserAuth();

 if (!user){
  return(
    <div className="bg-teal-500 w-full min-h-screen flex flex-col justify-center items-center p-2">
      You are not allowed to see the Shopping list please sign in
      <div className="p-4">
      <a className="text-lg hover:underline mr-2 px-4 py-2 rounded  bg-teal-700" href="./">Go back</a>
      </div>
    </div>
  );
 }

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





