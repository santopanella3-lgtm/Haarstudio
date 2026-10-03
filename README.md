# Haarstudio Galerie da Lucia – Website

Statische Multipage-Website für den **Damensalon Haarstudio Galerie da Lucia**
(Inhaberin: **Lucia Suma**) in der Augsburger Innenstadt. Aufbau und
Seitenstruktur orientieren sich an einer klassischen Salon-Website
(Vorbild: altstadt-barbier.de): Startseite mit Hero, Info-Leiste,
Leistungs-Vorschau, Kennzahlen, Galerie, Standorte-Teaser, Kundenstimmen,
Öffnungszeiten und Call-to-Action; dazu eigene Unterseiten.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero, Info-Leiste, Intro, Kennzahlen, Leistungen (Auszug), Galerie-Vorschau, Standorte-Teaser, Kundenstimmen, Öffnungszeiten, CTA |
| `leistungen.html` | Preisliste als Tabellen (Damen, Haarfarbe, Herren, Kinder, Augen, Inklusivleistungen) + FAQ |
| `ueber-uns.html` | Salon-Geschichte, Haltung/Werte, Team (Lucia Suma, Yasemin, Platzhalter) |
| `team.html` | Seite „Das Team“: Bilder-Slider mit drei Personen, je Foto + kurze Story. **Bilder/Texte sind Platzhalter** (`[ … ]`) – Fotos in `assets/img/team-1..3.jpg` überschreiben, Storys im `<p class="team-slide__story">` eintragen. Slider-Logik in `js/main.js` (`[data-team-slider]`), Styles unter „Team-Slider“ in `style.css` |
| `galerie.html` | **Drei** Bild-Slider (`[data-gallery-slider]`, Pfeile/Punkte/Wischen, Klick öffnet die Lightbox): „Aus dem Salon“ (`g1..g9.jpg`), „Unsere Farben“ (`farbe-1..9.jpg`) und „Braut-Styling“ (`braut-1..9.jpg`). Die `farbe-`/`braut-`-Bilder sind aktuell **Platzhalter** (3:4, „Bild folgt“) – einfach mit echten Fotos gleichen Namens überschreiben. Slider-Logik in `js/main.js` (initialisiert alle `[data-gallery-slider]`). Dazu Social-Media-Band mit Instagram- und Facebook-Karte |
| `standorte.html` | Standort (Antoniushof) mit Adresse, Öffnungszeiten, OpenStreetMap-Karte und Routen-Links |
| `kontakt.html` | Telefon, Adresse, Öffnungszeiten, Anruf-Karte (Termine nur telefonisch), Anfahrts-Hinweis |
| `impressum.html` | Impressum – **Vorlage mit Platzhaltern** |
| `datenschutz.html` | Datenschutzerklärung – **Vorlage mit Platzhaltern** |

Gemeinsame Assets: `css/style.css`, `js/main.js`, `assets/img/*`.

## Enthaltene Daten

- **Inhaberin:** Lucia Suma
- **Standort – Antoniushof:** Dominikanergasse 4, 86150 Augsburg
  (Altstadt, nahe Maximilianstraße)
