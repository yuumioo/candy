'use client'
import Image from "next/image"
import Link from "next/link"
import { useMenu } from "@/context/MenuContext";
import { useCart } from "@/context/CartContext";

type HeaderProps = {
    onMenuClick: () => void;
  };

export default function Header(){
    const { showMenu,setShowMenu } = useMenu();
    const { toggleCart } = useCart();

    if(showMenu){
        return null;
    }

    return (
        <header className="fixed top-0 left-0 w-full h-16 z-50 bg-white shadow flex items-center justify-between px-6 py-4">
            {/*left menu-button*/}
            <div className="flex-none">
                <button
                    onClick={()=> setShowMenu(true)}
                >
                    <Image
                        src="/decos/menu.png"
                        alt="Menu"
                        width={50}
                        height={30}
                        className="object_contain"
                    />
                </button>
            </div>
            {/*center home-logo*/}
            <div className="flex-grow flex justify-center">
                <Link href="/" className="block rounded-full overflow-hidden">
                    <Image 
                        src="/decos/logo.png"
                        alt="Home"
                        width={70}
                        height={40}
                        className="rounded-full"
                    />
                </Link>
            </div>
            {/*right cart-button*/}
            <div className="flex-none">
                <button
                    onClick={toggleCart}
                > 
                <Image
                        src="/decos/shop_cart.png"
                        alt="Menu"
                        width={50}
                        height={30}
                        className="object_contain"
                    />
                </button>
            </div>
        </header>
    );
}