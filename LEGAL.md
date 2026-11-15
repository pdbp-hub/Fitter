# TRAIN – Recht, Datenschutz & Sicherheit (Pflicht-Checkliste)

Diese Datei sammelt alles, worauf Claude bei Datenschutz, Rechtstexten und Sicherheit achten muss.
Sie wird vor **jeder** Veröffentlichung (Skill `publish-check`) und vor dem Cloud-Start durchgegangen.
Nichts geht live, bevor Claude diese Liste abgesegnet hat.

## 1. Grundsätze
- Keine Werbung, keine Tracker, keine Analyse-Tools, keine fremden Server (Schriften, Bibliotheken, CDNs). Jeder neue externe Abruf: **Ben vorher fragen** und bei der Freigabe ausdrücklich warnen.
- Datensparsamkeit: nur speichern, was die App braucht. Daten kompakt (Kurzcodes für Übungen, Sätze als [kg, Wdh., Sek.]).
- Im Frontend nur der öffentliche Supabase-Schlüssel (anon/publishable). Nie service_role, Secret Keys, SMTP-/Brevo-Schlüssel, GitHub-Token, Passwörter. `python3 tools/secret_scan.py --history` muss sauber sein.
- Der GitHub-Freigabe-Schlüssel liegt nur verschlüsselt im Gerät (`fitter.ghkey`), nie in App-Daten, Cloud, Chat oder Repo.

## 2. Rechtstexte (in der App, laufend pflegen)
- **Impressum** (`T.de.imprint`, `OWNER` in app.js): Name, ladungsfähige Anschrift, E-Mail. E-Mail später auf Firmen-Adresse umstellen.
- **Datenschutzerklärung** (`PRIV_DE` / `PRIV_EN`): muss immer stimmen mit dem, was die App tatsächlich tut. Pflichtinhalte:
  Verantwortlicher · Kurzüberblick · Hosting (GitHub, USA, DPF) · Speicherung auf dem Gerät (Liste der Daten, § 25 TDDDG) · Account & Cloud (Supabase, Frankfurt/EU, AVV, SCC) · Körper-/Trainingsdaten als mögliche Gesundheitsdaten (Art. 9, ausdrückliche Einwilligung) · Sichtbarkeit für andere Mitglieder (alle / nur Freunde / nie sichtbar) · E-Mail-Versand (Brevo, EU) · freiwillige pseudonymisierte Auswertung inkl. KI-Dienste (z. B. Anthropic, SCC, kein Training fremder Modelle) · Empfänger & Länder · Speicherdauer (Account bis Löschung, Backups max. 7 Tage + Lösch-Liste, Protokolle max. 30 Tage, inaktive Accounts nach 24 Monaten mit Vorwarnung) · keine automatisierte Entscheidung (Art. 22) · Kamera/Fotos/Gerätefunktionen · Datensicherheit (Art. 32) · Mindestalter 16 · Rechte (Art. 15–21, Widerruf, Beschwerde BayLDA) · keine Pflicht zur Angabe · Änderungen der Erklärung.
- **Nutzungsbedingungen & Haftung** (`TERMS`): Gesundheitshinweis, Haftungsbegrenzung, verbotene Nutzung, Löschung, Änderungen.
- Vor echten Testern: Texte final (kein Entwurf mehr) + juristische Prüfung empfehlen.

## 3. Einwilligungen
- Beim Account-Anlegen: Pflicht = Nutzungsbedingungen + Datenschutz (inkl. Einwilligung Körper-/Trainingsdaten).
- **Freiwillig und getrennt**: pseudonymisierte Auswertung (auch mit KI). Darf keine Bedingung für den Account sein (Art. 7 Abs. 4). Speichern, jederzeit in den Einstellungen widerrufbar.
- Mitteilungen nur nach Erlaubnis; nach Ablehnen erklären, wo man sie erlaubt.

## 4. Pflichten, bevor die Cloud live geht
- Account löschen löscht wirklich alles: Auth-Nutzer, alle Tabellen (ON DELETE CASCADE), Profilbilder, Freundschaften in beide Richtungen. Test: anlegen, Daten erzeugen, löschen, Admin-Abfrage = 0 Treffer.
- Backups: täglich, EU, max. 7 Tage, Wiederherstellung einmal getestet; Lösch-Liste wird nach jeder Wiederherstellung erneut angewendet.
- Passwort vergessen per E-Mail über eigenen SMTP-Versand (Brevo, EU, AVV); Link läuft ab; Antworten verraten nie, ob eine E-Mail existiert; Rate-Limits.
- Datenexport (Art. 20).
- AV-Verträge: Supabase, Brevo (ggf. Anthropic).
- Row Level Security auf jeder Tabelle; Freunde sehen nur Freigegebenes; E-Mail nie sichtbar.

## 5. Sicherheitsprüfung (immer)
- Vor jeder neuen Version: `python3 tools/publish_check.py` (Syntax, Schlüssel, fremde Server, Speicher, alle Tests).
- Sobald Supabase verbaut ist: vor **jeder** Freigabe Agent `security-auditor` komplett (RLS-Angriffe mit 2 Test-Accounts, anon-Zugriff, Speicher, Anmeldung, XSS, Datenschutz-Abgleich). Kritisch/hoch = keine Freigabe.
- Claude versucht aktiv, den eigenen Code zu „hacken“ (Datenlecks, fremde Daten, Schlüssel im Frontend) und meldet das Ergebnis ehrlich.
