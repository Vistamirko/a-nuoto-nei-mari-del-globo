export interface BookItem {
  id: string;
  title: string;
  author: string;
  theme: "DISABILITÀ" | "TERRITORIO" | "MARE";
  description: string;
  quote?: string;
  coverImage: string;
}

export interface ProgramStep {
  id: string;
  time?: string;
  phase: string;
  title: string;
  location: string;
  description: string;
  iconType: "school" | "flag" | "waves" | "map-pin";
}

export interface RouteStage {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  aspect: "portrait" | "landscape" | "wide";
  imageSrc: string;
  alt: string;
}

export interface PartnerItem {
  name: string;
  role: string;
  category: "istituzione" | "associazione" | "partner" | "media";
}

export interface EventConfig {
  meta: {
    siteUrl: string;
    title: string;
    description: string;
    ogImage: string;
  };
  event: {
    title: string;
    tappaTitle: string;
    subtitle: string;
    badge: string;
    coordinates: string;
    targetDate: string; // ISO format: YYYY-MM-DDTHH:mm:ss
    isDateDefinitive: boolean;
    dateLabel: string;
    weatherNotice: string;
    locationShort: string;
    locationFull: string;
  };
  salvatore: {
    name: string;
    role: string;
    title: string;
    quoteLines: string[];
    bioParagraphs: string[];
    keyMessage: string;
    imageSrc: string;
  };
  initiative: {
    title: string;
    subtitle: string;
    intro: string;
    coreThemes: {
      title: string;
      description: string;
    }[];
    territoryInsight: string;
  };
  route: {
    title: string;
    claim: string;
    stages: RouteStage[];
  };
  books: {
    title: string;
    subtitle: string;
    description: string;
    items: BookItem[];
  };
  program: {
    title: string;
    subtitle: string;
    note: string;
    steps: ProgramStep[];
  };
  poster: {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    downloadUrl: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    items: GalleryItem[];
  };
  partners: PartnerItem[];
  contact: {
    email: string;
    pressEmail: string;
    social: {
      instagram?: string;
      facebook?: string;
      youtube?: string;
    };
  };
}

