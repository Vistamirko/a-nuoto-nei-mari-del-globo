"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Maximize2, Download, X, Sparkles } from "lucide-react";
import { eventConfig } from "@/config/event";

export function OfficialPoster() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="locandina"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#071A42] text-white border-t border-white/20"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFE500] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#FFE500]/40">
            <ImageIcon className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>MANIFESTO VISIVO</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.poster.title}
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-white/80 font-mono max-w-xl mx-auto">
            {eventConfig.poster.subtitle}
          </p>
        </div>

        {/* Poster Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Poster Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              onClick={() => setModalOpen(true)}
              className="relative w-full max-w-md aspect-[1/1.3] rounded-3xl overflow-hidden bg-[#1257C9] p-3 border-4 border-white/30 shadow-2xl group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={eventConfig.poster.imageSrc}
                  alt="Locandina Ufficiale dell'evento nei Campi Flegrei"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover overlay with zoom */}
              <div className="absolute inset-0 bg-[#071A42]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm rounded-3xl">
                <button
                  type="button"
                  className="px-6 py-3 rounded-xl bg-[#FFE500] text-[#071A42] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
                >
                  <Maximize2 className="w-4 h-4 text-[#071A42]" />
                  <span>Ingrandisci Manifesto</span>
                </button>
              </div>
            </div>
          </div>

          {/* Details & Info */}
          <div className="lg:col-span-5 space-y-6 font-mono">
            <div className="p-8 rounded-3xl bg-[#1257C9] border-2 border-white/20 shadow-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A42] text-[#22E57A] text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#22E57A]" />
                <span>Pronta per stampa &amp; diffusione</span>
              </div>

              <h3 className="text-2xl font-macchia text-white uppercase leading-tight">
                IL MANIFESTO DELL&apos;INIZIATIVA
              </h3>

              <div className="text-xs text-white/90 leading-relaxed space-y-2">
                <p>
                  <strong>Data:</strong> 3 Ottobre 2026
                </p>
                <p>
                  <strong>Rotta:</strong> Acquamorta (09:00) → Punta Lingua / Procida (12:30 circa)
                </p>
                <p>
                  <strong>Claim:</strong> Tre Libri. Un Mare. Un Ponte.
                </p>
                <p>
                  <strong>Organizzato da:</strong> Vela Latina Monte di Procida, Laboratorio Cumano, Io Respiro Mare.
                </p>
                <p className="text-[#FFE500] font-bold text-[11px] pt-1">
                  * Data e orari soggetti a variazioni in base alle condizioni meteo-marine.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFE500] hover:bg-yellow-400 text-[#071A42] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Visualizza Intera</span>
                </button>

                <a
                  href={eventConfig.poster.imageSrc}
                  download="locandina-a-nuoto-nei-mari-del-globo.svg"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#071A42] hover:bg-[#040F28] text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/30"
                >
                  <Download className="w-4 h-4 text-[#22E57A]" />
                  <span>Scarica File</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#071A42]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <button
            onClick={() => setModalOpen(false)}
            aria-label="Chiudi visualizzazione"
            className="absolute top-6 right-6 p-3 rounded-full bg-white text-[#071A42] hover:bg-yellow-300 transition-colors shadow-2xl"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-3xl max-h-[90vh] w-full aspect-[1/1.3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#1257C9]">
            <Image
              src={eventConfig.poster.imageSrc}
              alt="Locandina Ufficiale Ingrandita"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
