"use client";

import React from "react";
import { Flag, Waves, Sparkles, Calendar, School, Users, UserCheck } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Program() {
  const stepIcons = [School, Users, Waves, UserCheck];

  return (
    <section
      id="programma"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1257C9] text-white"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A42] text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#22E57A]/40 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#22E57A]" />
            <span>SABATO 3 OTTOBRE 2026</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.program.title}
          </h2>

          <p className="mt-3 font-mono text-xs sm:text-sm text-[#FFE500] font-bold uppercase tracking-wider max-w-xl mx-auto">
            {eventConfig.program.subtitle}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-6">
          {eventConfig.program.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div
                key={step.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#071A42] border-2 border-white/20 shadow-2xl hover:border-[#FFE500] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1257C9] flex items-center justify-center text-[#FFE500] shrink-0 border border-white/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] font-mono font-bold text-[#22E57A] uppercase tracking-wider">
                        {step.phase}
                      </span>
                      <span className="text-[11px] font-mono text-white/50">·</span>
                      <span className="text-xs font-mono font-bold text-[#FFE500]">
                        {step.time}
                      </span>
                    </div>

                    <h3 className="font-macchia text-xl sm:text-2xl text-white uppercase leading-tight">
                      {step.title}
                    </h3>

                    <p className="font-mono text-xs text-white/60 mb-2 uppercase">
                      {step.location}
                    </p>

                    <p className="font-mono text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                <span className="font-macchia text-3xl sm:text-4xl text-white/30 shrink-0 self-end sm:self-center">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>

        {/* Weather Conditions Notice */}
        <div className="mt-8 p-5 rounded-2xl bg-[#071A42] border border-[#FFE500]/50 text-center font-mono text-xs text-white/90">
          <p className="text-[#FFE500] font-bold mb-1">
            * AVVISO CONDIZIONI METEO-MARINE
          </p>
          <p className="text-white/80 max-w-2xl mx-auto">
            {eventConfig.program.note}
          </p>
        </div>
      </div>
    </section>
  );
}
