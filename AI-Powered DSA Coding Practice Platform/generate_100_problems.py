import json

raw_problems_data = [
  # Phase 1: Pattern Printing Fundamentals (1-8)
  {
    "num": 1,
    "title": "Row of Stars",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Rows", "Basic Loop", "Pattern"],
    "desc": "Write a C++ program to print a single row of N stars.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****"
  },
  {
    "num": 2,
    "title": "Column of Stars",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Columns", "Basic Loop", "Pattern"],
    "desc": "Write a C++ program to print a single column of N stars, one star per line.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*\n*\n*\n*\n*"
  },
  {
    "num": 3,
    "title": "Solid Square",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Nested Loops", "Rows & Columns", "Pattern"],
    "desc": "Write a C++ program to print a square pattern of * with N rows and N columns.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****\n*****\n*****\n*****\n*****"
  },
  {
    "num": 4,
    "title": "Solid Rectangle",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Nested Loops", "Rows & Columns", "Pattern"],
    "desc": "Write a C++ program to print a solid rectangle of * with R rows and C columns.\n\n### Input\nTwo integers, denoting the number of rows and columns respectively.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4 7",
    "output": "*******\n*******\n*******\n*******"
  },
  {
    "num": 5,
    "title": "Increasing Stars Row-wise",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Row/Column Relationship", "Pattern"],
    "desc": "Write a C++ program to print N rows where row i contains exactly i stars.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4",
    "output": "*\n**\n***\n****"
  },
  {
    "num": 6,
    "title": "Decreasing Stars Row-wise",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Row/Column Relationship", "Pattern"],
    "desc": "Write a C++ program to print N rows where row i contains exactly (N − i + 1) stars.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4",
    "output": "****\n***\n**\n*"
  },
  {
    "num": 7,
    "title": "Increasing Numbers Row-wise",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Row/Column Relationship", "Numbers"],
    "desc": "Write a C++ program to print N rows where each row displays only its own row number.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n2\n3\n4\n5"
  },
  {
    "num": 8,
    "title": "Repeated Row-Number Square",
    "difficulty": "Easy",
    "category": "Pattern Printing Fundamentals",
    "tags": ["Nested Loops", "Row-Dependent Value", "Numbers"],
    "desc": "Write a C++ program to print an N x N block where every cell in row i contains the digit i.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "11111\n22222\n33333\n44444\n55555"
  },

  # Phase 2: Basic Triangular Patterns (9-18)
  {
    "num": 9,
    "title": "Left-Aligned Increasing Star Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Row-Dependent Inner Loop", "Triangles"],
    "desc": "Write a C++ program to print a left-aligned triangle where row i contains i stars.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*\n**\n***\n****\n*****"
  },
  {
    "num": 10,
    "title": "Left-Aligned Decreasing Star Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Row-Dependent Inner Loop", "Triangles"],
    "desc": "Write a C++ program to print a left-aligned triangle where row i contains (N − i + 1) stars.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****\n****\n***\n**\n*"
  },
  {
    "num": 11,
    "title": "Increasing Number Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Number Relationships", "Triangles"],
    "desc": "Write a C++ program to print a triangle where row i contains the numbers 1 through i.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n12\n123\n1234\n12345"
  },
  {
    "num": 12,
    "title": "Repeated-Digit Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Number Relationships", "Triangles"],
    "desc": "Write a C++ program to print a triangle where row i contains the digit 1 repeated i times.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n11\n111\n1111\n11111"
  },
  {
    "num": 13,
    "title": "Row-Number Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Number Relationships", "Triangles"],
    "desc": "Write a C++ program to print a triangle where row i contains the row's own number, repeated i times.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n22\n333\n4444\n55555"
  },
  {
    "num": 14,
    "title": "Column-Number Diagonal Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Row/Column Relationship", "Diagonals"],
    "desc": "Write a C++ program to print N rows where row i contains (i − 1) leading spaces followed by the number i.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n 2\n  3\n   4\n    5"
  },
  {
    "num": 15,
    "title": "Continuous Number Grid",
    "difficulty": "Medium",
    "category": "Basic Triangular Patterns",
    "tags": ["Number Relationships", "Grids"],
    "desc": "Write a C++ program to print an N x N grid filled with continuously increasing numbers, in row-major order.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4",
    "output": "1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16"
  },
  {
    "num": 16,
    "title": "Reverse Continuous Number Grid",
    "difficulty": "Medium",
    "category": "Basic Triangular Patterns",
    "tags": ["Number Relationships", "Grids"],
    "desc": "Write a C++ program to print an N x N grid filled with continuously decreasing numbers, starting from N x N down to 1.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4",
    "output": "16 15 14 13\n12 11 10 9\n8 7 6 5\n4 3 2 1"
  },
  {
    "num": 17,
    "title": "Increasing Alphabet Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Character Relationships", "Alphabets"],
    "desc": "Write a C++ program to print a triangle where row i contains the first i letters of the alphabet, starting from A.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "A\nAB\nABC\nABCD\nABCDE"
  },
  {
    "num": 18,
    "title": "Repeated Alphabet Triangle",
    "difficulty": "Easy",
    "category": "Basic Triangular Patterns",
    "tags": ["Character Relationships", "Alphabets"],
    "desc": "Write a C++ program to print a triangle where row i contains the i-th letter of the alphabet, repeated i times.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "A\nBB\nCCC\nDDDD\nEEEEE"
  },

  # Phase 3: Right-Aligned & Space-Based Patterns (19-28)
  {
    "num": 19,
    "title": "Right-Aligned Increasing Triangle",
    "difficulty": "Easy",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Nested Loops", "Leading Spaces"],
    "desc": "Write a C++ program to print a right-aligned triangle of * characters containing N rows.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *\n   **\n  ***\n ****\n*****"
  },
  {
    "num": 20,
    "title": "Right-Aligned Decreasing Triangle",
    "difficulty": "Easy",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Nested Loops", "Leading Spaces"],
    "desc": "Write a C++ program to print a right-aligned triangle of * characters where row i contains (N − i + 1) stars.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****\n ****\n  ***\n   **\n    *"
  },
  {
    "num": 21,
    "title": "Right-Aligned Number Triangle",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Spaces + Symbols", "Numbers"],
    "desc": "Write a C++ program to print a right-aligned triangle where row i contains the numbers 1 through i.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   12\n  123\n 1234\n12345"
  },
  {
    "num": 22,
    "title": "Right-Aligned Repeated-Number Triangle",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Spaces + Symbols", "Numbers"],
    "desc": "Write a C++ program to print a right-aligned triangle where row i contains the digit i, repeated i times.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   22\n  333\n 4444\n55555"
  },
  {
    "num": 23,
    "title": "Right-Aligned Alphabet Triangle",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Spaces + Symbols", "Alphabets"],
    "desc": "Write a C++ program to print a right-aligned triangle where row i contains the first i letters of the alphabet.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    A\n   AB\n  ABC\n ABCD\nABCDE"
  },
  {
    "num": 24,
    "title": "Increasing Spaces + Decreasing Stars",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Space-Symbol Relationship"],
    "desc": "Write a C++ program to print N rows where the number of leading spaces increases by 1 each row while the number of stars decreases correspondingly.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "6",
    "output": "******\n *****\n  ****\n   ***\n    **\n     *"
  },
  {
    "num": 25,
    "title": "Decreasing Spaces + Increasing Stars",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Space-Symbol Relationship"],
    "desc": "Write a C++ program to print N rows where the number of leading spaces decreases by 1 each row while the number of stars increases correspondingly.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "6",
    "output": "     *\n    **\n   ***\n  ****\n *****\n******"
  },
  {
    "num": 26,
    "title": "Right-Aligned Continuous Numbers",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Spaces + Symbols", "Numbers"],
    "desc": "Write a C++ program to print a right-aligned triangle where the numbers continue increasing across rows rather than resetting to 1 each row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "3",
    "output": "  1\n 23\n456"
  },
  {
    "num": 27,
    "title": "Right-Aligned Row-Number Diagonal",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Spaces + Symbols", "Diagonals"],
    "desc": "Write a C++ program to print N rows where row i contains (N − i) leading spaces followed by the number i.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   2\n  3\n 4\n5"
  },
  {
    "num": 28,
    "title": "Right-Aligned Character Anti-Diagonal",
    "difficulty": "Medium",
    "category": "Right-Aligned & Space-Based Patterns",
    "tags": ["Spaces + Symbols", "Diagonals"],
    "desc": "Write a C++ program to print N rows where row i contains (N − i) leading spaces followed by the i-th letter of the alphabet.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    A\n   B\n  C\n D\nE"
  },

  # Phase 4: Pyramid & Reverse Pyramid Patterns (29-38)
  {
    "num": 29,
    "title": "Star Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print a centered star pyramid with N rows.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *\n   ***\n  *****\n *******\n*********"
  },
  {
    "num": 30,
    "title": "Number Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where row i contains the numbers 1 through (2i − 1).\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   1 2 3\n  1 2 3 4 5\n 1 2 3 4 5 6 7\n1 2 3 4 5 6 7 8 9"
  },
  {
    "num": 31,
    "title": "Same-Number Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where every symbol in the entire pyramid is the digit 1.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   111\n  11111\n 1111111\n111111111"
  },
  {
    "num": 32,
    "title": "Row-Number Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where each row's symbol is that row's own number.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   222\n  33333\n 4444444\n555555555"
  },
  {
    "num": 33,
    "title": "Continuous-Number Pyramid (Centered)",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where row i contains the numbers 1 through i.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   1 2\n  1 2 3\n 1 2 3 4\n1 2 3 4 5"
  },
  {
    "num": 34,
    "title": "Alphabet Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where the letters continue in sequence across rows rather than resetting to A each row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    A\n   BC\n  DEF\n GHIJ\nKLMNO"
  },
  {
    "num": 35,
    "title": "Repeated-Character Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where each row's letter is repeated to fill that row's full width.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE"
  },
  {
    "num": 36,
    "title": "Reverse Star Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print an inverted centered star pyramid with N rows, widest at the top.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*********\n *******\n  *****\n   ***\n    *"
  },
  {
    "num": 37,
    "title": "Reverse Number Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print an inverted centered number pyramid with N rows, widest at the top.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7\n  1 2 3 4 5\n   1 2 3\n    1"
  },
  {
    "num": 38,
    "title": "Reverse Character Pyramid",
    "difficulty": "Medium",
    "category": "Pyramid & Reverse Pyramid Patterns",
    "tags": ["Nested Loops", "Spaces", "Symmetry"],
    "desc": "Write a C++ program to print an inverted centered pyramid with N rows using letters, widest at the top.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A"
  },

  # Phase 5: Diamond & Symmetrical Patterns (39-48)
  {
    "num": 39,
    "title": "Full Star Diamond",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Mirroring", "Diamonds"],
    "desc": "Write a C++ program to print a full star diamond built from an upper pyramid and a mirrored lower pyramid, using N as the number of rows in each half.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *"
  },
  {
    "num": 40,
    "title": "Number Diamond",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Mirroring", "Diamonds"],
    "desc": "Write a C++ program to print a full diamond using numbers 1 through (2i − 1) in each half-row, mirrored top and bottom.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   1 2 3\n  1 2 3 4 5\n 1 2 3 4 5 6 7\n1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7\n  1 2 3 4 5\n   1 2 3\n    1"
  },
  {
    "num": 41,
    "title": "Same-Number Diamond",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Mirroring", "Diamonds"],
    "desc": "Write a C++ program to print a full diamond where each row's symbol is that row's own number, mirrored top and bottom.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   222\n  33333\n 4444444\n555555555\n 4444444\n  33333\n   222\n    1"
  },
  {
    "num": 42,
    "title": "Alphabet Diamond",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Mirroring", "Diamonds"],
    "desc": "Write a C++ program to print a full diamond using letters, where each row's letter matches its row number, mirrored top and bottom.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A"
  },
  {
    "num": 43,
    "title": "Hollow Diamond",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Pattern Combination", "Diamonds"],
    "desc": "Write a C++ program to print a diamond outline made of *, hollow on the inside, using N as the number of rows in each half.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *"
  },
  {
    "num": 44,
    "title": "Inverted Hollow Diamond",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Pattern Combination"],
    "desc": "Write a C++ program to print the inverse of a hollow diamond: fill every cell of the bounding box EXCEPT the diamond-shaped region in the middle.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "**** ****\n***   ***\n**     **\n*       *\n*       *\n**     **\n***   ***\n**** ****"
  },
  {
    "num": 45,
    "title": "Combined Upper + Lower Pyramid",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Pattern Combination", "Pyramids"],
    "desc": "Write a C++ program to print an upper star pyramid immediately followed by a second, identical star pyramid directly beneath it.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *\n   ***\n  *****\n *******\n*********\n    *\n   ***\n  *****\n *******\n*********"
  },
  {
    "num": 46,
    "title": "Star Hourglass",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Mirroring", "Hourglass"],
    "desc": "Write a C++ program to print a star hourglass: a pyramid narrowing to a single star, then widening back out, using N as the widest row's half-count.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*********\n *******\n  *****\n   ***\n    *\n   ***\n  *****\n *******\n*********"
  },
  {
    "num": 47,
    "title": "Number Hourglass",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Mirroring", "Hourglass"],
    "desc": "Write a C++ program to print an hourglass shape using numbers 1 through the current row's width, narrowing to a single value and widening back out.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4",
    "output": "1 2 3 4 5 6 7\n 1 2 3 4 5\n  1 2 3\n   1\n  1 2 3\n 1 2 3 4 5\n1 2 3 4 5 6 7"
  },
  {
    "num": 48,
    "title": "Character Hourglass",
    "difficulty": "Medium",
    "category": "Diamond & Symmetrical Patterns",
    "tags": ["Symmetry", "Mirroring", "Hourglass"],
    "desc": "Write a C++ program to print an hourglass shape using letters, narrowing to a single letter and widening back out.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE"
  },

  # Phase 6: Hollow Patterns (49-58)
  {
    "num": 49,
    "title": "Hollow Square",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Squares"],
    "desc": "Write a C++ program to print a hollow square of side N, printing * only on the first row, last row, first column, and last column.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****\n*   *\n*   *\n*   *\n*****"
  },
  {
    "num": 50,
    "title": "Hollow Rectangle",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Rectangles"],
    "desc": "Write a C++ program to print a hollow rectangle with R rows and C columns, printing * only along its border.\n\n### Input\nTwo integers, denoting the number of rows and columns respectively.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4 7",
    "output": "*******\n*     *\n*     *\n*******"
  },
  {
    "num": 51,
    "title": "Hollow Left Triangle",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Triangles"],
    "desc": "Write a C++ program to print a hollow left-aligned triangle of side N, printing * only on the outer edges of the triangle.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*\n**\n* *\n*  *\n*****"
  },
  {
    "num": 52,
    "title": "Hollow Right Triangle",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Triangles"],
    "desc": "Write a C++ program to print a hollow right-aligned triangle of side N, printing * only on the outer edges of the triangle.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *\n   **\n  * *\n *  *\n*****"
  },
  {
    "num": 53,
    "title": "Hollow Inverted Triangle",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Triangles"],
    "desc": "Write a C++ program to print a hollow inverted left-aligned triangle of side N, printing * only on the outer edges.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****\n*  *\n* *\n**\n*"
  },
  {
    "num": 54,
    "title": "Hollow Pyramid",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Pyramids"],
    "desc": "Write a C++ program to print a centered pyramid of N rows that is hollow on the inside, with a solid base row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *\n   * *\n  *   *\n *     *\n*********"
  },
  {
    "num": 55,
    "title": "Hollow Inverted Pyramid",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Pyramids"],
    "desc": "Write a C++ program to print an inverted centered pyramid of N rows that is hollow on the inside, with a solid top row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*********\n *     *\n  *   *\n   * *\n    *"
  },
  {
    "num": 56,
    "title": "Wide Hollow Diamond",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Diamonds"],
    "desc": "Write a C++ program to print a flattened hollow diamond outline, twice as wide as it is tall, using N as the number of rows in each half.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "4",
    "output": "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *"
  },
  {
    "num": 57,
    "title": "Hollow Hourglass",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Hourglass"],
    "desc": "Write a C++ program to print an hourglass outline made of *, hollow on the inside, narrowing to a single point in the middle.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*********\n *     *\n  *   *\n   * *\n    *\n   * *\n  *   *\n *     *\n*********"
  },
  {
    "num": 58,
    "title": "Hollow Rhombus",
    "difficulty": "Medium",
    "category": "Hollow Patterns",
    "tags": ["Boundary Logic", "Rhombus"],
    "desc": "Write a C++ program to print a hollow rhombus of side N, slanting to the right, with * only along its border.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *****\n   *   *\n  *   *\n *   *\n*****"
  },

  # Phase 7: Rhombus, Parallelogram & Slanted Patterns (59-65)
  {
    "num": 59,
    "title": "Solid Rhombus",
    "difficulty": "Medium",
    "category": "Rhombus & Slanted Patterns",
    "tags": ["Constant Width", "Shifting Spaces"],
    "desc": "Write a C++ program to print a solid rhombus of side N, where each row shifts one space further right than the row above it.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    *****\n   *****\n  *****\n *****\n*****"
  },
  {
    "num": 60,
    "title": "Hollow Rhombus (Opposite Slant)",
    "difficulty": "Medium",
    "category": "Rhombus & Slanted Patterns",
    "tags": ["Constant Width", "Shifting Spaces"],
    "desc": "Write a C++ program to print a hollow rhombus of side N that slants in the opposite direction from a standard right-leaning rhombus.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****\n *   *\n  *   *\n   *   *\n    *****"
  },
  {
    "num": 61,
    "title": "Number Rhombus",
    "difficulty": "Medium",
    "category": "Rhombus & Slanted Patterns",
    "tags": ["Constant Width", "Shifting Spaces", "Numbers"],
    "desc": "Write a C++ program to print a solid rhombus of side N filled with the digits 1 through N repeating on every row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    12345\n   12345\n  12345\n 12345\n12345"
  },
  {
    "num": 62,
    "title": "Character Rhombus",
    "difficulty": "Medium",
    "category": "Rhombus & Slanted Patterns",
    "tags": ["Constant Width", "Shifting Spaces", "Alphabets"],
    "desc": "Write a C++ program to print a solid rhombus of side N filled with the first N letters of the alphabet on every row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    ABCDE\n   ABCDE\n  ABCDE\n ABCDE\nABCDE"
  },
  {
    "num": 63,
    "title": "Star Parallelogram",
    "difficulty": "Medium",
    "category": "Rhombus & Slanted Patterns",
    "tags": ["Slanted Structures"],
    "desc": "Write a C++ program to print a solid star parallelogram with N rows and N columns, shifting one space to the right on each row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*****\n *****\n  *****\n   *****\n    *****"
  },
  {
    "num": 64,
    "title": "Number Parallelogram",
    "difficulty": "Medium",
    "category": "Rhombus & Slanted Patterns",
    "tags": ["Slanted Structures", "Numbers"],
    "desc": "Write a C++ program to print a number parallelogram with N rows, each containing the numbers 1 through N, shifting one space to the right on each row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "12345\n 12345\n  12345\n   12345\n    12345"
  },
  {
    "num": 65,
    "title": "Hollow Parallelogram",
    "difficulty": "Medium",
    "category": "Rhombus & Slanted Patterns",
    "tags": ["Slanted Structures", "Boundary Logic"],
    "desc": "Write a C++ program to print a hollow parallelogram, wider than it is tall, shifting one space to the right on each row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "********\n *      *\n  *      *\n   *      *\n    ********"
  },

  # Phase 8: X, Plus & Cross Patterns (66-70)
  {
    "num": 66,
    "title": "X Pattern",
    "difficulty": "Medium",
    "category": "X, Plus & Cross Patterns",
    "tags": ["Diagonals", "Index Conditions"],
    "desc": "Write a C++ program to print an X pattern of side N, placing * only where row == column or row + column == N − 1.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "*     *\n *   * \n  * *  \n   *   \n  * *  \n *   * \n*     *"
  },
  {
    "num": 67,
    "title": "Hollow X Pattern",
    "difficulty": "Medium",
    "category": "X, Plus & Cross Patterns",
    "tags": ["Diagonals", "Index Conditions"],
    "desc": "Write a C++ program to print an X pattern of side N that leaves the exact center cell blank when N is odd.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "*     *\n *   * \n  * *  \n       \n  * *  \n *   * \n*     *"
  },
  {
    "num": 68,
    "title": "Plus Pattern",
    "difficulty": "Medium",
    "category": "X, Plus & Cross Patterns",
    "tags": ["Midlines", "Index Conditions"],
    "desc": "Write a C++ program to print a plus (+) pattern of side N, placing * only on the middle row or the middle column.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "   *   \n   *   \n   *   \n*******\n   *   \n   *   \n   *   "
  },
  {
    "num": 69,
    "title": "Cross Pattern",
    "difficulty": "Medium",
    "category": "X, Plus & Cross Patterns",
    "tags": ["Midlines", "Index Conditions"],
    "desc": "Write a C++ program to print a cross pattern of side N built from the middle row and middle column, leaving the exact center cell blank.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "   *   \n   *   \n   *   \n*** ***\n   *   \n   *   \n   *   "
  },
  {
    "num": 70,
    "title": "X + Plus Combined Pattern",
    "difficulty": "Medium",
    "category": "X, Plus & Cross Patterns",
    "tags": ["Combined Index Conditions"],
    "desc": "Write a C++ program to print a combined pattern of side N that places * wherever the X-pattern condition OR the plus-pattern condition is true.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "*  *  *\n * * * \n  ***  \n*******\n  ***  \n * * * \n*  *  *"
  },

  # Phase 9: Number Patterns (71-79)
  {
    "num": 71,
    "title": "Floyd's Triangle",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Continuous Numbering", "Triangles"],
    "desc": "Write a C++ program to print Floyd's Triangle with N rows, where consecutive natural numbers fill each row, continuing from the previous row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15"
  },
  {
    "num": 72,
    "title": "Reverse Floyd's Triangle",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Continuous Numbering", "Triangles"],
    "desc": "Write a C++ program to print Floyd's Triangle with N rows in reverse row order, from the widest row to the narrowest.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "11 12 13 14 15\n7 8 9 10\n4 5 6\n2 3\n1"
  },
  {
    "num": 73,
    "title": "Pascal's Triangle",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Binomial Relationships", "Combinatorics"],
    "desc": "Write a C++ program to print Pascal's Triangle with N rows, where each interior value is the sum of the two values above it.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1"
  },
  {
    "num": 74,
    "title": "Reverse Pascal-Style Pattern",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Binomial Relationships", "Combinatorics"],
    "desc": "Write a C++ program to print Pascal's Triangle with N rows in reverse row order, from the widest row to the narrowest.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1 4 6 4 1\n 1 3 3 1\n  1 2 1\n   1 1\n    1"
  },
  {
    "num": 75,
    "title": "Consecutive Number Pyramid",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Continuous Numbering", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where the numbers continue increasing across rows rather than resetting to 1 each row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   2 3\n  4 5 6\n 7 8 9 10\n11 12 13 14 15"
  },
  {
    "num": 76,
    "title": "Palindromic Number Triangle",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Palindromic Relationships", "Triangles"],
    "desc": "Write a C++ program to print a left-aligned triangle with N rows, where each row reads the same forwards and backwards, such as 1, 212, 32123.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n212\n32123\n4321234\n543212345"
  },
  {
    "num": 77,
    "title": "Palindromic Number Pyramid",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Palindromic Relationships", "Pyramids"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where each row's digits read the same forwards and backwards.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   212\n  32123\n 4321234\n543212345"
  },
  {
    "num": 78,
    "title": "Increasing-Decreasing Number Pattern",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Number Relationships", "Peak Values"],
    "desc": "Write a C++ program to print N rows where each row counts up from 1 to i and then back down to 1, without repeating the peak value.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n121\n12321\n1234321\n123454321"
  },
  {
    "num": 79,
    "title": "Multiplication-Table Pattern",
    "difficulty": "Medium",
    "category": "Number Patterns",
    "tags": ["Number Relationships", "Matrices"],
    "desc": "Write a C++ program to print an N x N grid where the value at row i, column j is the product i x j.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25"
  },

  # Phase 10: Alphabet Patterns (80-86)
  {
    "num": 80,
    "title": "Alphabet Square",
    "difficulty": "Medium",
    "category": "Alphabet Patterns",
    "tags": ["Character Arithmetic", "Squares"],
    "desc": "Write a C++ program to print an N x N square where every row displays the first N letters of the alphabet.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "ABCDE\nABCDE\nABCDE\nABCDE\nABCDE"
  },
  {
    "num": 81,
    "title": "Right-Aligned Reverse Alphabet Triangle",
    "difficulty": "Medium",
    "category": "Alphabet Patterns",
    "tags": ["Character Arithmetic", "Triangles"],
    "desc": "Write a C++ program to print a right-aligned triangle with N rows, where row i contains the last i letters of the alphabet in reverse order, starting from Z.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    Z\n   ZY\n  ZYX\n ZYXW\nZYXWV"
  },
  {
    "num": 82,
    "title": "Centered Repeated Alphabet Pyramid",
    "difficulty": "Medium",
    "category": "Alphabet Patterns",
    "tags": ["Character Arithmetic", "Pyramids"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where row i contains the i-th letter of the alphabet repeated i times.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    A\n   BB\n  CCC\n DDDD\nEEEEE"
  },
  {
    "num": 83,
    "title": "Row-wise Alphabet Pattern",
    "difficulty": "Medium",
    "category": "Alphabet Patterns",
    "tags": ["Character Arithmetic", "Rows"],
    "desc": "Write a C++ program to print N rows of width N, where every character in row i is the i-th letter of the alphabet.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "AAAAA\nBBBBB\nCCCCC\nDDDDD\nEEEEE"
  },
  {
    "num": 84,
    "title": "Continuous Alphabet Pattern",
    "difficulty": "Medium",
    "category": "Alphabet Patterns",
    "tags": ["Character Arithmetic", "Continuous"],
    "desc": "Write a C++ program to print a left-aligned triangle with N rows, where the letters continue in sequence across rows rather than resetting to A each row.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "A\nBC\nDEF\nGHIJ\nKLMNO"
  },
  {
    "num": 85,
    "title": "Reverse Alphabet Pattern",
    "difficulty": "Medium",
    "category": "Alphabet Patterns",
    "tags": ["Character Arithmetic", "Reverse"],
    "desc": "Write a C++ program to print a left-aligned triangle with N rows, where row i contains the first i letters counting backward from Z.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "Z\nZY\nZYX\nZYXW\nZYXWV"
  },
  {
    "num": 86,
    "title": "Palindromic Alphabet Pyramid",
    "difficulty": "Medium",
    "category": "Alphabet Patterns",
    "tags": ["Character Arithmetic", "Symmetry"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where each row's letters mirror around a central letter, such as A, BAB, CBABC.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    A\n   BAB\n  CBABC\n DCBABCD\nEDCBABCDE"
  },

  # Phase 11: Binary & Alternating Patterns (87-91)
  {
    "num": 87,
    "title": "Binary Square",
    "difficulty": "Medium",
    "category": "Binary & Alternating Patterns",
    "tags": ["(row + column) % 2", "Binary"],
    "desc": "Write a C++ program to print an N x N grid of 0s and 1s, where the value at each cell is (row + column) % 2.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "01010\n10101\n01010\n10101\n01010"
  },
  {
    "num": 88,
    "title": "Binary Triangle",
    "difficulty": "Medium",
    "category": "Binary & Alternating Patterns",
    "tags": ["(row + column) % 2", "Binary"],
    "desc": "Write a C++ program to print a left-aligned triangle with N rows, where each cell's value is (row + column) % 2.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "1\n01\n101\n0101\n10101"
  },
  {
    "num": 89,
    "title": "Alternating 0/1 by Column",
    "difficulty": "Medium",
    "category": "Binary & Alternating Patterns",
    "tags": ["Alternating Values", "Columns"],
    "desc": "Write a C++ program to print an N x N grid where every row repeats the pattern 0, 1, 0, 1 based on the column index.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "01010\n01010\n01010\n01010\n01010"
  },
  {
    "num": 90,
    "title": "Alternating 0/1 by Row",
    "difficulty": "Medium",
    "category": "Binary & Alternating Patterns",
    "tags": ["Alternating Values", "Rows"],
    "desc": "Write a C++ program to print an N x N grid where each full row is either all 0s or all 1s, alternating based on the row index.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "00000\n11111\n00000\n11111\n00000"
  },
  {
    "num": 91,
    "title": "Checkerboard Pattern",
    "difficulty": "Medium",
    "category": "Binary & Alternating Patterns",
    "tags": ["(row + column) % 2", "Checkerboard"],
    "desc": "Write a C++ program to print an N x N checkerboard, placing * on cells where (row + column) is even and a space otherwise.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "6",
    "output": "* * * \n * * *\n* * * \n * * *\n* * * \n * * *"
  },

  # Phase 12: Advanced Mixed Patterns (92-95)
  {
    "num": 92,
    "title": "Butterfly Pattern",
    "difficulty": "Medium",
    "category": "Advanced Mixed Patterns",
    "tags": ["Symmetry", "Combined Halves", "Butterfly"],
    "desc": "Write a C++ program to print a solid butterfly pattern with N rows in its upper half, mirrored to form the lower half.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*        *\n**      **\n***    ***\n****  ****\n**********\n**********\n****  ****\n***    ***\n**      **\n*        *"
  },
  {
    "num": 93,
    "title": "Hollow Butterfly",
    "difficulty": "Medium",
    "category": "Advanced Mixed Patterns",
    "tags": ["Symmetry", "Boundary Logic", "Butterfly"],
    "desc": "Write a C++ program to print a hollow butterfly pattern with N rows in its upper half, printing * only along the outer edges of each wing.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "*        *\n**      **\n* *    * *\n*  *  *  *\n*   **   *\n*  *  *  *\n* *    * *\n**      **\n*        *"
  },
  {
    "num": 94,
    "title": "Sandglass Pattern",
    "difficulty": "Medium",
    "category": "Advanced Mixed Patterns",
    "tags": ["Symmetry", "Linear Taper", "Sandglass"],
    "desc": "Write a C++ program to print a right-aligned sandglass pattern using the # character, tapering by exactly one column per row down to a single #, then widening back out.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "#####\n ####\n  ###\n   ##\n    #\n   ##\n  ###\n ####\n#####"
  },
  {
    "num": 95,
    "title": "Mixed Number/Character Symmetric Pattern",
    "difficulty": "Medium",
    "category": "Advanced Mixed Patterns",
    "tags": ["Mixed Symbol Types", "Pyramids"],
    "desc": "Write a C++ program to print a centered pyramid with N rows, where each position alternates between a digit and a letter depending on whether its position is odd or even.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   1B\n  1B3\n 1B3D\n1B3D5"
  },

  # Phase 13: Concentric & Layer Patterns (96-98)
  {
    "num": 96,
    "title": "Concentric Number Square",
    "difficulty": "Hard",
    "category": "Concentric & Layer Patterns",
    "tags": ["Layer/Boundary Logic", "Concentric"],
    "desc": "Write a C++ program to print an N x N grid where each cell's value depends on its distance from the nearest edge, forming concentric numbered rings.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "4444444\n4333334\n4322234\n4321234\n4322234\n4333334\n4444444"
  },
  {
    "num": 97,
    "title": "Concentric Character Pattern",
    "difficulty": "Hard",
    "category": "Concentric & Layer Patterns",
    "tags": ["Layer/Boundary Logic", "Concentric"],
    "desc": "Write a C++ program to print an N x N grid of concentric letter rings, where the outermost ring is A, the next ring is B, and so on toward the center.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "AAAAAAA\nABBBBBA\nABCCCBA\nABCDCBA\nABCCCBA\nABBBBBA\nAAAAAAA"
  },
  {
    "num": 98,
    "title": "Layer-Based Boundary Pattern",
    "difficulty": "Hard",
    "category": "Concentric & Layer Patterns",
    "tags": ["Layer/Boundary Logic", "Concentric"],
    "desc": "Write a C++ program to print an N x N grid of concentric rings where even-numbered rings (counting outward from 0) show a digit and odd-numbered rings show *.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "7",
    "output": "1111111\n1*****1\n1*333*1\n1*3*3*1\n1*333*1\n1*****1\n1111111"
  },

  # Phase 14: Spiral / Matrix-Style Patterns (99)
  {
    "num": 99,
    "title": "Introductory Spiral Matrix Pattern",
    "difficulty": "Hard",
    "category": "Spiral / Matrix-Style Patterns",
    "tags": ["Spiral Filling", "Matrix"],
    "desc": "Write a C++ program to fill an N x N grid with the numbers 1 through N x N in a continuous clockwise spiral, starting from the top-left corner.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": " 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9"
  },

  # Phase 15: Final Pattern Design Challenge (100)
  {
    "num": 100,
    "title": "Final Pattern Design Challenge",
    "difficulty": "Hard",
    "category": "Final Pattern Design Challenge",
    "tags": ["Rows", "Columns", "Spaces", "Symmetry", "Conditions"],
    "desc": "Write a C++ program to print a diamond-shaped pattern of side N where each concentric layer alternates between a digit (even layers) and a letter (odd layers), with the digit or letter value determined by that layer's distance from the outer edge.\n\n### Input\nA single integer N, denoting the size of the pattern.\n\n### Output\nPrint the pattern for the given input, matching Expected Output exactly.",
    "input": "5",
    "output": "    1\n   1B1\n  1B3B1\n 1B3D3B1\n1B3D5D3B1\n 1B3D3B1\n  1B3B1\n   1B1\n    1"
  }
]

problems_list = []
sql_inserts = []

for p in raw_problems_data:
    num_str = f"{p['num']:03d}"
    uuid_str = f"00000000-0000-4000-8000-{p['num']:012d}"
    slug = f"pattern-{num_str}-{p['title'].lower().replace(' ', '-').replace('/', '-').replace('&', 'and')}"
    
    starter_templates = {
        "cpp": f"#include <iostream>\nusing namespace std;\n\n// Problem {num_str}: {p['title']}\nint main() {{\n    int n = {p['input'].split()[0]};\n    // Write your code here to print the pattern\n    return 0;\n}}\n",
        "python": f"# Problem {num_str}: {p['title']}\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern({p['input'].split()[0]})\n",
        "javascript": f"// Problem {num_str}: {p['title']}\nfunction printPattern(n) {{\n    // Write your code here\n}}\n\nprintPattern({p['input'].split()[0]});\n",
        "java": f"import java.util.*;\n\npublic class Solution {{\n    // Problem {num_str}: {p['title']}\n    public static void main(String[] args) {{\n        int n = {p['input'].split()[0]};\n        // Write your code here\n    }}\n}}\n"
    }

    sample_test_cases = [
        {
            "input": p["input"],
            "output": p["output"],
            "explanation": f"Pattern for N = {p['input']}"
        }
    ]

    prob_obj = {
        "id": uuid_str,
        "title": f"#{num_str} {p['title']}",
        "slug": slug,
        "description": p["desc"],
        "difficulty": p["difficulty"],
        "category": p["category"],
        "tags": p["tags"],
        "source": "pdf_upload",
        "status": "not_started",
        "sample_test_cases": sample_test_cases,
        "starter_templates": starter_templates
    }
    problems_list.append(prob_obj)

    # SQL Row
    tags_sql = "array[" + ", ".join([f"'{t}'" for t in p['tags']]) + "]::text[]"
    desc_sql = p['desc'].replace("'", "''")
    title_sql = f"#{num_str} {p['title']}".replace("'", "''")
    cases_json = json.dumps(sample_test_cases).replace("'", "''")
    templates_json = json.dumps(starter_templates).replace("'", "''")

    sql_row = f"""(
  '{uuid_str}',
  '{title_sql}',
  '{slug}',
  '{desc_sql}',
  '{p['difficulty']}',
  '{p['category']}',
  {tags_sql},
  'pdf_upload',
  '{cases_json}'::jsonb,
  '{templates_json}'::jsonb
)"""
    sql_inserts.append(sql_row)

# Write TypeScript file
with open('src/lib/all100Problems.ts', 'w') as f:
    f.write("import { Problem } from '../types/problem';\n\n")
    f.write(f"export const ALL_100_PROBLEMS: Problem[] = {json.dumps(problems_list, indent=2)};\n")

print(f"Generated {len(problems_list)} problems in src/lib/all100Problems.ts")

# Write SQL append
with open('supabase/insert_100_problems.sql', 'w') as f:
    f.write("-- ==============================================================================\n")
    f.write("-- 100 PATTERN PRINTING PROBLEMS - BULK INSERT SCRIPT FOR SUPABASE\n")
    f.write("-- ==============================================================================\n\n")
    f.write("insert into public.problems (id, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)\nvalues\n")
    f.write(",\n".join(sql_inserts))
    f.write("\non conflict (id) do update set\n")
    f.write("  title = excluded.title,\n  description = excluded.description,\n  difficulty = excluded.difficulty,\n  category = excluded.category,\n  tags = excluded.tags,\n  sample_test_cases = excluded.sample_test_cases,\n  starter_templates = excluded.starter_templates;\n")

print("Generated supabase/insert_100_problems.sql")
