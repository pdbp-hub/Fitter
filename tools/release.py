"""Freigabe: übernimmt die Dev-Version (docs/dev) in die Live-Version (docs).
Nur ausführen, wenn Ben „freigeben“ gesagt hat. Danach: node tests/smoke.js, committen, pushen."""
import pathlib, re, shutil
D = pathlib.Path(__file__).resolve().parent.parent / 'docs'
for f in ['app.js', 'style.css']:
    shutil.copy(D / 'dev' / f, D / f)
if (D / 'dev' / 'vendor').exists():
    shutil.copytree(D / 'dev' / 'vendor', D / 'vendor', dirs_exist_ok=True)
sw = (D / 'sw.js').read_text()
n = int(re.search(r"fitter-v(\d+)", sw).group(1)) + 1
(D / 'sw.js').write_text(re.sub(r"fitter-v\d+", f"fitter-v{n}", sw))
version = re.search(r"APP_VERSION = '([^']+)'", (D / 'app.js').read_text()).group(1)
print(f"Live ist jetzt Version {version} (Cache fitter-v{n}).")
