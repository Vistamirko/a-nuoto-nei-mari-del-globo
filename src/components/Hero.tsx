"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Clock, Award, Sparkles, HeartHandshake } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[96vh] flex flex-col justify-between pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1257C9] text-white"
    >
      {/* Centerpiece Typographic Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-2 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Titles Column */}
          <div className="lg:col-span-8">
            {/* Monumental Macchia Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-fluid-giant font-macchia text-white leading-[0.86] tracking-tight drop-shadow-sm select-none">
                <span className="block font-macchia text-[#071A42]">A NUOTO</span>
                <span className="block font-macchia text-[#071A42]">NEI MARI</span>
                <span className="block font-macchia text-white">DEL GLOBO</span>
              </h1>
            </div>

            {/* Protagonist Subtitle */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3">
              <span className="font-mono text-base sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wide text-white bg-[#071A42] px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-xl border border-white/20 inline-block leading-tight">
                <span className="block sm:inline">UN&apos;IMPRESA DI</span>{" "}
                <span className="block sm:inline">SALVATORE CIMMINO</span>
              </span>
            </div>

            {/* Slogan Claim & Mission */}
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-[#071A42]/90 border-2 border-white/20 backdrop-blur-md max-w-2xl shadow-xl">
              <p className="font-macchia text-xl sm:text-2xl lg:text-3xl text-[#FFE500] leading-tight uppercase">
                PER UN MONDO SENZA BARRIERE E SENZA FRONTIERE
              </p>
              <p className="mt-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#22E57A]">
                PER GLI STUDENTI CON DISABILITÀ DEI CAMPI FLEGREI &middot; 3 OTTOBRE 2026
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#iniziativa"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#FFE500] hover:bg-yellow-400 text-[#071A42] font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-black/20 hover:scale-105"
              >
                <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-[#071A42]" />
                <span>SCOPRI L&apos;INIZIATIVA SOCIALE</span>
              </Link>

              <Link
                href="#locandina"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#071A42] hover:bg-[#0A2560] text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/30 backdrop-blur-md transition-all shadow-lg hover:scale-105"
              >
                <span>LOCANDINA UFFICIALE</span>
                <ArrowDown className="w-4 h-4 text-[#22E57A] animate-bounce" />
              </Link>
            </div>
          </div>

          {/* Right Column: Salvatore's Photo & 3 Ottobre Details */}
          <div className="lg:col-span-4 space-y-4">
            {/* Salvatore Cimmino Profile Card */}
            <div className="p-4 rounded-3xl bg-[#071A42]/95 border-2 border-white/20 shadow-2xl backdrop-blur-md flex items-center gap-4 group">
              <div className="relative w-20 h-28 sm:w-24 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-[#FFE500] shadow-md bg-[#040F28]">
                <Image
                  src={eventConfig.salvatore.imageSrc}
                  alt={eventConfig.salvatore.name}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-center font-mono">
                <div className="inline-flex items-center gap-1.5 text-[10px] text-[#22E57A] font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3 text-[#FFE500]" />
                  <span>Protagonista</span>
                </div>
                <h3 className="font-macchia text-lg sm:text-xl text-white uppercase leading-tight">
                  {eventConfig.salvatore.name}
                </h3>
                <p className="text-[11px] text-white/70 mt-1 leading-snug">
                  Nuotatore per i Diritti &amp; l&apos;Inclusione
                </p>
              </div>
            </div>

            {/* 3 OTTOBRE Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#071A42]/95 border-2 border-[#FFE500] shadow-2xl space-y-3 sm:space-y-4 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/15 pb-2 sm:pb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22E57A]/20 border border-[#22E57A]/40 text-[#22E57A] font-mono text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#22E57A] animate-pulse" />
                  <span>DATA CONFERMATA ...PER ORA</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-macchia text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
                  SABATO 3 OTTOBRE 2026
                </div>
                <div className="font-macchia text-2xl sm:text-3xl text-[#FFE500] tracking-tight leading-none pt-1">
                  ORE 09:00
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3 font-mono text-xs pt-1 sm:pt-2">
                <div className="flex items-start gap-2.5 bg-white/10 p-2.5 sm:p-3 rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22E57A] mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-[#22E57A] block">MARINA DI MONTE DI PROCIDA</span>
                    <span className="text-white/80">ORE 09:00 · Partenza traversata da Acquamorta</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/10 p-2.5 sm:p-3 rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFE500] mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-[#FFE500] block">PUNTA LINGUA | PROCIDA</span>
                    <span className="text-white/80">ORE 12:30 CIRCA · Arrivo, incontro e festa</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-3 border-t border-white/15 space-y-1 sm:space-y-2 text-center">
                <p className="text-[11px] font-mono text-[#FFE500] font-bold leading-tight">
                  * Data e orari soggetti a possibili variazioni in base alle condizioni meteo-marine.
                </p>
                <p className="text-[10px] font-mono text-white/60 tracking-wider uppercase">
                  DISABILITÀ CONTROCORRENTE · IO RESPIRO MARE · #PROCIDANONDEVEMORIRE
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Organizers & Patronage Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-white/20">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/90">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[#22E57A] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#22E57A]" />
              CON IL PATROCINIO MORALE:
            </span>
            <span className="text-white font-semibold">COMUNE DI MONTE DI PROCIDA &middot; COMUNE DI PROCIDA</span>
          </div>

          <div className="flex items-center gap-2 text-white/75 text-[11px] sm:text-xs">
            <Award className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>ORGANIZZATO DA: VELA LATINA MONTE DI PROCIDA &middot; LABORATORIO CUMANO &middot; IO RESPIRO MARE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
