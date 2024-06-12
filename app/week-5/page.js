"use client"
import ItemList from "./item-list";
import React from "react";

export default function Page() {
    return (
      <main className="min-h-screen bg-amber-700 w-full">
        <div>
        <h1 className="bg-blue-950 text-3xl text-white">Shopping List</h1>
        <ItemList />
        </div>
      </main>
    );
  }