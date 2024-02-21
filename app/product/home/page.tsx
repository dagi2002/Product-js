'use client'
import React, { useState, useEffect } from "react";

const Sales: React.FC = () => {
    const [itemName, setItemName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const [unitPrice, setUnitPrice] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        setTotalPrice(quantity * unitPrice);
    }, [quantity, unitPrice]);

    const handleSubmit = () => {
      if (!itemName || quantity <= 0 || unitPrice <= 0) {
          window.alert('Please fill out all fields correctly.');
          return;
      }
      console.log({ itemName, quantity, unitPrice, totalPrice });
      window.alert('Form submitted. Check the console for data.');
  };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-1">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Your order</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="Item "
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="Number input"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Unit price</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        value={unitPrice}
                        onChange={(e) => setUnitPrice(Number(e.target.value))}
                        placeholder="Number input"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Total Price</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={totalPrice}
                        readOnly
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sales;
