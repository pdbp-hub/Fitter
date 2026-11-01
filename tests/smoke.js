// Klick-Test für den Entwurf: node tests/smoke.js
// Jeder gefundene Bug bekommt hier einen eigenen Regressionstest (markiert mit "REGRESSION").
const { chromium } = require('playwright');
const path = require('path');
const FILE = 'file://' + path.resolve(__dirname, '..', 'mockup', 'index.html');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  let failed = 0;
  const check = (name, ok) => { console.log((ok ? '  ✓ ' : '  ✗ ') + name); if (!ok) failed++; };
  const click = async sel => { await page.click(sel, { force: true }); await page.waitForTimeout(120); };
  const ev = fn => page.evaluate(fn);

  await page.goto(FILE); await page.waitForTimeout(300);

  console.log('Start');
  check('Startseite scrollt nicht (REGRESSION)', await ev(() => { const s = document.getElementById('v-start'); return s.scrollHeight <= s.clientHeight; }));
  check('Unsichtbares Overlay blockiert keine Klicks (REGRESSION)', await ev(() => { const r = document.getElementById('go').getBoundingClientRect(); return document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2).closest('#go') !== null; }));
  check('Begrüßung passt in eine Zeile (REGRESSION)', await ev(() => { const g = document.getElementById('greet'); return g.scrollWidth <= g.clientWidth + 1; }));

  console.log('Workout');
  await click('#go'); await click('.witem'); await page.waitForTimeout(450); // Sheet-Animation abwarten
  const before = await ev(() => [...document.querySelectorAll('#readylist .exname')].map(e => e.firstChild.textContent));
  const g = await page.locator('#readylist [data-grip]').first().boundingBox();
  await page.mouse.move(g.x + 20, g.y + 20); await page.mouse.down(); await page.mouse.move(g.x + 20, g.y + 90, { steps: 8 }); await page.mouse.up(); await page.waitForTimeout(150);
  const after = await ev(() => [...document.querySelectorAll('#readylist .exname')].map(e => e.firstChild.textContent));
  check('Ziehen ändert die Reihenfolge', before[0] !== after[0]);
  await click('#startbtn'); await click('#warmdone');
  check('Lange Übungsnamen werden nicht abgeschnitten (REGRESSION)', await ev(() => [...document.querySelectorAll('.exname')].every(e => e.scrollWidth <= e.clientWidth + 1)));
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
  await click('#endbtn');
  check('Abbrechen-Dialog: Hauptbutton ist „Weiter trainieren“', await ev(() => document.querySelector('[data-db="0"]').classList.contains('mainbtn')));
  await click('[data-db="1"]');
  check('Review erscheint', await ev(() => !!document.querySelector('.slogan')));
  if (await page.$('[data-rvtog]')) await click('[data-rvtog]');
  await click('#donebtn');
  check('„Fertig“ im Review schließt das Workout (REGRESSION)', await ev(() => document.getElementById('wsheet').classList.contains('down')));

  console.log('Fortschritt');
  await click('[data-tab=progress]');
  await click('[data-day="2"]');
  check('Tag auswählen zeigt Tageskarte', await ev(() => document.getElementById('daycard').innerHTML.length > 0));
  await click('[data-day="2"]');
  check('Tag nochmal antippen hebt Auswahl auf (REGRESSION)', await ev(() => document.getElementById('daycard').innerHTML === ''));
  await click('[data-info="info1rm"]');
  check('Info-i öffnet schwebendes Fenster', await ev(() => { const p = document.getElementById('popover'); return p && !p.hidden; }));
  await click('#popover .x');
  check('Info-Fenster schließt mit ✕', await ev(() => document.getElementById('popover').hidden));
  await click('#exsel'); await click('[data-sel]');
  check('Übungswahl zeigt 3 Charts', await ev(() => document.querySelectorAll('.chartbox').length === 3 || !!document.querySelector('#charts .empty')));

  console.log('Einstellungen');
  await click('[data-tab=settings]');
  await page.fill('#pname', 'Ben Test'); await page.press('#pname', 'Enter'); await page.waitForTimeout(100);
  check('Profil zeigt Initialen', await ev(() => document.querySelector('.avatar').textContent === 'BT'));
  await click('[data-pulse=beat]');
  check('Puls-Animation umschaltbar', await ev(() => document.getElementById('app').classList.contains('pm-beat')));
  await click('#trc'); await click('[data-tab=progress]');
  check('Trend-Farben färben Chart', await ev(() => /--up|--down/.test(document.getElementById('charts').innerHTML)));

  console.log('Workout anlegen');
  await click('[data-tab=start]'); await click('#go'); await click('#add'); await page.waitForTimeout(450);
  await page.fill('#o-name', 'Arm'); await page.locator('#o-list [data-pk]').first().click({ force: true }); await page.waitForTimeout(100);
  await page.waitForTimeout(150); await click('#o-back');
  check('Zurück fragt vor dem Verwerfen', await ev(() => !document.getElementById('overlay').hidden));
  await click('[data-db="0"]'); await click('#o-save'); await page.waitForTimeout(450);
  check('Workout wird gespeichert', await ev(() => document.querySelector('.witem .wname').textContent === 'Arm'));

  check('Keine JavaScript-Fehler', errors.length === 0);
  if (errors.length) console.log(errors.join('\n'));
  await browser.close();
  console.log(failed ? `\n${failed} Test(s) fehlgeschlagen` : '\nAlle Tests bestanden');
  process.exit(failed ? 1 : 0);
})();
