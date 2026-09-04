"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Waves, Calendar } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "L'Iniziativa", href: "#iniziativa" },
    { label: "Salvatore", href: "#salvatore" },
    { label: "Il Percorso", href: "#percorso" },
    { label: "I 3 Libri", href: "#libri" },
    { label: "Programma", href: "#programma" },
    { label: "Locandina", href: "#locandina" },
    { label: "Foto", href: "#galleria" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A42]/95 backdrop-blur-md border-b border-white/20 py-3 shadow-xl shadow-black/20"
          : "bg-gradient-to-b from-[#071A42]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#top"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#22E57A] flex items-center justify-center text-[#071A42] font-bold group-hover:bg-[#FFE500] transition-colors shadow-md">
            <Waves className="w-5 h-5 text-[#071A42]" />
          </div>
          <div className="flex flex-col">
            <span className="font-macchia text-base sm:text-lg tracking-wide uppercase leading-tight text-white group-hover:text-[#FFE500] transition-colors">
              A NUOTO NEI MARI DEL GLOBO
            </span>
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#22E57A]">
              Salvatore Cimmino · Monte di Procida → Procida
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#071A42]/80 border border-white/20 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs lg:text-sm font-bold tracking-wide px-3.5 py-1.5 rounded-full text-white/90 hover:text-[#071A42] hover:bg-[#22E57A] transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Date Action Pill */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#countdown"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wide uppercase text-[#071A42] bg-[#FFE500] hover:bg-yellow-300 px-4 py-2 rounded-full transition-all shadow-md hover:scale-105"
          >
            <Calendar className="w-3.5 h-3.5 text-[#071A42]" />
            <span>3 OTTOBRE</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          className="md:hidden p-2 rounded-xl border bg-[#071A42] text-white border-white/20 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071A42]/98 backdrop-blur-xl border-b border-white/20 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3 font-mono">
            <span className="text-xs text-[#22E57A] font-bold tracking-wider uppercase pb-2 border-b border-white/10">
              Monte di Procida → Procida · 3 Ottobre
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-white hover:text-[#FFE500] py-2 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#countdown"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center text-xs font-bold uppercase text-[#071A42] bg-[#FFE500] py-3 rounded-xl shadow-md"
            >
              3 OTTOBRE · COUNTDOWN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
