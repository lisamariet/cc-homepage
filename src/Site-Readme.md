# Inspirerende Hjemmeside

En inspirerende hjemmeside hvor brukere kan planlegge sine gjøremål og målsettinger, samt bli inspirert gjennom dynamiske bilder, sitater og værinformasjon.

## 🎯 Formål

Inspirerende Tanker er designet for å være et daglig verktøy som kombinerer produktivitet med inspirasjon. Applikasjonen gir brukere:

- Et oversiktlig grensesnitt for å håndtere daglige mål
- Inspirerende bakgrunnsbilder som kan byttes
- Motiverende sitater
- Oppdatert værinformasjon

## 🛠 Teknologier

- **Frontend:**
  - React 18
  - Redux Toolkit for tilstandshåndtering
  - Styled Components for styling
  - CSS variabler for konsistent fargepalett

- **API Integrasjoner:**
  - OpenWeather API for værinformasjon
  - Unsplash API for dynamiske bakgrunnsbilder
  - Quotable API for inspirerende sitater

## 📦 Prosjektstruktur

```
src/
├── components/
│ ├── Header/
│ │ ├── Header.jsx # Hovedheader med logo
│ │ └── WeatherWidget.jsx # Værwidget
│ ├── Hero/
│ │ ├── Hero.jsx # Hero-seksjon
│ │ ├── ImageCycler.jsx # Bildebytter
│ │ └── Quote.jsx # Sitatvisning
│ └── Goals/
│ ├── GoalContainer.jsx # Målcontainer
│ ├── GoalInput.jsx # Målinput
│ ├── GoalList.jsx # Målliste
│ └── GoalItem.jsx # Målkomponent
├── features/
│ ├── weather/
│ ├── images/
│ ├── quotes/
│ └── goals/
└── app/
└── store.js
```

## 🎨 Design System

### Fargepalett

```css
css:src/Site-Readme.md
--primary: #4A90E2 / Rolig blå /
--secondary: #7ED321 / Frisk grønn /
--text: #2C3E50 / Mørk blågrå /
--background: #F5F7FA / Lys bakgrunn /
--accent: #F5A623 / Varm oransje /
```

## 🔋 Funksjoner

### Værinformasjon

- Viser nåværende temperatur
- Værikon for nåværende forhold
- Lokasjonsnavn

### Inspirerende Bilder

- Dynamisk lasting av bakgrunnsbilder fra Unsplash
- Mulighet for å bytte til neste bilde
- Optimalisert bildekvalitet for rask lasting

### Sitater

- Daglige inspirerende sitater
- Visning av sitatforfatter
- Mulighet for å laste nye sitater

### Målhåndtering

- Legg til nye mål
- Marker mål som fullført
- Slett mål
- Persistent lagring av mål

## 🚀 Kom i Gang

1. Klon repositoriet
2. Installer avhengigheter:

   ```bash
   npm install
   ```

3. Opprett en `.env` fil med følgende API-nøkler:

   ```bash
   REACT_APP_WEATHER_API_KEY=din_openweather_api_nøkkel
   REACT_APP_UNSPLASH_API_KEY=din_unsplash_api_nøkkel
   ```

4. Start utviklingsserveren:

   ```bash
   npm start
   ```

## 🔄 API Integrasjoner

### OpenWeather API

- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parametere: `q` (by), `appid` (API-nøkkel)
- Respons: Temperatur, værforhold, ikon

### Unsplash API

- Endpoint: `https://api.unsplash.com/photos/random`
- Parametere: `query` (søkeord), `orientation` (landscape)
- Respons: Høykvalitets bakgrunnsbilder

### Quotable API

- Endpoint: `https://api.quotable.io/random`
- Respons: Sitat og forfatter

## 🔜 Fremtidige Forbedringer

- Implementere brukerautentisering
- Legge til kategorisering av mål
- Dele mål med andre brukere
- Implementere dark mode
- Legge til påminnelser for mål
- Statistikk over fullførte mål

## 📝 Lisens

Dette prosjektet er lisensiert under MIT-lisensen.
