"use client"
import React, {useState} from "react";
import NewItemForm from "./new-item"; 
import ItemList from "./item-list";
import itemsData from "./items"


export default function Page() {
    const [items, setItems] = useState([itemsData]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
      };
      
    return (
      <main className="min-h-screen bg-amber-300 w-full">
         <div>
         <h1 className="bg-blue-950 text-3xl text-white">Shopping List</h1>
         <NewItemForm onAddItem={handleAddItem}/>
        <ItemList items={items}/>
        </div>
       
      </main>
    );
  }