import React from 'react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenLogin }) => {
  const { items } = useCartStore();
  const { isAuthenticated, logout } = useAuthStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white h-14 flex items-center justify-between px-4 mix-blend-difference">
      <div className="flex items-center gap-4">
        <span className="font-1533 text-2xl tracking-widest text-white">NDM_SUPPLY</span>
      </div>

      <div className="flex items-center gap-6 font-mono text-[10px] md:text-xs uppercase tracking-widest">
        <a href="#" className="text-white hover:bg-white hover:text-black px-2 py-1 transition-colors">
          Archive_01
        </a>
        
        {isAuthenticated ? (
          <button onClick={logout} className="text-white hover:bg-white hover:text-black px-2 py-1 transition-colors">
            Exit
          </button>
        ) : (
          <button onClick={onOpenLogin} className="text-white hover:bg-white hover:text-black px-2 py-1 transition-colors">
            Access
          </button>
        )}

        <button onClick={onOpenCart} className="text-white hover:bg-white hover:text-black px-2 py-1 transition-colors">
          Cart [{itemCount}]
        </button>
      </div>
    </nav>
  );
};
