'use client';

import { createContext, useContext, useState } from "react";

interface MenuContextType {
    showMenu: boolean;
    setShowMenu: (value:boolean) => void;
};

const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider ({ children }: { children: React.ReactNode }) {
    const [showMenu, setShowMenu] =  useState(false);
    return (
        <MenuContext.Provider value={{ showMenu, setShowMenu }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (!context) throw new Error("useLayout must be used within LayoutProvider");
    return context;
  }