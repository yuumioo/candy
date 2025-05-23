'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import QuantityModify from "./QuantityModify";
import { useCart } from "@/context/CartContext";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    stock : number;
  }

export default function ProductCard({product} : {product:Product}){
    const [isAdded, setIsAdded] = useState(false);
    const {addNewItem} = useCart();

    return (
        <div className="block shadow rounded-lg overflow-hidden">
        <Link href={`/products/${product.id}`}>
            <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-48 object-cover"
            />
        </Link>
            <div className="flex justify-between items-center px-4">
                <div className="p-2">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                </div>
                <div>
                
                    {!isAdded ? (
                        <button 
                        onClick={()=>{setIsAdded(true); addNewItem(product)}} 
                        className="bg-white shadow rounded-xl text-2xl py-2 px-4 hover:bg-gray-100"
                        >
                            +
                        </button>
                    ) : (
                        <QuantityModify key={product.id} product={product}/>
                    )}
                </div>
                
            </div>
    </div>
        


    );
}