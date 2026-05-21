import json
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parents[4] / 'data' / 'questions_validated'


def load_questions():
    manifest = json.loads((DATA_DIR / 'validated_batches_manifest.json').read_text())
    questions = []
    for batch in manifest['batches']:
      payload = json.loads((DATA_DIR / batch['question_file']).read_text())
      questions.extend(payload['items'])
    return questions
