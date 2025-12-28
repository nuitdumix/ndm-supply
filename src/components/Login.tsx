import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { X } from 'lucide-react';

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
            className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-black border border-white z-50 p-6 shadow-2xl shadow-white/10"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-mono text-sm uppercase font-bold tracking-widest">Access_Terminal</h2>
              <button onClick={onClose} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase mb-1 tracking-widest text-gray-400">Identity_Key (Email)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-white/50 p-2 font-mono text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white text-white placeholder-gray-700"
                  placeholder="ENTER_EMAIL"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-2 font-mono text-xs uppercase font-bold tracking-widest hover:bg-gray-300 transition-colors"
              >
                Authenticate
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
