import React from 'react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenLogin }) => {
  const { items } = useCartStore();
  const { user, isAuthenticated } = useAuthStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ndm-dark h-14 flex items-center justify-between px-8">
      <div className="flex flex-col justify-center">
        <span className="font-bold text-sm tracking-widest text-ndm-accent uppercase">NDM Supply Co.</span>
        <button onClick={onOpenLogin} className="text-[10px] text-ndm-primary hover:text-white text-left uppercase tracking-widest font-bold animate-pulse">
          {isAuthenticated ? `RESIDENT: ${user?.email}` : 'RESIDENT LOGIN'}
        </button>
      </div>

      <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest">
        <button onClick={onOpenCart} className="text-ndm-accent hover:text-ndm-primary transition-colors group">
          Cart <span className="text-ndm-primary">({itemCount})</span>
        </button>
      </div>
    </nav>
  );
};
