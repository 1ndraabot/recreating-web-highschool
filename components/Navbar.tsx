"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Berita", href: "/berita" },
  { name: "Jurusan", href: "/jurusan" },
  { name: "Galeri", href: "/galeri" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-[#E31E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Nama Sekolah (kiri) */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/Logo-SMK-Telkom-Purwokerto.svg"
              alt="Logo SMK Telkom Purwokerto"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-[#1F2937]">SMK Telkom</span>
            <span className="hidden sm:inline text-sm text-[#6B7280]">
              Purwokerto
            </span>
          </Link>

          {/* Desktop navigation (kanan) */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#1F2937] hover:text-[#E31E24] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/admin"
                  className="text-[#1F2937] hover:text-[#E31E24] font-medium transition-colors"
                >
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="text-xs font-medium text-[#E31E24] hover:text-[#B3141A] underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-[#1F2937] hover:text-[#E31E24] font-medium transition-colors underline"
              >
                Login Admin
              </Link>
            )}
          </nav>

          {/* Hamburger menu (mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-[#1F2937] hover:text-[#E31E24] focus:outline-none focus:ring-2 focus:ring-[#E31E24] rounded"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigasi</span>
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 translate-y-[5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu (slide-down) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="border-t border-gray-200 px-4 pt-3 pb-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#1F2937] hover:text-[#E31E24] font-medium py-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="text-[#1F2937] hover:text-[#E31E24] font-medium py-2 transition-colors"
              >
                Admin
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-xs font-medium text-[#E31E24] py-2 underline hover:text-[#B3141A]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-[#1F2937] hover:text-[#E31E24] font-medium py-2 transition-colors underline"
            >
              Login Admin
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
