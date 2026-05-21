def render_question(index, q):
    print(f"\nQ{index + 1}: [{q['domain']}] {q['question']}")
    for i, ch in enumerate(q['choices']):
        print(f"  {i+1}. {ch}")


def render_feedback(q, selected):
    if selected == q['correct_index']:
        print(f"✅ Correct: {q['correct_explanation']}")
    else:
        print(f"❌ Incorrect. Correct answer: {q['choices'][q['correct_index']]}")
        print(f"   Why your choice was wrong: {q['wrong_explanations'][str(selected)]}")


def render_summary(summary):
    print(f"\nFinal Score: {summary['correct']}/{summary['total']} ({summary['score']}%)")
    print('Domain breakdown (correct answers):')
    for domain, score in sorted(summary['by_domain'].items()):
        print(f"- {domain}: {score}")
