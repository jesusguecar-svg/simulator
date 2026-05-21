# Texas General Lines Life, Accident, Health & HMO — Practice Engine

Interactive practice exam engine for the Texas General Lines insurance licensing exam.

## Web App

Open `web/index.html` in your browser — no server needed.

### Features
- Choose how many questions (1–250)
- One question at a time with A/B/C/D answers
- Immediate feedback with correct + wrong explanations
- Scored summary with domain breakdown
- Keyboard shortcuts (A/B/C/D or 1/2/3/4, Enter to continue)
- Mobile-friendly responsive design

## CLI

```bash
python app/src/main/cli.py
```

## Validation

```bash
python scripts/validate_artifacts.py
```
# Texas Health, Life & Accident Exam Simulator

A lightweight browser-based quiz simulator to practice exam-style questions for the **Texas Health, Life, and Accident** insurance license exam.

## Features

- Randomized quiz generation from a question bank
- Selectable quiz length
- Instant per-question feedback with explanations
- Final score summary

## Run locally

Because this is plain HTML/CSS/JS, you can run it with any static server.

### Option 1: open directly

Open `index.html` in your browser.

### Option 2: Python static server

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Note

Question set is for practice and concept review. Always verify current licensing requirements with the Texas Department of Insurance.
