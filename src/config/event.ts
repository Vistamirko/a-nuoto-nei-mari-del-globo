export interface BookItem {
  id: string;
  title: string;
  author: string;
  theme: "DISABILITÀ" | "TERRITORIO" | "MARE";
  description: string;
  quote?: string;
  coverImage: string;
  buyUrl?: string;
  buyLabel?: string;
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
  logo?: string;
  url?: string;
  detail?: string;
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
    motto: string;
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
    genesisStory: string;
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
    persons: {
      name: string;
      role?: string;
      phone: string;
      phoneRaw: string;
      email?: string;
    }[];
    socialChannels: {
      name: string;
      platform: "instagram" | "facebook";
      url: string;
      handle: string;
    }[];
  };
}

export const eventConfig: EventConfig = {
  meta: {
    siteUrl: "https://a-nuoto-nei-mari-del-globo.vercel.app",
    title: "A Nuoto nei Mari del Globo · Un'Impresa di Salvatore Cimmino (3 Ottobre 2026)",
    description:
      "3 Ottobre 2026: Salvatore Cimmino nuota dalla Marina di Monte di Procida (Acquamorta) a Procida. Diritto allo studio per gli studenti con disabilità dei Campi Flegrei, per un mondo senza barriere e senza frontiere.",
    ogImage: "/images/locandina-ufficiale.png",
  },
  event: {
    title: "A NUOTO NEI MARI DEL GLOBO",
    tappaTitle: "UN'IMPRESA DI SALVATORE CIMMINO",
    subtitle: "DALLA MARINA DI MONTE DI PROCIDA A PROCIDA",
    badge: "3 OTTOBRE 2026 · MARINA DI MONTE DI PROCIDA (09:00) → PROCIDA (12:30)",
    coordinates: "40°47′40″N 14°02′15″E",
    targetDate: "2026-10-03T09:00:00+02:00",
    isDateDefinitive: true,
    dateLabel: "3 OTTOBRE 2026 · ORE 09:00",
    weatherNotice: "La data e gli orari possono subire variazioni in base alle condizioni meteo-marine nel Canale di Procida.",
    locationShort: "Marina di Monte di Procida → Procida",
    locationFull: "Marina di Monte di Procida (Acquamorta) · Canale di Procida · Punta Lingua / Marina Grande",
    motto: "PER UN MONDO SENZA BARRIERE E SENZA FRONTIERE",
  },
  salvatore: {
    name: "Salvatore Cimmino",
    role: "Nuotatore per i Diritti Civili & Ideatore dell'Impresa Mondiale",
    title: "LA SFIDA DI SALVATORE",
    quoteLines: [
      "Una vita cambiata radicalmente.",
      "Una nuova strada da trovare.",
      "Un mare da attraversare.",
    ],
    bioParagraphs: [
      "All'età di 15 anni, a causa di un osteosarcoma, Salvatore subisce l'amputazione della gamba destra. A 40 anni, dopo aver affrontato ulteriori interventi e senza aver mai nuotato prima, decide di tuffarsi in acqua per trasformare la propria sfida personale in un impegno civile collettivo.",
      "Con il progetto 'A nuoto nei mari del globo, per un mondo senza barriere e senza frontiere', Salvatore compie imprese estreme in tutto il mondo per denunciare le barriere architettoniche, culturali e tecnologiche, chiedendo ausili all'avanguardia e parità di diritti.",
      "Il 3 ottobre 2026 porta questa testimonianza nei Campi Flegrei: una traversata dalla Marina di Monte di Procida a Procida per difendere il diritto allo studio degli alunni con disabilità del territorio flegreo colpito dal terremoto e dal bradisismo.",
    ],
    keyMessage:
      "La disabilità non può essere confinata a una dimensione privata o familiare, ma deve essere riconosciuta come una sfida che interroga l'intera collettività.",
    imageSrc: "/images/salvatore-cimmino-600x800.jpg",
  },
  initiative: {
    title: "L'EMERGENZA SOCIALE & IL CAMBIO DI PARADIGMA",
    subtitle: "Dedicato agli studenti e alle studentesse con disabilità dei Campi Flegrei",
    intro:
      "Una sfida non solo fisica, ma soprattutto culturale e organizzativa nata per accendere i riflettori su un'emergenza vicinissima: garantire il diritto allo studio e abbattere ogni barriera per le nuove generazioni flegree.",
    coreThemes: [
      {
        title: "Diritto allo Studio & Emergenza Scuole",
        description:
          "Con l'inizio dell'anno scolastico, moltissimi alunni delle comunità flegree più colpite dalle scosse del terremoto affrontano gravi difficoltà per i danni e le inagibilità degli edifici scolastici. Le barriere logistiche rischiano di trasformarsi in una vera e propria esclusione dallo studio.",
      },
      {
        title: "Cambio di Paradigma",
        description:
          "La disabilità non può più essere confinata a una dimensione privata o familiare, ma deve essere riconosciuta come una sfida e una responsabilità etica che interroga e mobilita l'intera collettività.",
      },
      {
        title: "Senza Barriere né Frontiere",
        description:
          "Il mare come elemento universale che unisce: la traversata tra terraferma e isola diventa il simbolo concreto dell'abbattimento di ogni ostacolo fisico, sociale e culturale.",
      },
    ],
    territoryInsight:
      "Nelle comunità flegree ferite dagli eventi sismici e dal bradisismo, l'inagibilità delle strutture scolastiche aggrava ulteriormente la condizione degli alunni con disabilità. Questa iniziativa nasce per dare voce a loro e alle loro famiglie, affinché la ricostruzione e l'adeguamento degli spazi educativi siano prioritari, inclusivi e senza barriere.",
    genesisStory:
      "L'evento nasce dagli incontri al 'Piccolo Museo del Mare' di Monte di Procida: prima con Salvatore Cimmino per la presentazione di 'Disabilità Controcorrente', poi con Mirko Vista e il suo libro 'Io Respiro Mare - Storia di un cambiamento', che attraverso un percorso di trasformazione interiore racconta un'analoga esperienza a nuoto tra Monte di Procida e Procida. Da qui la sinergia spontanea tra Vela Latina Monte di Procida, Laboratorio Cumano e Io Respiro Mare per realizzare insieme questa storica impresa.",
  },
  route: {
    title: "IL PERCORSO DELLA TAPPA",
    claim: "IL MARE NON È UNA SEPARAZIONE, È UN PONTE.",
    stages: [
      {
        number: "01",
        name: "MARINA DI MONTE DI PROCIDA",
        subtitle: "Acquamorta · Partenza Ore 09:00",
        description:
          "Presidio del Comitato di Accoglienza al molo di Acquamorta, raduno della comunità flegrea e delle scuole, saluto inaugurale e tuffo di Salvatore Cimmino per l'avvio della traversata.",
        highlight: "Comitato di Accoglienza",
      },
      {
        number: "02",
        name: "CANALE & PERIPLO DI PROCIDA",
        subtitle: "Traversata a Nuoto & Scorta in Vela Latina",
        description:
          "La sfida a bracciate nelle correnti del Canale di Procida e lungo la costa dell'isola vulcanica, scortato dalle storiche imbarcazioni tradizionali a Vela Latina.",
        highlight: "Traversata a Nuoto",
      },
      {
        number: "03",
        name: "APPRODO A PROCIDA",
        subtitle: "Punta Lingua / Marina Grande · Ore 12:30",
        description:
          "Accoglienza ufficiale del Comitato di Arrivo sull'isola: abbraccio delle comunità di Procida e Monte di Procida, con studenti, cittadini e le Istituzioni dei due Comuni.",
        highlight: "Comitato di Arrivo",
      },
    ],
  },
  books: {
    title: "LE SCUOLE E I TRE LIBRI",
    subtitle: "Tre prospettive, un unico messaggio di riscatto, territorio e libertà",
    description:
      "Un breve e incisivo momento di incontro e presentazione dei tre libri con gli autori, per dialogare con gli studenti sui temi del diritto allo studio, del cambiamento personale e dell'identità flegrea.",
    items: [
      {
        id: "disabilita-controcorrente",
        title: "DISABILITÀ CONTROCORRENTE",
        author: "Salvatore Cimmino",
        theme: "DISABILITÀ",
        description:
          "L’Accessibilità Universale non è una tendenza, ma un diritto fondamentale che riguarda la qualità della vita dell’intera comunità. Spazi pubblici, scuole, case e mobilità devono essere accessibili per realizzare il Diritto di Cittadinanza (Art. 3 e 32 Cost.). Rimuovere le barriere materiali e immateriali difende l'inclusione di tutti: autonomia significa integrarsi, chiedere e dare aiuto.",
        quote: "L’Accessibilità Universale non è un concetto di tendenza, ma un diritto fondamentale per l’intera comunità.",
        coverImage: "/images/books/disabilita-controcorrente.jpeg",
        buyUrl: "https://www.amazon.it/dp/B0D5KQTB5F",
        buyLabel: "DISPONIBILE SU AMAZON ↗",
      },
      {
        id: "io-respiro-mare",
        title: "IO RESPIRO MARE - STORIA DI UN CAMBIAMENTO",
        author: "Mirko Vista",
        theme: "MARE",
        description:
          "La storia di un cambiamento profondo: un viaggio interiore e di trasformazione personale in cui il mare diventa respiro, rinascita e forza per ridisegnare la propria vita, con all'interno l'esperienza a nuoto da Monte di Procida a Procida.",
        quote: "Dentro ogni bracciata c'è la forza di cambiare la rotta della nostra vita.",
        coverImage: "/images/cover-io-respiro-mare-800.webp",
        buyUrl: "https://www.amazon.it/dp/B0FXS6DJ8G",
        buyLabel: "DISPONIBILE SU AMAZON ↗",
      },
      {
        id: "procida-non-deve-morire",
        title: "#PROCIDANONDEVEMORIRE",
        author: "Ciro Bruno Linardo",
        theme: "TERRITORIO",
        description:
          "Un romanzo che crea un ponte tra due mondi e culture diverse: la piccola isola di Procida e l’immenso deserto del Sahara. Il racconto pone l’attenzione sulla causa saharawi, l’esilio forzato di un popolo estromesso dalla propria terra dall'occupazione militare che chiede solo di farvi ritorno. Una parte dei proventi è destinata a sostenere il fiero popolo saharawi.",
        quote: "Un ponte tra l'isola di Procida e il deserto del Sahara, a sostegno del popolo saharawi.",
        coverImage: "/images/books/procidanondevemorire.jpeg",
        buyUrl: "https://www.edizionimea.it/product/procidanondevemorire/",
        buyLabel: "DISPONIBILE SU EDIZIONI MEA ↗",
      },
    ],
  },
  program: {
    title: "PROGRAMMA DELLA GIORNATA",
    subtitle: "Sabato 3 Ottobre 2026 · Sport, inclusione civile e comunità",
    note: "Gli orari precisi e lo svolgimento della traversata sono subordinati alle condizioni meteo-marine nel Canale di Procida.",
    steps: [
      {
        id: "scuole",
        time: "Incontro Scuole",
        phase: "Fase 01",
        title: "BREVE PRESENTAZIONE DEI TRE LIBRI CON GLI AUTORI",
        location: "Istituti Scolastici dei Campi Flegrei e Procida",
        description:
          "Breve incontro con gli studenti sui temi dell'emergenza post-sisma, del diritto allo studio e dell'inclusione, con una concisa presentazione dei tre libri insieme agli autori.",
        iconType: "school",
      },
      {
        id: "partenza",
        time: "Ore 09:00",
        phase: "Fase 02",
        title: "COMITATO DI ACCOGLIENZA & PARTENZA",
        location: "Molo di Acquamorta · Marina di Monte di Procida",
        description:
          "Presidio del Comitato di Accoglienza ad Acquamorta: saluto istituzionale dei Sindaci, raduno della cittadinanza e tuffo inaugurale di Salvatore Cimmino.",
        iconType: "flag",
      },
      {
        id: "traversata",
        time: "Mattina",
        phase: "Fase 03",
        title: "TRAVERSATA & SCORTA VELA LATINA",
        location: "Canale di Procida & Coste dell'Isola",
        description:
          "La traversata a nuoto scortata dalla flotta tradizionale dell'Associazione Vela Latina Monte di Procida e dalle unità di sicurezza in mare.",
        iconType: "waves",
      },
      {
        id: "arrivo",
        time: "Ore 12:30 circa",
        phase: "Fase 04",
        title: "COMITATO DI ARRIVO & CELEBRAZIONE A PROCIDA",
        location: "Punta Lingua / Piazza Marina Grande · Procida",
        description:
          "Accoglienza da parte del Comitato di Arrivo: sbarco di Salvatore Cimmino, abbraccio della comunità isolana e incontro pubblico con studenti, associazioni e rappresentanti istituzionali.",
        iconType: "map-pin",
      },
    ],
  },
  poster: {
    title: "LOCANDINA UFFICIALE DELL'IMPRESA",
    subtitle: "Il manifesto dell'evento flegreo per un mondo senza barriere e senza frontiere",
    description:
      "La locandina ufficiale dell'evento del 3 Ottobre 2026: scarica il manifesto per diffondere l'iniziativa e supportare la causa degli studenti con disabilità dei Campi Flegrei.",
    imageSrc: "/images/locandina-ufficiale.png",
    downloadUrl: "/images/locandina-ufficiale.png",
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
        title: "Marina di Monte di Procida",
        subtitle: "Acquamorta prima della partenza",
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
        title: "L'Arrivo e la Comunità",
        subtitle: "L'abbraccio di Procida",
        aspect: "wide",
        imageSrc: "/images/gallery/arrival.svg",
        alt: "Arrivo e festa in piazza",
      },
    ],
  },
  partners: [
    {
      name: "Comune di Monte di Procida",
      role: "Con il Patrocinio Morale",
      category: "istituzione",
      logo: "/images/logos/logo-comune-monte-di-procida.webp",
      url: "https://www.comune.montediprocida.na.it/",
      detail: "Sindaco Dott. Salvatore Scotto di Santolo",
    },
    {
      name: "Comune di Procida",
      role: "Con il Patrocinio Morale",
      category: "istituzione",
      logo: "/images/logos/logo-comune-procida.webp",
      url: "https://www.comune.procida.na.it/",
      detail: "Sindaco Avv. Luigi Muro",
    },
    {
      name: "Associazione Vela Latina Monte di Procida",
      role: "Organizzazione & Sede Piccolo Museo del Mare",
      category: "associazione",
      logo: "/images/logos/logo-vela-latina.webp",
      url: "https://www.instagram.com/velalatinamontediprocida/",
      detail: "Pres. Antonio Pugliese",
    },
    {
      name: "Associazione Laboratorio Cumano",
      role: "Promotore Ispiratore & Culturale",
      category: "associazione",
      logo: "/images/logos/logo-laboratorio-cumano.webp",
      url: "https://www.facebook.com/profile.php?id=100080139925321",
    },
    {
      name: "Io Respiro Mare (Mirko Vista)",
      role: "Coordinamento Organizzativo & Traversata",
      category: "associazione",
      logo: "/images/logos/logo-io-respiro-mare.svg",
      url: "https://www.instagram.com/iorespiromare/",
      detail: "Autore & Testimonianza",
    },
    {
      name: "Istituti Scolastici Campi Flegrei e Procida",
      role: "Comunità Educativa & Studenti con Disabilità",
      category: "partner",
      detail: "Sensibilizzazione e incontri sui libri con gli autori",
    },
  ],
  contact: {
    persons: [
      {
        name: "Mirko Vista",
        role: "Coordinamento Organizzativo",
        phone: "+39 329 016 0806",
        phoneRaw: "+393290160806",
        email: "vistamirko@gmail.com",
      },
      {
        name: "Michele Petrone",
        role: "Organizzazione & Territorio",
        phone: "+39 335 809 0041",
        phoneRaw: "+393358090041",
      },
    ],
    socialChannels: [
      {
        name: "Io Respiro Mare",
        platform: "instagram",
        url: "https://www.instagram.com/iorespiromare/",
        handle: "@iorespiromare",
      },
      {
        name: "Vela Latina Monte di Procida",
        platform: "instagram",
        url: "https://www.instagram.com/velalatinamontediprocida/",
        handle: "@velalatinamontediprocida",
      },
      {
        name: "Associazione Laboratorio Cumano",
        platform: "facebook",
        url: "https://www.facebook.com/profile.php?id=100080139925321",
        handle: "Laboratorio Cumano",
      },
    ],
  },
};
