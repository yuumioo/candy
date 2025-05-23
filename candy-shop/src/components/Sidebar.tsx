'use client'

import { useState } from "react"
import Link from "next/link";
import { useMenu } from "@/context/MenuContext";


export default function Sidebar () {
    const {showMenu, setShowMenu} = useMenu();
    const navs = ['/','products','contact'];

    return (
        <aside className={`bg-white p-4 w-64 h-screen fixed top-0 left-0 shadow-lg z-50 font-sans transform transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-full"}`}>
                <button onClick={()=>setShowMenu(false)} className="text-balck hover:text-gray-600 text-sm">
                    ✕ Close
                </button>

            <nav className="p-4 space-y-10 mt-8">
                {['HEM', 'PRALINER', 'KONTAKT'].map((item,index)=>(
                    <div key={index} className="border-b pb-2 text-gray-300">
                        <Link href={`${navs[index].toLocaleLowerCase()}`} className="block text-gray-800 hover:text-yellow-800 text-lg transition-colors"> {item} </Link>
                    </div>
                ))}
            </nav>

        </aside>
    );

}