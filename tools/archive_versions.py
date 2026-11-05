"""Legt jede veröffentlichte Version unter docs/versions/<version>/ ab (app.js + style.css) und schreibt docs/versions/index.json.
Quelle: Git-Verlauf von docs/dev/app.js (jede Version, die je in Dev war) + die aktuelle Dev-Version.
Die Live-App lädt die Version aus docs/live.json (in der Dev-App unter Dev-Werkzeuge › Live-Version umschaltbar)."""
import json, pathlib, re, subprocess
ROOT = pathlib.Path(__file__).resolve().parent.parent; D = ROOT / 'docs'; V = D / 'versions'
git = lambda *a: subprocess.run(['git', *a], cwd=ROOT, capture_output=True, text=True).stdout
ver = lambda js: (re.search(r"APP_VERSION = '([^']+)'", js) or [None, None])[1]
found = {}
for line in git('log', '--format=%h %cs', '--', 'docs/dev/app.js', 'docs/app.js').split('\n'):
    if not line.strip(): continue
    h, date = line.split()
    for base in ('docs/dev', 'docs'):
        js = git('show', f'{h}:{base}/app.js'); v = ver(js)
        if v and v not in found: found[v] = (h, base, date)
cur = (D / 'dev' / 'app.js').read_text(); found[ver(cur)] = ('WORKTREE', 'docs/dev', subprocess.run(['date', '+%F'], capture_output=True, text=True).stdout.strip())
for v, (h, base, date) in found.items():
    out = V / v; out.mkdir(parents=True, exist_ok=True)
    for f in ('app.js', 'style.css'):
        src = (ROOT / base / f).read_text() if h == 'WORKTREE' else git('show', f'{h}:{base}/{f}')
        (out / f).write_text(src)
key = lambda v: [int(x) for x in v.split('.')]
idx = [{'v': v, 'date': found[v][2]} for v in sorted(found, key=key, reverse=True)]
(V / 'index.json').write_text(json.dumps(idx, indent=2) + '\n')
print('Versionen:', ', '.join(x['v'] for x in idx))
