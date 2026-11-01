# To-Do-Liste

## Als Nächstes
- [ ] Entwurf v4 reviewen (Ben) – danach Umbau zur echten PWA
- [ ] **Claude (proaktiv):** Vorschlag für die Points-Berechnung ausarbeiten und Ben vorlegen (Arbeitstitel „Points“, Basis geschätzte Maximalkraft/1RM)
- [ ] Inhalte der Fortschritt-Seite festlegen
- [ ] Übungsdatenbank: Umfang und Kategorien festlegen (Name DE/EN, Muskelgruppe, Equipment)

## Version 1 (lokal auf dem Handy)
- [ ] Grundgerüst als PWA (auf Homescreen legbar, iPhone + Android)
- [ ] Menüleiste: Fortschritt | Start (TRAIN-Achteck) | Einstellungen
- [ ] Startseite mit Achteck, Begrüßungen nach Tageszeit (20–30 Varianten, DE/EN)
- [ ] Workouts anlegen/bearbeiten, Übungen aus Datenbank suchen
- [ ] Aktives Workout: Gesamttimer, Satz-/Pausen-/Aufwärm-Timer, Gewicht + Wdh. eintragen
- [ ] Reihenfolge der Übungen während des Workouts ändern
- [ ] Aktives Workout nach unten wischen → Mini-Leiste über der Menüleiste
- [ ] Review nach „Fertig“ (Volumen, Highlights, Rekorde)
- [ ] Fortschritt: Linien-Chart pro Übung
- [ ] Fortschritt: **History-Leiste** mit den letzten 7 Tagen als Kacheln (aktiv ja/nein + welches Workout)
- [ ] Fortschritt: History aufklappbar zu scroll-/klickbarem **Kalender** (welcher Tag, welches Workout)
- [ ] Fortschritt: **Personal Bests** – Liste mit Übung, Gewicht, Datum
- [ ] Fortschritt: „Letzter Push Day / Pull Day / … vor X Tagen“
- [ ] Einstellungen: Sprache DE/EN, Farbumkehr
- [ ] Einstellungen: Körpergewicht (mit Info-i) + Schalter „Körpergewicht in Points einrechnen“ (Standard: aus → Körpergewichtsübungen zählen nur mit Zusatzgewicht)
- [ ] Einstellungen: Animation für Aufwärmen/Cooldown wählbar (5 Varianten)
- [ ] Körpergewichtsübungen (Dips, Klimmzüge): Zusatzgewicht positiv und Unterstützung negativ (z. B. −20 kg)
- [ ] Eigene Übungen anlegen (Name, Muskelgruppe, Equipment) – dauerhaft gespeichert
- [ ] Veröffentlichung über GitHub Pages

## Go-Live-Checkliste (vor dem Teilen mit anderen / Veröffentlichung)
_Claude prüft diese Liste, sobald Ben teilen oder live gehen möchte, und weist auf offene Punkte hin._
- [ ] **Impressum**
- [ ] **Datenschutzerklärung** + Einwilligungsabfrage (DSGVO)
- [ ] **Getrennte Versionen**: Live-Version für Nutzer + Entwickler-/Testversion, die Ben vorher prüft und freigibt (erst nach Freigabe geht ein Update live)
- [ ] Daten in der Cloud mit Accounts (damit Nutzerdaten nicht verloren gehen)

## Später
- [ ] Cloud-Speicherung + Accounts (Supabase)
- [ ] Freunde: folgen, interagieren
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
- **Pausentage-Tracking**: Ø Pausentage zwischen gleichen Workout-Typen (z. B. zwischen zwei Push Days) und generell zwischen Trainingstagen (2026-11-01)
- **Jahres-/Langzeitstatistik**: Wie viele Push/Pull/Leg Days im letzten Jahr, Monat etc. (2026-11-01)
- **Points-Name**: finalen Namen für das Punktesystem finden (2026-11-01)
- **Community-Rang bei Personal Bests**: Wo stehe ich im Vergleich zur Community (braucht Cloud + Accounts) (2026-11-01)

## Erledigt
- [x] 2026-11-01 – Entwurf v4: Startseite (Points, Diese Woche, einzeilige Begrüßung), Workout-Optik wie v2 + Zehneck-Timer oben mit Lade-Animation, Reset mit Nachfrage, Equipment-Icons, Review mit Satz-Chart + 3 Kennzahlen, Tag abwählbar, Tageskarte mit Zehnecken, Info-i als schwebendes Fenster, Profil, Puls-/Lade-Animation, Trend-Farben, automatischer Klick-Test (`tests/smoke.js`)
- [x] 2026-11-01 – Entwurf v3: Zehneck überall, Ziehen zum Sortieren, feste Workout-Kopfzeile mit Animation, Auto-Weiter zur nächsten Übung, Satz-Reset, Sicherheitsdialoge, Fortsetzen bis 30 min, Review mit 3 Zehnecken + Highlight-Übung + Detailliste, scrollbarer Verlauf + Tagesansicht, 3 Charts pro Übung mit Info-i, max. 3 Favoriten, 8 Animationen, Tastatur-„Fertig“
- [x] 2026-11-01 – Entwurf v2: Achteck symmetrisch + pulsierend, Bereit-Screen mit Start, Aufwärmen/Cooldown mit 5 Animationen, Sätze pro Übung gruppiert & editierbar, Abbrechen-Dialog, eigene Übungen, Körpergewicht-Logik, Verlauf/Kalender, Personal Bests, Chart mit Scrubbing + Prognose
- [x] 2026-11-01 – Arbeitsweise (`CLAUDE.md`) und To-Do-Liste angelegt
