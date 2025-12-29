import React from 'react';
// Motion removed for minimalist Y2K feel
import type { Product } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpen: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpen }) => {
  return (
    <div 
      onClick={onOpen}
      className="group relative aspect-square cursor-pointer transition-transform active:scale-95"
    >
      <div className="absolute inset-0 p-8 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain filter grayscale contrast-125 brightness-90 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300 ease-out drop-shadow-2xl"
        />
      </div>
    </div>
  );
};
