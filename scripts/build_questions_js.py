import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
data = root / 'data' / 'questions_validated'
out = root / 'web' / 'js' / 'questions.js'
manifest = json.loads((data / 'validated_batches_manifest.json').read_text())
all_items = []
for b in manifest['batches']:
    payload = json.loads((data / b['question_file']).read_text())
    all_items.extend(payload['items'])

out.write_text('const QUESTIONS = ' + json.dumps(all_items, indent=2) + ';\n')
print(f'Wrote {len(all_items)} questions to {out}')
