# TRAIN-Workouts: Katalog (Fassung 2)

Stand: 2026-11-17 · Überarbeitet nach Bens Feedback (Namen, Marken, 60+, Reihenfolge, Info-i, Übungstypen, Geräte-Codes). Maschinenlesbare Fassung: `plans/train-workouts.json` (wird aus denselben Daten erzeugt wie diese Datei, beide sind deckungsgleich).

## Übersicht

| # | Name | Level | Dauer | Geräte | Fokus |
|---|---|---|---|---|---|
| 1 | Maschinen Basics | Einsteiger | 40 Min | Kabel, Maschine | Oberschenkel vorne, Brust, Rücken, Oberschenkel hinten … |
| 2 | Maschinen Classic | Fortgeschritten | 55 Min | Kabel, Maschine | Oberschenkel vorne, Brust, Rücken, Schultern … |
| 3 | Freihantel Basics | Einsteiger | 45 Min | Kurzhantel, Hantelbank | Oberschenkel vorne, Po, Brust, Rücken … |
| 4 | Po & Beine Basics | Einsteiger | 45 Min | Kurzhantel, Kabel, Maschine, Hantelbank | Po, Oberschenkel vorne, Oberschenkel hinten |
| 5 | Rücken & Haltung | Einsteiger | 40 Min | Kabel, Maschine | Rücken, Schultern, Unterer Rücken, Bauch |
| 6 | 60+ Kraft & Balance | Einsteiger | 45 Min | Kurzhantel, Maschine | Oberschenkel vorne, Brust, Rücken, Bauch |
| 7 | 60+ Alltagskraft | Einsteiger | 30 Min | nur Körpergewicht | Oberschenkel vorne, Po, Brust, Schultern … |
| 8 | Push Day Classic | Fortgeschritten | 60 Min | Langhantel, Kurzhantel, Kabel, Hantelbank | Brust, Schultern, Trizeps |
| 9 | Pull Day Classic | Fortgeschritten | 60 Min | Langhantel, Kurzhantel, Kabel, Klimmzugstange/Barren | Rücken, Bizeps, Schultern |
| 10 | Leg Day Classic | Fortgeschritten | 65 Min | Langhantel, Maschine | Oberschenkel vorne, Oberschenkel hinten, Po, Waden |
| 11 | Leg Day Pro | Profi | 85 Min | Langhantel, Kurzhantel, Maschine, Hantelbank | Oberschenkel vorne, Oberschenkel hinten, Po, Waden |
| 12 | Oberkörper Classic | Fortgeschritten | 60 Min | Langhantel, Kurzhantel, Kabel, Hantelbank | Brust, Rücken, Schultern, Bizeps … |
| 13 | Oberkörper Pro | Profi | 80 Min | Langhantel, Kurzhantel, Kabel, Maschine, Klimmzugstange/Barren, Hantelbank | Brust, Rücken, Schultern, Bizeps … |
| 14 | Kraft 5×5 Bankdrücken | Fortgeschritten | 55 Min | Langhantel, Kabel, Hantelbank | Oberschenkel vorne, Po, Brust, Rücken |
| 15 | Kraft 5×5 Kreuzheben | Fortgeschritten | 55 Min | Langhantel, Klimmzugstange/Barren | Oberschenkel vorne, Po, Schultern, Rücken … |
| 16 | Powerlifting Kniebeuge | Profi | 80 Min | Langhantel, Kabel, Hantelbank | Oberschenkel vorne, Po, Brust, Trizeps … |
| 17 | Powerlifting Kreuzheben | Profi | 75 Min | Langhantel, Maschine, Klimmzugstange/Barren, Hantelbank | Unterer Rücken, Oberschenkel hinten, Po, Rücken … |
| 18 | Arm Day Classic | Fortgeschritten | 50 Min | Langhantel, Kurzhantel, Kabel, Hantelbank | Bizeps, Trizeps |
| 19 | Shoulder Day Classic | Fortgeschritten | 50 Min | Langhantel, Kurzhantel, Kabel, Maschine | Schultern, Rücken |
| 20 | Po & Beine Classic | Fortgeschritten | 60 Min | Langhantel, Kurzhantel, Maschine, Hantelbank | Po, Oberschenkel hinten, Oberschenkel vorne, Unterer Rücken |
| 21 | Brust & Rücken Supersatz | Fortgeschritten | 50 Min | Kurzhantel, Kabel, Hantelbank | Brust, Rücken, Bizeps, Trizeps |
| 22 | Express Ganzkörper | Einsteiger | 20 Min | Kurzhantel | Oberschenkel vorne, Po, Brust, Rücken … |
| 23 | Express Langhantel | Fortgeschritten | 30 Min | Langhantel, Klimmzugstange/Barren, Hantelbank | Oberschenkel vorne, Po, Brust, Rücken … |
| 24 | Kurzhantel Ganzkörper | Einsteiger | 40 Min | Kurzhantel | Oberschenkel vorne, Po, Brust, Rücken … |
| 25 | Kurzhantel Oberkörper | Fortgeschritten | 55 Min | Kurzhantel, Hantelbank | Brust, Rücken, Schultern, Bizeps … |
| 26 | Kurzhantel Unterkörper | Fortgeschritten | 45 Min | Kurzhantel, Hantelbank | Oberschenkel vorne, Po, Oberschenkel hinten, Waden |
| 27 | Kettlebell Basics | Einsteiger | 35 Min | Kettlebell | Po, Oberschenkel hinten, Oberschenkel vorne, Rücken … |
| 28 | Kettlebell Pro | Profi | 55 Min | Kettlebell | Schultern, Po, Oberschenkel hinten, Oberschenkel vorne … |
| 29 | Ohne Geräte Ganzkörper | Einsteiger | 25 Min | nur Körpergewicht | Oberschenkel vorne, Po, Brust, Unterer Rücken … |
| 30 | Ohne Geräte Push | Fortgeschritten | 30 Min | nur Körpergewicht | Brust, Schultern, Trizeps |
| 31 | Ohne Geräte Pull | Einsteiger | 25 Min | nur Körpergewicht | Rücken, Schultern, Unterer Rücken, Po |
| 32 | Ohne Geräte Beine | Einsteiger | 30 Min | nur Körpergewicht | Oberschenkel vorne, Po, Oberschenkel hinten, Waden |
| 33 | Core Basics | Einsteiger | 20 Min | nur Körpergewicht | Bauch, Unterer Rücken |
| 34 | Core Pro | Profi | 35 Min | Kabel, Klimmzugstange/Barren, Hantelbank | Bauch, Unterer Rücken |
| 35 | Calisthenics Basics | Einsteiger | 40 Min | Klimmzugstange/Barren | Rücken, Bizeps, Brust, Trizeps … |
| 36 | Calisthenics Pro | Profi | 70 Min | Klimmzugstange/Barren | Rücken, Schultern, Brust, Trizeps … |
| 37 | Athletik Sprungkraft | Fortgeschritten | 45 Min | Kurzhantel, Hantelbank, Box | Oberschenkel vorne, Po, Waden, Oberschenkel hinten |
| 38 | Athletik Power | Profi | 60 Min | Langhantel, Medizinball, Box | Oberschenkel vorne, Po, Oberschenkel hinten, Rücken … |
| 39 | Hybrid Race Prep | Fortgeschritten | 60 Min | Kurzhantel, Kettlebell, Medizinball, Cardio-Gerät | Oberschenkel vorne, Po, Rücken, Schultern … |
| 40 | Hybrid Race Pro | Profi | 90 Min | Kurzhantel, Medizinball, Cardio-Gerät, Schlitten | Oberschenkel vorne, Po, Rücken, Schultern … |
| 41 | Kampfsport-Kondition | Fortgeschritten | 45 Min | Kettlebell, Medizinball | Bauch, Po, Oberschenkel hinten, Schultern … |

### Zählung nach Level

| Einsteiger | Fortgeschritten | Profi | Gesamt |
|---|---|---|---|
| 14 | 18 | 9 | **41** |

### Zählung nach Gerät (benötigt, Mehrfachnennung)

| Code | Gerät | Workouts |
|---|---|---|
| `db` | Kurzhantel | 19 |
| `bench` | Hantelbank | 17 |
| `bb` | Langhantel | 15 |
| `cable` | Kabel | 14 |
| `machine` | Maschine | 11 |
| `bar` | Klimmzugstange/Barren | 8 |
| `bw` | nur Körpergewicht (kein Gerät nötig) | 6 |
| `kb` | Kettlebell | 4 |
| `medball` | Medizinball | 4 |
| `box` | Box | 2 |
| `cardio` | Cardio-Gerät | 2 |
| `sled` | Schlitten | 1 |

### Was bleibt bei typischen Ausstattungen

