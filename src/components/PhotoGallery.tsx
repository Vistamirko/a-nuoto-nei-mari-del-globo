"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, X, Eye } from "lucide-react";
import { eventConfig, GalleryItem } from "@/config/event";

export function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section
      id="galleria"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#1257C9] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A42] text-[#FFE500] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#FFE500]/40">
            <Camera className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>RACCONTO FOTOGRAFICO</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            {eventConfig.gallery.title}
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-white/80 font-mono max-w-xl mx-auto">
            {eventConfig.gallery.subtitle}
          </p>
        </div>

        {/* Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Item 1: Wide Swim Hero */}
          <div
            onClick={() => setActivePhoto(eventConfig.gallery.items[0])}
            className="md:col-span-8 group relative aspect-[16/10] rounded-3xl overflow-hidden bg-[#071A42] border-2 border-white/20 shadow-2xl cursor-pointer hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={eventConfig.gallery.items[0].imageSrc}
              alt={eventConfig.gallery.items[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/90 via-[#071A42]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#FFE500] uppercase tracking-wider font-bold">
                  Foto 01
                </span>
                <h3 className="text-xl sm:text-2xl font-macchia text-white uppercase">
                  {eventConfig.gallery.items[0].title}
                </h3>
                <p className="text-xs font-mono text-white/80 mt-1">
                  {eventConfig.gallery.items[0].subtitle}
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#FFE500] text-[#071A42] group-hover:bg-[#22E57A] transition-colors shadow-lg">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Item 2: Vertical Port */}
          <div
            onClick={() => setActivePhoto(eventConfig.gallery.items[1])}
            className="md:col-span-4 group relative aspect-[3/4] md:aspect-auto rounded-3xl overflow-hidden bg-[#071A42] border-2 border-white/20 shadow-2xl cursor-pointer hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={eventConfig.gallery.items[1].imageSrc}
              alt={eventConfig.gallery.items[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/90 via-[#071A42]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#FFE500] uppercase tracking-wider font-bold">
                Foto 02
              </span>
              <h3 className="text-lg font-macchia text-white uppercase">
                {eventConfig.gallery.items[1].title}
              </h3>
              <p className="text-xs font-mono text-white/80 mt-1">
                {eventConfig.gallery.items[1].subtitle}
              </p>
            </div>
          </div>

          {/* Items 3, 4, 5 */}
          <div
            onClick={() => setActivePhoto(eventConfig.gallery.items[2])}
            className="md:col-span-4 group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#071A42] border-2 border-white/20 shadow-2xl cursor-pointer hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={eventConfig.gallery.items[2].imageSrc}
              alt={eventConfig.gallery.items[2].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#FFE500] uppercase tracking-wider font-bold">
                Foto 03
              </span>
              <h3 className="text-lg font-macchia text-white uppercase">
                {eventConfig.gallery.items[2].title}
              </h3>
              <p className="text-xs font-mono text-white/80 mt-1">
                {eventConfig.gallery.items[2].subtitle}
              </p>
            </div>
          </div>

          <div
            onClick={() => setActivePhoto(eventConfig.gallery.items[3])}
            className="md:col-span-4 group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#071A42] border-2 border-white/20 shadow-2xl cursor-pointer hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={eventConfig.gallery.items[3].imageSrc}
              alt={eventConfig.gallery.items[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#FFE500] uppercase tracking-wider font-bold">
                Foto 04
              </span>
              <h3 className="text-lg font-macchia text-white uppercase">
                {eventConfig.gallery.items[3].title}
              </h3>
              <p className="text-xs font-mono text-white/80 mt-1">
                {eventConfig.gallery.items[3].subtitle}
              </p>
            </div>
          </div>

          <div
            onClick={() => setActivePhoto(eventConfig.gallery.items[4])}
            className="md:col-span-4 group relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#071A42] border-2 border-white/20 shadow-2xl cursor-pointer hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={eventConfig.gallery.items[4].imageSrc}
              alt={eventConfig.gallery.items[4].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#FFE500] uppercase tracking-wider font-bold">
                Foto 05
              </span>
              <h3 className="text-lg font-macchia text-white uppercase">
                {eventConfig.gallery.items[4].title}
              </h3>
              <p className="text-xs font-mono text-white/80 mt-1">
                {eventConfig.gallery.items[4].subtitle}
              </p>
            </div>
          </div>

          {/* Panoramic Final */}
          <div
            onClick={() => setActivePhoto(eventConfig.gallery.items[5])}
            className="md:col-span-12 group relative aspect-[21/9] rounded-3xl overflow-hidden bg-[#071A42] border-2 border-white/20 shadow-2xl cursor-pointer hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={eventConfig.gallery.items[5].imageSrc}
              alt={eventConfig.gallery.items[5].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A42]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-[#FFE500] uppercase tracking-wider font-bold">
                  Foto 06
                </span>
                <h3 className="text-xl sm:text-2xl font-macchia text-white uppercase">
                  {eventConfig.gallery.items[5].title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-white/80 mt-1">
                  {eventConfig.gallery.items[5].subtitle}
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#FFE500] text-[#071A42] group-hover:bg-[#22E57A] transition-colors shadow-lg">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-[#071A42]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <button
            onClick={() => setActivePhoto(null)}
            aria-label="Chiudi visualizzazione foto"
            className="absolute top-6 right-6 p-3 rounded-full bg-white text-[#071A42] hover:bg-[#FFE500] transition-colors shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#071A42]">
            <Image
              src={activePhoto.imageSrc}
              alt={activePhoto.alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#071A42] via-[#071A42]/80 to-transparent font-mono">
              <h3 className="text-xl font-macchia text-white uppercase">{activePhoto.title}</h3>
              <p className="text-xs text-[#22E57A] mt-1">{activePhoto.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
