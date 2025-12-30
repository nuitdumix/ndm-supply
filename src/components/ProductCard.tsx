import React from 'react';
// Motion removed for minimalist Y2K feel
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpen: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpen }) => {
  return (
    <div 
      onClick={onOpen}
      className="group relative aspect-square cursor-pointer transition-transform active:scale-95 bg-ndm-dark/50 transition-colors"
    >
      <div className="absolute inset-0 p-2 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain filter contrast-125 brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300 ease-out"
        />
      </div>
    </div>
  );
};
