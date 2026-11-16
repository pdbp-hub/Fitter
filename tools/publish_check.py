"""Publish-Check: läuft vor JEDER neuen Dev-Version und vor jeder Freigabe (siehe Skill `publish-check`).
    python3 tools/publish_check.py          # alles (Syntax, Schlüssel, Datenschutz-Scan, Tests Dev + Live)
    python3 tools/publish_check.py --fast   # ohne die langen Browser-Tests
Bricht mit Exit-Code 1 ab, sobald etwas nicht stimmt."""
import pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
FAIL = []

def step(name, ok, detail=''):
    print(('  ✓ ' if ok else '  ✗ ') + name + (f'\n      {detail}' if detail and not ok else ''))
    if not ok: FAIL.append(name)

def run(cmd, timeout=600):
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=timeout)
    return r.returncode == 0, (r.stdout + r.stderr).strip()

print('1. Code läuft')
for f in ['docs/dev/app.js', 'docs/app.js', 'docs/dev/sw.js', 'docs/sw.js']:
    ok, out = run(['node', '--check', f]); step(f'Syntax {f}', ok, out[-300:])

print('2. Schlüssel')
ok, out = run([sys.executable, 'tools/secret_scan.py', '--history']); step('Keine geheimen Schlüssel (Code + Git-Historie)', ok, out)

print('3. Datenschutz')
ALLOWED = {'pdbp-hub.github.io', 'www.w3.org', 'api.github.com'}  # api.github.com: nur Dev-Werkzeuge mit Bens Schlüssel (Live schalten), nie für Nutzer. + später die eigene Supabase-Projekt-URL (EU)
for f in ['docs/dev/app.js', 'docs/dev/index.html', 'docs/app.js', 'docs/index.html', 'docs/dev/style.css', 'docs/style.css']:
    txt = (ROOT / f).read_text()
    hosts = sorted({h for h in re.findall(r'https?://([a-z0-9.-]+)', txt) if h not in ALLOWED and not h.endswith('.supabase.co')})
    step(f'Keine fremden Server in {f} (Fonts, Tracker, CDNs)', not hosts, 'Gefunden: ' + ', '.join(hosts))
app = (ROOT / 'docs/dev/app.js').read_text()
keys = sorted(set(re.findall(r"""localStorage\.(?:setItem|getItem)\(\s*['"]([^'"]+)""", app)))
step('Gerätespeicher nur mit bekannten Schlüsseln', all(re.match(r'fitter\.', k) for k in keys), 'Schlüssel: ' + ', '.join(keys))
step('GitHub-Schlüssel nie in den App-Daten', not re.search(r"S\.gh(?:key|Key)\s*=", app))

if '--fast' not in sys.argv:
    print('4. Nichts kaputt (Browser-Tests)')
    ok, out = run(['node', 'tests/smoke.js', 'dev'], 1800); step('Dev komplett', ok and 'Alle Tests bestanden' in out, '\n      '.join(l for l in out.split('\n') if '✗' in l)[:1500] or out[-600:])
    ok, out = run(['node', 'tests/smoke.js'], 1800); step('Live + Dev-Grundcheck', ok and 'Alle Tests bestanden' in out, '\n      '.join(l for l in out.split('\n') if '✗' in l)[:1500] or out[-600:])

print()
if FAIL:
    print(f'PUBLISH-CHECK: {len(FAIL)} Problem(e). Nicht veröffentlichen.'); sys.exit(1)
print('PUBLISH-CHECK: alles sauber.')
