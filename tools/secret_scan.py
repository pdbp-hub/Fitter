"""Schlüssel-Check: sucht Zugangsschlüssel, die nicht ins Repo / Frontend gehören.
Läuft automatisch vor jeder Freigabe (release.py bricht bei Fund ab) und vor jedem Commit von Hand:
    python3 tools/secret_scan.py            # aktuelle Dateien
    python3 tools/secret_scan.py --history  # zusätzlich die komplette Git-Historie
Erlaubt (öffentlich gedacht): Supabase „anon“/„publishable“-Schlüssel. Alles andere = Abbruch."""
import base64, json, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SELF = pathlib.Path(__file__).resolve()
PATTERNS = [
    ('GitHub-Token', r'github_pat_[A-Za-z0-9_]{20,}|gh[pousr]_[A-Za-z0-9]{30,}'),
    ('API-Schlüssel (sk-…)', r'\bsk-(?:ant-|proj-)?[A-Za-z0-9_-]{20,}'),
    ('Supabase Secret Key', r'\bsb_secret_[A-Za-z0-9_-]{10,}'),
    ('Supabase service_role-Schlüssel', r'(?i)service_role[_a-z]*["\']?\s*[:=]\s*["\']?[A-Za-z0-9._-]{20,}'),  # the word itself in prose is fine; JWTs are checked by role below
    ('Privater Schlüssel', r'-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----'),
    ('AWS-Schlüssel', r'\bAKIA[0-9A-Z]{16}\b'),
    ('Google-API-Schlüssel', r'\bAIza[0-9A-Za-z_-]{35}\b'),
    ('Passwort im Klartext', r'''(?i)(?:password|passwort|kennwort|pwd)\s*[:=]\s*['"][^'"\s]{6,}['"]'''),
    ('Datenbank-URL mit Passwort', r'postgres(?:ql)?://[^:\s]+:[^@\s]+@'),
]
JWT = re.compile(r'eyJ[A-Za-z0-9_-]{8,}\.eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}')

def jwt_role(tok):
    try:
        p = tok.split('.')[1]; p += '=' * (-len(p) % 4)
        return json.loads(base64.urlsafe_b64decode(p)).get('role')
    except Exception:
        return None

def scan_text(name, text, hits):
    for label, pat in PATTERNS:
        for m in re.finditer(pat, text):
            line = text.count('\n', 0, m.start()) + 1
            hits.append(f'{name}:{line}  {label}: {m.group(0)[:12]}…')
    for m in JWT.finditer(text):
        role = jwt_role(m.group(0))
        if role != 'anon':  # anon = public by design, everything else is secret
            line = text.count('\n', 0, m.start()) + 1
            hits.append(f'{name}:{line}  JWT mit Rolle „{role}“: {m.group(0)[:12]}…')

def main():
    hits = []
    files = subprocess.run(['git', 'ls-files', '--cached', '--others', '--exclude-standard'], cwd=ROOT, capture_output=True, text=True).stdout.split('\n')
    for f in filter(None, files):
        p = ROOT / f
        if p.resolve() == SELF or not p.is_file() or p.stat().st_size > 5_000_000:
            continue
        try:
            scan_text(f, p.read_text(encoding='utf-8'), hits)
        except UnicodeDecodeError:
            continue
    if '--history' in sys.argv:
        log = subprocess.run(['git', 'log', '-p', '--all', '--no-color', '--', '.', ':(exclude)tools/secret_scan.py'], cwd=ROOT, capture_output=True, text=True, errors='replace').stdout
        added = '\n'.join(l[1:] for l in log.split('\n') if l.startswith('+') and not l.startswith('+++'))
        scan_text('git-historie', added, hits)
    if hits:
        print('SCHLÜSSEL-CHECK: FUND! Nicht freigeben, nicht pushen:')
        print('\n'.join('  ' + h for h in hits))
        sys.exit(1)
    print('Schlüssel-Check: sauber (keine geheimen Schlüssel gefunden).')

if __name__ == '__main__':
    main()
