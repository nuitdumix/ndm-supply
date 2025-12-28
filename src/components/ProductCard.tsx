import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenLogin: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenLogin }) => {
  const { addItem } = useCartStore();
  const { isAuthenticated } = useAuthStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      onOpenLogin();
    } else {
      addItem(product);
    }
  };

  return (
    <div className="group relative aspect-square border-r border-b border-white/20 overflow-hidden bg-black">
      <div className="absolute inset-0 p-8 flex items-center justify-center">
        <motion.img
          src={product.image}
          alt={product.name}
          // Inverted grayscale for dark mode vibe
          className="w-full h-full object-contain filter grayscale contrast-125 brightness-90 group-hover:brightness-110 transition-all duration-500 ease-out"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
      </div>

      {/* Minimalist Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] uppercase tracking-widest bg-black text-white border border-white px-1">
            {product.category}
          </span>
          <span className="font-mono text-[10px] tracking-widest bg-white text-black px-1">
            {product.price}€
          </span>
        </div>

        <div className="flex justify-between items-end gap-2">
          <span className="font-mono text-xs uppercase tracking-tighter text-white bg-black px-1 truncate">
            {product.name}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-white text-black p-1 hover:bg-gray-300 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
