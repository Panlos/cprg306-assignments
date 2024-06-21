"use client"
import { Edu_SA_Beginner, Island_Moments } from "next/font/google";
import { useState, useEffect } from "react";

const mealIdeas =()=>{
    const [meals, setMeals] = useState([]);

useEffect(() => {
    console.log('Some stuff');
})
}
async function fetchMealIdeas(ingredient){
    const response = await fetch("the fetch link here");
    const data = response.json();
    return data.message;
}