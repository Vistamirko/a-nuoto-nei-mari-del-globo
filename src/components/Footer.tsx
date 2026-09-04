"use client";

import React from "react";
import Link from "next/link";
import { Waves, ArrowUp, Instagram, Facebook, Youtube, Award } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040F28] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Big Slogan Banner */}
        <div className="pb-12 mb-12 border-b border-white/15 text-center">
          <p className="font-macchia text-3xl sm:text-4xl lg:text-5xl text-[#FFE500] uppercase tracking-tight">
            TRE LIBRI. UN MARE. UN PONTE.
          </p>
          <p className="mt-3 font-mono text-xs sm:text-sm text-[#22E57A] font-bold uppercase tracking-wider">
            DISABILITÀ CONTRO CORRENTE · IO RESPIRO MARE · #PROCIDANONDEVEMORIRE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Main Manifesto Column */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#22E57A] flex items-center justify-center text-[#071A42] font-black shadow-md">
                <Waves className="w-5 h-5 text-[#071A42]" />
              </div>
              <div>
                <h3 className="font-macchia text-xl uppercase tracking-tight text-white">
                  {eventConfig.event.title}
                </h3>
                <p className="font-mono text-xs font-bold text-[#FFE500] uppercase tracking-wider">
                  CON SALVATORE CIMMINO
                </p>
              </div>
            </div>

            <p className="font-macchia text-2xl sm:text-3xl text-white max-w-md leading-tight uppercase">
              DA MONTE DI PROCIDA A PROCIDA
            </p>

            <div className="font-mono text-xs text-white/80 space-y-1">
              <p>
                <strong className="text-[#FFE500]">ORGANIZZATO DA:</strong> Vela Latina Monte di Procida | Laboratorio Cumano | Io Respiro Mare
              </p>
              <p className="text-[#22E57A]">
                3 Ottobre 2026 · Acquamorta Ore 9:00 → Punta Lingua Ore 12:30 circa
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4 font-mono">
            <p className="text-xs uppercase tracking-wider text-[#FFE500] font-bold">
              Navigazione Tappa
            </p>
            <ul className="space-y-2 text-xs font-bold tracking-wider uppercase text-white/90">
              <li>
                <Link href="#iniziativa" className="hover:text-[#22E57A] transition-colors">
                  L&apos;Iniziativa Flegrea
                </Link>
              </li>
              <li>
                <Link href="#salvatore" className="hover:text-[#22E57A] transition-colors">
                  Salvatore Cimmino
                </Link>
              </li>
              <li>
                <Link href="#percorso" className="hover:text-[#22E57A] transition-colors">
                  Rotta della Traversata
                </Link>
              </li>
              <li>
                <Link href="#libri" className="hover:text-[#22E57A] transition-colors">
                  I 3 Libri &amp; Scuole
                </Link>
              </li>
              <li>
                <Link href="#programma" className="hover:text-[#22E57A] transition-colors">
                  Programma 3 Ottobre
                </Link>
              </li>
              <li>
                <Link href="#locandina" className="hover:text-[#22E57A] transition-colors">
                  Locandina Ufficiale
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts & Social Column */}
          <div className="md:col-span-3 space-y-4 font-mono">
            <p className="text-xs uppercase tracking-wider text-[#FFE500] font-bold">
              Contatti &amp; Info
            </p>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-white/60 block">Informazioni generali:</span>
                <a
                  href={`mailto:${eventConfig.contact.email}`}
                  className="text-white hover:text-[#22E57A] transition-colors font-bold"
                >
                  {eventConfig.contact.email}
                </a>
              </div>

              <div>
                <span className="text-white/60 block">Ufficio stampa:</span>
                <a
                  href={`mailto:${eventConfig.contact.pressEmail}`}
                  className="text-white hover:text-[#22E57A] transition-colors font-bold"
                >
                  {eventConfig.contact.pressEmail}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-2 flex items-center gap-3">
              {eventConfig.contact.social.instagram && (
                <a
                  href={eventConfig.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#22E57A] hover:text-[#071A42] text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {eventConfig.contact.social.facebook && (
                <a
                  href={eventConfig.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#22E57A] hover:text-[#071A42] text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {eventConfig.contact.social.youtube && (
                <a
                  href={eventConfig.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-[#22E57A] hover:text-[#071A42] text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
          <p>
            © {new Date().getFullYear()} A Nuoto nei Mari del Globo · Tappa Campi Flegrei con Salvatore Cimmino.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-[#FFE500] hover:text-white transition-colors cursor-pointer"
          >
            <span>Torna all&apos;inizio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
