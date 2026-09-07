"use client";

import React from "react";
import Image from "next/image";
import { Navigation, Waves } from "lucide-react";
import { eventConfig } from "@/config/event";

export function RouteMap() {
  const stages = [
    {
      number: "01",
      name: "MARINA DI MONTE DI PROCIDA",
      time: "ORE 09:00",
      location: "Molo di Acquamorta · Partenza",
      description: "Presidio del Comitato di Accoglienza ad Acquamorta: raduno della comunità flegrea e delle scuole, saluto inaugurale e tuffo di Salvatore Cimmino.",
      tag: "COMITATO DI ACCOGLIENZA",
      tagColor: "bg-[#22E57A] text-[#071A42]",
    },
    {
      number: "02",
      name: "CANALE & PERIPLO DI PROCIDA",
      time: "DURANTE LA MATTINA",
      location: "Canale di Procida & Costa dell'Isola",
      description: "La sfida a nuoto nelle acque del canale e lungo il perimetro vulcanico, scortato dalle imbarcazioni tradizionali dell'Associazione Vela Latina Monte di Procida.",
      tag: "TRAVERSATA & SCORTA",
      tagColor: "bg-[#FFE500] text-[#071A42]",
    },
    {
      number: "03",
      name: "APPRODO A PROCIDA",
      time: "ORE 12:30 CIRCA",
      location: "Punta Lingua / Marina Grande · Procida",
      description: "Accoglienza ufficiale del Comitato di Arrivo: abbraccio delle comunità di Procida e Monte di Procida con studenti, cittadini e Istituzioni.",
      tag: "COMITATO DI ARRIVO",
      tagColor: "bg-[#22E57A] text-[#071A42]",
    },
  ];

  return (
    <section
      id="percorso"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1257C9] text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A42] text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#22E57A]/40 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-[#22E57A]" />
            <span>ROTTA DELLA TAPPA &middot; 3 OTTOBRE 2026</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.route.title}
          </h2>

          <p className="mt-3 font-macchia text-xl sm:text-2xl text-[#FFE500] uppercase">
            {eventConfig.route.claim}
          </p>

          <p className="mt-3 font-mono text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
            Dalla Marina di Monte di Procida a Procida: la rotta del nuoto e della vela latina per unire due comunità in un abbraccio di solidarietà.
          </p>
        </div>

        {/* Visual Map & Stages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Visual SVG Map Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[918/1061] rounded-3xl overflow-hidden bg-[#071A42] p-4 sm:p-6 border-2 border-white/20 shadow-2xl flex flex-col justify-between group">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                <span className="text-[#FFE500] font-bold uppercase">MAPPA UFFICIALE DELLA ROTTA</span>
                <span className="text-white/60">40°47′N · 14°02′E</span>
              </div>

              {/* Vector SVG Image */}
              <div className="relative w-full h-[320px] sm:h-[400px] my-4">
                <Image
                  src="/images/mappa.svg"
                  alt="Mappa ufficiale della rotta Marina di Monte di Procida - Procida"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-mono text-[#22E57A]">
                <span>PARTENZA: ACQUAMORTA 09:00</span>
                <span>ARRIVO: PROCIDA 12:30</span>
              </div>
            </div>
          </div>

          {/* 3 Stage Timeline Cards */}
          <div className="lg:col-span-6 space-y-4">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="p-6 rounded-2xl bg-[#071A42] border-2 border-white/15 shadow-xl hover:border-[#FFE500] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-macchia text-2xl text-[#FFE500]">
                      {stage.number} · {stage.name}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${stage.tagColor}`}>
                      {stage.tag}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#22E57A] uppercase mb-2">
                    <Waves className="w-3.5 h-3.5 text-[#22E57A]" />
                    <span>{stage.time}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/70 normal-case">{stage.location}</span>
                  </div>

                  <p className="font-mono text-xs sm:text-sm text-white/85 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
