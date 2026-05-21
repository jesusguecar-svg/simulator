import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data' / 'questions_validated'


def validate():
    manifest = json.loads((DATA / 'validated_batches_manifest.json').read_text())
    seen = set()
    total = 0
    for b in manifest['batches']:
        qf = DATA / b['question_file']
        rf = DATA / b['validation_report']
        if not qf.exists() or not rf.exists():
            raise FileNotFoundError(f"Missing file in batch {b['batch_id']}")
        payload = json.loads(qf.read_text())
        items = payload['items']
        if len(items) != b['item_count']:
            raise ValueError(f"Count mismatch for {b['batch_id']}")
        for item in items:
            if item['id'] in seen:
                raise ValueError(f"Duplicate ID {item['id']}")
            seen.add(item['id'])
            if set(item['wrong_explanations'].keys()) != {'0','1','2','3'}:
                raise ValueError(f"Invalid wrong_explanations keys for {item['id']}")
        total += len(items)
    print(f'Validation passed: {len(manifest["batches"])} batches, {total} questions, {len(seen)} unique IDs')


if __name__ == '__main__':
    validate()
