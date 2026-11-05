# To-Do-Liste

## Als Nächstes
- [ ] **🔝 Feedback zu v0.11.0 (2026-11-05, → v0.12)**
  - [ ] Fortschritt: „Ich | Freunde“ – Freunde-Icon ragt in den Strich von Ich (zu breit); „Verlauf“-Überschrift weg; Tag-Details: „Details“ größer/präsenter
  - [ ] Rückblick-Tabelle: Trennlinien links/rechts nicht bündig; weniger Grau, schönere Darstellung
  - [ ] Level-Seite: beim Hochscrollen klappt der Kopf zu früh wieder auf (weniger Level sichtbar)
  - [ ] Account-Entwurf: AGB/Datenschutz-Links öffnen nicht sauber (Fenster erst nach Schließen sichtbar); „Kennwort vergessen“: Code per E-Mail (6-stellig) + neues Kennwort; Gast-Text „Dir entgeht“ grammatisch + Aufzählung schöner (Zehnecke, weniger Abstand)
  - [ ] Installations-Anleitung: „TRAIN“ im App-Icon zu groß
  - [ ] Dev: Live-Version gelb markieren (auch wenn live = letzte Freigabe); Versionsliste: 4 Reihen + angedeutete 5., dann scrollbar
  - [ ] Dev: „Im Browser öffnen“ öffnet ein Overlay ohne Ausweg → echt in Safari öffnen (mit Rückfrage)
  - [ ] Push: Rekord-Mitteilung in der App als weißer Balken oben; Test-Knöpfe „in der App“ + „als Mitteilung“
  - [ ] Darstellung › Schalter: Vorschau Schwarz-Weiß wird grün umrandet, wenn Grün gewählt
  - [ ] „Berechnungslogik“ zu lang für die Überschrift → kürzer
  - [ ] Seasons: Schlitten/Hase spawnen viel zu oft neu (müssen einmal ganz durch); Hasenohren auf Start kürzer (Level-Zeile im Ruhezustand frei)
  - [ ] **Neue Season Silvester/Neujahr**: Feuerwerk im Hintergrund, „Happy New Year“ rund ums Zehneck
- [ ] **Später prüfen (Ben + Claude)**: AGB-Entwurf + Datenschutzerklärung juristisch ansehen
- [ ] **Supabase-Fragen beantwortet** (siehe Chat 2026-11-05): Pausieren, Backup, Umzug, Kapazität; Anleitung Schritt für Schritt kommt beim Start
- [ ] **Ben: GitHub-Freigabe-Schlüssel** anlegen (fein eingeschränkt, nur Repo Fitter, nur „Contents: Read and write“) und in Dev › Dev-Werkzeuge › Freigabe-Schlüssel eintragen → dann Season + Live-Version selbst schaltbar
- [ ] Live-Versionswahl greift ab der nächsten Freigabe (release.py baut den Lader in die Live-App ein)
- [ ] Erinnerung „Schlüssel läuft ab“ als echte Push auch bei geschlossener App: braucht Server (Cloud). Bis dahin: Banner + Mitteilung beim Öffnen der Dev-App
- [ ] Push an alle + automatische Inaktivitäts-Mitteilungen: Versand-Server mit dem Cloud-Modus (Sprüche-Liste + Tage schon in Dev-Werkzeugen)
- [ ] **Ben:** Dev v0.11.0 ansehen (Profil, Fortschritt, Seasons, Dev-Werkzeuge, Account-Entwurf) → Feedback → „freigeben“ für Live
- [ ] **🔝 Danach: Cloud-Modus** (Supabase, siehe `HANDOVER.md`)
  - [ ] Ben: Anmeldemethode entscheiden, Supabase-Account + Projekte `fitter-dev`/`fitter-live` (EU) anlegen, URL + anon key geben
  - [ ] Account: Registrierung mit Benutzername (einmalig, ersetzt @test) + E-Mail + Kennwort; **Anmelden mit E-Mail ODER Benutzername + Kennwort**; Kennwort zurücksetzen per E-Mail (Entscheidung Ben 2026-11-05); Übernahme der lokalen Daten
  - [ ] Abgleich offline-first (localStorage bleibt Zwischenspeicher)
  - [ ] **Freunde live schalten**: Suche per @Benutzername, QR-Code scannen, Folgen, echte Profile statt Beispieldaten, Sichtbarkeit aus dem Profil serverseitig durchsetzen
  - [ ] Profilbild hochladen
  - [ ] Datenschutzerklärung anpassen + Auftragsverarbeitungsvertrag (DPA) mit Supabase (Supabase EU, siehe `HANDOVER.md` → Briefing). Ben entscheidet Anmeldemethode (Empfehlung: E-Mail-Link ohne Passwort) und legt Supabase-Account an
