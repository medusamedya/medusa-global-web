// components/layout/Header.tsx
"use client";

import { ArrowRight, Menu, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isScrolled
          ? "bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-color)] py-4 shadow-2xl" 
          : "bg-transparent py-6 sm:py-7" // Yükseklik artırıldı
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LEFT: Logo */}
        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#08020F] dark:bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-white dark:text-[#08020F] text-[10px] sm:text-[11px] font-bold tracking-tight">MG</span>
          </div>
          <span className="text-[#08020F] dark:text-white font-medium tracking-wide hidden sm:block transition-colors duration-500">
            Medusa
          </span>
        </div>

        {/* MIDDLE: Pill Menu */}
        <nav
          className={`hidden md:flex items-center rounded-full transition-all duration-500 ease-in-out ${
            isScrolled
              ? "bg-transparent gap-8"
              // Krem temada yazılar beyaz okunsun diye pill arka planını dark/30 yaptık
              : "bg-black/30 dark:bg-white/10 backdrop-blur-md px-6 py-2 border border-black/10 dark:border-white/10 gap-2 shadow-lg"
          }`}
        >
          {["Hizmetler", "Projeler", "Stüdyo", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              // Krem temada text-white, hoverda arka plan bg-black/50 ile çok belirgin
              className="text-[13px] px-4 py-1.5 text-white dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300 rounded-full hover:bg-black/50 dark:hover:bg-white/10"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* RIGHT: Theme Toggle & CTA Button */}
        <div className="flex items-center gap-3">
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-all border border-black/10 dark:border-white/10 active:scale-95"
              aria-label="Tema Değiştir"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-white animate-fade-in" />
              ) : (
                <Moon className="w-4 h-4 text-[#08020F] animate-fade-in" />
              )}
            </button>
          )}

          <button className="group flex items-center bg-[#08020F] dark:bg-white text-white dark:text-[#08020F] text-[13px] font-bold rounded-full pl-5 pr-1.5 py-1.5 gap-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md">
            <span>İletişim</span>
            <div className="bg-white dark:bg-[#08020F] rounded-full p-1 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <ArrowRight className="w-4 h-4 text-[#08020F] dark:text-white" />
            </div>
          </button>

          <button className="md:hidden w-10 h-10 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-black/5 dark:border-white/10 active:scale-95 transition-transform">
            <Menu className="w-4 h-4 text-[#08020F] dark:text-white" />
          </button>
          
        </div>
      </div>
    </header>
  );
}