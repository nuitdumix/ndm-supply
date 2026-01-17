import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string) => boolean;
  logout: () => void;
}

const ALLOWED_USERS = [
  'rom@ndm.system',
  'admin@ndm.system',
  'guest@ndm.system',
  'buyer@ndm.system'
];

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (email) => {
        if (ALLOWED_USERS.includes(email.toLowerCase())) {
          set({ isAuthenticated: true, user: { email } });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: 'ndm-auth-storage',
    }
  )
);
