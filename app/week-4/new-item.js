"use client";
import { useState } from "react"

 function NewItemForm()
{
    const [name, setName] = useState(" ");
    const [quantity , setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const item = {
            p_name: {name},
            p_quantity:  {quantity} ,
            p_category: {category},
        };
        console.log(item);
        alert(`You have added ${quantity}${name}${quantity > 1 ? "s" : ""} under the ${category} category`);
        setName("")
        setCategory("produce")
        setQuantity(1)
    };
    const handleChange = (event) =>{
        setName(event.target.value);
    };
    
    return (
            <div className="flex justify-center min-h-screen bg-gray-100 py-6">
    <form onSubmit={handleSubmit} className="bg-white text-black max-w-sm w-full p-6 rounded-lg shadow-lg">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            Name Stuff
        </label>
        <input
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            value={name}
            required
            onChange={handleChange}
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            Quantity Stuff
        </label>
        <input
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            type="number"
            id="quantity"
            min={1}
            max={99}
            required
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
        </label>
        <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
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
        </div>
        <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        Add +
        </button>
    </form>
    </div>
    );
}
export default NewItemForm;