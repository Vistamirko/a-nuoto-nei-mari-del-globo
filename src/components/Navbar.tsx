"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A42]/95 backdrop-blur-md border-b border-white/20 py-2.5 shadow-xl shadow-black/25"
          : "bg-gradient-to-b from-[#071A42]/90 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
        {/* Brand */}
        <Link
          href="#top"
          className="group flex items-center gap-2.5 shrink-0 focus:outline-none"
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white shadow-md shrink-0 border border-white/40 p-0.5 group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.jpeg"
              alt="Logo A Nuoto Nei Mari Del Globo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-macchia text-sm sm:text-base lg:text-lg tracking-wide uppercase leading-none text-white group-hover:text-[#FFE500] transition-colors">
              A NUOTO NEI MARI DEL GLOBO
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#22E57A] mt-0.5">
              Salvatore Cimmino · Tappa Flegrea
            </span>
          </div>
        </Link>

        {/* Desktop Links (lg and up to prevent tight crowding) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-2.5 py-1 rounded-full bg-[#071A42]/85 border border-white/20 backdrop-blur-md shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs xl:text-[13px] font-bold tracking-wide px-2.5 xl:px-3 py-1.5 rounded-full text-white/90 hover:text-[#071A42] hover:bg-[#22E57A] transition-all whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Date Action Pill */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="#countdown"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#071A42] bg-[#FFE500] hover:bg-yellow-300 px-3.5 py-2 rounded-full transition-all shadow-md hover:scale-105 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 text-[#071A42] shrink-0" />
            <span className="whitespace-nowrap font-extrabold">3 OTTOBRE</span>
          </Link>
        </div>

        {/* Mobile / Tablet menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          className="lg:hidden p-2 rounded-xl border bg-[#071A42] text-white border-white/20 focus:outline-none shrink-0"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071A42]/98 backdrop-blur-xl border-b border-white/20 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-3 font-mono">
            <span className="text-xs text-[#22E57A] font-bold tracking-wider uppercase pb-2 border-b border-white/10">
              Monte di Procida → Procida · 3 Ottobre
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-white hover:text-[#FFE500] py-2 border-b border-white/10 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#countdown"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center text-xs font-bold uppercase text-[#071A42] bg-[#FFE500] py-3 rounded-xl shadow-md whitespace-nowrap"
            >
              3 OTTOBRE · COUNTDOWN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
