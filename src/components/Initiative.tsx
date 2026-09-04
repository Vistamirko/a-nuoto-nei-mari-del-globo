"use client";

import React from "react";
import { Compass, Flame, HeartHandshake, ShieldCheck, Waves } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Initiative() {
  const icons = [HeartHandshake, Compass, Flame];

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
            <span>VALORI &amp; TERRITORIO</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.initiative.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-white/90 font-mono font-bold max-w-xl mx-auto">
            {eventConfig.initiative.subtitle}
          </p>

          <p className="mt-4 text-xs sm:text-sm text-white/80 font-mono leading-relaxed max-w-2xl mx-auto">
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
                    Pilastro 0{index + 1}
                  </span>

                  <h3 className="font-macchia text-2xl sm:text-3xl text-white uppercase mb-4 leading-tight">
                    {theme.title}
                  </h3>

                  <p className="font-mono text-xs sm:text-sm text-white/80 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>Campi Flegrei</span>
                  <span className="text-[#FFE500] font-bold">#3OTTOBRE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bradisismo & Resilienza Focus Box */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#071A42] border-2 border-[#FFE500] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE500] text-[#071A42] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#071A42]" />
                <span>BRADISISMO &amp; COMUNITÀ</span>
              </div>
              <h3 className="font-macchia text-3xl sm:text-4xl text-white uppercase leading-tight">
                UN MARE CHE UNISCE
              </h3>
            </div>

            <div className="lg:col-span-8">
              <p className="font-mono text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                {eventConfig.initiative.territoryInsight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
