# To-Do-Liste

## Als Nächstes
- [ ] **🔝 Finale Feedback-Runde zu Dev v0.8.0 (→ v0.9.0)** (2026-11-04)
  - [ ] Onboarding: Folie 2 Finger tippt wieder GO; Folie 3 Seitheben nicht abgeschnitten, darunter seine Sätze statt „Übung hinzufügen“; Folie 4 „Löschen“ mittig in Rot, „0/3“ mit Abstand zum Rand
  - [ ] Intros: nach jeder Vorschau der Zehneck-Morph in den Einstellungen-Tab; Intro 2: „Los geht's“ steht genau wie im Zehneck (zweizeilig, gleiche Stelle)
  - [ ] Zurück-Wischen: Seite bewegt sich nur waagerecht; dahinter ist schon die vorige Seite zu sehen (z. B. Einstellungen)
  - [ ] Profil: Einstellungen oben = dasselbe Profil wie bei Freunde (ansehen + „Profil bearbeiten“); neuer Punkt „Persönliche Daten“ (Körpergewicht, Alter, mitzählen, Account); Name + @Benutzername in zweiter Zeile (nicht editierbar, kommt mit Account + Kennwort, vorerst @test); Lieblingsübungen = Stern-Favoriten, Auswahl der 3 PBs + Sichtbarkeits-Toggles in „Profil bearbeiten“; mehr Toggles; Icons bei Diese Woche/Personal Bests/Letztes Training
  - [ ] Einstellungen: Prognose-Einstellungen in Darstellung verschieben; Berechnungslogik-Untertitel kürzer
  - [ ] Level-Seite: Kopf schrumpft kontinuierlich ab dem ersten Scrollen (Icon wandert nach links); aktueller Level-Kasten: Icon nicht abgeschnitten, Inhalt nach rechts
  - [ ] Review nicht abgeschlossen + runtergewischt: Mini-Leiste zeigen statt verstecktem Review hinter dem Zehneck
  - [ ] Bereit: „Name ändern“ oben bündig mit Name; Übung aufgeklappt mit +/− wie im Training
  - [ ] Wisch-Löschen: nicht weiter ziehen als die rote Fläche („Löschen“ bleibt mittig)
  - [ ] „Satz beenden / → nächste Übung“ sauber zentriert
  - [ ] Startseite: „=“ durch „±0“ ersetzen; dreistellige Prozente dürfen nichts überlappen (Test)
  - [ ] Fortschritt: etwas weniger Abstand Überschrift ↔ „Ich | Freunde“; Umschalter randlos über volle Bildschirmbreite mit Personen-Icons
  - [ ] Review-Charts: Linie zu einem Punkt hat die Farbe dieses Punkts; Charts-Test mit 4 Sätzen
- [ ] **Ben:** Dev v0.8.0 testen → „freigeben“ für Live (enthält alles aus v0.6 bis v0.8)
- [ ] **🔝 Danach: Cloud-Modus** (Supabase, siehe `HANDOVER.md`)
  - [ ] Ben: Anmeldemethode entscheiden, Supabase-Account + Projekte `fitter-dev`/`fitter-live` (EU) anlegen, URL + anon key geben
  - [ ] Login + Benutzername (einmalig) bei der Anmeldung, Übernahme der lokalen Daten
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