- [ ] **🔝 ALLERERSTES THEMA nächste Session: Points-Logik diskutieren** (Claude hat in Dev v0.4 einen mehrstufigen, schwer manipulierbaren Vorschlag eingebaut – siehe Einstellungen → Berechnungslogik)
- [ ] **Ben:** Impressum mit echten Daten füllen (Platzhalter in Einstellungen → Impressum)
- [ ] **Nächste Session – Diskussion (Claude bereitet Vorschläge vor):**
  - [ ] **Points-Logik**: Elo-ähnlich, nicht manipulierbar (kein Volumen-Hacking, Beinpresse ≠ wertvoller als Curls) – mehrere Ansätze vergleichen
  - [ ] **KPIs**: Welche Kennzahlen sind für Gym-Gänger wirklich relevant (kg bewegt, Minuten, Workouts, Kraft …)? Startseite, Review, Fortschritt
- [ ] **Danach – nächste große Blöcke** (in dieser Reihenfolge):
  - [ ] **Account + Datenbank** (Supabase): Anmeldung, Cloud-Speicherung, Umzug der lokalen Daten
  - [ ] **Onboarding** (erklärt App, 1RM, Points, Körpergewicht)
  - [ ] **Datenschutzerklärung** + Einwilligung (vor dem Teilen mit anderen)
- [ ] Prüfen, ob der schwarze Rand unten auf dem iPhone weg ist (Ben)
- [ ] Übungsdatenbank: Umfang und Kategorien festlegen (Name DE/EN, Muskelgruppe, Equipment)

