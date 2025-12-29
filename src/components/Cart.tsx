import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { Minus, Plus } from 'lucide-react';

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
            className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'circOut' }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-ndm-dark border-l border-ndm-primary z-50 flex flex-col shadow-[-10px_0_30px_-10px_rgba(255,164,0,0.1)]"
          >
            <div className="flex items-center justify-between p-4 border-b border-ndm-grid h-14 bg-ndm-primary/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-ndm-primary animate-pulse rounded-full"></div>
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-ndm-primary">SYSTEM_CART_PROCESS</span>
              </div>
              <button onClick={onClose} className="text-ndm-muted hover:text-ndm-primary font-mono text-xs uppercase">
                [ CLOSE_X ]
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center font-mono text-xs text-ndm-muted uppercase tracking-widest gap-2 border border-dashed border-ndm-grid m-4">
                  <span>[ NULL_DATA ]</span>
                  <span className="text-[10px]">AWAITING_INPUT...</span>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 border border-ndm-grid p-2 bg-ndm-dark hover:border-ndm-primary transition-colors group">
                    <div className="w-20 h-20 border border-ndm-grid p-2 flex items-center justify-center bg-black group-hover:border-ndm-primary transition-colors">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain grayscale contrast-125 brightness-90" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-xs uppercase font-bold tracking-tight text-ndm-accent">{item.name}</span>
                        <span className="font-mono text-xs text-ndm-primary">{item.price * item.quantity} EUR</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-ndm-grid text-ndm-accent">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1 hover:bg-ndm-primary hover:text-ndm-dark transition-colors w-6 flex justify-center"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="px-3 font-mono text-xs w-8 text-center border-l border-r border-ndm-grid">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-ndm-primary hover:text-ndm-dark transition-colors w-6 flex justify-center"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="font-mono text-[9px] uppercase text-ndm-muted hover:text-red-500 hover:bg-red-500/10 px-2 py-1 transition-colors"
                        >
                          DEL_ITEM
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-ndm-primary p-4 space-y-4 bg-ndm-dark">
              <div className="flex justify-between font-mono text-xs uppercase font-bold tracking-widest text-ndm-accent border-b border-dashed border-ndm-grid pb-4">
                <span>TOTAL_CALCULATED</span>
                <span className="text-ndm-primary">{total()} EUR</span>
              </div>
              <button className="w-full bg-ndm-primary text-ndm-dark py-4 font-mono text-xs uppercase font-bold tracking-widest hover:bg-ndm-accent transition-colors flex justify-between px-4 items-center group">
                <span>INITIATE_CHECKOUT</span>
                <span className="group-hover:animate-blink">_</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
