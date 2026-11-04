# Übergabe für den nächsten Chat (Stand 2026-11-04)

**Zuerst lesen:** `CLAUDE.md` (Arbeitsweise, Regeln), dann `TODO.md` (offene Punkte), dann diese Datei.

## Projektstand in einem Satz
Gym-Tracker-PWA „TRAIN“ (Arbeitstitel, Ben sucht noch einen Namen), schwarz-weiß, Zehneck als Markenzeichen. Live v0.1.1 läuft für Ben, Dev v0.9.0 enthält alle neuen Features und wartet auf „freigeben“.

## Links & Ablauf
- Live: https://pdbp-hub.github.io/Fitter/ (`docs/`, weißes Icon) · Dev: https://pdbp-hub.github.io/Fitter/dev/ (`docs/dev/`, gelbes Icon, Testdaten)
- Branch: `claude/fitness-tracking-app-setup-ix8ivv` (GitHub Pages veröffentlicht `/docs` dieses Branches)
- Neue Features **nur in `docs/dev/`**. Live nur nach Bens „freigeben“: `python3 tools/release.py` (kopiert app.js, style.css, vendor/, stellt Live-Schriften auf lokal um, zählt Cache hoch) → Tests → commit → push.
- Tests: `node tests/smoke.js dev` (Dev komplett, ~130 Prüfungen) und `node tests/smoke.js` (Live + Dev-Grundcheck). Dauer je ~90 s → mit `timeout 190` laufen lassen. Testmodus über `?test` (kein Intro/Onboarding) bzw. `?noseed&test` (Dev ohne Testdaten).

## Code-Landkarte (`docs/dev/app.js`, eine Datei, Vanilla JS)
- Daten: `EX` (Übungen, +`MORE_EX`), `S` (Einstellungen), `workouts`, `HISTORY`, `save()` → localStorage `fitter.dev.v1` / live `fitter.v1`.
- Texte: `T.de`/`T.en` + mehrere `Object.assign(T.de, {...})`-Blöcke vor `const t =` (spätere gewinnen). Regel: keine „ – “, keine dünnen „→“.
- Start: `renderStart`, Intros `playIntro` (1), `playIntroType` (2), `playIntroTear` (3), `playIntroVortex` (4), Auswahl `playIntroSel`.
- Workout: `prepareWorkout`, `renderW`, `renderHead`, `blockHTML`, `bindW`, Plan pro Satz `ensurePlan/applyPlan`, Löschen `removeExercise/removePlannedSet` mit „nur heute“ vs. dauerhaft (`tplSet/tplAdd/tplRemove`), Wischen `swipeRows`, Mini-Leiste `minimize/openW` (Morph, `morphing`-Sperre).
- Review: `reviewCore`, `exBlock`, `setChart/drawSetChart` (Dropdown `msel`), Celebration `celebrate`.
- Profile/Freunde: `myProfile`, `DEMO_FRIENDS` (Beispieldaten), `renderFriends`, `openProfile/profileHTML` (O.mode 'profile'), `findHTML` (O.mode 'find'), Einstellungen S.username/S.pbEx/S.vis.
- Fortschritt: `renderProgress`, Kalender `dayTile/calHTML/dayCard`, Charts `renderCharts/drawChart`, Prognose `forecast`, Freunde-Vorschau `renderFriends` (Umschalter `progTab`).
- Points v2: `sessionPoints/ptsFor/totalPts` (Konstanten `PTS`), Level `LEVELS`, `levelOf`, `levelIcon`, Seite `levelsHTML` (osheet mode 'levels').
- Einstellungen: `renderSettings` mit `setPage` (profile, display, progress, logic, data, share, imprint, privacy), Dev-Werkzeuge (`devOpen`), Teilen-QR (`vendor/qrcode.js`).
- Onboarding: `ONBOARDING` + `onbVisual` (CSS-Mockups `.om-*` in style.css), `showOnboarding`.
- Navigation: Tabs `[data-tab]` mit `tabMem`/`scrollMem` (Unterseite merken), `show(view)`, `goBack()` + Rand-Wischen (Touch-Events).
- Dev-Werkzeuge: Onboarding, Intro, Celebration, Charts-Test (`chartTestHTML`, O.mode charttest). Intro-Vorschau: `previewIntro()` + `outro()`. Zurück-Wischen: `backTarget()` + Touch-Handler (echter Seiteninhalt wird in eine Kopie verschoben, dahinter rendert schon die vorige Seite). Level-Kopf: `bindLadder()` (fließend per Scroll). Profil: Einstellungen-Kachel `#sprof` → `openProfile(myProfile())`, Bearbeiten = setPage 'profile', Persönliche Daten = setPage 'personal', Benutzername-Platzhalter `userName()` = @test.
- Sheets: `#wsheet` (Workout), `#osheet` (`O.mode`: create, add, picker, review, levels). Dialoge `dialog()`, Info `showInfo()` (mittig).

## Cloud-Modus – Briefing / Empfehlung (für die nächste Session)
- **Plattform:** Supabase (Free Tier), **Region EU (Frankfurt)**. Postgres + fertige Anmeldung + Row Level Security (jeder sieht nur eigene Daten; Freunde nur freigegebene Infos).
- **Zwei Projekte** passend zu Dev/Live: `fitter-dev`, `fitter-live` (Free Tier erlaubt 2).
- **Offline-first bleibt:** localStorage bleibt Zwischenspeicher, Abgleich bei Netz → im Gym ohne Empfang geht nichts verloren.
- **Datenmodell (Vorschlag):** `profiles` (Name, Alter, Körpergewicht, Level, Sichtbarkeit), `workouts` (Vorlagen), `sessions` (Trainings inkl. Sätze als JSON), `custom_exercises`, `follows` (wer folgt wem).
- **Ablauf:** (1) Ben legt Supabase-Account + 2 Projekte an (Claude führt durch, ~5 min), gibt pro Projekt Projekt-URL + „anon key“ (öffentlich, durch RLS geschützt). (2) Claude baut in Dev: Login-Screen, Abgleich, **Übernahme der bisherigen lokalen Daten** beim ersten Login. (3) Freunde: folgen, Level/Rekorde sehen, Sichtbarkeits-Einstellung. (4) Datenschutzerklärung anpassen + Auftragsverarbeitungsvertrag (DPA) mit Supabase, dann erst teilen.
- **Offene Entscheidung Ben – Anmeldemethode:** E-Mail-Link ohne Passwort (Empfehlung, einfachste) · E-Mail + Passwort · Apple/Google (bequemer, Apple braucht kostenpflichtiges Entwicklerkonto).
- Bibliothek `supabase-js` lokal in `vendor/` ablegen (Regel: nichts von fremden Servern nachladen).
