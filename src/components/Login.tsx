import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
// Icons not needed in minimal terminal variant

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const { login } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-[2px] z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-ndm-dark border border-ndm-grid z-50 p-6 shadow-2xl shadow-ndm-primary/5"
          >
            <div className="flex justify-between items-center mb-6 border-b border-ndm-grid pb-2">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-ndm-primary animate-pulse rounded-full"></div>
                 <h2 className="font-mono text-xs uppercase font-bold tracking-widest text-ndm-accent">RESIDENT_ACCESS</h2>
              </div>
              <button onClick={onClose} className="text-ndm-muted hover:text-ndm-primary font-mono text-xs uppercase">
                [ ESC ]
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-[10px] uppercase mb-2 tracking-widest text-ndm-muted">
                  {"\u003e ENTER_IDENTITY_KEY"}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-ndm-dark border border-ndm-grid p-3 font-mono text-sm focus:outline-none focus:border-ndm-primary text-ndm-accent placeholder-ndm-grid"
                    placeholder="user@ndm.system"
                    required
                    autoFocus
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-4 bg-ndm-primary animate-blink pointer-events-none opacity-50"></div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-ndm-primary text-ndm-dark py-3 font-mono text-xs uppercase font-bold tracking-widest hover:bg-ndm-accent transition-colors border border-transparent hover:border-ndm-primary"
              >
                {"\u003e\u003e AUTHENTICATE_SESSION"}
              </button>
            </form>
            
            <div className="mt-4 text-center">
               <p className="font-mono text-[9px] text-ndm-grid uppercase">
                 UNAUTHORIZED_ACCESS_IS_PROHIBITED
               </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
