# Data Contracts

Questions are loaded exclusively from `data/questions_validated/` through `validated_batches_manifest.json`.

Each question item includes:
- `id`
- `domain`
- `difficulty` (`easy|medium|hard`)
- `question`
- `choices` (exactly 4)
- `correct_index` (0-3)
- `correct_explanation`
- `wrong_explanations` object with keys `0..3`
