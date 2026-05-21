from app.src.core.loader import load_questions
from app.src.core.session import PracticeSession
from app.src.components.display import render_question, render_feedback, render_summary
from app.src.components.input_handler import prompt_count, prompt_answer


def main():
    questions = load_questions()
    count = prompt_count(len(questions))
    session = PracticeSession(questions, count)

    for idx, q in enumerate(session.questions):
        render_question(idx, q)
        selected = prompt_answer()
        session.record_answer(idx, selected)
        render_feedback(q, selected)

    render_summary(session.summary())


if __name__ == '__main__':
    main()