## Version 1 (lokal auf dem Handy)
- [x] Grundgerüst als PWA (auf Homescreen legbar, iPhone + Android)
- [x] Menüleiste: Fortschritt | Start (TRAIN-Achteck) | Einstellungen
- [x] Startseite mit Achteck, Begrüßungen nach Tageszeit (20–30 Varianten, DE/EN)
- [x] Workouts anlegen/bearbeiten, Übungen aus Datenbank suchen
- [x] Aktives Workout: Gesamttimer, Satz-/Pausen-/Aufwärm-Timer, Gewicht + Wdh. eintragen
- [x] Reihenfolge der Übungen während des Workouts ändern
- [x] Aktives Workout nach unten wischen → Mini-Leiste über der Menüleiste
- [x] Review nach „Fertig“ (Volumen, Highlights, Rekorde)
- [x] Fortschritt: Linien-Chart pro Übung
- [x] Fortschritt: **History-Leiste** mit den letzten 7 Tagen als Kacheln (aktiv ja/nein + welches Workout)
- [x] Fortschritt: History aufklappbar zu scroll-/klickbarem **Kalender** (welcher Tag, welches Workout)
- [x] Fortschritt: **Personal Bests** – Liste mit Übung, Gewicht, Datum
- [x] Fortschritt: „Letzter Push Day …“ → ersetzt durch Kalender/Tagesansicht
- [x] Einstellungen: Sprache DE/EN, Farbumkehr
- [x] Einstellungen: Körpergewicht (mit Info-i) + Schalter „Körpergewicht in Points einrechnen“ (Standard: aus → Körpergewichtsübungen zählen nur mit Zusatzgewicht)
- [x] Einstellungen: Animation für Aufwärmen/Cooldown wählbar (5 Varianten)
- [x] Körpergewichtsübungen (Dips, Klimmzüge): Zusatzgewicht positiv und Unterstützung negativ (z. B. −20 kg)
- [x] Eigene Übungen anlegen (Name, Muskelgruppe, Equipment) – dauerhaft gespeichert
- [x] Veröffentlichung über GitHub Pages (https://pdbp-hub.github.io/Fitter/)

## Go-Live-Checkliste (vor dem Teilen mit anderen / Veröffentlichung)
_Claude prüft diese Liste, sobald Ben teilen oder live gehen möchte, und weist auf offene Punkte hin._
- [ ] **Impressum**
- [ ] **Datenschutzerklärung** + Einwilligungsabfrage (DSGVO)
- [x] **Getrennte Versionen**: Live-Version für Nutzer + Entwickler-/Testversion, die Ben vorher prüft und freigibt (erst nach Freigabe geht ein Update live)
- [ ] Daten in der Cloud mit Accounts (damit Nutzerdaten nicht verloren gehen)

## Später
- [ ] Cloud-Speicherung + Accounts (Supabase)
- [ ] Freunde: folgen, interagieren
- [ ] **Läufe / Cardio** hinzufügen, ggf. auch aus externen Quellen (z. B. Apple Health, Strava) importieren (2026-11-01)
- [ ] Logo entwerfen (ersetzt „TRAIN“ im Achteck)
- [ ] **Icons für jede Übung** (simple Piktogramme, z. B. Person am Latzug) – in Workout, Übungssuche, Auswahl (2026-11-01)
- [ ] Eigene Übungen mit Freunden teilen (2026-11-01)
- [ ] **Onboarding** beim ersten Öffnen/Anmelden: kurze Einführung, erklärt Begriffe wie 1RM, Points, Körpergewicht (2026-11-01)
- [ ] Profil ausbauen (Account, Cloud-Sync, ggf. persönliche Daten) – Platzhalter in Einstellungen existiert (2026-11-01)
- [ ] **Export für Nerds**: alle Workouts als CSV/Excel exportieren (2026-11-01)
- [ ] Vergangene Workouts nachträglich bearbeiten (nur über Kalender/Tagesansicht) – vorerst nur ansehen (2026-11-01)
- [ ] Optional später: Farbakzent (z. B. Blau für Prognose/Cooldown) – vorerst bewusst nur Schwarz-Weiß (2026-11-01)
- [ ] **Community-Bereich** (Freunde folgen, Shared Workouts) – Menüleiste bleibt bei 3 Tabs, Einstieg z. B. über einen Community-Button im Train-Bereich (2026-11-01)
- [ ] **Train-Bereich erweitern**: „Quick Start“ + „Eigene Workouts“ + vorgeschlagene/Preset-Workouts (2026-11-01)
- [ ] **Monetarisierung** (langfristig): z. B. Preset-Workouts hinter einer Paywall (2026-11-01)

## Ideen-Parkplatz
_Gesammelte Ideen für später – noch nicht eingeplant, Platzierung in der App offen._
- **Achievements / Medaillen / Challenges** zum Freischalten (2026-11-02)
- **Altersvergleich** in der Community („in deinem Alter bist du …“) – Alter wird im Profil schon erfasst (2026-11-02)
- **Zeit pro Wiederholung / Satz-Effizienz** tracken (Anlaufzeit vor dem Satz berücksichtigen) – eher Nerd-Feature, hinten anstellen (2026-11-02)
- **Pausentage-Tracking**: Ø Pausentage zwischen gleichen Workout-Typen (z. B. zwischen zwei Push Days) und generell zwischen Trainingstagen (2026-11-01)
- **Jahres-/Langzeitstatistik**: Wie viele Push/Pull/Leg Days im letzten Jahr, Monat etc. (2026-11-01)
- **Points-Name**: finalen Namen für das Punktesystem finden (2026-11-01)
- **Community-Rang bei Personal Bests**: Wo stehe ich im Vergleich zur Community (braucht Cloud + Accounts) (2026-11-01)

## Erledigt
- [x] **Dev v0.11.0** (2026-11-05): Onboarding GO/Löschen, FAQ aufklappbar mit Animation, Einstellungen neu (Allgemein, Persönliche Daten + Löschen, Impressum & Datenschutz, keine Überschriften), Schalter-Farbe Grün, Berechnungslogik kurz, Trainingsminuten ohne Pausen, Profil neu (schrumpfender Kopf, Profilbild, kompakt) + Bearbeiten mit Schaltern/Speichern, Fortschritt neu (Analyse, PBs aufklappbar, Rückblick 7/30), Dev-Werkzeuge im App-Stil + Push-Kategorien, Safari-Link, Seasons neu (Flocken, Rentier-Schlitten, Mütze/Ohren pulsieren, Hase, Sprüche), Account-Entwurf (nur Dev) mit AGB/Datenschutz + Gast
- [x] **Dev v0.10.2** (2026-11-05): 6-stellige Master-PIN (Schlüssel verschlüsselt, PIN vor jedem Live schalten, 5 Fehlversuche = 10 min Sperre); „Ohne Installation weiter“ entfernt. Intro-Sprung beim Start laut Ben behoben
- [x] **Dev v0.10.1** (2026-11-05): Freigabe-Schlüssel mit Laufzeit (7/30/60/90 Tage), roter Banner + Mitteilung 2 Tage vor Ablauf, Test: Schlüssel nie in App-Daten
- [x] **Dev v0.10.0** (2026-11-05): Intro-Start wartet auf ruhiges Layout (Zehneck-Sprung), Onboarding wischen/zurück/Punkte + Rückfrage beim Überspringen, GO-Zehneck ausgerichtet, Löschen-Tipp animiert, Einstellungen › Hilfe (Einführung mit ✕, FAQ), Dev-Werkzeuge als eigene Seite, Installations-Anleitung im Browser (iPhone/Android, `?install`), Seasons Weihnachten/Ostern (Schnee/Schlitten/Mütze, Eier/Hase/Ohren, eigene Lade-Animation + Celebration), Versionsarchiv 0.1–0.10 + Live-Versionswahl, Mitteilungen-Schalter + Sprüche-Verwaltung + Test-Mitteilung
- [x] **Dev v0.9.0** (2026-11-04): Onboarding-Feinschliff (GO-Tipp sichtbar, Seitheben mit Sätzen, Löschen mittig), Intro-Vorschau immer mit Zehneck-Morph, Intro 2 „Los geht's“ deckungsgleich, Zurück-Wischen nur waagerecht mit echter vorheriger Seite dahinter, Profil = gleiche Ansicht wie bei Freunde (+ Bearbeiten mit Sichtbarkeit, ★-Favoriten für Personal Bests, Letzte 30 Tage, Lieblings-Workout), „Persönliche Daten“, Prognose-Einstellungen in Darstellung, Level-Kopf schrumpft fließend, Review-Mini-Leiste, Bereit mit +/− pro Satz, Wisch-Löschen begrenzt, „±0“, Fortschritt-Umschalter randlos mit Icons, Chart-Linien in Punktfarbe, Charts-Test mit 4 Sätzen
- [x] **Dev v0.8.0** (2026-11-04): Intro 2/3 auf iPhone-Höhe korrigiert + lange Wörter passen, Intro-Vorschau mit Übergang zurück zu Einstellungen, „Diese Woche“ wieder einzeilig, Level-Seite mit einer Scrollfläche + schrumpfendem Kopf, „Testdaten“ nur in Dev-Werkzeugen, Zurück-Wischen folgt dem Finger, Überschriften Einstellungen/Fortschritt zurück, Profil (Anzeigename, @Benutzername einmalig, Lieblingsübungen, Sichtbarkeit, Vorschau), Freunde (Profile antippbar, Woche als Zehnecke, Freunde finden per Name/QR), Icons Rückenstrecker/Reverse Fly/Russian Twists/Schrägbankdrücken
- [x] **Dev v0.7.0** (2026-11-04): Onboarding-Folien 1–4 überarbeitet (echte App-Optik, Finger tippt genau, Löschen-Ablauf), Startseite Level statt „+X diese Woche“ + antippbare Points (Chevron), Level-Leiter (15 oben, scrollt zum aktuellen Level), Einstellungen ohne Überschrift mit großer Profil-Kachel, neue Icons Berechnungslogik/Daten, 3 neue Celebrations (Hantelscheiben, Druckwelle, Fontäne), Intro-Vorschau kehrt zu Darstellung zurück, Tabs merken Unterseite (gleicher Tab nochmal = Startseite), Rand-Wischen per Touch (iPhone), Bereit-Bildschirm neu, „Nur für dieses Training“, erledigten Satz zurücksetzen, Review-Chart: Linie = Gesamtvergleich, Punkte = pro Satz farbig, Dev „Charts-Test“, Fortschritt „Ich | Freunde“ volle Breite
- [x] 2026-11-04 – Dev v0.6.0: Schriften lokal (kein Google mehr; Live bekommt sie beim nächsten Release), Level-System (15 Level mit Namen + Icons, Points antippen), Freunde-Vorschlag (Ich | Freunde im Fortschritt), Intro 2 mit großem „Los geht's“ an Zehneck-Position, Intro 3 (Riss) + Intro 4 (Spin), Onboarding mit vollem Start-Ablauf + 2 neuen Slides + Marketing-Texten, Umbenennen statt ✎, Workout per Wischen löschen, Übung/Satz „Nur heute“ vs. „Dauerhaft“, 19 neue Icons + Seil-Icon für Kabelzug, Sortieren fix breit, eigene Übung aufgeräumt, Review: Maximalkraft + Info-i, Legenden in Trendfarbe, kein „= 0 %“, heute markiert, Tageskarte unten abgegrenzt, Texte ohne lange Striche, Prognose-Erklärung mit Formel, Darstellung-Reihenfolge + Icons, Tab-Tipp = zurück, Wischen vom Rand = zurück
- [x] 2026-11-04 – Dev v0.5.0: Onboarding mit animierten App-Mockups + kürzere Texte; Startseite: gleiche Schriftgrößen (Points/Diese Woche, +X/vs. Vorwoche), weniger Leerraum unten; Dev-Werkzeuge eingeklappt; Icons in Einstellungen; „Mit Freunden teilen“ (QR-Code lokal erzeugt, Link kopieren, Teilen-Menü); TRAIN-Tab öffnet immer die Train-Seite (Bug); ✕ im Aufwärmen, unterer Beenden-Button entfernt; Intro 2 (Schreibmaschine → weiß schrumpft ins Zehneck) + Intro-Auswahl; Pre-Workout/Protein-Sprüche
- [x] 2026-11-03 – Dev v0.4.0: +25 Begrüßungen je Sprache, 30 Review-Sprüche (Tageszeit/Rekord), Startseite ruhiger + größere Wochenzahlen, Akzentfarben ▲▼ (Einstellung mit Vorschau), Intro-Animation, Celebration (8 Effekte + Aus), Onboarding-Story + gelbe Dev-Werkzeuge, Datenschutzerklärung (Entwurf), Points v2 (Vorschlag), ~70 Übungen + Filter/Sortieren + breiter „Eigene Übung“-Button, unbegrenzte Favoriten (horizontal scrollbar), Sätze einzeln planen + ✕ pro Satz, Übung per Wischen löschen, Abbrechen beim Aufwärmen, neuer Mini-Leisten-Übergang (10× getestet), Dialoge/Info mittig, App-eigenes Dropdown, Chart-Kopf-Bug, Kalender-Button mittig, 5 Icons überarbeitet
- [x] 2026-11-02 – Dev v0.3.1: Trend-Farben unter Darstellung mit zwei animierten Vorschauen (Original / Rot-Grün); Fortschritt-Einstellungen nur noch Prognose & Rückblick
- [x] 2026-11-02 – Dev v0.3.0: Startseite mit 3 Kennzahlen (Workouts, kg, Minuten) + ▲▼ vs. Vorwoche; Workouts direkt im Bereit-Screen bearbeiten (Sätze, Gewicht, Übungen hinzufügen/entfernen, ✎ für Name/Löschen); Mini-Leiste rund + fließender Übergang; „Reset“-Knopf; „Satz beenden → Nächste Übung“ zweizeilig; aktuelle Übung scrollt automatisch ins Bild; 11 neue Übungs-Icons; Review: Kennzahl-Auswahl (Volumen/Wdh./Maximalkraft pro Satz), Chart interaktiv, Kennzahlen ohne Überladung; Kalender-Details als eigene Review-Seite mit allen Sätzen; „Maximalkraft (geschätzt)“; Icons an Fortschritt-Überschriften; Einstellungen: Profil-Untertitel, Alter, Animationen unter Darstellung, Impressum-Seite, Fix für seitliches Scrollen
- [x] 2026-11-02 – Dev v0.2.0: Einstellungen in Unterseiten (Profil, Darstellung, Train, Fortschritt, Berechnungslogik, Daten), Erklärseite Points/1RM/Prognose/Trends, je 4 neue Puls- und Lade-Animationen, neues Trizepsdrücken-Icon, Prognose auf allen 3 Charts mit Info-i, Prognose-Zeitraum (inkl. Aus) + Rückblick einstellbar
- [x] 2026-11-01 – Dev-Version unter `/dev/` (gelbes Icon, eigene Daten, Testdaten, „Testdaten neu erzeugen“) + Freigabe-Skript `tools/release.py` + Tests für beide Versionen
- [x] 2026-11-01 – v0.1.1: Abstand unten auf dem iPhone verkleinert, neue Icons für Dips/Trizepsdrücken/Kabelzug, „Geschätzte Maximalkraft (1RM) pro Satz“, App für Suchmaschinen gesperrt (noindex)
- [x] 2026-11-01 – **PWA v0.1.0** in `docs/`: echte Speicherung auf dem Gerät (auch laufendes Workout), Homescreen-Icon, offline nutzbar, Bildschirm bleibt beim Training an, Workouts bearbeiten/löschen, Daten zurücksetzen, Review-Kennzahlen zweizeilig, 33 automatische Tests
- [x] 2026-11-01 – Entwurf v4: Startseite (Points, Diese Woche, einzeilige Begrüßung), Workout-Optik wie v2 + Zehneck-Timer oben mit Lade-Animation, Reset mit Nachfrage, Equipment-Icons, Review mit Satz-Chart + 3 Kennzahlen, Tag abwählbar, Tageskarte mit Zehnecken, Info-i als schwebendes Fenster, Profil, Puls-/Lade-Animation, Trend-Farben, automatischer Klick-Test (`tests/smoke.js`)
- [x] 2026-11-01 – Entwurf v3: Zehneck überall, Ziehen zum Sortieren, feste Workout-Kopfzeile mit Animation, Auto-Weiter zur nächsten Übung, Satz-Reset, Sicherheitsdialoge, Fortsetzen bis 30 min, Review mit 3 Zehnecken + Highlight-Übung + Detailliste, scrollbarer Verlauf + Tagesansicht, 3 Charts pro Übung mit Info-i, max. 3 Favoriten, 8 Animationen, Tastatur-„Fertig“
- [x] 2026-11-01 – Entwurf v2: Achteck symmetrisch + pulsierend, Bereit-Screen mit Start, Aufwärmen/Cooldown mit 5 Animationen, Sätze pro Übung gruppiert & editierbar, Abbrechen-Dialog, eigene Übungen, Körpergewicht-Logik, Verlauf/Kalender, Personal Bests, Chart mit Scrubbing + Prognose
- [x] 2026-11-01 – Arbeitsweise (`CLAUDE.md`) und To-Do-Liste angelegt
