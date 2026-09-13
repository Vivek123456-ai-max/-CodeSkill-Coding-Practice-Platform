-- ==============================================================================
-- 100 PATTERN PRINTING PROBLEMS - BULK INSERT SCRIPT FOR SUPABASE
-- ==============================================================================

insert into public.problems (id, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)
values
(
  '00000000-0000-4000-8000-000000000001',
  '#001 Row of Stars',
  'pattern-001-row-of-stars',
  'Write a C++ program to print a single row of N stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Rows', 'Basic Loop', 'Pattern']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 001: Row of Stars\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 001: Row of Stars\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 001: Row of Stars\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 001: Row of Stars\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000002',
  '#002 Column of Stars',
  'pattern-002-column-of-stars',
  'Write a C++ program to print a single column of N stars, one star per line.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Columns', 'Basic Loop', 'Pattern']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*\n*\n*\n*\n*", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 002: Column of Stars\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 002: Column of Stars\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 002: Column of Stars\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 002: Column of Stars\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000003',
  '#003 Solid Square',
  'pattern-003-solid-square',
  'Write a C++ program to print a square pattern of * with N rows and N columns.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Nested Loops', 'Rows & Columns', 'Pattern']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****\n*****\n*****\n*****\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 003: Solid Square\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 003: Solid Square\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 003: Solid Square\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 003: Solid Square\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000004',
  '#004 Solid Rectangle',
  'pattern-004-solid-rectangle',
  'Write a C++ program to print a solid rectangle of * with R rows and C columns.

