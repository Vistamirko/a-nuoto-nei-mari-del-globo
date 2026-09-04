"use client";

import React from "react";
import { Building2, Shield, Award } from "lucide-react";
import { eventConfig, PartnerItem } from "@/config/event";

export function Partners() {
  const organizers = [
    { name: "VELA LATINA MONTE DI PROCIDA", role: "Organizzazione & Supporto Navale" },
    { name: "LABORATORIO CUMANO", role: "Organizzazione Culturale & Territorio" },
    { name: "IO RESPIRO MARE", role: "Organizzazione & Sensibilizzazione Marina" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#071A42] text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Main Organizers Spotlight from Poster */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#1257C9] border-2 border-[#FFE500] shadow-2xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071A42] text-[#FFE500] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>PROMOTORI DELLA TAPPA</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-macchia text-white uppercase tracking-tight mb-2">
            ORGANIZZATO DA
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {organizers.map((org) => (
              <div
                key={org.name}
                className="p-6 rounded-2xl bg-[#071A42] border border-white/20 shadow-lg text-center"
              >
                <h4 className="font-macchia text-xl text-[#FFE500] uppercase mb-2">
                  {org.name}
                </h4>
                <p className="font-mono text-xs text-white/80 uppercase tracking-wider">
                  {org.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Institutions & Community Partners */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#22E57A]" />
            <span>PATROCINI &amp; SOSTENITORI</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-macchia text-white uppercase tracking-tight">
            ISTITUZIONI E RETE TERRITORIALE
          </h4>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventConfig.partners.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-2xl bg-white/5 border border-white/15 hover:border-[#22E57A] transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/10 text-[#22E57A] border border-[#22E57A]/30 mb-3 font-bold">
                  {partner.role}
                </span>

                <h5 className="text-base sm:text-lg font-mono font-bold text-white">
                  {partner.name}
                </h5>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/60">
                <Shield className="w-3.5 h-3.5 text-[#FFE500]" />
                <span>Campi Flegrei · Procida</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
