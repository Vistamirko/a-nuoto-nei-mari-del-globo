"use client";

import React from "react";
import { Compass, Flame, HeartHandshake, ShieldCheck, Waves, Landmark, School } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Initiative() {
  const icons = [School, HeartHandshake, Waves];

  return (
    <section
      id="iniziativa"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1257C9] text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A42] text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#22E57A]/40 shadow-sm">
            <Waves className="w-3.5 h-3.5 text-[#22E57A]" />
            <span>DIRITTI, SCUOLE &amp; COMUNITÀ</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.initiative.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#FFE500] font-mono font-bold max-w-2xl mx-auto">
            {eventConfig.initiative.subtitle}
          </p>

          <p className="mt-4 text-xs sm:text-sm text-white/90 font-mono leading-relaxed max-w-3xl mx-auto">
            {eventConfig.initiative.intro}
          </p>
        </div>

        {/* 3 Core Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventConfig.initiative.coreThemes.map((theme, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={theme.title}
                className="p-8 rounded-3xl bg-[#071A42] border-2 border-white/20 shadow-2xl hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1257C9] flex items-center justify-center text-[#FFE500] mb-6 border border-white/20">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono font-bold text-[#22E57A] tracking-wider uppercase block mb-1">
                    Tema Centrale 0{index + 1}
                  </span>

                  <h3 className="font-macchia text-2xl sm:text-3xl text-white uppercase mb-4 leading-tight">
                    {theme.title}
                  </h3>

                  <p className="font-mono text-xs sm:text-sm text-white/80 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>Campi Flegrei &middot; Procida</span>
                  <span className="text-[#FFE500] font-bold">#3OTTOBRE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergenza Bradisismo, Diritto allo Studio & Genesi */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Focus Emergenza Sisma & Scuole */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#071A42] border-2 border-[#FFE500] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE500] text-[#071A42] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#071A42]" />
                <span>EMERGENZA SCUOLE &amp; BRADISISMO</span>
              </div>
              <h3 className="font-macchia text-2xl sm:text-3xl text-white uppercase leading-tight mb-4">
                DIFENDERE IL DIRITTO ALLO STUDIO
              </h3>
              <p className="font-mono text-xs sm:text-sm text-white/90 leading-relaxed">
                {eventConfig.initiative.territoryInsight}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#22E57A] font-bold uppercase">
              &ldquo;Nessuno studente deve essere lasciato indietro&rdquo;
            </div>
          </div>

          {/* Genesi e Sinergia Piccolo Museo del Mare */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#071A42] border-2 border-[#22E57A] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22E57A] text-[#071A42] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Landmark className="w-3.5 h-3.5 text-[#071A42]" />
                <span>LA GENESI DELL&apos;INIZIATIVA</span>
              </div>
              <h3 className="font-macchia text-2xl sm:text-3xl text-white uppercase leading-tight mb-4">
                DALLA SEDE DEL PICCOLO MUSEO DEL MARE
              </h3>
              <p className="font-mono text-xs sm:text-sm text-white/90 leading-relaxed">
                {eventConfig.initiative.genesisStory}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#FFE500] font-bold uppercase">
              Vela Latina Monte di Procida &middot; Laboratorio Cumano &middot; Io Respiro Mare
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
