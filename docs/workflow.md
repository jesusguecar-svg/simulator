# Workflow

1. Add/update validated batch files in `data/questions_validated/`.
2. Run `python scripts/validate_artifacts.py`.
3. Rebuild `web/js/questions.js` with `python scripts/build_questions_js.py`.
4. Open `web/index.html` to test web behavior.
