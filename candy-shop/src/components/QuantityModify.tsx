import { useCart } from "@/context/CartContext";
import { Product } from "./ProductCard";
import React, { useState, useEffect } from "react";

export default function QuantityModify({product}:{product: Product}){
    const {cartItems, addToCart, deleteFromCart, setQuantity, emptyFromCart } = useCart();

    const cartItem = cartItems.find(item => item.id === product.id);
    const cartItemQuality = cartItem?.quantity ?? 1;
    const [inputQty, setInputQty] = useState(cartItemQuality);

    useEffect(()=>{
        setInputQty(cartItemQuality);
    }, [cartItemQuality]);

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const number = e.target.value;
        if(/^\d*$/.test(number)){
            const value = Number(number)
            setInputQty(value);
            setQuantity(value, { ...product, quantity: value });
        }
    };

    const handleBlur = () => {
        if (inputQty <= 0 && cartItem) {
          emptyFromCart(cartItem);
        }
      };

    return (
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg shadow-sm w-fit bg-white">
            <button
                onClick={()=>{cartItemQuality <= 1 ? emptyFromCart({ ...product, quantity: 0 }) : deleteFromCart({ ...product, quantity: cartItemQuality })}}
                className="text-gray-800 text-3xl hover:text-red-500"
            >
                - 
            </button>
            <input
                type="number"
                min={0}
                value={inputQty}
                onChange={handleInput}
                onBlur={handleBlur}
                className="w-10 text-center outline-none text-black"
            />
            <button
                onClick={() => addToCart({ ...product, quantity: cartItemQuality })}
                className="text-gray-800 text-2xl hover:text-red-500"
            > 
                +
            </button>

        </div>

    );
}
