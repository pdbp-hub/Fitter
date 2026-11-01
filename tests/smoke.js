// Klick-Test für die App (docs/): node tests/smoke.js
// Startet mit leerem Speicher, trainiert ein Workout durch, lädt neu und prüft, dass alles gespeichert bleibt.
// Jeder gefundene Bug bekommt hier einen eigenen Regressionstest (markiert mit "REGRESSION").
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', 'docs');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };

(async () => {
  // kleiner lokaler Webserver, damit auch Service Worker und Manifest wie auf GitHub Pages laufen
  const server = http.createServer((req, res) => {
    const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
    fs.readFile(f, (err, data) => { if (err) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); res.end(data); });
  }).listen(0);
  const URL = `http://localhost:${server.address().port}/`;

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  let failed = 0;
  const check = (name, ok) => { console.log((ok ? '  ✓ ' : '  ✗ ') + name); if (!ok) failed++; };
  const click = async sel => { await page.click(sel, { force: true }); await page.waitForTimeout(120); };
  const ev = fn => page.evaluate(fn);
  const settle = () => page.waitForTimeout(450); // Sheet-Animationen abwarten

  await page.goto(URL); await page.waitForTimeout(400);

  console.log('PWA');
  check('Manifest ist verlinkt und erreichbar', (await (await page.request.get(URL + 'manifest.webmanifest')).json()).display === 'standalone');
  check('Service Worker registriert', await ev(async () => !!(await navigator.serviceWorker.getRegistration())));
  check('Startet leer: 0 Points', await ev(() => document.querySelector('.ptsline b').textContent.trim() === '0'));

  console.log('Start');
  check('Startseite scrollt nicht (REGRESSION)', await ev(() => { const s = document.getElementById('v-start'); return s.scrollHeight <= s.clientHeight; }));
  check('Unsichtbares Overlay blockiert keine Klicks (REGRESSION)', await ev(() => { const r = document.getElementById('go').getBoundingClientRect(); return document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2).closest('#go') !== null; }));
  check('Begrüßung passt in eine Zeile (REGRESSION)', await ev(() => { const g = document.getElementById('greet'); return g.scrollWidth <= g.clientWidth + 1; }));

  console.log('Workout');
  await click('#go'); await click('.witem'); await settle();
  const before = await ev(() => [...document.querySelectorAll('#readylist .exname')].map(e => e.firstChild.textContent));
  const g = await page.locator('#readylist [data-grip]').first().boundingBox();
  await page.mouse.move(g.x + 20, g.y + 20); await page.mouse.down(); await page.mouse.move(g.x + 20, g.y + 90, { steps: 8 }); await page.mouse.up(); await page.waitForTimeout(150);
  const after = await ev(() => [...document.querySelectorAll('#readylist .exname')].map(e => e.firstChild.textContent));
  check('Ziehen ändert die Reihenfolge', before[0] !== after[0]);
  await click('#startbtn'); await click('#warmdone');
  check('Lange Übungsnamen werden nicht abgeschnitten (REGRESSION)', await ev(() => [...document.querySelectorAll('.exname')].every(e => e.scrollWidth <= e.clientWidth + 1)));
  await page.fill('#cukg', '62,5'); await page.press('#cukg', 'Enter');
  check('Gewicht mit Komma eintippbar', await ev(() => document.getElementById('cukg').value === '62,5'));
  const first = await ev(() => document.querySelector('.block.cur .exname').firstChild.textContent);
  const target = await ev(() => document.querySelectorAll('.block.cur .set').length);
  for (let i = 0; i < target * 2; i++) await click('#mainact');
  check('Nach letztem Satz automatisch nächste Übung', first !== await ev(() => document.querySelector('.block.cur .exname').firstChild.textContent));
  await click('[data-tog="0"]'); await click('[data-addset="0"]'); await click('[data-goto="0"]');
  check('Nachträglicher Satz in früherer Übung ist startbar (REGRESSION)', first === await ev(() => document.querySelector('.block.cur .exname').firstChild.textContent) && /5/.test(await ev(() => document.getElementById('mainact').textContent)));
  await click('#mainact');
  await click('#resetbtn');
  check('Reset fragt nach', await ev(() => !document.getElementById('overlay').hidden));
  await click('[data-db="1"]');
  await click('#mainact');

  console.log('Speichern');
  await page.reload(); await page.waitForTimeout(500);
  check('Laufendes Workout überlebt Neuladen', await ev(() => !document.getElementById('wsheet').classList.contains('down') && !!document.querySelector('.block.cur')));
  check('Eingetragene Sätze bleiben erhalten', await ev(() => document.querySelectorAll('.block .set[data-edit]').length >= 1 || document.querySelector('.stat').textContent.startsWith('5')));

  await click('#endbtn');
  check('Abbrechen-Dialog: Hauptbutton ist „Weiter trainieren“', await ev(() => document.querySelector('[data-db="0"]').classList.contains('mainbtn')));
  await click('[data-db="1"]');
  check('Review erscheint', await ev(() => !!document.querySelector('.slogan')));
  check('Review-Kennzahlen haben nur 2 Zeilen', await ev(() => [...document.querySelectorAll('.tiles3 > div')].every(d => d.children.length === 2)));
  if (await page.$('[data-rvtog]')) await click('[data-rvtog]');
  await click('#donebtn'); await settle();
  check('„Fertig“ im Review schließt das Workout (REGRESSION)', await ev(() => document.getElementById('wsheet').classList.contains('down')));
  await page.reload(); await page.waitForTimeout(500);
  check('Training ist nach Neuladen im Verlauf', await ev(() => JSON.parse(localStorage.getItem('fitter.v1')).history.length === 1));
  check('Points werden gezählt', await ev(() => document.querySelector('.ptsline b').textContent.trim() !== '0'));
  check('„Training fortsetzen“ bleibt nach Neuladen', await ev(() => !!document.getElementById('resume')));

  console.log('Fortschritt');
  await click('[data-tab=progress]');
  check('Heute ist als Trainingstag markiert', await ev(() => document.querySelector('[data-day="0"]').classList.contains('on')));
  await click('[data-day="0"]');
  check('Tag auswählen zeigt Tageskarte', await ev(() => document.getElementById('daycard').innerHTML.length > 0));
  await click('[data-day="0"]');
  check('Tag nochmal antippen hebt Auswahl auf (REGRESSION)', await ev(() => document.getElementById('daycard').innerHTML === ''));
  await click('#exsel'); await settle(); await click('[data-sel]');
  check('Übung mit Daten zeigt 3 Charts', await ev(() => document.querySelectorAll('.chartbox').length === 3));
  await click('[data-info="info1rm"]');
  check('Info-i öffnet schwebendes Fenster', await ev(() => { const p = document.getElementById('popover'); return p && !p.hidden; }));
  await click('#popover .x');
  check('Info-Fenster schließt mit ✕', await ev(() => document.getElementById('popover').hidden));

  console.log('Einstellungen');
  await click('[data-tab=settings]');
  await page.fill('#pname', 'Ben Test'); await page.press('#pname', 'Enter'); await page.waitForTimeout(100);
  check('Profil zeigt Initialen', await ev(() => document.querySelector('.avatar').textContent === 'BT'));
  await click('[data-pulse=beat]'); await click('#l-en');
  await page.reload(); await page.waitForTimeout(400);
  check('Einstellungen bleiben nach Neuladen (Sprache, Puls)', await ev(() => document.getElementById('app').classList.contains('pm-beat') && document.querySelector('.navbtn span').textContent === 'Progress'));
  await click('[data-tab=settings]'); await click('#l-de');

  console.log('Workouts verwalten');
  await click('[data-tab=start]'); await click('#go'); await click('#add'); await settle();
  await page.fill('#o-name', 'Arm'); await page.locator('#o-list [data-pk]').first().click({ force: true }); await page.waitForTimeout(150);
  await click('#o-back');
  check('Zurück fragt vor dem Verwerfen', await ev(() => !document.getElementById('overlay').hidden));
  await click('[data-db="0"]'); await click('#o-save'); await settle();
  check('Workout wird gespeichert', await ev(() => document.querySelector('.witem .wname').textContent === 'Arm'));
  await click('#editmode'); await click('.witem'); await settle();
  await click('#o-del'); await click('[data-db="1"]'); await settle();
  check('Workout lässt sich löschen', await ev(() => ![...document.querySelectorAll('.wname')].some(e => e.textContent === 'Arm')));

  check('Keine JavaScript-Fehler', errors.length === 0);
  if (errors.length) console.log(errors.join('\n'));
  await browser.close(); server.close();
  console.log(failed ? `\n${failed} Test(s) fehlgeschlagen` : '\nAlle Tests bestanden');
  process.exit(failed ? 1 : 0);
})();
