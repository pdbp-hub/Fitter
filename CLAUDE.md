# Fitter – Projektgedächtnis

Diese Datei wird zu Beginn jeder Sitzung automatisch gelesen. Sie ist das Gedächtnis des Projekts.

## Rollen & Arbeitsweise (immer einhalten)

- **Ben = Produktmanager**, **Claude = Coder**. Ben bringt Features und Ideen, Claude setzt um und behält den Überblick.
- **Erst fragen, dann bauen.** Bei Unklarheiten immer *vorher* nachfragen, bevor Tokens in die Umsetzung fließen. Vor größeren Aufgaben kurz den Plan nennen und fragen: „Passt das so?“
- Wenn Ben ausdrücklich um einen Vorschlag bittet → Vorschlag machen.
- **Sparsam mit Tokens**: kurze, klare Antworten, keine unnötigen Umwege.
- **Sprache**: Mit Ben immer auf Deutsch kommunizieren.
- **Kenntnisstand Ben**: Kann Code (Python, etwas Excel VBA) lesen, aber nicht selbst schreiben. Keine Erfahrung mit Web-Apps. Fachbegriffe kurz erklären.
- **To-Do-Liste**: `TODO.md` ist die zentrale Liste.
  - Zu Beginn jeder Sitzung `TODO.md` lesen und kurz sagen, was als Nächstes ansteht.
  - Sagt Ben „Idee: …“ oder „auf die Liste“ → in `TODO.md` eintragen, committen, pushen.
  - Erledigtes nach „Erledigt“ verschieben (mit Datum).
- Keine Sprints, kein Overhead – nur die Liste.
- **Testen wie ein zuverlässiger Coder**: Nach jeder Änderung `node tests/smoke.js` ausführen (klickt die App im Browser durch). Jeder gefundene Bug bekommt dort einen eigenen Regressionstest, damit er nie wiederkommt.
- **Info-i** öffnen immer ein schwebendes Fenster mit ✕ (kein Aufklappen im Seiteninhalt).
- **Go-Live-Checkliste** (in `TODO.md`): Sobald Ben die App teilen oder live gehen will → zuerst die Checkliste prüfen und offene Punkte (Impressum, Datenschutz, getrennte Test-/Live-Version …) ansprechen, bevor es weitergeht.

## Produktvision

Browser-App (PWA) zum Tracken des Gym-Fortschritts. Läuft im Browser und wird auf den Homescreen gelegt (iPhone + Android), kein App Store.

**Kernfunktionen**
- Eigene Workouts anlegen (z. B. Push Day, Pull Day), Übungen aus einer Übungsdatenbank suchen und hinzufügen.
- „Workout starten“: Gesamttimer läuft, aktuelle Übung sichtbar, Gewicht + Wiederholungen pro Satz eingeben.
- Reihenfolge der Übungen während des Workouts dynamisch ändern.
- Timer pro Satz, Pause, Aufwärmen – optisch cool und prominent.
- Aktives Workout lässt sich wie bei Apple Music nach unten wischen → schwebt als schmale Leiste über der Menüleiste.
- Review nach „Fertig“: was war heute besonders gut (Highlights, Rekorde).
- Fortschritt/Langzeittrends mit Linien-Charts pro Übung.
- Gamification: bewegtes Gesamtgewicht, Vergleich zur Vorwoche, Score/Level. **Stärke primär über Maximalkraft** (geschätztes 1RM) bewerten, nicht nur über Volumen (100 × 1 kg ist nicht besser als 3 × 30 kg).
- Später: Freunde, folgen, interagieren. Eventuell spätere Veröffentlichung.

**Design**
- Schwarz-Weiß, puristisch, sportlich, „cool“, nicht wie eine langweilige Kachel-App.
- Standard: **schwarzer Hintergrund, weiße Akzente**. Einstellung „Farbumkehr“ (weißer Hintergrund) möglich.
- Markenzeichen: **reguläres, symmetrisches Zehneck** (weiß, schwarze Schrift). Start-Achteck pulsiert minimal, damit es klickbar wirkt.
- Vorerst **keine Farbakzente** (auch Prognose-Linie: weiß gestrichelt).
- **Kein typischer KI-/Claude-Look**: keine runden Pillen-Chips, keine verschachtelten Kästen. Gerade Linien, scharfe Kanten, Zehneck als einzige „Sonderform“.
- Inspiration (nicht kopieren!): Nike, Whoop, Apple – cleanes Setup.

**Navigation (Menüleiste unten)**
- Links: **Fortschritt** (Langzeittrends)
- Mitte: **Start** – großes Zehneck mit „TRAIN“ (Platzhalter fürs spätere Logo). Ist der Startbildschirm beim Öffnen.
- Rechts: **Einstellungen** (1. Sprache DE/EN, 2. Farbumkehr)

**Startseite**: Oben Points, in der Mitte großes Zehneck mit wechselnder Begrüßung (20–30 Varianten, je nach Tageszeit, fitnessmäßig) und kurzem Call-to-Action. Tippen → Workout-Auswahl (Liste der Workouts, oben „+“ zum Anlegen) → Workout starten.

**Sprache**: Deutsch und Englisch (umschaltbar in den Einstellungen).

## Technik-Entscheidungen

- **Phase 1 (Testversionen)**: Daten lokal im Browser des Handys. Datenmodell so bauen, dass der spätere Umzug einfach ist.
- **Phase 2**: Cloud mit Accounts pro Nutzer, Empfehlung **Supabase** (Free Tier).
- Hosting: **GitHub Pages** (kostenlos).
- Entwürfe/Mockups liegen in `mockup/`.
