"use client";

import React from "react";
import { MapPin, Navigation, Anchor, Flag, Waves } from "lucide-react";
import { eventConfig } from "@/config/event";

export function RouteMap() {
  const stages = [
    {
      number: "01",
      name: "ACQUAMORTA",
      time: "ORE 09:00",
      location: "Monte di Procida · Molo di Partenza",
      description: "Raduno della comunità, saluto inaugurale e tuffo di Salvatore Cimmino.",
      tag: "PARTENZA",
      tagColor: "bg-[#22E57A] text-[#071A42]",
    },
    {
      number: "02",
      name: "CANALE & GIRO DI PROCIDA",
      time: "DURANTE LA MATTINA",
      location: "Canale di Procida & Scogliere dell'isola",
      description: "Traversata a nuoto scortata da imbarcazioni in Vela Latina e supporto di sicurezza.",
      tag: "TRAVERSATA",
      tagColor: "bg-[#FFE500] text-[#071A42]",
    },
    {
      number: "03",
      name: "PUNTA LINGUA / PROCIDA",
      time: "ORE 12:30 CIRCA",
      location: "Punta Lingua · Piazza Marina Grande",
      description: "Applauso all'approdo, incontro pubblico con la cittadinanza, studenti e istituzioni.",
      tag: "TRAGUARDO & FESTA",
      tagColor: "bg-[#22E57A] text-[#071A42]",
    },
  ];

  return (
    <section
      id="percorso"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1257C9] text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A42] text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#22E57A]/40 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-[#22E57A]" />
            <span>ROTTI FLEGREA · 3 OTTOBRE</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.route.title}
          </h2>

          <p className="mt-3 font-macchia text-xl sm:text-2xl text-[#FFE500] uppercase">
            {eventConfig.route.claim}
          </p>

          <p className="mt-3 font-mono text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
            Da Monte di Procida a Procida: la rotta del nuoto e della vela latina nel golfo di Napoli.
          </p>
        </div>

        {/* 3 Stage Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="p-8 rounded-3xl bg-[#071A42] border-2 border-white/20 shadow-2xl hover:border-[#FFE500] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-macchia text-4xl text-[#FFE500]">
                    {stage.number}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${stage.tagColor}`}>
                    {stage.tag}
                  </span>
                </div>

                <h3 className="font-macchia text-2xl sm:text-3xl text-white uppercase mb-1 leading-tight">
                  {stage.name}
                </h3>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#22E57A] uppercase mb-3">
                  <Waves className="w-3.5 h-3.5 text-[#22E57A]" />
                  <span>{stage.time}</span>
                </div>

                <p className="font-mono text-xs text-white/60 mb-3 uppercase tracking-wider">
                  {stage.location}
                </p>

                <p className="font-mono text-xs sm:text-sm text-white/85 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>Rotta Nautica</span>
                <span className="text-[#FFE500] font-bold">#3OTTOBRE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
