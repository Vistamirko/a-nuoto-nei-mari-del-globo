import type { Metadata } from "next";
import { eventConfig } from "@/config/event";
import "./globals.css";

export const metadata: Metadata = {
  title: eventConfig.meta.title,
  description: eventConfig.meta.description,
  metadataBase: new URL(eventConfig.meta.siteUrl),
  keywords: [
    "Salvatore Cimmino",
    "A Nuoto nei Mari del Globo",
    "Campi Flegrei",
    "Monte di Procida",
    "Procida",
    "Acquamorta",
    "Traversata a nuoto",
    "Disabilità e inclusione",
    "Bradisismo",
    "Resilienza",
    "Disabilità Controcorrente",
    "#PROCIDANONDEVEMORIRE",
    "IO RESPIRO MARE",
  ],
  authors: [{ name: "A Nuoto nei Mari del Globo" }],
  creator: "Salvatore Cimmino",
  publisher: "Comunità Flegrea",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: eventConfig.meta.siteUrl,
    title: eventConfig.meta.title,
    description: eventConfig.meta.description,
    siteName: "A Nuoto nei Mari del Globo",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "A Nuoto nei Mari del Globo · Salvatore Cimmino nei Campi Flegrei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: eventConfig.meta.title,
    description: eventConfig.meta.description,
    images: ["/images/og-cover.svg"],
  },
  icons: {
    icon: "/images/hero-placeholder.svg",
    apple: "/images/hero-placeholder.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: eventConfig.event.title + " · " + eventConfig.event.subtitle,
    description: eventConfig.meta.description,
    startDate: eventConfig.event.targetDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: eventConfig.event.locationFull,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Monte di Procida / Procida",
        addressRegion: "Napoli",
        addressCountry: "IT",
      },
    },
    performer: {
      "@type": "Person",
      name: eventConfig.salvatore.name,
      jobTitle: eventConfig.salvatore.role,
    },
    organizer: {
      "@type": "Organization",
      name: "A Nuoto nei Mari del Globo",
      url: eventConfig.meta.siteUrl,
    },
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
