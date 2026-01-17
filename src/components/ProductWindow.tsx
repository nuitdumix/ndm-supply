import React, { useState, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X } from 'lucide-react';
import type { Product } from '../data/products';
import { useCartStore } from '../store/cartStore';

interface ProductWindowProps {
  product: Product;
  onClose: () => void;
  zIndex: number;
}

export const ProductWindow: React.FC<ProductWindowProps> = ({ product, onClose, zIndex }) => {
  const { addItem } = useCartStore();
  const controls = useDragControls();
  const [isAdded, setIsAdded] = useState(false);

  // Beanie ID is '5'
  const isPurchasable = product.id === '5';

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => {
        setIsAdded(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  const handleAddToCart = () => {
    if (!isPurchasable) return;
    addItem(product);
    setIsAdded(true);
  };

  const handleDragStart = () => {
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  const handleDragEnd = () => {
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
  };

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onPointerDown={(e) => controls.start(e)}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="fixed left-1/2 top-1/2 w-[400px] max-w-[90vw] bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] shadow-xl flex flex-col font-mono select-none cursor-grab active:cursor-grabbing"
      style={{ 
        x: '-50%', 
        y: '-50%',
        zIndex 
      }}
    >
      {/* Window Header */}
      <div 
        className="h-8 bg-ndm-primary flex items-center justify-between px-2 select-none m-1 touch-none"
      >
        <span className="text-xs font-bold text-ndm-dark uppercase tracking-widest truncate pointer-events-none">
          {product.name.toUpperCase()}
        </span>
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          onPointerDown={(e) => e.stopPropagation()}
          className="w-5 h-5 flex items-center justify-center bg-[#c0c0c0] border border-t-white border-l-white border-r-[#404040] border-b-[#404040] active:border-t-[#404040] active:border-l-[#404040] active:border-r-white active:border-b-white text-black hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
        >
          <X size={12} strokeWidth={3} />
        </button>
      </div>

      {/* Window Content */}
      <div className="p-8 flex flex-col items-center gap-6 bg-[#c0c0c0] text-black">
        <div className="relative w-full aspect-square flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply filter contrast-125"
            draggable={false}
          />
        </div>

        <div className="text-center space-y-4 w-full">
          <h3 className="font-bold text-xl tracking-tighter uppercase">{product.name}</h3>
          
          <div className="text-xs font-bold tracking-widest space-y-1">
             <p>RELEASED 2025 [ARCHIVED]</p>
             <p>{product.price} EUR</p>
             {!isPurchasable && <p className="text-red-500">TOO_LATE</p>}
          </div>

          <button
            onClick={handleAddToCart}
            onPointerDown={(e) => e.stopPropagation()}
            disabled={isAdded || !isPurchasable}
            className={`w-full py-2 font-bold uppercase tracking-widest transition-all border border-t-white border-l-white border-r-[#404040] border-b-[#404040] active:border-t-[#404040] active:border-l-[#404040] active:border-r-white active:border-b-white cursor-pointer ${
              isAdded 
                ? 'bg-ndm-primary text-ndm-dark cursor-default' 
                : !isPurchasable
                  ? 'bg-[#a0a0a0] text-gray-500 cursor-not-allowed active:border-t-white active:border-l-white active:border-r-[#404040] active:border-b-[#404040]'
                  : 'bg-[#c0c0c0] text-black hover:bg-[#d0d0d0]'
            }`}
          >
            {isAdded ? 'ADDED TO CART' : (!isPurchasable ? 'NOT AVAILABLE' : 'ADD TO CART')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
