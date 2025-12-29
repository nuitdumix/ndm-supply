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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ndm-dark border-b border-ndm-primary/20 h-14 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <span className="font-1533 text-2xl tracking-widest text-ndm-accent">NDM_SUPPLY</span>
      </div>

      <div className="flex items-center gap-6 font-mono text-[10px] md:text-xs uppercase tracking-widest">
        <a href="#" className="text-ndm-accent hover:text-ndm-primary transition-colors">
          Archive_01
        </a>
        
        {isAuthenticated ? (
          <button onClick={logout} className="text-ndm-accent hover:text-ndm-primary transition-colors">
            Exit
          </button>
        ) : (
          <button onClick={onOpenLogin} className="text-ndm-accent hover:text-ndm-primary transition-colors">
            Access
          </button>
        )}

        <button onClick={onOpenCart} className="text-ndm-accent hover:text-ndm-primary transition-colors">
          Cart [{itemCount}]
        </button>
      </div>
    </nav>
  );
};
