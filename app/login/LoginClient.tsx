"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import Button from "@/components/Button";

export default function LoginClient() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = login(username, password);
    setIsLoading(false);

    if (!success) {
      setError("Username atau password salah.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-[#F3F4F6] py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-200 p-8 sm:p-10">
        <div className="text-center mb-8">
          <img
            src="/Logo-SMK-Telkom-Purwokerto.svg"
            alt="Logo SMK Telkom Purwokerto"
            className="h-12 w-auto mx-auto mb-4 object-contain"
          />
          <h2 className="text-2xl font-bold text-[#1F2937]">Login Admin</h2>
          <p className="text-sm text-[#6B7280]">
            Masuk untuk mengelola konten website
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1F2937] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E31E24] focus:border-[#E31E24] outline-none transition"
              placeholder="Masukkan password"
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-[#6B7280]">
          Default: username <strong>admin</strong>, password <strong>admin123</strong>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[#E31E24] hover:text-[#B3141A] transition-colors"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
