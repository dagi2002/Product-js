// pages/index.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

// Define a type for product
type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
};

// Mock data for products
const products: Product[] = [
  { id: 1, name: 'Product 1', image: 'https://lh3.googleusercontent.com/proxy/KOuLrahyk1ojtoWeITrpTUCSYsBhTvakGoOvsSAhYJRniQ4vs88sMJ2EmB_eZ32g4gXgBvXcXGMF5yhO5Wt8IfiIT9tLJCbYRFSDVdYjZcwMghsb', description: 'This is product 1' },
  { id: 2, name: 'Product 2', image: '/images/product2.jpg', description: 'This is product 2' },
  { id: 3, name: 'Product 3', image: '/images/product2.jpg', description: 'This is product 3' },
  { id: 4, name: 'Product 4', image: '/images/product2.jpg', description: 'This is product 4' },
  // Add more products as needed
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-2" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <Link href="/product/home">
  <button className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Product</button>
</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
