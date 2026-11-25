/*
 * Inhalte der 24 Türchen
 * ----------------------
 * Hier können Texte, Bilder und Links frei angepasst werden.
 *
 *   titel  – Überschrift im geöffneten Türchen
 *   art    – kleines Etikett (z. B. "Aus der Galerie", "Wissen", "Eigentlich …")
 *   text   – Absätze (Array, jeder Eintrag = ein Absatz)
 *   bild   – Pfad des Bildes bei Jimdo (alles nach ".../path/s910906f55e4a6c74/image/")
 *            oder weglassen → dann erscheint ein gefilztes Herz
 *   bildAlt – Bildbeschreibung (Barrierefreiheit)
 *   link   – { url, label } – optionaler Knopf zur passenden Seite
 */
window.ADVENT_INHALTE = [
  /* 1 */ {
    art: "Willkommen",
    titel: "Schön, dass Sie da sind!",
    text: [
      "Ich bin Angelika – gelernte Floristin, viele Jahre mit eigenem Blumenladen. Danach kamen Ton, dann der Bau exklusiver Marionetten, und 2017 bin ich auf das Nadelfilzen gestoßen und habe mich sofort verliebt.",
      "Bis Heiligabend öffnet sich hier jeden Tag ein Türchen mit einem Stück aus meiner filzigen Welt."
    ],
    bild: "i7c263768efef6189/version/1695926011/image.jpg",
    bildAlt: "Angelika, die Künstlerin hinter Maruschas Filztiere",
    link: { url: "/über-mich/", label: "Mehr über mich" }
  },
  /* 2 */ {
    art: "Aus der Galerie",
    titel: "Weiß wie der erste Schnee",
    text: [
      "Ein weißer Schäferhund, ganz aus Schafwolle. Gerade helles Fell ist eine kleine Kunst: Schatten, Konturen und Ausdruck müssen allein aus feinen Farbnuancen entstehen.",
      "Jedes meiner Filztiere ist ein Unikat, etwa 15–20 cm groß und nach Fotovorlage gefertigt."
    ],
    bild: "ie4ecfaf988b01e04/version/1775812115/realistisches-filztier-wei%C3%9Fer-sch%C3%A4ferhund-tierportrait-handgefertigt.jpg",
    bildAlt: "Handgefilzter weißer Schäferhund, liegend im Gras",
    link: { url: "/gallerie-i/", label: "Zur Galerie I" }
  },
  /* 3 */ {
    art: "Wissen",
    titel: "Das Geheimnis der Filznadel",
    text: [
      "Beim Nadelfilzen wird Schafwolle mit speziellen Nadeln verdichtet. Diese Nadeln haben feine Widerhaken, die die Fasern bei jedem Einstich miteinander verhaken.",
      "Stich für Stich – tausendfach – wird aus einem lockeren Wollbausch eine feste Form."
    ],
    bild: "iad65c1694d96661a/version/1775825978/handgefilzte-wolle-beim-nadelfilzen-detailaufnahme-filztechnik-mit-filznadel.jpg",
    bildAlt: "Hände beim Nadelfilzen an einem schwarz-weißen Hundekopf",
    link: { url: "/wissenswertes-über-das-nadelfilzen/", label: "Wissenswertes über das Nadelfilzen" }
  },
  /* 4 */ {
    art: "Eigentlich …",
    titel: "Eigentlich wollte ich nur einen Hund haben",
    text: [
      "Einen schwarz-weißen. Sonst nichts. Und nicht größer als 40 Zentimeter. Wie das ausgegangen ist?",
      "In meinem Blog „Eigentlich …“ erzähle ich von meinen Tieren, meiner Arbeit und all den Dingen, die eigentlich ganz anders geplant waren."
    ],
    bild: "ia1d0174c72ae605a/version/1790450194/eigentlich-wollte-ich-nur-einen-hund-haben.jpg",
    bildAlt: "Schwarz-weißer Hund mit herausgestreckter Zunge im Garten",
    link: { url: "/2026/09/26/eigentlich-wollte-ich-nur-einen-hund/", label: "Geschichte lesen" }
  },
  /* 5 */ {
    art: "Aus der Galerie",
    titel: "Wer hat die Nüsse versteckt?",
    text: [
      "Passend zur Nuss-Saison: ein kleiner Hamster mit seinem Wintervorrat.",
      "Nicht nur Hunde und Katzen – ich filze jedes Tier, das Ihnen am Herzen liegt."
    ],
    bild: "i21d3640a7fcf0a5c/version/1775819836/handgefilztes-hamsterportrait-mit-n%C3%BCssen.jpg",
    bildAlt: "Handgefilzter Hamster zwischen Haselnüssen",
    link: { url: "/galerie-ii/", label: "Zur Galerie II" }
  },
  /* 6 */ {
    art: "Nikolaus",
    titel: "Bunte Hunde für den Stiefel",
    text: [
      "Neben der Wolle arbeite ich auch mit Ton: Meine „Bunten Hunde“ werden aus hochwertigem Ton modelliert und anschließend mit Acrylfarben kunstvoll bemalt.",
      "Jedes Stück ist ein Unikat und wird in dieser Form kein zweites Mal gefertigt."
    ],
    bild: "i4b17b7b2f502132d/version/1739221902/bunter-hund.jpg",
    bildAlt: "Bunt bemalter Keramik-Dackel",
    link: { url: "/bunte-hunde-keramik/", label: "Bunte Hunde / Keramik" }
  },
  /* 7 */ {
    art: "Wissen",
    titel: "Von grob zu fein",
    text: [
      "Gearbeitet wird von außen nach innen: Mit gröberen Nadeln baue ich zuerst die Grundform auf.",
      "Für filigrane Details und glatte Oberflächen kommen dann immer feinere Nadeln zum Einsatz – so lassen sich Ausdruck, Struktur und Konturen präzise herausarbeiten."
    ],
    bild: "ife2b67739a37a776/version/1775826191/filznadeln-mit-widerhaken-detailaufnahme-werkzeug-f%C3%BCr-nadelfilzen.jpg",
    bildAlt: "Weißer, flauschiger Filzhund in der Hand gehalten",
    link: { url: "/wissenswertes-über-das-nadelfilzen/", label: "Mehr zur Technik" }
  },
  /* 8 */ {
    art: "Aus der Galerie",
    titel: "Schneeweißes Kaninchen",
    text: [
      "Lange Ohren, weiches Fell, wacher Blick – ein Kaninchen aus reiner Schurwolle.",
      "Mit viel Geduld und Liebe zum Detail entsteht so Schritt für Schritt ein realistisches Abbild."
    ],
    bild: "i85ce6f60e3de35c7/version/1775812612/handgefilztes-kaninchen-realistisch-aus-wolle-tierportrait-handgefertigt.jpg",
    bildAlt: "Handgefilztes weißes Kaninchen im Gras",
    link: { url: "/gallerie-i/", label: "Zur Galerie I" }
  },
  /* 9 */ {
    art: "Eigentlich …",
    titel: "Eigentlich war da nur ein Kopf mit großen Ohren",
    text: [
      "Ein schwarzer Kopf mit zwei ziemlich großen Ohren – viel mehr Hund war auf dem Foto nicht zu erkennen. Wir fanden ihn großartig. Ein kleiner schwarzer Schlumpf eben.",
      "Der Schlumpf hieß Peppino. Den Namen haben nicht wir verbrochen. :-)"
    ],
    bild: "i0fc642662df8d5c8/version/1791020379/eigentlich-war-da-nur-ein-kopf-mit-gro%C3%9Fen-ohren.jpg",
    bildAlt: "Junger schwarzer Hund mit großen Ohren vor einer Holztür",
    link: { url: "/2026/10/03/eigentlich-war-da-nur-ein-kopf-mit-gro%C3%9Fen-ohren/", label: "Peppinos Geschichte" }
  },
  /* 10 */ {
    art: "So entsteht Ihr Filztier",
    titel: "Alles beginnt mit Fotos",
    text: [
      "Ein Filztier beginnt bei mir nicht mit der ersten Nadel, sondern mit Fotos. Am besten aus verschiedenen Perspektiven – von vorne, von der Seite und von hinten.",
      "So kann ich Ausdruck, Körperform und Fellzeichnung möglichst genau umsetzen. Original und Filz-Zwilling sehen Sie hier nebeneinander."
    ],
    bild: "i814b54a63f7f5e40/version/1775812115/realistisches-hundeportrait-aus-wolle-handgefilzt-nach-vorlage.jpg",
    bildAlt: "Ein echter Hund im Schnee neben seinem handgefilzten Ebenbild",
    link: { url: "/", label: "So läuft eine Anfrage ab" }
  },
  /* 11 */ {
    art: "Aus der Galerie",
    titel: "Auch Pferde dürfen",
    text: [
      "Ob Hundeportrait, Katzenportrait oder Pferdeportrait – jedes Filztier wird von Hand gearbeitet und orientiert sich am Charakter und Ausdruck Ihres Lieblings.",
      "So entsteht kein Produkt von der Stange, sondern ein persönliches Erinnerungsstück."
    ],
    bild: "idd4ccc469d3b66b0/version/1775826813/handgefilztes-pferdeportrait-aus-wolle-detailaufnahme-realistisches-filztier.jpg",
    bildAlt: "Handgefilztes Pferd zwischen grünen Pflanzen",
    link: { url: "/wissenswertes-über-das-nadelfilzen/", label: "Mehr Filztiere ansehen" }
  },
  /* 12 */ {
    art: "Werkstatt-Einblick",
    titel: "Braun ist nicht gleich Braun",
    text: [
      "Bevor gefilzt wird, suche und mische ich die passenden Wollfarben. Gerade bei natürlichen Fellfarben reicht selten einfach nur „braun“, „grau“ oder „schwarz“.",
      "Oft entstehen die richtigen Farbtöne erst durch das Zusammenstellen verschiedener Wollfarben."
    ],
    bild: "i40401bd1087cfb42/version/1775820885/handgefilztes-spaniel-hundeportrait-stehend-im-wasser-aus-wolle.jpg",
    bildAlt: "Handgefilzter rotbrauner Spaniel, der sich im Wasser spiegelt",
    link: { url: "/preisliste/", label: "Vom Foto zum Filztier" }
  },
  /* 13 */ {
    art: "Eigentlich …",
    titel: "Eigentlich wollte ich anfangen",
    text: [
      "Ein neuer Auftrag wartet. Was brauche ich? Draht. Eine kleine Zange. Meine Pfeifenputzer. Ein Foto vom Hund. Alles da.",
      "Die Sonne scheint, im Hintergrund läuft Musik – eigentlich der perfekte Moment, um anzufangen. Eigentlich."
    ],
    bild: "i2043552a69ac2fed/version/1791835564/eigentlich-wollte-ich-anfangen.jpg",
    bildAlt: "Arbeitstisch mit Wolle und Filzfiguren im Garten",
    link: { url: "/2026/10/12/eigentlich-wollte-ich-anfangen/", label: "Weiterlesen" }
  },
  /* 14 */ {
    art: "Aus der Galerie",
    titel: "Dackel im Schnee",
    text: [
      "Kurze Beine, große Persönlichkeit – und nicht ganz einverstanden mit dem Wetter.",
      "Jedes Tier ist einzigartig, und genau so entsteht auch jedes meiner Filztiere als Einzelstück."
    ],
    bild: "i6806d49172c57b1d/version/1775819835/handgefilztes-dackel-hundeportrait-liegend-aus-wolle-realistisch.jpg",
    bildAlt: "Handgefilzter schwarz-brauner Dackel im Schnee",
    link: { url: "/galerie-ii/", label: "Zur Galerie II" }
  },
  /* 15 */ {
    art: "Marionetten-Illusion",
    titel: "Haben Sie einen „Patienten“?",
    text: [
      "Bevor die Wolle kam, waren es Marionetten – und die liegen mir bis heute am Herzen. Im Laufe der Zeit können Farben verblassen, Fäden spröde werden oder Teile brechen.",
      "Ich repariere und restauriere Marionetten aller Art, bis hin zur Generalrestaurierung. Ein Foto der beschädigten Stelle per E-Mail genügt für ein unverbindliches Angebot."
    ],
    bild: "icbd8ca038592ba25/version/1487707593/marionetten.jpg",
    bildAlt: "Marionettenköpfe und -hände in der Werkstatt",
    link: { url: "/marionetten-reparaturen/", label: "Marionetten-Reparaturen" }
  },
  /* 16 */ {
    art: "Aus der Galerie",
    titel: "Mal ganz exotisch",
    text: [
      "Wer sagt, dass Filztiere immer flauschig sein müssen? Auch eine Echse lässt sich aus Wolle formen – samt Schuppenkamm und grüner Farbenpracht.",
      "Haben Sie ein ungewöhnliches Haustier? Fragen Sie mich einfach."
    ],
    bild: "i1d15f2404f861710/version/1775819975/handgefilztes-reptil-aus-wolle-detailgetreues-filztier-realistisch.jpg",
    bildAlt: "Handgefilzte grüne Echse auf einem Stein",
    link: { url: "/kontakt/", label: "Unverbindlich anfragen" }
  },
  /* 17 */ {
    art: "Eigentlich …",
    titel: "Eigentlich filze ich nur das, was ich sehe",
    text: [
      "Ein schwarzer Hund. Eine Französische Bulldogge. Eigentlich kein Problem. Eigentlich.",
      "Denn Schwarz schluckt so einiges – und auf Fotos offenbar besonders gerne die Dinge, die ich zum Filzen brauche."
    ],
    bild: "ibf23cd005b95ba83/version/1792310641/eigentlich-filze-ich-nur-das-was-ich-sehe.png",
    bildAlt: "Fotos einer schwarzen Französischen Bulldogge auf dem Arbeitstisch",
    link: { url: "/2026/10/18/eigentlich-filze-ich-nur-das-was-ich-sehe/", label: "Weiterlesen" }
  },
  /* 18 */ {
    art: "Werkstatt-Einblick",
    titel: "Das Gesicht kommt zum Schluss",
    text: [
      "Augen, Gesicht und Ausdruck entscheiden darüber, ob aus Wolle tatsächlich dieses eine Tier wird. Deshalb gehören die feinen Details zu den letzten Arbeitsschritten.",
      "Und manchmal kommt dann dieser eine Moment, in dem ich denke: Ja. Jetzt bist du da."
    ],
    bild: "id98444e6a73e8ae8/version/1775822415/handgefilztes-hundeportrait-mexikanischer-nackthund-aus-wolle-realistisch.jpg",
    bildAlt: "Handgefilzter Nackthund mit weißem Haarschopf",
    link: { url: "/preisliste/", label: "Mehr aus der Werkstatt" }
  },
  /* 19 */ {
    art: "Aus der Galerie",
    titel: "In vollem Lauf",
    text: [
      "Nicht jedes Filztier sitzt brav: Dieser Saluki-Windhund ist mitten in der Bewegung eingefangen – mit wehendem Fell an Ohren und Rute.",
      "Haltung und Bewegung sind für den Charakter genauso wichtig wie das Gesicht."
    ],
    bild: "ic4e3ccaf30760c1c/version/1775820215/handgefilztes-saluki-windhund-tierportrait-laufend-aus-wolle-realistisch.jpg",
    bildAlt: "Handgefilzter schwarz-weißer Saluki im Lauf",
    link: { url: "/gallerie-i/", label: "Zur Galerie I" }
  },
  /* 20 */ {
    art: "Herzensangelegenheit",
    titel: "Für Maruscha",
    text: [
      "Diese Seite trägt den Namen meines Seelenhundes Maruscha. Ich habe sie ihr gewidmet – aus tiefer Verbundenheit und um ihr ein ehrenvolles Andenken zu bewahren.",
      "Jedes Tier, das ich filze, ist für mich ein Stück meines geliebten Mupfelchens, das in meinem Herzen weiterlebt."
    ],
    link: { url: "/über-mich/", label: "Über mich" }
  },
  /* 21 */ {
    art: "Eigentlich …",
    titel: "Und dann wäre da noch Cleo …",
    text: [
      "Damit nicht der Eindruck entsteht, dass bei uns nur zwei Hunde für Unterhaltung sorgen: Da ist ja auch noch Cleo, unsere Katze.",
      "Sie ist dieses Jahr 19 geworden. Das weiß sie aber nicht."
    ],
    bild: "i72a1b20d077572b8/version/1792953234/und-dann-w%C3%A4re-da-eigentlich-noch-cleo.jpg",
    bildAlt: "Getigerte Katze Cleo vor ihrem Futternapf",
    link: { url: "/2026/10/25/und-dann-w%C3%A4re-da-eigentlich-noch-cleo/", label: "Cleos Geschichte" }
  },
  /* 22 */ {
    art: "Aus der Galerie",
    titel: "Getupft, gestreift, gefleckt",
    text: [
      "Besondere Zeichnungen, langes Fell oder feine Farbverläufe bedeuten beim Filzen viel zusätzliche Arbeit – jeder Tupfen will an seinem Platz sein.",
      "Während der gesamten Arbeit vergleiche ich mein Filztier immer wieder mit den Fotos und korrigiere, bis Proportionen und Ausdruck stimmen."
    ],
    bild: "ib239aa75e12fb5e3/version/1775812612/handgefilztes-katzenportrait-realistisch-aus-wolle-tierportrait-handgefertigt.jpg",
    bildAlt: "Handgefilzte gefleckte Wildkatze auf einem Baumstamm",
    link: { url: "/gallerie-i/", label: "Zur Galerie I" }
  },
  /* 23 */ {
    art: "Geschenkidee",
    titel: "Eine Erinnerung, die bleibt",
    text: [
      "Ein handgefilztes Portrait Ihres Tieres – als Geschenk zum Geburtstag, zu Weihnachten oder als bleibende Erinnerung an einen geliebten Begleiter.",
      "Ca. 15–20 cm groß, nach Ihren Fotos gefertigt, ab 300 €. Schicken Sie mir einfach ein paar Bilder – ich mache Ihnen gerne ein unverbindliches Angebot."
    ],
    bild: "id927ae72d3599b20/version/1775819975/handgefilzte-hunde-gruppe-mehrere-hundeportraits-aus-wolle-realistisch.jpg",
    bildAlt: "Drei handgefilzte schwarz-weiße Hunde auf einem Holzboden",
    link: { url: "/kontakt/", label: "Unverbindlich anfragen" }
  },
  /* 24 */ {
    art: "Heiligabend",
    titel: "Frohe Weihnachten!",
    text: [
      "Danke, dass Sie mich durch den Advent begleitet haben.",
      "Ich wünsche Ihnen und Ihren Vierbeinern ein warmes, friedliches Weihnachtsfest und einen guten Start ins neue Jahr. Herzliche Grüße, Angelika"
    ],
    bild: "i4f0d1d596f896a1f/version/1775826359/handgefilztes-whippet-hundeportrait-aus-wolle-im-schnee-am-see.jpg",
    bildAlt: "Handgefilzter Whippet im Schnee an einem See",
    link: { url: "/", label: "Zur Startseite" }
  }
];
