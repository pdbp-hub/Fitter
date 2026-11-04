// Klick-Test für die App: node tests/smoke.js  (testet die Live-Version in docs/ und die Dev-Version in docs/dev/)
// Startet mit leerem Speicher, trainiert ein Workout durch, lädt neu und prüft, dass alles gespeichert bleibt.
// Jeder gefundene Bug bekommt hier einen eigenen Regressionstest (markiert mit "REGRESSION").
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', 'docs');
const TARGET = process.argv[2] === 'dev' ? 'dev/' : '';          // node tests/smoke.js dev → kompletter Durchlauf in der Dev-Version
const KEY = TARGET ? 'fitter.dev.v1' : 'fitter.v1';
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
  const click = async sel => { await page.evaluate(q => { const el = document.querySelector(q); if (el && el.closest('.screen')) el.scrollIntoView({ block: 'center' }); }, sel).catch(() => {}); await page.click(sel, { force: true }); await page.waitForTimeout(120); };
  const ev = fn => page.evaluate(fn);
  const settle = () => page.waitForTimeout(450); // Sheet-Animationen abwarten

  await page.goto(URL + TARGET + (TARGET ? '?noseed&test' : '?test')); await page.waitForTimeout(400);

  console.log('PWA');
  check('Manifest ist verlinkt und erreichbar', (await (await page.request.get(URL + TARGET + 'manifest.webmanifest')).json()).display === 'standalone');
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
  check('Hauptknopf ist nicht verdeckt (REGRESSION)', await ev(() => { const m = document.getElementById('mainact'), r = m.getBoundingClientRect(); return m.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)); }));
  check('Lange Übungsnamen werden nicht abgeschnitten (REGRESSION)', await ev(() => [...document.querySelectorAll('.exname')].every(e => e.scrollWidth <= e.clientWidth + 1)));
  await page.fill('#cukg', '62,5'); await page.press('#cukg', 'Enter');
  check('Gewicht mit Komma eintippbar', await ev(() => document.getElementById('cukg').value === '62,5'));
  const first = await ev(() => document.querySelector('.block.cur .exname').firstChild.textContent);
  const target = await ev(() => document.querySelectorAll('.block.cur .set').length);
  for (let i = 0; i < target * 2; i++) await click('#mainact');
  check('Nach letztem Satz automatisch nächste Übung', first !== await ev(() => document.querySelector('.block.cur .exname').firstChild.textContent));
  const scrolled = () => page.waitForTimeout(450); // automatisches Scrollen zur aktuellen Übung abwarten
  await scrolled(); await click('[data-tog="0"]'); await scrolled(); await click('[data-addset="0"]'); await scrolled(); await click('[data-goto="0"]'); await scrolled();
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
  check('Training ist nach Neuladen im Verlauf', await page.evaluate(k => JSON.parse(localStorage.getItem(k)).history.length === 1, KEY));
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
  // Unterseiten gibt es (noch) nur in Dev – sp() öffnet sie nur, wenn vorhanden
  const sp = async p => { if (await page.$(`[data-sp="${p}"]`)) await click(`[data-sp="${p}"]`); };
  const back = async () => { if (await page.$('#spback')) await click('#spback'); };
  await click('[data-tab=settings]');
  await sp('profile');
  await page.fill('#pname', 'Ben Test'); await page.press('#pname', 'Enter'); await page.waitForTimeout(100);
  check('Profil zeigt Initialen', await ev(() => document.querySelector('.avatar').textContent === 'BT'));
  await back(); await sp(await page.$('[data-sp="train"]') ? 'train' : 'display'); await click('[data-pulse=beat]');
  await back(); await sp('display'); await click('#l-en');
  await page.reload(); await page.waitForTimeout(400);
  check('Einstellungen bleiben nach Neuladen (Sprache, Puls)', await ev(() => document.getElementById('app').classList.contains('pm-beat') && document.querySelector('.navbtn span').textContent === 'Progress'));
  await click('[data-tab=settings]'); await sp('display'); await click('#l-de'); await back();
  if (TARGET) {
    check('Einstellungen in Unterseiten gegliedert', await ev(() => document.querySelectorAll('[data-sp]').length === 7));
    await sp('display');
    check('8 Puls- und 12 Lade-Animationen', await ev(() => document.querySelectorAll('[data-pulse]').length === 8 && document.querySelectorAll('[data-anim]').length === 12));
    await back(); await sp('logic');
    check('Berechnungslogik erklärt Points und Prognose', await ev(() => /Points/.test(document.getElementById('v-settings').textContent) && /Prognose|Forecast/.test(document.getElementById('v-settings').textContent)));
    await back(); await sp('progress'); await click('[data-fch="0"]');
    await click('[data-tab=progress]');
    check('Prognose ausschaltbar', await ev(() => !document.querySelector('#charts .legend')));
    await click('[data-tab=settings]'); await sp('progress'); await click('[data-fch="8"]'); await click('[data-fcl="4"]');
    await click('[data-tab=progress]');
    check('Prognose auf allen 3 Charts', await ev(() => document.querySelectorAll('#charts .legend').length === 3));
  }

  console.log('Workouts verwalten');
  await click('[data-tab=start]'); await click('#go'); await click('#add'); await settle();
  await page.fill('#o-name', 'Arm'); await page.locator('#o-list [data-pk]').first().click({ force: true }); await page.waitForTimeout(150);
  await click('#o-back');
  check('Zurück fragt vor dem Verwerfen', await ev(() => !document.getElementById('overlay').hidden));
  await click('[data-db="0"]'); await click('#o-save'); await settle();
  check('Workout wird gespeichert', await ev(() => document.querySelector('.witem .wname').textContent === 'Arm'));
  if (await page.$('#editmode')) { await click('#editmode'); await click('.witem'); await settle(); await click('#o-del'); await click('[data-db="1"]'); await settle(); }
  else { // Dev: Workout in der Liste nach links wischen
    const wb = await page.locator('#wlist .witem').first().boundingBox();
    await page.mouse.move(wb.x + wb.width * .5, wb.y + 30); await page.mouse.down(); await page.mouse.move(wb.x + wb.width * .5 - 140, wb.y + 32, { steps: 10 }); await page.mouse.up(); await page.waitForTimeout(300);
    const db2 = await page.locator('#wlist .swipe-del').boundingBox(); await page.mouse.click(db2.x + db2.width - 40, db2.y + db2.height / 2); await page.waitForTimeout(150);
    await click('[data-db="1"]'); await settle(); }
  check('Workout lässt sich löschen', await ev(() => ![...document.querySelectorAll('.wname')].some(e => e.textContent === 'Arm')));

  if (TARGET) {
    console.log('Neu in v0.3');
    await click('[data-tab=start]');
    check('Startseite: 3 Kennzahlen inkl. Minuten', await ev(() => document.querySelectorAll('.weekstats > div').length === 3 && /Minuten|Minutes/.test(document.querySelector('.weekstats').textContent)));
    check('„Diese Woche“ und „Points“ gleich groß', await ev(() => getComputedStyle(document.querySelector('.weekhead')).fontSize === getComputedStyle(document.querySelector('.ptsline strong')).fontSize));
    check('„+X diese Woche“ und „vs. Vorwoche“ gleich groß', await ev(() => getComputedStyle(document.querySelector('.weekhead small')).fontSize === getComputedStyle(document.querySelector('.ptsline small')).fontSize));
    check('Startseite scrollt weiterhin nicht', await ev(() => { const s = document.getElementById('v-start'); return s.scrollHeight <= s.clientHeight; }));
    await click('#go'); await click('.witem'); await settle();
    const before = await ev(() => JSON.parse(localStorage.getItem('fitter.dev.v1')).workouts[0].ex[0][1]);
    await click('[data-ropen="0"]'); await click('[data-padd="0"]');
    check('Bereit-Screen: Satzzahl änderbar und im Workout gespeichert', await ev(() => JSON.parse(localStorage.getItem('fitter.dev.v1')).workouts[0].ex[0][1]) === before + 1);
    const nEx = await ev(() => document.querySelectorAll('#readylist .srow').length);
    await click('#raddex'); await settle(); await click('#o-list [data-pk]'); await settle();
    check('Bereit-Screen: Übung hinzufügbar', await ev(() => document.querySelectorAll('#readylist .srow').length) === nEx + 1);
    await click('#startbtn'); await click('#warmdone'); await click('#mainact');
    check('Reset-Knopf zeigt „Reset“ statt Zeit', await ev(() => /Reset/.test(document.getElementById('resetbtn').textContent) && !/\d\d:\d\d/.test(document.getElementById('resetbtn').textContent)));
    check('Hauptbutton heißt „Satz beenden“', await ev(() => /Satz beenden|End set/.test(document.getElementById('mainact').textContent)));
    for (let i = 0; i < 12; i++) { const a = await ev(() => document.getElementById('mainact').dataset.a); if (a === 'cool') break; if (a === 'next' || await ev(() => document.querySelectorAll('.block.done').length >= 2)) break; await click('#mainact'); }
    await page.waitForTimeout(500);
    check('Aktuelle Übung bleibt im Bild', await ev(() => { const b = document.querySelector('.block.cur').getBoundingClientRect(), w = document.getElementById('wbody').getBoundingClientRect(); return b.top >= w.top - 2 && b.top < w.bottom - 150; }));
    await click('#minbtn'); await page.waitForTimeout(600);
    check('Minimieren: Mini-Leiste erscheint, Sheet weg', await ev(() => !document.getElementById('mini').hidden && document.getElementById('wsheet').classList.contains('down') && getComputedStyle(document.getElementById('mini')).borderRadius !== '0px'));
    await click('#mini'); await page.waitForTimeout(600);
    check('Mini-Leiste öffnet Workout wieder', await ev(() => !document.getElementById('wsheet').classList.contains('down')));
    await click('#endbtn'); await click('[data-db="1"]');
    check('Review: Kennzahl-Auswahl im App-Design (kein natives Select)', await ev(() => !!document.querySelector('#wbody .msel') && !document.querySelector('#wbody select')));
    await click('#wbody .msel .mbtn'); await click('#wbody .msel [data-m="reps"]');
    check('Dropdown wechselt Kennzahl', await ev(() => /Wiederholungen|Reps/.test(document.querySelector('#wbody .mbtn').textContent)));
    const box = await page.locator('#wbody svg.chart').first().boundingBox();
    await page.mouse.move(box.x + box.width * .5, box.y + 40); await page.mouse.down(); await page.waitForTimeout(80);
    check('Review-Chart interaktiv (Wert beim Ziehen)', await ev(() => /Satz|Set/.test(document.querySelector('#wbody .legend .val').textContent)));
    await page.mouse.up();
    await click('#donebtn'); await settle();
    await click('[data-tab=progress]'); await click('[data-day="0"]'); await click('[data-dayrv]'); await settle();
    check('Kalender-Details öffnen Review-Seite mit allen Sätzen', await ev(() => !document.getElementById('osheet').classList.contains('down') && !!document.querySelector('#obody .slogan') && !!document.querySelector('#obody .cells')));
    await click('#o-back'); await settle();
    check('Überschriften im Fortschritt mit Icons', await ev(() => document.querySelectorAll('#v-progress h2.hic svg').length === 4));
    await click('[data-tab=settings]'); await sp('logic');
    check('Berechnungslogik: kein seitliches Scrollen (REGRESSION)', await ev(() => { const v = document.getElementById('v-settings'); return v.scrollWidth <= v.clientWidth + 1; }));
    await back(); await sp('display');
    check('Trend-Farben unter Darstellung mit 2 animierten Vorschauen', await ev(() => document.querySelectorAll('[data-trc] svg.tprev').length === 2));
    await click('[data-trc="1"]'); await click('[data-tab=progress]');
    check('Rot-Grün färbt die Charts', await ev(() => /--up|--down/.test(document.getElementById('charts').innerHTML)));
    await click('[data-tab=settings]'); await sp('display'); await click('[data-trc="0"]');
    check('Original schaltet zurück auf Schwarz-Weiß', await ev(() => document.querySelector('[data-trc="0"]').classList.contains('on')));
    await back(); await sp('progress');
    check('Fortschritt-Einstellungen: nur Prognose & Rückblick', await ev(() => !!document.querySelector('[data-fch]') && !!document.querySelector('[data-fcl]') && !document.querySelector('[data-trc]')));
    await back(); await sp('imprint');
    check('Impressum vorhanden', await ev(() => /§ 5 DDG/.test(document.getElementById('v-settings').textContent)));
    await back(); await sp('profile');
    check('Profil: Alter eintragbar', !!(await page.$('#age')));
    await back();
  }

  if (TARGET) {
    console.log('Neu in v0.4');
    const centered = sel => ev(new Function(`const el = document.querySelector('${sel}'); if (!el) return false; const r = el.getBoundingClientRect(); return Math.abs((r.top + r.bottom) / 2 - innerHeight / 2) < 90;`));
    await click('[data-tab=start]'); await click('#go'); await click('.witem'); await settle();
    await click('[data-ropen="0"]');
    const nPlan = await ev(() => document.querySelectorAll('.redit .pset').length);
    check('Bereit: alle geplanten Sätze einzeln sichtbar', nPlan >= 2);
    await page.fill('[data-pw="0:1"]', '77,5'); await page.press('[data-pw="0:1"]', 'Enter'); await page.waitForTimeout(100);
    check('Bereit: Gewicht pro Satz planbar', await ev(() => document.querySelector('[data-pw="0:1"]').value === '77,5'));
    await click('[data-psx="0:0"]');
    check('Satz-✕ fragt mittig nach', await centered('#overlay .dialog'));
    await click('[data-db="1"]');
    check('Satz gelöscht', await ev(() => document.querySelectorAll('.redit .pset').length) === nPlan - 1);
    const nRows = await ev(() => document.querySelectorAll('#readylist > .srow').length);
    await ev(() => document.querySelectorAll('#readylist > .srow')[1].scrollIntoView({ block: 'center' }));
    const rb = await page.locator('#readylist > .srow').nth(1).boundingBox();
    await page.mouse.move(rb.x + rb.width * .6, rb.y + 20); await page.mouse.down(); await page.mouse.move(rb.x + rb.width * .6 - 140, rb.y + 22, { steps: 10 }); await page.mouse.up(); await page.waitForTimeout(300);
    check('Wischen nach links zeigt rote Lösch-Fläche', await ev(() => !!document.querySelector('#readylist .swipe-del')));
    const db = await page.locator('#readylist .swipe-del').boundingBox(); await page.mouse.click(db.x + db.width - 40, db.y + db.height / 2); await page.waitForTimeout(150);
    await click('[data-db="1"]'); await page.waitForTimeout(200);
    check('Übung per Wischen gelöscht', await ev(() => document.querySelectorAll('#readylist > .srow').length) === nRows - 1);
    await click('#startbtn');
    check('Aufwärmen: ✕ oben zum Abbrechen', await ev(() => !!document.getElementById('endbtn')));
    await click('#endbtn'); check('Abbrechen fragt „Aus Versehen gestartet?“', await ev(() => /Versehen|accident/.test(document.getElementById('overlay').textContent)));
    await click('[data-db="0"]'); await click('#warmdone');
    check('Training: geplanter Satz übernimmt geplantes Gewicht', await ev(() => !!document.getElementById('cukg')));
    check('Training: kein unterer Beenden-Button mehr', await ev(() => !document.getElementById('endbtn2')));
    await click('#minbtn'); await page.waitForTimeout(650); await click('[data-tab=settings]'); await click('[data-tab=start]');
    check('TRAIN-Tab öffnet Train-Seite, nicht das Workout (REGRESSION)', await ev(() => !document.getElementById('v-start').hidden && document.getElementById('wsheet').classList.contains('down') && !document.getElementById('mini').hidden));
    await click('#mini'); await page.waitForTimeout(650);
    check('Training: geplante Sätze haben ✕', await ev(() => document.querySelectorAll('#blocks .set.planned .sx').length > 0));
    let morphOk = true;
    for (let k = 0; k < 10; k++) {
      await click('#minbtn'); await page.waitForTimeout(650);
      const a = await ev(() => !document.getElementById('mini').hidden && document.getElementById('wsheet').classList.contains('down') && getComputedStyle(document.getElementById('mini')).opacity === '1' && !document.getElementById('wsheet').classList.contains('morphing'));
      await click('#mini'); await page.waitForTimeout(650);
      const b = await ev(() => document.getElementById('mini').hidden && !document.getElementById('wsheet').classList.contains('down') && document.getElementById('wsheet').style.transform === '' && !document.getElementById('wsheet').classList.contains('morphing'));
      if (!a || !b) morphOk = false;
    }
    check('Mini-Leiste: 10× runter & hoch ohne Hänger', morphOk);
    await click('#mainact'); await click('#mainact');
    await click('#endbtn'); await click('[data-db="1"]'); await page.waitForTimeout(400);
    check('Celebration startet beim Review', await ev(() => !!document.getElementById('celeb')));
    check('Review-Prozent bricht nicht um', await ev(() => [...document.querySelectorAll('.tiles3 .dl')].every(e => getComputedStyle(e).whiteSpace === 'nowrap')));
    await click('#donebtn'); await settle();
    await click('[data-tab=progress]');
    check('„Ganzer Kalender“ mittig unter den Tagen', await ev(() => { const b = document.getElementById('calbtn'), s = document.getElementById('strip'); return b && s && b.getBoundingClientRect().top > s.getBoundingClientRect().bottom; }));
    await click('#exsel'); await settle(); await click('[data-sel]');
    check('Kein Info-i mehr in der Legende', await ev(() => !document.querySelector('#charts .legend .info')));
    const hh = await ev(() => document.querySelector('.chartbox').getBoundingClientRect().height);
    const cb = await page.locator('#ch-str').boundingBox();
    await page.mouse.move(cb.x + 50, cb.y + 50); await page.mouse.down(); await page.mouse.move(cb.x + cb.width - 20, cb.y + 50, { steps: 8 });
    check('Chart-Kopf springt beim Ziehen nicht (REGRESSION)', Math.abs(await ev(() => document.querySelector('.chartbox').getBoundingClientRect().height) - hh) < 1);
    await page.mouse.up();
    await click('[data-info="info1rm"]');
    check('Info-Fenster mittig', await centered('#popover .popover'));
    await click('#popover .x');
    await click('[data-tab=start]'); await click('#go'); await click('#add'); await settle();
    check('„+ Eigene Übung“ als breiter Button', await ev(() => document.getElementById('c-open').getBoundingClientRect().width > 300));
    check('Übungsdatenbank erweitert (≥ 60)', await ev(() => document.querySelectorAll('#o-list .pick').length >= 60));
    await click('#o-filter'); await page.waitForTimeout(350); await click('[data-fg="legs"]'); await click('#fs-apply'); await page.waitForTimeout(350);
    check('Filter nach Muskelgruppe', await ev(() => [...document.querySelectorAll('#o-list .pick small')].every(e => /Beine|Legs/.test(e.textContent))));
    await click('#o-sort'); await click('[data-sort="fav"]');
    check('Sortieren umschaltbar', await ev(() => /Favoriten|Favourites/.test(document.getElementById('o-sort').textContent)));
    for (const n of [0, 1, 2, 3]) await page.locator('#o-list [data-star]').nth(n).click({ force: true });
    await click('#o-back'); if (await page.$('#overlay:not([hidden])')) await click('[data-db="1"]'); await settle();
    await click('[data-tab=progress]');
    check('Mehr als 3 Favoriten, horizontal scrollbar', await ev(() => { const f = document.querySelector('.favs'); return f && f.children.length > 3 && f.scrollWidth > f.clientWidth; }));
    await click('[data-tab=settings]');
    check('Dev-Werkzeuge eingeklappt', await ev(() => !document.getElementById('dev-onb') && !!document.getElementById('devtoggle')));
    await click('#devtoggle');
    check('Dev-Werkzeuge aufklappbar', await ev(() => !!document.getElementById('dev-onb')));
    await click('#devtoggle');
    check('Einstellungen mit Icons', await ev(() => document.querySelectorAll('.sprow .sic').length >= 6));
    await sp('share');
    await page.waitForTimeout(300);
    check('Teilen: QR-Code wird erzeugt', await ev(() => !!document.querySelector('#qrbox svg')));
    check('Teilen: Link + Kopieren-Button', await ev(() => /pdbp-hub\.github\.io\/Fitter/.test(document.getElementById('sharelink').textContent) && !!document.getElementById('copylink')));
    await back();
    await sp('display');
    check('Intro-Auswahl (4 Intros + Aus)', await ev(() => document.querySelectorAll('[data-intro]').length === 5));
    check('Akzentfarben + Celebration unter Darstellung', await ev(() => document.querySelectorAll('[data-acc]').length === 2 && document.querySelectorAll('[data-celeb]').length === 9));
    await back(); await sp('data');
    check('Datenschutzerklärung unter Daten', !!(await page.$('[data-sp="privacy"]')));
    await back(); await sp('logic');
    check('Points v2 erklärt', await ev(() => /v2/.test(document.getElementById('v-settings').textContent)));
    await back();
    console.log('Neu in v0.6');
    check('Schriften lokal (kein Google)', await ev(() => ![...document.querySelectorAll('link')].some(l => /googleapis/.test(l.href))));
    await click('[data-tab=start]');
    await click('#ptsbtn'); await settle();
    check('Points antippen öffnet Level (15 Stufen)', await ev(() => document.querySelectorAll('#obody .lvl-row').length === 15));
    await click('#o-back'); await settle();
    await click('#go'); await click('.witem'); await settle();
    check('Bereit-Screen ohne ✎, mit „Name ändern“', await ev(() => !document.getElementById('editw') && !!document.getElementById('wrename')));
    await click('#wrename'); await page.fill('#wname', 'Push Power'); await page.press('#wname', 'Enter'); await page.waitForTimeout(150);
    check('Workout umbenennbar', await ev(() => document.getElementById('wtitle').textContent === 'Push Power' && JSON.parse(localStorage.getItem('fitter.dev.v1')).workouts.some(w => w.name === 'Push Power')));
    await ev(() => document.querySelectorAll('#readylist > .srow')[1].scrollIntoView({ block: 'center' }));
    const nTpl = await ev(() => JSON.parse(localStorage.getItem('fitter.dev.v1')).workouts.find(w => w.name === 'Push Power').ex.length);
    const r2 = await page.locator('#readylist > .srow').nth(1).boundingBox();
    await page.mouse.move(r2.x + r2.width * .6, r2.y + 20); await page.mouse.down(); await page.mouse.move(r2.x + r2.width * .6 - 140, r2.y + 22, { steps: 10 }); await page.mouse.up(); await page.waitForTimeout(300);
    check('Lösch-Text in der roten Fläche zentriert', await ev(() => { const b = document.querySelector('#readylist .swipe-del span'); return b && getComputedStyle(b).textAlign === 'center'; }));
    const d3 = await page.locator('#readylist .swipe-del').boundingBox(); await page.mouse.click(d3.x + d3.width - 40, d3.y + d3.height / 2); await page.waitForTimeout(150);
    check('Löschen fragt „Nur heute“ oder „Dauerhaft“', await ev(() => document.querySelectorAll('#overlay [data-db]').length === 3));
    await click('[data-db="1"]'); await page.waitForTimeout(200);
    check('„Nur heute“ lässt das gespeicherte Workout unverändert', await ev(() => JSON.parse(localStorage.getItem('fitter.dev.v1')).workouts.find(w => w.name === 'Push Power').ex.length) === nTpl);
    await click('#startbtn'); await click('#endbtn'); await click('[data-db="1"]'); await settle(); // Aufwärmen abbrechen → kein laufendes Workout
    await click('[data-tab=start]'); await click('#go'); await settle();
    check('Workout-Liste offen', await ev(() => !document.getElementById('v-select').hidden));
    await page.mouse.move(5, 300); await page.mouse.down(); await page.mouse.move(150, 305, { steps: 8 }); await page.mouse.up(); await page.waitForTimeout(200);
    check('Wischen vom linken Rand = zurück', await ev(() => !document.getElementById('v-start').hidden && document.getElementById('v-select').hidden));
    await click('#go'); await click('#add'); await settle();
    check('Sortieren ohne „Muskelgruppe“, feste Breite', await ev(() => !document.querySelector('[data-sort="group"]') && document.getElementById('o-sort').getBoundingClientRect().width >= 170));
    await click('#c-open');
    check('Eigene Übung: breiter „Übung hinzufügen“, „Doch nicht“, kein Autofill, keine Speichern-Leiste', await ev(() => document.getElementById('c-add').getBoundingClientRect().width > 300 && /Doch nicht|Never mind/.test(document.getElementById('c-cancel').textContent) && document.getElementById('c-name').getAttribute('autocomplete') === 'off' && !document.getElementById('o-save')));
    await click('#c-cancel'); await click('#o-back'); if (await page.$('#overlay:not([hidden])')) await click('[data-db="1"]'); await settle();
    await click('[data-tab=progress]');
    check('Heute markiert in der Tagesleiste', await ev(() => /Heute|Today/.test(document.querySelector('[data-day="0"] small').textContent)));
    await click('[data-ptab="friends"]');
    check('Freunde-Vorschlag im Fortschritt', await ev(() => document.querySelectorAll('.fr-row').length === 3 && !!document.getElementById('fr-invite')));
    check('Fortschritt-Kopf passt in die Breite (REGRESSION)', await ev(() => { const v = document.getElementById('v-progress'); return v.scrollWidth <= v.clientWidth + 1 && document.querySelector('#v-progress h1').getBoundingClientRect().left >= 0; }));
    await click('[data-ptab="me"]');
    await click('[data-tab=settings]'); await sp('display');
    check('Trend-Farben direkt unter der Überschrift', await ev(() => { const h = [...document.querySelectorAll('#v-settings b')].find(b => /Trend/.test(b.textContent)); const nx = h.parentElement.nextElementSibling; return nx && !!nx.querySelector('[data-trc]'); }));
    check('5 Intros mit eigenen Icons', await ev(() => document.querySelectorAll('[data-intro] svg').length === 5));
    check('Celebrations mit eigenen Icons', await ev(() => new Set([...document.querySelectorAll('[data-celeb] svg')].map(s => s.innerHTML)).size === 9));
    await click('[data-acc="1"]');
    check('Akzent-Vorschau „Neutral“ bleibt weiß (REGRESSION)', await ev(() => { const e = document.querySelector('[data-acc="0"] .dl.up'); return getComputedStyle(e).color === getComputedStyle(document.getElementById('app')).getPropertyValue('--fg').trim() || !/rgb\(53, 196, 106\)/.test(getComputedStyle(e).color); }));
    await click('[data-acc="0"]');
    await click('[data-tab=settings]');
    check('Tab-Tipp führt zur Einstellungen-Startseite zurück', await ev(() => document.querySelectorAll('[data-sp]').length >= 7));
    check('Keine langen Striche in Texten', await ev(() => !/ – /.test(document.body.innerText)));
    console.log('Intro & Onboarding');
    const fresh = await browser.newContext({ viewport: { width: 390, height: 844 } }); const fp = await fresh.newPage(); fp.on('pageerror', e => errors.push('[intro] ' + e.message));
    await fp.goto(URL + 'dev/?noseed'); await fp.waitForTimeout(400);
    check('Onboarding beim ersten Start', await fp.evaluate(() => !!document.getElementById('onb')));
    check('Onboarding zeigt App-Animationen statt Zehnecke', await fp.evaluate(async () => { const kinds = []; for (let i = 0; i < 7; i++) { kinds.push(!!document.querySelector('#onb .om-phone')); document.getElementById('onb-next').click(); await new Promise(r => setTimeout(r, 30)); if (!document.getElementById('onb')) break; } return kinds.every(Boolean); }));
    if (await fp.$('#onb-skip')) await fp.click('#onb-skip'); await fp.reload(); await fp.waitForTimeout(200);
    check('Intro-Animation beim Öffnen', await fp.evaluate(() => !!document.getElementById('intro')));
    await fp.waitForTimeout(2200);
    check('Intro endet im Start-Zehneck', await fp.evaluate(() => !document.getElementById('intro') && getComputedStyle(document.getElementById('go')).visibility === 'visible'));
    await fp.evaluate(() => { S.intro = 'type'; save(); }); await fp.reload(); await fp.waitForTimeout(300);
    check('Intro 2 (Schreibmaschine) startet weiß', await fp.evaluate(() => !!document.querySelector('#intro.intro2')));
    await fp.waitForTimeout(6000);
    check('Intro 2 endet im Start-Zehneck', await fp.evaluate(() => !document.getElementById('intro') && getComputedStyle(document.getElementById('go')).visibility === 'visible'));
    await fresh.close();
  }

  if (!TARGET) {
  console.log('Dev-Version');
  const dev = await ctx.newPage(); dev.on('pageerror', e => errors.push('[dev] ' + e.message));
  await dev.goto(URL + 'dev/?test'); await dev.waitForTimeout(500);
  check('Dev startet mit Testdaten', await dev.evaluate(() => JSON.parse(localStorage.getItem('fitter.dev.v1')).history.length >= 20));
  check('Dev-Daten getrennt von Live-Daten', await dev.evaluate(() => JSON.parse(localStorage.getItem('fitter.v1')).history.length === 1));
  check('Dev-Manifest heißt „Fitter Dev“', (await (await dev.request.get(URL + 'dev/manifest.webmanifest')).json()).name === 'Fitter Dev');
  await dev.click('[data-tab=progress]', { force: true }); await dev.waitForTimeout(200);
  check('Dev zeigt Charts mit Testdaten', await dev.evaluate(() => document.querySelectorAll('.chartbox').length === 3));
  await dev.close();
  }

  check('Keine JavaScript-Fehler', errors.length === 0);
  if (errors.length) console.log(errors.join('\n'));
  await browser.close(); server.close();
  console.log(failed ? `\n${failed} Test(s) fehlgeschlagen` : '\nAlle Tests bestanden');
  process.exit(failed ? 1 : 0);
})();
