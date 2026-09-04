"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Waves, MapPin, Compass, Clock, BookOpen, Award } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1257C9] text-white"
    >
      {/* Background Subtle Nautical Grid & Vector Waves */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top Territory Badge & Coordinates */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#071A42] text-[#22E57A] text-xs sm:text-sm font-mono font-bold tracking-wider uppercase border border-[#22E57A]/40 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22E57A] animate-ping" />
            <MapPin className="w-4 h-4 text-[#22E57A]" />
            <span>DA MONTE DI PROCIDA A PROCIDA</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-white tracking-widest bg-[#071A42]/90 px-4 py-2 rounded-full border border-white/20">
            <Compass className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>40°47′N · 14°02′E</span>
          </div>
        </div>
      </div>

      {/* Centerpiece Typographic Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
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
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-white bg-[#071A42] px-4 py-1.5 rounded-xl border border-white/20 inline-block">
                CON SALVATORE CIMMINO
              </span>
            </div>

            {/* Slogan Claim */}
            <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-[#071A42]/90 border-2 border-white/20 backdrop-blur-md max-w-2xl">
              <p className="font-macchia text-2xl sm:text-3xl lg:text-4xl text-[#FFE500] leading-none uppercase">
                TRE LIBRI. UN MARE. UN PONTE.
              </p>
              <p className="mt-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
                A NUOTO E IN VELA LATINA · {eventConfig.event.dateLabel}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#countdown"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#FFE500] hover:bg-yellow-400 text-[#071A42] font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-black/20 hover:scale-105"
              >
                <Clock className="w-5 h-5 text-[#071A42]" />
                <span>3 OTTOBRE · COUNTDOWN</span>
              </Link>

              <Link
                href="#locandina"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#071A42] hover:bg-[#0A2560] text-white font-mono font-bold text-sm tracking-wider uppercase border border-white/30 backdrop-blur-md transition-all shadow-lg hover:scale-105"
              >
                <span>LOCANDINA UFFICIALE</span>
                <ArrowDown className="w-4 h-4 text-[#22E57A] animate-bounce" />
              </Link>
            </div>
          </div>

          {/* Quick Route Box Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* 3 OTTOBRE Card */}
            <div className="p-6 rounded-3xl bg-[#071A42] border-2 border-[#FFE500] shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs font-bold text-[#FFE500] uppercase tracking-widest">
                  DATA UFFICIALE
                </span>
                <span className="w-3 h-3 rounded-full bg-[#22E57A] animate-pulse" />
              </div>

              <div className="font-macchia text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none whitespace-nowrap">
                3 OTTOBRE
              </div>

              <div className="space-y-3 font-mono text-xs pt-2">
                <div className="flex items-start gap-2.5 bg-white/10 p-3 rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22E57A] mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-[#22E57A] block">ACQUAMORTA</span>
                    <span className="text-white/80">ORE 09:00 · Partenza traversata</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/10 p-3 rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFE500] mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-[#FFE500] block">PUNTA LINGUA | PROCIDA</span>
                    <span className="text-white/80">ORE 12:30 CIRCA · Arrivo e festa</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 space-y-2 text-center">
                <p className="text-[11px] font-mono text-[#FFE500] font-bold leading-tight">
                  * Data e orari soggetti a possibili variazioni in base alle condizioni meteo-marine.
                </p>
                <p className="text-[10px] font-mono text-white/60 tracking-wider uppercase">
                  #PROCIDANONDEVEMORIRE · IO RESPIRO MARE
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Organizers Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-white/20">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/90">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#FFE500]" />
            <span className="font-bold text-[#FFE500]">ORGANIZZATO DA:</span>
            <span>VELA LATINA MONTE DI PROCIDA · LABORATORIO CUMANO · IO RESPIRO MARE</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-white/70">
            <span>DISABILITÀ CONTRO CORRENTE</span>
            <span>·</span>
            <span>IO RESPIRO MARE</span>
            <span>·</span>
            <span>#PROCIDANONDEVEMORIRE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
