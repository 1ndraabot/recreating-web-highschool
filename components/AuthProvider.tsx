"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { AdminUser, STORAGE_KEYS, DEFAULT_ADMIN_USER } from "@/data/admin";

interface AuthContextType {
  isAuthenticated: boolean;
  user: AdminUser | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.ADMIN_SESSION);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
    setIsReady(true);
  }, []);

  const login = (username: string, password: string): boolean => {
    const stored = localStorage.getItem(STORAGE_KEYS.ADMIN_USER);
    const adminUser: AdminUser = stored ? JSON.parse(stored) : DEFAULT_ADMIN_USER;

    if (username === adminUser.username && password === adminUser.password) {
      const session: AdminUser = { username, password };
      localStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, JSON.stringify(session));
      setUser(session);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    setUser(null);
  };

  if (!isReady) return null;

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth harus digunakan di dalam AuthProvider");
  return ctx;
}