### Input
Two integers, denoting the number of rows and columns respectively.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Nested Loops', 'Rows & Columns', 'Pattern']::text[],
  'pdf_upload',
  '[{"input": "4 7", "output": "*******\n*******\n*******\n*******", "explanation": "Pattern for N = 4 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 004: Solid Rectangle\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 004: Solid Rectangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 004: Solid Rectangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 004: Solid Rectangle\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000005',
  '#005 Increasing Stars Row-wise',
  'pattern-005-increasing-stars-row-wise',
  'Write a C++ program to print N rows where row i contains exactly i stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Row/Column Relationship', 'Pattern']::text[],
  'pdf_upload',
  '[{"input": "4", "output": "*\n**\n***\n****", "explanation": "Pattern for N = 4"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 005: Increasing Stars Row-wise\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 005: Increasing Stars Row-wise\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 005: Increasing Stars Row-wise\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 005: Increasing Stars Row-wise\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000006',
  '#006 Decreasing Stars Row-wise',
  'pattern-006-decreasing-stars-row-wise',
  'Write a C++ program to print N rows where row i contains exactly (N − i + 1) stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Row/Column Relationship', 'Pattern']::text[],
  'pdf_upload',
  '[{"input": "4", "output": "****\n***\n**\n*", "explanation": "Pattern for N = 4"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 006: Decreasing Stars Row-wise\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 006: Decreasing Stars Row-wise\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 006: Decreasing Stars Row-wise\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 006: Decreasing Stars Row-wise\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000007',
  '#007 Increasing Numbers Row-wise',
  'pattern-007-increasing-numbers-row-wise',
  'Write a C++ program to print N rows where each row displays only its own row number.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Row/Column Relationship', 'Numbers']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n2\n3\n4\n5", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 007: Increasing Numbers Row-wise\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 007: Increasing Numbers Row-wise\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 007: Increasing Numbers Row-wise\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 007: Increasing Numbers Row-wise\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000008',
  '#008 Repeated Row-Number Square',
  'pattern-008-repeated-row-number-square',
  'Write a C++ program to print an N x N block where every cell in row i contains the digit i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Nested Loops', 'Row-Dependent Value', 'Numbers']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "11111\n22222\n33333\n44444\n55555", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 008: Repeated Row-Number Square\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 008: Repeated Row-Number Square\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 008: Repeated Row-Number Square\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 008: Repeated Row-Number Square\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000009',
  '#009 Left-Aligned Increasing Star Triangle',
  'pattern-009-left-aligned-increasing-star-triangle',
  'Write a C++ program to print a left-aligned triangle where row i contains i stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Row-Dependent Inner Loop', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*\n**\n***\n****\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 009: Left-Aligned Increasing Star Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 009: Left-Aligned Increasing Star Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 009: Left-Aligned Increasing Star Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 009: Left-Aligned Increasing Star Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000010',
  '#010 Left-Aligned Decreasing Star Triangle',
  'pattern-010-left-aligned-decreasing-star-triangle',
  'Write a C++ program to print a left-aligned triangle where row i contains (N − i + 1) stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Row-Dependent Inner Loop', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****\n****\n***\n**\n*", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 010: Left-Aligned Decreasing Star Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 010: Left-Aligned Decreasing Star Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 010: Left-Aligned Decreasing Star Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 010: Left-Aligned Decreasing Star Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000011',
  '#011 Increasing Number Triangle',
  'pattern-011-increasing-number-triangle',
  'Write a C++ program to print a triangle where row i contains the numbers 1 through i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n12\n123\n1234\n12345", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 011: Increasing Number Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 011: Increasing Number Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 011: Increasing Number Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 011: Increasing Number Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000012',
  '#012 Repeated-Digit Triangle',
  'pattern-012-repeated-digit-triangle',
  'Write a C++ program to print a triangle where row i contains the digit 1 repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n11\n111\n1111\n11111", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 012: Repeated-Digit Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 012: Repeated-Digit Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 012: Repeated-Digit Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 012: Repeated-Digit Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000013',
  '#013 Row-Number Triangle',
  'pattern-013-row-number-triangle',
  'Write a C++ program to print a triangle where row i contains the row''s own number, repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n22\n333\n4444\n55555", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 013: Row-Number Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 013: Row-Number Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 013: Row-Number Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 013: Row-Number Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000014',
  '#014 Column-Number Diagonal Triangle',
  'pattern-014-column-number-diagonal-triangle',
  'Write a C++ program to print N rows where row i contains (i − 1) leading spaces followed by the number i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Row/Column Relationship', 'Diagonals']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n 2\n  3\n   4\n    5", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 014: Column-Number Diagonal Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 014: Column-Number Diagonal Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 014: Column-Number Diagonal Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 014: Column-Number Diagonal Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000015',
  '#015 Continuous Number Grid',
  'pattern-015-continuous-number-grid',
  'Write a C++ program to print an N x N grid filled with continuously increasing numbers, in row-major order.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Grids']::text[],
  'pdf_upload',
  '[{"input": "4", "output": "1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16", "explanation": "Pattern for N = 4"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 015: Continuous Number Grid\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 015: Continuous Number Grid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 015: Continuous Number Grid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 015: Continuous Number Grid\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000016',
  '#016 Reverse Continuous Number Grid',
  'pattern-016-reverse-continuous-number-grid',
  'Write a C++ program to print an N x N grid filled with continuously decreasing numbers, starting from N x N down to 1.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Grids']::text[],
  'pdf_upload',
  '[{"input": "4", "output": "16 15 14 13\n12 11 10 9\n8 7 6 5\n4 3 2 1", "explanation": "Pattern for N = 4"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 016: Reverse Continuous Number Grid\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 016: Reverse Continuous Number Grid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 016: Reverse Continuous Number Grid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 016: Reverse Continuous Number Grid\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000017',
  '#017 Increasing Alphabet Triangle',
  'pattern-017-increasing-alphabet-triangle',
  'Write a C++ program to print a triangle where row i contains the first i letters of the alphabet, starting from A.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Character Relationships', 'Alphabets']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "A\nAB\nABC\nABCD\nABCDE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 017: Increasing Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 017: Increasing Alphabet Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 017: Increasing Alphabet Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 017: Increasing Alphabet Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000018',
  '#018 Repeated Alphabet Triangle',
  'pattern-018-repeated-alphabet-triangle',
  'Write a C++ program to print a triangle where row i contains the i-th letter of the alphabet, repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Character Relationships', 'Alphabets']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "A\nBB\nCCC\nDDDD\nEEEEE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 018: Repeated Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 018: Repeated Alphabet Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 018: Repeated Alphabet Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 018: Repeated Alphabet Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000019',
  '#019 Right-Aligned Increasing Triangle',
  'pattern-019-right-aligned-increasing-triangle',
  'Write a C++ program to print a right-aligned triangle of * characters containing N rows.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Right-Aligned & Space-Based Patterns',
  array['Nested Loops', 'Leading Spaces']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *\n   **\n  ***\n ****\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 019: Right-Aligned Increasing Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 019: Right-Aligned Increasing Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 019: Right-Aligned Increasing Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 019: Right-Aligned Increasing Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000020',
  '#020 Right-Aligned Decreasing Triangle',
  'pattern-020-right-aligned-decreasing-triangle',
  'Write a C++ program to print a right-aligned triangle of * characters where row i contains (N − i + 1) stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Right-Aligned & Space-Based Patterns',
  array['Nested Loops', 'Leading Spaces']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****\n ****\n  ***\n   **\n    *", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 020: Right-Aligned Decreasing Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 020: Right-Aligned Decreasing Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 020: Right-Aligned Decreasing Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 020: Right-Aligned Decreasing Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000021',
  '#021 Right-Aligned Number Triangle',
  'pattern-021-right-aligned-number-triangle',
  'Write a C++ program to print a right-aligned triangle where row i contains the numbers 1 through i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Numbers']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   12\n  123\n 1234\n12345", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 021: Right-Aligned Number Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 021: Right-Aligned Number Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 021: Right-Aligned Number Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 021: Right-Aligned Number Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000022',
  '#022 Right-Aligned Repeated-Number Triangle',
  'pattern-022-right-aligned-repeated-number-triangle',
  'Write a C++ program to print a right-aligned triangle where row i contains the digit i, repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Numbers']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   22\n  333\n 4444\n55555", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 022: Right-Aligned Repeated-Number Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 022: Right-Aligned Repeated-Number Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 022: Right-Aligned Repeated-Number Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 022: Right-Aligned Repeated-Number Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000023',
  '#023 Right-Aligned Alphabet Triangle',
  'pattern-023-right-aligned-alphabet-triangle',
  'Write a C++ program to print a right-aligned triangle where row i contains the first i letters of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Alphabets']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    A\n   AB\n  ABC\n ABCD\nABCDE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 023: Right-Aligned Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 023: Right-Aligned Alphabet Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 023: Right-Aligned Alphabet Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 023: Right-Aligned Alphabet Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000024',
  '#024 Increasing Spaces + Decreasing Stars',
  'pattern-024-increasing-spaces-+-decreasing-stars',
  'Write a C++ program to print N rows where the number of leading spaces increases by 1 each row while the number of stars decreases correspondingly.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Space-Symbol Relationship']::text[],
  'pdf_upload',
  '[{"input": "6", "output": "******\n *****\n  ****\n   ***\n    **\n     *", "explanation": "Pattern for N = 6"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 024: Increasing Spaces + Decreasing Stars\nint main() {\n    int n = 6;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 024: Increasing Spaces + Decreasing Stars\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(6)\n", "javascript": "// Problem 024: Increasing Spaces + Decreasing Stars\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(6);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 024: Increasing Spaces + Decreasing Stars\n    public static void main(String[] args) {\n        int n = 6;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000025',
  '#025 Decreasing Spaces + Increasing Stars',
  'pattern-025-decreasing-spaces-+-increasing-stars',
  'Write a C++ program to print N rows where the number of leading spaces decreases by 1 each row while the number of stars increases correspondingly.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Space-Symbol Relationship']::text[],
  'pdf_upload',
  '[{"input": "6", "output": "     *\n    **\n   ***\n  ****\n *****\n******", "explanation": "Pattern for N = 6"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 025: Decreasing Spaces + Increasing Stars\nint main() {\n    int n = 6;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 025: Decreasing Spaces + Increasing Stars\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(6)\n", "javascript": "// Problem 025: Decreasing Spaces + Increasing Stars\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(6);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 025: Decreasing Spaces + Increasing Stars\n    public static void main(String[] args) {\n        int n = 6;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000026',
  '#026 Right-Aligned Continuous Numbers',
  'pattern-026-right-aligned-continuous-numbers',
  'Write a C++ program to print a right-aligned triangle where the numbers continue increasing across rows rather than resetting to 1 each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Numbers']::text[],
  'pdf_upload',
  '[{"input": "3", "output": "  1\n 23\n456", "explanation": "Pattern for N = 3"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 026: Right-Aligned Continuous Numbers\nint main() {\n    int n = 3;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 026: Right-Aligned Continuous Numbers\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(3)\n", "javascript": "// Problem 026: Right-Aligned Continuous Numbers\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(3);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 026: Right-Aligned Continuous Numbers\n    public static void main(String[] args) {\n        int n = 3;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000027',
  '#027 Right-Aligned Row-Number Diagonal',
  'pattern-027-right-aligned-row-number-diagonal',
  'Write a C++ program to print N rows where row i contains (N − i) leading spaces followed by the number i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Diagonals']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   2\n  3\n 4\n5", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 027: Right-Aligned Row-Number Diagonal\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 027: Right-Aligned Row-Number Diagonal\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 027: Right-Aligned Row-Number Diagonal\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 027: Right-Aligned Row-Number Diagonal\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000028',
  '#028 Right-Aligned Character Anti-Diagonal',
  'pattern-028-right-aligned-character-anti-diagonal',
  'Write a C++ program to print N rows where row i contains (N − i) leading spaces followed by the i-th letter of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Diagonals']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    A\n   B\n  C\n D\nE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 028: Right-Aligned Character Anti-Diagonal\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 028: Right-Aligned Character Anti-Diagonal\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 028: Right-Aligned Character Anti-Diagonal\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 028: Right-Aligned Character Anti-Diagonal\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000029',
  '#029 Star Pyramid',
  'pattern-029-star-pyramid',
  'Write a C++ program to print a centered star pyramid with N rows.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *\n   ***\n  *****\n *******\n*********", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 029: Star Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 029: Star Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 029: Star Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 029: Star Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000030',
  '#030 Number Pyramid',
  'pattern-030-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where row i contains the numbers 1 through (2i − 1).

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   1 2 3\n  1 2 3 4 5\n 1 2 3 4 5 6 7\n1 2 3 4 5 6 7 8 9", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 030: Number Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 030: Number Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 030: Number Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 030: Number Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000031',
  '#031 Same-Number Pyramid',
  'pattern-031-same-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where every symbol in the entire pyramid is the digit 1.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   111\n  11111\n 1111111\n111111111", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 031: Same-Number Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 031: Same-Number Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 031: Same-Number Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 031: Same-Number Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000032',
  '#032 Row-Number Pyramid',
  'pattern-032-row-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s symbol is that row''s own number.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   222\n  33333\n 4444444\n555555555", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 032: Row-Number Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 032: Row-Number Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 032: Row-Number Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 032: Row-Number Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000033',
  '#033 Continuous-Number Pyramid (Centered)',
  'pattern-033-continuous-number-pyramid-(centered)',
  'Write a C++ program to print a centered pyramid with N rows, where row i contains the numbers 1 through i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   1 2\n  1 2 3\n 1 2 3 4\n1 2 3 4 5", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 033: Continuous-Number Pyramid (Centered)\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 033: Continuous-Number Pyramid (Centered)\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 033: Continuous-Number Pyramid (Centered)\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 033: Continuous-Number Pyramid (Centered)\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000034',
  '#034 Alphabet Pyramid',
  'pattern-034-alphabet-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where the letters continue in sequence across rows rather than resetting to A each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    A\n   BC\n  DEF\n GHIJ\nKLMNO", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 034: Alphabet Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 034: Alphabet Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 034: Alphabet Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 034: Alphabet Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000035',
  '#035 Repeated-Character Pyramid',
  'pattern-035-repeated-character-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s letter is repeated to fill that row''s full width.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 035: Repeated-Character Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 035: Repeated-Character Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 035: Repeated-Character Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 035: Repeated-Character Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000036',
  '#036 Reverse Star Pyramid',
  'pattern-036-reverse-star-pyramid',
  'Write a C++ program to print an inverted centered star pyramid with N rows, widest at the top.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*********\n *******\n  *****\n   ***\n    *", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 036: Reverse Star Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 036: Reverse Star Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 036: Reverse Star Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 036: Reverse Star Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000037',
  '#037 Reverse Number Pyramid',
  'pattern-037-reverse-number-pyramid',
  'Write a C++ program to print an inverted centered number pyramid with N rows, widest at the top.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7\n  1 2 3 4 5\n   1 2 3\n    1", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 037: Reverse Number Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 037: Reverse Number Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 037: Reverse Number Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 037: Reverse Number Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000038',
  '#038 Reverse Character Pyramid',
  'pattern-038-reverse-character-pyramid',
  'Write a C++ program to print an inverted centered pyramid with N rows using letters, widest at the top.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 038: Reverse Character Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 038: Reverse Character Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 038: Reverse Character Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 038: Reverse Character Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000039',
  '#039 Full Star Diamond',
  'pattern-039-full-star-diamond',
  'Write a C++ program to print a full star diamond built from an upper pyramid and a mirrored lower pyramid, using N as the number of rows in each half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 039: Full Star Diamond\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 039: Full Star Diamond\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 039: Full Star Diamond\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 039: Full Star Diamond\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000040',
  '#040 Number Diamond',
  'pattern-040-number-diamond',
  'Write a C++ program to print a full diamond using numbers 1 through (2i − 1) in each half-row, mirrored top and bottom.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   1 2 3\n  1 2 3 4 5\n 1 2 3 4 5 6 7\n1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7\n  1 2 3 4 5\n   1 2 3\n    1", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 040: Number Diamond\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 040: Number Diamond\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 040: Number Diamond\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 040: Number Diamond\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000041',
  '#041 Same-Number Diamond',
  'pattern-041-same-number-diamond',
  'Write a C++ program to print a full diamond where each row''s symbol is that row''s own number, mirrored top and bottom.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   222\n  33333\n 4444444\n555555555\n 4444444\n  33333\n   222\n    1", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 041: Same-Number Diamond\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 041: Same-Number Diamond\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 041: Same-Number Diamond\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 041: Same-Number Diamond\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000042',
  '#042 Alphabet Diamond',
  'pattern-042-alphabet-diamond',
  'Write a C++ program to print a full diamond using letters, where each row''s letter matches its row number, mirrored top and bottom.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 042: Alphabet Diamond\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 042: Alphabet Diamond\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 042: Alphabet Diamond\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 042: Alphabet Diamond\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000043',
  '#043 Hollow Diamond',
  'pattern-043-hollow-diamond',
  'Write a C++ program to print a diamond outline made of *, hollow on the inside, using N as the number of rows in each half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Pattern Combination', 'Diamonds']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 043: Hollow Diamond\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 043: Hollow Diamond\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 043: Hollow Diamond\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 043: Hollow Diamond\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000044',
  '#044 Inverted Hollow Diamond',
  'pattern-044-inverted-hollow-diamond',
  'Write a C++ program to print the inverse of a hollow diamond: fill every cell of the bounding box EXCEPT the diamond-shaped region in the middle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Pattern Combination']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "**** ****\n***   ***\n**     **\n*       *\n*       *\n**     **\n***   ***\n**** ****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 044: Inverted Hollow Diamond\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 044: Inverted Hollow Diamond\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 044: Inverted Hollow Diamond\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 044: Inverted Hollow Diamond\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000045',
  '#045 Combined Upper + Lower Pyramid',
  'pattern-045-combined-upper-+-lower-pyramid',
  'Write a C++ program to print an upper star pyramid immediately followed by a second, identical star pyramid directly beneath it.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Pattern Combination', 'Pyramids']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *\n   ***\n  *****\n *******\n*********\n    *\n   ***\n  *****\n *******\n*********", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 045: Combined Upper + Lower Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 045: Combined Upper + Lower Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 045: Combined Upper + Lower Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 045: Combined Upper + Lower Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000046',
  '#046 Star Hourglass',
  'pattern-046-star-hourglass',
  'Write a C++ program to print a star hourglass: a pyramid narrowing to a single star, then widening back out, using N as the widest row''s half-count.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Hourglass']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*********\n *******\n  *****\n   ***\n    *\n   ***\n  *****\n *******\n*********", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 046: Star Hourglass\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 046: Star Hourglass\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 046: Star Hourglass\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 046: Star Hourglass\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000047',
  '#047 Number Hourglass',
  'pattern-047-number-hourglass',
  'Write a C++ program to print an hourglass shape using numbers 1 through the current row''s width, narrowing to a single value and widening back out.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Hourglass']::text[],
  'pdf_upload',
  '[{"input": "4", "output": "1 2 3 4 5 6 7\n 1 2 3 4 5\n  1 2 3\n   1\n  1 2 3\n 1 2 3 4 5\n1 2 3 4 5 6 7", "explanation": "Pattern for N = 4"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 047: Number Hourglass\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 047: Number Hourglass\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 047: Number Hourglass\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 047: Number Hourglass\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000048',
  '#048 Character Hourglass',
  'pattern-048-character-hourglass',
  'Write a C++ program to print an hourglass shape using letters, narrowing to a single letter and widening back out.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Hourglass']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 048: Character Hourglass\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 048: Character Hourglass\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 048: Character Hourglass\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 048: Character Hourglass\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000049',
  '#049 Hollow Square',
  'pattern-049-hollow-square',
  'Write a C++ program to print a hollow square of side N, printing * only on the first row, last row, first column, and last column.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Squares']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****\n*   *\n*   *\n*   *\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 049: Hollow Square\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 049: Hollow Square\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 049: Hollow Square\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 049: Hollow Square\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000050',
  '#050 Hollow Rectangle',
  'pattern-050-hollow-rectangle',
  'Write a C++ program to print a hollow rectangle with R rows and C columns, printing * only along its border.

