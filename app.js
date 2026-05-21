const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const countSelect = document.getElementById('questionCount');
const quizArea = document.getElementById('quizArea');
const resultArea = document.getElementById('resultArea');

let activeQuestions = [];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function startQuiz() {
  const count = Number(countSelect.value);
  activeQuestions = shuffle(QUESTION_BANK).slice(0, Math.min(count, QUESTION_BANK.length));

  quizArea.innerHTML = '';
  resultArea.classList.add('hidden');

  activeQuestions.forEach((q, idx) => {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('h3');
    title.className = 'question-title';
    title.textContent = `${idx + 1}. [${q.category}] ${q.question}`;
    card.appendChild(title);

    const options = document.createElement('div');
    options.className = 'options';

    q.options.forEach((opt, optIndex) => {
      const label = document.createElement('label');
      label.className = 'option';
      label.innerHTML = `<input type="radio" name="q-${idx}" value="${optIndex}"> ${opt}`;
      options.appendChild(label);
    });

    const feedback = document.createElement('div');
    feedback.id = `feedback-${idx}`;
    feedback.className = 'feedback';
    card.appendChild(options);
    card.appendChild(feedback);

    quizArea.appendChild(card);
  });

  const submit = document.createElement('button');
  submit.textContent = 'Submit Answers';
  submit.addEventListener('click', gradeQuiz);
  quizArea.appendChild(submit);

  quizArea.classList.remove('hidden');
}

function gradeQuiz() {
  let correct = 0;

  activeQuestions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
    const feedback = document.getElementById(`feedback-${idx}`);

    if (!selected) {
      feedback.className = 'feedback incorrect';
      feedback.textContent = `No answer selected. Correct answer: ${q.options[q.answer]}. ${q.explanation}`;
      return;
    }

    const value = Number(selected.value);
    if (value === q.answer) {
      correct += 1;
      feedback.className = 'feedback correct';
      feedback.textContent = `Correct. ${q.explanation}`;
    } else {
      feedback.className = 'feedback incorrect';
      feedback.textContent = `Incorrect. Correct answer: ${q.options[q.answer]}. ${q.explanation}`;
    }
  });

  const score = Math.round((correct / activeQuestions.length) * 100);
  resultArea.classList.remove('hidden');
  resultArea.innerHTML = `<h2>Results</h2><p>You scored <strong>${correct}/${activeQuestions.length}</strong> (${score}%).</p>`;
}

function resetQuiz() {
  activeQuestions = [];
  quizArea.innerHTML = '';
  quizArea.classList.add('hidden');
  resultArea.classList.add('hidden');
  resultArea.innerHTML = '';
}

startBtn.addEventListener('click', startQuiz);
resetBtn.addEventListener('click', resetQuiz);
