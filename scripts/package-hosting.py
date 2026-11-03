"""Package a verified static export with safe Unix modes for shared hosting."""
from datetime import datetime, timezone
from hashlib import sha256
import json
from pathlib import Path
from stat import S_IFREG
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

project = Path(__file__).resolve().parent.parent
root = project / 'out'
if not (root / 'index.html').is_file():
    raise SystemExit('Run npm run build:hosting first.')
target = project / 'outputs' / 'hosting' / 'delemomoducentre-org.zip'
target.parent.mkdir(parents=True, exist_ok=True)
files = sorted(path for path in root.rglob('*') if path.is_file())
with ZipFile(target, 'w', ZIP_DEFLATED, compresslevel=6) as archive:
    for path in files:
        relative = path.relative_to(root).as_posix()
        if any(part in {'.git', 'node_modules', 'AI_CONTEXT'} or part.startswith('.env') for part in path.relative_to(root).parts) or path.suffix.lower() in {'.key', '.pem', '.pfx', '.p12'}:
            raise SystemExit(f'Unexpected private file in export: {relative}')
        info = ZipInfo(relative, datetime.now(timezone.utc).timetuple()[:6])
        info.create_system = 3
        info.external_attr = (S_IFREG | 0o644) << 16
        info.compress_type = ZIP_DEFLATED
        archive.writestr(info, path.read_bytes())
with ZipFile(target) as archive:
    if archive.testzip() is not None:
        raise SystemExit('ZIP integrity check failed.')
    for entry in archive.infolist():
        if entry.external_attr >> 16 & 0o777 != 0o644 or archive.read(entry.filename) != (root / entry.filename).read_bytes():
            raise SystemExit(f'Archive verification failed: {entry.filename}')
print(json.dumps({'archive': str(target), 'files': len(files), 'file_permissions': '0644', 'bytes': target.stat().st_size, 'sha256': sha256(target.read_bytes()).hexdigest()}, indent=2))
