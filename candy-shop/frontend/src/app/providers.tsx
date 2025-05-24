' use client';

import { CartProvider } from '@/context/CartContext';
import { MenuProvider } from '@/context/MenuContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
      <CartProvider>
        <MenuProvider>{children}</MenuProvider>
      </CartProvider>
    );
  }