- **Telefon:** 0821 71049889 (`tel:+4982171049889`)
- **Öffnungszeiten:** Mo–Fr 09:00–18:30 Uhr, Sa 09:00–16:00 Uhr, Sonntag geschlossen
- **Instagram:** [@haarstudio_galerie_da_lucia](https://www.instagram.com/haarstudio_galerie_da_lucia/)
- **Facebook:** Seite „Haarstudio Galerie da Lucia" (Link noch ergänzen)
- **Positionierung / Leistungen:** typgerechte Beratung, Schnitt, Farbe,
  Foliensträhnen, Balayage, Blondierung, Hochsteck- & Braut-Styling;
  Kopfmassage im Massagesessel bei jeder Haarwäsche
- **Team:** Lucia Suma (Inhaberin), Yasemin (Stylistin)
- **Bewertung:** 5,0 / 5 bei 52 Bewertungen – **externe Portalangabe**
  (u. a. hairandlounge.de, Stand 2023). Auf der Seite entsprechend als
  Portalbewertung gekennzeichnet; **nicht** in den strukturierten Daten
  (`HairSalon`-JSON-LD) hinterlegt, um Rich-Results-Richtlinien einzuhalten.

## Anpassen

### Bilder
In `assets/img/` liegen jetzt echte Fotos (JPG). Zum Austauschen einfach
die Datei mit **gleichem Namen** überschreiben und ggf. `width`/`height`
im `<img>` anpassen. Verwendete Namen:

```
hero.jpg           Startseiten-Hero (quer, 3:2, 2000×1334) – echtes Foto des
                   Salons (Uhr, Nische mit Diplom/Hortensien, Produktregal,
                   Stylingplätze, Schaufenster), vollflächig hinter
                   Überschrift/Text. Bild aufgehellt (Helligkeit +13 %,
                   Kontrast +4 %, Sättigung +3 %), Verlauf links/unten nur
                   leicht abgedunkelt. Stock-Vorgänger: hero-stock-backup.jpg.
interior.jpg       Intro-Bild Startseite (quer) – echtes Foto eines
                   Stylingplatzes (großer LED-Spiegel, Holztresen mit Orchidee,
                   Friseurstühle). Dunkles Original aufgehellt (Gamma + Helligkeit).
                   Frühere Fassungen: interior-stock-backup.jpg, interior-2344-prev.jpg.
story.jpg          Bild Öffnungszeiten-Abschnitt Startseite (hoch) – Moroccanoil-
                   Produktdisplay im Salon (aus IMG_2382, Schwarzbalken entfernt,
                   auf 3:4 zugeschnitten, aufgehellt). Vorherige Fassung:
                   story-prev.jpg.
about.jpg          Bild "Über uns" / Abschnitt „Unsere Geschichte" (hoch, 3:4) –
                   echtes Foto: Stylingplatz am Schaufenster mit LED-Spiegel
                   und Moroccanoil-Regal (aus IMG_2362, aufgehellt)
g1.jpg             Galerie – Schnitt
g2.jpg             Galerie – Coloration
g3.jpg             Galerie – Balayage
g4.jpg             Galerie – Foliensträhnen / Blondierung
g5.jpg             Galerie – Braut-/Hochsteck-Styling
g6.jpg             Galerie – Föhnwelle
g7.jpg             Galerie – Salon-Impression (quer)
g8.jpg             Galerie – Farbe & Tönung
g9.jpg             Galerie – Hochsteck-Detail
farbe-1..9.jpg     Galerie-Slider „Unsere Farben" – PLATZHALTER (3:4, 1200×1600,
                   „Bild folgt"). Mit echten Fotos gleichen Namens überschreiben.
braut-1..9.jpg     Galerie-Slider „Braut-Styling" – PLATZHALTER (3:4, 1200×1600,
                   „Bild folgt"). Mit echten Fotos gleichen Namens überschreiben.
team-1..3.jpg      Teamfotos (Hochformat 3:4) – aktuell generische Arbeitsfotos
logo.png           Wort-Bild-Marke „L | S · LUCIA SUMA · HAARSTUDIO GALERIE DA LUCIA“
                   (freigestellt, transparent) – Header oben links, Höhe per CSS
favicon.svg        Browser-Icon (unverändert)
```

**Bildquellen / Lizenz:** Die Fotos stammen von [Pexels](https://www.pexels.com)
und [Unsplash](https://unsplash.com) (kostenlose Lizenz, kommerzielle Nutzung
ohne Namensnennung erlaubt). Die **Teamfotos** (`team-1..3.jpg`) sind bewusst
neutrale Arbeitsaufnahmen ohne erkennbare Personen – vor dem Livegang durch
echte Fotos von Lucia, Yasemin & Team ersetzen (Alt-Texte in `ueber-uns.html`
sind entsprechend allgemein gehalten).

### Texte / Preise
- `leistungen.html` enthält die **echte Preisliste** (Stand: Foto der
  Salon-Preisliste, Sept. 2026) als `.price-table`-Tabellen: Damen, Haarfarbe,
  Herren, Kinder, Augen. Bei Preisänderungen einfach die `<td>`-Werte anpassen.
- Team-Namen und -Rollen in `ueber-uns.html` ergänzen/prüfen.
- E-Mail-Adresse: `lucia.suma@icloud.com` – eingetragen in `kontakt.html`,
  `impressum.html`, `datenschutz.html`, im Footer aller Seiten und im JSON-LD
  von `index.html`. Überall mit dem Hinweis, dass Termine **ausschließlich
  telefonisch** vereinbart werden.
- Facebook-Link prüfen: in `galerie.html` (Social-Media-Band) ist aktuell
  `facebook.com/p/haarstudio_galerie_da_lucia-100063655596286/` hinterlegt –
  gegen die echte Seiten-URL abgleichen und ggf. ersetzen.
- Domain in `robots.txt` und `sitemap.xml` (`www.galerie-da-lucia.de`)
  auf die echte Domain ändern.

### Karte (Standort)
Die OpenStreetMap-Karte in `standorte.html` ist auf die echte Adresse gesetzt
(Dominikanergasse 4, 86150 Augsburg, Gebäude im Lechviertel):

- Marker: `48.36590, 10.89982`

Die Karte wird aus Datenschutzgründen **erst nach einem Klick** geladen
(Zwei-Klick-Lösung): Der Platzhalter `.map-consent` trägt die Karten-URL in
`data-map-src`; `js/main.js` erzeugt das `<iframe>` erst beim Klick auf
„Karte laden". Vorher geht keine Anfrage an OpenStreetMap.

Die Koordinaten stehen an zwei Stellen in `standorte.html`: in `data-map-src`
(`marker=` und `bbox=`) und im „Größere Karte"-Link (`mlat`/`mlon` sowie im
`#map=`-Fragment). Der „Route mit Google Maps"-Link nutzt die Namens-/Adresssuche
und öffnet direkt den Google-Eintrag des Salons.

### Terminvereinbarung
Termine werden **ausschließlich telefonisch** vereinbart. Es gibt bewusst
**kein Kontaktformular** und **keine Online-Buchung**. `kontakt.html` zeigt dafür
eine „Anruf-Karte“ (`.call-card`) mit Telefonnummer, Erreichbarkeit und Hinweis;
alle „Termin"-Buttons der Website verlinken direkt auf `tel:+4982171049889`.

### Online-Terminbuchung (optional, nachträglich)
Falls doch einmal ein Buchungs-Widget gewünscht ist (z. B. **Fresha** oder
**Treatwell**):

1. Beim Anbieter ein Konto anlegen und den Einbettungs-Code / Buchungslink holen.
2. Auf `kontakt.html` (und optional im Hero-CTA von `index.html`) einen Button
   `„Online buchen"` ergänzen, der auf den Buchungslink zeigt, **oder** das
   `<iframe>`/Script-Snippet des Anbieters an passender Stelle einsetzen.
3. In `datenschutz.html` Abschnitt 7 („Terminbuchung über Drittanbieter")
   ausfüllen. Bei Script-Einbettung ggf. Cookie-Consent-Banner nötig.

### Impressum & Datenschutz
Noch **offen vor dem Livegang**:

1. `datenschutz.html` Abschnitt 2 – `[Hosting-Anbieter, Anschrift]` eintragen
   und AV-Vertrag (Art. 28 DSGVO) mit dem Hoster abschließen.
2. `impressum.html` – `[ggf. Rechtsform]` und `[DE… — falls vorhanden]`
   (USt-IdNr.) klären. Ohne USt-IdNr. den ganzen Abschnitt löschen.
3. Einwilligungen der auf den Fotos abgebildeten Personen schriftlich einholen
   (siehe `datenschutz.html` Abschnitt 6).

Zuständige Kammer: **Handwerkskammer für Schwaben**. Vor dem Live-Gang
rechtlich prüfen lassen (z. B. Generator von e-recht24 / Dr. Schwenke).

### Schriften (lokal eingebunden)
Cormorant Garamond und Inter liegen als `.woff2` in `assets/fonts/` und werden
in `css/style.css` per `@font-face` eingebunden (Subsets `latin` + `latin-ext`).
Es gibt **keine Verbindung zu Google-Servern** – die `<link>`-Zeilen zu
`fonts.googleapis.com` wurden aus allen HTML-Dateien entfernt.

### Security-Header
- `_headers` – für **Netlify**
- `.htaccess` – für **Apache**-Hoster (IONOS, Strato, All-Inkl …)

Beide setzen CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy` und `Permissions-Policy`. Die CSP erlaubt als einzige
Fremdquelle `frame-src https://www.openstreetmap.org` (für die Karte nach Klick).
Wird später ein Drittanbieter-Script ergänzt, muss die CSP angepasst werden.

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder ein kleiner lokaler Server:

```bash
cd haarstudio-galerie-da-lucia
python3 -m http.server 8000
# http://localhost:8000
```

## Live-Betrieb & Deployment

**Die Website ist live unter https://www.galerie-da-lucia.de**

| | |
|---|---|
| Hosting | Netlify, Projekt `timely-gecko-6c85cc` (Team SF) |
| Repository | github.com/santopanella3-lgtm/Haarstudio, Branch `main` |
| Domain | `galerie-da-lucia.de`, registriert bei INWX |
| Inhaberin der Domain | Lucia Suma (muss mit dem Impressum übereinstimmen) |
| HTTPS | Let's Encrypt, von Netlify automatisch verlängert |

### Änderungen veröffentlichen

Jeder Push auf `main` löst automatisch ein Deployment aus – nach rund
30 Sekunden ist die Änderung live. Kein Build-Schritt, keine weiteren Klicks.

```bash
git add -A
git commit -m "Was geändert wurde"
git push
```

### DNS-Einträge bei INWX

Nicht verändern, ausser das Hosting wechselt:

```
(leer)   A       75.2.60.5                          -> Netlify Apex-Loadbalancer
www      CNAME   timely-gecko-6c85cc.netlify.app    -> kanonische Adresse
```

`netlify.toml` leitet `galerie-da-lucia.de` per 301 auf `www.` um; `www` ist
die kanonische Adresse (so auch in `sitemap.xml` und `robots.txt`).

### ⚠️ Beim Ändern der Structured Data beachten

Die CSP in `_headers` und `.htaccess` enthält einen **SHA-256-Hash** des
JSON-LD-Blocks aus `index.html`. Wird dieser Block geändert (Öffnungszeiten,
Adresse, Telefon), muss der Hash neu berechnet und an beiden Stellen
eingetragen werden – sonst blockiert der Browser die strukturierten Daten:

```bash
python3 -c "
import re,hashlib,base64
s=open('index.html',encoding='utf-8').read()
b=re.search(r'<script type=\"application/ld\+json\">(.*?)</script>',s,re.S).group(1)
print('sha256-'+base64.b64encode(hashlib.sha256(b.encode()).digest()).decode())"
```

### Lokal testen ohne Cache-Probleme

```bash
python3 -m http.server 8777
# http://localhost:8777
```

## Technik

- Semantisches HTML5, eine gemeinsame `style.css` (Custom Properties, Grid/Flex,
  responsiv, `prefers-reduced-motion`), ein `main.js` (Mobile-Nav, Header beim
  Runterscrollen aus-/beim Hochscrollen einblenden, Scroll-Reveal, Lightbox,
  „heute"-Markierung in den Öffnungszeiten-Tabellen).
- Kein Build-Schritt, keine externen Abhängigkeiten. Schriften liegen
  lokal in `assets/fonts/` (siehe Abschnitt „Schriften").
- `HairSalon`-Structured-Data auf der Startseite (Name, Adresse,
  Öffnungszeiten, Inhaberin, Instagram).
