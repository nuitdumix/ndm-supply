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
            className="fixed inset-0 bg-ndm-primary/10 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-ndm-dark border-l border-ndm-primary z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-ndm-primary h-14">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-ndm-accent">Cart_Contents</span>
              <button onClick={onClose} className="hover:rotate-90 transition-transform text-ndm-accent hover:text-ndm-primary">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center font-mono text-xs text-ndm-muted uppercase tracking-widest gap-2">
                  <span>[ EMPTY ]</span>
                  <span className="text-[10px]">Fill the crate</span>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border border-ndm-primary/20 p-2 bg-ndm-primary/5">
                    <div className="w-20 h-20 border border-ndm-primary/20 p-2 flex items-center justify-center bg-ndm-dark">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain grayscale contrast-125 brightness-90" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-xs uppercase font-bold tracking-tight text-ndm-accent">{item.name}</span>
                        <span className="font-mono text-xs text-ndm-primary">{item.price * item.quantity} €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-ndm-primary/30 text-ndm-accent">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1 hover:bg-ndm-primary hover:text-ndm-dark transition-colors"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="px-3 font-mono text-xs w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-ndm-primary hover:text-ndm-dark transition-colors"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="font-mono text-[10px] uppercase text-ndm-muted hover:text-ndm-secondary hover:underline decoration-1 underline-offset-2"
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-ndm-primary p-4 space-y-4 bg-ndm-dark">
              <div className="flex justify-between font-mono text-xs uppercase font-bold tracking-widest text-ndm-accent">
                <span>Total</span>
                <span className="text-ndm-primary">{total()} €</span>
              </div>
              <button className="w-full bg-ndm-primary text-ndm-dark py-4 font-mono text-xs uppercase font-bold tracking-widest hover:bg-ndm-secondary transition-colors">
                Proceed_To_Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