| Ausstattung | Anzahl | Workouts (#) |
|---|---|---|
| Studio komplett | 41 | alle |
| Zuhause: Kurzhanteln + Bank | 11 | 3, 7, 22, 24, 25, 26, 29, 30, 31, 32, 33 |
| Zuhause: nur Kurzhanteln | 8 | 7, 22, 24, 29, 30, 31, 32, 33 |
| Nur Kettlebell | 8 | 7, 27, 28, 29, 30, 31, 32, 33 |
| Park: Klimmzugstange/Barren | 8 | 7, 29, 30, 31, 32, 33, 35, 36 |
| Gar nichts | 6 | 7, 29, 30, 31, 32, 33 |
| ≤ 30 Minuten (Dauer-Filter) | 8 | 7, 22, 23, 29, 30, 31, 32, 33 |

---

## Konventionen

- **Übungstypen**: `reps` = kg × Wdh., `time` = kg (optional) × Sekunden, `dist` = kg (optional) × Meter. In den Tabellen markiert als [ZEIT] bzw. [STRECKE].
- **Sätze × Ziel**: Arbeitssätze; Aufwärmsätze sind nicht gelistet (App-Hinweis: 2–3 leichte Sätze vor der ersten Übung). Im JSON ist der Zielwert der obere Wert der Spanne.
- **/S** = pro Seite. **NEU** = Übung kommt neu in die Datenbank.
- **Pause** = nach jedem Satz. Bei Supersätzen hat die erste Übung des Paars 30 s (nur Wechsel), die Pause folgt nach der zweiten.
- **Gewicht wählen**: 1–3 saubere Wdh. Reserve (Einsteiger eher 3). Oberes Ende der Spanne in allen Sätzen geschafft: nächstes Mal mehr Gewicht.
- **Geräte eines Workouts** = alle Hauptgeräte der Übungen plus nötige Bank. `bw` steht nur dort, wo gar kein Gerät gebraucht wird.
- **Reihenfolge**: Dieselbe Muskelgruppe (Hauptgruppe) nie direkt hintereinander, außer bei begründeten Ausnahmen (siehe Kritische Prüfung).
- Die Spalte **Hinweis** enthält workoutspezifische Angaben. Allgemeine Sicherheitshinweise stehen im Info-i der Übung (siehe „Neue Übungen“ und „Info-i bestehende Übungen“).

---

## Workouts

### A. Einstieg & Maschinen

#### 1 · Maschinen Basics
- **EN:** Machine Basics · **ID:** `machine-basics`
- **Untertitel:** Ganzkörper an Maschinen · *Full body on machines*
- **Level · Dauer · Icon:** Einsteiger · ca. 40 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Brust, Rücken, Oberschenkel hinten, Schultern
- **Geräte:** Kabel, Maschine
- **Für wen / Warum:** Für die ersten 6–8 Wochen: geführte Bewegungen, wenig Technikrisiko, 2–3× pro Woche.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Beinpresse `legpress` | 3 × 10–12 | 90 s |  |
| 2 | Brustpresse `chestpress` | 3 × 10–12 | 90 s |  |
| 3 | Beinbeuger `legcurl` | 2 × 12–15 | 60 s |  |
| 4 | Latzug `latpull` | 3 × 10–12 | 90 s |  |
| 5 | Schulterpresse `shoulderpress` | 2 × 10–12 | 60 s |  |
| 6 | Rückenstrecker `hyperext` | 2 × 12–15 | 60 s | ohne Zusatzgewicht |

15 Arbeitssätze.

#### 2 · Maschinen Classic
- **EN:** Machine Classic · **ID:** `machine-classic`
- **Untertitel:** Muskelaufbau gelenkschonend · *Joint-friendly muscle building*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 55 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Brust, Rücken, Schultern, Oberschenkel hinten
- **Geräte:** Kabel, Maschine
- **Für wen / Warum:** Nach den Basics: ernsthafter Muskelaufbau an Maschinen, ideal ohne Trainingspartner.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Hackenschmidt `hack` | 3 × 8–10 | 2 min |  |
| 2 | Brustpresse `chestpress` | 3 × 8–10 | 2 min |  |
| 3 | Rudermaschine `machrow` | 3 × 8–10 | 90 s |  |
| 4 | Beinbeuger `legcurl` | 3 × 10–12 | 60 s |  |
| 5 | Schulterpresse `shoulderpress` | 3 × 8–10 | 90 s |  |
| 6 | Latzug eng `closelat` | 3 × 10–12 | 90 s |  |
| 7 | Beinstrecker `legext` | 2 × 12–15 | 60 s | letzter Satz bis kurz vor Muskelversagen |

20 Arbeitssätze.

#### 3 · Freihantel Basics
- **EN:** Free Weight Basics · **ID:** `freeweight-basics`
- **Untertitel:** Erste Schritte mit Kurzhanteln · *First steps with dumbbells*
- **Level · Dauer · Icon:** Einsteiger · ca. 45 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Rücken, Oberschenkel hinten, Schultern
- **Geräte:** Kurzhantel, Hantelbank
- **Für wen / Warum:** Nach Maschinen Basics: Kniebeuge, Drücken, Hüftbeuge und Ziehen mit leichten Kurzhanteln lernen.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Goblet Squat `goblet` | 3 × 8–10 | 90 s |  |
| 2 | Kurzhantel-Bankdrücken `dbbench` | 3 × 8–10 | 90 s |  |
| 3 | Kurzhantel-RDL `dbrdl` NEU | 3 × 10 | 90 s | leicht starten |
| 4 | Einarmiges Kurzhantelrudern `dbrow` | 3 × 10/S | 60 s |  |
| 5 | Kurzhantel-Schulterdrücken `dbpress` | 2 × 10 | 60 s | sitzend, Lehne steil |
| 6 | Dead Bug `deadbug` NEU | 2 × 8/S | 45 s |  |

16 Arbeitssätze.

#### 4 · Po & Beine Basics
- **EN:** Glutes & Legs Basics · **ID:** `glutes-basics`
- **Untertitel:** Po und Beine an Maschinen und Kabel · *Glutes and legs on machines and cables*
- **Level · Dauer · Icon:** Einsteiger · ca. 45 Min · mit Gewicht / Unterkörper
- **Fokus:** Po, Oberschenkel vorne, Oberschenkel hinten
- **Geräte:** Kurzhantel, Kabel, Maschine, Hantelbank
- **Für wen / Warum:** Für Po und Beine ohne aufwendigen Langhantel-Aufbau, alles schnell eingestellt.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Beinpresse `legpress` | 3 × 10–12 | 90 s | Füße hoch und etwas breiter: mehr Po |
| 2 | Glute Bridge `gbridge` NEU | 3 × 12–15 | 60 s | Kurzhantel auf der Hüfte als Zusatzgewicht |
| 3 | Beinbeuger `legcurl` | 2 × 12–15 | 60 s |  |
| 4 | Abduktoren (Maschine) `abductor` | 3 × 15 | 60 s |  |
| 5 | Step-ups `stepup` | 2 × 10/S | 60 s | erst ohne Gewicht, Stufe max. Kniehöhe |
| 6 | Glute Kickbacks am Kabel `glutekick` | 2 × 12/S | 45 s |  |

15 Arbeitssätze.

#### 5 · Rücken & Haltung
- **EN:** Back & Posture · **ID:** `back-posture`
- **Untertitel:** Ziehen, aufrichten, Rumpf stabil · *Pull, stand tall, stable core*
- **Level · Dauer · Icon:** Einsteiger · ca. 40 Min · mit Gewicht / Oberkörper
- **Fokus:** Rücken, Schultern, Unterer Rücken, Bauch
- **Geräte:** Kabel, Maschine
- **Für wen / Warum:** Für Schreibtisch-Menschen: kräftigt die Haltemuskulatur. Bei akuten Schmerzen erst ärztlich abklären.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Latzug `latpull` | 3 × 10–12 | 90 s |  |
| 2 | Pallof Press `pallof` NEU | 2 × 10/S | 60 s |  |
| 3 | Rudern am Kabel `row` | 3 × 10–12 | 90 s |  |
| 4 | Rückenstrecker `hyperext` | 2 × 12 | 60 s | ohne Zusatzgewicht |
| 5 | Face Pulls `facepull` | 3 × 15 | 60 s |  |
| 6 | Bird Dog `birddog` NEU | 2 × 8/S | 45 s | 2 s halten |

15 Arbeitssätze.

### B. Wiedereinstieg 60+

#### 6 · 60+ Kraft & Balance
- **EN:** 60+ Strength & Balance · **ID:** `sixty-gym`
- **Untertitel:** Wiedereinstieg an Maschinen · *Getting back into it on machines*
- **Level · Dauer · Icon:** Einsteiger · ca. 45 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Brust, Rücken, Bauch
- **Geräte:** Kurzhantel, Maschine
- **Für wen / Warum:** Gelenkschonender Wiedereinstieg: Kraft für Treppe, Tragen und Aufstehen, dazu ein sicherer Stand.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Beinpresse `legpress` | 3 × 10–12 | 90 s | Knie oben nicht durchdrücken |
| 2 | Brustpresse `chestpress` | 2 × 10–12 | 90 s |  |
| 3 | Aufstehen vom Stuhl `sitstand` NEU | 2 × 8–10 | 60 s | Bank oder Stuhl, Höhe etwa Kniehöhe |
| 4 | Rudermaschine `machrow` | 2 × 10–12 | 90 s |  |
| 5 | Einbeinstand `balance` NEU [ZEIT] | 2 × 30 s/S | 45 s | neben Wand oder Stuhllehne |
| 6 | Reverse Flys `reversefly` | 2 × 12–15 | 60 s |  |
| 7 | Farmer's Walk `farmers` NEU [STRECKE] | 2 × 20 m | 90 s | leichte Hanteln, aufrecht gehen |

15 Arbeitssätze.

#### 7 · 60+ Alltagskraft
- **EN:** 60+ Everyday Strength · **ID:** `sixty-home`
- **Untertitel:** Wiedereinstieg zuhause mit Stuhl · *Restart at home with a chair*
- **Level · Dauer · Icon:** Einsteiger · ca. 30 Min · ohne Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Schultern, Waden, Bauch
- **Geräte:** nur Körpergewicht
- **Für wen / Warum:** Ohne Geräte, alles im Stehen oder Sitzen: Beine, Haltung und Gleichgewicht für den Alltag.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Aufstehen vom Stuhl `sitstand` NEU | 3 × 8–12 | 60 s |  |
| 2 | Wand-Liegestütze `wallpush` NEU | 3 × 10–12 | 60 s |  |
| 3 | Seitliches Beinheben stehend `sideleg` NEU | 2 × 12/S | 45 s |  |
| 4 | Wandengel `wallangel` NEU | 2 × 10 | 45 s |  |
| 5 | Wadenheben ohne Gerät `bwcalf` NEU | 2 × 15 | 45 s | beidbeinig, an der Wand halten |
| 6 | Einbeinstand `balance` NEU [ZEIT] | 2 × 30 s/S | 45 s |  |

14 Arbeitssätze.

### C. Klassische Splits

#### 8 · Push Day Classic
- **EN:** Push Day Classic · **ID:** `push-classic`
- **Untertitel:** Brust, Schultern, Trizeps · *Chest, shoulders, triceps*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 60 Min · mit Gewicht / Oberkörper
- **Fokus:** Brust, Schultern, Trizeps
- **Geräte:** Langhantel, Kurzhantel, Kabel, Hantelbank
- **Für wen / Warum:** Drück-Tag im Push/Pull/Legs-Split: schwer beginnen, mit Isolation enden.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Bankdrücken `bench` | 4 × 6–8 | 2:30 min | Sicherungsstangen oder Partner |
| 2 | Kurzhantel-Schulterdrücken `dbpress` | 3 × 8–10 | 90 s |  |
| 3 | Schrägbankdrücken `incline` | 3 × 8–10 | 2 min |  |
| 4 | Trizepsdrücken mit Seil `ropepush` | 3 × 10–12 | 60 s |  |
| 5 | Seitheben am Kabel `cablelateral` | 3 × 12–15/S | 60 s |  |
| 6 | Trizepsdrücken über Kopf `ohext` | 2 × 10–12 | 60 s |  |

18 Arbeitssätze.

#### 9 · Pull Day Classic
- **EN:** Pull Day Classic · **ID:** `pull-classic`
- **Untertitel:** Rücken, hintere Schulter, Bizeps · *Back, rear delts, biceps*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 60 Min · mit Gewicht / Oberkörper
- **Fokus:** Rücken, Bizeps, Schultern
- **Geräte:** Langhantel, Kurzhantel, Kabel, Klimmzugstange/Barren
- **Für wen / Warum:** Zug-Tag im Push/Pull/Legs-Split: Breite über Klimmzüge, Dicke über Rudern.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Klimmzüge `pullup` | 4 × 6–10 | 2 min | zu schwer: Latzug |
| 2 | Face Pulls `facepull` | 3 × 15 | 60 s |  |
| 3 | Langhantelrudern `bbrow` | 3 × 8–10 | 2 min |  |
| 4 | SZ-Curls `ezcurl` | 3 × 8–10 | 60 s |  |
| 5 | Rudern am Kabel `row` | 3 × 10–12 | 90 s |  |
| 6 | Hammer Curls `hammer` | 2 × 10–12 | 60 s |  |

18 Arbeitssätze.

#### 10 · Leg Day Classic
- **EN:** Leg Day Classic · **ID:** `leg-classic`
- **Untertitel:** Kniebeuge, Hüftbeuge, Maschinen · *Squat, hinge, machines*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 65 Min · mit Gewicht / Unterkörper
- **Fokus:** Oberschenkel vorne, Oberschenkel hinten, Po, Waden
- **Geräte:** Langhantel, Maschine
- **Für wen / Warum:** Beintag für Push/Pull/Legs oder mit Oberkörper Classic; die Kniebeuge kommt frisch.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge `squat` | 4 × 6–8 | 3 min |  |
| 2 | Rumänisches Kreuzheben `rdl` | 3 × 8–10 | 2 min |  |
| 3 | Beinpresse `legpress` | 3 × 10–12 | 2 min |  |
| 4 | Beinbeuger `legcurl` | 3 × 10–12 | 60 s |  |
| 5 | Beinstrecker `legext` | 2 × 12–15 | 60 s |  |
| 6 | Wadenheben stehend `calf` | 3 × 10–12 | 60 s |  |

18 Arbeitssätze.

#### 11 · Leg Day Pro
- **EN:** Leg Day Pro · **ID:** `leg-pro`
- **Untertitel:** Kraft plus Volumen für die Beine · *Strength plus volume for legs*
- **Level · Dauer · Icon:** Profi · ca. 85 Min · mit Gewicht / Unterkörper
- **Fokus:** Oberschenkel vorne, Oberschenkel hinten, Po, Waden
- **Geräte:** Langhantel, Kurzhantel, Maschine, Hantelbank
- **Für wen / Warum:** Für Erfahrene, die mit Leg Day Classic nicht mehr vorankommen.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge `squat` | 4 × 4–6 | 3:30 min |  |
| 2 | Rumänisches Kreuzheben `rdl` | 4 × 6–8 | 3 min |  |
| 3 | Hackenschmidt `hack` | 3 × 8–10 | 2 min |  |
| 4 | Beinbeuger `legcurl` | 3 × 10–12 | 60 s |  |
| 5 | Bulgarian Split Squats `split` | 3 × 8/S | 2 min |  |
| 6 | Wadenheben sitzend `seatedcalf` | 3 × 12–15 | 60 s |  |
| 7 | Beinstrecker `legext` | 2 × 12–15 | 60 s | letzter Satz als Dropsatz |

22 Arbeitssätze.

#### 12 · Oberkörper Classic
- **EN:** Upper Body Classic · **ID:** `upper-classic`
- **Untertitel:** Drücken und Ziehen in einer Einheit · *Push and pull in one session*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 60 Min · mit Gewicht / Oberkörper
- **Fokus:** Brust, Rücken, Schultern, Bizeps, Trizeps
- **Geräte:** Langhantel, Kurzhantel, Kabel, Hantelbank
- **Für wen / Warum:** Für den Ober-/Unterkörper-Split mit Leg Day Classic, Drücken und Ziehen 1:1.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Bankdrücken `bench` | 3 × 6–8 | 2:30 min |  |
| 2 | Langhantelrudern `bbrow` | 3 × 6–8 | 2 min |  |
| 3 | Kurzhantel-Schulterdrücken `dbpress` | 3 × 8–10 | 90 s |  |
| 4 | Latzug `latpull` | 3 × 8–10 | 90 s |  |
| 5 | Seitheben `lateral` | 2 × 12–15 | 60 s |  |
| 6 | Kabel-Curls `cablecurl` | 2 × 10–12 | 30 s | Supersatz mit Trizepsdrücken, gleicher Kabelturm |
| 7 | Trizepsdrücken `pushdown` | 2 × 10–12 | 60 s |  |

18 Arbeitssätze.

#### 13 · Oberkörper Pro
- **EN:** Upper Body Pro · **ID:** `upper-pro`
- **Untertitel:** Schwere Top-Sätze, viel Volumen · *Heavy top sets, high volume*
- **Level · Dauer · Icon:** Profi · ca. 80 Min · mit Gewicht / Oberkörper
- **Fokus:** Brust, Rücken, Schultern, Bizeps, Trizeps
- **Geräte:** Langhantel, Kurzhantel, Kabel, Maschine, Klimmzugstange/Barren, Hantelbank
- **Für wen / Warum:** Für Erfahrene, die Top-Satz plus Back-off-Sätze und hohes Volumen gut vertragen.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Schrägbankdrücken Langhantel `inclinebb` | 4 × 5–8 | 3 min | 1 Top-Satz (5), dann 3 Sätze ca. 10 % leichter (8) |
| 2 | Klimmzüge `pullup` | 4 × 5–8 | 3 min | mit Zusatzgewicht |
| 3 | Kurzhantel-Schulterdrücken `dbpress` | 3 × 8–10 | 2 min |  |
| 4 | T-Bar-Rudern `tbar` | 3 × 8–10 | 2 min |  |
| 5 | Seitheben am Kabel `cablelateral` | 3 × 12–20/S | 60 s | letzter Satz als Dropsatz |
| 6 | French Press `skull` | 3 × 8–12 | 60 s |  |
| 7 | Reverse Butterfly `pecdeckrear` | 3 × 15 | 60 s |  |
| 8 | Schrägbank-Curls `inclinecurl` | 3 × 10–12 | 60 s |  |

26 Arbeitssätze.

### D. Kraft

#### 14 · Kraft 5×5 Bankdrücken
- **EN:** Strength 5×5 Bench · **ID:** `strength-bench`
- **Untertitel:** Kniebeuge, Bankdrücken, Rudern · *Squat, bench press, row*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 55 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Rücken
- **Geräte:** Langhantel, Kabel, Hantelbank
- **Für wen / Warum:** Im Wechsel mit Kraft 5×5 Kreuzheben, 3× pro Woche: +2,5 kg pro Einheit, solange 5×5 klappt.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge `squat` | 5 × 5 | 3 min |  |
| 2 | Bankdrücken `bench` | 5 × 5 | 3 min | Sicherungsstangen |
| 3 | Langhantelrudern `bbrow` | 5 × 5 | 2 min |  |
| 4 | Face Pulls `facepull` | 2 × 15 | 60 s |  |

17 Arbeitssätze.

#### 15 · Kraft 5×5 Kreuzheben
- **EN:** Strength 5×5 Deadlift · **ID:** `strength-deadlift`
- **Untertitel:** Kniebeuge, Schulterdrücken, Kreuzheben · *Squat, overhead press, deadlift*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 55 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Schultern, Rücken, Unterer Rücken, Oberschenkel hinten
- **Geräte:** Langhantel, Klimmzugstange/Barren
- **Für wen / Warum:** Gegenstück zu Kraft 5×5 Bankdrücken; Kreuzheben nur ein schwerer Satz, der Rücken ist vorbelastet.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge `squat` | 5 × 5 | 3 min |  |
| 2 | Klimmzüge Untergriff `chinup` | 3 × 6–10 | 2 min | zu schwer: Latzug eng |
| 3 | Schulterdrücken `ohp` | 5 × 5 | 3 min | stehend |
| 4 | Kreuzheben `deadlift` | 1 × 5 | 3 min | ein Arbeitssatz nach Aufwärmsätzen |

14 Arbeitssätze.

#### 16 · Powerlifting Kniebeuge
- **EN:** Powerlifting Squat · **ID:** `pl-squat`
- **Untertitel:** Wettkampfnah: Kniebeuge und Bank · *Meet-style squat and bench*
- **Level · Dauer · Icon:** Profi · ca. 80 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Trizeps, Rücken
- **Geräte:** Langhantel, Kabel, Hantelbank
- **Für wen / Warum:** Für Kraftdreikampf mit sauberer Technik: schwere Dreier bei ca. 80–85 % des Maximums.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge `squat` | 5 × 3 | 4 min | Wettkampftiefe |
| 2 | Bankdrücken `bench` | 5 × 3 | 4 min | 1 s Pause auf der Brust |
| 3 | Langhantelrudern `bbrow` | 3 × 8 | 2 min |  |
| 4 | Enges Bankdrücken `cgbench` | 3 × 6 | 3 min |  |
| 5 | Face Pulls `facepull` | 3 × 15 | 60 s |  |
| 6 | Ab Roller `abwheel` | 3 × 8–12 | 60 s |  |

22 Arbeitssätze.

#### 17 · Powerlifting Kreuzheben
- **EN:** Powerlifting Deadlift · **ID:** `pl-deadlift`
- **Untertitel:** Kreuzheben schwer, Bank als Volumen · *Heavy deadlifts, bench volume*
- **Level · Dauer · Icon:** Profi · ca. 75 Min · mit Gewicht / Ganzkörper
- **Fokus:** Unterer Rücken, Oberschenkel hinten, Po, Rücken, Brust
- **Geräte:** Langhantel, Maschine, Klimmzugstange/Barren, Hantelbank
- **Für wen / Warum:** Zweiter Tag zu Powerlifting Kniebeuge: Kreuzheben schwer, Bankdrücken leichter für die Technik.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kreuzheben `deadlift` | 5 × 2–3 | 4 min | oder Sumo-Kreuzheben, je nach Stil |
| 2 | Bankdrücken `bench` | 4 × 6–8 | 3 min | ca. 70 % |
| 3 | Klimmzüge `pullup` | 4 × 5–8 | 2 min | mit Zusatzgewicht |
| 4 | Beinbeuger `legcurl` | 3 × 10–12 | 60 s |  |
| 5 | Rückenstrecker `hyperext` | 3 × 10–12 | 90 s | Scheibe vor der Brust |
| 6 | Beinheben hängend `legraise` | 3 × 8–12 | 60 s |  |

22 Arbeitssätze.

### E. Spezialisierung

#### 18 · Arm Day Classic
- **EN:** Arm Day Classic · **ID:** `arm-classic`
- **Untertitel:** Bizeps und Trizeps im Wechsel · *Biceps and triceps, alternating*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 50 Min · mit Gewicht / Oberkörper
- **Fokus:** Bizeps, Trizeps
- **Geräte:** Langhantel, Kurzhantel, Kabel, Hantelbank
- **Für wen / Warum:** Arm-Spezialisierung 1× pro Woche zusätzlich zum Split, Bizeps und Trizeps abwechselnd.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Enges Bankdrücken `cgbench` | 3 × 6–8 | 2 min |  |
| 2 | SZ-Curls `ezcurl` | 3 × 8–10 | 90 s |  |
| 3 | Trizepsdrücken mit Seil `ropepush` | 3 × 10–12 | 60 s |  |
| 4 | Schrägbank-Curls `inclinecurl` | 3 × 10–12 | 60 s |  |
| 5 | Trizepsdrücken über Kopf `ohext` | 3 × 10–12 | 60 s |  |
| 6 | Hammer Curls `hammer` | 3 × 10–12 | 60 s |  |

18 Arbeitssätze.

#### 19 · Shoulder Day Classic
- **EN:** Shoulder Day Classic · **ID:** `shoulder-classic`
- **Untertitel:** Vorne, seitlich, hinten · *Front, side and rear delts*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 50 Min · mit Gewicht / Oberkörper
- **Fokus:** Schultern, Rücken
- **Geräte:** Langhantel, Kurzhantel, Kabel, Maschine
- **Für wen / Warum:** Für breitere Schultern: Schwerpunkt seitlich und hinten, vorne arbeitet beim Drücken schon mit.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Schulterdrücken `ohp` | 4 × 6–8 | 2:30 min |  |
| 2 | Reverse Butterfly `pecdeckrear` | 3 × 12–15 | 60 s | hintere Schulter |
| 3 | Seitheben `lateral` | 3 × 12–15 | 60 s | seitliche Schulter |
| 4 | Shrugs `shrug` | 3 × 10–12 | 60 s |  |
| 5 | Seitheben am Kabel `cablelateral` | 3 × 12–15/S | 60 s |  |
| 6 | Face Pulls `facepull` | 3 × 15 | 60 s |  |

19 Arbeitssätze.

#### 20 · Po & Beine Classic
- **EN:** Glutes & Legs Classic · **ID:** `glutes-classic`
- **Untertitel:** Hip Thrust, Hüftbeuge, einbeinig · *Hip thrust, hinge, single-leg work*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 60 Min · mit Gewicht / Unterkörper
- **Fokus:** Po, Oberschenkel hinten, Oberschenkel vorne, Unterer Rücken
- **Geräte:** Langhantel, Kurzhantel, Maschine, Hantelbank
- **Für wen / Warum:** Po-Spezialisierung 1–2× pro Woche: Hip Thrust und RDL schwer, dann einbeinig und gezielt.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Hip Thrust `hipthrust` | 4 × 8–10 | 2 min |  |
| 2 | Rumänisches Kreuzheben `rdl` | 3 × 8–10 | 2 min |  |
| 3 | Bulgarian Split Squats `split` | 3 × 8–10/S | 90 s | Oberkörper leicht vor: mehr Po |
| 4 | Abduktoren (Maschine) `abductor` | 3 × 15–20 | 60 s |  |
| 5 | Beinpresse `legpress` | 3 × 10–12 | 90 s | Füße hoch und breit |
| 6 | Rückenstrecker `hyperext` | 3 × 12–15 | 60 s | Po bewusst anspannen |

19 Arbeitssätze.

#### 21 · Brust & Rücken Supersatz
- **EN:** Chest & Back Superset · **ID:** `chest-back-superset`
- **Untertitel:** Drei Paare, je eine Station · *Three pairs, one station each*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 50 Min · mit Gewicht / Oberkörper
- **Fokus:** Brust, Rücken, Bizeps, Trizeps
- **Geräte:** Kurzhantel, Kabel, Hantelbank
- **Für wen / Warum:** Viel Volumen in wenig Zeit: Gegenspieler im Wechsel, jedes Paar an einer Bank oder einem Kabel.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kurzhantel-Bankdrücken `dbbench` | 4 × 8–10 | 30 s | Paar A |
| 2 | Einarmiges Kurzhantelrudern `dbrow` | 4 × 8–10/S | 90 s | gleiche Bank |
| 3 | Schrägbankdrücken `incline` | 3 × 10–12 | 30 s | Paar B |
| 4 | Brustgestütztes Kurzhantelrudern `chestrow` NEU | 3 × 10–12 | 90 s | Bank schräg lassen |
| 5 | Kabelzug-Flys `cablefly` | 3 × 12–15 | 30 s | Paar C |
| 6 | Überzüge am Kabel `straightarm` | 3 × 12–15 | 60 s | gleicher Kabelturm |

20 Arbeitssätze.

### F. Express

#### 22 · Express Ganzkörper
- **EN:** Express Full Body · **ID:** `express-full`
- **Untertitel:** Ganzkörper in 20 Minuten · *Full body in 20 minutes*
- **Level · Dauer · Icon:** Einsteiger · ca. 20 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Rücken, Bauch
- **Geräte:** Kurzhantel
- **Für wen / Warum:** Für Tage mit wenig Zeit: Paare im Wechsel, kurze Pausen, ein Paar Hanteln reicht.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Ausfallschritte `lunge` | 3 × 8/S | 30 s | Paar A, gern rückwärts |
| 2 | Liegestütze `pushup` | 3 × 6–12 | 60 s | zu schwer: Knie-Liegestütze |
| 3 | Einarmiges Kurzhantelrudern `dbrow` | 3 × 10/S | 30 s | Paar B, am Oberschenkel abstützen |
| 4 | Glute Bridge `gbridge` NEU | 3 × 12–15 | 60 s | Hantel auf der Hüfte |
| 5 | Dead Bug `deadbug` NEU | 2 × 8/S | 30 s |  |

14 Arbeitssätze.

#### 23 · Express Langhantel
- **EN:** Express Barbell · **ID:** `express-barbell`
- **Untertitel:** Drei Grundübungen in 30 Minuten · *Three big lifts in 30 minutes*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 30 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Rücken, Bauch
- **Geräte:** Langhantel, Klimmzugstange/Barren, Hantelbank
- **Für wen / Warum:** Für volle Tage mit nur einem freien Rack: drei Grundübungen halten die Kraft.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge `squat` | 3 × 5 | 2 min |  |
| 2 | Bankdrücken `bench` | 3 × 5–6 | 90 s |  |
| 3 | Klimmzüge Untergriff `chinup` | 3 × 6–10 | 90 s | zu schwer: Latzug |
| 4 | Beinheben hängend `legraise` | 2 × 8–12 | 45 s |  |

11 Arbeitssätze.

### G. Kurzhantel & Kettlebell

#### 24 · Kurzhantel Ganzkörper
- **EN:** Dumbbell Full Body · **ID:** `db-full`
- **Untertitel:** Zuhause oder Studio, ohne Bank · *Home or gym, no bench needed*
- **Level · Dauer · Icon:** Einsteiger · ca. 40 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Rücken, Oberschenkel hinten, Schultern
- **Geräte:** Kurzhantel
- **Für wen / Warum:** Für zuhause mit einem Paar Kurzhanteln: alle Grundmuster, keine Bank nötig.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Goblet Squat `goblet` | 3 × 10–12 | 90 s |  |
| 2 | Kurzhantel-Bodendrücken `floorpress` NEU | 3 × 10–12 | 90 s |  |
| 3 | Einarmiges Kurzhantelrudern `dbrow` | 3 × 10–12/S | 60 s | an Stuhl oder Knie abstützen |
| 4 | Kurzhantel-RDL `dbrdl` NEU | 3 × 10–12 | 90 s |  |
| 5 | Kurzhantel-Schulterdrücken `dbpress` | 2 × 10–12 | 60 s | stehend |
| 6 | Kurzhantel-Curls `curl` | 2 × 10–12 | 60 s |  |

16 Arbeitssätze.

#### 25 · Kurzhantel Oberkörper
- **EN:** Dumbbell Upper Body · **ID:** `db-upper`
- **Untertitel:** Drücken und Ziehen mit Hantelbank · *Push and pull with a bench*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 55 Min · mit Gewicht / Oberkörper
- **Fokus:** Brust, Rücken, Schultern, Bizeps, Trizeps
- **Geräte:** Kurzhantel, Hantelbank
- **Für wen / Warum:** Heimtraining mit verstellbarer Bank; mit Kurzhantel Unterkörper ein 4-Tage-Split.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kurzhantel-Bankdrücken `dbbench` | 4 × 8–10 | 2 min |  |
| 2 | Einarmiges Kurzhantelrudern `dbrow` | 4 × 8–10/S | 90 s |  |
| 3 | Kurzhantel-Schulterdrücken `dbpress` | 3 × 8–10 | 90 s |  |
| 4 | Schrägbank-Curls `inclinecurl` | 2 × 10–12 | 60 s |  |
| 5 | Seitheben `lateral` | 3 × 12–15 | 60 s |  |
| 6 | Trizepsdrücken über Kopf `ohext` | 2 × 10–12 | 60 s |  |

18 Arbeitssätze.

#### 26 · Kurzhantel Unterkörper
- **EN:** Dumbbell Lower Body · **ID:** `db-lower`
- **Untertitel:** Beine und Po mit Kurzhanteln · *Legs and glutes with dumbbells*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 45 Min · mit Gewicht / Unterkörper
- **Fokus:** Oberschenkel vorne, Po, Oberschenkel hinten, Waden
- **Geräte:** Kurzhantel, Hantelbank
- **Für wen / Warum:** Wenn die Hanteln zu leicht werden: einbeinig und langsam macht leichte Gewichte wieder schwer.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Goblet Squat `goblet` | 4 × 8–12 | 90 s | 3 s absenken |
| 2 | Kurzhantel-RDL `dbrdl` NEU | 4 × 8–10 | 90 s |  |
| 3 | Bulgarian Split Squats `split` | 3 × 8–10/S | 90 s | hinterer Fuß auf Bank oder Stuhl |
| 4 | Glute Bridge `gbridge` NEU | 3 × 12–15 | 60 s | Hantel auf der Hüfte |
| 5 | Seitliche Ausfallschritte `sidelunge` NEU | 2 × 8/S | 60 s |  |
| 6 | Wadenheben ohne Gerät `bwcalf` NEU | 3 × 12–15/S | 45 s | einbeinig, Hantel in einer Hand |

19 Arbeitssätze.

#### 27 · Kettlebell Basics
- **EN:** Kettlebell Basics · **ID:** `kb-basics`
- **Untertitel:** Hüftbeuge, Kniebeuge, Drücken · *Hinge, squat, press*
- **Level · Dauer · Icon:** Einsteiger · ca. 35 Min · mit Gewicht / Ganzkörper
- **Fokus:** Po, Oberschenkel hinten, Oberschenkel vorne, Rücken, Schultern
- **Geräte:** Kettlebell
- **Für wen / Warum:** Einstieg mit einer Kettlebell: erst Kreuzheben lernen, dann Swing für Po und Ausdauer.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kettlebell-Kreuzheben `kbdeadlift` NEU | 3 × 10 | 90 s |  |
| 2 | Kettlebell Goblet Squat `kbgoblet` NEU | 3 × 10 | 90 s |  |
| 3 | Kettlebell Swing `kbswing` NEU | 3 × 12 | 90 s | erst nach sauberem Kettlebell-Kreuzheben |
| 4 | Kettlebell-Rudern einarmig `kbrow` NEU | 3 × 10/S | 60 s |  |
| 5 | Kettlebell-Drücken einarmig `kbpress` NEU | 2 × 8/S | 60 s |  |
| 6 | Dead Bug `deadbug` NEU | 2 × 8/S | 45 s |  |

16 Arbeitssätze.

#### 28 · Kettlebell Pro
- **EN:** Kettlebell Pro · **ID:** `kb-pro`
- **Untertitel:** Get-up, Snatch, Clean & Press · *Get-up, snatch, clean & press*
- **Level · Dauer · Icon:** Profi · ca. 55 Min · mit Gewicht / Ganzkörper
- **Fokus:** Schultern, Po, Oberschenkel hinten, Oberschenkel vorne, Rücken, Bauch
- **Geräte:** Kettlebell
- **Für wen / Warum:** Für sichere Swinger: Einarm-Übungen fordern Kraft, Ausdauer und stabile Schultern.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Turkish Get-up `kbgetup` NEU | 3 × 2/S | 90 s |  |
| 2 | Kettlebell Snatch `kbsnatch` NEU | 5 × 6/S | 90 s |  |
| 3 | Kettlebell Goblet Squat `kbgoblet` NEU | 4 × 6–8 | 2 min | schwere Kettlebell |
| 4 | Kettlebell Clean & Press `kbcleanpress` NEU | 4 × 5/S | 90 s |  |
| 5 | Kettlebell-Rudern einarmig `kbrow` NEU | 3 × 8–10/S | 60 s |  |
| 6 | Kettlebell Swing `kbswing` NEU | 3 × 15 | 60 s | auch einarmig |

22 Arbeitssätze.

### H. Ohne Geräte

#### 29 · Ohne Geräte Ganzkörper
- **EN:** No Equipment Full Body · **ID:** `bw-full`
- **Untertitel:** Ganzkörper nur mit eigenem Körper · *Full body, just your bodyweight*
- **Level · Dauer · Icon:** Einsteiger · ca. 25 Min · ohne Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Brust, Unterer Rücken, Bauch
- **Geräte:** nur Körpergewicht
- **Für wen / Warum:** Überall machbar, auch im Hotelzimmer: für die ersten Wochen oder auf Reisen.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge ohne Gewicht `airsquat` NEU | 3 × 15 | 60 s |  |
| 2 | Knie-Liegestütze `kneepushup` NEU | 3 × 8–12 | 60 s | ab 3 × 12 sauber: Liegestütze |
| 3 | Rückwärts-Ausfallschritte `bwlunge` NEU | 3 × 8/S | 60 s |  |
| 4 | Glute Bridge `gbridge` NEU | 3 × 15 | 45 s |  |
| 5 | Rückenheben in Bauchlage `floorext` NEU | 2 × 12 | 45 s | oben 2 s halten |
| 6 | Unterarmstütz `plank` NEU [ZEIT] | 2 × 30 s | 45 s |  |

16 Arbeitssätze.

#### 30 · Ohne Geräte Push
- **EN:** No Equipment Push · **ID:** `bw-push`
- **Untertitel:** Brust, Schultern, Trizeps ohne Geräte · *Chest, shoulders, triceps, no kit*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 30 Min · ohne Gewicht / Oberkörper
- **Fokus:** Brust, Schultern, Trizeps
- **Geräte:** nur Körpergewicht
- **Für wen / Warum:** Für alle mit 15+ sauberen Liegestützen: schwerere Varianten statt endloser Wiederholungen.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Liegestütze Füße erhöht `declinepu` NEU | 3 × 8–12 | 90 s | Stuhl an die Wand |
| 2 | Pike-Liegestütze `pike` NEU | 3 × 6–10 | 90 s |  |
| 3 | Liegestütze `pushup` | 4 × 10–15 | 60 s | 3 s absenken |
| 4 | Enge Liegestütze `closepushup` NEU | 3 × 8–12 | 60 s |  |

13 Arbeitssätze.

#### 31 · Ohne Geräte Pull
- **EN:** No Equipment Pull · **ID:** `bw-pull`
- **Untertitel:** Rücken und Haltung ohne Stange · *Back and posture without a bar*
- **Level · Dauer · Icon:** Einsteiger · ca. 25 Min · ohne Gewicht / Oberkörper
- **Fokus:** Rücken, Schultern, Unterer Rücken, Po
- **Geräte:** nur Körpergewicht
- **Für wen / Warum:** Haltung und Rückenausdauer zuhause; für echte Zugkraft weiter mit Calisthenics Basics.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Back Widows `backwidow` NEU | 3 × 10–12 | 60 s |  |
| 2 | Y-Heben in Bauchlage `proney` NEU | 3 × 12 | 45 s |  |
| 3 | Rückenheben in Bauchlage `floorext` NEU | 3 × 12 | 45 s |  |
| 4 | Reverse Snow Angels `snowangel` NEU | 3 × 10 | 45 s |  |
| 5 | Glute Bridge `gbridge` NEU | 3 × 15 | 45 s |  |
| 6 | Bird Dog `birddog` NEU | 2 × 8/S | 45 s |  |

17 Arbeitssätze.

#### 32 · Ohne Geräte Beine
- **EN:** No Equipment Legs · **ID:** `bw-legs`
- **Untertitel:** Beine und Po nur mit Körpergewicht · *Legs and glutes, bodyweight only*
- **Level · Dauer · Icon:** Einsteiger · ca. 30 Min · ohne Gewicht / Unterkörper
- **Fokus:** Oberschenkel vorne, Po, Oberschenkel hinten, Waden
- **Geräte:** nur Körpergewicht
- **Für wen / Warum:** Beintraining ohne Hanteln: Wiederholungen und Tempo statt Gewicht.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Kniebeuge ohne Gewicht `airsquat` NEU | 3 × 15–20 | 60 s | 3 s absenken |
| 2 | Glute Bridge `gbridge` NEU | 3 × 15 | 45 s | schwerer: einbeinig |
| 3 | Rückwärts-Ausfallschritte `bwlunge` NEU | 3 × 10/S | 60 s |  |
| 4 | Handtuch-Beinbeuger `slidecurl` NEU | 2 × 8–10 | 60 s |  |
| 5 | Seitliche Ausfallschritte `sidelunge` NEU | 2 × 8/S | 60 s |  |
| 6 | Wadenheben ohne Gerät `bwcalf` NEU | 3 × 12–15/S | 45 s | einbeinig |

16 Arbeitssätze.

### I. Core

#### 33 · Core Basics
- **EN:** Core Basics · **ID:** `core-basics`
- **Untertitel:** Bauch und Rumpf stabil · *Stable abs and trunk*
- **Level · Dauer · Icon:** Einsteiger · ca. 20 Min · ohne Gewicht / Core
- **Fokus:** Bauch, Unterer Rücken
- **Geräte:** nur Körpergewicht
- **Für wen / Warum:** Kurzer Rumpfblock nach dem Training oder an freien Tagen: Stabilität vor Crunches.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Dead Bug `deadbug` NEU | 3 × 8/S | 45 s |  |
| 2 | Bird Dog `birddog` NEU | 2 × 8/S | 45 s |  |
| 3 | Unterarmstütz `plank` NEU [ZEIT] | 3 × 20–40 s | 45 s |  |
| 4 | Reverse Crunch `revcrunch` NEU | 2 × 10–12 | 45 s |  |
| 5 | Seitstütz `sideplank` NEU [ZEIT] | 2 × 20–30 s/S | 45 s |  |
| 6 | Crunches `crunch` | 2 × 12–15 | 45 s |  |

14 Arbeitssätze.

#### 34 · Core Pro
- **EN:** Core Pro · **ID:** `core-pro`
- **Untertitel:** Hängen, rollen, stabilisieren · *Hang, roll out, stabilise*
- **Level · Dauer · Icon:** Profi · ca. 35 Min · mit Gewicht / Core
- **Fokus:** Bauch, Unterer Rücken
- **Geräte:** Kabel, Klimmzugstange/Barren, Hantelbank
- **Für wen / Warum:** Für starke Rümpfe: lange Hebel und Last statt hoher Wiederholungen.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Toes-to-Bar `ttb` NEU | 4 × 6–10 | 90 s |  |
| 2 | Pallof Press `pallof` NEU | 3 × 10/S | 60 s | schwer |
| 3 | Ab Roller `abwheel` | 4 × 8–12 | 90 s | Ziel: aus dem Stand |
| 4 | Kabel-Crunches `cablecrunch` | 3 × 10–15 | 60 s |  |
| 5 | Dragon Flag `dragonflag` NEU | 3 × 4–6 | 90 s |  |
| 6 | Hollow Rocks `hollowrock` NEU | 3 × 15 | 45 s |  |

20 Arbeitssätze.

### J. Calisthenics

#### 35 · Calisthenics Basics
- **EN:** Calisthenics Basics · **ID:** `cali-basics`
- **Untertitel:** Erste Klimmzüge, saubere Liegestütze · *First pull-ups, clean push-ups*
- **Level · Dauer · Icon:** Einsteiger · ca. 40 Min · ohne Gewicht / Ganzkörper
- **Fokus:** Rücken, Bizeps, Brust, Trizeps, Bauch, Oberschenkel vorne
- **Geräte:** Klimmzugstange/Barren
- **Für wen / Warum:** Der Weg zum ersten Klimmzug: Schulterblätter aktivieren, langsam ablassen, schräg rudern.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Schulterblatt-Klimmzüge `scappull` NEU | 3 × 8 | 60 s |  |
| 2 | Liegestütze `pushup` | 3 × 6–12 | 90 s | zu schwer: Knie-Liegestütze |
| 3 | Negativ-Klimmzüge `negpullup` NEU | 3 × 3–5 | 2 min |  |
| 4 | Rückwärts-Ausfallschritte `bwlunge` NEU | 3 × 10/S | 60 s |  |
| 5 | Australian Pull-ups `austrow` NEU | 3 × 8–12 | 90 s | tiefe Stange oder Multipresse |
| 6 | Hängendes Knieheben `kneeraise` NEU | 3 × 8–12 | 60 s |  |

18 Arbeitssätze.

#### 36 · Calisthenics Pro
- **EN:** Calisthenics Pro · **ID:** `cali-pro`
- **Untertitel:** Muscle-up, Handstand, Front Lever · *Muscle-up, handstand, front lever*
- **Level · Dauer · Icon:** Profi · ca. 70 Min · ohne Gewicht / Ganzkörper
- **Fokus:** Rücken, Schultern, Brust, Trizeps, Bizeps, Oberschenkel vorne, Bauch
- **Geräte:** Klimmzugstange/Barren
- **Für wen / Warum:** Für 12+ Klimmzüge und 20+ Dips: Skills frisch zuerst, dann Grundübungen mit Zusatzgewicht.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Muscle-up `muscleup` NEU | 5 × 2–4 | 3 min |  |
| 2 | Handstand-Liegestütze `hspu` NEU | 4 × 4–8 | 2:30 min |  |
| 3 | Tuck Front Lever Raises `frontlever` NEU | 3 × 5 | 2 min |  |
| 4 | Dips `dips` | 4 × 6–10 | 2 min | mit Zusatzgewicht |
| 5 | Klimmzüge `pullup` | 4 × 5–8 | 2:30 min | mit Zusatzgewicht |
| 6 | Pistol Squat `pistol` NEU | 3 × 5/S | 90 s |  |
| 7 | Toes-to-Bar `ttb` NEU | 3 × 8–12 | 60 s |  |

26 Arbeitssätze.

### K. Athletik & Kondition

#### 37 · Athletik Sprungkraft
- **EN:** Athletic Jumps · **ID:** `athletic-jumps`
- **Untertitel:** Springen, landen, einbeinig stark · *Jump, land, single-leg strength*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 45 Min · ohne Gewicht / Unterkörper
- **Fokus:** Oberschenkel vorne, Po, Waden, Oberschenkel hinten
- **Geräte:** Kurzhantel, Hantelbank, Box
- **Für wen / Warum:** Für Ballsport und Laufen: Sprünge frisch mit voller Pause, danach einbeinige Kraft.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Pogo-Sprünge `pogo` NEU | 3 × 15 | 60 s |  |
| 2 | Box Jumps `boxjump` NEU | 4 × 4 | 90 s |  |
| 3 | Seitsprünge `latbound` NEU | 3 × 5/S | 60 s |  |
| 4 | Standweitsprung `broadjump` NEU | 3 × 4 | 90 s |  |
| 5 | Kurzhantel-RDL `dbrdl` NEU | 3 × 8 | 90 s |  |
| 6 | Bulgarian Split Squats `split` | 3 × 6–8/S | 2 min |  |

19 Arbeitssätze.

#### 38 · Athletik Power
- **EN:** Athletic Power · **ID:** `athletic-power`
- **Untertitel:** Umsetzen, Sprünge, Würfe · *Cleans, jumps, throws*
- **Level · Dauer · Icon:** Profi · ca. 60 Min · mit Gewicht / Ganzkörper
- **Fokus:** Oberschenkel vorne, Po, Oberschenkel hinten, Rücken, Schultern, Bauch
- **Geräte:** Langhantel, Medizinball, Box
- **Für wen / Warum:** Für Leistungssportler mit Hanteltechnik: Schnellkraft aus Sprung, Umsetzen und Wurf.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Box Jumps `boxjump` NEU | 3 × 3 | 2 min | hohe Box |
| 2 | Hang Power Clean `hangclean` NEU | 5 × 3 | 2:30 min |  |
| 3 | Medizinball-Brustpass `mbchest` NEU | 3 × 5 | 60 s |  |
| 4 | Frontkniebeuge `frontsquat` | 4 × 3–5 | 3 min |  |
| 5 | Medizinball-Rotationswurf `mbrot` NEU | 3 × 5/S | 60 s |  |
| 6 | Nordic Hamstring Curl `nordic` NEU | 3 × 4–6 | 2 min | erste Woche 2 × 3 |

21 Arbeitssätze.

#### 39 · Hybrid Race Prep
- **EN:** Hybrid Race Prep · **ID:** `hybrid-prep`
- **Untertitel:** Stationstraining für Fitness-Rennen · *Station training for fitness races*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 60 Min · mit Gewicht / Ausdauer
- **Fokus:** Oberschenkel vorne, Po, Rücken, Schultern, Bauch
- **Geräte:** Kurzhantel, Kettlebell, Medizinball, Cardio-Gerät
- **Für wen / Warum:** Für Hybrid-Fitnessrennen: Kraftausdauer an den typischen Stationen, Läufe separat.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Rudergerät `rower` NEU [STRECKE] | 3 × 500 m | 90 s |  |
| 2 | Ski-Ergometer `skimach` NEU [STRECKE] | 4 × 250 m | 60 s |  |
| 3 | Wall Balls `wallball` NEU | 4 × 15 | 90 s | 6 kg / 9 kg |
| 4 | Farmer's Walk `farmers` NEU [STRECKE] | 3 × 50 m | 60 s | schwer |
| 5 | Ausfallschritte `lunge` | 3 × 12/S | 90 s | gehend |
| 6 | Kettlebell Swing `kbswing` NEU | 3 × 20 | 60 s |  |
| 7 | Burpee-Weitsprünge `burpeebj` NEU | 3 × 8 | 90 s |  |

23 Arbeitssätze.

#### 40 · Hybrid Race Pro
- **EN:** Hybrid Race Pro · **ID:** `hybrid-pro`
- **Untertitel:** Wettkampf-Simulation, 8 Stationen · *Race simulation, 8 stations*
- **Level · Dauer · Icon:** Profi · ca. 90 Min · mit Gewicht / Ausdauer
- **Fokus:** Oberschenkel vorne, Po, Rücken, Schultern, Bauch
- **Geräte:** Kurzhantel, Medizinball, Cardio-Gerät, Schlitten
- **Für wen / Warum:** Generalprobe 3–6 Wochen vor dem Rennen: alle Stationen in Renndistanz, dazwischen je 1 km laufen.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Ski-Ergometer `skimach` NEU [STRECKE] | 1 × 1000 m | 5 min | Pause = 1 km laufen |
| 2 | Schlitten schieben `sledpush` NEU [STRECKE] | 1 × 50 m | 5 min |  |
| 3 | Schlitten ziehen `sledpull` NEU [STRECKE] | 1 × 50 m | 5 min |  |
| 4 | Burpee-Weitsprünge `burpeebj` NEU | 1 × 40 | 5 min | entspricht ca. 80 m |
| 5 | Rudergerät `rower` NEU [STRECKE] | 1 × 1000 m | 5 min |  |
| 6 | Farmer's Walk `farmers` NEU [STRECKE] | 1 × 200 m | 5 min |  |
| 7 | Ausfallschritte `lunge` | 1 × 50/S | 5 min | gehend, ca. 100 m |
| 8 | Wall Balls `wallball` NEU | 1 × 100 | 60 s | in 10er-Blöcken |

8 Arbeitssätze.

#### 41 · Kampfsport-Kondition
- **EN:** Combat Conditioning · **ID:** `combat`
- **Untertitel:** Runden wie im Ring: Kraft und Puste · *Fight-style rounds: power and stamina*
- **Level · Dauer · Icon:** Fortgeschritten · ca. 45 Min · mit Gewicht / Ausdauer
- **Fokus:** Bauch, Po, Oberschenkel hinten, Schultern, Brust, Waden
- **Geräte:** Kettlebell, Medizinball
- **Für wen / Warum:** Für Boxen, MMA, Ringen: Hüftexplosivität, Rumpf und Kondition. Profis: 1–2 Runden mehr.

| # | Übung | Sätze × Ziel | Pause | Hinweis |
|---|---|---|---|---|
| 1 | Seilspringen `jumprope` NEU [ZEIT] | 3 × 2 min | 60 s |  |
| 2 | Kettlebell Swing `kbswing` NEU | 4 × 15 | 60 s |  |
| 3 | Ball Slams `mbslam` NEU | 4 × 10 | 60 s |  |
| 4 | Liegestütze `pushup` | 3 × 12–20 | 60 s | explosiv hoch |
| 5 | Sprawls `sprawl` NEU | 3 × 10 | 60 s |  |
| 6 | Bergsteiger `mtnclimber` NEU | 3 × 20/S | 45 s |  |
| 7 | Schattenboxen `shadowbox` NEU [ZEIT] | 3 × 3 min | 60 s |  |

23 Arbeitssätze.

---

## Neue Übungen

67 neue Übungen: 57 × `reps`, 5 × `time`, 5 × `dist`. Muskelgruppen als App-Schlüssel, erste = Hauptgruppe. Jede Übung hat genau ein Hauptgerät. Info-i auf Englisch steht im JSON.

| Schlüssel | Name (DE / EN) | Gruppen | Gerät | Typ | Info-i (DE) | In # |
|---|---|---|---|---|---|---|
| `dbrdl` | Kurzhantel-RDL / Dumbbell Romanian deadlift | hams,glutes,lowback | `db` | reps | Hüfte nach hinten schieben, Rücken bleibt gerade, Hanteln nah an den Beinen. | 3, 24, 26, 37 |
| `floorpress` | Kurzhantel-Bodendrücken / Dumbbell floor press | chest,triceps | `db` | reps | Oberarme sanft am Boden ablegen, nicht aufprallen lassen. | 24 |
| `chestrow` | Brustgestütztes Kurzhantelrudern / Chest-supported dumbbell row | back,biceps | `db` | reps | Brust bleibt auf der Schrägbank, Schulterblätter zuerst zurückziehen. | 21 |
| `kneepushup` | Knie-Liegestütze / Knee push-ups | chest,triceps | `bw` | reps | Körper von Knie bis Kopf in einer Linie, Hände unter den Schultern. | 29 |
| `closepushup` | Enge Liegestütze / Close-grip push-ups | triceps,chest | `bw` | reps | Hände schulterbreit, Ellbogen nah am Körper führen. | 30 |
| `declinepu` | Liegestütze Füße erhöht / Decline push-ups | chest,shoulders,triceps | `bw` | reps | Füße auf einen rutschfesten Stuhl an der Wand. Bauch fest, Hüfte nicht durchhängen lassen. | 30 |
| `pike` | Pike-Liegestütze / Pike push-ups | shoulders,triceps | `bw` | reps | Hüfte hoch wie ein umgedrehtes V, Kopf vor die Hände senken. | 30 |
| `hspu` | Handstand-Liegestütze / Handstand push-ups | shoulders,triceps | `bw` | reps | Nur mit sicherem Handstand an der Wand. Kissen unter den Kopf, langsam absenken. | 36 |
| `airsquat` | Kniebeuge ohne Gewicht / Bodyweight squat | legs,glutes | `bw` | reps | Fersen bleiben am Boden, Knie zeigen in Richtung Zehen. | 29, 32 |
| `bwlunge` | Rückwärts-Ausfallschritte / Reverse lunges | legs,glutes | `bw` | reps | Großer Schritt nach hinten, vorderes Knie bleibt über dem Fuß. | 29, 32, 35 |
| `sidelunge` | Seitliche Ausfallschritte / Lateral lunges | legs,glutes | `bw` | reps | Gewicht aufs gebeugte Bein, das andere bleibt gestreckt. Nur so tief wie angenehm. | 26, 32 |
| `gbridge` | Glute Bridge / Glute bridge | glutes,hams | `bw` | reps | Hüfte heben, bis Knie, Hüfte und Schultern eine Linie bilden. Kein Hohlkreuz. | 4, 22, 26, 29, 31, 32 |
| `slidecurl` | Handtuch-Beinbeuger / Towel leg curl | hams,glutes | `bw` | reps | Fersen auf ein Handtuch, Hüfte oben halten. Nur auf glattem Boden. | 32 |
| `bwcalf` | Wadenheben ohne Gerät / Bodyweight calf raise | calves | `bw` | reps | An der Wand festhalten, ganz hoch, langsam ab. Schwerer: einbeinig. | 7, 26, 32 |
| `pistol` | Pistol Squat / Pistol squat | legs,glutes | `bw` | reps | Anfangs an einer Stange festhalten. Knie bleibt über dem Fuß. | 36 |
| `floorext` | Rückenheben in Bauchlage / Prone back raise | lowback,glutes | `bw` | reps | Arme und Beine nur leicht abheben, Blick bleibt zum Boden. | 29, 31 |
| `backwidow` | Back Widows / Back widows | back | `bw` | reps | Rückenlage, Knie gebeugt. Ellbogen in den Boden drücken und den Oberkörper leicht anheben. | 31 |
| `proney` | Y-Heben in Bauchlage / Prone Y raise | shoulders,back | `bw` | reps | Arme als Y vor dem Kopf, Daumen zeigen nach oben, Schultern weg von den Ohren. | 31 |
| `snowangel` | Reverse Snow Angels / Reverse snow angels | shoulders,back | `bw` | reps | Bauchlage, Arme knapp über dem Boden langsam von der Hüfte nach vorn führen. | 31 |
| `birddog` | Bird Dog / Bird dog | lowback,core,glutes | `bw` | reps | Gegenarm und -bein strecken, Becken bleibt ruhig wie eine Tischplatte. | 5, 31, 33 |
| `deadbug` | Dead Bug / Dead bug | core | `bw` | reps | Unterer Rücken bleibt am Boden. Langsam bewegen, beim Strecken ausatmen. | 3, 22, 27, 33 |
| `plank` | Unterarmstütz / Plank | core | `bw` | time | Körper in einer Linie, Po leicht anspannen. Satz beenden, wenn die Hüfte absackt. | 29, 33 |
| `sideplank` | Seitstütz / Side plank | core | `bw` | time | Ellbogen unter der Schulter, Hüfte oben. Leichter: Knie am Boden. | 33 |
| `revcrunch` | Reverse Crunch / Reverse crunch | core | `bw` | reps | Becken einrollen statt Beine schwingen. | 33 |
| `mtnclimber` | Bergsteiger / Mountain climbers | core,shoulders | `bw` | reps | Hände unter den Schultern, Hüfte bleibt tief. | 41 |
| `hollowrock` | Hollow Rocks / Hollow rocks | core | `bw` | reps | Unterer Rücken bleibt am Boden. Leichter: Knie anwinkeln. | 34 |
| `dragonflag` | Dragon Flag / Dragon flag | core | `bench` | reps | Nur die Schultern auf der Bank, Körper gerade. Erst nur langsames Absenken üben. | 34 |
| `kneeraise` | Hängendes Knieheben / Hanging knee raise | core | `bar` | reps | Knie zur Brust, Becken einrollen, ohne Schwung. | 35 |
| `ttb` | Toes-to-Bar / Toes-to-bar | core,back | `bar` | reps | Kontrolliert ohne Schwung. Zu schwer: hängendes Knieheben. | 34, 36 |
| `scappull` | Schulterblatt-Klimmzüge / Scapular pull-ups | back | `bar` | reps | Arme bleiben gestreckt, nur die Schulterblätter nach unten ziehen. | 35 |
| `negpullup` | Negativ-Klimmzüge / Negative pull-ups | back,biceps | `bar` | reps | Mit Sprung oder Kasten nach oben, dann 3–5 s kontrolliert ablassen. | 35 |
| `austrow` | Australian Pull-ups / Inverted rows | back,biceps | `bar` | reps | Körper gerade wie ein Brett, Brust zur Stange. Je flacher, desto schwerer. | 35 |
| `muscleup` | Muscle-up / Muscle-up | back,chest,triceps | `bar` | reps | Erst ab 12 sauberen Klimmzügen und 15 Dips üben. Weicher Boden darunter. | 36 |
| `frontlever` | Tuck Front Lever Raises / Tuck front lever raises | back,core | `bar` | reps | Knie angezogen, Arme gestreckt, langsam bis zur Waagerechten heben. | 36 |
| `pallof` | Pallof Press / Pallof press | core | `cable` | reps | Seitlich zum Kabel stehen, Griff wegdrücken, Oberkörper nicht mitdrehen. | 5, 34 |
| `kbswing` | Kettlebell Swing / Kettlebell swing | glutes,hams,lowback | `kb` | reps | Kraft aus der Hüfte, nicht aus den Armen. Rücken gerade, keine Kniebeuge. | 27, 28, 39, 41 |
| `kbdeadlift` | Kettlebell-Kreuzheben / Kettlebell deadlift | glutes,hams,legs,lowback | `kb` | reps | Kettlebell zwischen den Füßen, Rücken gerade, aus den Beinen hochdrücken. | 27 |
| `kbgoblet` | Kettlebell Goblet Squat / Kettlebell goblet squat | legs,glutes | `kb` | reps | Kugel an der Brust, Ellbogen zwischen die Knie, Fersen bleiben unten. | 27, 28 |
| `kbrow` | Kettlebell-Rudern einarmig / One-arm kettlebell row | back,biceps | `kb` | reps | Freie Hand abstützen, Rücken gerade, Ellbogen zur Hüfte ziehen. | 27, 28 |
| `kbpress` | Kettlebell-Drücken einarmig / One-arm kettlebell press | shoulders,triceps | `kb` | reps | Bauch und Po fest, nicht ins Hohlkreuz ausweichen. | 27 |
| `kbcleanpress` | Kettlebell Clean & Press / Kettlebell clean and press | shoulders,glutes,hams,triceps | `kb` | reps | Kugel nah am Körper hochführen, damit sie nicht auf den Unterarm schlägt. | 28 |
| `kbsnatch` | Kettlebell Snatch / Kettlebell snatch | glutes,hams,shoulders,back | `kb` | reps | Oben die Hand durchstecken, damit die Kugel nicht aufs Handgelenk schlägt. Leicht beginnen. | 28 |
| `kbgetup` | Turkish Get-up / Turkish get-up | shoulders,core,glutes | `kb` | reps | Langsam, Arm immer gestreckt, Blick zur Kugel. Erst ohne Gewicht üben. | 28 |
| `boxjump` | Box Jumps / Box jumps | legs,glutes,calves | `box` | reps | Weich landen und herunter steigen, nicht springen. Nie im ermüdeten Zustand. | 37, 38 |
| `broadjump` | Standweitsprung / Broad jump | legs,glutes,calves | `bw` | reps | Leise landen, Knie über den Zehen, Landung kurz halten. | 37 |
| `pogo` | Pogo-Sprünge / Pogo jumps | calves | `bw` | reps | Kleine, schnelle Sprünge aus dem Sprunggelenk mit kurzem Bodenkontakt. | 37 |
| `latbound` | Seitsprünge / Lateral bounds | glutes,legs | `bw` | reps | Seitlich von Bein zu Bein springen, jede Landung 1 s halten. | 37 |
| `nordic` | Nordic Hamstring Curl / Nordic hamstring curl | hams | `bw` | reps | Füße fest verankern, langsam nach vorn sinken, mit den Händen abfangen. Starker Muskelkater möglich. | 38 |
| `hangclean` | Hang Power Clean / Hang power clean | glutes,legs,hams,back,shoulders | `bb` | reps | Nur mit gelernter Technik. Stange nah am Körper, Ellbogen schnell nach vorn. | 38 |
| `mbchest` | Medizinball-Brustpass / Medicine ball chest pass | chest,triceps,shoulders | `medball` | reps | Explosiv gegen eine feste Wand stoßen, Ball kontrolliert fangen. | 38 |
| `mbrot` | Medizinball-Rotationswurf / Medicine ball rotational throw | core,shoulders | `medball` | reps | Seitlich zur Wand, Kraft aus Hüfte und Rumpf, nicht nur aus den Armen. | 38 |
| `mbslam` | Ball Slams / Ball slams | core,back,shoulders | `medball` | reps | Nur mit Ball, der nicht zurückspringt. Beim Aufheben Rücken gerade. | 41 |
| `wallball` | Wall Balls / Wall balls | legs,shoulders,glutes | `medball` | reps | Tief in die Kniebeuge, Ball aus dem Hochkommen werfen. Ziel ca. 3 m hoch. | 39, 40 |
| `burpeebj` | Burpee-Weitsprünge / Burpee broad jumps | legs,glutes,chest | `bw` | reps | Nach dem Burpee weich und beidbeinig landen, nicht auf den Fersen. | 39, 40 |
| `sprawl` | Sprawls / Sprawls | legs,core,chest | `bw` | reps | Hüfte schnell zum Boden, Beine nach hinten, sofort wieder auf. | 41 |
| `jumprope` | Seilspringen / Jump rope | calves | `bw` | time | Auf den Fußballen, kleine Sprünge. Ohne Seil: gleiche Sprünge in der Luft. | 41 |
| `shadowbox` | Schattenboxen / Shadow boxing | shoulders,core | `bw` | time | Locker in Deckung bleiben, Schläge aus der Hüfte, Arme nicht durchschlagen. | 41 |
| `rower` | Rudergerät / Rowing machine | legs,back | `cardio` | dist | Reihenfolge Beine, Rumpf, Arme. Rücken bleibt gerade. | 39, 40 |
| `skimach` | Ski-Ergometer / Ski ergometer | back,triceps,core | `cardio` | dist | Zug aus dem breiten Rücken und Rumpf, Hüfte beugt mit, Arme fast gestreckt. | 39, 40 |
| `sledpush` | Schlitten schieben / Sled push | legs,glutes,calves | `sled` | dist | Arme lang, Körper schräg, kurze kräftige Schritte. | 40 |
| `sledpull` | Schlitten ziehen / Sled pull | back,biceps,hams | `sled` | dist | Seil Hand über Hand ziehen, tiefe stabile Position, Rücken gerade. | 40 |
| `farmers` | Farmer's Walk / Farmer's walk | back,core | `db` | dist | Hanteln seitlich tragen, aufrecht gehen, Schultern unten. Mit geradem Rücken abstellen. | 6, 39, 40 |
| `sitstand` | Aufstehen vom Stuhl / Sit-to-stand | legs,glutes | `bw` | reps | Stabiler Stuhl an der Wand, möglichst ohne Hände aufstehen, langsam hinsetzen. | 6, 7 |
| `wallpush` | Wand-Liegestütze / Wall push-ups | chest,triceps | `bw` | reps | Hände auf Schulterhöhe an die Wand. Je weiter die Füße weg, desto schwerer. | 7 |
| `wallangel` | Wandengel / Wall angels | shoulders,back | `bw` | reps | Rücken und Arme an die Wand, Arme langsam hoch und runter gleiten lassen. | 7 |
| `sideleg` | Seitliches Beinheben stehend / Standing side leg raise | glutes | `bw` | reps | An einer Stuhllehne festhalten, Oberkörper bleibt aufrecht. | 7 |
| `balance` | Einbeinstand / Single-leg stand | core,calves,glutes | `bw` | time | Neben einer Wand oder Stuhllehne stehen. Schwerer: Augen schließen. | 6, 7 |

**Priorität beim Einbauen:** Welle 1 (Einsteiger, 60+, Ohne Geräte, Kettlebell Basics, Calisthenics Basics): dbrdl, floorpress, kneepushup, airsquat, bwlunge, sidelunge, gbridge, slidecurl, bwcalf, floorext, backwidow, proney, snowangel, birddog, deadbug, plank, sideplank, revcrunch, pallof, scappull, negpullup, austrow, kneeraise, kbdeadlift, kbgoblet, kbswing, kbrow, kbpress, sitstand, wallpush, wallangel, sideleg, balance, farmers. Welle 2: alle übrigen (Fortgeschritten/Profi, Athletik, Hybrid, Kampfsport).

## Info-i bestehende Übungen

Für alle 76 bestehenden Übungen gibt es einen kurzen Hinweis (DE hier, DE + EN im JSON unter `tips`).

| Schlüssel | Übung | Info-i (DE) |
|---|---|---|
| `bench` | Bankdrücken | Schwer nur mit Sicherungsstangen oder Partner. Schulterblätter zusammen, Füße fest am Boden. |
| `incline` | Schrägbankdrücken | Bank auf 30–45°. Hanteln über der oberen Brust, Ellbogen leicht nach innen. |
| `fly` | Butterfly | Ellbogen leicht gebeugt, nur so weit öffnen, wie es an der Schulter angenehm ist. |
| `ohp` | Schulterdrücken | Po und Bauch fest, kein Hohlkreuz. Kopf nach vorn, sobald die Stange vorbei ist. |
| `lateral` | Seitheben | Leichtes Gewicht, kein Schwung. Hände nur bis Schulterhöhe. |
| `facepull` | Face Pulls | Seil auf Stirnhöhe ziehen, Daumen zeigen nach hinten. |
| `pushdown` | Trizepsdrücken | Ellbogen bleiben am Körper, nur die Unterarme bewegen sich. |
| `dips` | Dips | Nur so tief, bis die Oberarme waagerecht sind. Schultern weg von den Ohren. |
| `latpull` | Latzug | Stange zur oberen Brust, nie in den Nacken. Oberkörper leicht zurück. |
| `row` | Rudern am Kabel | Rücken gerade, erst Schulterblätter zurück, dann die Arme. |
| `pullup` | Klimmzüge | Aus dem ruhigen Hang starten, ohne Schwung. Zu schwer: Latzug. |
| `deadlift` | Kreuzheben | Stange nah am Körper, Rücken gerade. Technik vor Gewicht, im Zweifel Trainer fragen. |
| `curl` | Kurzhantel-Curls | Ellbogen bleiben am Körper, kein Schwung aus dem Rücken. |
| `hammer` | Hammer Curls | Daumen zeigen nach oben, Ellbogen ruhig am Körper. |
| `squat` | Kniebeuge | Schwer nur im Rack, Sicherungsstangen knapp unter deiner Tiefe. Fersen bleiben am Boden. |
| `legpress` | Beinpresse | Unterer Rücken bleibt am Polster, Knie oben nicht durchdrücken. |
| `rdl` | Rumänisches Kreuzheben | Stange nah an den Beinen, Hüfte nach hinten, Rücken gerade, Knie leicht gebeugt. |
| `legcurl` | Beinbeuger | Polster knapp über der Ferse, Hüfte bleibt auf der Bank. |
| `legext` | Beinstrecker | Drehachse auf Kniehöhe einstellen, oben kurz halten, langsam ab. |
| `calf` | Wadenheben stehend | Ganz hoch, unten kurz dehnen, nicht federn. |
| `dbbench` | Kurzhantel-Bankdrücken | Hanteln über der Brust. Zum Ablegen auf die Oberschenkel zurückrollen, nicht seitlich fallen lassen. |
| `inclinebb` | Schrägbankdrücken Langhantel | Schwer nur mit Sicherungsstangen oder Partner. Stange zur oberen Brust. |
| `decline` | Negativ-Bankdrücken | Füße sicher einhaken, schwer nur mit Partner. |
| `cablefly` | Kabelzug-Flys | Ellbogen leicht gebeugt, Bewegung aus der Schulter, nicht aus den Armen. |
| `chestpress` | Brustpresse | Griffe auf Brusthöhe einstellen, Schulterblätter am Polster. |
| `pushup` | Liegestütze | Körper in einer Linie, Ellbogen etwa 45° vom Körper. Zu schwer: Knie-Liegestütze. |
| `dbpress` | Kurzhantel-Schulterdrücken | Kein Hohlkreuz, Bauch fest. Hanteln über den Schultern nach oben drücken. |
| `arnold` | Arnold Press | Langsam drehen, Gewicht leichter als beim Schulterdrücken wählen. |
| `frontraise` | Frontheben | Nur bis Schulterhöhe, ohne Schwung aus dem Rücken. |
| `reversefly` | Reverse Flys | Leichtes Gewicht, Schulterblätter zusammen, Nacken locker. |
| `uprightrow` | Aufrechtes Rudern | Weiter Griff und nur bis Brusthöhe ziehen, das schont die Schultern. |
| `shrug` | Shrugs | Schultern gerade nach oben ziehen, nicht kreisen. |
| `cablelateral` | Seitheben am Kabel | Kabel von unten, Arm leicht gebeugt, nur bis Schulterhöhe. |
| `shoulderpress` | Schulterpresse | Sitz so einstellen, dass die Griffe auf Schulterhöhe starten. |
| `skull` | French Press | Langsam Richtung Stirn absenken, Ellbogen zeigen nach oben. Schwer nur mit Partner. |
| `ohext` | Trizepsdrücken über Kopf | Ellbogen zeigen nach vorn, Bauch fest, kein Hohlkreuz. |
| `cgbench` | Enges Bankdrücken | Griff schulterbreit, nicht enger. Schwer nur mit Sicherungsstangen. |
| `kickback` | Trizeps-Kickbacks | Oberarm parallel zum Boden halten, nur der Unterarm bewegt sich. |
| `ropepush` | Trizepsdrücken mit Seil | Ellbogen am Körper, unten die Seilenden auseinanderziehen. |
| `benchdips` | Bankdips | Nur bis die Oberarme waagerecht sind, Hüfte nah an der Bank. Zwickt die Schulter: weglassen. |
| `bbrow` | Langhantelrudern | Oberkörper etwa 45°, Rücken gerade. Lieber leichter als mit Schwung. |
| `dbrow` | Einarmiges Kurzhantelrudern | Freie Hand abstützen, Rücken gerade, Ellbogen zur Hüfte ziehen. |
| `tbar` | T-Bar-Rudern | Brust raus, Rücken gerade, Gewicht nah am Körper. |
| `chinup` | Klimmzüge Untergriff | Untergriff schulterbreit, ohne Schwung bis das Kinn über der Stange ist. |
| `hyperext` | Rückenstrecker | Nur hochkommen, bis der Körper gerade ist, nicht überstrecken. |
| `straightarm` | Überzüge am Kabel | Arme fast gestreckt, Bewegung aus dem breiten Rücken, Rumpf ruhig. |
| `machrow` | Rudermaschine | Brust bleibt am Polster, Schulterblätter zuerst zurück. |
| `closelat` | Latzug eng | Zur Brust ziehen, nicht mit dem Oberkörper zurückschwingen. |
| `sumodl` | Sumo-Kreuzheben | Knie zeigen in Richtung Zehen, Rücken gerade. Technik vor Gewicht. |
| `bbcurl` | Langhantel-Curls | Ellbogen am Körper, kein Schwung aus dem Rücken. |
| `ezcurl` | SZ-Curls | Der SZ-Griff schont die Handgelenke. Ellbogen bleiben am Körper. |
| `preacher` | Scott-Curls | Unten nicht ganz durchstrecken und das Gewicht nicht fallen lassen. |
| `cablecurl` | Kabel-Curls | Ellbogen ruhig halten, oben kurz anspannen. |
| `concentration` | Konzentrationscurls | Ellbogen innen am Oberschenkel abstützen, langsam ablassen. |
| `inclinecurl` | Schrägbank-Curls | Rücken an der Lehne, Arme hängen gerade nach unten, langsam ablassen. |
| `frontsquat` | Frontkniebeuge | Ellbogen hoch, Oberkörper aufrecht. Schwer nur mit Sicherungsstangen. |
| `split` | Bulgarian Split Squats | Hinterer Fuß auf der Bank, vorderes Knie über dem Fuß. Erst ohne Gewicht üben. |
| `lunge` | Ausfallschritte | Großer Schritt, Oberkörper aufrecht, hinteres Knie Richtung Boden. |
| `hipthrust` | Hip Thrust | Polster um die Stange, Schulterblätter auf der Bank, oben kein Hohlkreuz. |
| `goblet` | Goblet Squat | Hantel an der Brust, Ellbogen zwischen die Knie, Fersen bleiben unten. |
| `hack` | Hackenschmidt | Füße mittig auf der Platte, Rücken bleibt am Polster. |
| `adductor` | Adduktoren (Maschine) | Startposition nur so weit öffnen, wie es angenehm ist. |
| `abductor` | Abduktoren (Maschine) | Leicht nach vorn lehnen betont den Po. Langsam zurück. |
| `seatedcalf` | Wadenheben sitzend | Polster fest auf den Oberschenkeln, unten kurz dehnen. |
| `crunch` | Crunches | Nicht am Kopf ziehen, Kinn locker, nur die Schulterblätter abheben. |
| `legraise` | Beinheben hängend | Ohne Schwung, Becken einrollen. Zu schwer: Knie anwinkeln. |
| `cablecrunch` | Kabel-Crunches | Bewegung aus dem Bauch, nicht mit der Hüfte ziehen. |
| `abwheel` | Ab Roller | Nur so weit rollen, wie der Rücken gerade bleibt. Erst vom Knie üben. |
| `russian` | Russian Twists | Rücken gerade, Drehung aus dem Oberkörper, langsam statt schnell. |
| `dbfly` | Kurzhantel-Flys | Ellbogen leicht gebeugt, nicht zu tief absenken. |
| `pullover` | Kurzhantel-Pullover | Hüfte tief, Arme leicht gebeugt, nur so weit nach hinten wie angenehm. |
| `stepup` | Step-ups | Ganzer Fuß auf die Stufe, aus dem vorderen Bein hochdrücken. Erst ohne Gewicht. |
| `smithsquat` | Kniebeuge Multipresse | Füße leicht vor die Stange, Sicherungshaken auf deine Tiefe einstellen. |
| `revcurl` | Reverse Curls | Leichtes Gewicht, Handgelenke gerade halten. |
| `glutekick` | Glute Kickbacks am Kabel | Rumpf fest, Bewegung aus der Hüfte, kein Hohlkreuz. |
| `pecdeckrear` | Reverse Butterfly | Leichtes Gewicht, Arme leicht gebeugt, Schulterblätter zusammen. |

---

## Geräte-Kategorien

Genau diese 12 Codes; jede Übung hat **ein** Hauptgerät, ein Workout listet alle nötigen Geräte.

| Code | Gerät | Hinweis |
|---|---|---|
| `bb` | Langhantel | inkl. Rack/Ständer und SZ-Stange |
| `db` | Kurzhantel | |
| `kb` | Kettlebell | eigene KB-Übungen (`kbgoblet`, `kbrow` …), damit „nur Kettlebell“ sauber filtert |
| `cable` | Kabel | |
| `machine` | Maschine | |
| `bar` | Klimmzugstange/Barren | |
| `bench` | Hantelbank | wird als Zusatzgerät mitgezählt, wo eine Übung liegend/sitzend auf der Bank läuft |
| `medball` | Medizinball | inkl. Slamball |
| `box` | Box | |
| `cardio` | Cardio-Gerät | Rudergerät, Ski-Ergometer, Bike |
| `sled` | Schlitten | nur Hybrid Race Pro |
| `bw` | nur Körpergewicht | |

**Umsetzen an bestehenden Übungen (Gerät neu zuordnen):**

| Übung | bisher | neu | Grund |
|---|---|---|---|
| `pullup`, `chinup`, `dips`, `legraise` | `bw` | `bar` | Sonst sieht jemand ohne Stange Klimmzüge im Filter „nur Körpergewicht“. |
| `benchdips` | `bw` | `bench` | Braucht Bank (oder Stuhl). |
| `abwheel` | `bw` | `bw` (bleibt) | Kleingerät ohne eigene Kategorie; zusätzlich umbenennen, siehe Marken-Check. |

**Bank als Zusatzgerät** wird automatisch mitgezählt bei: `bench`, `incline`, `inclinebb`, `decline`, `dbbench`, `skull`, `cgbench`, `dbfly`, `pullover`, `inclinecurl`, `concentration`, `hipthrust`, `split`, `stepup` sowie neu `chestrow`. Nicht bei `dbrow` und `dbpress` (gehen auch am Stuhl bzw. stehend).

**Grenzfälle**: Seilspringen ist `bw`, weil es ohne Seil genauso funktioniert (Hinweis im Info-i). Nordic Curl ist `bw` (Füße unter Latzug-Polster oder Partner). Wand-/Stuhl-Übungen (60+, Liegestütze Füße erhöht) sind `bw`.

---

## Kritische Prüfung (Fassung 2)

### 1. Namen

- **A/B abgeschafft.** „Maschinen Basics A/B“ zusammengelegt zu **einem** Maschinen Basics: Einsteiger profitieren davon, 6–8 Wochen denselben Ablauf zu wiederholen (Technik festigt sich, Fortschritt ist sichtbar). Die Abwechslung kommt danach mit Maschinen Classic oder Freihantel Basics.
- **Kraft 5×5**: Statt A/B jetzt nach der Übung benannt, die den Tag unterscheidet: **Kraft 5×5 Bankdrücken** und **Kraft 5×5 Kreuzheben** (Kniebeuge steckt in beiden, steht im Untertitel).
- **Kraftdreikampf**: Mit 25–27 Zeichen zu lang. Jetzt **Powerlifting Kniebeuge** / **Powerlifting Kreuzheben** (so sagt man es im Studio).
- **Schultern 3D**: „3D“ war kryptisch. Jetzt **Shoulder Day Classic**, passend zu Push/Pull/Leg/Arm Day.
- **Express 20/30**: Die Zahl wirkte wie ein Code. Jetzt **Express Ganzkörper** / **Express Langhantel**; die Dauer zeigt die App ohnehin an.
- **Namenssystem**: [Thema] + Stufe; **Basics** = Einsteiger, **Classic** = Fortgeschritten, **Pro** = Profi, nur wenn ein Thema in mehreren Stufen existiert. Gruppen sortieren sich durch gleiche Präfixe (Ohne Geräte …, Kurzhantel …, Kettlebell …, 60+ …).
- **Längen**: Alle 41 Namen ≤ 24 Zeichen (längster: „Brust & Rücken Supersatz“ mit 24, „Powerlifting Kreuzheben“ mit 23).
- **Verwechslungsgefahr geprüft**: Kurzhantel Ganzkörper vs. Express Ganzkörper (andere Dauer, andere Übungen außer Rudern, Untertitel klar). Athletik Sprungkraft vs. Athletik Power (Sprünge mit Körpergewicht vs. Langhantel/Würfe). Rücken & Haltung vs. Ohne Geräte Pull (Studio vs. zuhause). Akzeptiert.

### 2. Marken-Check (alle Workout-, Übungs- und Gerätenamen)

| Begriff | Bewertung | Lösung |
|---|---|---|
| Hyrox | eingetragene Marke | **Hybrid Race** (Prep/Pro), Beschreibung „Fitness-Rennen“ |
| SkiErg, RowErg, BikeErg, Concept2 | Marken eines Herstellers | **Ski-Ergometer**, **Rudergerät**, Bike; Schlüssel `skimach` statt `skierg` |
| Assault Bike, Airdyne, Echo Bike | Marken | „Air Bike“ (derzeit nicht verwendet) |
| Prowler | Marke | **Schlitten** |
| TRX | Marke | „Schlingentrainer“ (nicht verwendet) |
| Bosu | Marke | „Balance-Halbkugel“ (nicht verwendet) |
| Theraband, Pezziball | Marken | „Widerstandsband“, „Gymnastikball“ (nicht verwendet) |
| Superman (Übung) | Marke einer Comicfigur | **Rückenheben in Bauchlage** (`floorext`) |
| Ab Roller (bestehende Übung `abwheel`) | ursprünglich Produktname | **umbenennen in „Bauchroller“ / EN „Ab wheel rollout“** |
| Hip Thrust | Übungsname generisch; „Hip Thruster“ ist als Gerät geschützt | nur „Hip Thrust“ verwenden |
| Pec Deck (EN für Butterfly) | historisch Herstellername | EN „Pec fly“ / „Rear delt fly“ verwenden, nicht „Pec Deck“ |
| Smith Machine / Multipresse | Gerätetyp, generisch | ok |
| Hackenschmidt, Arnold Press, Scott-Curls, Pallof Press, Turkish Get-up, Bulgarian Split Squats, Nordic Curl, Dragon Flag, Burpee | nach Personen/Orten benannte, allgemein gebräuchliche Übungsnamen | ok |
| Kettlebell, Slamball, Wall Balls, Toes-to-Bar, Muscle-up, Farmer's Walk, Back Widows, Calisthenics, Powerlifting, 5×5, Push/Pull/Leg Day | generisch | ok |
| CrossFit, WOD, Tabata, StrongLifts, Starting Strength, 5/3/1, BODYPUMP, Freeletics | Marken/Programmnamen | vermieden |

Vor Go-Live: finale Workout-Namen (v. a. „Hybrid Race“, „TRAIN“-Kombinationen) kurz im DPMA- und EUIPO-Register prüfen. Das ist keine Rechtsberatung.

### 3. Reihenfolge (jedes Workout geprüft)

Geprüft wurde die **Hauptgruppe** jeder Übung (erste Muskelgruppe). Ergebnis per Skript gegengeprüft: Nur die vier unten genannten Ausnahmen haben noch dieselbe Hauptgruppe direkt hintereinander.

| # | Workout | Ergebnis |
|---|---|---|
| 1 | Maschinen Basics | neu zusammengestellt: Beine, Brust, Beinrückseite, Rücken, Schultern, unterer Rücken |
| 2 | Maschinen Classic | passt |
| 3 | Freihantel Basics | passt |
| 4 | Po & Beine Basics | umgestellt: Glute Bridge und Abduktoren getrennt, Beinbeuger dazwischen |
| 5 | Rücken & Haltung | umgestellt: Latzug und Kabelrudern durch Pallof Press getrennt; Rückenstrecker und Bird Dog durch Face Pulls getrennt |
| 6, 7 | 60+ (beide) | neu, im Wechsel Beine, Oberkörper, Gleichgewicht |
| 8 | Push Day Classic | umgestellt: Brust, Schulter, Brust, Trizeps, Schulter, Trizeps (statt 2× Brust, 2× Schulter, 2× Trizeps am Stück) |
| 9 | Pull Day Classic | umgestellt: Rücken, hintere Schulter, Rücken, Bizeps, Rücken, Bizeps; Face Pulls dienen als aktive Pause zwischen schweren Zügen |
| 10 | Leg Day Classic | passt (Kniebeuge/RDL/Beinpresse/Beinbeuger wechseln vorne und hinten) |
| 11 | Leg Day Pro | umgestellt: Split Squats nicht mehr direkt nach Hackenschmidt |
| 12 | Oberkörper Classic | passt; Supersatz Kabel-Curls + Trizepsdrücken (Gegenspieler) |
| 13 | Oberkörper Pro | umgestellt: Klimmzüge und T-Bar getrennt, Schulterübungen verteilt; Supersatz French Press/Curls dafür aufgelöst |
| 14 | Kraft 5×5 Bankdrücken | passt |
| 15 | Kraft 5×5 Kreuzheben | umgestellt: Klimmzüge vor das Schulterdrücken, damit sie nicht direkt neben dem Kreuzheben (Rücken) stehen |
| 16 | Powerlifting Kniebeuge | umgestellt: Enges Bankdrücken nicht direkt nach Bankdrücken (Hauptgruppe verschieden, aber praktisch dieselbe Bewegung); Rudern dazwischen |
| 17 | Powerlifting Kreuzheben | passt |
| 18 | Arm Day Classic | **bewusste Spezialisierung**, strikt im Wechsel Trizeps/Bizeps; Kabel-Curls gestrichen, weil sonst zwei Bizeps-Übungen aufeinander folgten |
| 19 | Shoulder Day Classic | **Ausnahme (Spezialisierung)**: Fast alles ist Schulter. Abgemildert durch Wechsel vorne, hinten, seitlich, Shrugs (Nacken) in der Mitte, seitlich, hinten |
| 20 | Po & Beine Classic | umgestellt: Split Squats und Beinpresse durch Abduktoren getrennt |
| 21 | Brust & Rücken Supersatz | passt (Prinzip des Workouts) |
| 22, 23 | Express (beide) | passt |
| 24 | Kurzhantel Ganzkörper | passt |
| 25 | Kurzhantel Oberkörper | umgestellt: Schrägbank-Curls zwischen Schulterdrücken und Seitheben |
| 26 | Kurzhantel Unterkörper | passt |
| 27, 28 | Kettlebell (beide) | passt |
| 29 | Ohne Geräte Ganzkörper | passt |
| 30 | Ohne Geräte Push | umgestellt: Pike-Liegestütze zwischen die zwei Brust-Varianten |
| 31 | Ohne Geräte Pull | umgestellt: Rückenheben zwischen Y-Heben und Snow Angels |
| 32 | Ohne Geräte Beine | umgestellt: Kniebeuge, Glute Bridge, Ausfallschritte, Beinbeuger, seitliche Ausfallschritte, Waden |
| 33 | Core Basics | **Ausnahme (Core-Format)**: Ein reines Rumpf-Workout hat nur „Bauch“. Abgemildert: Wechsel zwischen Anti-Streckung (Dead Bug, Plank), Rücken (Bird Dog), Beugung (Reverse Crunch, Crunch) und Seite (Seitstütz) |
| 34 | Core Pro | **Ausnahme (Core-Format)**: wie Core Basics; schwere Hebelübungen (Toes-to-Bar, Ab Roller, Dragon Flag) wechseln mit Stabilisation (Pallof) und Kabel-Crunches |
| 35 | Calisthenics Basics | umgestellt: die drei Zugübungen durch Liegestütze und Ausfallschritte getrennt |
| 36 | Calisthenics Pro | umgestellt: Front Lever und Klimmzüge durch Dips getrennt |
| 37 | Athletik Sprungkraft | umgestellt: Box Jump und Weitsprung durch Seitsprünge getrennt; Kurzhantel-RDL vor die Split Squats |
| 38 | Athletik Power | umgestellt: Brustpass zwischen Umsetzen und Frontkniebeuge. Hauptgruppe des Hang Power Clean ist Po (Hüftstreckung), fachlich korrekt |
| 39 | Hybrid Race Prep | neu sortiert: Beine und Oberkörper/Hüfte wechseln (Rudern, Ski, Wall Balls, Farmer's Walk, Ausfallschritte, Swing, Burpee-Weitsprünge) |
| 40 | Hybrid Race Pro | **Ausnahme (Wettkampfformat)**: feste Rennreihenfolge, die Läufe dazwischen sind die Pause |
| 41 | Kampfsport-Kondition | umgestellt: Ball Slams und Sprawls durch Liegestütze getrennt |

### 4. Neu: Wiedereinstieg 60+

- **60+ Kraft & Balance** (Studio): Maschinen, weil sie die Bewegung führen und kein Gleichgewicht für das Gewicht nötig ist. Dazu die drei Alltagsfähigkeiten, die im Alter am meisten zählen: Aufstehen (vom Stuhl), Tragen (Farmer's Walk, leicht, 20 m) und Stand (Einbeinstand). Moderate Wiederholungen (10–15), keine Überkopf-Last mit freiem Gewicht, keine Sprünge, kein Boden-Wechsel.
- **60+ Alltagskraft** (zuhause): alles im Stehen oder Sitzen mit Stuhl und Wand, keine Übung am Boden (Aufstehen vom Boden ist für Einsteiger 60+ ein eigenes Risiko). Wand-Liegestütze statt Liegestütze, Wandengel für die Haltung, seitliches Beinheben für die Hüftstabilität (Sturzprophylaxe).
- Bewusst **ohne medizinische Aussagen**; Info-i bleiben praktisch („neben einer Wand stehen“). Ein allgemeiner Hinweis zu Vorerkrankungen gehört in die Nutzungsbedingungen, nicht in jede Übung (siehe Offene Fragen).

### 5. Übungstypen

- **time**: Unterarmstütz, Seitstütz, Einbeinstand, Seilspringen, Schattenboxen.
- **dist**: Rudergerät, Ski-Ergometer, Schlitten schieben, Schlitten ziehen, Farmer's Walk. Rudergerät und Ski-Ergometer auf Strecke, weil Rennen und Training in Metern geplant werden; ein reines Zeit-Intervall braucht derzeit kein Workout.
- Die Wiederholungs-Alternativen aus Fassung 1 sind gestrichen (z. B. Seitstütz-Hüftheben `sidehip` entfällt ganz).
- **Hybrid Race Pro**: In Fassung 1 „2 Runden halbe Distanz“. Die App arbeitet Übung für Übung ab und kennt keine Runden. Jetzt **1 Satz pro Station in voller Renndistanz**, Pause = 1 km laufen (300 s). Dauer realistisch 90 Min.
- **Hybrid Race Prep** braucht keinen Schlitten mehr (in vielen Studios nicht vorhanden); dafür Kettlebell Swing. So passt Prep in deutlich mehr Studios, Pro bleibt die Variante mit Schlitten.

### 6. Info-i

- Jede neue Übung und alle 76 bestehenden haben ein Info-i, DE + EN, je ≤ 140 Zeichen (Skript-geprüft; längster Text 100 Zeichen).
- Stil: praktisch, ein Bild im Kopf („Kissen unter den Kopf“), kein Belehren, keine Diagnosen. Wo ein Gerät Sicherheit gibt, steht es drin („Schwer nur mit Sicherungsstangen oder Partner.“).
- Workoutspezifische Angaben (z. B. „mit Zusatzgewicht“, „letzter Satz als Dropsatz“, „Supersatz“, „Pause = 1 km laufen“) stehen in der Markdown-Spalte „Hinweis“. Das JSON-Format hat dafür noch kein Feld (siehe Offene Fragen).

### 7. Was aus Fassung 1 weiter gilt

- Sicherheit: kein Langhantel-Kreuzheben für Einsteiger, keine Dips/Bankdips für Anfänger, kein Aufrechtes Rudern, technische Übungen (Hang Power Clean, Muscle-up, Handstand-Liegestütze, Dragon Flag, Snatch) nur Profi, Plyometrie erst ab Fortgeschritten und immer zuerst.
- Studio-Realismus: Supersätze nur an einer Station (Ausnahme Express Langhantel: Bank + Klimmzugstange nur, wenn die Stange am Rack hängt; im JSON jetzt ohne Supersatz).
- Volumen (Arbeitssätze): Einsteiger 14–16, Fortgeschritten 11–20 (Kondition bis 24 kurze Sätze), Profi 20–26; Ausnahme Hybrid Race Pro mit 8 sehr langen Sätzen.
- Bewusst nicht im Katalog: Reha, Schwangerschaft, reines Mobility-/Cardio-Training.

---

## Änderungsliste (Fassung 1 → Fassung 2, 40 → 41 Workouts)

**Umbenannt / zusammengelegt**

| alt | neu |
|---|---|
| Maschinen Basics A + Maschinen Basics B | Maschinen Basics (zusammengelegt) |
| Kraft 5×5 A | Kraft 5×5 Bankdrücken |
| Kraft 5×5 B | Kraft 5×5 Kreuzheben |
| Kraftdreikampf Beuge & Bank | Powerlifting Kniebeuge |
| Kraftdreikampf Kreuzheben | Powerlifting Kreuzheben |
| Schultern 3D | Shoulder Day Classic |
| Express 20 Ganzkörper | Express Ganzkörper |
| Express 30 Langhantel | Express Langhantel |

**Neu**: 60+ Kraft & Balance, 60+ Alltagskraft.

**Übungen**
- Umbenannt: Superman → Rückenheben in Bauchlage (`floorext`), Farmers Carry → Farmer's Walk, Schlüssel `skierg` → `skimach`.
- Neu: `kbgoblet`, `kbrow` (Kettlebell-Workouts brauchen eigene KB-Übungen, weil jede Übung genau ein Gerät hat), `sitstand`, `wallpush`, `wallangel`, `sideleg`, `balance` (60+).
- Entfallen: `sidehip` (war nur Wdh.-Alternative).
- Typen: 5 × `time`, 5 × `dist` (siehe oben); alle Wdh.-Alternativen gestrichen.
- Hauptgruppen korrigiert: Bird Dog → Unterer Rücken, Hang Power Clean → Po.
- `bwcalf` heißt jetzt „Wadenheben ohne Gerät“ (beid- oder einbeinig, Display „/S“ = einbeinig).
- Bestehende Übungen: Gerät neu zuordnen (`pullup`, `chinup`, `dips`, `legraise` → `bar`; `benchdips` → `bench`), `abwheel` umbenennen in „Bauchroller“; Info-i für alle 76.

**Workouts inhaltlich**
- Reihenfolge in 20 Workouts umgestellt, Maschinen Basics neu zusammengestellt (Tabelle oben).
- Arm Day Classic: 7 → 6 Übungen, strikt im Wechsel (Kabel-Curls raus), je 3 Sätze.
- Oberkörper Pro: Supersatz French Press/Curls aufgelöst (wegen Reihenfolge).
- Hybrid Race Prep: ohne Schlitten, mit Kettlebell Swing, Rudern/Ski auf Strecke.
- Hybrid Race Pro: 2 Runden halbe Distanz → 1 Satz pro Station in Renndistanz, 75 → 90 Min.
- Kettlebell Basics/Pro: KB-eigene Übungen statt Goblet/Rudern mit Kurzhantel-Schlüssel.
- Core Basics, Kampfsport-Kondition: Wdh.-Alternativen raus, echte Zeit-Übungen.

---

## Offene Fragen an Ben

1. **Hinweise pro Workout-Übung**: Das JSON-Format hat kein Feld für Angaben wie „mit Zusatzgewicht“, „letzter Satz als Dropsatz“, „Supersatz“ oder „Pause = 1 km laufen“ (79 Stellen, siehe Spalte „Hinweis“). Sollen wir ein optionales 6. Element im `ex`-Eintrag ergänzen (`{"de": …, "en": …}`)? Sonst gehen diese Angaben in der App verloren.
2. **Bestehende Übungen ändern**: Einverstanden, dass `pullup`, `chinup`, `dips`, `legraise` auf `bar` und `benchdips` auf `bench` wechseln und „Ab Roller“ in „Bauchroller“ umbenannt wird? Das betrifft nur Filter und Anzeige, nicht den Trainingsverlauf.
3. **Hybrid Race Pro**: Passt „1 Satz pro Station in voller Renndistanz“, oder soll die App später Runden (Zirkel) können? Dann wäre die Fassung mit 2 Runden halber Distanz wieder möglich.
4. **60+ und Vorerkrankungen**: Reicht ein allgemeiner Satz in den Nutzungsbedingungen, oder soll beim ersten Öffnen eines 60+-Workouts einmalig ein kurzer Hinweis erscheinen („Bei Vorerkrankungen vorher ärztlich abklären“)?
