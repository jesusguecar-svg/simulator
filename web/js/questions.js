const QUESTIONS = [
  {
    "id": "TX-GLAH-001",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 1: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 1",
      "Option B for concept 1",
      "Option C for concept 1",
      "Option D for concept 1"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 1 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 1.",
      "1": "Choice B is incorrect for question 1.",
      "2": "Choice C is incorrect for question 1.",
      "3": "Choice D is incorrect for question 1."
    }
  },
  {
    "id": "TX-GLAH-002",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 2: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 2",
      "Option B for concept 2",
      "Option C for concept 2",
      "Option D for concept 2"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 2 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 2.",
      "1": "Choice B is incorrect for question 2.",
      "2": "Choice C is incorrect for question 2.",
      "3": "Choice D is incorrect for question 2."
    }
  },
  {
    "id": "TX-GLAH-003",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 3: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 3",
      "Option B for concept 3",
      "Option C for concept 3",
      "Option D for concept 3"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 3 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 3.",
      "1": "Choice B is incorrect for question 3.",
      "2": "Choice C is incorrect for question 3.",
      "3": "Choice D is incorrect for question 3."
    }
  },
  {
    "id": "TX-GLAH-004",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 4: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 4",
      "Option B for concept 4",
      "Option C for concept 4",
      "Option D for concept 4"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 4 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 4.",
      "1": "Choice B is incorrect for question 4.",
      "2": "Choice C is incorrect for question 4.",
      "3": "Choice D is incorrect for question 4."
    }
  },
  {
    "id": "TX-GLAH-005",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 5: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 5",
      "Option B for concept 5",
      "Option C for concept 5",
      "Option D for concept 5"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 5 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 5.",
      "1": "Choice B is incorrect for question 5.",
      "2": "Choice C is incorrect for question 5.",
      "3": "Choice D is incorrect for question 5."
    }
  },
  {
    "id": "TX-GLAH-006",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 6: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 6",
      "Option B for concept 6",
      "Option C for concept 6",
      "Option D for concept 6"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 6 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 6.",
      "1": "Choice B is incorrect for question 6.",
      "2": "Choice C is incorrect for question 6.",
      "3": "Choice D is incorrect for question 6."
    }
  },
  {
    "id": "TX-GLAH-007",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 7: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 7",
      "Option B for concept 7",
      "Option C for concept 7",
      "Option D for concept 7"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 7 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 7.",
      "1": "Choice B is incorrect for question 7.",
      "2": "Choice C is incorrect for question 7.",
      "3": "Choice D is incorrect for question 7."
    }
  },
  {
    "id": "TX-GLAH-008",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 8: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 8",
      "Option B for concept 8",
      "Option C for concept 8",
      "Option D for concept 8"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 8 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 8.",
      "1": "Choice B is incorrect for question 8.",
      "2": "Choice C is incorrect for question 8.",
      "3": "Choice D is incorrect for question 8."
    }
  },
  {
    "id": "TX-GLAH-009",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 9: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 9",
      "Option B for concept 9",
      "Option C for concept 9",
      "Option D for concept 9"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 9 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 9.",
      "1": "Choice B is incorrect for question 9.",
      "2": "Choice C is incorrect for question 9.",
      "3": "Choice D is incorrect for question 9."
    }
  },
  {
    "id": "TX-GLAH-010",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 10: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 10",
      "Option B for concept 10",
      "Option C for concept 10",
      "Option D for concept 10"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 10 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 10.",
      "1": "Choice B is incorrect for question 10.",
      "2": "Choice C is incorrect for question 10.",
      "3": "Choice D is incorrect for question 10."
    }
  },
  {
    "id": "TX-GLAH-011",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 11: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 11",
      "Option B for concept 11",
      "Option C for concept 11",
      "Option D for concept 11"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 11 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 11.",
      "1": "Choice B is incorrect for question 11.",
      "2": "Choice C is incorrect for question 11.",
      "3": "Choice D is incorrect for question 11."
    }
  },
  {
    "id": "TX-GLAH-012",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 12: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 12",
      "Option B for concept 12",
      "Option C for concept 12",
      "Option D for concept 12"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 12 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 12.",
      "1": "Choice B is incorrect for question 12.",
      "2": "Choice C is incorrect for question 12.",
      "3": "Choice D is incorrect for question 12."
    }
  },
  {
    "id": "TX-GLAH-013",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 13: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 13",
      "Option B for concept 13",
      "Option C for concept 13",
      "Option D for concept 13"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 13 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 13.",
      "1": "Choice B is incorrect for question 13.",
      "2": "Choice C is incorrect for question 13.",
      "3": "Choice D is incorrect for question 13."
    }
  },
  {
    "id": "TX-GLAH-014",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 14: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 14",
      "Option B for concept 14",
      "Option C for concept 14",
      "Option D for concept 14"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 14 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 14.",
      "1": "Choice B is incorrect for question 14.",
      "2": "Choice C is incorrect for question 14.",
      "3": "Choice D is incorrect for question 14."
    }
  },
  {
    "id": "TX-GLAH-015",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 15: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 15",
      "Option B for concept 15",
      "Option C for concept 15",
      "Option D for concept 15"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 15 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 15.",
      "1": "Choice B is incorrect for question 15.",
      "2": "Choice C is incorrect for question 15.",
      "3": "Choice D is incorrect for question 15."
    }
  },
  {
    "id": "TX-GLAH-016",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 16: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 16",
      "Option B for concept 16",
      "Option C for concept 16",
      "Option D for concept 16"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 16 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 16.",
      "1": "Choice B is incorrect for question 16.",
      "2": "Choice C is incorrect for question 16.",
      "3": "Choice D is incorrect for question 16."
    }
  },
  {
    "id": "TX-GLAH-017",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 17: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 17",
      "Option B for concept 17",
      "Option C for concept 17",
      "Option D for concept 17"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 17 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 17.",
      "1": "Choice B is incorrect for question 17.",
      "2": "Choice C is incorrect for question 17.",
      "3": "Choice D is incorrect for question 17."
    }
  },
  {
    "id": "TX-GLAH-018",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 18: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 18",
      "Option B for concept 18",
      "Option C for concept 18",
      "Option D for concept 18"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 18 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 18.",
      "1": "Choice B is incorrect for question 18.",
      "2": "Choice C is incorrect for question 18.",
      "3": "Choice D is incorrect for question 18."
    }
  },
  {
    "id": "TX-GLAH-019",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 19: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 19",
      "Option B for concept 19",
      "Option C for concept 19",
      "Option D for concept 19"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 19 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 19.",
      "1": "Choice B is incorrect for question 19.",
      "2": "Choice C is incorrect for question 19.",
      "3": "Choice D is incorrect for question 19."
    }
  },
  {
    "id": "TX-GLAH-020",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 20: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 20",
      "Option B for concept 20",
      "Option C for concept 20",
      "Option D for concept 20"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 20 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 20.",
      "1": "Choice B is incorrect for question 20.",
      "2": "Choice C is incorrect for question 20.",
      "3": "Choice D is incorrect for question 20."
    }
  },
  {
    "id": "TX-GLAH-021",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 21: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 21",
      "Option B for concept 21",
      "Option C for concept 21",
      "Option D for concept 21"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 21 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 21.",
      "1": "Choice B is incorrect for question 21.",
      "2": "Choice C is incorrect for question 21.",
      "3": "Choice D is incorrect for question 21."
    }
  },
  {
    "id": "TX-GLAH-022",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 22: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 22",
      "Option B for concept 22",
      "Option C for concept 22",
      "Option D for concept 22"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 22 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 22.",
      "1": "Choice B is incorrect for question 22.",
      "2": "Choice C is incorrect for question 22.",
      "3": "Choice D is incorrect for question 22."
    }
  },
  {
    "id": "TX-GLAH-023",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 23: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 23",
      "Option B for concept 23",
      "Option C for concept 23",
      "Option D for concept 23"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 23 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 23.",
      "1": "Choice B is incorrect for question 23.",
      "2": "Choice C is incorrect for question 23.",
      "3": "Choice D is incorrect for question 23."
    }
  },
  {
    "id": "TX-GLAH-024",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 24: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 24",
      "Option B for concept 24",
      "Option C for concept 24",
      "Option D for concept 24"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 24 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 24.",
      "1": "Choice B is incorrect for question 24.",
      "2": "Choice C is incorrect for question 24.",
      "3": "Choice D is incorrect for question 24."
    }
  },
  {
    "id": "TX-GLAH-025",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 25: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 25",
      "Option B for concept 25",
      "Option C for concept 25",
      "Option D for concept 25"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 25 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 25.",
      "1": "Choice B is incorrect for question 25.",
      "2": "Choice C is incorrect for question 25.",
      "3": "Choice D is incorrect for question 25."
    }
  },
  {
    "id": "TX-GLAH-026",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 26: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 26",
      "Option B for concept 26",
      "Option C for concept 26",
      "Option D for concept 26"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 26 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 26.",
      "1": "Choice B is incorrect for question 26.",
      "2": "Choice C is incorrect for question 26.",
      "3": "Choice D is incorrect for question 26."
    }
  },
  {
    "id": "TX-GLAH-027",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 27: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 27",
      "Option B for concept 27",
      "Option C for concept 27",
      "Option D for concept 27"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 27 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 27.",
      "1": "Choice B is incorrect for question 27.",
      "2": "Choice C is incorrect for question 27.",
      "3": "Choice D is incorrect for question 27."
    }
  },
  {
    "id": "TX-GLAH-028",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 28: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 28",
      "Option B for concept 28",
      "Option C for concept 28",
      "Option D for concept 28"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 28 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 28.",
      "1": "Choice B is incorrect for question 28.",
      "2": "Choice C is incorrect for question 28.",
      "3": "Choice D is incorrect for question 28."
    }
  },
  {
    "id": "TX-GLAH-029",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 29: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 29",
      "Option B for concept 29",
      "Option C for concept 29",
      "Option D for concept 29"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 29 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 29.",
      "1": "Choice B is incorrect for question 29.",
      "2": "Choice C is incorrect for question 29.",
      "3": "Choice D is incorrect for question 29."
    }
  },
  {
    "id": "TX-GLAH-030",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 30: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 30",
      "Option B for concept 30",
      "Option C for concept 30",
      "Option D for concept 30"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 30 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 30.",
      "1": "Choice B is incorrect for question 30.",
      "2": "Choice C is incorrect for question 30.",
      "3": "Choice D is incorrect for question 30."
    }
  },
  {
    "id": "TX-GLAH-031",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 31: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 31",
      "Option B for concept 31",
      "Option C for concept 31",
      "Option D for concept 31"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 31 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 31.",
      "1": "Choice B is incorrect for question 31.",
      "2": "Choice C is incorrect for question 31.",
      "3": "Choice D is incorrect for question 31."
    }
  },
  {
    "id": "TX-GLAH-032",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 32: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 32",
      "Option B for concept 32",
      "Option C for concept 32",
      "Option D for concept 32"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 32 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 32.",
      "1": "Choice B is incorrect for question 32.",
      "2": "Choice C is incorrect for question 32.",
      "3": "Choice D is incorrect for question 32."
    }
  },
  {
    "id": "TX-GLAH-033",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 33: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 33",
      "Option B for concept 33",
      "Option C for concept 33",
      "Option D for concept 33"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 33 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 33.",
      "1": "Choice B is incorrect for question 33.",
      "2": "Choice C is incorrect for question 33.",
      "3": "Choice D is incorrect for question 33."
    }
  },
  {
    "id": "TX-GLAH-034",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 34: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 34",
      "Option B for concept 34",
      "Option C for concept 34",
      "Option D for concept 34"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 34 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 34.",
      "1": "Choice B is incorrect for question 34.",
      "2": "Choice C is incorrect for question 34.",
      "3": "Choice D is incorrect for question 34."
    }
  },
  {
    "id": "TX-GLAH-035",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 35: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 35",
      "Option B for concept 35",
      "Option C for concept 35",
      "Option D for concept 35"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 35 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 35.",
      "1": "Choice B is incorrect for question 35.",
      "2": "Choice C is incorrect for question 35.",
      "3": "Choice D is incorrect for question 35."
    }
  },
  {
    "id": "TX-GLAH-036",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 36: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 36",
      "Option B for concept 36",
      "Option C for concept 36",
      "Option D for concept 36"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 36 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 36.",
      "1": "Choice B is incorrect for question 36.",
      "2": "Choice C is incorrect for question 36.",
      "3": "Choice D is incorrect for question 36."
    }
  },
  {
    "id": "TX-GLAH-037",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 37: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 37",
      "Option B for concept 37",
      "Option C for concept 37",
      "Option D for concept 37"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 37 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 37.",
      "1": "Choice B is incorrect for question 37.",
      "2": "Choice C is incorrect for question 37.",
      "3": "Choice D is incorrect for question 37."
    }
  },
  {
    "id": "TX-GLAH-038",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 38: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 38",
      "Option B for concept 38",
      "Option C for concept 38",
      "Option D for concept 38"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 38 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 38.",
      "1": "Choice B is incorrect for question 38.",
      "2": "Choice C is incorrect for question 38.",
      "3": "Choice D is incorrect for question 38."
    }
  },
  {
    "id": "TX-GLAH-039",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 39: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 39",
      "Option B for concept 39",
      "Option C for concept 39",
      "Option D for concept 39"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 39 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 39.",
      "1": "Choice B is incorrect for question 39.",
      "2": "Choice C is incorrect for question 39.",
      "3": "Choice D is incorrect for question 39."
    }
  },
  {
    "id": "TX-GLAH-040",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 40: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 40",
      "Option B for concept 40",
      "Option C for concept 40",
      "Option D for concept 40"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 40 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 40.",
      "1": "Choice B is incorrect for question 40.",
      "2": "Choice C is incorrect for question 40.",
      "3": "Choice D is incorrect for question 40."
    }
  },
  {
    "id": "TX-GLAH-041",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 41: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 41",
      "Option B for concept 41",
      "Option C for concept 41",
      "Option D for concept 41"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 41 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 41.",
      "1": "Choice B is incorrect for question 41.",
      "2": "Choice C is incorrect for question 41.",
      "3": "Choice D is incorrect for question 41."
    }
  },
  {
    "id": "TX-GLAH-042",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 42: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 42",
      "Option B for concept 42",
      "Option C for concept 42",
      "Option D for concept 42"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 42 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 42.",
      "1": "Choice B is incorrect for question 42.",
      "2": "Choice C is incorrect for question 42.",
      "3": "Choice D is incorrect for question 42."
    }
  },
  {
    "id": "TX-GLAH-043",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 43: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 43",
      "Option B for concept 43",
      "Option C for concept 43",
      "Option D for concept 43"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 43 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 43.",
      "1": "Choice B is incorrect for question 43.",
      "2": "Choice C is incorrect for question 43.",
      "3": "Choice D is incorrect for question 43."
    }
  },
  {
    "id": "TX-GLAH-044",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 44: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 44",
      "Option B for concept 44",
      "Option C for concept 44",
      "Option D for concept 44"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 44 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 44.",
      "1": "Choice B is incorrect for question 44.",
      "2": "Choice C is incorrect for question 44.",
      "3": "Choice D is incorrect for question 44."
    }
  },
  {
    "id": "TX-GLAH-045",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 45: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 45",
      "Option B for concept 45",
      "Option C for concept 45",
      "Option D for concept 45"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 45 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 45.",
      "1": "Choice B is incorrect for question 45.",
      "2": "Choice C is incorrect for question 45.",
      "3": "Choice D is incorrect for question 45."
    }
  },
  {
    "id": "TX-GLAH-046",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 46: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 46",
      "Option B for concept 46",
      "Option C for concept 46",
      "Option D for concept 46"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 46 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 46.",
      "1": "Choice B is incorrect for question 46.",
      "2": "Choice C is incorrect for question 46.",
      "3": "Choice D is incorrect for question 46."
    }
  },
  {
    "id": "TX-GLAH-047",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 47: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 47",
      "Option B for concept 47",
      "Option C for concept 47",
      "Option D for concept 47"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 47 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 47.",
      "1": "Choice B is incorrect for question 47.",
      "2": "Choice C is incorrect for question 47.",
      "3": "Choice D is incorrect for question 47."
    }
  },
  {
    "id": "TX-GLAH-048",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 48: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 48",
      "Option B for concept 48",
      "Option C for concept 48",
      "Option D for concept 48"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 48 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 48.",
      "1": "Choice B is incorrect for question 48.",
      "2": "Choice C is incorrect for question 48.",
      "3": "Choice D is incorrect for question 48."
    }
  },
  {
    "id": "TX-GLAH-049",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 49: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 49",
      "Option B for concept 49",
      "Option C for concept 49",
      "Option D for concept 49"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 49 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 49.",
      "1": "Choice B is incorrect for question 49.",
      "2": "Choice C is incorrect for question 49.",
      "3": "Choice D is incorrect for question 49."
    }
  },
  {
    "id": "TX-GLAH-050",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 50: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 50",
      "Option B for concept 50",
      "Option C for concept 50",
      "Option D for concept 50"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 50 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 50.",
      "1": "Choice B is incorrect for question 50.",
      "2": "Choice C is incorrect for question 50.",
      "3": "Choice D is incorrect for question 50."
    }
  },
  {
    "id": "TX-GLAH-051",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 51: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 51",
      "Option B for concept 51",
      "Option C for concept 51",
      "Option D for concept 51"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 51 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 51.",
      "1": "Choice B is incorrect for question 51.",
      "2": "Choice C is incorrect for question 51.",
      "3": "Choice D is incorrect for question 51."
    }
  },
  {
    "id": "TX-GLAH-052",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 52: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 52",
      "Option B for concept 52",
      "Option C for concept 52",
      "Option D for concept 52"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 52 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 52.",
      "1": "Choice B is incorrect for question 52.",
      "2": "Choice C is incorrect for question 52.",
      "3": "Choice D is incorrect for question 52."
    }
  },
  {
    "id": "TX-GLAH-053",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 53: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 53",
      "Option B for concept 53",
      "Option C for concept 53",
      "Option D for concept 53"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 53 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 53.",
      "1": "Choice B is incorrect for question 53.",
      "2": "Choice C is incorrect for question 53.",
      "3": "Choice D is incorrect for question 53."
    }
  },
  {
    "id": "TX-GLAH-054",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 54: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 54",
      "Option B for concept 54",
      "Option C for concept 54",
      "Option D for concept 54"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 54 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 54.",
      "1": "Choice B is incorrect for question 54.",
      "2": "Choice C is incorrect for question 54.",
      "3": "Choice D is incorrect for question 54."
    }
  },
  {
    "id": "TX-GLAH-055",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 55: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 55",
      "Option B for concept 55",
      "Option C for concept 55",
      "Option D for concept 55"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 55 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 55.",
      "1": "Choice B is incorrect for question 55.",
      "2": "Choice C is incorrect for question 55.",
      "3": "Choice D is incorrect for question 55."
    }
  },
  {
    "id": "TX-GLAH-056",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 56: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 56",
      "Option B for concept 56",
      "Option C for concept 56",
      "Option D for concept 56"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 56 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 56.",
      "1": "Choice B is incorrect for question 56.",
      "2": "Choice C is incorrect for question 56.",
      "3": "Choice D is incorrect for question 56."
    }
  },
  {
    "id": "TX-GLAH-057",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 57: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 57",
      "Option B for concept 57",
      "Option C for concept 57",
      "Option D for concept 57"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 57 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 57.",
      "1": "Choice B is incorrect for question 57.",
      "2": "Choice C is incorrect for question 57.",
      "3": "Choice D is incorrect for question 57."
    }
  },
  {
    "id": "TX-GLAH-058",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 58: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 58",
      "Option B for concept 58",
      "Option C for concept 58",
      "Option D for concept 58"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 58 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 58.",
      "1": "Choice B is incorrect for question 58.",
      "2": "Choice C is incorrect for question 58.",
      "3": "Choice D is incorrect for question 58."
    }
  },
  {
    "id": "TX-GLAH-059",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 59: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 59",
      "Option B for concept 59",
      "Option C for concept 59",
      "Option D for concept 59"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 59 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 59.",
      "1": "Choice B is incorrect for question 59.",
      "2": "Choice C is incorrect for question 59.",
      "3": "Choice D is incorrect for question 59."
    }
  },
  {
    "id": "TX-GLAH-060",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 60: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 60",
      "Option B for concept 60",
      "Option C for concept 60",
      "Option D for concept 60"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 60 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 60.",
      "1": "Choice B is incorrect for question 60.",
      "2": "Choice C is incorrect for question 60.",
      "3": "Choice D is incorrect for question 60."
    }
  },
  {
    "id": "TX-GLAH-061",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 61: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 61",
      "Option B for concept 61",
      "Option C for concept 61",
      "Option D for concept 61"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 61 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 61.",
      "1": "Choice B is incorrect for question 61.",
      "2": "Choice C is incorrect for question 61.",
      "3": "Choice D is incorrect for question 61."
    }
  },
  {
    "id": "TX-GLAH-062",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 62: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 62",
      "Option B for concept 62",
      "Option C for concept 62",
      "Option D for concept 62"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 62 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 62.",
      "1": "Choice B is incorrect for question 62.",
      "2": "Choice C is incorrect for question 62.",
      "3": "Choice D is incorrect for question 62."
    }
  },
  {
    "id": "TX-GLAH-063",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 63: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 63",
      "Option B for concept 63",
      "Option C for concept 63",
      "Option D for concept 63"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 63 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 63.",
      "1": "Choice B is incorrect for question 63.",
      "2": "Choice C is incorrect for question 63.",
      "3": "Choice D is incorrect for question 63."
    }
  },
  {
    "id": "TX-GLAH-064",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 64: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 64",
      "Option B for concept 64",
      "Option C for concept 64",
      "Option D for concept 64"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 64 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 64.",
      "1": "Choice B is incorrect for question 64.",
      "2": "Choice C is incorrect for question 64.",
      "3": "Choice D is incorrect for question 64."
    }
  },
  {
    "id": "TX-GLAH-065",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 65: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 65",
      "Option B for concept 65",
      "Option C for concept 65",
      "Option D for concept 65"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 65 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 65.",
      "1": "Choice B is incorrect for question 65.",
      "2": "Choice C is incorrect for question 65.",
      "3": "Choice D is incorrect for question 65."
    }
  },
  {
    "id": "TX-GLAH-066",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 66: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 66",
      "Option B for concept 66",
      "Option C for concept 66",
      "Option D for concept 66"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 66 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 66.",
      "1": "Choice B is incorrect for question 66.",
      "2": "Choice C is incorrect for question 66.",
      "3": "Choice D is incorrect for question 66."
    }
  },
  {
    "id": "TX-GLAH-067",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 67: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 67",
      "Option B for concept 67",
      "Option C for concept 67",
      "Option D for concept 67"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 67 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 67.",
      "1": "Choice B is incorrect for question 67.",
      "2": "Choice C is incorrect for question 67.",
      "3": "Choice D is incorrect for question 67."
    }
  },
  {
    "id": "TX-GLAH-068",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 68: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 68",
      "Option B for concept 68",
      "Option C for concept 68",
      "Option D for concept 68"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 68 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 68.",
      "1": "Choice B is incorrect for question 68.",
      "2": "Choice C is incorrect for question 68.",
      "3": "Choice D is incorrect for question 68."
    }
  },
  {
    "id": "TX-GLAH-069",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 69: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 69",
      "Option B for concept 69",
      "Option C for concept 69",
      "Option D for concept 69"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 69 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 69.",
      "1": "Choice B is incorrect for question 69.",
      "2": "Choice C is incorrect for question 69.",
      "3": "Choice D is incorrect for question 69."
    }
  },
  {
    "id": "TX-GLAH-070",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 70: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 70",
      "Option B for concept 70",
      "Option C for concept 70",
      "Option D for concept 70"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 70 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 70.",
      "1": "Choice B is incorrect for question 70.",
      "2": "Choice C is incorrect for question 70.",
      "3": "Choice D is incorrect for question 70."
    }
  },
  {
    "id": "TX-GLAH-071",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 71: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 71",
      "Option B for concept 71",
      "Option C for concept 71",
      "Option D for concept 71"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 71 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 71.",
      "1": "Choice B is incorrect for question 71.",
      "2": "Choice C is incorrect for question 71.",
      "3": "Choice D is incorrect for question 71."
    }
  },
  {
    "id": "TX-GLAH-072",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 72: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 72",
      "Option B for concept 72",
      "Option C for concept 72",
      "Option D for concept 72"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 72 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 72.",
      "1": "Choice B is incorrect for question 72.",
      "2": "Choice C is incorrect for question 72.",
      "3": "Choice D is incorrect for question 72."
    }
  },
  {
    "id": "TX-GLAH-073",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 73: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 73",
      "Option B for concept 73",
      "Option C for concept 73",
      "Option D for concept 73"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 73 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 73.",
      "1": "Choice B is incorrect for question 73.",
      "2": "Choice C is incorrect for question 73.",
      "3": "Choice D is incorrect for question 73."
    }
  },
  {
    "id": "TX-GLAH-074",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 74: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 74",
      "Option B for concept 74",
      "Option C for concept 74",
      "Option D for concept 74"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 74 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 74.",
      "1": "Choice B is incorrect for question 74.",
      "2": "Choice C is incorrect for question 74.",
      "3": "Choice D is incorrect for question 74."
    }
  },
  {
    "id": "TX-GLAH-075",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 75: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 75",
      "Option B for concept 75",
      "Option C for concept 75",
      "Option D for concept 75"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 75 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 75.",
      "1": "Choice B is incorrect for question 75.",
      "2": "Choice C is incorrect for question 75.",
      "3": "Choice D is incorrect for question 75."
    }
  },
  {
    "id": "TX-GLAH-076",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 76: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 76",
      "Option B for concept 76",
      "Option C for concept 76",
      "Option D for concept 76"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 76 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 76.",
      "1": "Choice B is incorrect for question 76.",
      "2": "Choice C is incorrect for question 76.",
      "3": "Choice D is incorrect for question 76."
    }
  },
  {
    "id": "TX-GLAH-077",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 77: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 77",
      "Option B for concept 77",
      "Option C for concept 77",
      "Option D for concept 77"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 77 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 77.",
      "1": "Choice B is incorrect for question 77.",
      "2": "Choice C is incorrect for question 77.",
      "3": "Choice D is incorrect for question 77."
    }
  },
  {
    "id": "TX-GLAH-078",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 78: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 78",
      "Option B for concept 78",
      "Option C for concept 78",
      "Option D for concept 78"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 78 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 78.",
      "1": "Choice B is incorrect for question 78.",
      "2": "Choice C is incorrect for question 78.",
      "3": "Choice D is incorrect for question 78."
    }
  },
  {
    "id": "TX-GLAH-079",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 79: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 79",
      "Option B for concept 79",
      "Option C for concept 79",
      "Option D for concept 79"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 79 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 79.",
      "1": "Choice B is incorrect for question 79.",
      "2": "Choice C is incorrect for question 79.",
      "3": "Choice D is incorrect for question 79."
    }
  },
  {
    "id": "TX-GLAH-080",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 80: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 80",
      "Option B for concept 80",
      "Option C for concept 80",
      "Option D for concept 80"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 80 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 80.",
      "1": "Choice B is incorrect for question 80.",
      "2": "Choice C is incorrect for question 80.",
      "3": "Choice D is incorrect for question 80."
    }
  },
  {
    "id": "TX-GLAH-081",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 81: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 81",
      "Option B for concept 81",
      "Option C for concept 81",
      "Option D for concept 81"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 81 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 81.",
      "1": "Choice B is incorrect for question 81.",
      "2": "Choice C is incorrect for question 81.",
      "3": "Choice D is incorrect for question 81."
    }
  },
  {
    "id": "TX-GLAH-082",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 82: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 82",
      "Option B for concept 82",
      "Option C for concept 82",
      "Option D for concept 82"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 82 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 82.",
      "1": "Choice B is incorrect for question 82.",
      "2": "Choice C is incorrect for question 82.",
      "3": "Choice D is incorrect for question 82."
    }
  },
  {
    "id": "TX-GLAH-083",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 83: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 83",
      "Option B for concept 83",
      "Option C for concept 83",
      "Option D for concept 83"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 83 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 83.",
      "1": "Choice B is incorrect for question 83.",
      "2": "Choice C is incorrect for question 83.",
      "3": "Choice D is incorrect for question 83."
    }
  },
  {
    "id": "TX-GLAH-084",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 84: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 84",
      "Option B for concept 84",
      "Option C for concept 84",
      "Option D for concept 84"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 84 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 84.",
      "1": "Choice B is incorrect for question 84.",
      "2": "Choice C is incorrect for question 84.",
      "3": "Choice D is incorrect for question 84."
    }
  },
  {
    "id": "TX-GLAH-085",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 85: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 85",
      "Option B for concept 85",
      "Option C for concept 85",
      "Option D for concept 85"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 85 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 85.",
      "1": "Choice B is incorrect for question 85.",
      "2": "Choice C is incorrect for question 85.",
      "3": "Choice D is incorrect for question 85."
    }
  },
  {
    "id": "TX-GLAH-086",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 86: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 86",
      "Option B for concept 86",
      "Option C for concept 86",
      "Option D for concept 86"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 86 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 86.",
      "1": "Choice B is incorrect for question 86.",
      "2": "Choice C is incorrect for question 86.",
      "3": "Choice D is incorrect for question 86."
    }
  },
  {
    "id": "TX-GLAH-087",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 87: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 87",
      "Option B for concept 87",
      "Option C for concept 87",
      "Option D for concept 87"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 87 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 87.",
      "1": "Choice B is incorrect for question 87.",
      "2": "Choice C is incorrect for question 87.",
      "3": "Choice D is incorrect for question 87."
    }
  },
  {
    "id": "TX-GLAH-088",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 88: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 88",
      "Option B for concept 88",
      "Option C for concept 88",
      "Option D for concept 88"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 88 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 88.",
      "1": "Choice B is incorrect for question 88.",
      "2": "Choice C is incorrect for question 88.",
      "3": "Choice D is incorrect for question 88."
    }
  },
  {
    "id": "TX-GLAH-089",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 89: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 89",
      "Option B for concept 89",
      "Option C for concept 89",
      "Option D for concept 89"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 89 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 89.",
      "1": "Choice B is incorrect for question 89.",
      "2": "Choice C is incorrect for question 89.",
      "3": "Choice D is incorrect for question 89."
    }
  },
  {
    "id": "TX-GLAH-090",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 90: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 90",
      "Option B for concept 90",
      "Option C for concept 90",
      "Option D for concept 90"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 90 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 90.",
      "1": "Choice B is incorrect for question 90.",
      "2": "Choice C is incorrect for question 90.",
      "3": "Choice D is incorrect for question 90."
    }
  },
  {
    "id": "TX-GLAH-091",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 91: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 91",
      "Option B for concept 91",
      "Option C for concept 91",
      "Option D for concept 91"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 91 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 91.",
      "1": "Choice B is incorrect for question 91.",
      "2": "Choice C is incorrect for question 91.",
      "3": "Choice D is incorrect for question 91."
    }
  },
  {
    "id": "TX-GLAH-092",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 92: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 92",
      "Option B for concept 92",
      "Option C for concept 92",
      "Option D for concept 92"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 92 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 92.",
      "1": "Choice B is incorrect for question 92.",
      "2": "Choice C is incorrect for question 92.",
      "3": "Choice D is incorrect for question 92."
    }
  },
  {
    "id": "TX-GLAH-093",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 93: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 93",
      "Option B for concept 93",
      "Option C for concept 93",
      "Option D for concept 93"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 93 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 93.",
      "1": "Choice B is incorrect for question 93.",
      "2": "Choice C is incorrect for question 93.",
      "3": "Choice D is incorrect for question 93."
    }
  },
  {
    "id": "TX-GLAH-094",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 94: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 94",
      "Option B for concept 94",
      "Option C for concept 94",
      "Option D for concept 94"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 94 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 94.",
      "1": "Choice B is incorrect for question 94.",
      "2": "Choice C is incorrect for question 94.",
      "3": "Choice D is incorrect for question 94."
    }
  },
  {
    "id": "TX-GLAH-095",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 95: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 95",
      "Option B for concept 95",
      "Option C for concept 95",
      "Option D for concept 95"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 95 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 95.",
      "1": "Choice B is incorrect for question 95.",
      "2": "Choice C is incorrect for question 95.",
      "3": "Choice D is incorrect for question 95."
    }
  },
  {
    "id": "TX-GLAH-096",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 96: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 96",
      "Option B for concept 96",
      "Option C for concept 96",
      "Option D for concept 96"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 96 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 96.",
      "1": "Choice B is incorrect for question 96.",
      "2": "Choice C is incorrect for question 96.",
      "3": "Choice D is incorrect for question 96."
    }
  },
  {
    "id": "TX-GLAH-097",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 97: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 97",
      "Option B for concept 97",
      "Option C for concept 97",
      "Option D for concept 97"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 97 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 97.",
      "1": "Choice B is incorrect for question 97.",
      "2": "Choice C is incorrect for question 97.",
      "3": "Choice D is incorrect for question 97."
    }
  },
  {
    "id": "TX-GLAH-098",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 98: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 98",
      "Option B for concept 98",
      "Option C for concept 98",
      "Option D for concept 98"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 98 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 98.",
      "1": "Choice B is incorrect for question 98.",
      "2": "Choice C is incorrect for question 98.",
      "3": "Choice D is incorrect for question 98."
    }
  },
  {
    "id": "TX-GLAH-099",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 99: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 99",
      "Option B for concept 99",
      "Option C for concept 99",
      "Option D for concept 99"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 99 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 99.",
      "1": "Choice B is incorrect for question 99.",
      "2": "Choice C is incorrect for question 99.",
      "3": "Choice D is incorrect for question 99."
    }
  },
  {
    "id": "TX-GLAH-100",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 100: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 100",
      "Option B for concept 100",
      "Option C for concept 100",
      "Option D for concept 100"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 100 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 100.",
      "1": "Choice B is incorrect for question 100.",
      "2": "Choice C is incorrect for question 100.",
      "3": "Choice D is incorrect for question 100."
    }
  },
  {
    "id": "TX-GLAH-101",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 101: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 101",
      "Option B for concept 101",
      "Option C for concept 101",
      "Option D for concept 101"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 101 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 101.",
      "1": "Choice B is incorrect for question 101.",
      "2": "Choice C is incorrect for question 101.",
      "3": "Choice D is incorrect for question 101."
    }
  },
  {
    "id": "TX-GLAH-102",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 102: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 102",
      "Option B for concept 102",
      "Option C for concept 102",
      "Option D for concept 102"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 102 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 102.",
      "1": "Choice B is incorrect for question 102.",
      "2": "Choice C is incorrect for question 102.",
      "3": "Choice D is incorrect for question 102."
    }
  },
  {
    "id": "TX-GLAH-103",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 103: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 103",
      "Option B for concept 103",
      "Option C for concept 103",
      "Option D for concept 103"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 103 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 103.",
      "1": "Choice B is incorrect for question 103.",
      "2": "Choice C is incorrect for question 103.",
      "3": "Choice D is incorrect for question 103."
    }
  },
  {
    "id": "TX-GLAH-104",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 104: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 104",
      "Option B for concept 104",
      "Option C for concept 104",
      "Option D for concept 104"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 104 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 104.",
      "1": "Choice B is incorrect for question 104.",
      "2": "Choice C is incorrect for question 104.",
      "3": "Choice D is incorrect for question 104."
    }
  },
  {
    "id": "TX-GLAH-105",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 105: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 105",
      "Option B for concept 105",
      "Option C for concept 105",
      "Option D for concept 105"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 105 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 105.",
      "1": "Choice B is incorrect for question 105.",
      "2": "Choice C is incorrect for question 105.",
      "3": "Choice D is incorrect for question 105."
    }
  },
  {
    "id": "TX-GLAH-106",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 106: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 106",
      "Option B for concept 106",
      "Option C for concept 106",
      "Option D for concept 106"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 106 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 106.",
      "1": "Choice B is incorrect for question 106.",
      "2": "Choice C is incorrect for question 106.",
      "3": "Choice D is incorrect for question 106."
    }
  },
  {
    "id": "TX-GLAH-107",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 107: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 107",
      "Option B for concept 107",
      "Option C for concept 107",
      "Option D for concept 107"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 107 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 107.",
      "1": "Choice B is incorrect for question 107.",
      "2": "Choice C is incorrect for question 107.",
      "3": "Choice D is incorrect for question 107."
    }
  },
  {
    "id": "TX-GLAH-108",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 108: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 108",
      "Option B for concept 108",
      "Option C for concept 108",
      "Option D for concept 108"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 108 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 108.",
      "1": "Choice B is incorrect for question 108.",
      "2": "Choice C is incorrect for question 108.",
      "3": "Choice D is incorrect for question 108."
    }
  },
  {
    "id": "TX-GLAH-109",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 109: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 109",
      "Option B for concept 109",
      "Option C for concept 109",
      "Option D for concept 109"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 109 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 109.",
      "1": "Choice B is incorrect for question 109.",
      "2": "Choice C is incorrect for question 109.",
      "3": "Choice D is incorrect for question 109."
    }
  },
  {
    "id": "TX-GLAH-110",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 110: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 110",
      "Option B for concept 110",
      "Option C for concept 110",
      "Option D for concept 110"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 110 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 110.",
      "1": "Choice B is incorrect for question 110.",
      "2": "Choice C is incorrect for question 110.",
      "3": "Choice D is incorrect for question 110."
    }
  },
  {
    "id": "TX-GLAH-111",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 111: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 111",
      "Option B for concept 111",
      "Option C for concept 111",
      "Option D for concept 111"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 111 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 111.",
      "1": "Choice B is incorrect for question 111.",
      "2": "Choice C is incorrect for question 111.",
      "3": "Choice D is incorrect for question 111."
    }
  },
  {
    "id": "TX-GLAH-112",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 112: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 112",
      "Option B for concept 112",
      "Option C for concept 112",
      "Option D for concept 112"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 112 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 112.",
      "1": "Choice B is incorrect for question 112.",
      "2": "Choice C is incorrect for question 112.",
      "3": "Choice D is incorrect for question 112."
    }
  },
  {
    "id": "TX-GLAH-113",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 113: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 113",
      "Option B for concept 113",
      "Option C for concept 113",
      "Option D for concept 113"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 113 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 113.",
      "1": "Choice B is incorrect for question 113.",
      "2": "Choice C is incorrect for question 113.",
      "3": "Choice D is incorrect for question 113."
    }
  },
  {
    "id": "TX-GLAH-114",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 114: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 114",
      "Option B for concept 114",
      "Option C for concept 114",
      "Option D for concept 114"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 114 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 114.",
      "1": "Choice B is incorrect for question 114.",
      "2": "Choice C is incorrect for question 114.",
      "3": "Choice D is incorrect for question 114."
    }
  },
  {
    "id": "TX-GLAH-115",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 115: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 115",
      "Option B for concept 115",
      "Option C for concept 115",
      "Option D for concept 115"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 115 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 115.",
      "1": "Choice B is incorrect for question 115.",
      "2": "Choice C is incorrect for question 115.",
      "3": "Choice D is incorrect for question 115."
    }
  },
  {
    "id": "TX-GLAH-116",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 116: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 116",
      "Option B for concept 116",
      "Option C for concept 116",
      "Option D for concept 116"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 116 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 116.",
      "1": "Choice B is incorrect for question 116.",
      "2": "Choice C is incorrect for question 116.",
      "3": "Choice D is incorrect for question 116."
    }
  },
  {
    "id": "TX-GLAH-117",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 117: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 117",
      "Option B for concept 117",
      "Option C for concept 117",
      "Option D for concept 117"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 117 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 117.",
      "1": "Choice B is incorrect for question 117.",
      "2": "Choice C is incorrect for question 117.",
      "3": "Choice D is incorrect for question 117."
    }
  },
  {
    "id": "TX-GLAH-118",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 118: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 118",
      "Option B for concept 118",
      "Option C for concept 118",
      "Option D for concept 118"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 118 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 118.",
      "1": "Choice B is incorrect for question 118.",
      "2": "Choice C is incorrect for question 118.",
      "3": "Choice D is incorrect for question 118."
    }
  },
  {
    "id": "TX-GLAH-119",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 119: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 119",
      "Option B for concept 119",
      "Option C for concept 119",
      "Option D for concept 119"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 119 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 119.",
      "1": "Choice B is incorrect for question 119.",
      "2": "Choice C is incorrect for question 119.",
      "3": "Choice D is incorrect for question 119."
    }
  },
  {
    "id": "TX-GLAH-120",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 120: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 120",
      "Option B for concept 120",
      "Option C for concept 120",
      "Option D for concept 120"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 120 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 120.",
      "1": "Choice B is incorrect for question 120.",
      "2": "Choice C is incorrect for question 120.",
      "3": "Choice D is incorrect for question 120."
    }
  },
  {
    "id": "TX-GLAH-121",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 121: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 121",
      "Option B for concept 121",
      "Option C for concept 121",
      "Option D for concept 121"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 121 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 121.",
      "1": "Choice B is incorrect for question 121.",
      "2": "Choice C is incorrect for question 121.",
      "3": "Choice D is incorrect for question 121."
    }
  },
  {
    "id": "TX-GLAH-122",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 122: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 122",
      "Option B for concept 122",
      "Option C for concept 122",
      "Option D for concept 122"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 122 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 122.",
      "1": "Choice B is incorrect for question 122.",
      "2": "Choice C is incorrect for question 122.",
      "3": "Choice D is incorrect for question 122."
    }
  },
  {
    "id": "TX-GLAH-123",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 123: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 123",
      "Option B for concept 123",
      "Option C for concept 123",
      "Option D for concept 123"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 123 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 123.",
      "1": "Choice B is incorrect for question 123.",
      "2": "Choice C is incorrect for question 123.",
      "3": "Choice D is incorrect for question 123."
    }
  },
  {
    "id": "TX-GLAH-124",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 124: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 124",
      "Option B for concept 124",
      "Option C for concept 124",
      "Option D for concept 124"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 124 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 124.",
      "1": "Choice B is incorrect for question 124.",
      "2": "Choice C is incorrect for question 124.",
      "3": "Choice D is incorrect for question 124."
    }
  },
  {
    "id": "TX-GLAH-125",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 125: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 125",
      "Option B for concept 125",
      "Option C for concept 125",
      "Option D for concept 125"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 125 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 125.",
      "1": "Choice B is incorrect for question 125.",
      "2": "Choice C is incorrect for question 125.",
      "3": "Choice D is incorrect for question 125."
    }
  },
  {
    "id": "TX-GLAH-126",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 126: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 126",
      "Option B for concept 126",
      "Option C for concept 126",
      "Option D for concept 126"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 126 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 126.",
      "1": "Choice B is incorrect for question 126.",
      "2": "Choice C is incorrect for question 126.",
      "3": "Choice D is incorrect for question 126."
    }
  },
  {
    "id": "TX-GLAH-127",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 127: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 127",
      "Option B for concept 127",
      "Option C for concept 127",
      "Option D for concept 127"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 127 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 127.",
      "1": "Choice B is incorrect for question 127.",
      "2": "Choice C is incorrect for question 127.",
      "3": "Choice D is incorrect for question 127."
    }
  },
  {
    "id": "TX-GLAH-128",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 128: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 128",
      "Option B for concept 128",
      "Option C for concept 128",
      "Option D for concept 128"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 128 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 128.",
      "1": "Choice B is incorrect for question 128.",
      "2": "Choice C is incorrect for question 128.",
      "3": "Choice D is incorrect for question 128."
    }
  },
  {
    "id": "TX-GLAH-129",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 129: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 129",
      "Option B for concept 129",
      "Option C for concept 129",
      "Option D for concept 129"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 129 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 129.",
      "1": "Choice B is incorrect for question 129.",
      "2": "Choice C is incorrect for question 129.",
      "3": "Choice D is incorrect for question 129."
    }
  },
  {
    "id": "TX-GLAH-130",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 130: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 130",
      "Option B for concept 130",
      "Option C for concept 130",
      "Option D for concept 130"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 130 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 130.",
      "1": "Choice B is incorrect for question 130.",
      "2": "Choice C is incorrect for question 130.",
      "3": "Choice D is incorrect for question 130."
    }
  },
  {
    "id": "TX-GLAH-131",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 131: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 131",
      "Option B for concept 131",
      "Option C for concept 131",
      "Option D for concept 131"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 131 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 131.",
      "1": "Choice B is incorrect for question 131.",
      "2": "Choice C is incorrect for question 131.",
      "3": "Choice D is incorrect for question 131."
    }
  },
  {
    "id": "TX-GLAH-132",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 132: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 132",
      "Option B for concept 132",
      "Option C for concept 132",
      "Option D for concept 132"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 132 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 132.",
      "1": "Choice B is incorrect for question 132.",
      "2": "Choice C is incorrect for question 132.",
      "3": "Choice D is incorrect for question 132."
    }
  },
  {
    "id": "TX-GLAH-133",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 133: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 133",
      "Option B for concept 133",
      "Option C for concept 133",
      "Option D for concept 133"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 133 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 133.",
      "1": "Choice B is incorrect for question 133.",
      "2": "Choice C is incorrect for question 133.",
      "3": "Choice D is incorrect for question 133."
    }
  },
  {
    "id": "TX-GLAH-134",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 134: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 134",
      "Option B for concept 134",
      "Option C for concept 134",
      "Option D for concept 134"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 134 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 134.",
      "1": "Choice B is incorrect for question 134.",
      "2": "Choice C is incorrect for question 134.",
      "3": "Choice D is incorrect for question 134."
    }
  },
  {
    "id": "TX-GLAH-135",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 135: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 135",
      "Option B for concept 135",
      "Option C for concept 135",
      "Option D for concept 135"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 135 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 135.",
      "1": "Choice B is incorrect for question 135.",
      "2": "Choice C is incorrect for question 135.",
      "3": "Choice D is incorrect for question 135."
    }
  },
  {
    "id": "TX-GLAH-136",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 136: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 136",
      "Option B for concept 136",
      "Option C for concept 136",
      "Option D for concept 136"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 136 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 136.",
      "1": "Choice B is incorrect for question 136.",
      "2": "Choice C is incorrect for question 136.",
      "3": "Choice D is incorrect for question 136."
    }
  },
  {
    "id": "TX-GLAH-137",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 137: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 137",
      "Option B for concept 137",
      "Option C for concept 137",
      "Option D for concept 137"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 137 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 137.",
      "1": "Choice B is incorrect for question 137.",
      "2": "Choice C is incorrect for question 137.",
      "3": "Choice D is incorrect for question 137."
    }
  },
  {
    "id": "TX-GLAH-138",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 138: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 138",
      "Option B for concept 138",
      "Option C for concept 138",
      "Option D for concept 138"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 138 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 138.",
      "1": "Choice B is incorrect for question 138.",
      "2": "Choice C is incorrect for question 138.",
      "3": "Choice D is incorrect for question 138."
    }
  },
  {
    "id": "TX-GLAH-139",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 139: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 139",
      "Option B for concept 139",
      "Option C for concept 139",
      "Option D for concept 139"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 139 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 139.",
      "1": "Choice B is incorrect for question 139.",
      "2": "Choice C is incorrect for question 139.",
      "3": "Choice D is incorrect for question 139."
    }
  },
  {
    "id": "TX-GLAH-140",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 140: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 140",
      "Option B for concept 140",
      "Option C for concept 140",
      "Option D for concept 140"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 140 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 140.",
      "1": "Choice B is incorrect for question 140.",
      "2": "Choice C is incorrect for question 140.",
      "3": "Choice D is incorrect for question 140."
    }
  },
  {
    "id": "TX-GLAH-141",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 141: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 141",
      "Option B for concept 141",
      "Option C for concept 141",
      "Option D for concept 141"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 141 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 141.",
      "1": "Choice B is incorrect for question 141.",
      "2": "Choice C is incorrect for question 141.",
      "3": "Choice D is incorrect for question 141."
    }
  },
  {
    "id": "TX-GLAH-142",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 142: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 142",
      "Option B for concept 142",
      "Option C for concept 142",
      "Option D for concept 142"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 142 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 142.",
      "1": "Choice B is incorrect for question 142.",
      "2": "Choice C is incorrect for question 142.",
      "3": "Choice D is incorrect for question 142."
    }
  },
  {
    "id": "TX-GLAH-143",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 143: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 143",
      "Option B for concept 143",
      "Option C for concept 143",
      "Option D for concept 143"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 143 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 143.",
      "1": "Choice B is incorrect for question 143.",
      "2": "Choice C is incorrect for question 143.",
      "3": "Choice D is incorrect for question 143."
    }
  },
  {
    "id": "TX-GLAH-144",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 144: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 144",
      "Option B for concept 144",
      "Option C for concept 144",
      "Option D for concept 144"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 144 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 144.",
      "1": "Choice B is incorrect for question 144.",
      "2": "Choice C is incorrect for question 144.",
      "3": "Choice D is incorrect for question 144."
    }
  },
  {
    "id": "TX-GLAH-145",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 145: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 145",
      "Option B for concept 145",
      "Option C for concept 145",
      "Option D for concept 145"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 145 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 145.",
      "1": "Choice B is incorrect for question 145.",
      "2": "Choice C is incorrect for question 145.",
      "3": "Choice D is incorrect for question 145."
    }
  },
  {
    "id": "TX-GLAH-146",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 146: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 146",
      "Option B for concept 146",
      "Option C for concept 146",
      "Option D for concept 146"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 146 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 146.",
      "1": "Choice B is incorrect for question 146.",
      "2": "Choice C is incorrect for question 146.",
      "3": "Choice D is incorrect for question 146."
    }
  },
  {
    "id": "TX-GLAH-147",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 147: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 147",
      "Option B for concept 147",
      "Option C for concept 147",
      "Option D for concept 147"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 147 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 147.",
      "1": "Choice B is incorrect for question 147.",
      "2": "Choice C is incorrect for question 147.",
      "3": "Choice D is incorrect for question 147."
    }
  },
  {
    "id": "TX-GLAH-148",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 148: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 148",
      "Option B for concept 148",
      "Option C for concept 148",
      "Option D for concept 148"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 148 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 148.",
      "1": "Choice B is incorrect for question 148.",
      "2": "Choice C is incorrect for question 148.",
      "3": "Choice D is incorrect for question 148."
    }
  },
  {
    "id": "TX-GLAH-149",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 149: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 149",
      "Option B for concept 149",
      "Option C for concept 149",
      "Option D for concept 149"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 149 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 149.",
      "1": "Choice B is incorrect for question 149.",
      "2": "Choice C is incorrect for question 149.",
      "3": "Choice D is incorrect for question 149."
    }
  },
  {
    "id": "TX-GLAH-150",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 150: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 150",
      "Option B for concept 150",
      "Option C for concept 150",
      "Option D for concept 150"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 150 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 150.",
      "1": "Choice B is incorrect for question 150.",
      "2": "Choice C is incorrect for question 150.",
      "3": "Choice D is incorrect for question 150."
    }
  },
  {
    "id": "TX-GLAH-151",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 151: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 151",
      "Option B for concept 151",
      "Option C for concept 151",
      "Option D for concept 151"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 151 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 151.",
      "1": "Choice B is incorrect for question 151.",
      "2": "Choice C is incorrect for question 151.",
      "3": "Choice D is incorrect for question 151."
    }
  },
  {
    "id": "TX-GLAH-152",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 152: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 152",
      "Option B for concept 152",
      "Option C for concept 152",
      "Option D for concept 152"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 152 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 152.",
      "1": "Choice B is incorrect for question 152.",
      "2": "Choice C is incorrect for question 152.",
      "3": "Choice D is incorrect for question 152."
    }
  },
  {
    "id": "TX-GLAH-153",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 153: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 153",
      "Option B for concept 153",
      "Option C for concept 153",
      "Option D for concept 153"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 153 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 153.",
      "1": "Choice B is incorrect for question 153.",
      "2": "Choice C is incorrect for question 153.",
      "3": "Choice D is incorrect for question 153."
    }
  },
  {
    "id": "TX-GLAH-154",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 154: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 154",
      "Option B for concept 154",
      "Option C for concept 154",
      "Option D for concept 154"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 154 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 154.",
      "1": "Choice B is incorrect for question 154.",
      "2": "Choice C is incorrect for question 154.",
      "3": "Choice D is incorrect for question 154."
    }
  },
  {
    "id": "TX-GLAH-155",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 155: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 155",
      "Option B for concept 155",
      "Option C for concept 155",
      "Option D for concept 155"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 155 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 155.",
      "1": "Choice B is incorrect for question 155.",
      "2": "Choice C is incorrect for question 155.",
      "3": "Choice D is incorrect for question 155."
    }
  },
  {
    "id": "TX-GLAH-156",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 156: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 156",
      "Option B for concept 156",
      "Option C for concept 156",
      "Option D for concept 156"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 156 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 156.",
      "1": "Choice B is incorrect for question 156.",
      "2": "Choice C is incorrect for question 156.",
      "3": "Choice D is incorrect for question 156."
    }
  },
  {
    "id": "TX-GLAH-157",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 157: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 157",
      "Option B for concept 157",
      "Option C for concept 157",
      "Option D for concept 157"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 157 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 157.",
      "1": "Choice B is incorrect for question 157.",
      "2": "Choice C is incorrect for question 157.",
      "3": "Choice D is incorrect for question 157."
    }
  },
  {
    "id": "TX-GLAH-158",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 158: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 158",
      "Option B for concept 158",
      "Option C for concept 158",
      "Option D for concept 158"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 158 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 158.",
      "1": "Choice B is incorrect for question 158.",
      "2": "Choice C is incorrect for question 158.",
      "3": "Choice D is incorrect for question 158."
    }
  },
  {
    "id": "TX-GLAH-159",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 159: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 159",
      "Option B for concept 159",
      "Option C for concept 159",
      "Option D for concept 159"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 159 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 159.",
      "1": "Choice B is incorrect for question 159.",
      "2": "Choice C is incorrect for question 159.",
      "3": "Choice D is incorrect for question 159."
    }
  },
  {
    "id": "TX-GLAH-160",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 160: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 160",
      "Option B for concept 160",
      "Option C for concept 160",
      "Option D for concept 160"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 160 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 160.",
      "1": "Choice B is incorrect for question 160.",
      "2": "Choice C is incorrect for question 160.",
      "3": "Choice D is incorrect for question 160."
    }
  },
  {
    "id": "TX-GLAH-161",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 161: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 161",
      "Option B for concept 161",
      "Option C for concept 161",
      "Option D for concept 161"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 161 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 161.",
      "1": "Choice B is incorrect for question 161.",
      "2": "Choice C is incorrect for question 161.",
      "3": "Choice D is incorrect for question 161."
    }
  },
  {
    "id": "TX-GLAH-162",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 162: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 162",
      "Option B for concept 162",
      "Option C for concept 162",
      "Option D for concept 162"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 162 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 162.",
      "1": "Choice B is incorrect for question 162.",
      "2": "Choice C is incorrect for question 162.",
      "3": "Choice D is incorrect for question 162."
    }
  },
  {
    "id": "TX-GLAH-163",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 163: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 163",
      "Option B for concept 163",
      "Option C for concept 163",
      "Option D for concept 163"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 163 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 163.",
      "1": "Choice B is incorrect for question 163.",
      "2": "Choice C is incorrect for question 163.",
      "3": "Choice D is incorrect for question 163."
    }
  },
  {
    "id": "TX-GLAH-164",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 164: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 164",
      "Option B for concept 164",
      "Option C for concept 164",
      "Option D for concept 164"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 164 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 164.",
      "1": "Choice B is incorrect for question 164.",
      "2": "Choice C is incorrect for question 164.",
      "3": "Choice D is incorrect for question 164."
    }
  },
  {
    "id": "TX-GLAH-165",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 165: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 165",
      "Option B for concept 165",
      "Option C for concept 165",
      "Option D for concept 165"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 165 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 165.",
      "1": "Choice B is incorrect for question 165.",
      "2": "Choice C is incorrect for question 165.",
      "3": "Choice D is incorrect for question 165."
    }
  },
  {
    "id": "TX-GLAH-166",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 166: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 166",
      "Option B for concept 166",
      "Option C for concept 166",
      "Option D for concept 166"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 166 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 166.",
      "1": "Choice B is incorrect for question 166.",
      "2": "Choice C is incorrect for question 166.",
      "3": "Choice D is incorrect for question 166."
    }
  },
  {
    "id": "TX-GLAH-167",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 167: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 167",
      "Option B for concept 167",
      "Option C for concept 167",
      "Option D for concept 167"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 167 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 167.",
      "1": "Choice B is incorrect for question 167.",
      "2": "Choice C is incorrect for question 167.",
      "3": "Choice D is incorrect for question 167."
    }
  },
  {
    "id": "TX-GLAH-168",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 168: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 168",
      "Option B for concept 168",
      "Option C for concept 168",
      "Option D for concept 168"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 168 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 168.",
      "1": "Choice B is incorrect for question 168.",
      "2": "Choice C is incorrect for question 168.",
      "3": "Choice D is incorrect for question 168."
    }
  },
  {
    "id": "TX-GLAH-169",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 169: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 169",
      "Option B for concept 169",
      "Option C for concept 169",
      "Option D for concept 169"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 169 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 169.",
      "1": "Choice B is incorrect for question 169.",
      "2": "Choice C is incorrect for question 169.",
      "3": "Choice D is incorrect for question 169."
    }
  },
  {
    "id": "TX-GLAH-170",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 170: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 170",
      "Option B for concept 170",
      "Option C for concept 170",
      "Option D for concept 170"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 170 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 170.",
      "1": "Choice B is incorrect for question 170.",
      "2": "Choice C is incorrect for question 170.",
      "3": "Choice D is incorrect for question 170."
    }
  },
  {
    "id": "TX-GLAH-171",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 171: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 171",
      "Option B for concept 171",
      "Option C for concept 171",
      "Option D for concept 171"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 171 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 171.",
      "1": "Choice B is incorrect for question 171.",
      "2": "Choice C is incorrect for question 171.",
      "3": "Choice D is incorrect for question 171."
    }
  },
  {
    "id": "TX-GLAH-172",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 172: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 172",
      "Option B for concept 172",
      "Option C for concept 172",
      "Option D for concept 172"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 172 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 172.",
      "1": "Choice B is incorrect for question 172.",
      "2": "Choice C is incorrect for question 172.",
      "3": "Choice D is incorrect for question 172."
    }
  },
  {
    "id": "TX-GLAH-173",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 173: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 173",
      "Option B for concept 173",
      "Option C for concept 173",
      "Option D for concept 173"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 173 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 173.",
      "1": "Choice B is incorrect for question 173.",
      "2": "Choice C is incorrect for question 173.",
      "3": "Choice D is incorrect for question 173."
    }
  },
  {
    "id": "TX-GLAH-174",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 174: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 174",
      "Option B for concept 174",
      "Option C for concept 174",
      "Option D for concept 174"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 174 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 174.",
      "1": "Choice B is incorrect for question 174.",
      "2": "Choice C is incorrect for question 174.",
      "3": "Choice D is incorrect for question 174."
    }
  },
  {
    "id": "TX-GLAH-175",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 175: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 175",
      "Option B for concept 175",
      "Option C for concept 175",
      "Option D for concept 175"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 175 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 175.",
      "1": "Choice B is incorrect for question 175.",
      "2": "Choice C is incorrect for question 175.",
      "3": "Choice D is incorrect for question 175."
    }
  },
  {
    "id": "TX-GLAH-176",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 176: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 176",
      "Option B for concept 176",
      "Option C for concept 176",
      "Option D for concept 176"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 176 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 176.",
      "1": "Choice B is incorrect for question 176.",
      "2": "Choice C is incorrect for question 176.",
      "3": "Choice D is incorrect for question 176."
    }
  },
  {
    "id": "TX-GLAH-177",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 177: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 177",
      "Option B for concept 177",
      "Option C for concept 177",
      "Option D for concept 177"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 177 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 177.",
      "1": "Choice B is incorrect for question 177.",
      "2": "Choice C is incorrect for question 177.",
      "3": "Choice D is incorrect for question 177."
    }
  },
  {
    "id": "TX-GLAH-178",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 178: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 178",
      "Option B for concept 178",
      "Option C for concept 178",
      "Option D for concept 178"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 178 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 178.",
      "1": "Choice B is incorrect for question 178.",
      "2": "Choice C is incorrect for question 178.",
      "3": "Choice D is incorrect for question 178."
    }
  },
  {
    "id": "TX-GLAH-179",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 179: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 179",
      "Option B for concept 179",
      "Option C for concept 179",
      "Option D for concept 179"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 179 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 179.",
      "1": "Choice B is incorrect for question 179.",
      "2": "Choice C is incorrect for question 179.",
      "3": "Choice D is incorrect for question 179."
    }
  },
  {
    "id": "TX-GLAH-180",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 180: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 180",
      "Option B for concept 180",
      "Option C for concept 180",
      "Option D for concept 180"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 180 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 180.",
      "1": "Choice B is incorrect for question 180.",
      "2": "Choice C is incorrect for question 180.",
      "3": "Choice D is incorrect for question 180."
    }
  },
  {
    "id": "TX-GLAH-181",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 181: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 181",
      "Option B for concept 181",
      "Option C for concept 181",
      "Option D for concept 181"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 181 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 181.",
      "1": "Choice B is incorrect for question 181.",
      "2": "Choice C is incorrect for question 181.",
      "3": "Choice D is incorrect for question 181."
    }
  },
  {
    "id": "TX-GLAH-182",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 182: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 182",
      "Option B for concept 182",
      "Option C for concept 182",
      "Option D for concept 182"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 182 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 182.",
      "1": "Choice B is incorrect for question 182.",
      "2": "Choice C is incorrect for question 182.",
      "3": "Choice D is incorrect for question 182."
    }
  },
  {
    "id": "TX-GLAH-183",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 183: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 183",
      "Option B for concept 183",
      "Option C for concept 183",
      "Option D for concept 183"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 183 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 183.",
      "1": "Choice B is incorrect for question 183.",
      "2": "Choice C is incorrect for question 183.",
      "3": "Choice D is incorrect for question 183."
    }
  },
  {
    "id": "TX-GLAH-184",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 184: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 184",
      "Option B for concept 184",
      "Option C for concept 184",
      "Option D for concept 184"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 184 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 184.",
      "1": "Choice B is incorrect for question 184.",
      "2": "Choice C is incorrect for question 184.",
      "3": "Choice D is incorrect for question 184."
    }
  },
  {
    "id": "TX-GLAH-185",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 185: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 185",
      "Option B for concept 185",
      "Option C for concept 185",
      "Option D for concept 185"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 185 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 185.",
      "1": "Choice B is incorrect for question 185.",
      "2": "Choice C is incorrect for question 185.",
      "3": "Choice D is incorrect for question 185."
    }
  },
  {
    "id": "TX-GLAH-186",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 186: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 186",
      "Option B for concept 186",
      "Option C for concept 186",
      "Option D for concept 186"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 186 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 186.",
      "1": "Choice B is incorrect for question 186.",
      "2": "Choice C is incorrect for question 186.",
      "3": "Choice D is incorrect for question 186."
    }
  },
  {
    "id": "TX-GLAH-187",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 187: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 187",
      "Option B for concept 187",
      "Option C for concept 187",
      "Option D for concept 187"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 187 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 187.",
      "1": "Choice B is incorrect for question 187.",
      "2": "Choice C is incorrect for question 187.",
      "3": "Choice D is incorrect for question 187."
    }
  },
  {
    "id": "TX-GLAH-188",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 188: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 188",
      "Option B for concept 188",
      "Option C for concept 188",
      "Option D for concept 188"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 188 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 188.",
      "1": "Choice B is incorrect for question 188.",
      "2": "Choice C is incorrect for question 188.",
      "3": "Choice D is incorrect for question 188."
    }
  },
  {
    "id": "TX-GLAH-189",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 189: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 189",
      "Option B for concept 189",
      "Option C for concept 189",
      "Option D for concept 189"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 189 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 189.",
      "1": "Choice B is incorrect for question 189.",
      "2": "Choice C is incorrect for question 189.",
      "3": "Choice D is incorrect for question 189."
    }
  },
  {
    "id": "TX-GLAH-190",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 190: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 190",
      "Option B for concept 190",
      "Option C for concept 190",
      "Option D for concept 190"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 190 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 190.",
      "1": "Choice B is incorrect for question 190.",
      "2": "Choice C is incorrect for question 190.",
      "3": "Choice D is incorrect for question 190."
    }
  },
  {
    "id": "TX-GLAH-191",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 191: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 191",
      "Option B for concept 191",
      "Option C for concept 191",
      "Option D for concept 191"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 191 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 191.",
      "1": "Choice B is incorrect for question 191.",
      "2": "Choice C is incorrect for question 191.",
      "3": "Choice D is incorrect for question 191."
    }
  },
  {
    "id": "TX-GLAH-192",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 192: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 192",
      "Option B for concept 192",
      "Option C for concept 192",
      "Option D for concept 192"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 192 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 192.",
      "1": "Choice B is incorrect for question 192.",
      "2": "Choice C is incorrect for question 192.",
      "3": "Choice D is incorrect for question 192."
    }
  },
  {
    "id": "TX-GLAH-193",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 193: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 193",
      "Option B for concept 193",
      "Option C for concept 193",
      "Option D for concept 193"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 193 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 193.",
      "1": "Choice B is incorrect for question 193.",
      "2": "Choice C is incorrect for question 193.",
      "3": "Choice D is incorrect for question 193."
    }
  },
  {
    "id": "TX-GLAH-194",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 194: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 194",
      "Option B for concept 194",
      "Option C for concept 194",
      "Option D for concept 194"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 194 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 194.",
      "1": "Choice B is incorrect for question 194.",
      "2": "Choice C is incorrect for question 194.",
      "3": "Choice D is incorrect for question 194."
    }
  },
  {
    "id": "TX-GLAH-195",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 195: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 195",
      "Option B for concept 195",
      "Option C for concept 195",
      "Option D for concept 195"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 195 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 195.",
      "1": "Choice B is incorrect for question 195.",
      "2": "Choice C is incorrect for question 195.",
      "3": "Choice D is incorrect for question 195."
    }
  },
  {
    "id": "TX-GLAH-196",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 196: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 196",
      "Option B for concept 196",
      "Option C for concept 196",
      "Option D for concept 196"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 196 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 196.",
      "1": "Choice B is incorrect for question 196.",
      "2": "Choice C is incorrect for question 196.",
      "3": "Choice D is incorrect for question 196."
    }
  },
  {
    "id": "TX-GLAH-197",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 197: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 197",
      "Option B for concept 197",
      "Option C for concept 197",
      "Option D for concept 197"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 197 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 197.",
      "1": "Choice B is incorrect for question 197.",
      "2": "Choice C is incorrect for question 197.",
      "3": "Choice D is incorrect for question 197."
    }
  },
  {
    "id": "TX-GLAH-198",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 198: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 198",
      "Option B for concept 198",
      "Option C for concept 198",
      "Option D for concept 198"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 198 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 198.",
      "1": "Choice B is incorrect for question 198.",
      "2": "Choice C is incorrect for question 198.",
      "3": "Choice D is incorrect for question 198."
    }
  },
  {
    "id": "TX-GLAH-199",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 199: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 199",
      "Option B for concept 199",
      "Option C for concept 199",
      "Option D for concept 199"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 199 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 199.",
      "1": "Choice B is incorrect for question 199.",
      "2": "Choice C is incorrect for question 199.",
      "3": "Choice D is incorrect for question 199."
    }
  },
  {
    "id": "TX-GLAH-200",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 200: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 200",
      "Option B for concept 200",
      "Option C for concept 200",
      "Option D for concept 200"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 200 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 200.",
      "1": "Choice B is incorrect for question 200.",
      "2": "Choice C is incorrect for question 200.",
      "3": "Choice D is incorrect for question 200."
    }
  },
  {
    "id": "TX-GLAH-201",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 201: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 201",
      "Option B for concept 201",
      "Option C for concept 201",
      "Option D for concept 201"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 201 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 201.",
      "1": "Choice B is incorrect for question 201.",
      "2": "Choice C is incorrect for question 201.",
      "3": "Choice D is incorrect for question 201."
    }
  },
  {
    "id": "TX-GLAH-202",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 202: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 202",
      "Option B for concept 202",
      "Option C for concept 202",
      "Option D for concept 202"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 202 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 202.",
      "1": "Choice B is incorrect for question 202.",
      "2": "Choice C is incorrect for question 202.",
      "3": "Choice D is incorrect for question 202."
    }
  },
  {
    "id": "TX-GLAH-203",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 203: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 203",
      "Option B for concept 203",
      "Option C for concept 203",
      "Option D for concept 203"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 203 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 203.",
      "1": "Choice B is incorrect for question 203.",
      "2": "Choice C is incorrect for question 203.",
      "3": "Choice D is incorrect for question 203."
    }
  },
  {
    "id": "TX-GLAH-204",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 204: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 204",
      "Option B for concept 204",
      "Option C for concept 204",
      "Option D for concept 204"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 204 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 204.",
      "1": "Choice B is incorrect for question 204.",
      "2": "Choice C is incorrect for question 204.",
      "3": "Choice D is incorrect for question 204."
    }
  },
  {
    "id": "TX-GLAH-205",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 205: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 205",
      "Option B for concept 205",
      "Option C for concept 205",
      "Option D for concept 205"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 205 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 205.",
      "1": "Choice B is incorrect for question 205.",
      "2": "Choice C is incorrect for question 205.",
      "3": "Choice D is incorrect for question 205."
    }
  },
  {
    "id": "TX-GLAH-206",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 206: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 206",
      "Option B for concept 206",
      "Option C for concept 206",
      "Option D for concept 206"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 206 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 206.",
      "1": "Choice B is incorrect for question 206.",
      "2": "Choice C is incorrect for question 206.",
      "3": "Choice D is incorrect for question 206."
    }
  },
  {
    "id": "TX-GLAH-207",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 207: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 207",
      "Option B for concept 207",
      "Option C for concept 207",
      "Option D for concept 207"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 207 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 207.",
      "1": "Choice B is incorrect for question 207.",
      "2": "Choice C is incorrect for question 207.",
      "3": "Choice D is incorrect for question 207."
    }
  },
  {
    "id": "TX-GLAH-208",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 208: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 208",
      "Option B for concept 208",
      "Option C for concept 208",
      "Option D for concept 208"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 208 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 208.",
      "1": "Choice B is incorrect for question 208.",
      "2": "Choice C is incorrect for question 208.",
      "3": "Choice D is incorrect for question 208."
    }
  },
  {
    "id": "TX-GLAH-209",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 209: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 209",
      "Option B for concept 209",
      "Option C for concept 209",
      "Option D for concept 209"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 209 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 209.",
      "1": "Choice B is incorrect for question 209.",
      "2": "Choice C is incorrect for question 209.",
      "3": "Choice D is incorrect for question 209."
    }
  },
  {
    "id": "TX-GLAH-210",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 210: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 210",
      "Option B for concept 210",
      "Option C for concept 210",
      "Option D for concept 210"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 210 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 210.",
      "1": "Choice B is incorrect for question 210.",
      "2": "Choice C is incorrect for question 210.",
      "3": "Choice D is incorrect for question 210."
    }
  },
  {
    "id": "TX-GLAH-211",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 211: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 211",
      "Option B for concept 211",
      "Option C for concept 211",
      "Option D for concept 211"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 211 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 211.",
      "1": "Choice B is incorrect for question 211.",
      "2": "Choice C is incorrect for question 211.",
      "3": "Choice D is incorrect for question 211."
    }
  },
  {
    "id": "TX-GLAH-212",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 212: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 212",
      "Option B for concept 212",
      "Option C for concept 212",
      "Option D for concept 212"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 212 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 212.",
      "1": "Choice B is incorrect for question 212.",
      "2": "Choice C is incorrect for question 212.",
      "3": "Choice D is incorrect for question 212."
    }
  },
  {
    "id": "TX-GLAH-213",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 213: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 213",
      "Option B for concept 213",
      "Option C for concept 213",
      "Option D for concept 213"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 213 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 213.",
      "1": "Choice B is incorrect for question 213.",
      "2": "Choice C is incorrect for question 213.",
      "3": "Choice D is incorrect for question 213."
    }
  },
  {
    "id": "TX-GLAH-214",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 214: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 214",
      "Option B for concept 214",
      "Option C for concept 214",
      "Option D for concept 214"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 214 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 214.",
      "1": "Choice B is incorrect for question 214.",
      "2": "Choice C is incorrect for question 214.",
      "3": "Choice D is incorrect for question 214."
    }
  },
  {
    "id": "TX-GLAH-215",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 215: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 215",
      "Option B for concept 215",
      "Option C for concept 215",
      "Option D for concept 215"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 215 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 215.",
      "1": "Choice B is incorrect for question 215.",
      "2": "Choice C is incorrect for question 215.",
      "3": "Choice D is incorrect for question 215."
    }
  },
  {
    "id": "TX-GLAH-216",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 216: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 216",
      "Option B for concept 216",
      "Option C for concept 216",
      "Option D for concept 216"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 216 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 216.",
      "1": "Choice B is incorrect for question 216.",
      "2": "Choice C is incorrect for question 216.",
      "3": "Choice D is incorrect for question 216."
    }
  },
  {
    "id": "TX-GLAH-217",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 217: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 217",
      "Option B for concept 217",
      "Option C for concept 217",
      "Option D for concept 217"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 217 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 217.",
      "1": "Choice B is incorrect for question 217.",
      "2": "Choice C is incorrect for question 217.",
      "3": "Choice D is incorrect for question 217."
    }
  },
  {
    "id": "TX-GLAH-218",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 218: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 218",
      "Option B for concept 218",
      "Option C for concept 218",
      "Option D for concept 218"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 218 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 218.",
      "1": "Choice B is incorrect for question 218.",
      "2": "Choice C is incorrect for question 218.",
      "3": "Choice D is incorrect for question 218."
    }
  },
  {
    "id": "TX-GLAH-219",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 219: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 219",
      "Option B for concept 219",
      "Option C for concept 219",
      "Option D for concept 219"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 219 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 219.",
      "1": "Choice B is incorrect for question 219.",
      "2": "Choice C is incorrect for question 219.",
      "3": "Choice D is incorrect for question 219."
    }
  },
  {
    "id": "TX-GLAH-220",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 220: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 220",
      "Option B for concept 220",
      "Option C for concept 220",
      "Option D for concept 220"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 220 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 220.",
      "1": "Choice B is incorrect for question 220.",
      "2": "Choice C is incorrect for question 220.",
      "3": "Choice D is incorrect for question 220."
    }
  },
  {
    "id": "TX-GLAH-221",
    "domain": "Policy Provisions",
    "difficulty": "medium",
    "question": "Practice question 221: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 221",
      "Option B for concept 221",
      "Option C for concept 221",
      "Option D for concept 221"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 221 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 221.",
      "1": "Choice B is incorrect for question 221.",
      "2": "Choice C is incorrect for question 221.",
      "3": "Choice D is incorrect for question 221."
    }
  },
  {
    "id": "TX-GLAH-222",
    "domain": "Agent Duties",
    "difficulty": "hard",
    "question": "Practice question 222: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 222",
      "Option B for concept 222",
      "Option C for concept 222",
      "Option D for concept 222"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 222 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 222.",
      "1": "Choice B is incorrect for question 222.",
      "2": "Choice C is incorrect for question 222.",
      "3": "Choice D is incorrect for question 222."
    }
  },
  {
    "id": "TX-GLAH-223",
    "domain": "Licensing",
    "difficulty": "easy",
    "question": "Practice question 223: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 223",
      "Option B for concept 223",
      "Option C for concept 223",
      "Option D for concept 223"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 223 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 223.",
      "1": "Choice B is incorrect for question 223.",
      "2": "Choice C is incorrect for question 223.",
      "3": "Choice D is incorrect for question 223."
    }
  },
  {
    "id": "TX-GLAH-224",
    "domain": "Regulations",
    "difficulty": "medium",
    "question": "Practice question 224: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 224",
      "Option B for concept 224",
      "Option C for concept 224",
      "Option D for concept 224"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 224 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 224.",
      "1": "Choice B is incorrect for question 224.",
      "2": "Choice C is incorrect for question 224.",
      "3": "Choice D is incorrect for question 224."
    }
  },
  {
    "id": "TX-GLAH-225",
    "domain": "Ethics",
    "difficulty": "hard",
    "question": "Practice question 225: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 225",
      "Option B for concept 225",
      "Option C for concept 225",
      "Option D for concept 225"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 225 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 225.",
      "1": "Choice B is incorrect for question 225.",
      "2": "Choice C is incorrect for question 225.",
      "3": "Choice D is incorrect for question 225."
    }
  },
  {
    "id": "TX-GLAH-226",
    "domain": "Life Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 226: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 226",
      "Option B for concept 226",
      "Option C for concept 226",
      "Option D for concept 226"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 226 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 226.",
      "1": "Choice B is incorrect for question 226.",
      "2": "Choice C is incorrect for question 226.",
      "3": "Choice D is incorrect for question 226."
    }
  },
  {
    "id": "TX-GLAH-227",
    "domain": "Health Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 227: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 227",
      "Option B for concept 227",
      "Option C for concept 227",
      "Option D for concept 227"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 227 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 227.",
      "1": "Choice B is incorrect for question 227.",
      "2": "Choice C is incorrect for question 227.",
      "3": "Choice D is incorrect for question 227."
    }
  },
  {
    "id": "TX-GLAH-228",
    "domain": "Accident Coverage",
    "difficulty": "hard",
    "question": "Practice question 228: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 228",
      "Option B for concept 228",
      "Option C for concept 228",
      "Option D for concept 228"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 228 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 228.",
      "1": "Choice B is incorrect for question 228.",
      "2": "Choice C is incorrect for question 228.",
      "3": "Choice D is incorrect for question 228."
    }
  },
  {
    "id": "TX-GLAH-229",
    "domain": "Texas Law",
    "difficulty": "easy",
    "question": "Practice question 229: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 229",
      "Option B for concept 229",
      "Option C for concept 229",
      "Option D for concept 229"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 229 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 229.",
      "1": "Choice B is incorrect for question 229.",
      "2": "Choice C is incorrect for question 229.",
      "3": "Choice D is incorrect for question 229."
    }
  },
  {
    "id": "TX-GLAH-230",
    "domain": "Consumer Protection",
    "difficulty": "medium",
    "question": "Practice question 230: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 230",
      "Option B for concept 230",
      "Option C for concept 230",
      "Option D for concept 230"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 230 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 230.",
      "1": "Choice B is incorrect for question 230.",
      "2": "Choice C is incorrect for question 230.",
      "3": "Choice D is incorrect for question 230."
    }
  },
  {
    "id": "TX-GLAH-231",
    "domain": "Policy Provisions",
    "difficulty": "hard",
    "question": "Practice question 231: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 231",
      "Option B for concept 231",
      "Option C for concept 231",
      "Option D for concept 231"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 231 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 231.",
      "1": "Choice B is incorrect for question 231.",
      "2": "Choice C is incorrect for question 231.",
      "3": "Choice D is incorrect for question 231."
    }
  },
  {
    "id": "TX-GLAH-232",
    "domain": "Agent Duties",
    "difficulty": "easy",
    "question": "Practice question 232: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 232",
      "Option B for concept 232",
      "Option C for concept 232",
      "Option D for concept 232"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 232 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 232.",
      "1": "Choice B is incorrect for question 232.",
      "2": "Choice C is incorrect for question 232.",
      "3": "Choice D is incorrect for question 232."
    }
  },
  {
    "id": "TX-GLAH-233",
    "domain": "Licensing",
    "difficulty": "medium",
    "question": "Practice question 233: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 233",
      "Option B for concept 233",
      "Option C for concept 233",
      "Option D for concept 233"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 233 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 233.",
      "1": "Choice B is incorrect for question 233.",
      "2": "Choice C is incorrect for question 233.",
      "3": "Choice D is incorrect for question 233."
    }
  },
  {
    "id": "TX-GLAH-234",
    "domain": "Regulations",
    "difficulty": "hard",
    "question": "Practice question 234: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 234",
      "Option B for concept 234",
      "Option C for concept 234",
      "Option D for concept 234"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 234 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 234.",
      "1": "Choice B is incorrect for question 234.",
      "2": "Choice C is incorrect for question 234.",
      "3": "Choice D is incorrect for question 234."
    }
  },
  {
    "id": "TX-GLAH-235",
    "domain": "Ethics",
    "difficulty": "easy",
    "question": "Practice question 235: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 235",
      "Option B for concept 235",
      "Option C for concept 235",
      "Option D for concept 235"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 235 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 235.",
      "1": "Choice B is incorrect for question 235.",
      "2": "Choice C is incorrect for question 235.",
      "3": "Choice D is incorrect for question 235."
    }
  },
  {
    "id": "TX-GLAH-236",
    "domain": "Life Insurance Basics",
    "difficulty": "medium",
    "question": "Practice question 236: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 236",
      "Option B for concept 236",
      "Option C for concept 236",
      "Option D for concept 236"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 236 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 236.",
      "1": "Choice B is incorrect for question 236.",
      "2": "Choice C is incorrect for question 236.",
      "3": "Choice D is incorrect for question 236."
    }
  },
  {
    "id": "TX-GLAH-237",
    "domain": "Health Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 237: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 237",
      "Option B for concept 237",
      "Option C for concept 237",
      "Option D for concept 237"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 237 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 237.",
      "1": "Choice B is incorrect for question 237.",
      "2": "Choice C is incorrect for question 237.",
      "3": "Choice D is incorrect for question 237."
    }
  },
  {
    "id": "TX-GLAH-238",
    "domain": "Accident Coverage",
    "difficulty": "easy",
    "question": "Practice question 238: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 238",
      "Option B for concept 238",
      "Option C for concept 238",
      "Option D for concept 238"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 238 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 238.",
      "1": "Choice B is incorrect for question 238.",
      "2": "Choice C is incorrect for question 238.",
      "3": "Choice D is incorrect for question 238."
    }
  },
  {
    "id": "TX-GLAH-239",
    "domain": "Texas Law",
    "difficulty": "medium",
    "question": "Practice question 239: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 239",
      "Option B for concept 239",
      "Option C for concept 239",
      "Option D for concept 239"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 239 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 239.",
      "1": "Choice B is incorrect for question 239.",
      "2": "Choice C is incorrect for question 239.",
      "3": "Choice D is incorrect for question 239."
    }
  },
  {
    "id": "TX-GLAH-240",
    "domain": "Consumer Protection",
    "difficulty": "hard",
    "question": "Practice question 240: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 240",
      "Option B for concept 240",
      "Option C for concept 240",
      "Option D for concept 240"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 240 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 240.",
      "1": "Choice B is incorrect for question 240.",
      "2": "Choice C is incorrect for question 240.",
      "3": "Choice D is incorrect for question 240."
    }
  },
  {
    "id": "TX-GLAH-241",
    "domain": "Policy Provisions",
    "difficulty": "easy",
    "question": "Practice question 241: Which statement best matches Texas policy provisions requirements?",
    "choices": [
      "Option A for concept 241",
      "Option B for concept 241",
      "Option C for concept 241",
      "Option D for concept 241"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 241 because it matches the tested policy provisions principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 241.",
      "1": "Choice B is incorrect for question 241.",
      "2": "Choice C is incorrect for question 241.",
      "3": "Choice D is incorrect for question 241."
    }
  },
  {
    "id": "TX-GLAH-242",
    "domain": "Agent Duties",
    "difficulty": "medium",
    "question": "Practice question 242: Which statement best matches Texas agent duties requirements?",
    "choices": [
      "Option A for concept 242",
      "Option B for concept 242",
      "Option C for concept 242",
      "Option D for concept 242"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 242 because it matches the tested agent duties principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 242.",
      "1": "Choice B is incorrect for question 242.",
      "2": "Choice C is incorrect for question 242.",
      "3": "Choice D is incorrect for question 242."
    }
  },
  {
    "id": "TX-GLAH-243",
    "domain": "Licensing",
    "difficulty": "hard",
    "question": "Practice question 243: Which statement best matches Texas licensing requirements?",
    "choices": [
      "Option A for concept 243",
      "Option B for concept 243",
      "Option C for concept 243",
      "Option D for concept 243"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 243 because it matches the tested licensing principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 243.",
      "1": "Choice B is incorrect for question 243.",
      "2": "Choice C is incorrect for question 243.",
      "3": "Choice D is incorrect for question 243."
    }
  },
  {
    "id": "TX-GLAH-244",
    "domain": "Regulations",
    "difficulty": "easy",
    "question": "Practice question 244: Which statement best matches Texas regulations requirements?",
    "choices": [
      "Option A for concept 244",
      "Option B for concept 244",
      "Option C for concept 244",
      "Option D for concept 244"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 244 because it matches the tested regulations principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 244.",
      "1": "Choice B is incorrect for question 244.",
      "2": "Choice C is incorrect for question 244.",
      "3": "Choice D is incorrect for question 244."
    }
  },
  {
    "id": "TX-GLAH-245",
    "domain": "Ethics",
    "difficulty": "medium",
    "question": "Practice question 245: Which statement best matches Texas ethics requirements?",
    "choices": [
      "Option A for concept 245",
      "Option B for concept 245",
      "Option C for concept 245",
      "Option D for concept 245"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 245 because it matches the tested ethics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 245.",
      "1": "Choice B is incorrect for question 245.",
      "2": "Choice C is incorrect for question 245.",
      "3": "Choice D is incorrect for question 245."
    }
  },
  {
    "id": "TX-GLAH-246",
    "domain": "Life Insurance Basics",
    "difficulty": "hard",
    "question": "Practice question 246: Which statement best matches Texas life insurance basics requirements?",
    "choices": [
      "Option A for concept 246",
      "Option B for concept 246",
      "Option C for concept 246",
      "Option D for concept 246"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 246 because it matches the tested life insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 246.",
      "1": "Choice B is incorrect for question 246.",
      "2": "Choice C is incorrect for question 246.",
      "3": "Choice D is incorrect for question 246."
    }
  },
  {
    "id": "TX-GLAH-247",
    "domain": "Health Insurance Basics",
    "difficulty": "easy",
    "question": "Practice question 247: Which statement best matches Texas health insurance basics requirements?",
    "choices": [
      "Option A for concept 247",
      "Option B for concept 247",
      "Option C for concept 247",
      "Option D for concept 247"
    ],
    "correct_index": 2,
    "correct_explanation": "This is correct for question 247 because it matches the tested health insurance basics principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 247.",
      "1": "Choice B is incorrect for question 247.",
      "2": "Choice C is incorrect for question 247.",
      "3": "Choice D is incorrect for question 247."
    }
  },
  {
    "id": "TX-GLAH-248",
    "domain": "Accident Coverage",
    "difficulty": "medium",
    "question": "Practice question 248: Which statement best matches Texas accident coverage requirements?",
    "choices": [
      "Option A for concept 248",
      "Option B for concept 248",
      "Option C for concept 248",
      "Option D for concept 248"
    ],
    "correct_index": 3,
    "correct_explanation": "This is correct for question 248 because it matches the tested accident coverage principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 248.",
      "1": "Choice B is incorrect for question 248.",
      "2": "Choice C is incorrect for question 248.",
      "3": "Choice D is incorrect for question 248."
    }
  },
  {
    "id": "TX-GLAH-249",
    "domain": "Texas Law",
    "difficulty": "hard",
    "question": "Practice question 249: Which statement best matches Texas texas law requirements?",
    "choices": [
      "Option A for concept 249",
      "Option B for concept 249",
      "Option C for concept 249",
      "Option D for concept 249"
    ],
    "correct_index": 0,
    "correct_explanation": "This is correct for question 249 because it matches the tested texas law principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 249.",
      "1": "Choice B is incorrect for question 249.",
      "2": "Choice C is incorrect for question 249.",
      "3": "Choice D is incorrect for question 249."
    }
  },
  {
    "id": "TX-GLAH-250",
    "domain": "Consumer Protection",
    "difficulty": "easy",
    "question": "Practice question 250: Which statement best matches Texas consumer protection requirements?",
    "choices": [
      "Option A for concept 250",
      "Option B for concept 250",
      "Option C for concept 250",
      "Option D for concept 250"
    ],
    "correct_index": 1,
    "correct_explanation": "This is correct for question 250 because it matches the tested consumer protection principle.",
    "wrong_explanations": {
      "0": "Choice A is incorrect for question 250.",
      "1": "Choice B is incorrect for question 250.",
      "2": "Choice C is incorrect for question 250.",
      "3": "Choice D is incorrect for question 250."
    }
  }
];
