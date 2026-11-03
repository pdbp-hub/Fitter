# To-Do-Liste

## Als Nächstes
- [ ] **🔝 ALLERERSTES THEMA nächste Session: Points-Logik diskutieren** (Claude hat in Dev v0.4 einen mehrstufigen, schwer manipulierbaren Vorschlag eingebaut – siehe Einstellungen → Berechnungslogik)
- [ ] **Ben:** Dev v0.4.0 testen → „freigeben“ für Live
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
- [ ] **Google Fonts lokal einbinden** (Datenschutz: aktuell werden Schriften von Google-Servern geladen → IP-Übertragung) – vor Go-Live (2026-11-03)
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
