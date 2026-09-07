import type { Metadata, Viewport } from "next";
import { eventConfig } from "@/config/event";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1257C9",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(eventConfig.meta.siteUrl),
  title: {
    default: "A Nuoto nei Mari del Globo · Salvatore Cimmino (3 Ottobre 2026)",
    template: "%s | A Nuoto nei Mari del Globo",
  },
  description: eventConfig.meta.description,
  applicationName: "A Nuoto nei Mari del Globo",
  authors: [
    { name: "Salvatore Cimmino" },
    { name: "Vela Latina Monte di Procida" },
    { name: "Laboratorio Cumano" },
    { name: "Mirko Vista (Io Respiro Mare)" },
  ],
  creator: "Salvatore Cimmino",
  publisher: "Associazione Vela Latina Monte di Procida",
  keywords: [
    "Salvatore Cimmino",
    "A Nuoto nei Mari del Globo",
    "3 Ottobre 2026",
    "Campi Flegrei",
    "Monte di Procida",
    "Marina di Monte di Procida",
    "Acquamorta",
    "Procida",
    "Canale di Procida",
    "Punta Lingua",
    "Traversata a nuoto",
    "Disabilità",
    "Inclusione",
    "Diritto allo studio",
    "Scuole Campi Flegrei",
    "Emergenza sisma bradisismo",
    "Accessibilità Universale",
    "Vela Latina Monte di Procida",
    "Piccolo Museo del Mare",
    "Laboratorio Cumano",
    "Mirko Vista",
    "Io Respiro Mare",
    "Storia di un cambiamento",
    "Disabilità Controcorrente",
    "Ciro Bruno Linardo",
    "#ProcidaNonDeveMorire",
    "Per un mondo senza barriere e senza frontiere",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "A Nuoto nei Mari del Globo",
    title: "A Nuoto nei Mari del Globo · Un'Impresa di Salvatore Cimmino (3 Ottobre 2026)",
    description:
      "Sabato 3 Ottobre 2026: Salvatore Cimmino nuota dalla Marina di Monte di Procida a Procida per il diritto allo studio degli studenti con disabilità nei Campi Flegrei.",
    images: [
      {
        url: "/images/locandina-ufficiale.png",
        width: 1000,
        height: 1270,
        alt: "Locandina Ufficiale · A Nuoto nei Mari del Globo con Salvatore Cimmino",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Nuoto nei Mari del Globo · Un'Impresa di Salvatore Cimmino (3 Ottobre 2026)",
    description:
      "Dalla Marina di Monte di Procida a Procida: la traversata di Salvatore Cimmino per gli studenti con disabilità dei Campi Flegrei.",
    images: ["/images/locandina-ufficiale.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Sports & Social Impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        "@id": `${eventConfig.meta.siteUrl}/#event`,
        name: "A Nuoto nei Mari del Globo · Un'Impresa di Salvatore Cimmino",
        description: eventConfig.meta.description,
        startDate: eventConfig.event.targetDate,
        endDate: "2026-10-03T13:30:00+02:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        image: [`${eventConfig.meta.siteUrl}/images/locandina-ufficiale.png`],
        isAccessibleForFree: true,
        location: {
          "@type": "Place",
          name: "Marina di Monte di Procida (Acquamorta) → Procida (Punta Lingua)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Monte di Procida / Procida",
            addressRegion: "Napoli",
            postalCode: "80070",
            addressCountry: "IT",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.7944,
            longitude: 14.0375,
          },
        },
        performer: {
          "@type": "Person",
          name: eventConfig.salvatore.name,
          jobTitle: eventConfig.salvatore.role,
          url: `${eventConfig.meta.siteUrl}/#salvatore`,
        },
        organizer: [
          {
            "@type": "Organization",
            name: "Associazione Vela Latina Monte di Procida",
            url: "https://www.instagram.com/velalatinamontediprocida/",
          },
          {
            "@type": "Organization",
            name: "Associazione Culturale Laboratorio Cumano",
            url: "https://www.facebook.com/profile.php?id=100080139925321",
          },
          {
            "@type": "Organization",
            name: "Io Respiro Mare",
            url: "https://www.instagram.com/iorespiromare/",
          },
        ],
        about: [
          {
            "@type": "Thing",
            name: "Diritto allo studio per studenti con disabilità nei Campi Flegrei",
          },
          {
            "@type": "Thing",
            name: "Accessibilità Universale e inclusione",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${eventConfig.meta.siteUrl}/#website`,
        url: eventConfig.meta.siteUrl,
        name: "A Nuoto nei Mari del Globo",
        description: eventConfig.meta.description,
        inLanguage: "it-IT",
      },
    ],
  };

  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/gqr0pvc.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#1257C9] text-white selection:bg-[#22E57A] selection:text-[#071A42] font-mono">
        {children}
      </body>
    </html>
  );
}
