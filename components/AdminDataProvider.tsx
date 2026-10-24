"use client";

import { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from "react";
import { AdminBerita, AdminProfil, STORAGE_KEYS, DEFAULT_BERITA, DEFAULT_PROFIL } from "@/data/admin";

interface AdminDataContextType {
  berita: AdminBerita[];
  setBerita: (berita: AdminBerita[]) => void;
  profil: AdminProfil;
  setProfil: (profil: AdminProfil) => void;
  isReady: boolean;
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [berita, setBeritaState] = useState<AdminBerita[]>([]);
  const [profil, setProfilState] = useState<AdminProfil>({} as AdminProfil);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedBerita = localStorage.getItem(STORAGE_KEYS.ADMIN_BERITA);
    const storedProfil = localStorage.getItem(STORAGE_KEYS.ADMIN_PROFIL);

    if (storedBerita) {
      try {
        setBeritaState(JSON.parse(storedBerita));
      } catch {
        setBeritaState(DEFAULT_BERITA);
      }
    } else {
      setBeritaState(DEFAULT_BERITA);
      localStorage.setItem(STORAGE_KEYS.ADMIN_BERITA, JSON.stringify(DEFAULT_BERITA));
    }

    if (storedProfil) {
      try {
        setProfilState(JSON.parse(storedProfil));
      } catch {
        setProfilState(DEFAULT_PROFIL);
      }
    } else {
      setProfilState(DEFAULT_PROFIL);
      localStorage.setItem(STORAGE_KEYS.ADMIN_PROFIL, JSON.stringify(DEFAULT_PROFIL));
    }

    setIsReady(true);
  }, []);

  const setBerita = useCallback((next: AdminBerita[]) => {
    setBeritaState(next);
    localStorage.setItem(STORAGE_KEYS.ADMIN_BERITA, JSON.stringify(next));
  }, []);

  const setProfil = useCallback((next: AdminProfil) => {
    setProfilState(next);
    localStorage.setItem(STORAGE_KEYS.ADMIN_PROFIL, JSON.stringify(next));
  }, []);

  const emptyProfil: AdminProfil = {
    nama: "",
    namaSingkat: "",
    tagline: "",
    alamat: "",
    telepon: "",
    email: "",
    website: "",
    akreditasi: "",
    jumlahSiswa: "",
    jumlahJurusan: "",
    sejarah: "",
    visi: "",
    misi: [],
    kepala: { nama: "", jabatan: "" },
    jurusan: [],
    fasilitas: [],
  };

  if (!isReady) {
    return (
      <AdminDataContext.Provider value={{ berita: [], setBerita: () => {}, profil: emptyProfil, setProfil: () => {}, isReady: false }}>
        {children}
      </AdminDataContext.Provider>
    );
  }

  return (
    <AdminDataContext.Provider value={{ berita, setBerita, profil, setProfil, isReady: true }}>
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  const ctx = useContext(AdminDataContext);
  if (!ctx) throw new Error("useAdminData harus digunakan di dalam AdminDataProvider");
  return ctx;
}
