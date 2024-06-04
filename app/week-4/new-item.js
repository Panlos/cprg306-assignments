"use client";
import { useState } from "react"

 function NewItemForm()
{
    const [name, setName] = useState(" ");
    const [quantity , setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        alert(`You have added ${quantity}${name}${quantity > 1 ? "s" : ""} under the ${category} category`);
    };
    const handleChange = (event) =>{
        setName(event.target.value);
    };
    
    return (
        <div className=" flex justify-center">
            <form onSubmit={handleSubmit} className=" bg-white text-black max-w-sm w-full">
                <label className="Item name">
                Name Stuff 
                <input className="border-black border" 
                type="text" 
                value={name} 
                required
                onChange={handleChange}
                />
                </label>
                <label className="flex justify-between">
                Quantity Stuff 
                <input className="border-black border" 
                type="number" 
                value={quantity} 
                onChange={(event) => setQuantity(event.target.value)}
                />
                </label>
                 <label className="border-black border">
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="form-input"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                </label>
                <button type="submit" 
                class="w-full mt-4 py-2 px-4 bg-blue-500
                text-white font-semibold rounded-lg shadow-md
                hover:bg-blue-700 focus:outline-none focus:ring-2">
                Add +
                </button>
            </form>
        </div>
    );
}
export default NewItemForm;