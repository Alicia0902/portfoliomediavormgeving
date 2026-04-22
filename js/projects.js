/*
  ╔══════════════════════════════════════════════════════════════╗
  ║  PROJECTS.JS — Hier beheer je al je projecten               ║
  ║                                                              ║
  ║  Hoe een project toevoegen:                                  ║
  ║  1. Kopieer een blok hieronder                               ║
  ║  2. Geef het een unieke id (bijv. 'foto-3')                  ║
  ║  3. Voeg dezelfde id toe in index.html als data-id="foto-3"  ║
  ║  4. Zet je foto's in de map images/                          ║
  ║                                                              ║
  ║  VIDEO TOEVOEGEN — kies één van deze drie opties:            ║
  ║  video: 'https://www.youtube.com/watch?v=JOUW_VIDEO_ID'      ║
  ║  video: 'https://vimeo.com/JOUW_VIDEO_ID'                    ║
  ║  video: 'videos/jouw-video.mp4'   (eigen bestand)            ║
  ║  Laat video leeg ('') als er geen video is.                  ║
  ╚══════════════════════════════════════════════════════════════╝
*/

const PROJECTS = {

  /* ── FOTOGRAFIE ─────────────────────────────────────────── */

  'foto-1': {
    title:         'Greymenband - Groningen',
    category:      'fotografie',
    categoryLabel: 'Fotografie',
    year:          '2025 - 2026',
    location:      'Groningen, NL',
    cover:         'images/greymenband/IMG_3183.png',   // hoofdafbeelding bovenaan
    coverIcon:     '📷',
    coverGradient: 'p-foto',
    description: `
      Ik fotografeerde de band Greyman tijdens een optreden voor Bubo. Ik maakte foto's met een Sony ZV-E10 en iPhone. Daarna bewerkte ik de foto's in Lightroom en Photoshop. Ik koos de beste foto's voor social media.

      Dit project was erg leuk. Ik leerde snel werken en goed kijken naar licht. Het was fijn dat mijn foto's echt gebruikt worden op Instagram van de band.
    `,
    video: '',   // YouTube / Vimeo link of 'videos/bestand.mp4' — leeg laten als geen video
    tools: ['Sony ZV-E10', 'Adobe Lightroom', 'Adobe Photoshop', 'Apple iPhone 16 Pro Max'],
    // Voeg hieronder de afbeeldingen toe die op de projectpagina verschijnen.
    // Zet foto's in images/ en vul de bestandsnaam in.
    images: [
      'images/greymenband/img_2737.png',
      'images/greymenband/img_2755.png',
      'images/greymenband/img_2865.png',
      'images/greymenband/img_3166.png',
      'images/greymenband/_dsc0128.png',
    ],
  },

  'foto-2': {
    title:         'Reizen — Europa',
    category:      'fotografie',
    categoryLabel: 'Fotografie',
    year:          '2023',
    location:      'Europa',
    cover:         'images/plaatsenfotografioe/uitzicht.jpeg',
    coverIcon:     '📷',
    coverGradient: 'p-foto',
    description: `
      Een serie landschapsfoto's door Europa vastgelegd met iPhone en Sony ZV-E10. Ik concentreerde me op natuurlijk licht en eenvoudige compositie om authentieke momenten vast te leggen. De bewerking gebeurde in Lightroom en Photoshop om elk moment optimaal tot zijn recht te laten komen.
      Dit project hielp me inzien hoe belangrijk het is om je omgeving goed waar te nemen. Door aandacht te besteden aan licht, schaduwen en compositie, kun je zelfs eenvoudige scènes transformeren in interessante foto's. Het werken met verschillende apparaten leerde me ook dat je niet altijd dure camera's nodig hebt het gaat om je blik.
    `,
    video: '',
    tools: ['Sony ZV-E10', 'Adobe Lightroom' , 'Adobe Photoshop', 'Apple iPhone 16 Pro Max'],
    images: [
      'images/plaatsenfotografioe/2bergen.jpeg',
      'images/plaatsenfotografioe/deliot.jpeg',
      'images/plaatsenfotografioe/deliot2.jpeg',
      'images/plaatsenfotografioe/eettent.jpeg',
      'images/plaatsenfotografioe/eifeltoren.jpeg',
      'images/plaatsenfotografioe/eifeltoren2.jpeg',
      'images/plaatsenfotografioe/eifeltoren3.jpeg',
      'images/plaatsenfotografioe/lucht.jpeg',
      'images/plaatsenfotografioe/martini.jpeg',
      'images/plaatsenfotografioe/martinikerk.jpeg',
      'images/plaatsenfotografioe/martiniuitzicht.jpeg',
      'images/plaatsenfotografioe/suikertereintoren.jpeg',
      'images/plaatsenfotografioe/toren.jpeg',
      'images/plaatsenfotografioe/torenwit.jpeg',
      'images/plaatsenfotografioe/trap.jpeg',
      'images/plaatsenfotografioe/uitzicht.jpeg',
      'images/plaatsenfotografioe/uitzicht2.jpeg',
      'images/plaatsenfotografioe/vuurtoren.jpeg',
    ],
  },


  'foto-3': {
    title:         'Producten — Groningen',
    category:      'fotografie',
    categoryLabel: 'Fotografie',
    year:          '2023',
    location:      'Groningen, NL',
    cover:         'images/productenfotografie/camera.png',
    coverIcon:     '📷',
    coverGradient: 'p-foto',
    description: `
      Voor het keuzedeel Basis Fotografie zette ik producten professioneel in scene. Ik ontwerp zelf de hele opstelling (achtergrond, licht, camerahoek), maak meerdere foto's en selecteer de beste. De bewerking in Lightroom en Photoshop zorgt voor een schone, professionele uitstraling.
      Dit project leerde me geduld en attention to detail. Kleine aanpassingen in licht of hoek kunnen een groot verschil maken in het eindresultaat. Het was ook leuk om te zien hoe je met eenvoudige middelen professioneel ogende foto's kunt maken.
    `,
    video: '',
    tools: ['Sony A7 IV', 'Adobe Lightroom' , 'Adobe Photoshop'],
    images: [
      'images/productenfotografie/camera.png',
      'images/productenfotografie/watch.png',
      'images/productenfotografie/klok.png',
      'images/productenfotografie/schoenen.png',
      'images/productenfotografie/aansteker.png',
    ],
  },

  'foto-4': {
    title:         'Dagelijkse momenten — Nederland',
    category:      'fotografie',
    categoryLabel: 'Fotografie',
    year:          '2023',
    location:      'Nederland',
    cover:         'images/dagelijksefotografie/milo.jpeg',
    coverIcon:     '📷',
    coverGradient: 'p-foto',
    description: `
    Een persoonlijke verzameling. Gefotografeerd met diverse apparaten en bewerkt in Lightroom en Photoshop. Deze serie laat zien wat ik visueel aantrekkelijk vind en helpt me experimenteren met verschillende stijlen.
    Deze verzameling gaf me vrijheid om creatief te zijn zonder strikte vereisten. Ik kon ontdekken wat mij aantrekt in fotografie en mijn eigen visuele taal ontwikkelen.
    `,
    video: '',
    tools: ['Sony A7 IV', 'Adobe Lightroom'],
    images: [
      'images/dagelijksefotografie/milo.jpeg',
      'images/dagelijksefotografie/milozw.jpeg',
      'images/dagelijksefotografie/koeienw.jpeg',
      'images/dagelijksefotografie/koeienzw.jpeg',
      'images/dagelijksefotografie/schapen.jpeg',
    ],
  },
  /* ── GRAFISCH DESIGN ────────────────────────────────────── */

  'design-1': {
    title:         'Brochure — Groen genieten',
    category:      'design',
    categoryLabel: 'Grafisch Design',
    year:          '2023 - 2024',
    location:      'Groningen, NL',
    cover:         'images/groengenieten/1074979_OMYB9M1.png',
    coverIcon:     '🎨',
    coverGradient: 'p-design',
    description: `
    Voor een schoolproject ontwikkelde ik een volledige visuele identiteit voor "Groen Genieten". Ik startte met een moodboard om de sfeer en stijl vast te stellen, maakte schetsen en meerdere varianten, en werkte het beste concept uit in Illustrator tot een herkenbare en passende uitstraling.
    Dit project leerde me het belang van een sterke concept. Voordat ik ook maar iets ging tekenen, moest ik goed nadenken over wat "Groen Genieten" betekent en hoe ik dat visueel kon uitdrukken.
    `,
    video: '',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    images: [
      'images/groengenieten/1074979_OMYB9M1.png',
      'images/groengenieten/1074979_OMYB9M11.png',
    ],
  },

  'design-2': {
    title:         'Logo — Eco Bite',
    category:      'design',
    categoryLabel: 'Grafisch Design',
    year:          '2023 - 2024',
    location:      'Groningen, NL',
    cover:         'images/ecobite/ecobite1.png',
    coverIcon:     '🎨',
    coverGradient: 'p-design',
    description: `
      Hier komt jouw volledige projectbeschrijving.
    `,
    video: '',
    tools: ['Adobe InDesign', 'Adobe Illustrator'],
    images: [
      'images/ecobite/ecobite1.png',
      'images/ecobite/ecobite2.png',
    ],
  },

  /* ── VIDEO ──────────────────────────────────────────────── */

  'video-3': {
    title:         'Videoclip — CHIHIRO',
    category:      'video',
    categoryLabel: 'Video',
    year:          '2024 - 2025',
    location:      'Groningen, NL',
    cover:         'images/overige/thumbnailchihiro.png',
    coverIcon:     '🎬',
    coverGradient: 'p-video',
    description: `
      Ik maakte een videoclip met klasgenoten. Ik filmde met een drone en iPhone. We monteerden alles in Premiere Pro. We kozen zelf een nummer en maakten een idee.
      Dit project was heel anders omdat ik met drone werkte. Het was veel werk maar ik leerde veel. Het omgaan met veel ruwe beelden was lastig maar interessant.
    `,
    video: 'https://youtu.be/dQhH9xp8W-Q',  
    tools: ['Adobe Premiere Pro', 'Adobe After Effects'],
    
  },

  'video-2': {
    title:         'Promo Video — Greymenband',
    category:      'video',
    categoryLabel: 'Video',
    year:          '2025 - 2026',
    location:      'Groningen, NL',
    cover:         'images/Greymenband/GreyMenThumbnail.png',
    coverIcon:     '🎬',
    coverGradient: 'p-video',
    description: `
      Ik werkte met andere studenten aan een promotievideo voor de band Greymen. We monteerden de beelden in Premiere Pro. We zorgden voor goede overgangen en kleurcorrectie. De video is klaar voor social media.
      Dit was mijn eerste echt promotieproject. Ik leerde dat alles dezelfde stijl moet hebben. Samenwerken met anderen was leerzaam.
    `,
    video: 'https://youtu.be/Ot1bdDQkoPA',
    tools: ['AdobePremiere Pro', 'Adobe After Effects'],
   
  },

};
