"use client";

import React from "react";
import Image from "next/image";
import { Award, Heart, Sparkles, Quote } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Salvatore() {
  return (
    <section
      id="salvatore"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#071A42] text-white border-t border-white/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden bg-[#1257C9] border-2 border-white/30 shadow-2xl p-4 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#040F28]">
                <Image
                  src={eventConfig.salvatore.imageSrc}
                  alt={eventConfig.salvatore.name}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#071A42]/95 border border-[#22E57A]/40 backdrop-blur-md shadow-xl">
                <span className="text-[11px] font-mono font-bold text-[#22E57A] uppercase tracking-wider block mb-0.5">
                  Testimonianza Civile
                </span>
                <p className="text-base font-macchia text-white uppercase leading-tight">
                  {eventConfig.salvatore.name}
                </p>
                <p className="text-[11px] font-mono text-white/70">
                  {eventConfig.salvatore.role}
                </p>
              </div>
            </div>
          </div>

          {/* Biography & Key Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFE500] text-xs font-mono font-bold uppercase tracking-wider border border-[#FFE500]/40">
              <Award className="w-3.5 h-3.5 text-[#FFE500]" />
              <span>IL PROTAGONISTA</span>
            </div>

            <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
              {eventConfig.salvatore.title}
            </h2>

            {/* Quote block con font scritto */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1257C9] border-l-4 border-[#22E57A] shadow-2xl space-y-3">
              <Quote className="w-7 h-7 text-[#FFE500]" />
              <div className="space-y-1 sm:space-y-2 py-1">
                {eventConfig.salvatore.quoteLines.map((line) => (
                  <p
                    key={line}
                    className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-white font-semibold leading-snug tracking-wide"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Bio paragraphs in Menlo */}
            <div className="space-y-4 font-mono text-xs sm:text-sm text-white/85 leading-relaxed">
              {eventConfig.salvatore.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Key takeaway */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/20 font-mono text-xs sm:text-sm text-white flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#FFE500] shrink-0 mt-0.5" />
              <p className="italic">
                &ldquo;{eventConfig.salvatore.keyMessage}&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
