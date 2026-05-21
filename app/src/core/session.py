import random
from collections import Counter


class PracticeSession:
    def __init__(self, questions, count):
        if count < 1 or count > len(questions):
            raise ValueError('count must be between 1 and available question total')
        self.questions = random.sample(questions, count)
        self.answers = []

    def record_answer(self, index, selected):
        q = self.questions[index]
        correct = selected == q['correct_index']
        self.answers.append({'question_id': q['id'], 'correct': correct, 'domain': q['domain']})
        return correct

    def summary(self):
        total = len(self.questions)
        correct = sum(1 for a in self.answers if a['correct'])
        by_domain = Counter()
        for a in self.answers:
            by_domain[a['domain']] += int(a['correct'])
        return {'total': total, 'correct': correct, 'score': round(correct / total * 100), 'by_domain': dict(by_domain)}
