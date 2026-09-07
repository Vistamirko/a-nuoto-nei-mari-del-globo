"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Instagram, Facebook, Phone, Mail } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const institutionalLogos = [
    {
      name: "Comune di Monte di Procida",
      role: "Patrocinio Morale",
      src: "/images/logos/logo-comune-monte-di-procida.webp",
      url: "https://www.comune.montediprocida.na.it/",
    },
    {
      name: "Comune di Procida",
      role: "Patrocinio Morale",
      src: "/images/logos/logo-comune-procida.webp",
      url: "https://www.comune.procida.na.it/",
    },
  ];

  const promoterLogos = [
    {
      name: "A Nuoto nei Mari del Globo",
      role: "Salvatore Cimmino",
      src: "/images/logos/logo-a-nuoto-nei-mari-del-globo.webp",
      url: "#salvatore",
    },
    {
      name: "Vela Latina Monte di Procida",
      role: "Piccolo Museo del Mare",
      src: "/images/logos/logo-vela-latina.webp",
      url: "https://www.instagram.com/velalatinamontediprocida/",
    },
    {
      name: "Laboratorio Cumano",
      role: "Promotore Ispiratore",
      src: "/images/logos/logo-laboratorio-cumano.webp",
      url: "https://www.facebook.com/profile.php?id=100080139925321",
    },
    {
      name: "Io Respiro Mare",
      role: "Mirko Vista",
      src: "/images/logos/logo-io-respiro-mare.svg",
      url: "https://www.instagram.com/iorespiromare/",
    },
  ];

  return (
    <footer className="relative bg-[#040F28] text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Big Slogan Banner */}
        <div className="pb-12 mb-12 border-b border-white/15 text-center">
          <p className="font-macchia text-2xl sm:text-3xl lg:text-4xl text-[#FFE500] uppercase tracking-tight">
            PER UN MONDO SENZA BARRIERE E SENZA FRONTIERE
          </p>
          <p className="mt-3 font-mono text-xs sm:text-sm text-[#22E57A] font-bold uppercase tracking-wider">
            DISABILITÀ CONTROCORRENTE &middot; IO RESPIRO MARE &middot; #PROCIDANONDEVEMORIRE
          </p>
        </div>

        {/* Official Logos Showcase Strip in WebP */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md space-y-8">
          {/* Institutional Patronages */}
          <div>
            <div className="text-center mb-5">
              <span className="text-xs font-mono font-bold text-[#22E57A] uppercase tracking-widest block">
                CON IL PATROCINIO MORALE DEI COMUNI DI:
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center justify-items-center max-w-xl mx-auto">
              {institutionalLogos.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#22E57A] transition-all w-full max-w-[220px] text-center"
                >
                  <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-white shadow-md p-1.5 border border-white/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Image
                      src={item.src}
                      alt={`Stemma ${item.name}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[12px] font-mono text-white group-hover:text-[#22E57A] transition-colors leading-tight font-bold">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#22E57A] uppercase">
                    {item.role}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="text-center mb-5">
              <span className="text-xs font-mono font-bold text-[#FFE500] uppercase tracking-widest block">
                PROMOTORI ED ENTI ORGANIZZATORI
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
              {promoterLogos.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFE500] transition-all w-full max-w-[180px] text-center"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white shadow-md p-1.5 border border-white/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Image
                      src={item.src}
                      alt={`Logo ${item.name}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-white/80 group-hover:text-[#FFE500] transition-colors leading-tight font-bold">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Main Manifesto Column */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md shrink-0 border border-white/40 p-0.5">
                <Image
                  src="/images/logos/logo-a-nuoto-nei-mari-del-globo.webp"
                  alt="Logo A Nuoto Nei Mari Del Globo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-macchia text-xl uppercase tracking-tight text-white">
                  {eventConfig.event.title}
                </h3>
                <p className="font-mono text-xs font-bold text-[#FFE500] uppercase tracking-wider">
                  UN&apos;IMPRESA DI SALVATORE CIMMINO
                </p>
              </div>
            </div>

            <p className="font-macchia text-xl sm:text-2xl text-white max-w-md leading-tight uppercase">
              DALLA MARINA DI MONTE DI PROCIDA A PROCIDA
            </p>

            <div className="font-mono text-xs text-white/80 space-y-1.5">
              <p>
                <strong className="text-[#22E57A]">CON IL PATROCINIO MORALE:</strong> Comune di Monte di Procida &middot; Comune di Procida
              </p>
              <p>
                <strong className="text-[#FFE500]">ORGANIZZATO DA:</strong> Vela Latina Monte di Procida (Piccolo Museo del Mare) | Laboratorio Cumano | Io Respiro Mare (Mirko Vista)
              </p>
              <p className="text-[#22E57A]">
                Sabato 3 Ottobre 2026 &middot; Marina di Monte di Procida (Acquamorta) Ore 09:00 &rarr; Procida Ore 12:30 circa
              </p>
              <p className="text-white/60">
                Dedicato agli studenti e alle studentesse con disabilità dei Campi Flegrei.
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4 font-mono">
            <p className="text-xs uppercase tracking-wider text-[#FFE500] font-bold">
              Navigazione
            </p>
            <ul className="space-y-2 text-xs font-bold tracking-wider uppercase text-white/90">
              <li>
                <Link href="#iniziativa" className="hover:text-[#22E57A] transition-colors">
                  L&apos;Iniziativa Sociale
                </Link>
              </li>
              <li>
                <Link href="#salvatore" className="hover:text-[#22E57A] transition-colors">
                  Salvatore Cimmino
                </Link>
              </li>
              <li>
                <Link href="#percorso" className="hover:text-[#22E57A] transition-colors">
                  Rotta della Traversata
                </Link>
              </li>
              <li>
                <Link href="#libri" className="hover:text-[#22E57A] transition-colors">
                  I 3 Libri &amp; Scuole
                </Link>
              </li>
              <li>
                <Link href="#programma" className="hover:text-[#22E57A] transition-colors">
                  Programma 3 Ottobre
                </Link>
              </li>
              <li>
                <Link href="#locandina" className="hover:text-[#22E57A] transition-colors">
                  Locandina Ufficiale
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts & Social Column */}
          <div className="md:col-span-3 space-y-4 font-mono">
            <p className="text-xs uppercase tracking-wider text-[#FFE500] font-bold">
              Contatti &amp; Info
            </p>
            <div className="space-y-4 text-xs">
              {eventConfig.contact.persons.map((person) => (
                <div key={person.name} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-white font-bold block text-[13px]">{person.name}</span>
                  {person.role && (
                    <span className="text-[#22E57A] text-[10px] uppercase font-semibold block">
                      {person.role}
                    </span>
                  )}
                  <div className="pt-1 space-y-1">
                    <a
                      href={`tel:${person.phoneRaw}`}
                      className="text-white/90 hover:text-[#FFE500] transition-colors flex items-center gap-1.5 font-bold"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FFE500]" />
                      <span>{person.phone}</span>
                    </a>
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="text-white/80 hover:text-[#22E57A] transition-colors flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#22E57A]" />
                        <span>{person.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Channels of Associations */}
            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <span className="text-[11px] text-[#FFE500] uppercase font-bold block tracking-wider">
                Canali Social Ufficiali:
              </span>
              <div className="space-y-2">
                {eventConfig.contact.socialChannels.map((soc) => (
                  <a
                    key={soc.url}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white/85 hover:text-[#22E57A] transition-colors group"
                  >
                    {soc.platform === "instagram" ? (
                      <div className="p-1 rounded bg-white/10 group-hover:bg-[#22E57A] group-hover:text-[#071A42] text-white transition-colors">
                        <Instagram className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="p-1 rounded bg-white/10 group-hover:bg-[#22E57A] group-hover:text-[#071A42] text-white transition-colors">
                        <Facebook className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className="font-semibold">{soc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
          <p>
            &copy; 2026 A Nuoto nei Mari del Globo &middot; Tappa Campi Flegrei con Salvatore Cimmino.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-[#FFE500] hover:text-white transition-colors cursor-pointer"
          >
            <span>Torna all&apos;inizio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