### Input
Two integers, denoting the number of rows and columns respectively.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Rectangles']::text[],
  'pdf_upload',
  '[{"input": "4 7", "output": "*******\n*     *\n*     *\n*******", "explanation": "Pattern for N = 4 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 050: Hollow Rectangle\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 050: Hollow Rectangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 050: Hollow Rectangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 050: Hollow Rectangle\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000051',
  '#051 Hollow Left Triangle',
  'pattern-051-hollow-left-triangle',
  'Write a C++ program to print a hollow left-aligned triangle of side N, printing * only on the outer edges of the triangle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*\n**\n* *\n*  *\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 051: Hollow Left Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 051: Hollow Left Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 051: Hollow Left Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 051: Hollow Left Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000052',
  '#052 Hollow Right Triangle',
  'pattern-052-hollow-right-triangle',
  'Write a C++ program to print a hollow right-aligned triangle of side N, printing * only on the outer edges of the triangle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *\n   **\n  * *\n *  *\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 052: Hollow Right Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 052: Hollow Right Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 052: Hollow Right Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 052: Hollow Right Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000053',
  '#053 Hollow Inverted Triangle',
  'pattern-053-hollow-inverted-triangle',
  'Write a C++ program to print a hollow inverted left-aligned triangle of side N, printing * only on the outer edges.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****\n*  *\n* *\n**\n*", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 053: Hollow Inverted Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 053: Hollow Inverted Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 053: Hollow Inverted Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 053: Hollow Inverted Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000054',
  '#054 Hollow Pyramid',
  'pattern-054-hollow-pyramid',
  'Write a C++ program to print a centered pyramid of N rows that is hollow on the inside, with a solid base row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Pyramids']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *\n   * *\n  *   *\n *     *\n*********", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 054: Hollow Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 054: Hollow Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 054: Hollow Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 054: Hollow Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000055',
  '#055 Hollow Inverted Pyramid',
  'pattern-055-hollow-inverted-pyramid',
  'Write a C++ program to print an inverted centered pyramid of N rows that is hollow on the inside, with a solid top row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Pyramids']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*********\n *     *\n  *   *\n   * *\n    *", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 055: Hollow Inverted Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 055: Hollow Inverted Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 055: Hollow Inverted Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 055: Hollow Inverted Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000056',
  '#056 Wide Hollow Diamond',
  'pattern-056-wide-hollow-diamond',
  'Write a C++ program to print a flattened hollow diamond outline, twice as wide as it is tall, using N as the number of rows in each half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Diamonds']::text[],
  'pdf_upload',
  '[{"input": "4", "output": "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *", "explanation": "Pattern for N = 4"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 056: Wide Hollow Diamond\nint main() {\n    int n = 4;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 056: Wide Hollow Diamond\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(4)\n", "javascript": "// Problem 056: Wide Hollow Diamond\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 056: Wide Hollow Diamond\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000057',
  '#057 Hollow Hourglass',
  'pattern-057-hollow-hourglass',
  'Write a C++ program to print an hourglass outline made of *, hollow on the inside, narrowing to a single point in the middle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Hourglass']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*********\n *     *\n  *   *\n   * *\n    *\n   * *\n  *   *\n *     *\n*********", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 057: Hollow Hourglass\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 057: Hollow Hourglass\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 057: Hollow Hourglass\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 057: Hollow Hourglass\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000058',
  '#058 Hollow Rhombus',
  'pattern-058-hollow-rhombus',
  'Write a C++ program to print a hollow rhombus of side N, slanting to the right, with * only along its border.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Rhombus']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *****\n   *   *\n  *   *\n *   *\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 058: Hollow Rhombus\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 058: Hollow Rhombus\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 058: Hollow Rhombus\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 058: Hollow Rhombus\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000059',
  '#059 Solid Rhombus',
  'pattern-059-solid-rhombus',
  'Write a C++ program to print a solid rhombus of side N, where each row shifts one space further right than the row above it.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    *****\n   *****\n  *****\n *****\n*****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 059: Solid Rhombus\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 059: Solid Rhombus\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 059: Solid Rhombus\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 059: Solid Rhombus\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000060',
  '#060 Hollow Rhombus (Opposite Slant)',
  'pattern-060-hollow-rhombus-(opposite-slant)',
  'Write a C++ program to print a hollow rhombus of side N that slants in the opposite direction from a standard right-leaning rhombus.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****\n *   *\n  *   *\n   *   *\n    *****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 060: Hollow Rhombus (Opposite Slant)\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 060: Hollow Rhombus (Opposite Slant)\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 060: Hollow Rhombus (Opposite Slant)\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 060: Hollow Rhombus (Opposite Slant)\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000061',
  '#061 Number Rhombus',
  'pattern-061-number-rhombus',
  'Write a C++ program to print a solid rhombus of side N filled with the digits 1 through N repeating on every row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces', 'Numbers']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    12345\n   12345\n  12345\n 12345\n12345", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 061: Number Rhombus\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 061: Number Rhombus\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 061: Number Rhombus\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 061: Number Rhombus\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000062',
  '#062 Character Rhombus',
  'pattern-062-character-rhombus',
  'Write a C++ program to print a solid rhombus of side N filled with the first N letters of the alphabet on every row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces', 'Alphabets']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    ABCDE\n   ABCDE\n  ABCDE\n ABCDE\nABCDE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 062: Character Rhombus\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 062: Character Rhombus\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 062: Character Rhombus\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 062: Character Rhombus\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000063',
  '#063 Star Parallelogram',
  'pattern-063-star-parallelogram',
  'Write a C++ program to print a solid star parallelogram with N rows and N columns, shifting one space to the right on each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Slanted Structures']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*****\n *****\n  *****\n   *****\n    *****", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 063: Star Parallelogram\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 063: Star Parallelogram\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 063: Star Parallelogram\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 063: Star Parallelogram\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000064',
  '#064 Number Parallelogram',
  'pattern-064-number-parallelogram',
  'Write a C++ program to print a number parallelogram with N rows, each containing the numbers 1 through N, shifting one space to the right on each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Slanted Structures', 'Numbers']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "12345\n 12345\n  12345\n   12345\n    12345", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 064: Number Parallelogram\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 064: Number Parallelogram\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 064: Number Parallelogram\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 064: Number Parallelogram\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000065',
  '#065 Hollow Parallelogram',
  'pattern-065-hollow-parallelogram',
  'Write a C++ program to print a hollow parallelogram, wider than it is tall, shifting one space to the right on each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Slanted Structures', 'Boundary Logic']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "********\n *      *\n  *      *\n   *      *\n    ********", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 065: Hollow Parallelogram\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 065: Hollow Parallelogram\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 065: Hollow Parallelogram\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 065: Hollow Parallelogram\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000066',
  '#066 X Pattern',
  'pattern-066-x-pattern',
  'Write a C++ program to print an X pattern of side N, placing * only where row == column or row + column == N − 1.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Diagonals', 'Index Conditions']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "*     *\n *   * \n  * *  \n   *   \n  * *  \n *   * \n*     *", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 066: X Pattern\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 066: X Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 066: X Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 066: X Pattern\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000067',
  '#067 Hollow X Pattern',
  'pattern-067-hollow-x-pattern',
  'Write a C++ program to print an X pattern of side N that leaves the exact center cell blank when N is odd.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Diagonals', 'Index Conditions']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "*     *\n *   * \n  * *  \n       \n  * *  \n *   * \n*     *", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 067: Hollow X Pattern\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 067: Hollow X Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 067: Hollow X Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 067: Hollow X Pattern\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000068',
  '#068 Plus Pattern',
  'pattern-068-plus-pattern',
  'Write a C++ program to print a plus (+) pattern of side N, placing * only on the middle row or the middle column.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Midlines', 'Index Conditions']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "   *   \n   *   \n   *   \n*******\n   *   \n   *   \n   *   ", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 068: Plus Pattern\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 068: Plus Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 068: Plus Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 068: Plus Pattern\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000069',
  '#069 Cross Pattern',
  'pattern-069-cross-pattern',
  'Write a C++ program to print a cross pattern of side N built from the middle row and middle column, leaving the exact center cell blank.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Midlines', 'Index Conditions']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "   *   \n   *   \n   *   \n*** ***\n   *   \n   *   \n   *   ", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 069: Cross Pattern\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 069: Cross Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 069: Cross Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 069: Cross Pattern\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000070',
  '#070 X + Plus Combined Pattern',
  'pattern-070-x-+-plus-combined-pattern',
  'Write a C++ program to print a combined pattern of side N that places * wherever the X-pattern condition OR the plus-pattern condition is true.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Combined Index Conditions']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "*  *  *\n * * * \n  ***  \n*******\n  ***  \n * * * \n*  *  *", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 070: X + Plus Combined Pattern\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 070: X + Plus Combined Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 070: X + Plus Combined Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 070: X + Plus Combined Pattern\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000071',
  '#071 Floyd''s Triangle',
  'pattern-071-floyd's-triangle',
  'Write a C++ program to print Floyd''s Triangle with N rows, where consecutive natural numbers fill each row, continuing from the previous row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Continuous Numbering', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 071: Floyd''s Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 071: Floyd''s Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 071: Floyd''s Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 071: Floyd''s Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000072',
  '#072 Reverse Floyd''s Triangle',
  'pattern-072-reverse-floyd's-triangle',
  'Write a C++ program to print Floyd''s Triangle with N rows in reverse row order, from the widest row to the narrowest.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Continuous Numbering', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "11 12 13 14 15\n7 8 9 10\n4 5 6\n2 3\n1", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 072: Reverse Floyd''s Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 072: Reverse Floyd''s Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 072: Reverse Floyd''s Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 072: Reverse Floyd''s Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000073',
  '#073 Pascal''s Triangle',
  'pattern-073-pascal's-triangle',
  'Write a C++ program to print Pascal''s Triangle with N rows, where each interior value is the sum of the two values above it.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Binomial Relationships', 'Combinatorics']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 073: Pascal''s Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 073: Pascal''s Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 073: Pascal''s Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 073: Pascal''s Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000074',
  '#074 Reverse Pascal-Style Pattern',
  'pattern-074-reverse-pascal-style-pattern',
  'Write a C++ program to print Pascal''s Triangle with N rows in reverse row order, from the widest row to the narrowest.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Binomial Relationships', 'Combinatorics']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1 4 6 4 1\n 1 3 3 1\n  1 2 1\n   1 1\n    1", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 074: Reverse Pascal-Style Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 074: Reverse Pascal-Style Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 074: Reverse Pascal-Style Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 074: Reverse Pascal-Style Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000075',
  '#075 Consecutive Number Pyramid',
  'pattern-075-consecutive-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where the numbers continue increasing across rows rather than resetting to 1 each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Continuous Numbering', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   2 3\n  4 5 6\n 7 8 9 10\n11 12 13 14 15", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 075: Consecutive Number Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 075: Consecutive Number Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 075: Consecutive Number Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 075: Consecutive Number Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000076',
  '#076 Palindromic Number Triangle',
  'pattern-076-palindromic-number-triangle',
  'Write a C++ program to print a left-aligned triangle with N rows, where each row reads the same forwards and backwards, such as 1, 212, 32123.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Palindromic Relationships', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n212\n32123\n4321234\n543212345", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 076: Palindromic Number Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 076: Palindromic Number Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 076: Palindromic Number Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 076: Palindromic Number Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000077',
  '#077 Palindromic Number Pyramid',
  'pattern-077-palindromic-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s digits read the same forwards and backwards.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Palindromic Relationships', 'Pyramids']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   212\n  32123\n 4321234\n543212345", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 077: Palindromic Number Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 077: Palindromic Number Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 077: Palindromic Number Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 077: Palindromic Number Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000078',
  '#078 Increasing-Decreasing Number Pattern',
  'pattern-078-increasing-decreasing-number-pattern',
  'Write a C++ program to print N rows where each row counts up from 1 to i and then back down to 1, without repeating the peak value.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Number Relationships', 'Peak Values']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n121\n12321\n1234321\n123454321", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 078: Increasing-Decreasing Number Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 078: Increasing-Decreasing Number Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 078: Increasing-Decreasing Number Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 078: Increasing-Decreasing Number Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000079',
  '#079 Multiplication-Table Pattern',
  'pattern-079-multiplication-table-pattern',
  'Write a C++ program to print an N x N grid where the value at row i, column j is the product i x j.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Number Relationships', 'Matrices']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 079: Multiplication-Table Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 079: Multiplication-Table Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 079: Multiplication-Table Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 079: Multiplication-Table Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000080',
  '#080 Alphabet Square',
  'pattern-080-alphabet-square',
  'Write a C++ program to print an N x N square where every row displays the first N letters of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Squares']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "ABCDE\nABCDE\nABCDE\nABCDE\nABCDE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 080: Alphabet Square\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 080: Alphabet Square\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 080: Alphabet Square\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 080: Alphabet Square\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000081',
  '#081 Right-Aligned Reverse Alphabet Triangle',
  'pattern-081-right-aligned-reverse-alphabet-triangle',
  'Write a C++ program to print a right-aligned triangle with N rows, where row i contains the last i letters of the alphabet in reverse order, starting from Z.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Triangles']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    Z\n   ZY\n  ZYX\n ZYXW\nZYXWV", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 081: Right-Aligned Reverse Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 081: Right-Aligned Reverse Alphabet Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 081: Right-Aligned Reverse Alphabet Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 081: Right-Aligned Reverse Alphabet Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000082',
  '#082 Centered Repeated Alphabet Pyramid',
  'pattern-082-centered-repeated-alphabet-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where row i contains the i-th letter of the alphabet repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Pyramids']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    A\n   BB\n  CCC\n DDDD\nEEEEE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 082: Centered Repeated Alphabet Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 082: Centered Repeated Alphabet Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 082: Centered Repeated Alphabet Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 082: Centered Repeated Alphabet Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000083',
  '#083 Row-wise Alphabet Pattern',
  'pattern-083-row-wise-alphabet-pattern',
  'Write a C++ program to print N rows of width N, where every character in row i is the i-th letter of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Rows']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "AAAAA\nBBBBB\nCCCCC\nDDDDD\nEEEEE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 083: Row-wise Alphabet Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 083: Row-wise Alphabet Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 083: Row-wise Alphabet Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 083: Row-wise Alphabet Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000084',
  '#084 Continuous Alphabet Pattern',
  'pattern-084-continuous-alphabet-pattern',
  'Write a C++ program to print a left-aligned triangle with N rows, where the letters continue in sequence across rows rather than resetting to A each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Continuous']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "A\nBC\nDEF\nGHIJ\nKLMNO", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 084: Continuous Alphabet Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 084: Continuous Alphabet Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 084: Continuous Alphabet Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 084: Continuous Alphabet Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000085',
  '#085 Reverse Alphabet Pattern',
  'pattern-085-reverse-alphabet-pattern',
  'Write a C++ program to print a left-aligned triangle with N rows, where row i contains the first i letters counting backward from Z.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Reverse']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "Z\nZY\nZYX\nZYXW\nZYXWV", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 085: Reverse Alphabet Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 085: Reverse Alphabet Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 085: Reverse Alphabet Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 085: Reverse Alphabet Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000086',
  '#086 Palindromic Alphabet Pyramid',
  'pattern-086-palindromic-alphabet-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s letters mirror around a central letter, such as A, BAB, CBABC.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Symmetry']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    A\n   BAB\n  CBABC\n DCBABCD\nEDCBABCDE", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 086: Palindromic Alphabet Pyramid\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 086: Palindromic Alphabet Pyramid\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 086: Palindromic Alphabet Pyramid\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 086: Palindromic Alphabet Pyramid\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000087',
  '#087 Binary Square',
  'pattern-087-binary-square',
  'Write a C++ program to print an N x N grid of 0s and 1s, where the value at each cell is (row + column) % 2.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['(row + column) % 2', 'Binary']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "01010\n10101\n01010\n10101\n01010", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 087: Binary Square\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 087: Binary Square\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 087: Binary Square\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 087: Binary Square\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000088',
  '#088 Binary Triangle',
  'pattern-088-binary-triangle',
  'Write a C++ program to print a left-aligned triangle with N rows, where each cell''s value is (row + column) % 2.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['(row + column) % 2', 'Binary']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "1\n01\n101\n0101\n10101", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 088: Binary Triangle\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 088: Binary Triangle\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 088: Binary Triangle\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 088: Binary Triangle\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000089',
  '#089 Alternating 0/1 by Column',
  'pattern-089-alternating-0-1-by-column',
  'Write a C++ program to print an N x N grid where every row repeats the pattern 0, 1, 0, 1 based on the column index.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['Alternating Values', 'Columns']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "01010\n01010\n01010\n01010\n01010", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 089: Alternating 0/1 by Column\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 089: Alternating 0/1 by Column\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 089: Alternating 0/1 by Column\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 089: Alternating 0/1 by Column\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000090',
  '#090 Alternating 0/1 by Row',
  'pattern-090-alternating-0-1-by-row',
  'Write a C++ program to print an N x N grid where each full row is either all 0s or all 1s, alternating based on the row index.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['Alternating Values', 'Rows']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "00000\n11111\n00000\n11111\n00000", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 090: Alternating 0/1 by Row\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 090: Alternating 0/1 by Row\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 090: Alternating 0/1 by Row\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 090: Alternating 0/1 by Row\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000091',
  '#091 Checkerboard Pattern',
  'pattern-091-checkerboard-pattern',
  'Write a C++ program to print an N x N checkerboard, placing * on cells where (row + column) is even and a space otherwise.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['(row + column) % 2', 'Checkerboard']::text[],
  'pdf_upload',
  '[{"input": "6", "output": "* * * \n * * *\n* * * \n * * *\n* * * \n * * *", "explanation": "Pattern for N = 6"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 091: Checkerboard Pattern\nint main() {\n    int n = 6;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 091: Checkerboard Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(6)\n", "javascript": "// Problem 091: Checkerboard Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(6);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 091: Checkerboard Pattern\n    public static void main(String[] args) {\n        int n = 6;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000092',
  '#092 Butterfly Pattern',
  'pattern-092-butterfly-pattern',
  'Write a C++ program to print a solid butterfly pattern with N rows in its upper half, mirrored to form the lower half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Symmetry', 'Combined Halves', 'Butterfly']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*        *\n**      **\n***    ***\n****  ****\n**********\n**********\n****  ****\n***    ***\n**      **\n*        *", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 092: Butterfly Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 092: Butterfly Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 092: Butterfly Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 092: Butterfly Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000093',
  '#093 Hollow Butterfly',
  'pattern-093-hollow-butterfly',
  'Write a C++ program to print a hollow butterfly pattern with N rows in its upper half, printing * only along the outer edges of each wing.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Symmetry', 'Boundary Logic', 'Butterfly']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "*        *\n**      **\n* *    * *\n*  *  *  *\n*   **   *\n*  *  *  *\n* *    * *\n**      **\n*        *", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 093: Hollow Butterfly\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 093: Hollow Butterfly\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 093: Hollow Butterfly\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 093: Hollow Butterfly\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000094',
  '#094 Sandglass Pattern',
  'pattern-094-sandglass-pattern',
  'Write a C++ program to print a right-aligned sandglass pattern using the # character, tapering by exactly one column per row down to a single #, then widening back out.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Symmetry', 'Linear Taper', 'Sandglass']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "#####\n ####\n  ###\n   ##\n    #\n   ##\n  ###\n ####\n#####", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 094: Sandglass Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 094: Sandglass Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 094: Sandglass Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 094: Sandglass Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000095',
  '#095 Mixed Number/Character Symmetric Pattern',
  'pattern-095-mixed-number-character-symmetric-pattern',
  'Write a C++ program to print a centered pyramid with N rows, where each position alternates between a digit and a letter depending on whether its position is odd or even.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Mixed Symbol Types', 'Pyramids']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   1B\n  1B3\n 1B3D\n1B3D5", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 095: Mixed Number/Character Symmetric Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 095: Mixed Number/Character Symmetric Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 095: Mixed Number/Character Symmetric Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 095: Mixed Number/Character Symmetric Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000096',
  '#096 Concentric Number Square',
  'pattern-096-concentric-number-square',
  'Write a C++ program to print an N x N grid where each cell''s value depends on its distance from the nearest edge, forming concentric numbered rings.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Concentric & Layer Patterns',
  array['Layer/Boundary Logic', 'Concentric']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "4444444\n4333334\n4322234\n4321234\n4322234\n4333334\n4444444", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 096: Concentric Number Square\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 096: Concentric Number Square\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 096: Concentric Number Square\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 096: Concentric Number Square\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000097',
  '#097 Concentric Character Pattern',
  'pattern-097-concentric-character-pattern',
  'Write a C++ program to print an N x N grid of concentric letter rings, where the outermost ring is A, the next ring is B, and so on toward the center.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Concentric & Layer Patterns',
  array['Layer/Boundary Logic', 'Concentric']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "AAAAAAA\nABBBBBA\nABCCCBA\nABCDCBA\nABCCCBA\nABBBBBA\nAAAAAAA", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 097: Concentric Character Pattern\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 097: Concentric Character Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 097: Concentric Character Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 097: Concentric Character Pattern\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000098',
  '#098 Layer-Based Boundary Pattern',
  'pattern-098-layer-based-boundary-pattern',
  'Write a C++ program to print an N x N grid of concentric rings where even-numbered rings (counting outward from 0) show a digit and odd-numbered rings show *.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Concentric & Layer Patterns',
  array['Layer/Boundary Logic', 'Concentric']::text[],
  'pdf_upload',
  '[{"input": "7", "output": "1111111\n1*****1\n1*333*1\n1*3*3*1\n1*333*1\n1*****1\n1111111", "explanation": "Pattern for N = 7"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 098: Layer-Based Boundary Pattern\nint main() {\n    int n = 7;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 098: Layer-Based Boundary Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(7)\n", "javascript": "// Problem 098: Layer-Based Boundary Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 098: Layer-Based Boundary Pattern\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000099',
  '#099 Introductory Spiral Matrix Pattern',
  'pattern-099-introductory-spiral-matrix-pattern',
  'Write a C++ program to fill an N x N grid with the numbers 1 through N x N in a continuous clockwise spiral, starting from the top-left corner.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Spiral / Matrix-Style Patterns',
  array['Spiral Filling', 'Matrix']::text[],
  'pdf_upload',
  '[{"input": "5", "output": " 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 099: Introductory Spiral Matrix Pattern\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 099: Introductory Spiral Matrix Pattern\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 099: Introductory Spiral Matrix Pattern\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 099: Introductory Spiral Matrix Pattern\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000100',
  '#100 Final Pattern Design Challenge',
  'pattern-100-final-pattern-design-challenge',
  'Write a C++ program to print a diamond-shaped pattern of side N where each concentric layer alternates between a digit (even layers) and a letter (odd layers), with the digit or letter value determined by that layer''s distance from the outer edge.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Final Pattern Design Challenge',
  array['Rows', 'Columns', 'Spaces', 'Symmetry', 'Conditions']::text[],
  'pdf_upload',
  '[{"input": "5", "output": "    1\n   1B1\n  1B3B1\n 1B3D3B1\n1B3D5D3B1\n 1B3D3B1\n  1B3B1\n   1B1\n    1", "explanation": "Pattern for N = 5"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Problem 100: Final Pattern Design Challenge\nint main() {\n    int n = 5;\n    // Write your code here to print the pattern\n    return 0;\n}\n", "python": "# Problem 100: Final Pattern Design Challenge\ndef print_pattern(n: int):\n    # Write your code here\n    pass\n\nprint_pattern(5)\n", "javascript": "// Problem 100: Final Pattern Design Challenge\nfunction printPattern(n) {\n    // Write your code here\n}\n\nprintPattern(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    // Problem 100: Final Pattern Design Challenge\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your code here\n    }\n}\n"}'::jsonb
)
on conflict (id) do update set
  title = excluded.title,
  description = excluded.description,
  difficulty = excluded.difficulty,
  category = excluded.category,
  tags = excluded.tags,
  sample_test_cases = excluded.sample_test_cases,
  starter_templates = excluded.starter_templates;
