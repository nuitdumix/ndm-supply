import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { X, Minus, Plus } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-black border-l border-white z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white h-14">
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Cart_Contents</span>
              <button onClick={onClose} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center font-mono text-xs text-gray-500 uppercase tracking-widest gap-2">
                  <span>[ EMPTY ]</span>
                  <span className="text-[10px]">Fill the crate</span>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border border-white/20 p-2 bg-white/5">
                    <div className="w-20 h-20 border border-white/20 p-2 flex items-center justify-center bg-black">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain grayscale invert" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-xs uppercase font-bold tracking-tight">{item.name}</span>
                        <span className="font-mono text-xs">{item.price * item.quantity} €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-white/30">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1 hover:bg-white hover:text-black transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="px-3 font-mono text-xs w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white hover:text-black transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="font-mono text-[10px] uppercase hover:text-red-500 hover:underline decoration-1 underline-offset-2"
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-white p-4 space-y-4 bg-black">
              <div className="flex justify-between font-mono text-xs uppercase font-bold tracking-widest">
                <span>Total</span>
                <span>{total()} €</span>
              </div>
              <button className="w-full bg-white text-black py-4 font-mono text-xs uppercase font-bold tracking-widest hover:bg-gray-200 transition-colors">
                Proceed_To_Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
