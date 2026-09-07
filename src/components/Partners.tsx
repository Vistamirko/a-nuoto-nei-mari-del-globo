"use client";

import React from "react";
import Image from "next/image";
import { Building2, Shield, Award, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { eventConfig } from "@/config/event";

export function Partners() {
  const patronages = [
    {
      name: "COMUNE DI MONTE DI PROCIDA",
      logo: "/images/logos/logo-comune-monte-di-procida.webp",
      role: "Patrocinio Morale Ufficiale",
      detail: "Sindaco Dott. Salvatore Scotto di Santolo",
      url: "https://www.comune.montediprocida.na.it/",
    },
    {
      name: "COMUNE DI PROCIDA",
      logo: "/images/logos/logo-comune-procida.webp",
      role: "Patrocinio Morale Ufficiale",
      detail: "Sindaco Avv. Luigi Muro",
      url: "https://www.comune.procida.na.it/",
    },
  ];

  const organizers = [
    {
      name: "VELA LATINA MONTE DI PROCIDA",
      logo: "/images/logos/logo-vela-latina.webp",
      role: "Organizzazione & Sede Piccolo Museo del Mare",
      detail: "Presieduta da Antonio Pugliese · Tradizione navale e accoglienza",
      socialUrl: "https://www.instagram.com/velalatinamontediprocida/",
      socialLabel: "@velalatinamontediprocida",
      platform: "instagram" as const,
    },
    {
      name: "LABORATORIO CUMANO",
      logo: "/images/logos/logo-laboratorio-cumano.webp",
      role: "Associazione Promotrice & Ispiratrice",
      detail: "Cultura del territorio flegreo e impegno civico partecipato",
      socialUrl: "https://www.facebook.com/profile.php?id=100080139925321",
      socialLabel: "Laboratorio Cumano",
      platform: "facebook" as const,
    },
    {
      name: "IO RESPIRO MARE",
      logo: "/images/logos/logo-io-respiro-mare.svg",
      role: "Coordinamento Organizzativo & Testimonianza",
      detail: "A cura di Mirko Vista (autore di 'Io Respiro Mare - Storia di un cambiamento') · Traversata & sensibilizzazione",
      socialUrl: "https://www.instagram.com/iorespiromare/",
      socialLabel: "@iorespiromare",
      platform: "instagram" as const,
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#071A42] text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        {/* Official Institutional Patronage Box */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c2d6e] to-[#071A42] border-2 border-[#22E57A] shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22E57A]/20 border border-[#22E57A]/50 text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5 text-[#22E57A]" />
              <span>PATROCINIO ISTITUZIONALE UFFICIALE</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-macchia text-white uppercase tracking-tight mb-3">
              CON IL PATROCINIO DEI COMUNI DI MONTE DI PROCIDA E PROCIDA
            </h3>
            <p className="font-mono text-xs sm:text-sm text-white/80 leading-relaxed">
              L&apos;iniziativa gode del patrocinio morale ufficiale del <strong className="text-[#FFE500]">Comune di Monte di Procida</strong> e del <strong className="text-[#FFE500]">Comune di Procida</strong>, uniti a sostegno del diritto allo studio e dell&apos;inclusione degli alunni con disabilità del territorio flegreo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {patronages.map((pat) => (
              <a
                key={pat.name}
                href={pat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white/5 border border-white/20 hover:border-[#22E57A] transition-all flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left hover:bg-white/10"
              >
                <div className="relative w-20 h-24 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-white shadow-lg p-2 border border-white/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src={pat.logo}
                    alt={`Stemma Ufficiale ${pat.name}`}
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div className="space-y-1">
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#22E57A]/20 text-[#22E57A] border border-[#22E57A]/40">
                    {pat.role}
                  </span>
                  <h4 className="font-macchia text-lg sm:text-xl text-white uppercase leading-tight group-hover:text-[#FFE500] transition-colors">
                    {pat.name}
                  </h4>
                  <p className="font-mono text-xs text-white/70">
                    {pat.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Organizers Spotlight */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#1257C9] border-2 border-[#FFE500] shadow-2xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#071A42] text-[#FFE500] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#FFE500]" />
            <span>PROMOTORI DELL&apos;INIZIATIVA</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-macchia text-white uppercase tracking-tight mb-2">
            ORGANIZZATO DA
          </h3>
          <p className="font-mono text-xs text-white/80 max-w-xl mx-auto mb-8">
            Nato dalla sinergia e dagli incontri culturali presso il Piccolo Museo del Mare di Monte di Procida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organizers.map((org) => (
              <div
                key={org.name}
                className="p-6 rounded-2xl bg-[#071A42] border border-white/20 shadow-lg text-center flex flex-col justify-between group hover:border-[#FFE500] transition-all"
              >
                <div>
                  {/* Official WebP Logo Container */}
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-white shadow-md p-1.5 border border-white/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Image
                      src={org.logo}
                      alt={`Logo ${org.name}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <h4 className="font-macchia text-xl text-[#FFE500] uppercase mb-2">
                    {org.name}
                  </h4>
                  <p className="font-mono text-xs text-[#22E57A] font-bold uppercase tracking-wider mb-2">
                    {org.role}
                  </p>
                  <p className="font-mono text-[11px] text-white/70 leading-relaxed mb-4">
                    {org.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <a
                    href={org.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#FFE500] hover:text-[#071A42] text-xs font-mono font-bold text-white transition-all shadow-sm"
                  >
                    {org.platform === "instagram" ? (
                      <Instagram className="w-3.5 h-3.5" />
                    ) : (
                      <Facebook className="w-3.5 h-3.5" />
                    )}
                    <span>{org.socialLabel}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Institutions & Community Partners */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#22E57A]" />
            <span>RETE E COMUNITÀ DEL TERRITORIO</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-macchia text-white uppercase tracking-tight">
            ISTITUZIONI, SCUOLE E PARTNER
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

                {partner.detail && (
                  <p className="mt-1 text-xs font-mono text-white/60">
                    {partner.detail}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/60">
                <Shield className="w-3.5 h-3.5 text-[#FFE500]" />
                <span>Campi Flegrei &middot; Procida</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
