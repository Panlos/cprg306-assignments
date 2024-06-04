"use client";
import newItemForm from "./new-item";
import { useState } from "react";

export default function Page() {

    return (
        <main className="min-h-screen bg-amber-700 w-full">
        <div>
        <h1 className="bg-blue-950 text-3xl text-white">Add stuff fun times WOoOoooo</h1>
        <newItemForm />
        </div>
      </main>
    );
  }
