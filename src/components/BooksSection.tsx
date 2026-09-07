"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, GraduationCap, Quote, Landmark } from "lucide-react";
import { eventConfig } from "@/config/event";

export function BooksSection() {
  return (
    <section
      id="libri"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#071A42] text-white border-t border-white/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFE500] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#FFE500]/40">
            <GraduationCap className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>PERCORSO EDUCATIVO &middot; SCUOLE &amp; COMUNITÀ</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.books.title}
          </h2>

          <p className="mt-3 font-mono text-xs sm:text-sm text-[#22E57A] font-bold uppercase tracking-widest">
            {eventConfig.books.subtitle}
          </p>

          <p className="mt-4 font-mono text-xs sm:text-sm text-white/85 max-w-2xl mx-auto leading-relaxed">
            {eventConfig.books.description}
          </p>
        </div>

        {/* 3 Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventConfig.books.items.map((book) => (
            <div
              key={book.id}
              className="p-8 rounded-3xl bg-[#1257C9] border-2 border-white/20 shadow-2xl hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Book Cover Container */}
                {book.buyUrl ? (
                  <a
                    href={book.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#071A42] mb-6 border border-white/20 shadow-inner group/cover cursor-pointer"
                  >
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover group-hover/cover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FFE500] text-[#071A42] text-[10px] font-mono font-bold uppercase z-10">
                      {book.theme}
                    </div>
                    <div className="absolute inset-0 bg-[#071A42]/60 opacity-0 group-hover/cover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <span className="px-4 py-2 rounded-xl bg-[#FFE500] text-[#071A42] font-mono font-extrabold text-xs uppercase tracking-wider shadow-lg">
                        {book.buyLabel || "SCOPRI IL LIBRO ↗"}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#071A42] mb-6 border border-white/20 shadow-inner">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FFE500] text-[#071A42] text-[10px] font-mono font-bold uppercase">
                      {book.theme}
                    </div>
                  </div>
                )}

                <h3 className="font-macchia text-2xl text-white uppercase mb-1 leading-tight">
                  {book.title}
                </h3>

                <p className="font-mono text-xs text-[#22E57A] font-bold uppercase tracking-wider mb-4">
                  Autore: {book.author}
                </p>

                <p className="font-mono text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
                  {book.description}
                </p>

                {book.buyUrl && (
                  <div className="mb-6">
                    <a
                      href={book.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE500] hover:bg-yellow-300 text-[#071A42] font-mono font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{book.buyLabel || "DISPONIBILE ONLINE ↗"}</span>
                    </a>
                  </div>
                )}
              </div>

              {book.quote && (
                <div className="p-4 rounded-xl bg-[#071A42] border-l-3 border-[#FFE500] font-mono text-xs text-white/90 italic flex items-start gap-2">
                  <Quote className="w-4 h-4 text-[#FFE500] shrink-0 mt-0.5" />
                  <span>&ldquo;{book.quote}&rdquo;</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note on Piccolo Museo del Mare meetings */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1257C9]/40 border border-white/20 text-center font-mono text-xs text-white/80 max-w-3xl mx-auto flex items-center justify-center gap-3">
          <Landmark className="w-5 h-5 text-[#FFE500] shrink-0" />
          <span>
            I libri sono stati al centro degli incontri culturali presso la sede del <strong>Piccolo Museo del Mare</strong> di Monte di Procida, ponendo le basi per questa grande traversata condivisa.
          </span>
        </div>
      </div>
    </section>
  );
}