export const eventConfig: EventConfig = {
  meta: {
    siteUrl: "https://a-nuoto-nei-mari-del-globo.vercel.app",
    title: "La Tappa Flegrea · A Nuoto nei Mari del Globo con Salvatore Cimmino",
    description:
      "La tappa nei Campi Flegrei di 'A Nuoto nei Mari del Globo': Salvatore Cimmino nuota da Monte di Procida (Acquamorta) al giro di Procida. Resilienza, inclusione e scuole.",
    ogImage: "/images/og-cover.svg",
  },
  event: {
    title: "A NUOTO NEI MARI DEL GLOBO",
    tappaTitle: "CON SALVATORE CIMMINO",
    subtitle: "DA MONTE DI PROCIDA A PROCIDA",
    badge: "3 OTTOBRE · ACQUAMORTA (09:00) → PUNTA LINGUA (12:30)",
    coordinates: "40°47′40″N 14°02′15″E",
    targetDate: "2026-10-03T09:00:00+02:00",
    isDateDefinitive: true,
    dateLabel: "3 OTTOBRE · ACQUAMORTA ORE 09:00",
    weatherNotice: "La data e gli orari possono subire variazioni in base alle condizioni meteo-marine nel Canale di Procida.",
    locationShort: "Acquamorta → Punta Lingua / Procida",
    locationFull: "Acquamorta (Monte di Procida) · Canale e Periplo di Procida · Punta Lingua",
  },
  salvatore: {
    name: "Salvatore Cimmino",
    role: "Nuotatore per i Diritti Civili e l'Inclusione",
    title: "LA STORIA DI SALVATORE",
    quoteLines: [
      "Una vita cambiata radicalmente.",
      "Una nuova strada da trovare.",
      "Un mare da attraversare.",
    ],
    bioParagraphs: [
      "All'età di 15 anni, a causa di un osteosarcoma, Salvatore subisce l'amputazione della gamba destra. A 40 anni, dopo aver affrontato ulteriori interventi e senza aver mai nuotato prima, decide di iniziare a nuotare.",
      "Con il progetto mondiale 'A Nuoto nei Mari del Globo', Salvatore compie traversate estreme in ogni continente per richiamare l'attenzione sui diritti delle persone con disabilità, sull'accessibilità e sull'inclusione.",
      "La sua tappa nei Campi Flegrei porta questa testimonianza viva nel cuore del Mediterraneo: trasformare il cambiamento in una nuova possibilità.",
    ],
    keyMessage:
      "Il mio nuoto non è una ricerca di record, ma un ponte tra le persone per dare voce a chi non viene ascoltato.",
    imageSrc: "/images/salvatore-cimmino-600x800.jpg",
  },
  initiative: {
    title: "L'EVENTO NEI CAMPI FLEGREI",
    subtitle: "La Tappa Flegrea del Progetto Mondiale",
    intro:
      "La tappa flegrea di “A Nuoto nei Mari del Globo” nasce dall’incontro con Salvatore Cimmino e porta nei Campi Flegrei la sua storia, la sua esperienza e la sua traversata.",
    coreThemes: [
      {
        title: "Disabilità & Diritti",
        description:
          "Sensibilizzare istituzioni e cittadini sull'abbattimento delle barriere e sull'accesso universale alle tecnologie assistive e agli spazi pubblici.",
      },
      {
        title: "Inclusione & Scuole",
        description:
          "Un percorso formativo ed educativo dedicato agli studenti attraverso tre libri tematici e il confronto diretto con gli autori.",
      },
      {
        title: "Resilienza & Bradisismo",
        description:
          "Il territorio e il bradisismo diventano parte del racconto: due esperienze diverse unite dalla necessità di adattarsi e trovare nuovi equilibri.",
      },
    ],
    territoryInsight:
      "Il territorio e il bradisismo diventano parte del racconto: due esperienze diverse, quella personale di Salvatore e quella collettiva di una comunità che vive un territorio in continuo cambiamento, unite dalla necessità di adattarsi e trovare nuovi equilibri.",
  },
  route: {
    title: "IL PERCORSO DELLA TAPPA",
    claim: "IL MARE NON È UNA SEPARAZIONE, È UN PONTE.",
    stages: [
      {
        number: "01",
        name: "ACQUAMORTA",
        subtitle: "Monte di Procida · Partenza",
        description:
          "Il molo di Acquamorta abbraccia Salvatore con il saluto della comunità prima della partenza della traversata.",
        highlight: "Punto di Partenza",
      },
      {
        number: "02",
        name: "GIRO DI PROCIDA",
        subtitle: "Periplo a Nuoto dell'Isola",
        description:
          "La sfida a bracciate nel cuore del Canale di Procida e lungo il perimetro dell'isola vulcanica tra scogliere e tufo.",
        highlight: "Traversata a Nuoto",
      },
      {
        number: "03",
        name: "PROCIDA",
        subtitle: "Arrivo in Piazza · Festa della Comunità",
        description:
          "L'approdo sull'isola, l'accoglienza in piazza con la cittadinanza, gli studenti e le istituzioni per celebrare insieme il valore dell'impresa.",
        highlight: "Traguardo & Festa",
      },
    ],
  },
  books: {
    title: "LE SCUOLE E I TRE LIBRI",
    subtitle: "Tre prospettive differenti che si incontrano nella tappa flegrea",
    description:
      "Il progetto coinvolgerà la letteratura attraverso tre libri per dialogare con gli studenti e le nuove generazioni.",
    items: [
      {
        id: "disabilita-controcorrente",
        title: "DISABILITÀ CONTROCORRENTE",
        author: "Salvatore Cimmino",
        theme: "DISABILITÀ",
        description:
          "La testimonianza diretta di Salvatore: trasformare la malattia e l'amputazione in un impegno civile globale per i diritti e la dignità.",
        quote: "Il mare mi ha ridato la libertà di muovermi senza confini.",
        coverImage: "/images/books/disabilita-controcorrente.svg",
      },
      {
        id: "procida-non-deve-morire",
        title: "#PROCIDANONDEVEMORIRE",
        author: "Bruno",
        theme: "TERRITORIO",
        description:
          "Un grido di passione e difesa per l'isola di Procida e la terra flegrea. Radici, identità e memoria di una comunità fiera.",
        quote: "Custodire il territorio significa proteggere l'anima di chi lo abita.",
        coverImage: "/images/books/procidanondevemorire.svg",
      },
      {
        id: "io-respiro-mare",
        title: "IO RESPIRO MARE",
        author: "Mirko",
        theme: "MARE",
        description:
          "Il mare come elemento rigenerante e vitale in cui perdersi per ritrovarsi. Un viaggio intimo nel rapporto ancestrale tra uomo e acqua.",
        quote: "Dentro ogni onda c'è il ritmo del nostro stesso respiro.",
        coverImage: "/images/cover-io-respiro-mare-800.webp",
      },
    ],
  },
  program: {
    title: "PROGRAMMA DELLA TAPPA",
    subtitle: "Una giornata di sport, cultura, territorio e inclusione",
    note: "Gli orari precisi e i dettagli della giornata saranno confermati a ridosso dell'evento.",
    steps: [
      {
        id: "scuole",
        time: "Mattina pre-evento",
        phase: "Fase 01",
        title: "INCONTRO CON LE SCUOLE",
        location: "Scuole dei Campi Flegrei e Procida",
        description:
          "Incontri e testimonianze dedicati a disabilità, inclusione, resilienza, mare e territorio con gli autori dei tre libri.",
        iconType: "school",
      },
      {
        id: "partenza",
        time: "Ore 08:30 (indicativo)",
        phase: "Fase 02",
        title: "PARTENZA DA ACQUAMORTA",
        location: "Acquamorta · Monte di Procida",
        description:
          "Saluto inaugurale della comunità flegrea e tuffo di Salvatore Cimmino per l'inizio della traversata.",
        iconType: "flag",
      },
      {
        id: "traversata",
        time: "Mattina / Pomeriggio",
        phase: "Fase 03",
        title: "TRAVERSATA & GIRO DI PROCIDA",
        location: "Canale di Procida & Costa isolana",
        description:
          "La traversata a nuoto scortata dalle barche di sicurezza, circoli nautici e imbarcazioni della comunità.",
        iconType: "waves",
      },
      {
        id: "arrivo",
        time: "Pomeriggio",
        phase: "Fase 04",
        title: "ARRIVO A PROCIDA IN PIAZZA",
        location: "Procida · Piazza Marina Grande",
        description:
          "Sbarco di Salvatore, incontro pubblico in piazza con i cittadini, gli studenti, le associazioni e le istituzioni.",
        iconType: "map-pin",
      },
    ],
  },
  poster: {
    title: "LOCANDINA UFFICIALE DELLA TAPPA",
    subtitle: "Il manifesto visivo dell'evento nei Campi Flegrei",
    description:
      "La locandina ufficiale della tappa flegrea di 'A Nuoto nei Mari del Globo'. Clicca per visualizzare l'anteprima o scaricare l'immagine.",
    imageSrc: "/images/poster-placeholder.svg",
    downloadUrl: "#",
  },
  gallery: {
    title: "FOTO DELLA TAPPA E DEL MARE",
    subtitle: "Immagini, luce e movimento della traversata",
    items: [
      {
        id: "1",
        title: "La Bracciata di Salvatore",
        subtitle: "L'energia di Salvatore nel mare flegreo",
        aspect: "wide",
        imageSrc: "/images/gallery/swim-hero.svg",
        alt: "Salvatore Cimmino che nuota",
      },
      {
        id: "2",
        title: "Partenza ad Acquamorta",
        subtitle: "Monte di Procida prima del tuffo",
        aspect: "portrait",
        imageSrc: "/images/gallery/acquamorta.svg",
        alt: "Acquamorta Monte di Procida",
      },
      {
        id: "3",
        title: "Il Canale di Procida",
        subtitle: "La rotta d'acqua tra terraferma e isola",
        aspect: "landscape",
        imageSrc: "/images/gallery/channel.svg",
        alt: "Canale di Procida",
      },
      {
        id: "4",
        title: "Gli Studenti e i Libri",
        subtitle: "Incontri di sensibilizzazione nelle scuole",
        aspect: "landscape",
        imageSrc: "/images/gallery/schools.svg",
        alt: "Incontro con le scuole",
      },
      {
        id: "5",
        title: "Le Scogliere di Procida",
        subtitle: "Il periplo dell'isola vulcanica",
        aspect: "portrait",
        imageSrc: "/images/gallery/procida-cliffs.svg",
        alt: "Coste di Procida",
      },
      {
        id: "6",
        title: "L'Arrivo e la Festa in Piazza",
        subtitle: "L'abbraccio di Procida",
        aspect: "wide",
        imageSrc: "/images/gallery/arrival.svg",
        alt: "Arrivo e festa in piazza",
      },
    ],
  },
  partners: [
    { name: "Comune di Monte di Procida", role: "Patrocinio Istituzionale", category: "istituzione" },
    { name: "Comune di Procida", role: "Patrocinio Istituzionale", category: "istituzione" },
    { name: "A Nuoto nei Mari del Globo", role: "Progetto Mondiale", category: "associazione" },
    { name: "Comunità Flegrea & Associazioni", role: "Supporto Territoriale", category: "associazione" },
    { name: "Circoli Nautici & Soccorso in Mare", role: "Sicurezza & Logistica Navale", category: "partner" },
    { name: "Istituti Scolastici Campi Flegrei e Procida", role: "Partner Educativo", category: "partner" },
  ],
  contact: {
    email: "info@anuotoneimaridelglobo.it",
    pressEmail: "stampa@anuotoneimaridelglobo.it",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
    },
  },
};
