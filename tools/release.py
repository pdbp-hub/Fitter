"""Freigabe: übernimmt die Dev-Version (docs/dev) in die Live-Version (docs).
Nur ausführen, wenn Ben „freigeben“ gesagt hat. Danach: node tests/smoke.js, committen, pushen."""
import pathlib, re, shutil
D = pathlib.Path(__file__).resolve().parent.parent / 'docs'
for f in ['app.js', 'style.css']:
    shutil.copy(D / 'dev' / f, D / f)
if (D / 'dev' / 'vendor').exists():
    shutil.copytree(D / 'dev' / 'vendor', D / 'vendor', dirs_exist_ok=True)
idx = (D / 'index.html').read_text()
if 'fonts.googleapis' in idx:  # live switches to the local fonts too
    idx = re.sub(r'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com[^"]*">', '<link rel="stylesheet" href="vendor/fonts/fonts.css">', idx)
    (D / 'index.html').write_text(idx)
# live loads the version named in docs/live.json (switchable in the dev app), otherwise the files of this release
idx = (D / 'index.html').read_text()
if 'live.json' not in idx:
    idx = idx.replace('<link rel="stylesheet" href="style.css">', '<link rel="stylesheet" id="appcss" href="style.css">')
    idx = idx.replace('<script src="app.js"></script>', """<script>
(function () { var css = document.getElementById('appcss');
  function load(v) { var b = v ? 'versions/' + v + '/' : ''; if (b) css.href = b + 'style.css'; var s = document.createElement('script'); s.src = b + 'app.js'; document.body.appendChild(s); }
  fetch('live.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) { load(j && j.version); }).catch(function () { load(null); }); })();
</script>""")
    (D / 'index.html').write_text(idx)
import subprocess; subprocess.run(['python3', str(D.parent / 'tools' / 'archive_versions.py')])
sw = (D / 'sw.js').read_text()
n = int(re.search(r"fitter-v(\d+)", sw).group(1)) + 1
(D / 'sw.js').write_text(re.sub(r"fitter-v\d+", f"fitter-v{n}", sw))
version = re.search(r"APP_VERSION = '([^']+)'", (D / 'app.js').read_text()).group(1)
print(f"Live ist jetzt Version {version} (Cache fitter-v{n}).")
