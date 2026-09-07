"use client";

import React, { useState, useEffect } from "react";
import { Timer, Calendar, Bell } from "lucide-react";
import { eventConfig } from "@/config/event";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const target = new Date(eventConfig.event.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const units = [
    { label: "GIORNI", value: timeLeft.days, subtitle: "Alla partenza" },
    { label: "ORE", value: timeLeft.hours, subtitle: "Di preparazione" },
    { label: "MINUTI", value: timeLeft.minutes, subtitle: "Verso il tuffo" },
    { label: "SECONDI", value: timeLeft.seconds, subtitle: "Al primo colpo di bracciata" },
  ];

  return (
    <section
      id="countdown"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#071A42] text-white border-y-2 border-white/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#22E57A] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-[#22E57A]/40">
            <span className="w-2 h-2 rounded-full bg-[#22E57A] animate-ping" />
            <Timer className="w-3.5 h-3.5 text-[#22E57A]" />
            <span>DATA CONFERMATA ...PER ORA · COUNTDOWN</span>
          </div>

          <h2 className="text-fluid-headline font-macchia text-white tracking-tight uppercase">
            IL TEMPO DEL MARE
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/80 font-mono max-w-xl mx-auto">
            Ogni secondo ci avvicina alla grande traversata a nuoto nei Campi Flegrei.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#071A42] bg-[#FFE500] px-4 py-1.5 rounded-full shadow-md">
            <Calendar className="w-3.5 h-3.5 text-[#071A42]" />
            <span>SABATO 3 OTTOBRE 2026 · ORE 09:00</span>
          </div>

          <p className="mt-3 text-xs font-mono font-bold text-[#22E57A] max-w-xl mx-auto">
            * {eventConfig.event.weatherNotice}
          </p>
        </div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {units.map((unit, index) => (
            <div
              key={unit.label}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#1257C9] border-2 border-white/20 shadow-2xl hover:border-[#22E57A] transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Strip */}
              <div className="absolute top-0 left-1/3 right-1/3 h-[3px] bg-[#FFE500] rounded-full" />

              {/* Big Macchia Numbers */}
              <div className="relative font-macchia text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-md">
                {mounted ? formatNumber(unit.value) : "--"}
              </div>

              {/* Label */}
              <div className="mt-2 font-mono font-bold text-xs sm:text-sm tracking-widest text-[#FFE500] uppercase">
                {unit.label}
              </div>

              <p className="mt-1 text-[11px] font-mono text-white/70 hidden sm:block">
                {unit.subtitle}
              </p>

              <span className="absolute bottom-3 right-4 text-[10px] font-mono font-bold text-white/40">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Schedule Highlight Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-mono text-xs">
            <p className="font-bold text-white text-sm">PARTENZA DA ACQUAMORTA ORE 9:00</p>
            <p className="text-[#FFE500] mt-1 font-semibold">
              Nota: La traversata e gli orari sono strettamente subordinati alle condizioni meteo-marine favorevoli nel Canale di Procida.
            </p>
          </div>

          <a
            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
              "A Nuoto nei Mari del Globo · Tappa Campi Flegrei (Salvatore Cimmino)"
            )}&dates=20261003T070000Z/20261003T123000Z&details=${encodeURIComponent(
              "Traversata a nuoto di Salvatore Cimmino da Monte di Procida (Acquamorta) a Procida (Punta Lingua). Organizzato da: Vela Latina Monte di Procida, Laboratorio Cumano, Io Respiro Mare.\nTre Libri. Un Mare. Un Ponte.\n*Nota: Data e orari soggetti a condizioni meteo-marine."
            )}&location=${encodeURIComponent("Acquamorta, Monte di Procida (NA) → Procida")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#22E57A] hover:bg-[#FFE500] text-[#071A42] font-mono font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all duration-300 shrink-0 hover:scale-105 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#071A42]" />
            <span>BLOCCA IL 3 OTTOBRE ⚡</span>
          </a>
        </div>
      </div>
    </section>
  );
}
