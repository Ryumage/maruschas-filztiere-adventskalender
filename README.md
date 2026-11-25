# Filziger Adventskalender – Maruschas Filztiere

Adventskalender mit 24 Türchen für [marionetten-illusion.de](https://www.marionetten-illusion.de/) (Jimdo Creator).
Läuft als statische Seite auf GitHub Pages und wird per **Widget/HTML-Element** in Jimdo eingebunden.

- **Kalender:** https://ryumage.github.io/maruschas-filztiere-adventskalender/
- **Demo mit Tag-Regler:** https://ryumage.github.io/maruschas-filztiere-adventskalender/demo.html
- **Vorschau eines bestimmten Tages:** `…/?vorschau=12` (simuliert den 12. Dezember, eigener Speicher)

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Der Kalender (Design, Logik) |
| `inhalte.js` | **Texte, Bilder und Links der 24 Türchen – hier wird bearbeitet** |
| `jimdo-einbettung.html` | Code zum Einfügen in Jimdo |
| `demo.html` | Testseite: Kalender eingebettet wie auf Jimdo, mit Tag-Regler |
| `fonts/` | Schrift „Exo 2“ (wie auf der Website), lokal gehostet, ohne Google Fonts |

## So funktioniert’s

- Türchen *n* lässt sich ab dem *n*. Dezember öffnen. Verpasste Tage können nachgeholt werden. Bis zum 6. Januar bleiben alle Türchen offen.
- Geöffnete Türchen speichert der Kalender im `localStorage` des Browsers (Schlüssel `maruscha-adventskalender-<Jahr>`). Kein Server, kein Login, kein Tracking.
- Die Bilder kommen direkt von Jimdos Bild-CDN (`image.jimcdn.com`), also aus den vorhandenen Galerien.
- Links in den Türchen öffnen die jeweilige Seite von marionetten-illusion.de im ganzen Fenster (`target="_top"`).

## GitHub Pages einschalten (einmalig)

1. Repository → **Settings → Pages**
2. *Source:* **Deploy from a branch**, *Branch:* den Branch mit diesen Dateien (z. B. `main`), Ordner `/ (root)` → **Save**
3. Nach ca. 1 Minute ist der Kalender unter der URL oben erreichbar.

## In Jimdo einbinden

1. Startseite (oder eine eigene Seite „Adventskalender“) bearbeiten
2. **Element hinzufügen → Widget/HTML**
3. Inhalt von [`jimdo-einbettung.html`](jimdo-einbettung.html) einfügen → Speichern

Das iframe passt seine Höhe automatisch an.

## Hinweise Datenschutz

- Durch das iframe ruft der Browser der Besucher Dateien von GitHub (github.io) ab. Dabei wird die IP-Adresse an GitHub übertragen. Das sollte in der Datenschutzerklärung erwähnt werden.
- `localStorage` wird nur für die vom Besucher gewünschte Funktion genutzt (welche Türchen schon offen sind). Es gibt keine Cookies und kein Tracking.
