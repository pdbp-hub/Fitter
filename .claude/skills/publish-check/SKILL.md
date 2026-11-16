---
name: publish-check
description: Pflicht-Prüfung vor JEDER neuen Dev-Version (Push von docs/dev) und vor jeder Freigabe auf Live. Prüft Datenschutz, Sicherheit (Schlüssel, Datenlecks) und ob durch das Update etwas kaputt gegangen ist. Immer ausführen, bevor Claude Ben eine neue Version meldet oder „freigeben“ umsetzt.
---

# Publish-Check (TRAIN)

Immer dieselben Schritte, in dieser Reihenfolge. Erst wenn alles grün ist, wird committet/gepusht bzw. freigegeben. Ein Fund wird behoben (mit Regressionstest), nicht weggeredet.

## 1. Automatischer Check
```
python3 tools/publish_check.py
```
Prüft: Syntax (Dev + Live), Schlüssel im Code und in der Git-Historie, fremde Server (Fonts, Tracker, CDNs), Gerätespeicher-Schlüssel, GitHub-Schlüssel nicht in App-Daten, Browser-Tests Dev komplett + Live/Dev-Grundcheck (inkl. „Keine JavaScript-Fehler“).

## 2. Diff-Durchsicht (von Hand, `git diff` seit der letzten Version)
- **Neue Daten?** Jedes neue gespeicherte Feld (lokal oder Cloud): steht es in der Datenschutzerklärung (`privacyHtml`)? Wird es beim Account-Löschen und bei „Alle Daten löschen“ mit entfernt? Ist es für Freunde nur sichtbar, wenn freigegeben?
- **Neue Ausgabe von Nutzertext?** Jede Stelle, die Name, Benutzername, Workout-/Übungsname, Freundesdaten o. Ä. per `innerHTML` einsetzt, nutzt `esc()`.
- **Neue Netzwerkaufrufe?** Nur eigene Server (GitHub Pages, eigenes Supabase-Projekt in der EU). Keine Drittanbieter ohne Eintrag in der Datenschutzerklärung und Bens Okay.
- **Schlüssel:** Im Frontend nur der öffentliche Supabase-Schlüssel (anon/publishable). Nie service_role, nie Secret Keys, nie SMTP-/Brevo-Schlüssel (die gehören nur in Supabase-Einstellungen/Edge-Function-Secrets).
- **Rechtstexte aktuell?** Datenschutzerklärung (`privacyHtml`) und Nutzungsbedingungen & Haftung (`TERMS`) passen zu dem, was die App jetzt tut (neue Daten, Funktionen, Dienstleister). Sonst anpassen.
- **Fremde Server?** Jeder neue externe Abruf: Ben vorher gefragt? Bei Freigabe ausdrücklich warnen.
- **Nichts verschwunden?** Nur das geändert, was Ben angefragt hat. Bestehende Features und Tests unverändert grün.

## 3. Cloud-Teil (sobald Supabase angebunden ist)
- Agent `security-auditor` komplett durchlaufen lassen (RLS mit 2 Test-Accounts, anon-Zugriff, Speicher, Anmeldung, XSS, Datenschutz-Abgleich). Kritische/hohe Funde = Stopp.
- **Account löschen** löscht wirklich: Auth-Nutzer, alle Tabellenzeilen (ON DELETE CASCADE), Profilbilder im Speicher, Freundschaften in beide Richtungen. Test: Account anlegen, Daten erzeugen, löschen, danach per Admin-Abfrage 0 Treffer. Backups laufen nach der in der Datenschutzerklärung genannten Frist aus.
- **Passwort vergessen** per E-Mail funktioniert (eigener SMTP-Versand, z. B. Brevo, EU, Auftragsverarbeitungsvertrag), Link läuft ab, Antwort verrät nicht, ob die E-Mail existiert, Rate-Limit aktiv.
- Datenschutzerklärung + Einwilligung decken alles ab, was tatsächlich passiert (Supabase, Brevo, GitHub Pages, Entwickler-/KI-Zugriff auf pseudonymisierte Daten).

## 4. Versionspflege
Bei spürbaren Neuerungen: `WHATSNEW`-Eintrag für die Version (kurz, DE + EN), sonst bewusst still.

`CACHE` in `docs/dev/sw.js` und `APP_VERSION` in `docs/dev/app.js` hochgezählt, `python3 tools/archive_versions.py` gelaufen, `TODO.md` aktuell, FAQ/Info-Texte/Onboarding passend.

## 5. Bericht an Ben (kurz)
Eine Zeile „Publish-Check: sauber“ oder die Liste der Funde mit Fix. Was nicht prüfbar war (z. B. nur auf echtem iPhone), ausdrücklich nennen. **Live/Cloud geht erst online, wenn Claude den Check abgesegnet hat.**
