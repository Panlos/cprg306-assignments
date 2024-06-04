"use client";
import NewItemForm from "./new-item";
import { useState } from "react";

export default function Page() {

    return (
        <main className="min-h-screen  w-full">
        <div>
        <h1 className="bg-blue-950 text-3xl text-white flex justify-center">Add Items to List</h1>
        <NewItemForm/>
        </div>
      </main>
    );
  }
