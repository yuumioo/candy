'use client'

import Image from "next/image"
import { Product } from "./ProductCard";
import QuantityModify from "./QuantityModify";

export type CartItem = Product & { quantity: number };

export default function CartItemCard({item} : {item:CartItem}){

    return (
        <div className="flex justify-between items-center hover:bg-gray-100">
            <div key={item.id} className="flex space-x-4">
                <Image
                    src = {item.imageUrl}
                    alt = {item.name}
                    width = {50}
                    height = {50}
                />
                <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <div className="transform scale-70 origin-right">
                    <QuantityModify key={item.id} product={item} />
                </div>
            </div>
        </div>
    );
    
}