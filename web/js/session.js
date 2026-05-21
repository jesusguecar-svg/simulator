function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

class PracticeSession {
  constructor(questions, count) {
    this.questions = shuffle(questions).slice(0, count);
    this.current = 0;
    this.correct = 0;
    this.domainStats = {};
    this.awaitingNext = false;
  }

  get active() { return this.questions[this.current]; }

  answer(choiceIndex) {
    const q = this.active;
    const isCorrect = choiceIndex === q.correct_index;
    if (isCorrect) this.correct += 1;
    if (!this.domainStats[q.domain]) this.domainStats[q.domain] = { correct: 0, total: 0 };
    this.domainStats[q.domain].total += 1;
    this.domainStats[q.domain].correct += isCorrect ? 1 : 0;
    this.awaitingNext = true;
    return isCorrect;
  }

  next() {
    this.current += 1;
    this.awaitingNext = false;
    return this.current < this.questions.length;
  }
}
