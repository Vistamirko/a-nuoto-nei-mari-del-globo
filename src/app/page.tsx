import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { Initiative } from "@/components/Initiative";
import { Salvatore } from "@/components/Salvatore";
import { RouteMap } from "@/components/RouteMap";
import { BooksSection } from "@/components/BooksSection";
import { Program } from "@/components/Program";
import { OfficialPoster } from "@/components/OfficialPoster";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ocean-abyss text-salt">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Landing Sections Flow */}
      <main className="flex-grow">
        {/* 1. Hero Immersiva */}
        <Hero />

        {/* 2. Countdown Scenografico Real-Time */}
        <Countdown />

        {/* 3. L'Iniziativa & Bradisismo Flegreo */}
        <Initiative />

        {/* 4. La Storia di Salvatore Cimmino */}
        <Salvatore />

        {/* 5. Il Percorso Nautico Editoriale */}
        <RouteMap />

        {/* 6. Le Scuole e i Tre Libri */}
        <BooksSection />

        {/* 7. Programma Modulare */}
        <Program />

        {/* 8. Locandina Ufficiale */}
        <OfficialPoster />

        {/* 9. Partner & Istituzioni */}
        <Partners />
      </main>

      {/* Footer Editoriale */}
      <Footer />
    </div>
  );
}
