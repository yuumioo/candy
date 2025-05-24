'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import React from "react";
import Footer from "@/components/Footer";
import { Providers } from "./providers";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


function LayoutWrapper({children}:{children: React.ReactNode}){
  // const {showSidebar} = useLayout();

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Sidebar/> 
      <Cart/>
      <main className="p-4 flex-grow pt-16">{children}</main>
      <Footer/>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>

            <LayoutWrapper>{children}</LayoutWrapper>

        </Providers>
      </body>
    </html>
  );
}
