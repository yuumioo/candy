'use client'

import { useCart } from "@/context/CartContext"
import CartItemCard from "./CartItemCard";

export default function Cart(){
    const {cartItems, isCartOpen, closeCart} = useCart();

    return (
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button onClick={closeCart}> ✕ </button>
            </div>

            <div className="p-4 space-y-4 overflow-y-auto h-full">
                {cartItems.length === 0 ? (
                    <p>Varukorgen är tom</p>
                ):(
                    cartItems.map(eachitem => (
                        <CartItemCard key={eachitem.id} item={eachitem}/>
                    ))
                )}

            </div>
        </div>
    );
}