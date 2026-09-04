# 🌊 A NUOTO NEI MARI DEL GLOBO · Tappa Campi Flegrei

> **"Un mare che unisce, una comunità che resiste."**  
> *Una tappa speciale del progetto mondiale di **Salvatore Cimmino** nei Campi Flegrei (Monte di Procida → Procida).*

Landing page moderna, emozionale ed editoriale sviluppata con **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** e **Lucide Icons**, progettata per il deploy istantaneo su **Vercel** e per una gestione semplificata di ogni contenuto.

---

## 🧭 Caratteristiche Principali

- 🌊 **Identità Visiva Mediterranea & Direzione Artistica Curata**: Palette marina profonda, texture d'acqua, gradienti organici e tipografia monumentale ad alto impatto emotivo.
- ⏱️ **Countdown Scenografico in Tempo Reale**: Elemento tipografico/editoriale live che calcola giorni, ore, minuti e secondi con sincronizzazione client-side priva di hydration mismatch.
- ⚙️ **Configurazione Centralizzata (`src/config/event.ts`)**: Modifica in un unico file la data dell'evento, i testi, le tappe del percorso, i libri, il programma, le immagini, i partner e i contatti.
- 📚 **Focus sulle Scuole & Tre Libri**:
  1. *Disabilità Controcorrente* (Salvatore Cimmino) → Tema: **Disabilità**
  2. *#PROCIDANONDEVEMORIRE* (Bruno) → Tema: **Territorio**
  3. *IO RESPIRO MARE* (Mirko) → Tema: **Mare**
- 🗺️ **Percorso Nautico Grafico**: Carta nautica stilizzata (Acquamorta $\rightarrow$ Giro di Procida $\rightarrow$ Piazza Marina Grande a Procida) con il manifesto: *"Il mare non è una separazione, è un ponte."*
- 🖼️ **Locandina Ufficiale & Galleria**: Sezione dedicata per la locandina con lightbox ad alta risoluzione e download immediato, affiancata da una galleria fotografica asimmetrica a impaginazione editoriale.
- 🚀 **SEO & Performance**: Open Graph, Twitter Cards, Schema.org JSON-LD (Event), immagini responsive e accessibilità curata.

---

## 📁 Struttura del Progetto

```
a-nuoto-nei-mari-del-globo/
├── public/
│   └── images/
│       ├── hero-placeholder.svg
│       ├── salvatore-placeholder.svg
│       ├── poster-placeholder.svg
│       ├── og-cover.svg
│       ├── books/
│       │   ├── disabilita-controcorrente.svg
│       │   ├── procidanondevemorire.svg
│       │   └── iorespiromare.svg
│       └── gallery/
│           ├── swim-hero.svg
│           ├── acquamorta.svg
│           ├── channel.svg
│           ├── schools.svg
│           ├── procida-cliffs.svg
│           └── arrival.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx         # SEO, OpenGraph, JSON-LD, Font
│   │   ├── page.tsx           # Composizione sezioni
│   │   └── globals.css        # Palette oceanica, utility, animazioni
│   ├── config/
│   │   └── event.ts           # ⭐️ UNICO FILE DI CONTROLLO CONTENUTI
│   └── components/
│       ├── Navbar.tsx         # Menu sticky trasparente e responsive
│       ├── Hero.tsx           # Hero monumentale d'impatto
│       ├── Countdown.tsx      # Countdown editoriale real-time
│       ├── Initiative.tsx     # Iniziativa, inclusione e bradisismo
│       ├── Salvatore.tsx      # La storia e il messaggio di Salvatore
│       ├── RouteMap.tsx       # Mappa nautica della traversata
│       ├── BooksSection.tsx   # I tre libri e il percorso scuole
│       ├── Program.tsx        # Programma e orari della giornata
│       ├── OfficialPoster.tsx # Locandina ufficiale con zoom e download
│       ├── PhotoGallery.tsx   # Galleria fotografica asimmetrica
│       ├── Partners.tsx       # Istituzioni, associazioni, sponsor
│       └── Footer.tsx         # Chiusura, contatti e social
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Come Modificare i Contenuti (`src/config/event.ts`)

Per cambiare qualsiasi informazione del sito, apri semplicemente il file:
`src/config/event.ts`

### 1. Modificare la Data dell'Evento & Countdown
```typescript
event: {
  // Inserisci la data ISO target (es. 2026-06-20T08:30:00+02:00)
  targetDate: "2026-06-20T08:30:00+02:00",
  dateLabel: "20 Giugno 2026 · Ore 08:30",
  isDateDefinitive: true,
}
```

### 2. Sostituire la Locandina Ufficiale
1. Copia il file immagine della locandina in `public/images/locandina-ufficiale.jpg` (o `.png`).
2. In `src/config/event.ts`, aggiorna:
```typescript
poster: {
  imageSrc: "/images/locandina-ufficiale.jpg",
  downloadUrl: "/images/locandina-ufficiale.jpg",
}
```

### 3. Sostituire le Foto della Galleria e di Salvatore
Carica le foto in `public/images/` e aggiorna i percorsi corrispondenti in `eventConfig.salvatore.imageSrc` o `eventConfig.gallery.items`.

---

## 🚀 Avvio Locale

### Requisiti
- **Node.js**: v18+ o v20+
- **npm** o **yarn** / **pnpm**

### Installazione e Dev Server
```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel tuo browser.

---

## 🚢 Deploy su Vercel

Il progetto è ottimizzato per essere distribuito su **Vercel** in un click:

1. Carica il progetto su un repository **GitHub** / **GitLab** / **Bitbucket**:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page A Nuoto nei Mari del Globo"
   git branch -M main
   git remote add origin <URL_DEL_TUO_REPOSITORY>
   git push -u origin main
   ```
2. Vai su [vercel.com](https://vercel.com) e clicca **"Add New Project"**.
3. Importa il repository: Vercel riconoscerà automaticamente **Next.js**.
4. Clicca **"Deploy"**.

---

## 📄 Licenza
Progetto realizzato per l'iniziativa **"A Nuoto nei Mari del Globo"** con **Salvatore Cimmino**.
Tutti i diritti sui testi e sui contenuti appartengono ai rispettivi autori e promotori.
