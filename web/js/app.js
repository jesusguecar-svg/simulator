const setup = document.getElementById('setup');
const sessionView = document.getElementById('session');
const summaryView = document.getElementById('summary');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const countInput = document.getElementById('count');
const progressEl = document.getElementById('progress');
const questionEl = document.getElementById('question');
const domainEl = document.getElementById('domain');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');

let session = null;

function renderQuestion() {
  const q = session.active;
  progressEl.textContent = `Question ${session.current + 1} of ${session.questions.length}`;
  questionEl.textContent = q.question;
  domainEl.textContent = `Domain: ${q.domain} | Difficulty: ${q.difficulty}`;
  feedbackEl.innerHTML = '';
  nextBtn.classList.add('hidden');
  answersEl.innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach((label, i) => {
    const btn = document.createElement('button');
    btn.textContent = `${label}. ${q.choices[i]}`;
    btn.onclick = () => handleAnswer(i);
    answersEl.appendChild(btn);
  });
}

function handleAnswer(i) {
  if (!session || session.awaitingNext) return;
  const q = session.active;
  const ok = session.answer(i);
  feedbackEl.className = `feedback ${ok ? 'correct' : 'incorrect'}`;
  const wrong = ok ? '' : `<div><strong>Why your choice was wrong:</strong> ${q.wrong_explanations[String(i)]}</div>`;
  feedbackEl.innerHTML = `<div><strong>${ok ? 'Correct' : 'Incorrect'}.</strong> Correct answer: ${['A','B','C','D'][q.correct_index]}. ${q.correct_explanation}</div>${wrong}`;
  nextBtn.classList.remove('hidden');
}

function renderSummary() {
  sessionView.classList.add('hidden');
  summaryView.classList.remove('hidden');
  const pct = Math.round((session.correct / session.questions.length) * 100);
  const rows = Object.entries(session.domainStats).map(([domain, s]) => `<li>${domain}: ${s.correct}/${s.total}</li>`).join('');
  summaryView.innerHTML = `<h2>Results</h2><p>Score: <strong>${session.correct}/${session.questions.length}</strong> (${pct}%)</p><h3>Domain breakdown</h3><ul>${rows}</ul><button id="restart">Practice Again</button>`;
  document.getElementById('restart').onclick = () => location.reload();
}

startBtn.onclick = () => {
  const count = Number(countInput.value);
  if (!Number.isInteger(count) || count < 1 || count > QUESTIONS.length) {
    alert(`Enter a number from 1 to ${QUESTIONS.length}.`);
    return;
  }
  session = new PracticeSession(QUESTIONS, count);
  setup.classList.add('hidden');
  summaryView.classList.add('hidden');
  sessionView.classList.remove('hidden');
  renderQuestion();
};

nextBtn.onclick = () => {
  if (session.next()) renderQuestion();
  else renderSummary();
};

document.addEventListener('keydown', (e) => {
  if (!session) return;
  if (session.awaitingNext && e.key === 'Enter') {
    nextBtn.click();
    return;
  }
  const map = { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 };
  const idx = map[e.key.toLowerCase()];
  if (idx !== undefined) handleAnswer(idx);
});
