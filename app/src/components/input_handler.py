def prompt_count(max_questions):
    while True:
        raw = input(f'How many questions (1-{max_questions})? ').strip()
        if raw.isdigit() and 1 <= int(raw) <= max_questions:
            return int(raw)
        print('Please enter a valid integer in range.')


def prompt_answer():
    while True:
        raw = input('Answer (1-4): ').strip()
        if raw in {'1', '2', '3', '4'}:
            return int(raw) - 1
        print('Please enter 1, 2, 3, or 4.')
