' use client';

import React, { createContext, useContext, useState } from "react";
import { CartItem } from "@/components/CartItemCard";
import { Product } from "@/components/ProductCard";

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (product: CartItem) => void;
    addNewItem: (product: Product)=> void;
    deleteFromCart: (product: CartItem) => void
    emptyFromCart: (product: CartItem) => void
    setQuantity: (e:number, product: CartItem) => void
    isCartOpen: boolean;
    closeCart: () => void;
    toggleCart: () => void;
  };

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({children}:{children:React.ReactNode}){
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItem] = useState<CartItem[]>([]);

    const toggleCart = () => setCartOpen(!isCartOpen);
    const closeCart = () => setCartOpen(false);

    const setQuantity = (e : number, product : CartItem) => {
        setCartItem((prevItems) => {return prevItems.map( item =>
            item.id === product.id ? {...item, quantity: e} : item
        );}
        );
    }

    const deleteFromCart = (product : CartItem) => {
        setCartItem((prevItems) => {
            return prevItems.map( item =>
                item.id === product.id ? {...item, quantity: item.quantity - 1} : item
                );
            }
        );
    };

    const emptyFromCart = (product : CartItem) => {
        setCartItem((prevItems) => {
            return prevItems.map( item =>
                item.id === product.id ? {...item, quantity: 0} : item
                );
            }
        );
    };

    const addNewItem = (product : Product) => {
        setCartItem((prevItems) => { 
            return [...prevItems, {...product, quantity:1}];
        });
    };

    const addToCart = (product : CartItem) => {
        setCartItem((prevItems) => {
            return prevItems.map( item =>
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            );
        });
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, addNewItem, deleteFromCart, emptyFromCart, setQuantity, isCartOpen, closeCart, toggleCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart (){
    const context = useContext(CartContext);
    if (!context) throw new Error("useLayout must be used within LayoutProvider");
    return context;
}



