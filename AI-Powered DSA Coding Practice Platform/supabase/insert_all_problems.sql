-- ==============================================================================
-- 500 COMPLETE PRACTICE PROBLEMS ACROSS 5 OFFICIAL WORKBOOKS
-- ==============================================================================

insert into public.problems (id, book, order_index, title, slug, description, difficulty, category, tags, source, sample_test_cases, starter_templates)
values
(
  '00000000-0000-4000-8000-000000000001',
  'patterns',
  1,
  '#001 Row of Stars',
  'pattern-001-row-of-stars',
  'Write a C++ program to print a single row of N stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Rows', 'Basic Loop', 'Pattern', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****", "explanation": "Sample for Row of Stars"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #001: Row of Stars\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #001: Row of Stars\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #001: Row of Stars\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000002',
  'patterns',
  2,
  '#002 Column of Stars',
  'pattern-002-column-of-stars',
  'Write a C++ program to print a single column of N stars, one star per line.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Columns', 'Basic Loop', 'Pattern', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*\n*\n*\n*\n*", "explanation": "Sample for Column of Stars"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #002: Column of Stars\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #002: Column of Stars\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #002: Column of Stars\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000003',
  'patterns',
  3,
  '#003 Solid Square',
  'pattern-003-solid-square',
  'Write a C++ program to print a square pattern of * with N rows and N columns.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Nested Loops', 'Rows & Columns', 'Pattern', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****\n*****\n*****\n*****\n*****", "explanation": "Sample for Solid Square"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #003: Solid Square\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #003: Solid Square\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #003: Solid Square\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000004',
  'patterns',
  4,
  '#004 Solid Rectangle',
  'pattern-004-solid-rectangle',
  'Write a C++ program to print a solid rectangle of * with R rows and C columns.

### Input
Two integers, denoting the number of rows and columns respectively.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Nested Loops', 'Rows & Columns', 'Pattern', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4 7", "output": "*******\n*******\n*******\n*******", "explanation": "Sample for Solid Rectangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #004: Solid Rectangle\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #004: Solid Rectangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #004: Solid Rectangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000005',
  'patterns',
  5,
  '#005 Increasing Stars Row-wise',
  'pattern-005-increasing-stars-row-wise',
  'Write a C++ program to print N rows where row i contains exactly i stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Row/Column Relationship', 'Pattern', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4", "output": "*\n**\n***\n****", "explanation": "Sample for Increasing Stars Row-wise"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #005: Increasing Stars Row-wise\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #005: Increasing Stars Row-wise\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #005: Increasing Stars Row-wise\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000006',
  'patterns',
  6,
  '#006 Decreasing Stars Row-wise',
  'pattern-006-decreasing-stars-row-wise',
  'Write a C++ program to print N rows where row i contains exactly (N − i + 1) stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Row/Column Relationship', 'Pattern', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4", "output": "****\n***\n**\n*", "explanation": "Sample for Decreasing Stars Row-wise"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #006: Decreasing Stars Row-wise\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #006: Decreasing Stars Row-wise\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #006: Decreasing Stars Row-wise\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000007',
  'patterns',
  7,
  '#007 Increasing Numbers Row-wise',
  'pattern-007-increasing-numbers-row-wise',
  'Write a C++ program to print N rows where each row displays only its own row number.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Row/Column Relationship', 'Numbers', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n2\n3\n4\n5", "explanation": "Sample for Increasing Numbers Row-wise"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #007: Increasing Numbers Row-wise\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #007: Increasing Numbers Row-wise\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #007: Increasing Numbers Row-wise\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000008',
  'patterns',
  8,
  '#008 Repeated Row-Number Square',
  'pattern-008-repeated-row-number-square',
  'Write a C++ program to print an N x N block where every cell in row i contains the digit i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Pattern Printing Fundamentals',
  array['Nested Loops', 'Row-Dependent Value', 'Numbers', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "11111\n22222\n33333\n44444\n55555", "explanation": "Sample for Repeated Row-Number Square"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #008: Repeated Row-Number Square\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #008: Repeated Row-Number Square\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #008: Repeated Row-Number Square\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000009',
  'patterns',
  9,
  '#009 Left-Aligned Increasing Star Triangle',
  'pattern-009-left-aligned-increasing-star-triangle',
  'Write a C++ program to print a left-aligned triangle where row i contains i stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Row-Dependent Inner Loop', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*\n**\n***\n****\n*****", "explanation": "Sample for Left-Aligned Increasing Star Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #009: Left-Aligned Increasing Star Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #009: Left-Aligned Increasing Star Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #009: Left-Aligned Increasing Star Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000010',
  'patterns',
  10,
  '#010 Left-Aligned Decreasing Star Triangle',
  'pattern-010-left-aligned-decreasing-star-triangle',
  'Write a C++ program to print a left-aligned triangle where row i contains (N − i + 1) stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Row-Dependent Inner Loop', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****\n****\n***\n**\n*", "explanation": "Sample for Left-Aligned Decreasing Star Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #010: Left-Aligned Decreasing Star Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #010: Left-Aligned Decreasing Star Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #010: Left-Aligned Decreasing Star Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000011',
  'patterns',
  11,
  '#011 Increasing Number Triangle',
  'pattern-011-increasing-number-triangle',
  'Write a C++ program to print a triangle where row i contains the numbers 1 through i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n12\n123\n1234\n12345", "explanation": "Sample for Increasing Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #011: Increasing Number Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #011: Increasing Number Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #011: Increasing Number Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000012',
  'patterns',
  12,
  '#012 Repeated-Digit Triangle',
  'pattern-012-repeated-digit-triangle',
  'Write a C++ program to print a triangle where row i contains the digit 1 repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n11\n111\n1111\n11111", "explanation": "Sample for Repeated-Digit Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #012: Repeated-Digit Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #012: Repeated-Digit Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #012: Repeated-Digit Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000013',
  'patterns',
  13,
  '#013 Row-Number Triangle',
  'pattern-013-row-number-triangle',
  'Write a C++ program to print a triangle where row i contains the row''s own number, repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n22\n333\n4444\n55555", "explanation": "Sample for Row-Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #013: Row-Number Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #013: Row-Number Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #013: Row-Number Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000014',
  'patterns',
  14,
  '#014 Column-Number Diagonal Triangle',
  'pattern-014-column-number-diagonal-triangle',
  'Write a C++ program to print N rows where row i contains (i − 1) leading spaces followed by the number i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Row/Column Relationship', 'Diagonals', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n 2\n  3\n   4\n    5", "explanation": "Sample for Column-Number Diagonal Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #014: Column-Number Diagonal Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #014: Column-Number Diagonal Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #014: Column-Number Diagonal Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000015',
  'patterns',
  15,
  '#015 Continuous Number Grid',
  'pattern-015-continuous-number-grid',
  'Write a C++ program to print an N x N grid filled with continuously increasing numbers, in row-major order.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Grids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4", "output": "1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16", "explanation": "Sample for Continuous Number Grid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #015: Continuous Number Grid\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #015: Continuous Number Grid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #015: Continuous Number Grid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000016',
  'patterns',
  16,
  '#016 Reverse Continuous Number Grid',
  'pattern-016-reverse-continuous-number-grid',
  'Write a C++ program to print an N x N grid filled with continuously decreasing numbers, starting from N x N down to 1.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Basic Triangular Patterns',
  array['Number Relationships', 'Grids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4", "output": "16 15 14 13\n12 11 10 9\n8 7 6 5\n4 3 2 1", "explanation": "Sample for Reverse Continuous Number Grid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #016: Reverse Continuous Number Grid\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #016: Reverse Continuous Number Grid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #016: Reverse Continuous Number Grid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000017',
  'patterns',
  17,
  '#017 Increasing Alphabet Triangle',
  'pattern-017-increasing-alphabet-triangle',
  'Write a C++ program to print a triangle where row i contains the first i letters of the alphabet, starting from A.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Character Relationships', 'Alphabets', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "A\nAB\nABC\nABCD\nABCDE", "explanation": "Sample for Increasing Alphabet Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #017: Increasing Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #017: Increasing Alphabet Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #017: Increasing Alphabet Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000018',
  'patterns',
  18,
  '#018 Repeated Alphabet Triangle',
  'pattern-018-repeated-alphabet-triangle',
  'Write a C++ program to print a triangle where row i contains the i-th letter of the alphabet, repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Basic Triangular Patterns',
  array['Character Relationships', 'Alphabets', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "A\nBB\nCCC\nDDDD\nEEEEE", "explanation": "Sample for Repeated Alphabet Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #018: Repeated Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #018: Repeated Alphabet Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #018: Repeated Alphabet Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000019',
  'patterns',
  19,
  '#019 Right-Aligned Increasing Triangle',
  'pattern-019-right-aligned-increasing-triangle',
  'Write a C++ program to print a right-aligned triangle of * characters containing N rows.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Right-Aligned & Space-Based Patterns',
  array['Nested Loops', 'Leading Spaces', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   **\n  ***\n ****\n*****", "explanation": "Sample for Right-Aligned Increasing Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #019: Right-Aligned Increasing Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #019: Right-Aligned Increasing Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #019: Right-Aligned Increasing Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000020',
  'patterns',
  20,
  '#020 Right-Aligned Decreasing Triangle',
  'pattern-020-right-aligned-decreasing-triangle',
  'Write a C++ program to print a right-aligned triangle of * characters where row i contains (N − i + 1) stars.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Easy',
  'Right-Aligned & Space-Based Patterns',
  array['Nested Loops', 'Leading Spaces', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****\n ****\n  ***\n   **\n    *", "explanation": "Sample for Right-Aligned Decreasing Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #020: Right-Aligned Decreasing Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #020: Right-Aligned Decreasing Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #020: Right-Aligned Decreasing Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000021',
  'patterns',
  21,
  '#021 Right-Aligned Number Triangle',
  'pattern-021-right-aligned-number-triangle',
  'Write a C++ program to print a right-aligned triangle where row i contains the numbers 1 through i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Numbers', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   12\n  123\n 1234\n12345", "explanation": "Sample for Right-Aligned Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #021: Right-Aligned Number Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #021: Right-Aligned Number Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #021: Right-Aligned Number Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000022',
  'patterns',
  22,
  '#022 Right-Aligned Repeated-Number Triangle',
  'pattern-022-right-aligned-repeated-number-triangle',
  'Write a C++ program to print a right-aligned triangle where row i contains the digit i, repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Numbers', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   22\n  333\n 4444\n55555", "explanation": "Sample for Right-Aligned Repeated-Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #022: Right-Aligned Repeated-Number Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #022: Right-Aligned Repeated-Number Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #022: Right-Aligned Repeated-Number Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000023',
  'patterns',
  23,
  '#023 Right-Aligned Alphabet Triangle',
  'pattern-023-right-aligned-alphabet-triangle',
  'Write a C++ program to print a right-aligned triangle where row i contains the first i letters of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Alphabets', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    A\n   AB\n  ABC\n ABCD\nABCDE", "explanation": "Sample for Right-Aligned Alphabet Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #023: Right-Aligned Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #023: Right-Aligned Alphabet Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #023: Right-Aligned Alphabet Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000024',
  'patterns',
  24,
  '#024 Increasing Spaces + Decreasing Stars',
  'pattern-024-increasing-spaces-+-decreasing-stars',
  'Write a C++ program to print N rows where the number of leading spaces increases by 1 each row while the number of stars decreases correspondingly.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Space-Symbol Relationship', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "6", "output": "******\n *****\n  ****\n   ***\n    **\n     *", "explanation": "Sample for Increasing Spaces + Decreasing Stars"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #024: Increasing Spaces + Decreasing Stars\nint main() {\n    int n = 6;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #024: Increasing Spaces + Decreasing Stars\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(6)\n", "javascript": "// Pattern #024: Increasing Spaces + Decreasing Stars\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(6);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 6;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000025',
  'patterns',
  25,
  '#025 Decreasing Spaces + Increasing Stars',
  'pattern-025-decreasing-spaces-+-increasing-stars',
  'Write a C++ program to print N rows where the number of leading spaces decreases by 1 each row while the number of stars increases correspondingly.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Space-Symbol Relationship', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "6", "output": "     *\n    **\n   ***\n  ****\n *****\n******", "explanation": "Sample for Decreasing Spaces + Increasing Stars"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #025: Decreasing Spaces + Increasing Stars\nint main() {\n    int n = 6;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #025: Decreasing Spaces + Increasing Stars\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(6)\n", "javascript": "// Pattern #025: Decreasing Spaces + Increasing Stars\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(6);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 6;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000026',
  'patterns',
  26,
  '#026 Right-Aligned Continuous Numbers',
  'pattern-026-right-aligned-continuous-numbers',
  'Write a C++ program to print a right-aligned triangle where the numbers continue increasing across rows rather than resetting to 1 each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Numbers', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "3", "output": "  1\n 23\n456", "explanation": "Sample for Right-Aligned Continuous Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #026: Right-Aligned Continuous Numbers\nint main() {\n    int n = 3;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #026: Right-Aligned Continuous Numbers\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(3)\n", "javascript": "// Pattern #026: Right-Aligned Continuous Numbers\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(3);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 3;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000027',
  'patterns',
  27,
  '#027 Right-Aligned Row-Number Diagonal',
  'pattern-027-right-aligned-row-number-diagonal',
  'Write a C++ program to print N rows where row i contains (N − i) leading spaces followed by the number i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Diagonals', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   2\n  3\n 4\n5", "explanation": "Sample for Right-Aligned Row-Number Diagonal"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #027: Right-Aligned Row-Number Diagonal\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #027: Right-Aligned Row-Number Diagonal\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #027: Right-Aligned Row-Number Diagonal\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000028',
  'patterns',
  28,
  '#028 Right-Aligned Character Anti-Diagonal',
  'pattern-028-right-aligned-character-anti-diagonal',
  'Write a C++ program to print N rows where row i contains (N − i) leading spaces followed by the i-th letter of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Right-Aligned & Space-Based Patterns',
  array['Spaces + Symbols', 'Diagonals', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    A\n   B\n  C\n D\nE", "explanation": "Sample for Right-Aligned Character Anti-Diagonal"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #028: Right-Aligned Character Anti-Diagonal\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #028: Right-Aligned Character Anti-Diagonal\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #028: Right-Aligned Character Anti-Diagonal\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000029',
  'patterns',
  29,
  '#029 Star Pyramid',
  'pattern-029-star-pyramid',
  'Write a C++ program to print a centered star pyramid with N rows.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   ***\n  *****\n *******\n*********", "explanation": "Sample for Star Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #029: Star Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #029: Star Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #029: Star Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000030',
  'patterns',
  30,
  '#030 Number Pyramid',
  'pattern-030-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where row i contains the numbers 1 through (2i − 1).

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   1 2 3\n  1 2 3 4 5\n 1 2 3 4 5 6 7\n1 2 3 4 5 6 7 8 9", "explanation": "Sample for Number Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #030: Number Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #030: Number Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #030: Number Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000031',
  'patterns',
  31,
  '#031 Same-Number Pyramid',
  'pattern-031-same-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where every symbol in the entire pyramid is the digit 1.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   111\n  11111\n 1111111\n111111111", "explanation": "Sample for Same-Number Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #031: Same-Number Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #031: Same-Number Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #031: Same-Number Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000032',
  'patterns',
  32,
  '#032 Row-Number Pyramid',
  'pattern-032-row-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s symbol is that row''s own number.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   222\n  33333\n 4444444\n555555555", "explanation": "Sample for Row-Number Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #032: Row-Number Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #032: Row-Number Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #032: Row-Number Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000033',
  'patterns',
  33,
  '#033 Continuous-Number Pyramid (Centered)',
  'pattern-033-continuous-number-pyramid-(centered)',
  'Write a C++ program to print a centered pyramid with N rows, where row i contains the numbers 1 through i.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   1 2\n  1 2 3\n 1 2 3 4\n1 2 3 4 5", "explanation": "Sample for Continuous-Number Pyramid (Centered)"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #033: Continuous-Number Pyramid (Centered)\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #033: Continuous-Number Pyramid (Centered)\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #033: Continuous-Number Pyramid (Centered)\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000034',
  'patterns',
  34,
  '#034 Alphabet Pyramid',
  'pattern-034-alphabet-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where the letters continue in sequence across rows rather than resetting to A each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    A\n   BC\n  DEF\n GHIJ\nKLMNO", "explanation": "Sample for Alphabet Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #034: Alphabet Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #034: Alphabet Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #034: Alphabet Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000035',
  'patterns',
  35,
  '#035 Repeated-Character Pyramid',
  'pattern-035-repeated-character-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s letter is repeated to fill that row''s full width.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE", "explanation": "Sample for Repeated-Character Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #035: Repeated-Character Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #035: Repeated-Character Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #035: Repeated-Character Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000036',
  'patterns',
  36,
  '#036 Reverse Star Pyramid',
  'pattern-036-reverse-star-pyramid',
  'Write a C++ program to print an inverted centered star pyramid with N rows, widest at the top.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*********\n *******\n  *****\n   ***\n    *", "explanation": "Sample for Reverse Star Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #036: Reverse Star Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #036: Reverse Star Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #036: Reverse Star Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000037',
  'patterns',
  37,
  '#037 Reverse Number Pyramid',
  'pattern-037-reverse-number-pyramid',
  'Write a C++ program to print an inverted centered number pyramid with N rows, widest at the top.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7\n  1 2 3 4 5\n   1 2 3\n    1", "explanation": "Sample for Reverse Number Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #037: Reverse Number Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #037: Reverse Number Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #037: Reverse Number Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000038',
  'patterns',
  38,
  '#038 Reverse Character Pyramid',
  'pattern-038-reverse-character-pyramid',
  'Write a C++ program to print an inverted centered pyramid with N rows using letters, widest at the top.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Pyramid & Reverse Pyramid Patterns',
  array['Nested Loops', 'Spaces', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A", "explanation": "Sample for Reverse Character Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #038: Reverse Character Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #038: Reverse Character Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #038: Reverse Character Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000039',
  'patterns',
  39,
  '#039 Full Star Diamond',
  'pattern-039-full-star-diamond',
  'Write a C++ program to print a full star diamond built from an upper pyramid and a mirrored lower pyramid, using N as the number of rows in each half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *", "explanation": "Sample for Full Star Diamond"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #039: Full Star Diamond\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #039: Full Star Diamond\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #039: Full Star Diamond\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000040',
  'patterns',
  40,
  '#040 Number Diamond',
  'pattern-040-number-diamond',
  'Write a C++ program to print a full diamond using numbers 1 through (2i − 1) in each half-row, mirrored top and bottom.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   1 2 3\n  1 2 3 4 5\n 1 2 3 4 5 6 7\n1 2 3 4 5 6 7 8 9\n 1 2 3 4 5 6 7\n  1 2 3 4 5\n   1 2 3\n    1", "explanation": "Sample for Number Diamond"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #040: Number Diamond\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #040: Number Diamond\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #040: Number Diamond\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000041',
  'patterns',
  41,
  '#041 Same-Number Diamond',
  'pattern-041-same-number-diamond',
  'Write a C++ program to print a full diamond where each row''s symbol is that row''s own number, mirrored top and bottom.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   222\n  33333\n 4444444\n555555555\n 4444444\n  33333\n   222\n    1", "explanation": "Sample for Same-Number Diamond"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #041: Same-Number Diamond\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #041: Same-Number Diamond\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #041: Same-Number Diamond\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000042',
  'patterns',
  42,
  '#042 Alphabet Diamond',
  'pattern-042-alphabet-diamond',
  'Write a C++ program to print a full diamond using letters, where each row''s letter matches its row number, mirrored top and bottom.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Diamonds', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A", "explanation": "Sample for Alphabet Diamond"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #042: Alphabet Diamond\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #042: Alphabet Diamond\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #042: Alphabet Diamond\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000043',
  'patterns',
  43,
  '#043 Hollow Diamond',
  'pattern-043-hollow-diamond',
  'Write a C++ program to print a diamond outline made of *, hollow on the inside, using N as the number of rows in each half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Pattern Combination', 'Diamonds', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *", "explanation": "Sample for Hollow Diamond"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #043: Hollow Diamond\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #043: Hollow Diamond\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #043: Hollow Diamond\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000044',
  'patterns',
  44,
  '#044 Inverted Hollow Diamond',
  'pattern-044-inverted-hollow-diamond',
  'Write a C++ program to print the inverse of a hollow diamond: fill every cell of the bounding box EXCEPT the diamond-shaped region in the middle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Pattern Combination', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "**** ****\n***   ***\n**     **\n*       *\n*       *\n**     **\n***   ***\n**** ****", "explanation": "Sample for Inverted Hollow Diamond"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #044: Inverted Hollow Diamond\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #044: Inverted Hollow Diamond\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #044: Inverted Hollow Diamond\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000045',
  'patterns',
  45,
  '#045 Combined Upper + Lower Pyramid',
  'pattern-045-combined-upper-+-lower-pyramid',
  'Write a C++ program to print an upper star pyramid immediately followed by a second, identical star pyramid directly beneath it.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Pattern Combination', 'Pyramids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   ***\n  *****\n *******\n*********\n    *\n   ***\n  *****\n *******\n*********", "explanation": "Sample for Combined Upper + Lower Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #045: Combined Upper + Lower Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #045: Combined Upper + Lower Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #045: Combined Upper + Lower Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000046',
  'patterns',
  46,
  '#046 Star Hourglass',
  'pattern-046-star-hourglass',
  'Write a C++ program to print a star hourglass: a pyramid narrowing to a single star, then widening back out, using N as the widest row''s half-count.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Hourglass', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*********\n *******\n  *****\n   ***\n    *\n   ***\n  *****\n *******\n*********", "explanation": "Sample for Star Hourglass"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #046: Star Hourglass\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #046: Star Hourglass\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #046: Star Hourglass\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000047',
  'patterns',
  47,
  '#047 Number Hourglass',
  'pattern-047-number-hourglass',
  'Write a C++ program to print an hourglass shape using numbers 1 through the current row''s width, narrowing to a single value and widening back out.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Hourglass', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4", "output": "1 2 3 4 5 6 7\n 1 2 3 4 5\n  1 2 3\n   1\n  1 2 3\n 1 2 3 4 5\n1 2 3 4 5 6 7", "explanation": "Sample for Number Hourglass"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #047: Number Hourglass\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #047: Number Hourglass\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #047: Number Hourglass\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000048',
  'patterns',
  48,
  '#048 Character Hourglass',
  'pattern-048-character-hourglass',
  'Write a C++ program to print an hourglass shape using letters, narrowing to a single letter and widening back out.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Diamond & Symmetrical Patterns',
  array['Symmetry', 'Mirroring', 'Hourglass', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "EEEEEEEEE\n DDDDDDD\n  CCCCC\n   BBB\n    A\n   BBB\n  CCCCC\n DDDDDDD\nEEEEEEEEE", "explanation": "Sample for Character Hourglass"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #048: Character Hourglass\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #048: Character Hourglass\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #048: Character Hourglass\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000049',
  'patterns',
  49,
  '#049 Hollow Square',
  'pattern-049-hollow-square',
  'Write a C++ program to print a hollow square of side N, printing * only on the first row, last row, first column, and last column.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Squares', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****\n*   *\n*   *\n*   *\n*****", "explanation": "Sample for Hollow Square"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #049: Hollow Square\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #049: Hollow Square\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #049: Hollow Square\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000050',
  'patterns',
  50,
  '#050 Hollow Rectangle',
  'pattern-050-hollow-rectangle',
  'Write a C++ program to print a hollow rectangle with R rows and C columns, printing * only along its border.

### Input
Two integers, denoting the number of rows and columns respectively.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Rectangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4 7", "output": "*******\n*     *\n*     *\n*******", "explanation": "Sample for Hollow Rectangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #050: Hollow Rectangle\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #050: Hollow Rectangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #050: Hollow Rectangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000051',
  'patterns',
  51,
  '#051 Hollow Left Triangle',
  'pattern-051-hollow-left-triangle',
  'Write a C++ program to print a hollow left-aligned triangle of side N, printing * only on the outer edges of the triangle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*\n**\n* *\n*  *\n*****", "explanation": "Sample for Hollow Left Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #051: Hollow Left Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #051: Hollow Left Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #051: Hollow Left Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000052',
  'patterns',
  52,
  '#052 Hollow Right Triangle',
  'pattern-052-hollow-right-triangle',
  'Write a C++ program to print a hollow right-aligned triangle of side N, printing * only on the outer edges of the triangle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   **\n  * *\n *  *\n*****", "explanation": "Sample for Hollow Right Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #052: Hollow Right Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #052: Hollow Right Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #052: Hollow Right Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000053',
  'patterns',
  53,
  '#053 Hollow Inverted Triangle',
  'pattern-053-hollow-inverted-triangle',
  'Write a C++ program to print a hollow inverted left-aligned triangle of side N, printing * only on the outer edges.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****\n*  *\n* *\n**\n*", "explanation": "Sample for Hollow Inverted Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #053: Hollow Inverted Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #053: Hollow Inverted Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #053: Hollow Inverted Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000054',
  'patterns',
  54,
  '#054 Hollow Pyramid',
  'pattern-054-hollow-pyramid',
  'Write a C++ program to print a centered pyramid of N rows that is hollow on the inside, with a solid base row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Pyramids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   * *\n  *   *\n *     *\n*********", "explanation": "Sample for Hollow Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #054: Hollow Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #054: Hollow Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #054: Hollow Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000055',
  'patterns',
  55,
  '#055 Hollow Inverted Pyramid',
  'pattern-055-hollow-inverted-pyramid',
  'Write a C++ program to print an inverted centered pyramid of N rows that is hollow on the inside, with a solid top row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Pyramids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*********\n *     *\n  *   *\n   * *\n    *", "explanation": "Sample for Hollow Inverted Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #055: Hollow Inverted Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #055: Hollow Inverted Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #055: Hollow Inverted Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000056',
  'patterns',
  56,
  '#056 Wide Hollow Diamond',
  'pattern-056-wide-hollow-diamond',
  'Write a C++ program to print a flattened hollow diamond outline, twice as wide as it is tall, using N as the number of rows in each half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Diamonds', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "4", "output": "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *", "explanation": "Sample for Wide Hollow Diamond"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #056: Wide Hollow Diamond\nint main() {\n    int n = 4;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #056: Wide Hollow Diamond\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(4)\n", "javascript": "// Pattern #056: Wide Hollow Diamond\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(4);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000057',
  'patterns',
  57,
  '#057 Hollow Hourglass',
  'pattern-057-hollow-hourglass',
  'Write a C++ program to print an hourglass outline made of *, hollow on the inside, narrowing to a single point in the middle.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Hourglass', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*********\n *     *\n  *   *\n   * *\n    *\n   * *\n  *   *\n *     *\n*********", "explanation": "Sample for Hollow Hourglass"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #057: Hollow Hourglass\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #057: Hollow Hourglass\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #057: Hollow Hourglass\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000058',
  'patterns',
  58,
  '#058 Hollow Rhombus',
  'pattern-058-hollow-rhombus',
  'Write a C++ program to print a hollow rhombus of side N, slanting to the right, with * only along its border.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Hollow Patterns',
  array['Boundary Logic', 'Rhombus', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *****\n   *   *\n  *   *\n *   *\n*****", "explanation": "Sample for Hollow Rhombus"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #058: Hollow Rhombus\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #058: Hollow Rhombus\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #058: Hollow Rhombus\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000059',
  'patterns',
  59,
  '#059 Solid Rhombus',
  'pattern-059-solid-rhombus',
  'Write a C++ program to print a solid rhombus of side N, where each row shifts one space further right than the row above it.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    *****\n   *****\n  *****\n *****\n*****", "explanation": "Sample for Solid Rhombus"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #059: Solid Rhombus\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #059: Solid Rhombus\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #059: Solid Rhombus\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000060',
  'patterns',
  60,
  '#060 Hollow Rhombus (Opposite Slant)',
  'pattern-060-hollow-rhombus-(opposite-slant)',
  'Write a C++ program to print a hollow rhombus of side N that slants in the opposite direction from a standard right-leaning rhombus.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****\n *   *\n  *   *\n   *   *\n    *****", "explanation": "Sample for Hollow Rhombus (Opposite Slant)"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #060: Hollow Rhombus (Opposite Slant)\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #060: Hollow Rhombus (Opposite Slant)\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #060: Hollow Rhombus (Opposite Slant)\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000061',
  'patterns',
  61,
  '#061 Number Rhombus',
  'pattern-061-number-rhombus',
  'Write a C++ program to print a solid rhombus of side N filled with the digits 1 through N repeating on every row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces', 'Numbers', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    12345\n   12345\n  12345\n 12345\n12345", "explanation": "Sample for Number Rhombus"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #061: Number Rhombus\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #061: Number Rhombus\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #061: Number Rhombus\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000062',
  'patterns',
  62,
  '#062 Character Rhombus',
  'pattern-062-character-rhombus',
  'Write a C++ program to print a solid rhombus of side N filled with the first N letters of the alphabet on every row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Constant Width', 'Shifting Spaces', 'Alphabets', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    ABCDE\n   ABCDE\n  ABCDE\n ABCDE\nABCDE", "explanation": "Sample for Character Rhombus"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #062: Character Rhombus\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #062: Character Rhombus\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #062: Character Rhombus\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000063',
  'patterns',
  63,
  '#063 Star Parallelogram',
  'pattern-063-star-parallelogram',
  'Write a C++ program to print a solid star parallelogram with N rows and N columns, shifting one space to the right on each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Slanted Structures', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*****\n *****\n  *****\n   *****\n    *****", "explanation": "Sample for Star Parallelogram"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #063: Star Parallelogram\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #063: Star Parallelogram\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #063: Star Parallelogram\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000064',
  'patterns',
  64,
  '#064 Number Parallelogram',
  'pattern-064-number-parallelogram',
  'Write a C++ program to print a number parallelogram with N rows, each containing the numbers 1 through N, shifting one space to the right on each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Slanted Structures', 'Numbers', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "12345\n 12345\n  12345\n   12345\n    12345", "explanation": "Sample for Number Parallelogram"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #064: Number Parallelogram\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #064: Number Parallelogram\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #064: Number Parallelogram\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000065',
  'patterns',
  65,
  '#065 Hollow Parallelogram',
  'pattern-065-hollow-parallelogram',
  'Write a C++ program to print a hollow parallelogram, wider than it is tall, shifting one space to the right on each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Rhombus & Slanted Patterns',
  array['Slanted Structures', 'Boundary Logic', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "********\n *      *\n  *      *\n   *      *\n    ********", "explanation": "Sample for Hollow Parallelogram"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #065: Hollow Parallelogram\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #065: Hollow Parallelogram\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #065: Hollow Parallelogram\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000066',
  'patterns',
  66,
  '#066 X Pattern',
  'pattern-066-x-pattern',
  'Write a C++ program to print an X pattern of side N, placing * only where row == column or row + column == N − 1.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Diagonals', 'Index Conditions', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "*     *\n *   * \n  * *  \n   *   \n  * *  \n *   * \n*     *", "explanation": "Sample for X Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #066: X Pattern\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #066: X Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #066: X Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000067',
  'patterns',
  67,
  '#067 Hollow X Pattern',
  'pattern-067-hollow-x-pattern',
  'Write a C++ program to print an X pattern of side N that leaves the exact center cell blank when N is odd.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Diagonals', 'Index Conditions', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "*     *\n *   * \n  * *  \n       \n  * *  \n *   * \n*     *", "explanation": "Sample for Hollow X Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #067: Hollow X Pattern\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #067: Hollow X Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #067: Hollow X Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000068',
  'patterns',
  68,
  '#068 Plus Pattern',
  'pattern-068-plus-pattern',
  'Write a C++ program to print a plus (+) pattern of side N, placing * only on the middle row or the middle column.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Midlines', 'Index Conditions', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "   *   \n   *   \n   *   \n*******\n   *   \n   *   \n   *   ", "explanation": "Sample for Plus Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #068: Plus Pattern\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #068: Plus Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #068: Plus Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000069',
  'patterns',
  69,
  '#069 Cross Pattern',
  'pattern-069-cross-pattern',
  'Write a C++ program to print a cross pattern of side N built from the middle row and middle column, leaving the exact center cell blank.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Midlines', 'Index Conditions', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "   *   \n   *   \n   *   \n*** ***\n   *   \n   *   \n   *   ", "explanation": "Sample for Cross Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #069: Cross Pattern\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #069: Cross Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #069: Cross Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000070',
  'patterns',
  70,
  '#070 X + Plus Combined Pattern',
  'pattern-070-x-+-plus-combined-pattern',
  'Write a C++ program to print a combined pattern of side N that places * wherever the X-pattern condition OR the plus-pattern condition is true.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'X, Plus & Cross Patterns',
  array['Combined Index Conditions', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "*  *  *\n * * * \n  ***  \n*******\n  ***  \n * * * \n*  *  *", "explanation": "Sample for X + Plus Combined Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #070: X + Plus Combined Pattern\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #070: X + Plus Combined Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #070: X + Plus Combined Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000071',
  'patterns',
  71,
  '#071 Floyd''s Triangle',
  'pattern-071-floyd's-triangle',
  'Write a C++ program to print Floyd''s Triangle with N rows, where consecutive natural numbers fill each row, continuing from the previous row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Continuous Numbering', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15", "explanation": "Sample for Floyd''s Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #071: Floyd''s Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #071: Floyd''s Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #071: Floyd''s Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000072',
  'patterns',
  72,
  '#072 Reverse Floyd''s Triangle',
  'pattern-072-reverse-floyd's-triangle',
  'Write a C++ program to print Floyd''s Triangle with N rows in reverse row order, from the widest row to the narrowest.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Continuous Numbering', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "11 12 13 14 15\n7 8 9 10\n4 5 6\n2 3\n1", "explanation": "Sample for Reverse Floyd''s Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #072: Reverse Floyd''s Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #072: Reverse Floyd''s Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #072: Reverse Floyd''s Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000073',
  'patterns',
  73,
  '#073 Pascal''s Triangle',
  'pattern-073-pascal's-triangle',
  'Write a C++ program to print Pascal''s Triangle with N rows, where each interior value is the sum of the two values above it.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Binomial Relationships', 'Combinatorics', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1", "explanation": "Sample for Pascal''s Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #073: Pascal''s Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #073: Pascal''s Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #073: Pascal''s Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000074',
  'patterns',
  74,
  '#074 Reverse Pascal-Style Pattern',
  'pattern-074-reverse-pascal-style-pattern',
  'Write a C++ program to print Pascal''s Triangle with N rows in reverse row order, from the widest row to the narrowest.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Binomial Relationships', 'Combinatorics', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1 4 6 4 1\n 1 3 3 1\n  1 2 1\n   1 1\n    1", "explanation": "Sample for Reverse Pascal-Style Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #074: Reverse Pascal-Style Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #074: Reverse Pascal-Style Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #074: Reverse Pascal-Style Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000075',
  'patterns',
  75,
  '#075 Consecutive Number Pyramid',
  'pattern-075-consecutive-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where the numbers continue increasing across rows rather than resetting to 1 each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Continuous Numbering', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   2 3\n  4 5 6\n 7 8 9 10\n11 12 13 14 15", "explanation": "Sample for Consecutive Number Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #075: Consecutive Number Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #075: Consecutive Number Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #075: Consecutive Number Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000076',
  'patterns',
  76,
  '#076 Palindromic Number Triangle',
  'pattern-076-palindromic-number-triangle',
  'Write a C++ program to print a left-aligned triangle with N rows, where each row reads the same forwards and backwards, such as 1, 212, 32123.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Palindromic Relationships', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n212\n32123\n4321234\n543212345", "explanation": "Sample for Palindromic Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #076: Palindromic Number Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #076: Palindromic Number Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #076: Palindromic Number Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000077',
  'patterns',
  77,
  '#077 Palindromic Number Pyramid',
  'pattern-077-palindromic-number-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s digits read the same forwards and backwards.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Palindromic Relationships', 'Pyramids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   212\n  32123\n 4321234\n543212345", "explanation": "Sample for Palindromic Number Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #077: Palindromic Number Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #077: Palindromic Number Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #077: Palindromic Number Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000078',
  'patterns',
  78,
  '#078 Increasing-Decreasing Number Pattern',
  'pattern-078-increasing-decreasing-number-pattern',
  'Write a C++ program to print N rows where each row counts up from 1 to i and then back down to 1, without repeating the peak value.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Number Relationships', 'Peak Values', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n121\n12321\n1234321\n123454321", "explanation": "Sample for Increasing-Decreasing Number Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #078: Increasing-Decreasing Number Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #078: Increasing-Decreasing Number Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #078: Increasing-Decreasing Number Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000079',
  'patterns',
  79,
  '#079 Multiplication-Table Pattern',
  'pattern-079-multiplication-table-pattern',
  'Write a C++ program to print an N x N grid where the value at row i, column j is the product i x j.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Number Patterns',
  array['Number Relationships', 'Matrices', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15\n4 8 12 16 20\n5 10 15 20 25", "explanation": "Sample for Multiplication-Table Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #079: Multiplication-Table Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #079: Multiplication-Table Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #079: Multiplication-Table Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000080',
  'patterns',
  80,
  '#080 Alphabet Square',
  'pattern-080-alphabet-square',
  'Write a C++ program to print an N x N square where every row displays the first N letters of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Squares', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "ABCDE\nABCDE\nABCDE\nABCDE\nABCDE", "explanation": "Sample for Alphabet Square"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #080: Alphabet Square\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #080: Alphabet Square\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #080: Alphabet Square\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000081',
  'patterns',
  81,
  '#081 Right-Aligned Reverse Alphabet Triangle',
  'pattern-081-right-aligned-reverse-alphabet-triangle',
  'Write a C++ program to print a right-aligned triangle with N rows, where row i contains the last i letters of the alphabet in reverse order, starting from Z.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Triangles', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    Z\n   ZY\n  ZYX\n ZYXW\nZYXWV", "explanation": "Sample for Right-Aligned Reverse Alphabet Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #081: Right-Aligned Reverse Alphabet Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #081: Right-Aligned Reverse Alphabet Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #081: Right-Aligned Reverse Alphabet Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000082',
  'patterns',
  82,
  '#082 Centered Repeated Alphabet Pyramid',
  'pattern-082-centered-repeated-alphabet-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where row i contains the i-th letter of the alphabet repeated i times.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Pyramids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    A\n   BB\n  CCC\n DDDD\nEEEEE", "explanation": "Sample for Centered Repeated Alphabet Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #082: Centered Repeated Alphabet Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #082: Centered Repeated Alphabet Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #082: Centered Repeated Alphabet Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000083',
  'patterns',
  83,
  '#083 Row-wise Alphabet Pattern',
  'pattern-083-row-wise-alphabet-pattern',
  'Write a C++ program to print N rows of width N, where every character in row i is the i-th letter of the alphabet.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Rows', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "AAAAA\nBBBBB\nCCCCC\nDDDDD\nEEEEE", "explanation": "Sample for Row-wise Alphabet Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #083: Row-wise Alphabet Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #083: Row-wise Alphabet Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #083: Row-wise Alphabet Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000084',
  'patterns',
  84,
  '#084 Continuous Alphabet Pattern',
  'pattern-084-continuous-alphabet-pattern',
  'Write a C++ program to print a left-aligned triangle with N rows, where the letters continue in sequence across rows rather than resetting to A each row.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Continuous', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "A\nBC\nDEF\nGHIJ\nKLMNO", "explanation": "Sample for Continuous Alphabet Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #084: Continuous Alphabet Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #084: Continuous Alphabet Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #084: Continuous Alphabet Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000085',
  'patterns',
  85,
  '#085 Reverse Alphabet Pattern',
  'pattern-085-reverse-alphabet-pattern',
  'Write a C++ program to print a left-aligned triangle with N rows, where row i contains the first i letters counting backward from Z.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Reverse', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "Z\nZY\nZYX\nZYXW\nZYXWV", "explanation": "Sample for Reverse Alphabet Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #085: Reverse Alphabet Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #085: Reverse Alphabet Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #085: Reverse Alphabet Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000086',
  'patterns',
  86,
  '#086 Palindromic Alphabet Pyramid',
  'pattern-086-palindromic-alphabet-pyramid',
  'Write a C++ program to print a centered pyramid with N rows, where each row''s letters mirror around a central letter, such as A, BAB, CBABC.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Alphabet Patterns',
  array['Character Arithmetic', 'Symmetry', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    A\n   BAB\n  CBABC\n DCBABCD\nEDCBABCDE", "explanation": "Sample for Palindromic Alphabet Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #086: Palindromic Alphabet Pyramid\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #086: Palindromic Alphabet Pyramid\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #086: Palindromic Alphabet Pyramid\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000087',
  'patterns',
  87,
  '#087 Binary Square',
  'pattern-087-binary-square',
  'Write a C++ program to print an N x N grid of 0s and 1s, where the value at each cell is (row + column) % 2.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['(row + column) % 2', 'Binary', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "01010\n10101\n01010\n10101\n01010", "explanation": "Sample for Binary Square"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #087: Binary Square\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #087: Binary Square\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #087: Binary Square\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000088',
  'patterns',
  88,
  '#088 Binary Triangle',
  'pattern-088-binary-triangle',
  'Write a C++ program to print a left-aligned triangle with N rows, where each cell''s value is (row + column) % 2.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['(row + column) % 2', 'Binary', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "1\n01\n101\n0101\n10101", "explanation": "Sample for Binary Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #088: Binary Triangle\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #088: Binary Triangle\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #088: Binary Triangle\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000089',
  'patterns',
  89,
  '#089 Alternating 0/1 by Column',
  'pattern-089-alternating-0-1-by-column',
  'Write a C++ program to print an N x N grid where every row repeats the pattern 0, 1, 0, 1 based on the column index.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['Alternating Values', 'Columns', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "01010\n01010\n01010\n01010\n01010", "explanation": "Sample for Alternating 0/1 by Column"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #089: Alternating 0/1 by Column\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #089: Alternating 0/1 by Column\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #089: Alternating 0/1 by Column\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000090',
  'patterns',
  90,
  '#090 Alternating 0/1 by Row',
  'pattern-090-alternating-0-1-by-row',
  'Write a C++ program to print an N x N grid where each full row is either all 0s or all 1s, alternating based on the row index.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['Alternating Values', 'Rows', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "00000\n11111\n00000\n11111\n00000", "explanation": "Sample for Alternating 0/1 by Row"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #090: Alternating 0/1 by Row\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #090: Alternating 0/1 by Row\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #090: Alternating 0/1 by Row\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000091',
  'patterns',
  91,
  '#091 Checkerboard Pattern',
  'pattern-091-checkerboard-pattern',
  'Write a C++ program to print an N x N checkerboard, placing * on cells where (row + column) is even and a space otherwise.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Binary & Alternating Patterns',
  array['(row + column) % 2', 'Checkerboard', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "6", "output": "* * * \n * * *\n* * * \n * * *\n* * * \n * * *", "explanation": "Sample for Checkerboard Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #091: Checkerboard Pattern\nint main() {\n    int n = 6;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #091: Checkerboard Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(6)\n", "javascript": "// Pattern #091: Checkerboard Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(6);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 6;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000092',
  'patterns',
  92,
  '#092 Butterfly Pattern',
  'pattern-092-butterfly-pattern',
  'Write a C++ program to print a solid butterfly pattern with N rows in its upper half, mirrored to form the lower half.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Symmetry', 'Combined Halves', 'Butterfly', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*        *\n**      **\n***    ***\n****  ****\n**********\n**********\n****  ****\n***    ***\n**      **\n*        *", "explanation": "Sample for Butterfly Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #092: Butterfly Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #092: Butterfly Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #092: Butterfly Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000093',
  'patterns',
  93,
  '#093 Hollow Butterfly',
  'pattern-093-hollow-butterfly',
  'Write a C++ program to print a hollow butterfly pattern with N rows in its upper half, printing * only along the outer edges of each wing.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Symmetry', 'Boundary Logic', 'Butterfly', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "*        *\n**      **\n* *    * *\n*  *  *  *\n*   **   *\n*  *  *  *\n* *    * *\n**      **\n*        *", "explanation": "Sample for Hollow Butterfly"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #093: Hollow Butterfly\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #093: Hollow Butterfly\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #093: Hollow Butterfly\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000094',
  'patterns',
  94,
  '#094 Sandglass Pattern',
  'pattern-094-sandglass-pattern',
  'Write a C++ program to print a right-aligned sandglass pattern using the # character, tapering by exactly one column per row down to a single #, then widening back out.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Symmetry', 'Linear Taper', 'Sandglass', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "#####\n ####\n  ###\n   ##\n    #\n   ##\n  ###\n ####\n#####", "explanation": "Sample for Sandglass Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #094: Sandglass Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #094: Sandglass Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #094: Sandglass Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000095',
  'patterns',
  95,
  '#095 Mixed Number/Character Symmetric Pattern',
  'pattern-095-mixed-number-character-symmetric-pattern',
  'Write a C++ program to print a centered pyramid with N rows, where each position alternates between a digit and a letter depending on whether its position is odd or even.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Medium',
  'Advanced Mixed Patterns',
  array['Mixed Symbol Types', 'Pyramids', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   1B\n  1B3\n 1B3D\n1B3D5", "explanation": "Sample for Mixed Number/Character Symmetric Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #095: Mixed Number/Character Symmetric Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #095: Mixed Number/Character Symmetric Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #095: Mixed Number/Character Symmetric Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000096',
  'patterns',
  96,
  '#096 Concentric Number Square',
  'pattern-096-concentric-number-square',
  'Write a C++ program to print an N x N grid where each cell''s value depends on its distance from the nearest edge, forming concentric numbered rings.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Concentric & Layer Patterns',
  array['Layer/Boundary Logic', 'Concentric', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "4444444\n4333334\n4322234\n4321234\n4322234\n4333334\n4444444", "explanation": "Sample for Concentric Number Square"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #096: Concentric Number Square\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #096: Concentric Number Square\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #096: Concentric Number Square\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000097',
  'patterns',
  97,
  '#097 Concentric Character Pattern',
  'pattern-097-concentric-character-pattern',
  'Write a C++ program to print an N x N grid of concentric letter rings, where the outermost ring is A, the next ring is B, and so on toward the center.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Concentric & Layer Patterns',
  array['Layer/Boundary Logic', 'Concentric', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "AAAAAAA\nABBBBBA\nABCCCBA\nABCDCBA\nABCCCBA\nABBBBBA\nAAAAAAA", "explanation": "Sample for Concentric Character Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #097: Concentric Character Pattern\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #097: Concentric Character Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #097: Concentric Character Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000098',
  'patterns',
  98,
  '#098 Layer-Based Boundary Pattern',
  'pattern-098-layer-based-boundary-pattern',
  'Write a C++ program to print an N x N grid of concentric rings where even-numbered rings (counting outward from 0) show a digit and odd-numbered rings show *.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Concentric & Layer Patterns',
  array['Layer/Boundary Logic', 'Concentric', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "7", "output": "1111111\n1*****1\n1*333*1\n1*3*3*1\n1*333*1\n1*****1\n1111111", "explanation": "Sample for Layer-Based Boundary Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #098: Layer-Based Boundary Pattern\nint main() {\n    int n = 7;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #098: Layer-Based Boundary Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(7)\n", "javascript": "// Pattern #098: Layer-Based Boundary Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(7);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 7;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000099',
  'patterns',
  99,
  '#099 Introductory Spiral Matrix Pattern',
  'pattern-099-introductory-spiral-matrix-pattern',
  'Write a C++ program to fill an N x N grid with the numbers 1 through N x N in a continuous clockwise spiral, starting from the top-left corner.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Spiral / Matrix-Style Patterns',
  array['Spiral Filling', 'Matrix', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": " 1  2  3  4  5\n16 17 18 19  6\n15 24 25 20  7\n14 23 22 21  8\n13 12 11 10  9", "explanation": "Sample for Introductory Spiral Matrix Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #099: Introductory Spiral Matrix Pattern\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #099: Introductory Spiral Matrix Pattern\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #099: Introductory Spiral Matrix Pattern\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000100',
  'patterns',
  100,
  '#100 Final Pattern Design Challenge',
  'pattern-100-final-pattern-design-challenge',
  'Write a C++ program to print a diamond-shaped pattern of side N where each concentric layer alternates between a digit (even layers) and a letter (odd layers), with the digit or letter value determined by that layer''s distance from the outer edge.

### Input
A single integer N, denoting the size of the pattern.

### Output
Print the pattern for the given input, matching Expected Output exactly.',
  'Hard',
  'Final Pattern Design Challenge',
  array['Rows', 'Columns', 'Spaces', 'Symmetry', 'Conditions', 'Pattern Printing']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   1B1\n  1B3B1\n 1B3D3B1\n1B3D5D3B1\n 1B3D3B1\n  1B3B1\n   1B1\n    1", "explanation": "Sample for Final Pattern Design Challenge"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Pattern #100: Final Pattern Design Challenge\nint main() {\n    int n = 5;\n    // Write your pattern code here\n    return 0;\n}\n", "python": "# Pattern #100: Final Pattern Design Challenge\ndef solve(n: int):\n    # Write your pattern code here\n    pass\n\nsolve(5)\n", "javascript": "// Pattern #100: Final Pattern Design Challenge\nfunction solve(n) {\n    // Write your pattern code here\n}\n\nsolve(5);\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        // Write your pattern code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000101',
  'loops',
  1,
  '#001 Print Numbers from 1 to N',
  'loop-001-print-numbers-from-1-to-n',
  'Write a program to print all integers from 1 to N separated by a space.

### Input
A single integer N.

### Output
Print all integers from 1 to N separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['Basic Iteration', 'Loops', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "1 2 3 4 5", "explanation": "Sample for Print Numbers from 1 to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #001: Print Numbers from 1 to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #001: Print Numbers from 1 to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #001: Print Numbers from 1 to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000102',
  'loops',
  2,
  '#002 Print Numbers from N to 1',
  'loop-002-print-numbers-from-n-to-1',
  'Write a program to print all integers from N down to 1.

### Input
A single integer N.

### Output
Print all integers from N down to 1 separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['Reverse Iteration', 'Loops', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "5 4 3 2 1", "explanation": "Sample for Print Numbers from N to 1"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #002: Print Numbers from N to 1\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #002: Print Numbers from N to 1\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #002: Print Numbers from N to 1\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000103',
  'loops',
  3,
  '#003 Print Even Numbers up to N',
  'loop-003-print-even-numbers-up-to-n',
  'Write a program to print all even numbers from 1 up to N.

### Input
A single integer N.

### Output
Print all even numbers up to N separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['for Loop', 'Conditionals', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "2 4 6 8 10", "explanation": "Sample for Print Even Numbers up to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #003: Print Even Numbers up to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #003: Print Even Numbers up to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #003: Print Even Numbers up to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000104',
  'loops',
  4,
  '#004 Print Odd Numbers up to N',
  'loop-004-print-odd-numbers-up-to-n',
  'Write a program to print all odd numbers from 1 up to N.

### Input
A single integer N.

### Output
Print all odd numbers up to N separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['for Loop', 'Conditionals', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "1 3 5 7 9", "explanation": "Sample for Print Odd Numbers up to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #004: Print Odd Numbers up to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #004: Print Odd Numbers up to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #004: Print Odd Numbers up to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000105',
  'loops',
  5,
  '#005 Sum of First N Natural Numbers',
  'loop-005-sum-of-first-n-natural-numbers',
  'Write a program to calculate the sum of the first N natural numbers using a loop.

### Input
A single integer N.

### Output
Print the total sum.',
  'Easy',
  'Basic Loop Fundamentals',
  array['Accumulator', 'Math', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "15", "explanation": "Sample for Sum of First N Natural Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #005: Sum of First N Natural Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #005: Sum of First N Natural Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #005: Sum of First N Natural Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000106',
  'loops',
  6,
  '#006 Print Numbers Divisible by 3',
  'loop-006-print-numbers-divisible-by-3',
  'Write a program to print all numbers from 1 to N that are divisible by 3.

### Input
A single integer N.

### Output
Print numbers separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['Conditional Looping', 'Divisibility', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "15", "output": "3 6 9 12 15", "explanation": "Sample for Print Numbers Divisible by 3"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #006: Print Numbers Divisible by 3\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #006: Print Numbers Divisible by 3\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #006: Print Numbers Divisible by 3\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000107',
  'loops',
  7,
  '#007 Print Multiplication Table of N',
  'loop-007-print-multiplication-table-of-n',
  'Write a program to print the multiplication table of a given number N (1 to 10).

### Input
A single integer N.

### Output
Print products separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['for Loop', 'Math', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "4 8 12 16 20 24 28 32 36 40", "explanation": "Sample for Print Multiplication Table of N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #007: Print Multiplication Table of N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #007: Print Multiplication Table of N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #007: Print Multiplication Table of N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000108',
  'loops',
  8,
  '#008 Sum of N Numbers Entered by User',
  'loop-008-sum-of-n-numbers-entered-by-user',
  'Write a program to read N numbers one by one and calculate their sum using a loop.

### Input
First line integer N, followed by N integers.

### Output
Print the total sum.',
  'Easy',
  'Basic Loop Fundamentals',
  array['Accumulator', 'Input Stream', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "3\n2 4 6", "output": "12", "explanation": "Sample for Sum of N Numbers Entered by User"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #008: Sum of N Numbers Entered by User\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #008: Sum of N Numbers Entered by User\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #008: Sum of N Numbers Entered by User\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000109',
  'loops',
  9,
  '#009 Count Numbers Divisible by 5 in a Range',
  'loop-009-count-numbers-divisible-by-5-in-a-range',
  'Write a program to count how many numbers between 1 and N are divisible by 5.

### Input
A single integer N.

### Output
Print the count.',
  'Easy',
  'Basic Loop Fundamentals',
  array['Counter', 'Divisibility', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "23", "output": "4", "explanation": "Sample for Count Numbers Divisible by 5 in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #009: Count Numbers Divisible by 5 in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #009: Count Numbers Divisible by 5 in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #009: Count Numbers Divisible by 5 in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000110',
  'loops',
  10,
  '#010 Factorial of a Number',
  'loop-010-factorial-of-a-number',
  'Write a program to calculate the factorial of a number N using a while loop.

### Input
A single integer N.

### Output
Print N! (factorial).',
  'Easy',
  'Basic Loop Fundamentals',
  array['while Loop', 'Math', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "120", "explanation": "Sample for Factorial of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #010: Factorial of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #010: Factorial of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #010: Factorial of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000111',
  'loops',
  11,
  '#011 Print Squares of Numbers from 1 to N',
  'loop-011-print-squares-of-numbers-from-1-to-n',
  'Write a program to print the square of every number from 1 to N.

### Input
A single integer N.

### Output
Print squares separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['for Loop', 'Math', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "1 4 9 16 25", "explanation": "Sample for Print Squares of Numbers from 1 to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #011: Print Squares of Numbers from 1 to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #011: Print Squares of Numbers from 1 to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #011: Print Squares of Numbers from 1 to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000112',
  'loops',
  12,
  '#012 Product of First N Natural Numbers',
  'loop-012-product-of-first-n-natural-numbers',
  'Write a program to calculate the product of the first N natural numbers using a loop.

### Input
A single integer N.

### Output
Print the product.',
  'Medium',
  'Basic Loop Fundamentals',
  array['Accumulator', 'Product', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "24", "explanation": "Sample for Product of First N Natural Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #012: Product of First N Natural Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #012: Product of First N Natural Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #012: Product of First N Natural Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000113',
  'loops',
  13,
  '#013 Print Numbers Using a while Loop',
  'loop-013-print-numbers-using-a-while-loop',
  'Write a program to print numbers from 1 to N using only a while loop.

### Input
A single integer N.

### Output
Print numbers separated by a space.',
  'Easy',
  'Basic Loop Fundamentals',
  array['while Loop', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "6", "output": "1 2 3 4 5 6", "explanation": "Sample for Print Numbers Using a while Loop"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #013: Print Numbers Using a while Loop\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #013: Print Numbers Using a while Loop\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #013: Print Numbers Using a while Loop\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000114',
  'loops',
  14,
  '#014 Print Numbers Using a do-while Loop',
  'loop-014-print-numbers-using-a-do-while-loop',
  'Write a program to print numbers from 1 to N using a do-while loop, ensuring the body executes at least once.

### Input
A single integer N.

### Output
Print numbers separated by a space.',
  'Medium',
  'Basic Loop Fundamentals',
  array['do-while Loop', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "1 2 3 4", "explanation": "Sample for Print Numbers Using a do-while Loop"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #014: Print Numbers Using a do-while Loop\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #014: Print Numbers Using a do-while Loop\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #014: Print Numbers Using a do-while Loop\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000115',
  'loops',
  15,
  '#015 Sum of Even Numbers up to N',
  'loop-015-sum-of-even-numbers-up-to-n',
  'Write a program to calculate the sum of all even numbers from 1 to N.

### Input
A single integer N.

### Output
Print the sum.',
  'Medium',
  'Basic Loop Fundamentals',
  array['Conditional Looping', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "30", "explanation": "Sample for Sum of Even Numbers up to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #015: Sum of Even Numbers up to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #015: Sum of Even Numbers up to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #015: Sum of Even Numbers up to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000116',
  'loops',
  16,
  '#016 Sum of Odd Numbers up to N',
  'loop-016-sum-of-odd-numbers-up-to-n',
  'Write a program to calculate the sum of all odd numbers from 1 to N.

### Input
A single integer N.

### Output
Print the sum.',
  'Medium',
  'Basic Loop Fundamentals',
  array['Conditional Looping', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "25", "explanation": "Sample for Sum of Odd Numbers up to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #016: Sum of Odd Numbers up to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #016: Sum of Odd Numbers up to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #016: Sum of Odd Numbers up to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000117',
  'loops',
  17,
  '#017 Average of N Numbers',
  'loop-017-average-of-n-numbers',
  'Write a program to calculate the average of N numbers entered by the user using a loop.

### Input
First line integer N, followed by N integers.

### Output
Print the average formatted with one decimal place.',
  'Medium',
  'Basic Loop Fundamentals',
  array['Accumulator', 'Float/Double', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4\n2 4 6 8", "output": "5.0", "explanation": "Sample for Average of N Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #017: Average of N Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #017: Average of N Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #017: Average of N Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000118',
  'loops',
  18,
  '#018 Power of a Number Using a Loop',
  'loop-018-power-of-a-number-using-a-loop',
  'Write a program to calculate base raised to exponent using repeated multiplication in a loop, without using a built-in power function.

### Input
Two integers: base and exponent.

### Output
Print base^exponent.',
  'Medium',
  'Basic Loop Fundamentals',
  array['for Loop', 'Math', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "2 5", "output": "32", "explanation": "Sample for Power of a Number Using a Loop"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #018: Power of a Number Using a Loop\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #018: Power of a Number Using a Loop\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #018: Power of a Number Using a Loop\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000119',
  'loops',
  19,
  '#019 Count Positive and Negative Numbers',
  'loop-019-count-positive-and-negative-numbers',
  'Write a program to read N numbers and count how many are positive and how many are negative.

### Input
First line integer N, followed by N integers.

### Output
Print format: Positive: X, Negative: Y',
  'Medium',
  'Basic Loop Fundamentals',
  array['Counter', 'Conditionals', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5\n3 -2 -7 0 4", "output": "Positive: 2, Negative: 2", "explanation": "Sample for Count Positive and Negative Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #019: Count Positive and Negative Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #019: Count Positive and Negative Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #019: Count Positive and Negative Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000120',
  'loops',
  20,
  '#020 Print All Multiplication Tables from 1 to N',
  'loop-020-print-all-multiplication-tables-from-1-to-n',
  'Write a program to print the multiplication tables of every number from 1 to N (1 to 10 each), introducing loops nested inside loops.

### Input
A single integer N.

### Output
Table of 1: 1 2 3 4 5 6 7 8 9 10
Table of 2: 2 4 6 8 10 12 14 16 18 20',
  'Medium',
  'Basic Loop Fundamentals',
  array['Nested Loops', 'Tables', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "2", "output": "Table of 1: 1 2 3 4 5 6 7 8 9 10\nTable of 2: 2 4 6 8 10 12 14 16 18 20", "explanation": "Sample for Print All Multiplication Tables from 1 to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #020: Print All Multiplication Tables from 1 to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #020: Print All Multiplication Tables from 1 to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #020: Print All Multiplication Tables from 1 to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000121',
  'loops',
  21,
  '#021 Count the Number of Digits',
  'loop-021-count-the-number-of-digits',
  'Write a program to count the total number of digits in a given number.

### Input
A single integer.

### Output
Total digit count.',
  'Easy',
  'Digit Manipulation',
  array['Digit Manipulation', 'Counting', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "5", "explanation": "Sample for Count the Number of Digits"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #021: Count the Number of Digits\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #021: Count the Number of Digits\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #021: Count the Number of Digits\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000122',
  'loops',
  22,
  '#022 Find the First Digit of a Number',
  'loop-022-find-the-first-digit-of-a-number',
  'Write a program to find the first (leftmost) digit of a given number.

### Input
A single integer.

### Output
The first digit.',
  'Easy',
  'Digit Manipulation',
  array['Digit Manipulation', 'Division', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "4", "explanation": "Sample for Find the First Digit of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #022: Find the First Digit of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #022: Find the First Digit of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #022: Find the First Digit of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000123',
  'loops',
  23,
  '#023 Find the Last Digit of a Number',
  'loop-023-find-the-last-digit-of-a-number',
  'Write a program to find the last (rightmost) digit of a given number.

### Input
A single integer.

### Output
The last digit.',
  'Easy',
  'Digit Manipulation',
  array['Digit Manipulation', 'Modulo', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "3", "explanation": "Sample for Find the Last Digit of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #023: Find the Last Digit of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #023: Find the Last Digit of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #023: Find the Last Digit of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000124',
  'loops',
  24,
  '#024 Sum of Digits of a Number',
  'loop-024-sum-of-digits-of-a-number',
  'Write a program to calculate the sum of all digits of a given number.

### Input
A single integer.

### Output
Sum of all digits.',
  'Easy',
  'Digit Manipulation',
  array['Digit Manipulation', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1234", "output": "10", "explanation": "Sample for Sum of Digits of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #024: Sum of Digits of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #024: Sum of Digits of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #024: Sum of Digits of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000125',
  'loops',
  25,
  '#025 Product of Digits of a Number',
  'loop-025-product-of-digits-of-a-number',
  'Write a program to calculate the product of all digits of a given number.

### Input
A single integer.

### Output
Product of all digits.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Product', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1234", "output": "24", "explanation": "Sample for Product of Digits of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #025: Product of Digits of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #025: Product of Digits of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #025: Product of Digits of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000126',
  'loops',
  26,
  '#026 Find the Largest Digit in a Number',
  'loop-026-find-the-largest-digit-in-a-number',
  'Write a program to find the largest digit present in a given number.

### Input
A single integer.

### Output
The largest digit.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Max', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "8", "explanation": "Sample for Find the Largest Digit in a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #026: Find the Largest Digit in a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #026: Find the Largest Digit in a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #026: Find the Largest Digit in a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000127',
  'loops',
  27,
  '#027 Find the Smallest Digit in a Number',
  'loop-027-find-the-smallest-digit-in-a-number',
  'Write a program to find the smallest digit present in a given number.

### Input
A single integer.

### Output
The smallest digit.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Min', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "1", "explanation": "Sample for Find the Smallest Digit in a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #027: Find the Smallest Digit in a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #027: Find the Smallest Digit in a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #027: Find the Smallest Digit in a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000128',
  'loops',
  28,
  '#028 Count Even Digits in a Number',
  'loop-028-count-even-digits-in-a-number',
  'Write a program to count how many digits in a given number are even.

### Input
A single integer.

### Output
Count of even digits.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Parity', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "2", "explanation": "Sample for Count Even Digits in a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #028: Count Even Digits in a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #028: Count Even Digits in a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #028: Count Even Digits in a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000129',
  'loops',
  29,
  '#029 Count Odd Digits in a Number',
  'loop-029-count-odd-digits-in-a-number',
  'Write a program to count how many digits in a given number are odd.

### Input
A single integer.

### Output
Count of odd digits.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Parity', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "3", "explanation": "Sample for Count Odd Digits in a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #029: Count Odd Digits in a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #029: Count Odd Digits in a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #029: Count Odd Digits in a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000130',
  'loops',
  30,
  '#030 Find the Frequency of a Given Digit',
  'loop-030-find-the-frequency-of-a-given-digit',
  'Write a program to count how many times a specific digit appears in a given number.

### Input
Two integers: the number and the target digit.

### Output
Frequency count.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Frequency', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "554523 5", "output": "3", "explanation": "Sample for Find the Frequency of a Given Digit"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #030: Find the Frequency of a Given Digit\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #030: Find the Frequency of a Given Digit\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #030: Find the Frequency of a Given Digit\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000131',
  'loops',
  31,
  '#031 Count the Number of Zeros in a Number',
  'loop-031-count-the-number-of-zeros-in-a-number',
  'Write a program to count how many zero digits appear in a given number.

### Input
A single integer.

### Output
Count of zeros.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Zero Count', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1002005", "output": "3", "explanation": "Sample for Count the Number of Zeros in a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #031: Count the Number of Zeros in a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #031: Count the Number of Zeros in a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #031: Count the Number of Zeros in a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000132',
  'loops',
  32,
  '#032 Reverse a Number',
  'loop-032-reverse-a-number',
  'Write a program to reverse the digits of a given number using a loop.

### Input
A single integer.

### Output
Reversed number.',
  'Medium',
  'Digit Manipulation',
  array['Number Reversal', 'Math', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1234", "output": "4321", "explanation": "Sample for Reverse a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #032: Reverse a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #032: Reverse a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #032: Reverse a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000133',
  'loops',
  33,
  '#033 Check if a Number is a Palindrome',
  'loop-033-check-if-a-number-is-a-palindrome',
  'Write a program to check whether a given number reads the same forwards and backwards.

### Input
A single integer.

### Output
Print ''Palindrome'' or ''Not Palindrome''.',
  'Medium',
  'Digit Manipulation',
  array['Palindrome', 'Number Reversal', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "12321", "output": "Palindrome", "explanation": "Sample for Check if a Number is a Palindrome"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #033: Check if a Number is a Palindrome\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #033: Check if a Number is a Palindrome\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #033: Check if a Number is a Palindrome\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000134',
  'loops',
  34,
  '#034 Find the Second Largest Digit',
  'loop-034-find-the-second-largest-digit',
  'Write a program to find the second largest digit present in a given number.

### Input
A single integer.

### Output
The second largest digit.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Second Max', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "4", "explanation": "Sample for Find the Second Largest Digit"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #034: Find the Second Largest Digit\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #034: Find the Second Largest Digit\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #034: Find the Second Largest Digit\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000135',
  'loops',
  35,
  '#035 Find the Second Smallest Digit',
  'loop-035-find-the-second-smallest-digit',
  'Write a program to find the second smallest digit present in a given number.

### Input
A single integer.

### Output
The second smallest digit.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Second Min', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "2", "explanation": "Sample for Find the Second Smallest Digit"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #035: Find the Second Smallest Digit\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #035: Find the Second Smallest Digit\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #035: Find the Second Smallest Digit\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000136',
  'loops',
  36,
  '#036 Sum of Digits at Even Positions',
  'loop-036-sum-of-digits-at-even-positions',
  'Write a program to calculate the sum of digits located at even positions (counting from the right, starting at position 1) in a given number.

### Input
A single integer.

### Output
Print format: 1 + 2 = 3',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Position Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "1 + 2 = 3", "explanation": "Sample for Sum of Digits at Even Positions"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #036: Sum of Digits at Even Positions\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #036: Sum of Digits at Even Positions\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #036: Sum of Digits at Even Positions\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000137',
  'loops',
  37,
  '#037 Sum of Digits at Odd Positions',
  'loop-037-sum-of-digits-at-odd-positions',
  'Write a program to calculate the sum of digits located at odd positions (counting from the right, starting at position 1) in a given number.

### Input
A single integer.

### Output
Print format: 3 + 8 + 4 = 15',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Position Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "3 + 8 + 4 = 15", "explanation": "Sample for Sum of Digits at Odd Positions"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #037: Sum of Digits at Odd Positions\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #037: Sum of Digits at Odd Positions\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #037: Sum of Digits at Odd Positions\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000138',
  'loops',
  38,
  '#038 Remove the Last Digit of a Number',
  'loop-038-remove-the-last-digit-of-a-number',
  'Write a program to reconstruct a number after removing its last digit, using loop-based integer operations.

### Input
A single integer.

### Output
Reconstructed integer.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Integer Math', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "4821", "explanation": "Sample for Remove the Last Digit of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #038: Remove the Last Digit of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #038: Remove the Last Digit of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #038: Remove the Last Digit of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000139',
  'loops',
  39,
  '#039 Check if Digits are in Increasing Order',
  'loop-039-check-if-digits-are-in-increasing-order',
  'Write a program to check whether the digits of a given number appear in strictly increasing order from left to right.

### Input
A single integer.

### Output
Print ''Yes'' or ''No''.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Monotonicity', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "13579", "output": "Yes", "explanation": "Sample for Check if Digits are in Increasing Order"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #039: Check if Digits are in Increasing Order\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #039: Check if Digits are in Increasing Order\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #039: Check if Digits are in Increasing Order\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000140',
  'loops',
  40,
  '#040 Swap the First and Last Digit of a Number',
  'loop-040-swap-the-first-and-last-digit-of-a-number',
  'Write a program to construct a new number by swapping the first and last digits of a given number.

### Input
A single integer.

### Output
The transformed number.',
  'Medium',
  'Digit Manipulation',
  array['Digit Manipulation', 'Transformation', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48213", "output": "38214", "explanation": "Sample for Swap the First and Last Digit of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #040: Swap the First and Last Digit of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #040: Swap the First and Last Digit of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #040: Swap the First and Last Digit of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000141',
  'loops',
  41,
  '#041 Check if a Number is Prime',
  'loop-041-check-if-a-number-is-prime',
  'Write a program to check whether a given number is prime using a loop.

### Input
A single integer.

### Output
Print ''Prime'' or ''Not Prime''.',
  'Easy',
  'Number Properties',
  array['Prime Numbers', 'Number Theory', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "29", "output": "Prime", "explanation": "Sample for Check if a Number is Prime"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #041: Check if a Number is Prime\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #041: Check if a Number is Prime\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #041: Check if a Number is Prime\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000142',
  'loops',
  42,
  '#042 Print All Prime Numbers in a Range',
  'loop-042-print-all-prime-numbers-in-a-range',
  'Write a program to print all prime numbers between two given limits.

### Input
Two integers: lower and upper bound.

### Output
Prime numbers separated by space.',
  'Medium',
  'Number Properties',
  array['Prime Numbers', 'Range', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "10 30", "output": "11 13 17 19 23 29", "explanation": "Sample for Print All Prime Numbers in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #042: Print All Prime Numbers in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #042: Print All Prime Numbers in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #042: Print All Prime Numbers in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000143',
  'loops',
  43,
  '#043 Count Prime Numbers in a Range',
  'loop-043-count-prime-numbers-in-a-range',
  'Write a program to count how many prime numbers exist between two given limits.

### Input
Two integers: lower and upper bound.

### Output
Total count of primes.',
  'Medium',
  'Number Properties',
  array['Prime Numbers', 'Counter', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1 30", "output": "10", "explanation": "Sample for Count Prime Numbers in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #043: Count Prime Numbers in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #043: Count Prime Numbers in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #043: Count Prime Numbers in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000144',
  'loops',
  44,
  '#044 Sum of Prime Numbers in a Range',
  'loop-044-sum-of-prime-numbers-in-a-range',
  'Write a program to calculate the sum of all prime numbers between two given limits.

### Input
Two integers: lower and upper bound.

### Output
Sum of primes.',
  'Medium',
  'Number Properties',
  array['Prime Numbers', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1 20", "output": "77", "explanation": "Sample for Sum of Prime Numbers in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #044: Sum of Prime Numbers in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #044: Sum of Prime Numbers in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #044: Sum of Prime Numbers in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000145',
  'loops',
  45,
  '#045 Print All Factors of a Number',
  'loop-045-print-all-factors-of-a-number',
  'Write a program to print all the factors of a given number.

### Input
A single integer.

### Output
Factors separated by space.',
  'Easy',
  'Number Properties',
  array['Factors', 'Divisors', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "12", "output": "1 2 3 4 6 12", "explanation": "Sample for Print All Factors of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #045: Print All Factors of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #045: Print All Factors of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #045: Print All Factors of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000146',
  'loops',
  46,
  '#046 Count the Number of Factors',
  'loop-046-count-the-number-of-factors',
  'Write a program to count how many factors a given number has.

### Input
A single integer.

### Output
Total factor count.',
  'Medium',
  'Number Properties',
  array['Factors', 'Counter', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "12", "output": "6", "explanation": "Sample for Count the Number of Factors"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #046: Count the Number of Factors\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #046: Count the Number of Factors\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #046: Count the Number of Factors\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000147',
  'loops',
  47,
  '#047 Sum of Factors of a Number',
  'loop-047-sum-of-factors-of-a-number',
  'Write a program to calculate the sum of all factors of a given number.

### Input
A single integer.

### Output
Sum of factors.',
  'Medium',
  'Number Properties',
  array['Factors', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "12", "output": "28", "explanation": "Sample for Sum of Factors of a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #047: Sum of Factors of a Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #047: Sum of Factors of a Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #047: Sum of Factors of a Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000148',
  'loops',
  48,
  '#048 Find the Largest Proper Factor',
  'loop-048-find-the-largest-proper-factor',
  'Write a program to find the largest proper factor (a factor excluding the number itself) of a given number.

### Input
A single integer.

### Output
Largest proper factor.',
  'Medium',
  'Number Properties',
  array['Factors', 'Proper Divisor', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "36", "output": "18", "explanation": "Sample for Find the Largest Proper Factor"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #048: Find the Largest Proper Factor\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #048: Find the Largest Proper Factor\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #048: Find the Largest Proper Factor\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000149',
  'loops',
  49,
  '#049 Check if a Number is a Perfect Number',
  'loop-049-check-if-a-number-is-a-perfect-number',
  'Write a program to check whether a given number is a perfect number — equal to the sum of its proper divisors.

### Input
A single integer.

### Output
Print ''Perfect'' or ''Not Perfect''.',
  'Medium',
  'Number Properties',
  array['Perfect Numbers', 'Number Theory', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "28", "output": "Perfect", "explanation": "Sample for Check if a Number is a Perfect Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #049: Check if a Number is a Perfect Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #049: Check if a Number is a Perfect Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #049: Check if a Number is a Perfect Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000150',
  'loops',
  50,
  '#050 Check if a Number is an Armstrong Number',
  'loop-050-check-if-a-number-is-an-armstrong-number',
  'Write a program to check whether a given number is an Armstrong number.

### Input
A single integer.

### Output
Print ''Armstrong'' or ''Not Armstrong''.',
  'Medium',
  'Number Properties',
  array['Armstrong Numbers', 'Number Theory', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "153", "output": "Armstrong", "explanation": "Sample for Check if a Number is an Armstrong Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #050: Check if a Number is an Armstrong Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #050: Check if a Number is an Armstrong Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #050: Check if a Number is an Armstrong Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000151',
  'loops',
  51,
  '#051 Print Armstrong Numbers in a Range',
  'loop-051-print-armstrong-numbers-in-a-range',
  'Write a program to print all Armstrong numbers between two given limits.

### Input
Two integers: lower and upper bound.

### Output
Armstrong numbers separated by space.',
  'Medium',
  'Number Properties',
  array['Armstrong Numbers', 'Range', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1 500", "output": "1 2 3 4 5 6 7 8 9 153 370 371 407", "explanation": "Sample for Print Armstrong Numbers in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #051: Print Armstrong Numbers in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #051: Print Armstrong Numbers in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #051: Print Armstrong Numbers in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000152',
  'loops',
  52,
  '#052 Check if a Number is a Strong Number',
  'loop-052-check-if-a-number-is-a-strong-number',
  'Write a program to check whether a given number is a strong number — the sum of the factorials of its digits equals the number itself.

### Input
A single integer.

### Output
Print ''Strong'' or ''Not Strong''.',
  'Medium',
  'Number Properties',
  array['Strong Numbers', 'Factorials', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "145", "output": "Strong", "explanation": "Sample for Check if a Number is a Strong Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #052: Check if a Number is a Strong Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #052: Check if a Number is a Strong Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #052: Check if a Number is a Strong Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000153',
  'loops',
  53,
  '#053 Check if a Number is a Harshad Number',
  'loop-053-check-if-a-number-is-a-harshad-number',
  'Write a program to check whether a given number is a Harshad (Niven) number — divisible by the sum of its digits.

### Input
A single integer.

### Output
Print ''Harshad'' or ''Not Harshad''.',
  'Medium',
  'Number Properties',
  array['Harshad/Niven Numbers', 'Divisibility', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "18", "output": "Harshad", "explanation": "Sample for Check if a Number is a Harshad Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #053: Check if a Number is a Harshad Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #053: Check if a Number is a Harshad Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #053: Check if a Number is a Harshad Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000154',
  'loops',
  54,
  '#054 Check if a Number is an Automorphic Number',
  'loop-054-check-if-a-number-is-an-automorphic-number',
  'Write a program to check whether a given number is automorphic — its square ends with the number itself.

### Input
A single integer.

### Output
Print ''Automorphic'' or ''Not Automorphic''.',
  'Medium',
  'Number Properties',
  array['Automorphic Numbers', 'Squares', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "25", "output": "Automorphic", "explanation": "Sample for Check if a Number is an Automorphic Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #054: Check if a Number is an Automorphic Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #054: Check if a Number is an Automorphic Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #054: Check if a Number is an Automorphic Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000155',
  'loops',
  55,
  '#055 Check if a Number is a Neon Number',
  'loop-055-check-if-a-number-is-a-neon-number',
  'Write a program to check whether a given number is a Neon number — the sum of the digits of its square equals the number itself.

### Input
A single integer.

### Output
Print ''Neon'' or ''Not Neon''.',
  'Medium',
  'Number Properties',
  array['Neon Numbers', 'Digit Sum of Square', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "9", "output": "Neon", "explanation": "Sample for Check if a Number is a Neon Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #055: Check if a Number is a Neon Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #055: Check if a Number is a Neon Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #055: Check if a Number is a Neon Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000156',
  'loops',
  56,
  '#056 Check if a Number is a Spy Number',
  'loop-056-check-if-a-number-is-a-spy-number',
  'Write a program to check whether a given number is a Spy number — the sum of its digits equals the product of its digits.

### Input
A single integer.

### Output
Print ''Spy'' or ''Not Spy''.',
  'Hard',
  'Number Properties',
  array['Spy Numbers', 'Sum vs Product', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1124", "output": "Spy", "explanation": "Sample for Check if a Number is a Spy Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #056: Check if a Number is a Spy Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #056: Check if a Number is a Spy Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #056: Check if a Number is a Spy Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000157',
  'loops',
  57,
  '#057 Check if a Number is a Happy Number',
  'loop-057-check-if-a-number-is-a-happy-number',
  'Write a program to check whether a given number is a Happy number — repeatedly summing the squares of its digits eventually reaches 1.

### Input
A single integer.

### Output
Print ''Happy'' or ''Not Happy''.',
  'Hard',
  'Number Properties',
  array['Happy Numbers', 'Cycle Detection', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "19", "output": "Happy", "explanation": "Sample for Check if a Number is a Happy Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #057: Check if a Number is a Happy Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #057: Check if a Number is a Happy Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #057: Check if a Number is a Happy Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000158',
  'loops',
  58,
  '#058 Check if a Number is a Disarium Number',
  'loop-058-check-if-a-number-is-a-disarium-number',
  'Write a program to check whether a given number is a Disarium number — each digit raised to the power of its position sums to the number itself.

### Input
A single integer.

### Output
Print ''Disarium'' or ''Not Disarium''.',
  'Hard',
  'Number Properties',
  array['Disarium Numbers', 'Positional Powers', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "135", "output": "Disarium", "explanation": "Sample for Check if a Number is a Disarium Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #058: Check if a Number is a Disarium Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #058: Check if a Number is a Disarium Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #058: Check if a Number is a Disarium Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000159',
  'loops',
  59,
  '#059 Print Disarium Numbers in a Range',
  'loop-059-print-disarium-numbers-in-a-range',
  'Write a program to print all Disarium numbers between two given limits.

### Input
Two integers: lower and upper bound.

### Output
Disarium numbers separated by space.',
  'Hard',
  'Number Properties',
  array['Disarium Numbers', 'Range', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1 200", "output": "1 2 3 4 5 6 7 8 9 89 135 175", "explanation": "Sample for Print Disarium Numbers in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #059: Print Disarium Numbers in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #059: Print Disarium Numbers in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #059: Print Disarium Numbers in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000160',
  'loops',
  60,
  '#060 Count Perfect Numbers in a Range',
  'loop-060-count-perfect-numbers-in-a-range',
  'Write a program to count how many perfect numbers exist between two given limits.

### Input
Two integers: lower and upper bound.

### Output
Count of perfect numbers.',
  'Hard',
  'Number Properties',
  array['Perfect Numbers', 'Counter', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1 500", "output": "3", "explanation": "Sample for Count Perfect Numbers in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #060: Count Perfect Numbers in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #060: Count Perfect Numbers in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #060: Count Perfect Numbers in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000161',
  'loops',
  61,
  '#061 Find the GCD of Two Numbers',
  'loop-061-find-the-gcd-of-two-numbers',
  'Write a program to find the greatest common divisor (GCD) of two numbers using a loop.

### Input
Two integers.

### Output
The GCD value.',
  'Easy',
  'GCD, LCM & Math Logic',
  array['GCD', 'Divisors', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "24 36", "output": "12", "explanation": "Sample for Find the GCD of Two Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #061: Find the GCD of Two Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #061: Find the GCD of Two Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #061: Find the GCD of Two Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000162',
  'loops',
  62,
  '#062 Find GCD Using the Euclidean Algorithm',
  'loop-062-find-gcd-using-the-euclidean-algorithm',
  'Write a program to find the GCD of two numbers using the Euclidean algorithm implemented with a loop.

### Input
Two integers.

### Output
The GCD value.',
  'Medium',
  'GCD, LCM & Math Logic',
  array['GCD', 'Euclidean Algorithm', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "48 18", "output": "6", "explanation": "Sample for Find GCD Using the Euclidean Algorithm"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #062: Find GCD Using the Euclidean Algorithm\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #062: Find GCD Using the Euclidean Algorithm\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #062: Find GCD Using the Euclidean Algorithm\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000163',
  'loops',
  63,
  '#063 Find the LCM of Two Numbers',
  'loop-063-find-the-lcm-of-two-numbers',
  'Write a program to find the least common multiple (LCM) of two numbers using a loop.

### Input
Two integers.

### Output
The LCM value.',
  'Medium',
  'GCD, LCM & Math Logic',
  array['LCM', 'Multiples', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4 6", "output": "12", "explanation": "Sample for Find the LCM of Two Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #063: Find the LCM of Two Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #063: Find the LCM of Two Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #063: Find the LCM of Two Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000164',
  'loops',
  64,
  '#064 Find the GCD of Three Numbers',
  'loop-064-find-the-gcd-of-three-numbers',
  'Write a program to find the GCD of three numbers using nested loop-based logic.

### Input
Three integers.

### Output
The GCD of the three numbers.',
  'Medium',
  'GCD, LCM & Math Logic',
  array['GCD', 'Multiple Numbers', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "12 18 24", "output": "6", "explanation": "Sample for Find the GCD of Three Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #064: Find the GCD of Three Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #064: Find the GCD of Three Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #064: Find the GCD of Three Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000165',
  'loops',
  65,
  '#065 Find the LCM of Three Numbers',
  'loop-065-find-the-lcm-of-three-numbers',
  'Write a program to find the LCM of three numbers using loop-based logic.

### Input
Three integers.

### Output
The LCM of the three numbers.',
  'Medium',
  'GCD, LCM & Math Logic',
  array['LCM', 'Multiple Numbers', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4 6 8", "output": "24", "explanation": "Sample for Find the LCM of Three Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #065: Find the LCM of Three Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #065: Find the LCM of Three Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #065: Find the LCM of Three Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000166',
  'loops',
  66,
  '#066 Check if Two Numbers are Co-prime',
  'loop-066-check-if-two-numbers-are-co-prime',
  'Write a program to check whether two given numbers are co-prime — their GCD is 1.

### Input
Two integers.

### Output
Print ''Co-prime'' or ''Not Co-prime''.',
  'Medium',
  'GCD, LCM & Math Logic',
  array['Co-prime Numbers', 'GCD', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "8 15", "output": "Co-prime", "explanation": "Sample for Check if Two Numbers are Co-prime"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #066: Check if Two Numbers are Co-prime\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #066: Check if Two Numbers are Co-prime\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #066: Check if Two Numbers are Co-prime\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000167',
  'loops',
  67,
  '#067 Print Common Factors of Two Numbers',
  'loop-067-print-common-factors-of-two-numbers',
  'Write a program to print all common factors shared by two given numbers.

### Input
Two integers.

### Output
Common factors separated by space.',
  'Medium',
  'GCD, LCM & Math Logic',
  array['Common Factors', 'Divisors', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "24 36", "output": "1 2 3 4 6 12", "explanation": "Sample for Print Common Factors of Two Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #067: Print Common Factors of Two Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #067: Print Common Factors of Two Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #067: Print Common Factors of Two Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000168',
  'loops',
  68,
  '#068 Count Common Factors of Two Numbers',
  'loop-068-count-common-factors-of-two-numbers',
  'Write a program to count how many common factors two given numbers share.

### Input
Two integers.

### Output
Count of common factors.',
  'Medium',
  'GCD, LCM & Math Logic',
  array['Common Factors', 'Counter', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "24 36", "output": "6", "explanation": "Sample for Count Common Factors of Two Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #068: Count Common Factors of Two Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #068: Count Common Factors of Two Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #068: Count Common Factors of Two Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000169',
  'loops',
  69,
  '#069 Sum of Common Factors of Two Numbers',
  'loop-069-sum-of-common-factors-of-two-numbers',
  'Write a program to calculate the sum of all common factors shared by two given numbers.

### Input
Two integers.

### Output
Sum of common factors.',
  'Hard',
  'GCD, LCM & Math Logic',
  array['Common Factors', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "24 36", "output": "28", "explanation": "Sample for Sum of Common Factors of Two Numbers"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #069: Sum of Common Factors of Two Numbers\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #069: Sum of Common Factors of Two Numbers\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #069: Sum of Common Factors of Two Numbers\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000170',
  'loops',
  70,
  '#070 Count Numbers Divisible by Both 3 and 5 in a Range',
  'loop-070-count-numbers-divisible-by-both-3-and-5-in-a-range',
  'Write a program to count how many numbers between two given limits are divisible by both 3 and 5.

### Input
Two integers: lower and upper bound.

### Output
Count of numbers divisible by 15.',
  'Hard',
  'GCD, LCM & Math Logic',
  array['Multiple Divisibility Conditions', 'Range', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "1 100", "output": "6", "explanation": "Sample for Count Numbers Divisible by Both 3 and 5 in a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #070: Count Numbers Divisible by Both 3 and 5 in a Range\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #070: Count Numbers Divisible by Both 3 and 5 in a Range\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #070: Count Numbers Divisible by Both 3 and 5 in a Range\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000171',
  'loops',
  71,
  '#071 Print the Fibonacci Series up to N Terms',
  'loop-071-print-the-fibonacci-series-up-to-n-terms',
  'Write a program to print the first N terms of the Fibonacci series using a loop.

### Input
A single integer N.

### Output
Fibonacci sequence terms separated by space.',
  'Easy',
  'Series & Sequences',
  array['Fibonacci', 'Series', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "8", "output": "0 1 1 2 3 5 8 13", "explanation": "Sample for Print the Fibonacci Series up to N Terms"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #071: Print the Fibonacci Series up to N Terms\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #071: Print the Fibonacci Series up to N Terms\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #071: Print the Fibonacci Series up to N Terms\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000172',
  'loops',
  72,
  '#072 Find the Nth Fibonacci Number',
  'loop-072-find-the-nth-fibonacci-number',
  'Write a program to find the Nth term of the Fibonacci series without storing the full sequence.

### Input
A single integer N (1-indexed or 0-indexed as per N=10 -> 34).

### Output
The Nth Fibonacci number.',
  'Medium',
  'Series & Sequences',
  array['Fibonacci', 'Nth Term', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "34", "explanation": "Sample for Find the Nth Fibonacci Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #072: Find the Nth Fibonacci Number\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #072: Find the Nth Fibonacci Number\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #072: Find the Nth Fibonacci Number\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000173',
  'loops',
  73,
  '#073 Sum of the Fibonacci Series up to N Terms',
  'loop-073-sum-of-the-fibonacci-series-up-to-n-terms',
  'Write a program to calculate the sum of the first N terms of the Fibonacci series.

### Input
A single integer N.

### Output
Sum of the first N terms.',
  'Medium',
  'Series & Sequences',
  array['Fibonacci', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "8", "output": "33", "explanation": "Sample for Sum of the Fibonacci Series up to N Terms"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #073: Sum of the Fibonacci Series up to N Terms\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #073: Sum of the Fibonacci Series up to N Terms\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #073: Sum of the Fibonacci Series up to N Terms\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000174',
  'loops',
  74,
  '#074 Print an Arithmetic Sequence',
  'loop-074-print-an-arithmetic-sequence',
  'Write a program to print an arithmetic sequence given the first term, common difference, and number of terms.

### Input
Three integers: first term, common difference, terms.

### Output
Sequence terms separated by space.',
  'Easy',
  'Series & Sequences',
  array['Mathematical Series', 'AP', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "2 3 6", "output": "2 5 8 11 14 17", "explanation": "Sample for Print an Arithmetic Sequence"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #074: Print an Arithmetic Sequence\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #074: Print an Arithmetic Sequence\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #074: Print an Arithmetic Sequence\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000175',
  'loops',
  75,
  '#075 Sum of an Arithmetic Sequence',
  'loop-075-sum-of-an-arithmetic-sequence',
  'Write a program to calculate the sum of an arithmetic sequence given its first term, common difference, and number of terms.

### Input
Three integers: first term, common difference, terms.

### Output
Total sum.',
  'Medium',
  'Series & Sequences',
  array['Mathematical Series', 'AP Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "2 3 6", "output": "57", "explanation": "Sample for Sum of an Arithmetic Sequence"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #075: Sum of an Arithmetic Sequence\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #075: Sum of an Arithmetic Sequence\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #075: Sum of an Arithmetic Sequence\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000176',
  'loops',
  76,
  '#076 Print a Squares Series up to N Terms',
  'loop-076-print-a-squares-series-up-to-n-terms',
  'Write a program to print the series of squares of the first N natural numbers.

### Input
A single integer N.

### Output
Squares separated by space.',
  'Easy',
  'Series & Sequences',
  array['Mathematical Series', 'Squares', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "1 4 9 16 25", "explanation": "Sample for Print a Squares Series up to N Terms"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #076: Print a Squares Series up to N Terms\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #076: Print a Squares Series up to N Terms\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #076: Print a Squares Series up to N Terms\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000177',
  'loops',
  77,
  '#077 Sum of Squares up to N',
  'loop-077-sum-of-squares-up-to-n',
  'Write a program to calculate the sum of the squares of the first N natural numbers.

### Input
A single integer N.

### Output
Sum of squares.',
  'Medium',
  'Series & Sequences',
  array['Mathematical Series', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "55", "explanation": "Sample for Sum of Squares up to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #077: Sum of Squares up to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #077: Sum of Squares up to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #077: Sum of Squares up to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000178',
  'loops',
  78,
  '#078 Print a Cubes Series up to N Terms',
  'loop-078-print-a-cubes-series-up-to-n-terms',
  'Write a program to print the series of cubes of the first N natural numbers.

### Input
A single integer N.

### Output
Cubes separated by space.',
  'Easy',
  'Series & Sequences',
  array['Mathematical Series', 'Cubes', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "1 8 27 64", "explanation": "Sample for Print a Cubes Series up to N Terms"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #078: Print a Cubes Series up to N Terms\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #078: Print a Cubes Series up to N Terms\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #078: Print a Cubes Series up to N Terms\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000179',
  'loops',
  79,
  '#079 Sum of Cubes up to N',
  'loop-079-sum-of-cubes-up-to-n',
  'Write a program to calculate the sum of the cubes of the first N natural numbers.

### Input
A single integer N.

### Output
Sum of cubes.',
  'Medium',
  'Series & Sequences',
  array['Mathematical Series', 'Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "100", "explanation": "Sample for Sum of Cubes up to N"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #079: Sum of Cubes up to N\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #079: Sum of Cubes up to N\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #079: Sum of Cubes up to N\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000180',
  'loops',
  80,
  '#080 Print Triangular Numbers up to N Terms',
  'loop-080-print-triangular-numbers-up-to-n-terms',
  'Write a program to print the first N triangular numbers using a loop.

### Input
A single integer N.

### Output
Triangular numbers separated by space.',
  'Medium',
  'Series & Sequences',
  array['Mathematical Series', 'Triangular Numbers', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "1 3 6 10 15", "explanation": "Sample for Print Triangular Numbers up to N Terms"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #080: Print Triangular Numbers up to N Terms\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #080: Print Triangular Numbers up to N Terms\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #080: Print Triangular Numbers up to N Terms\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000181',
  'loops',
  81,
  '#081 Print a Geometric Sequence',
  'loop-081-print-a-geometric-sequence',
  'Write a program to print a geometric sequence given the first term, common ratio, and number of terms.

### Input
Three integers: first term, common ratio, terms.

### Output
GP terms separated by space.',
  'Medium',
  'Series & Sequences',
  array['Mathematical Series', 'GP', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "2 3 5", "output": "2 6 18 54 162", "explanation": "Sample for Print a Geometric Sequence"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #081: Print a Geometric Sequence\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #081: Print a Geometric Sequence\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #081: Print a Geometric Sequence\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000182',
  'loops',
  82,
  '#082 Sum of a Geometric Sequence',
  'loop-082-sum-of-a-geometric-sequence',
  'Write a program to calculate the sum of a geometric sequence given its first term, common ratio, and number of terms.

### Input
Three integers: first term, common ratio, terms.

### Output
Total GP sum.',
  'Medium',
  'Series & Sequences',
  array['Mathematical Series', 'GP Sum', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "2 3 5", "output": "242", "explanation": "Sample for Sum of a Geometric Sequence"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #082: Sum of a Geometric Sequence\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #082: Sum of a Geometric Sequence\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #082: Sum of a Geometric Sequence\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000183',
  'loops',
  83,
  '#083 Print a Series with Alternating Signs',
  'loop-083-print-a-series-with-alternating-signs',
  'Write a program to print a series of the first N natural numbers with alternating positive and negative signs.

### Input
A single integer N.

### Output
Alternating sign series separated by space.',
  'Medium',
  'Series & Sequences',
  array['Alternating Series', 'Sign Flipping', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "6", "output": "1 -2 3 -4 5 -6", "explanation": "Sample for Print a Series with Alternating Signs"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #083: Print a Series with Alternating Signs\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #083: Print a Series with Alternating Signs\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #083: Print a Series with Alternating Signs\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000184',
  'loops',
  84,
  '#084 Sum of a Fractional Series',
  'loop-084-sum-of-a-fractional-series',
  'Write a program to calculate the sum of the series 1/1 + 1/2 + 1/3 + ... + 1/N using a loop.

### Input
A single integer N.

### Output
Sum formatted to 3 decimal places.',
  'Hard',
  'Series & Sequences',
  array['Fractional Series', 'Harmonic', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "2.083", "explanation": "Sample for Sum of a Fractional Series"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #084: Sum of a Fractional Series\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #084: Sum of a Fractional Series\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #084: Sum of a Fractional Series\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000185',
  'loops',
  85,
  '#085 Print a Series of Repeated Digits',
  'loop-085-print-a-series-of-repeated-digits',
  'Write a program to print a series where each term repeats a digit an increasing number of times, such as 1, 22, 333, 4444, up to N terms.

### Input
A single integer N.

### Output
Series terms separated by space.',
  'Hard',
  'Series & Sequences',
  array['Repeated-Digit Series', 'Concatenation', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "1 22 333 4444", "explanation": "Sample for Print a Series of Repeated Digits"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #085: Print a Series of Repeated Digits\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #085: Print a Series of Repeated Digits\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #085: Print a Series of Repeated Digits\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000186',
  'loops',
  86,
  '#086 Square Pattern',
  'loop-086-square-pattern',
  'Write a program to print a solid square pattern of stars with side length N using nested loops.

### Input
A single integer N.

### Output
Square pattern with spaces between stars.',
  'Easy',
  'Nested Loops & Basic Patterns',
  array['Nested Loops', 'Squares', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "* * * *\n* * * *\n* * * *\n* * * *", "explanation": "Sample for Square Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #086: Square Pattern\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #086: Square Pattern\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #086: Square Pattern\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000187',
  'loops',
  87,
  '#087 Rectangle Pattern',
  'loop-087-rectangle-pattern',
  'Write a program to print a solid rectangle pattern of stars with R rows and C columns using nested loops.

### Input
Two integers: R rows and C columns.

### Output
Rectangle pattern with spaces between stars.',
  'Easy',
  'Nested Loops & Basic Patterns',
  array['Nested Loops', 'Rectangles', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "3 6", "output": "* * * * * *\n* * * * * *\n* * * * * *", "explanation": "Sample for Rectangle Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #087: Rectangle Pattern\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #087: Rectangle Pattern\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #087: Rectangle Pattern\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000188',
  'loops',
  88,
  '#088 Increasing Star Triangle',
  'loop-088-increasing-star-triangle',
  'Write a program to print a right-angled triangle of stars where each row has one more star than the previous row.

### Input
A single integer N.

### Output
Triangle pattern with spaces between stars.',
  'Easy',
  'Nested Loops & Basic Patterns',
  array['Star Patterns', 'Triangles', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "*\n* *\n* * *\n* * * *\n* * * * *", "explanation": "Sample for Increasing Star Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #088: Increasing Star Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #088: Increasing Star Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #088: Increasing Star Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000189',
  'loops',
  89,
  '#089 Decreasing Star Triangle',
  'loop-089-decreasing-star-triangle',
  'Write a program to print an inverted right-angled triangle of stars where each row has one fewer star than the previous row.

### Input
A single integer N.

### Output
Inverted triangle pattern with spaces between stars.',
  'Medium',
  'Nested Loops & Basic Patterns',
  array['Star Patterns', 'Inverted Triangles', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "* * * * *\n* * * *\n* * *\n* *\n*", "explanation": "Sample for Decreasing Star Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #089: Decreasing Star Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #089: Decreasing Star Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #089: Decreasing Star Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000190',
  'loops',
  90,
  '#090 Increasing Number Triangle',
  'loop-090-increasing-number-triangle',
  'Write a program to print a triangle where each row lists increasing numbers starting from 1 up to the row number.

### Input
A single integer N.

### Output
Number triangle.',
  'Medium',
  'Nested Loops & Basic Patterns',
  array['Number Patterns', 'Triangles', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "1\n1 2\n1 2 3\n1 2 3 4", "explanation": "Sample for Increasing Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #090: Increasing Number Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #090: Increasing Number Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #090: Increasing Number Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000191',
  'loops',
  91,
  '#091 Repeated-Number Triangle',
  'loop-091-repeated-number-triangle',
  'Write a program to print a triangle where every number in a row equals the row number, repeated that many times.

### Input
A single integer N.

### Output
Repeated number triangle.',
  'Medium',
  'Nested Loops & Basic Patterns',
  array['Number Patterns', 'Triangles', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "1\n2 2\n3 3 3\n4 4 4 4", "explanation": "Sample for Repeated-Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #091: Repeated-Number Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #091: Repeated-Number Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #091: Repeated-Number Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000192',
  'loops',
  92,
  '#092 Reverse Number Pattern',
  'loop-092-reverse-number-pattern',
  'Write a program to print a triangle where each row counts downward from the row number to 1.

### Input
A single integer N.

### Output
Reverse number triangle.',
  'Medium',
  'Nested Loops & Basic Patterns',
  array['Number Patterns', 'Reverse Triangles', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "1\n2 1\n3 2 1\n4 3 2 1", "explanation": "Sample for Reverse Number Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #092: Reverse Number Pattern\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #092: Reverse Number Pattern\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #092: Reverse Number Pattern\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000193',
  'loops',
  93,
  '#093 Reverse-Number Triangle',
  'loop-093-reverse-number-triangle',
  'Write a program to print a triangle where each row counts downward starting from N to (N minus the row index).

### Input
A single integer N.

### Output
Reverse number triangle from N.',
  'Medium',
  'Nested Loops & Basic Patterns',
  array['Number Patterns', 'Reverse Triangles', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "4 3 2 1\n4 3 2\n4 3\n4", "explanation": "Sample for Reverse-Number Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #093: Reverse-Number Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #093: Reverse-Number Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #093: Reverse-Number Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000194',
  'loops',
  94,
  '#094 Hollow Square Pattern',
  'loop-094-hollow-square-pattern',
  'Write a program to print a hollow square of stars with side length N, printing stars only along the border.

### Input
A single integer N.

### Output
Hollow square pattern.',
  'Medium',
  'Nested Loops & Basic Patterns',
  array['Hollow Patterns', 'Boundary Logic', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "* * * * *\n*       *\n*       *\n*       *\n* * * * *", "explanation": "Sample for Hollow Square Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #094: Hollow Square Pattern\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #094: Hollow Square Pattern\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #094: Hollow Square Pattern\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000195',
  'loops',
  95,
  '#095 Right-Aligned Triangle',
  'loop-095-right-aligned-triangle',
  'Write a program to print a right-angled triangle of stars aligned to the right edge, using leading spaces to shift each row.

### Input
A single integer N.

### Output
Right-aligned triangle.',
  'Medium',
  'Nested Loops & Basic Patterns',
  array['Star Patterns', 'Leading Spaces', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "        *\n      * *\n    * * *\n  * * * *\n* * * * *", "explanation": "Sample for Right-Aligned Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #095: Right-Aligned Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #095: Right-Aligned Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #095: Right-Aligned Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000196',
  'loops',
  96,
  '#096 Centered Pyramid',
  'loop-096-centered-pyramid',
  'Write a program to print a centered pyramid of stars with N rows, using leading spaces to center each row.

### Input
A single integer N.

### Output
Centered star pyramid.',
  'Hard',
  'Advanced Loop & Pattern Problems',
  array['Pyramid Patterns', 'Centered', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   * *\n  * * *\n * * * *\n* * * * *", "explanation": "Sample for Centered Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #096: Centered Pyramid\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #096: Centered Pyramid\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #096: Centered Pyramid\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000197',
  'loops',
  97,
  '#097 Inverted Centered Pyramid',
  'loop-097-inverted-centered-pyramid',
  'Write a program to print an inverted centered pyramid of stars with N rows, using leading spaces to center each row.

### Input
A single integer N.

### Output
Inverted centered pyramid.',
  'Hard',
  'Advanced Loop & Pattern Problems',
  array['Pyramid Patterns', 'Inverted', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "* * * * *\n * * * *\n  * * *\n   * *\n    *", "explanation": "Sample for Inverted Centered Pyramid"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #097: Inverted Centered Pyramid\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #097: Inverted Centered Pyramid\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #097: Inverted Centered Pyramid\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000198',
  'loops',
  98,
  '#098 Floyd''s Triangle',
  'loop-098-floyd's-triangle',
  'Write a program to print Floyd''s Triangle with N rows, where consecutive natural numbers fill each row continuing from the previous row.

### Input
A single integer N.

### Output
Floyd''s triangle.',
  'Hard',
  'Advanced Loop & Pattern Problems',
  array['Advanced Patterns', 'Continuous Numbering', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "4", "output": "1\n2 3\n4 5 6\n7 8 9 10", "explanation": "Sample for Floyd''s Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #098: Floyd''s Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #098: Floyd''s Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #098: Floyd''s Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000199',
  'loops',
  99,
  '#099 Pascal''s Triangle',
  'loop-099-pascal's-triangle',
  'Write a program to print Pascal''s Triangle with N rows, where each value is the sum of the two values above it.

### Input
A single integer N.

### Output
Pascal''s triangle.',
  'Hard',
  'Advanced Loop & Pattern Problems',
  array['Advanced Patterns', 'Pascal's Triangle', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1", "explanation": "Sample for Pascal''s Triangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #099: Pascal''s Triangle\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #099: Pascal''s Triangle\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #099: Pascal''s Triangle\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000200',
  'loops',
  100,
  '#100 Diamond Pattern',
  'loop-100-diamond-pattern',
  'Write a program to print a diamond pattern of stars with N rows in the upper half, combining a centered pyramid with its inverted mirror.

### Input
A single integer N.

### Output
Centered star diamond.',
  'Hard',
  'Advanced Loop & Pattern Problems',
  array['Advanced Patterns', 'Diamonds', 'Loop Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "    *\n   * *\n  * * *\n * * * *\n* * * * *\n * * * *\n  * * *\n   * *\n    *", "explanation": "Sample for Diamond Pattern"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Loop Problem #100: Diamond Pattern\nint main() {\n    // Write your loop code here\n    return 0;\n}\n", "python": "# Loop Problem #100: Diamond Pattern\ndef solve():\n    # Write your loop code here\n    pass\n\nsolve()\n", "javascript": "// Loop Problem #100: Diamond Pattern\nfunction solve() {\n    // Write your loop code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your loop code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000201',
  'variables',
  1,
  '#001 Declare and Print an Integer',
  'var-001-declare-and-print-an-integer',
  'Declare an integer variable, initialize it with the given input value, and print it.

### Input
A single integer N.

### Output
Print the value of N.',
  'Easy',
  'Declaring & Initializing',
  array['Declaration', 'Output', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "42", "output": "42", "explanation": "Sample for Declare and Print an Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #001: Declare and Print an Integer\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #001: Declare and Print an Integer\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #001: Declare and Print an Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000202',
  'variables',
  2,
  '#002 Declare and Print a Float',
  'var-002-declare-and-print-a-float',
  'Declare a float variable, initialize it with the given input, and print it rounded to 2 decimal places.

### Input
A single decimal number.

### Output
Print the value with exactly 2 decimal places.',
  'Easy',
  'Declaring & Initializing',
  array['Declaration', 'Output', 'Float', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3.14159", "output": "3.14", "explanation": "Sample for Declare and Print a Float"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #002: Declare and Print a Float\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #002: Declare and Print a Float\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #002: Declare and Print a Float\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000203',
  'variables',
  3,
  '#003 Declare and Print a Character',
  'var-003-declare-and-print-a-character',
  'Declare a char variable, initialize it with the given input character, and print it.

### Input
A single character.

### Output
Print the character.',
  'Easy',
  'Declaring & Initializing',
  array['Declaration', 'Output', 'Char', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "A", "output": "A", "explanation": "Sample for Declare and Print a Character"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #003: Declare and Print a Character\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #003: Declare and Print a Character\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #003: Declare and Print a Character\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000204',
  'variables',
  4,
  '#004 Declare and Print a Boolean',
  'var-004-declare-and-print-a-boolean',
  'Declare a bool variable from the given input (1 or 0) and print it as the word true or false.

### Input
A single integer, 1 or 0.

### Output
Print ''true'' if the input is 1, otherwise ''false''.',
  'Easy',
  'Declaring & Initializing',
  array['Declaration', 'Output', 'Bool', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1", "output": "true", "explanation": "Sample for Declare and Print a Boolean"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #004: Declare and Print a Boolean\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #004: Declare and Print a Boolean\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #004: Declare and Print a Boolean\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000205',
  'variables',
  5,
  '#005 Declare Multiple Variables on One Line',
  'var-005-declare-multiple-variables-on-one-line',
  'Declare three integer variables a, b, c on a single line, initialize them from input, and print their sum.

### Input
Three integers a, b and c.

### Output
Print the sum a + b + c.',
  'Easy',
  'Declaring & Initializing',
  array['Declaration', 'Multiple Variables', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3 5 7", "output": "15", "explanation": "Sample for Declare Multiple Variables on One Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #005: Declare Multiple Variables on One Line\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #005: Declare Multiple Variables on One Line\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #005: Declare Multiple Variables on One Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000206',
  'variables',
  6,
  '#006 Reassigning a Variable''s Value',
  'var-006-reassigning-a-variable's-value',
  'Declare an integer variable initialized to 0, print it, then reassign it to the given input value and print it again.

### Input
A single integer N.

### Output
Print 0 on the first line, then N on the second line.',
  'Easy',
  'Declaring & Initializing',
  array['Assignment', 'Reassignment', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "25", "output": "0\n25", "explanation": "Sample for Reassigning a Variable''s Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #006: Reassigning a Variable''s Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #006: Reassigning a Variable''s Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #006: Reassigning a Variable''s Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000207',
  'variables',
  7,
  '#007 Declare a Variable Using auto',
  'var-007-declare-a-variable-using-auto',
  'Declare a variable using the auto keyword, initialize it with the given integer input, and print double its value.

### Input
A single integer N.

### Output
Print 2 * N.',
  'Easy',
  'Declaring & Initializing',
  array['auto', 'Type Inference', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "6", "output": "12", "explanation": "Sample for Declare a Variable Using auto"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #007: Declare a Variable Using auto\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #007: Declare a Variable Using auto\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #007: Declare a Variable Using auto\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000208',
  'variables',
  8,
  '#008 Declare and Print a String Variable',
  'var-008-declare-and-print-a-string-variable',
  'Declare a std::string variable, initialize it with the given name, and print a greeting using it.

### Input
A single word (name).

### Output
Print ''Hello, <name>!''',
  'Easy',
  'Declaring & Initializing',
  array['std::string', 'Declaration', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "Aarav", "output": "Hello, Aarav!", "explanation": "Sample for Declare and Print a String Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #008: Declare and Print a String Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #008: Declare and Print a String Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #008: Declare and Print a String Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000209',
  'variables',
  9,
  '#009 Print Variable with Label',
  'var-009-print-variable-with-label',
  'Read an integer into a variable and print it with a descriptive label.

### Input
A single integer N.

### Output
Print ''Value: N''.',
  'Easy',
  'Printing & Formatting',
  array['Output', 'Formatting', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "Value: 7", "explanation": "Sample for Print Variable with Label"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #009: Print Variable with Label\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #009: Print Variable with Label\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #009: Print Variable with Label\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000210',
  'variables',
  10,
  '#010 Print Multiple Variables in One Line',
  'var-010-print-multiple-variables-in-one-line',
  'Read three integers into variables a, b, c and print them on one line separated by spaces.

### Input
Three integers.

### Output
Print all three values separated by single spaces.',
  'Easy',
  'Printing & Formatting',
  array['Output', 'Formatting', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1 2 3", "output": "1 2 3", "explanation": "Sample for Print Multiple Variables in One Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #010: Print Multiple Variables in One Line\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #010: Print Multiple Variables in One Line\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #010: Print Multiple Variables in One Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000211',
  'variables',
  11,
  '#011 Print Variables on Separate Lines',
  'var-011-print-variables-on-separate-lines',
  'Read two integers into variables and print each one on its own line.

### Input
Two integers a and b.

### Output
Print a, then b, each on its own line.',
  'Easy',
  'Printing & Formatting',
  array['Output', 'Formatting', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "4 5", "output": "4\n5", "explanation": "Sample for Print Variables on Separate Lines"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #011: Print Variables on Separate Lines\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #011: Print Variables on Separate Lines\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #011: Print Variables on Separate Lines\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000212',
  'variables',
  12,
  '#012 Print Float with Fixed 3 Decimal Places',
  'var-012-print-float-with-fixed-3-decimal-places',
  'Read a float value and print it with exactly 3 decimal places.

### Input
A single decimal number.

### Output
Print the value with 3 decimal places.',
  'Easy',
  'Printing & Formatting',
  array['Output', 'Precision', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "2.5", "output": "2.500", "explanation": "Sample for Print Float with Fixed 3 Decimal Places"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #012: Print Float with Fixed 3 Decimal Places\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #012: Print Float with Fixed 3 Decimal Places\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #012: Print Float with Fixed 3 Decimal Places\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000213',
  'variables',
  13,
  '#013 Print Integer with Leading Zeros',
  'var-013-print-integer-with-leading-zeros',
  'Read an integer and print it zero-padded to a total width of 5 characters.

### Input
A single integer N (0 to 99999).

### Output
Print N padded with leading zeros to width 5.',
  'Medium',
  'Printing & Formatting',
  array['Output', 'Width/Padding', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "42", "output": "00042", "explanation": "Sample for Print Integer with Leading Zeros"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #013: Print Integer with Leading Zeros\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #013: Print Integer with Leading Zeros\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #013: Print Integer with Leading Zeros\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000214',
  'variables',
  14,
  '#014 Print Variable Value and Its Type Size',
  'var-014-print-variable-value-and-its-type-size',
  'Read an integer, store it in an int variable, and print both its value and the number of bytes an int occupies.

### Input
A single integer N.

### Output
Print ''Value: N, Size: 4 bytes''.',
  'Medium',
  'Printing & Formatting',
  array['sizeof', 'Output', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "Value: 10, Size: 4 bytes", "explanation": "Sample for Print Variable Value and Its Type Size"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #014: Print Variable Value and Its Type Size\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #014: Print Variable Value and Its Type Size\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #014: Print Variable Value and Its Type Size\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000215',
  'variables',
  15,
  '#015 Print a Character''s ASCII Value',
  'var-015-print-a-character's-ascii-value',
  'Read a character and print its ASCII (integer) value.

### Input
A single character.

### Output
Print the ASCII value of the character as an integer.',
  'Easy',
  'Printing & Formatting',
  array['char', 'ASCII', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "A", "output": "65", "explanation": "Sample for Print a Character''s ASCII Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #015: Print a Character''s ASCII Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #015: Print a Character''s ASCII Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #015: Print a Character''s ASCII Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000216',
  'variables',
  16,
  '#016 Print Boolean as 1/0 and as true/false',
  'var-016-print-boolean-as-1-0-and-as-true-false',
  'Read an integer (1 or 0) into a bool variable and print it first as 1/0, then as true/false.

### Input
A single integer, 1 or 0.

### Output
Print the value as 1/0 on the first line and true/false on the second.',
  'Medium',
  'Printing & Formatting',
  array['bool', 'Output Formatting', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1", "output": "1\ntrue", "explanation": "Sample for Print Boolean as 1/0 and as true/false"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #016: Print Boolean as 1/0 and as true/false\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #016: Print Boolean as 1/0 and as true/false\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #016: Print Boolean as 1/0 and as true/false\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000217',
  'variables',
  17,
  '#017 Sum of an int and a float',
  'var-017-sum-of-an-int-and-a-float',
  'Read an integer and a float, add them together, and print the result (which becomes a float).

### Input
An integer and a decimal number.

### Output
Print their sum.',
  'Easy',
  'Data Types & Ranges',
  array['Type Promotion', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3 2.5", "output": "5.5", "explanation": "Sample for Sum of an int and a float"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #017: Sum of an int and a float\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #017: Sum of an int and a float\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #017: Sum of an int and a float\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000218',
  'variables',
  18,
  '#018 Integer Division vs Float Division',
  'var-018-integer-division-vs-float-division',
  'Read two integers and print both their integer division result and their float division result.

### Input
Two integers a and b.

### Output
Integer division: X
Float division: Y',
  'Medium',
  'Data Types & Ranges',
  array['Type Promotion', 'Division', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "7 2", "output": "Integer division: 3\nFloat division: 3.5", "explanation": "Sample for Integer Division vs Float Division"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #018: Integer Division vs Float Division\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #018: Integer Division vs Float Division\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #018: Integer Division vs Float Division\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000219',
  'variables',
  19,
  '#019 Char Arithmetic',
  'var-019-char-arithmetic',
  'Read a character and an integer, add the integer to the character''s ASCII value, and print the resulting character.

### Input
A character and an integer N.

### Output
Print the character N positions later in the alphabet.',
  'Medium',
  'Data Types & Ranges',
  array['char', 'ASCII Arithmetic', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "A 2", "output": "C", "explanation": "Sample for Char Arithmetic"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #019: Char Arithmetic\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #019: Char Arithmetic\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #019: Char Arithmetic\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000220',
  'variables',
  20,
  '#020 Double Precision Output',
  'var-020-double-precision-output',
  'Read a double value and print it with 8 significant digits.

### Input
A decimal number.

### Output
Print the value using 8 significant digits.',
  'Medium',
  'Data Types & Ranges',
  array['double', 'setprecision', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3.14159265", "output": "3.14159265", "explanation": "Sample for Double Precision Output"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #020: Double Precision Output\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #020: Double Precision Output\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #020: Double Precision Output\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000221',
  'variables',
  21,
  '#021 Storing Large Numbers with long long',
  'var-021-storing-large-numbers-with-long-long',
  'Read a large integer into a long long variable and print it back.

### Input
A large integer (may exceed int range).

### Output
Print the value.',
  'Easy',
  'Data Types & Ranges',
  array['long long', 'Data Types', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "10000000000", "output": "10000000000", "explanation": "Sample for Storing Large Numbers with long long"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #021: Storing Large Numbers with long long\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #021: Storing Large Numbers with long long\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #021: Storing Large Numbers with long long\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000222',
  'variables',
  22,
  '#022 Minimum and Maximum int Value',
  'var-022-minimum-and-maximum-int-value',
  'Print the minimum and maximum values a standard int can hold.

### Input
No input.

### Output
Print INT_MIN then INT_MAX, each on its own line.',
  'Easy',
  'Data Types & Ranges',
  array['climits', 'Data Type Ranges', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "-2147483648\n2147483647", "explanation": "Sample for Minimum and Maximum int Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #022: Minimum and Maximum int Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #022: Minimum and Maximum int Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #022: Minimum and Maximum int Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000223',
  'variables',
  23,
  '#023 Unsigned int Behavior',
  'var-023-unsigned-int-behavior',
  'Assign -1 to an unsigned int variable and print the resulting (wrapped-around) value.

### Input
No input.

### Output
Print the value stored in the unsigned int.',
  'Medium',
  'Data Types & Ranges',
  array['unsigned int', 'Overflow', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "4294967295", "explanation": "Sample for Unsigned int Behavior"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #023: Unsigned int Behavior\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #023: Unsigned int Behavior\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #023: Unsigned int Behavior\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000224',
  'variables',
  24,
  '#024 Bool to Int Conversion',
  'var-024-bool-to-int-conversion',
  'Read three 0/1 values into bool variables and print the sum of them treated as integers.

### Input
Three integers, each 0 or 1.

### Output
Print the sum of the three boolean values.',
  'Easy',
  'Data Types & Ranges',
  array['bool', 'Implicit Conversion', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1 0 1", "output": "sum = 2", "explanation": "Sample for Bool to Int Conversion"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #024: Bool to Int Conversion\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #024: Bool to Int Conversion\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #024: Bool to Int Conversion\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000225',
  'variables',
  25,
  '#025 Int to Char Conversion',
  'var-025-int-to-char-conversion',
  'Read an integer ASCII code and print the corresponding character.

### Input
A single integer (valid ASCII code).

### Output
Print the character with that ASCII value.',
  'Easy',
  'Data Types & Ranges',
  array['char', 'Implicit Conversion', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "66", "output": "B", "explanation": "Sample for Int to Char Conversion"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #025: Int to Char Conversion\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #025: Int to Char Conversion\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #025: Int to Char Conversion\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000226',
  'variables',
  26,
  '#026 Float to Int Truncation',
  'var-026-float-to-int-truncation',
  'Read a float value, store it in an int variable, and print the truncated (decimal part removed) result.

### Input
A decimal number.

### Output
Print the truncated integer value.',
  'Easy',
  'Data Types & Ranges',
  array['Casting', 'Truncation', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "9.99", "output": "9", "explanation": "Sample for Float to Int Truncation"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #026: Float to Int Truncation\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #026: Float to Int Truncation\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #026: Float to Int Truncation\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000227',
  'variables',
  27,
  '#027 Add Two Variables',
  'var-027-add-two-variables',
  'Read two integers into variables and print their sum.

### Input
Two integers a and b.

### Output
Print a + b.',
  'Easy',
  'Arithmetic with Variables',
  array['Arithmetic', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "4 5", "output": "9", "explanation": "Sample for Add Two Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #027: Add Two Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #027: Add Two Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #027: Add Two Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000228',
  'variables',
  28,
  '#028 Subtract Two Variables',
  'var-028-subtract-two-variables',
  'Read two integers into variables and print their difference.

### Input
Two integers a and b.

### Output
Print a - b.',
  'Easy',
  'Arithmetic with Variables',
  array['Arithmetic', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "10 3", "output": "7", "explanation": "Sample for Subtract Two Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #028: Subtract Two Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #028: Subtract Two Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #028: Subtract Two Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000229',
  'variables',
  29,
  '#029 Multiply Two Variables',
  'var-029-multiply-two-variables',
  'Read two integers into variables and print their product.

### Input
Two integers a and b.

### Output
Print a * b.',
  'Easy',
  'Arithmetic with Variables',
  array['Arithmetic', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "6 7", "output": "42", "explanation": "Sample for Multiply Two Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #029: Multiply Two Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #029: Multiply Two Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #029: Multiply Two Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000230',
  'variables',
  30,
  '#030 Divide Two Variables',
  'var-030-divide-two-variables',
  'Read two integers into variables and print the integer result of dividing the first by the second.

### Input
Two integers a and b (b divides a evenly).

### Output
Print a / b.',
  'Easy',
  'Arithmetic with Variables',
  array['Arithmetic', 'Division', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "20 4", "output": "5", "explanation": "Sample for Divide Two Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #030: Divide Two Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #030: Divide Two Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #030: Divide Two Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000231',
  'variables',
  31,
  '#031 Modulus of Two Variables',
  'var-031-modulus-of-two-variables',
  'Read two integers into variables and print the remainder when the first is divided by the second.

### Input
Two integers a and b.

### Output
Print a % b.',
  'Easy',
  'Arithmetic with Variables',
  array['Arithmetic', 'Modulus', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "17 5", "output": "2", "explanation": "Sample for Modulus of Two Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #031: Modulus of Two Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #031: Modulus of Two Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #031: Modulus of Two Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000232',
  'variables',
  32,
  '#032 Average of Three Variables',
  'var-032-average-of-three-variables',
  'Read three integers into variables and print their average as an integer.

### Input
Three integers.

### Output
Print the average (integer division).',
  'Easy',
  'Arithmetic with Variables',
  array['Arithmetic', 'Average', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "4 5 9", "output": "6", "explanation": "Sample for Average of Three Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #032: Average of Three Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #032: Average of Three Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #032: Average of Three Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000233',
  'variables',
  33,
  '#033 Area of a Rectangle from Variables',
  'var-033-area-of-a-rectangle-from-variables',
  'Read the length and width of a rectangle into variables and print its area.

### Input
Two integers: length and width.

### Output
Print length * width.',
  'Easy',
  'Arithmetic with Variables',
  array['Arithmetic', 'Real-World', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5 3", "output": "15", "explanation": "Sample for Area of a Rectangle from Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #033: Area of a Rectangle from Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #033: Area of a Rectangle from Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #033: Area of a Rectangle from Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000234',
  'variables',
  34,
  '#034 Simple Interest from Variables',
  'var-034-simple-interest-from-variables',
  'Read principal, rate and time into variables and print the simple interest using SI = P*R*T/100.

### Input
Three integers: principal, rate, time.

### Output
Print the simple interest.',
  'Medium',
  'Arithmetic with Variables',
  array['Arithmetic', 'Real-World Formula', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1000 5 2", "output": "100", "explanation": "Sample for Simple Interest from Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #034: Simple Interest from Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #034: Simple Interest from Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #034: Simple Interest from Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000235',
  'variables',
  35,
  '#035 Convert Celsius to Fahrenheit',
  'var-035-convert-celsius-to-fahrenheit',
  'Read a Celsius temperature into a variable and print the equivalent Fahrenheit temperature.

### Input
An integer, Celsius temperature.

### Output
Print F = C*9/5 + 32.',
  'Medium',
  'Arithmetic with Variables',
  array['Arithmetic', 'Real-World Formula', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "0", "output": "32", "explanation": "Sample for Convert Celsius to Fahrenheit"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #035: Convert Celsius to Fahrenheit\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #035: Convert Celsius to Fahrenheit\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #035: Convert Celsius to Fahrenheit\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000236',
  'variables',
  36,
  '#036 Sum of Digits of a 3-Digit Number',
  'var-036-sum-of-digits-of-a-3-digit-number',
  'Read a 3-digit number into a variable and print the sum of its digits using / and % on variables.

### Input
A 3-digit integer.

### Output
Print the sum of its digits.',
  'Medium',
  'Arithmetic with Variables',
  array['Arithmetic', 'Digit Extraction', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "123", "output": "6", "explanation": "Sample for Sum of Digits of a 3-Digit Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #036: Sum of Digits of a 3-Digit Number\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #036: Sum of Digits of a 3-Digit Number\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #036: Sum of Digits of a 3-Digit Number\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000237',
  'variables',
  37,
  '#037 Implicit Type Conversion',
  'var-037-implicit-type-conversion',
  'Read an integer and a float, add them without any explicit cast, and print the result.

### Input
An integer and a decimal number.

### Output
Print their sum.',
  'Easy',
  'Type Conversion & Casting',
  array['Type Conversion', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5 2.5", "output": "7.5", "explanation": "Sample for Implicit Type Conversion"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #037: Implicit Type Conversion\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #037: Implicit Type Conversion\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #037: Implicit Type Conversion\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000238',
  'variables',
  38,
  '#038 Explicit Cast: float to int',
  'var-038-explicit-cast:-float-to-int',
  'Read a float value and use static_cast to convert and print it as an integer.

### Input
A decimal number.

### Output
Print the value cast to int.',
  'Easy',
  'Type Conversion & Casting',
  array['static_cast', 'Casting', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "9.7", "output": "9", "explanation": "Sample for Explicit Cast: float to int"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #038: Explicit Cast: float to int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #038: Explicit Cast: float to int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #038: Explicit Cast: float to int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000239',
  'variables',
  39,
  '#039 Explicit Cast for Accurate Division',
  'var-039-explicit-cast-for-accurate-division',
  'Read two integers, cast one to a float before dividing, and print the precise (non-truncated) result.

### Input
Two integers a and b.

### Output
Print a / b as a float using a cast.',
  'Medium',
  'Type Conversion & Casting',
  array['static_cast', 'Division', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "7 2", "output": "3.5", "explanation": "Sample for Explicit Cast for Accurate Division"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #039: Explicit Cast for Accurate Division\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #039: Explicit Cast for Accurate Division\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #039: Explicit Cast for Accurate Division\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000240',
  'variables',
  40,
  '#040 Cast Char to Int',
  'var-040-cast-char-to-int',
  'Read a character and print its integer (ASCII) value using an explicit cast.

### Input
A single character.

### Output
Print its ASCII value as an integer.',
  'Easy',
  'Type Conversion & Casting',
  array['Casting', 'ASCII', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "Z", "output": "90", "explanation": "Sample for Cast Char to Int"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #040: Cast Char to Int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #040: Cast Char to Int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #040: Cast Char to Int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000241',
  'variables',
  41,
  '#041 Cast Int to Char',
  'var-041-cast-int-to-char',
  'Read an integer ASCII code and print the corresponding character using an explicit cast.

### Input
A single integer (valid ASCII code).

### Output
Print the character.',
  'Easy',
  'Type Conversion & Casting',
  array['Casting', 'ASCII', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "97", "output": "a", "explanation": "Sample for Cast Int to Char"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #041: Cast Int to Char\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #041: Cast Int to Char\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #041: Cast Int to Char\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000242',
  'variables',
  42,
  '#042 Cast double to float',
  'var-042-cast-double-to-float',
  'Read a double value with many decimal digits, cast it to float, and print it using default precision.

### Input
A decimal number with many digits.

### Output
Print the value after casting to float.',
  'Medium',
  'Type Conversion & Casting',
  array['Casting', 'Precision Loss', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3.14159265358979", "output": "3.14159", "explanation": "Sample for Cast double to float"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #042: Cast double to float\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #042: Cast double to float\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #042: Cast double to float\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000243',
  'variables',
  43,
  '#043 static_cast bool to int',
  'var-043-static_cast-bool-to-int',
  'Read the word true or false into a bool and print it as an integer using static_cast.

### Input
The word ''true'' or ''false''.

### Output
Print 1 for true, 0 for false.',
  'Easy',
  'Type Conversion & Casting',
  array['static_cast', 'bool', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "true", "output": "1", "explanation": "Sample for static_cast bool to int"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #043: static_cast bool to int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #043: static_cast bool to int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #043: static_cast bool to int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000244',
  'variables',
  44,
  '#044 Convert String Number to Integer',
  'var-044-convert-string-number-to-integer',
  'Read a numeric string, convert it to an integer using stoi, add 1, and print the result.

### Input
A string containing digits.

### Output
Print the converted number plus 1.',
  'Medium',
  'Type Conversion & Casting',
  array['stoi', 'String Conversion', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "123", "output": "124", "explanation": "Sample for Convert String Number to Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #044: Convert String Number to Integer\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #044: Convert String Number to Integer\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #044: Convert String Number to Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000245',
  'variables',
  45,
  '#045 Declare and Use a const Variable',
  'var-045-declare-and-use-a-const-variable',
  'Declare a const double for PI = 3.14, read a radius into a variable, and print the circle''s area rounded to 1 decimal place.

### Input
An integer radius.

### Output
Print PI * radius * radius, rounded to 1 decimal place.',
  'Easy',
  'Constants',
  array['const', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "78.5", "explanation": "Sample for Declare and Use a const Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #045: Declare and Use a const Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #045: Declare and Use a const Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #045: Declare and Use a const Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000246',
  'variables',
  46,
  '#046 Use #define for a Constant',
  'var-046-use-#define-for-a-constant',
  'Use a #define macro to compute the square of an input value.

### Input
A single integer N.

### Output
Print N squared using the macro.',
  'Easy',
  'Constants',
  array['#define', 'Macros', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "100", "explanation": "Sample for Use #define for a Constant"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #046: Use #define for a Constant\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #046: Use #define for a Constant\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #046: Use #define for a Constant\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000247',
  'variables',
  47,
  '#047 constexpr Compile-Time Constant',
  'var-047-constexpr-compile-time-constant',
  'Declare a constexpr int as an array size and print that size.

### Input
No input.

### Output
Print ''Array size: 5''.',
  'Easy',
  'Constants',
  array['constexpr', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "Array size: 5", "explanation": "Sample for constexpr Compile-Time Constant"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #047: constexpr Compile-Time Constant\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #047: constexpr Compile-Time Constant\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #047: constexpr Compile-Time Constant\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000248',
  'variables',
  48,
  '#048 Circle Circumference Using const PI',
  'var-048-circle-circumference-using-const-pi',
  'Declare a const double for PI = 3.14, read a radius, and print the circle''s circumference rounded to 2 decimals.

### Input
An integer radius.

### Output
Print 2 * PI * radius, rounded to 2 decimal places.',
  'Easy',
  'Constants',
  array['const', 'Real-World Formula', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "43.96", "explanation": "Sample for Circle Circumference Using const PI"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #048: Circle Circumference Using const PI\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #048: Circle Circumference Using const PI\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #048: Circle Circumference Using const PI\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000249',
  'variables',
  49,
  '#049 const Reference to a Variable',
  'var-049-const-reference-to-a-variable',
  'Declare an integer variable and a const reference to it, then print the value through the reference.

### Input
A single integer N.

### Output
Print the value of N via the const reference.',
  'Medium',
  'Constants',
  array['const reference', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "8", "output": "8", "explanation": "Sample for const Reference to a Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #049: const Reference to a Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #049: const Reference to a Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #049: const Reference to a Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000250',
  'variables',
  50,
  '#050 Enum as Named Constants',
  'var-050-enum-as-named-constants',
  'Declare an enum for the days of the week and print the name corresponding to the given number (1 = Monday).

### Input
A single integer from 1 to 7.

### Output
Print the matching day name.',
  'Medium',
  'Constants',
  array['enum', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3", "output": "Wednesday", "explanation": "Sample for Enum as Named Constants"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #050: Enum as Named Constants\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #050: Enum as Named Constants\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #050: Enum as Named Constants\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000251',
  'variables',
  51,
  '#051 const in a Function Parameter',
  'var-051-const-in-a-function-parameter',
  'Read an integer, pass it to a function that takes a const reference and returns double its value, and print both the original and doubled values.

### Input
A single integer N.

### Output
Original: N, Doubled: 2N',
  'Medium',
  'Constants',
  array['const parameter', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "6", "output": "Original: 6, Doubled: 12", "explanation": "Sample for const in a Function Parameter"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #051: const in a Function Parameter\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #051: const in a Function Parameter\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #051: const in a Function Parameter\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000252',
  'variables',
  52,
  '#052 Combine Multiple const Variables in a Formula',
  'var-052-combine-multiple-const-variables-in-a-formula',
  'Read a mass and a velocity, and print the kinetic energy using KE = 0.5 * m * v * v.

### Input
Two integers: mass and velocity.

### Output
Print the kinetic energy.',
  'Medium',
  'Constants',
  array['const', 'Physics Formula', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "2 3", "output": "9", "explanation": "Sample for Combine Multiple const Variables in a Formula"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #052: Combine Multiple const Variables in a Formula\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #052: Combine Multiple const Variables in a Formula\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #052: Combine Multiple const Variables in a Formula\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000253',
  'variables',
  53,
  '#053 Post-Increment on a Variable',
  'var-053-post-increment-on-a-variable',
  'Read an integer a, print the value of a++ (its value before incrementing), then print a''s new value.

### Input
A single integer a.

### Output
Print a++ on the first line, then the updated a on the second.',
  'Medium',
  'Increment & Compound Assignment',
  array['Increment', 'Post-Increment', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "5\n6", "explanation": "Sample for Post-Increment on a Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #053: Post-Increment on a Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #053: Post-Increment on a Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #053: Post-Increment on a Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000254',
  'variables',
  54,
  '#054 Pre-Increment on a Variable',
  'var-054-pre-increment-on-a-variable',
  'Read an integer a and print the value of ++a (its value after incrementing).

### Input
A single integer a.

### Output
Print ++a.',
  'Easy',
  'Increment & Compound Assignment',
  array['Increment', 'Pre-Increment', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "6", "explanation": "Sample for Pre-Increment on a Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #054: Pre-Increment on a Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #054: Pre-Increment on a Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #054: Pre-Increment on a Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000255',
  'variables',
  55,
  '#055 Compound Addition Assignment',
  'var-055-compound-addition-assignment',
  'Read an integer a and an integer b, then apply a += b and print the result.

### Input
Two integers a and b.

### Output
Print the value of a after a += b.',
  'Easy',
  'Increment & Compound Assignment',
  array['+=', 'Compound Assignment', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "10 5", "output": "15", "explanation": "Sample for Compound Addition Assignment"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #055: Compound Addition Assignment\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #055: Compound Addition Assignment\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #055: Compound Addition Assignment\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000256',
  'variables',
  56,
  '#056 Compound Multiplication Assignment',
  'var-056-compound-multiplication-assignment',
  'Read an integer a and an integer b, then apply a *= b and print the result.

### Input
Two integers a and b.

### Output
Print the value of a after a *= b.',
  'Easy',
  'Increment & Compound Assignment',
  array['*=', 'Compound Assignment', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "4 3", "output": "12", "explanation": "Sample for Compound Multiplication Assignment"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #056: Compound Multiplication Assignment\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #056: Compound Multiplication Assignment\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #056: Compound Multiplication Assignment\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000257',
  'variables',
  57,
  '#057 Compound Subtraction and Division Together',
  'var-057-compound-subtraction-and-division-together',
  'Read an integer a and an integer b. Apply a -= b and print the result, then apply a /= b to that new value and print the result.

### Input
Two integers a and b.

### Output
After -=5: 15
After /=5: 3',
  'Medium',
  'Increment & Compound Assignment',
  array['-=', '/=', 'Compound Assignment', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "20 5", "output": "After -=5: 15\nAfter /=5: 3", "explanation": "Sample for Compound Subtraction and Division Together"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #057: Compound Subtraction and Division Together\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #057: Compound Subtraction and Division Together\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #057: Compound Subtraction and Division Together\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000258',
  'variables',
  58,
  '#058 Chained Increment in an Expression',
  'var-058-chained-increment-in-an-expression',
  'Read an integer a. Compute b = ++a + a++ and print the final value of b.

### Input
A single integer a.

### Output
Print the value of b.',
  'Hard',
  'Increment & Compound Assignment',
  array['Increment', 'Expression Evaluation', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3", "output": "8", "explanation": "Sample for Chained Increment in an Expression"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #058: Chained Increment in an Expression\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #058: Chained Increment in an Expression\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #058: Chained Increment in an Expression\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000259',
  'variables',
  59,
  '#059 Decrement Loop Countdown',
  'var-059-decrement-loop-countdown',
  'Read an integer N and print a countdown from N down to 1, one number per line, using -- on a variable.

### Input
A single integer N.

### Output
Print N, N-1, ..., 1 each on its own line.',
  'Easy',
  'Increment & Compound Assignment',
  array['Decrement', 'Loops', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "5\n4\n3\n2\n1", "explanation": "Sample for Decrement Loop Countdown"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #059: Decrement Loop Countdown\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #059: Decrement Loop Countdown\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #059: Decrement Loop Countdown\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000260',
  'variables',
  60,
  '#060 Combined Increment and Compound Assignment',
  'var-060-combined-increment-and-compound-assignment',
  'Read three integers representing points earned, add each to a running total using +=, then apply one final ++ bonus point and print the total.

### Input
Three integers.

### Output
Print the final total after summing and adding a bonus point.',
  'Medium',
  'Increment & Compound Assignment',
  array['+=', 'Increment', 'Running Total', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "10 20 5", "output": "36", "explanation": "Sample for Combined Increment and Compound Assignment"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #060: Combined Increment and Compound Assignment\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #060: Combined Increment and Compound Assignment\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #060: Combined Increment and Compound Assignment\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000261',
  'variables',
  61,
  '#061 Swap Two Variables Using a Temporary Variable',
  'var-061-swap-two-variables-using-a-temporary-variable',
  'Read two integers into variables a and b, swap their values using a temporary variable, and print the swapped values.

### Input
Two integers a and b.

### Output
Print the new a and new b separated by a space.',
  'Easy',
  'Swapping & Variable Manipulation',
  array['Swap', 'Temp Variable', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3 8", "output": "8 3", "explanation": "Sample for Swap Two Variables Using a Temporary Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #061: Swap Two Variables Using a Temporary Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #061: Swap Two Variables Using a Temporary Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #061: Swap Two Variables Using a Temporary Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000262',
  'variables',
  62,
  '#062 Swap Two Variables Without a Temporary Variable',
  'var-062-swap-two-variables-without-a-temporary-variable',
  'Read two integers into variables a and b, swap their values using arithmetic (no temp variable), and print the swapped values.

### Input
Two integers a and b.

### Output
Print the new a and new b separated by a space.',
  'Medium',
  'Swapping & Variable Manipulation',
  array['Swap', 'Arithmetic', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5 9", "output": "9 5", "explanation": "Sample for Swap Two Variables Without a Temporary Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #062: Swap Two Variables Without a Temporary Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #062: Swap Two Variables Without a Temporary Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #062: Swap Two Variables Without a Temporary Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000263',
  'variables',
  63,
  '#063 Swap Two Variables Using XOR',
  'var-063-swap-two-variables-using-xor',
  'Read two integers into variables a and b, swap their values using the XOR swap technique, and print the result.

### Input
Two integers a and b.

### Output
Print the new a and new b separated by a space.',
  'Medium',
  'Swapping & Variable Manipulation',
  array['Swap', 'Bitwise XOR', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "6 11", "output": "11 6", "explanation": "Sample for Swap Two Variables Using XOR"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #063: Swap Two Variables Using XOR\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #063: Swap Two Variables Using XOR\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #063: Swap Two Variables Using XOR\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000264',
  'variables',
  64,
  '#064 Rotate Three Variables',
  'var-064-rotate-three-variables',
  'Read three integers a, b, c and rotate their values so that a takes c''s value, b takes a''s original value, and c takes b''s original value. Print the results.

### Input
Three integers a, b and c.

### Output
Print the new a, b and c separated by spaces.',
  'Medium',
  'Swapping & Variable Manipulation',
  array['Multiple Variables', 'Rotation', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1 2 3", "output": "3 1 2", "explanation": "Sample for Rotate Three Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #064: Rotate Three Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #064: Rotate Three Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #064: Rotate Three Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000265',
  'variables',
  65,
  '#065 Swap Two Characters',
  'var-065-swap-two-characters',
  'Read two characters into variables and swap their values using a temporary variable, then print them.

### Input
Two characters.

### Output
Print the swapped characters separated by a space.',
  'Easy',
  'Swapping & Variable Manipulation',
  array['Swap', 'char', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "A B", "output": "B A", "explanation": "Sample for Swap Two Characters"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #065: Swap Two Characters\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #065: Swap Two Characters\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #065: Swap Two Characters\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000266',
  'variables',
  66,
  '#066 Largest of Two Variables Without if',
  'var-066-largest-of-two-variables-without-if',
  'Read two integers and print the larger one using the ternary (conditional) operator instead of an if statement.

### Input
Two integers a and b.

### Output
Print the larger value.',
  'Medium',
  'Swapping & Variable Manipulation',
  array['Conditional Operator', 'Ternary', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "7 3", "output": "7", "explanation": "Sample for Largest of Two Variables Without if"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #066: Largest of Two Variables Without if\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #066: Largest of Two Variables Without if\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #066: Largest of Two Variables Without if\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000267',
  'variables',
  67,
  '#067 Smallest of Three Variables',
  'var-067-smallest-of-three-variables',
  'Read three integers into variables and print the smallest of the three.

### Input
Three integers.

### Output
Print the smallest value.',
  'Medium',
  'Swapping & Variable Manipulation',
  array['Comparison', 'Multiple Variables', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "4 9 2", "output": "2", "explanation": "Sample for Smallest of Three Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #067: Smallest of Three Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #067: Smallest of Three Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #067: Smallest of Three Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000268',
  'variables',
  68,
  '#068 Running Total Across Multiple Reads',
  'var-068-running-total-across-multiple-reads',
  'Read four integers one at a time, adding each to a running total variable, and print the final total.

### Input
Four integers.

### Output
Print the sum of all four values.',
  'Easy',
  'Swapping & Variable Manipulation',
  array['Accumulation', 'Loops', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1 2 3 4", "output": "10", "explanation": "Sample for Running Total Across Multiple Reads"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #068: Running Total Across Multiple Reads\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #068: Running Total Across Multiple Reads\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #068: Running Total Across Multiple Reads\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000269',
  'variables',
  69,
  '#069 Local Variable Inside a Function',
  'var-069-local-variable-inside-a-function',
  'Write a function that declares a local variable, doubles the given input inside it, and returns the result. Print the returned value.

### Input
A single integer N.

### Output
Print 2 * N, computed inside the function.',
  'Easy',
  'Variable Scope',
  array['Local Scope', 'Functions', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "10", "explanation": "Sample for Local Variable Inside a Function"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #069: Local Variable Inside a Function\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #069: Local Variable Inside a Function\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #069: Local Variable Inside a Function\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000270',
  'variables',
  70,
  '#070 Global Variable Modified by a Function',
  'var-070-global-variable-modified-by-a-function',
  'Declare a global counter variable. Write a function that increments it by 1. Call the function 3 times and print the final counter value.

### Input
No input.

### Output
Print the counter value after 3 increments.',
  'Medium',
  'Variable Scope',
  array['Global Scope', 'Functions', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "3", "explanation": "Sample for Global Variable Modified by a Function"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #070: Global Variable Modified by a Function\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #070: Global Variable Modified by a Function\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #070: Global Variable Modified by a Function\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000271',
  'variables',
  71,
  '#071 Variable Shadowing',
  'var-071-variable-shadowing',
  'Declare a global variable initialized to 100. Inside main, declare a local variable with the same name using the given input, and print both the local and global values.

### Input
A single integer N.

### Output
Local: N
Global: 100',
  'Medium',
  'Variable Scope',
  array['Scope', 'Shadowing', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "Local: 5\nGlobal: 100", "explanation": "Sample for Variable Shadowing"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #071: Variable Shadowing\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #071: Variable Shadowing\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #071: Variable Shadowing\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000272',
  'variables',
  72,
  '#072 Block Scope Variable',
  'var-072-block-scope-variable',
  'Read an integer, and inside an if block, declare a local variable holding that value and print it from within the block.

### Input
A single integer N.

### Output
Print ''Inside block: N''.',
  'Easy',
  'Variable Scope',
  array['Block Scope', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "Inside block: 7", "explanation": "Sample for Block Scope Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #072: Block Scope Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #072: Block Scope Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #072: Block Scope Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000273',
  'variables',
  73,
  '#073 Static Local Variable Retains Value',
  'var-073-static-local-variable-retains-value',
  'Write a function containing a static local counter that increments and returns its value each time it is called. Call it 3 times and print each result.

### Input
No input.

### Output
Print 1, 2, 3 each on its own line.',
  'Medium',
  'Variable Scope',
  array['static', 'Function State', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "1\n2\n3", "explanation": "Sample for Static Local Variable Retains Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #073: Static Local Variable Retains Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #073: Static Local Variable Retains Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #073: Static Local Variable Retains Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000274',
  'variables',
  74,
  '#074 Loop Variable Scope',
  'var-074-loop-variable-scope',
  'Declare a loop variable inside a for loop that runs from 0 to N-1, printing its value each iteration, all on one line separated by spaces.

### Input
A single integer N.

### Output
Print 0 through N-1 separated by spaces.',
  'Easy',
  'Variable Scope',
  array['Scope', 'Loops', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3", "output": "0 1 2", "explanation": "Sample for Loop Variable Scope"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #074: Loop Variable Scope\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #074: Loop Variable Scope\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #074: Loop Variable Scope\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000275',
  'variables',
  75,
  '#075 Pass by Value vs Pass by Reference',
  'var-075-pass-by-value-vs-pass-by-reference',
  'Read an integer. Pass it to a function by value that doubles it internally (original unaffected), then pass it by reference to a function that doubles it in place. Print both results.

### Input
A single integer N.

### Output
By value: N
By reference: 2N',
  'Medium',
  'Variable Scope',
  array['Function Parameters', 'Reference', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "By value: 5\nBy reference: 10", "explanation": "Sample for Pass by Value vs Pass by Reference"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #075: Pass by Value vs Pass by Reference\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #075: Pass by Value vs Pass by Reference\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #075: Pass by Value vs Pass by Reference\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000276',
  'variables',
  76,
  '#076 Lifetime of a Variable Declared Inside a Loop',
  'var-076-lifetime-of-a-variable-declared-inside-a-loop',
  'Inside a loop that runs N times, declare and initialize a variable to 0 each iteration, increment it once, and print it.

### Input
A single integer N.

### Output
Print 1, N times, each on its own line.',
  'Medium',
  'Variable Scope',
  array['Scope', 'Variable Lifetime', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3", "output": "1\n1\n1", "explanation": "Sample for Lifetime of a Variable Declared Inside a Loop"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #076: Lifetime of a Variable Declared Inside a Loop\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #076: Lifetime of a Variable Declared Inside a Loop\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #076: Lifetime of a Variable Declared Inside a Loop\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000277',
  'variables',
  77,
  '#077 sizeof int, float, double, char',
  'var-077-sizeof-int,-float,-double,-char',
  'Print the number of bytes occupied by int, float, double and char on this system.

### Input
No input.

### Output
int:4 float:4 double:8 char:1',
  'Easy',
  'sizeof & Memory',
  array['sizeof', 'Data Types', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "int:4 float:4 double:8 char:1", "explanation": "Sample for sizeof int, float, double, char"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #077: sizeof int, float, double, char\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #077: sizeof int, float, double, char\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #077: sizeof int, float, double, char\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000278',
  'variables',
  78,
  '#078 sizeof an Array Variable',
  'var-078-sizeof-an-array-variable',
  'Declare an integer array of the given size and print the total number of bytes it occupies.

### Input
A single integer N (array size).

### Output
Print sizeof(the array).',
  'Medium',
  'sizeof & Memory',
  array['sizeof', 'Arrays', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "20", "explanation": "Sample for sizeof an Array Variable"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #078: sizeof an Array Variable\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #078: sizeof an Array Variable\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #078: sizeof an Array Variable\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000279',
  'variables',
  79,
  '#079 Compare Memory Size of int vs long long',
  'var-079-compare-memory-size-of-int-vs-long-long',
  'Print the size in bytes of int and long long side by side.

### Input
No input.

### Output
int:4 long long:8',
  'Easy',
  'sizeof & Memory',
  array['sizeof', 'Data Types', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "int:4 long long:8", "explanation": "Sample for Compare Memory Size of int vs long long"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #079: Compare Memory Size of int vs long long\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #079: Compare Memory Size of int vs long long\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #079: Compare Memory Size of int vs long long\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000280',
  'variables',
  80,
  '#080 sizeof bool Compared to int',
  'var-080-sizeof-bool-compared-to-int',
  'Print the size in bytes of a bool variable and an int variable.

### Input
No input.

### Output
bool:1 int:4',
  'Easy',
  'sizeof & Memory',
  array['sizeof', 'bool', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "bool:1 int:4", "explanation": "Sample for sizeof bool Compared to int"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #080: sizeof bool Compared to int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #080: sizeof bool Compared to int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #080: sizeof bool Compared to int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000281',
  'variables',
  81,
  '#081 Total Memory Used by Multiple Variables',
  'var-081-total-memory-used-by-multiple-variables',
  'Declare one variable each of type int, float, double and char, and print the sum of their sizes in bytes.

### Input
No input.

### Output
17',
  'Medium',
  'sizeof & Memory',
  array['sizeof', 'Accumulation', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "17", "explanation": "Sample for Total Memory Used by Multiple Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #081: Total Memory Used by Multiple Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #081: Total Memory Used by Multiple Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #081: Total Memory Used by Multiple Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000282',
  'variables',
  82,
  '#082 Memory Difference Between int and short',
  'var-082-memory-difference-between-int-and-short',
  'Print the size of int, the size of short, and the difference between them.

### Input
No input.

### Output
int:4 short:2 difference:2',
  'Medium',
  'sizeof & Memory',
  array['sizeof', 'Data Types', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "int:4 short:2 difference:2", "explanation": "Sample for Memory Difference Between int and short"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #082: Memory Difference Between int and short\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #082: Memory Difference Between int and short\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #082: Memory Difference Between int and short\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000283',
  'variables',
  83,
  '#083 Average of Three Subject Marks',
  'var-083-average-of-three-subject-marks',
  'Read three subject marks into variables and print their average.

### Input
Three integers.

### Output
Print the average (integer division).',
  'Easy',
  'Mixed Expressions & Calculations',
  array['Real-World', 'Average', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "80 90 70", "output": "80", "explanation": "Sample for Average of Three Subject Marks"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #083: Average of Three Subject Marks\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #083: Average of Three Subject Marks\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #083: Average of Three Subject Marks\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000284',
  'variables',
  84,
  '#084 Convert Seconds into Minutes and Seconds',
  'var-084-convert-seconds-into-minutes-and-seconds',
  'Read a total number of seconds and print it as minutes and remaining seconds.

### Input
A single integer, total seconds.

### Output
Print in the format ''Xm Ys''.',
  'Medium',
  'Mixed Expressions & Calculations',
  array['Real-World', 'Division/Modulus', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "125", "output": "2m 5s", "explanation": "Sample for Convert Seconds into Minutes and Seconds"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #084: Convert Seconds into Minutes and Seconds\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #084: Convert Seconds into Minutes and Seconds\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #084: Convert Seconds into Minutes and Seconds\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000285',
  'variables',
  85,
  '#085 Calculate BMI from Weight and Height',
  'var-085-calculate-bmi-from-weight-and-height',
  'Read weight (kg) and height (m) into variables and print the BMI (weight / height^2) rounded to 2 decimal places.

### Input
A decimal weight and a decimal height.

### Output
Print the BMI rounded to 2 decimal places.',
  'Medium',
  'Mixed Expressions & Calculations',
  array['Real-World Formula', 'double', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "70 1.75", "output": "22.86", "explanation": "Sample for Calculate BMI from Weight and Height"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #085: Calculate BMI from Weight and Height\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #085: Calculate BMI from Weight and Height\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #085: Calculate BMI from Weight and Height\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000286',
  'variables',
  86,
  '#086 Calculate Total Bill with Tax',
  'var-086-calculate-total-bill-with-tax',
  'Read a price and a tax percentage into variables and print the total bill including tax.

### Input
An integer price and an integer tax percentage.

### Output
Print price + price*tax/100.',
  'Medium',
  'Mixed Expressions & Calculations',
  array['Real-World Formula', 'Percentage', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "200 5", "output": "210", "explanation": "Sample for Calculate Total Bill with Tax"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #086: Calculate Total Bill with Tax\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #086: Calculate Total Bill with Tax\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #086: Calculate Total Bill with Tax\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000287',
  'variables',
  87,
  '#087 Convert Days into Years, Months and Days',
  'var-087-convert-days-into-years,-months-and-days',
  'Read a total number of days and convert it into years (365 days), months (30 days) and remaining days.

### Input
A single integer, total days.

### Output
Print in the format ''Xy Ym Zd''.',
  'Medium',
  'Mixed Expressions & Calculations',
  array['Real-World', 'Division/Modulus', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "400", "output": "1y 1m 5d", "explanation": "Sample for Convert Days into Years, Months and Days"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #087: Convert Days into Years, Months and Days\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #087: Convert Days into Years, Months and Days\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #087: Convert Days into Years, Months and Days\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000288',
  'variables',
  88,
  '#088 Calculate Compound Interest',
  'var-088-calculate-compound-interest',
  'Read principal, rate and time into variables and print the final amount using A = P*(1+R/100)^T.

### Input
Three integers: principal, rate, time.

### Output
Print the final amount.',
  'Medium',
  'Mixed Expressions & Calculations',
  array['Real-World Formula', 'pow', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1000 10 2", "output": "1210", "explanation": "Sample for Calculate Compound Interest"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #088: Calculate Compound Interest\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #088: Calculate Compound Interest\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #088: Calculate Compound Interest\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000289',
  'variables',
  89,
  '#089 Convert Fahrenheit to Celsius',
  'var-089-convert-fahrenheit-to-celsius',
  'Read a Fahrenheit temperature into a variable and print the equivalent Celsius temperature.

### Input
A decimal Fahrenheit temperature.

### Output
Print C = (F-32)*5/9, rounded to the nearest integer.',
  'Easy',
  'Mixed Expressions & Calculations',
  array['Real-World Formula', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "98.6", "output": "37", "explanation": "Sample for Convert Fahrenheit to Celsius"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #089: Convert Fahrenheit to Celsius\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #089: Convert Fahrenheit to Celsius\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #089: Convert Fahrenheit to Celsius\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000290',
  'variables',
  90,
  '#090 Perimeter and Area of a Rectangle',
  'var-090-perimeter-and-area-of-a-rectangle',
  'Read the length and width of a rectangle and print both its perimeter and area.

### Input
Two integers: length and width.

### Output
Perimeter: X
Area: Y',
  'Easy',
  'Mixed Expressions & Calculations',
  array['Real-World Formula', 'Multiple Outputs', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "4 6", "output": "Perimeter: 20\nArea: 24", "explanation": "Sample for Perimeter and Area of a Rectangle"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #090: Perimeter and Area of a Rectangle\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #090: Perimeter and Area of a Rectangle\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #090: Perimeter and Area of a Rectangle\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000291',
  'variables',
  91,
  '#091 Calculate Average Speed',
  'var-091-calculate-average-speed',
  'Read a distance and a time into variables and print the average speed (distance / time).

### Input
Two integers: distance and time.

### Output
Print distance / time.',
  'Easy',
  'Mixed Expressions & Calculations',
  array['Real-World Formula', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "100 2", "output": "50", "explanation": "Sample for Calculate Average Speed"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #091: Calculate Average Speed\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #091: Calculate Average Speed\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #091: Calculate Average Speed\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000292',
  'variables',
  92,
  '#092 Convert Marks to Percentage',
  'var-092-convert-marks-to-percentage',
  'Read the marks obtained and the total marks into variables and print the percentage.

### Input
Two integers: marks obtained and total marks.

### Output
Print (marks/total)*100.',
  'Easy',
  'Mixed Expressions & Calculations',
  array['Real-World Formula', 'Percentage', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "450 500", "output": "90", "explanation": "Sample for Convert Marks to Percentage"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #092: Convert Marks to Percentage\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #092: Convert Marks to Percentage\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #092: Convert Marks to Percentage\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000293',
  'variables',
  93,
  '#093 Chained Assignment Across Multiple Variables',
  'var-093-chained-assignment-across-multiple-variables',
  'Read a single integer and assign it to three variables a, b, c in one chained assignment statement. Print all three.

### Input
A single integer N.

### Output
Print a, b and c separated by spaces (all equal to N).',
  'Easy',
  'Final Variable Challenges',
  array['Chained Assignment', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "5 5 5", "explanation": "Sample for Chained Assignment Across Multiple Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #093: Chained Assignment Across Multiple Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #093: Chained Assignment Across Multiple Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #093: Chained Assignment Across Multiple Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000294',
  'variables',
  94,
  '#094 Counter with Reset Condition',
  'var-094-counter-with-reset-condition',
  'Starting from 0, increment a counter variable N times, printing its value at each step. Once it reaches N, print ''Reset!'' and reset it to 0.

### Input
A single integer N.

### Output
Print the counter''s value at each of the N steps, then print ''Reset!''.',
  'Medium',
  'Final Variable Challenges',
  array['State Tracking', 'Conditionals', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "3", "output": "1\n2\n3\nReset!", "explanation": "Sample for Counter with Reset Condition"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #094: Counter with Reset Condition\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #094: Counter with Reset Condition\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #094: Counter with Reset Condition\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000295',
  'variables',
  95,
  '#095 Multiple Variable Types in One Physics Formula',
  'var-095-multiple-variable-types-in-one-physics-formula',
  'Read speed, time and acceleration into variables and print the distance using d = speed*time + 0.5*accel*time*time.

### Input
Three integers: speed, time, acceleration.

### Output
Print the computed distance.',
  'Medium',
  'Final Variable Challenges',
  array['Mixed Types', 'Real-World Formula', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5 2 1", "output": "12", "explanation": "Sample for Multiple Variable Types in One Physics Formula"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #095: Multiple Variable Types in One Physics Formula\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #095: Multiple Variable Types in One Physics Formula\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #095: Multiple Variable Types in One Physics Formula\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000296',
  'variables',
  96,
  '#096 Boolean Flag to Track State',
  'var-096-boolean-flag-to-track-state',
  'Read an integer into a variable, use a bool flag to check if it is even, and print ''Even'' or ''Odd'' accordingly.

### Input
A single integer N.

### Output
Print ''Even'' or ''Odd''.',
  'Easy',
  'Final Variable Challenges',
  array['bool', 'State Flag', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "Odd", "explanation": "Sample for Boolean Flag to Track State"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #096: Boolean Flag to Track State\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #096: Boolean Flag to Track State\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #096: Boolean Flag to Track State\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000297',
  'variables',
  97,
  '#097 Combine String and Numeric Variables',
  'var-097-combine-string-and-numeric-variables',
  'Read a name and an age into separate variables and print a sentence combining both.

### Input
A name (string) and an age (integer).

### Output
Print ''<name> is <age> years old.''',
  'Easy',
  'Final Variable Challenges',
  array['std::string', 'Mixed Types', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "Riya 20", "output": "Riya is 20 years old.", "explanation": "Sample for Combine String and Numeric Variables"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #097: Combine String and Numeric Variables\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #097: Combine String and Numeric Variables\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #097: Combine String and Numeric Variables\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000298',
  'variables',
  98,
  '#098 Track Min and Max Across Multiple Inputs',
  'var-098-track-min-and-max-across-multiple-inputs',
  'Read four integers one at a time, updating min and max variables as you go, and print the final min and max.

### Input
Four integers.

### Output
Print ''Min: X, Max: Y''.',
  'Medium',
  'Final Variable Challenges',
  array['Comparison', 'State Tracking', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "4 9 2 7", "output": "Min: 2, Max: 9", "explanation": "Sample for Track Min and Max Across Multiple Inputs"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #098: Track Min and Max Across Multiple Inputs\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #098: Track Min and Max Across Multiple Inputs\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #098: Track Min and Max Across Multiple Inputs\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000299',
  'variables',
  99,
  '#099 Simulate a Simple Bank Balance',
  'var-099-simulate-a-simple-bank-balance',
  'Read a starting balance, a deposit amount and a withdrawal amount into variables. Update the balance step by step and print the final balance.

### Input
Three integers: starting balance, deposit, withdrawal.

### Output
Print the final balance.',
  'Medium',
  'Final Variable Challenges',
  array['State Tracking', 'Real-World', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "1000 200 500", "output": "700", "explanation": "Sample for Simulate a Simple Bank Balance"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #099: Simulate a Simple Bank Balance\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #099: Simulate a Simple Bank Balance\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #099: Simulate a Simple Bank Balance\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000300',
  'variables',
  100,
  '#100 Final Challenge - Student Report Using Multiple Variable Types',
  'var-100-final-challenge---student-report-using-multiple-variable-types',
  'Read a student''s name (string) and marks in 3 subjects (integers). Compute the total, the average (as an int), and a pass/fail result (bool, pass if average >= 40). Print a full report using all these variable types together.

### Input
A name and three integer marks.

### Output
Name: X
Total: Y
Average: Z
Result: Pass',
  'Hard',
  'Final Variable Challenges',
  array['Mixed Types', 'Final Challenge', 'Variables Mastery']::text[],
  'built_in',
  '[{"input": "Aarav 80 90 70", "output": "Name: Aarav\nTotal: 240\nAverage: 80\nResult: Pass", "explanation": "Sample for Final Challenge - Student Report Using Multiple Variable Types"}]'::jsonb,
  '{"cpp": "#include <iostream>\nusing namespace std;\n\n// Variable Problem #100: Final Challenge - Student Report Using Multiple Variable Types\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Variable Problem #100: Final Challenge - Student Report Using Multiple Variable Types\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Variable Problem #100: Final Challenge - Student Report Using Multiple Variable Types\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000301',
  'datatypes',
  1,
  '#001 Declare and Print an int Value',
  'dtype-001-declare-and-print-an-int-value',
  'Read an integer into an int variable and print it.

### Input
A single integer N.

### Output
Print N.',
  'Easy',
  'Integer Types',
  array['int', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "100", "output": "100", "explanation": "Sample for Declare and Print an int Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #001: Declare and Print an int Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #001: Declare and Print an int Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #001: Declare and Print an int Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000302',
  'datatypes',
  2,
  '#002 Declare and Print a short Value',
  'dtype-002-declare-and-print-a-short-value',
  'Read an integer into a short variable and print it.

### Input
A single integer within short range.

### Output
Print the value.',
  'Easy',
  'Integer Types',
  array['short', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "30000", "output": "30000", "explanation": "Sample for Declare and Print a short Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #002: Declare and Print a short Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #002: Declare and Print a short Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #002: Declare and Print a short Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000303',
  'datatypes',
  3,
  '#003 Declare and Print a long Value',
  'dtype-003-declare-and-print-a-long-value',
  'Read an integer into a long variable and print it.

### Input
A single integer.

### Output
Print the value.',
  'Easy',
  'Integer Types',
  array['long', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "2000000000", "output": "2000000000", "explanation": "Sample for Declare and Print a long Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #003: Declare and Print a long Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #003: Declare and Print a long Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #003: Declare and Print a long Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000304',
  'datatypes',
  4,
  '#004 Declare and Print a long long Value',
  'dtype-004-declare-and-print-a-long-long-value',
  'Read a large integer into a long long variable and print it.

### Input
A single large integer.

### Output
Print the value.',
  'Easy',
  'Integer Types',
  array['long long', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "9000000000000", "output": "9000000000000", "explanation": "Sample for Declare and Print a long long Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #004: Declare and Print a long long Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #004: Declare and Print a long long Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #004: Declare and Print a long long Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000305',
  'datatypes',
  5,
  '#005 Print the Range of int',
  'dtype-005-print-the-range-of-int',
  'Print the minimum and maximum values a standard int can hold, using climits.

### Input
No input.

### Output
Print INT_MIN then INT_MAX, separated by a space.',
  'Easy',
  'Integer Types',
  array['int', 'climits', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "-2147483648 2147483647", "explanation": "Sample for Print the Range of int"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #005: Print the Range of int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #005: Print the Range of int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #005: Print the Range of int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000306',
  'datatypes',
  6,
  '#006 Print the Range of short',
  'dtype-006-print-the-range-of-short',
  'Print the minimum and maximum values a short can hold, using climits.

### Input
No input.

### Output
Print SHRT_MIN then SHRT_MAX, separated by a space.',
  'Easy',
  'Integer Types',
  array['short', 'climits', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "-32768 32767", "explanation": "Sample for Print the Range of short"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #006: Print the Range of short\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #006: Print the Range of short\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #006: Print the Range of short\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000307',
  'datatypes',
  7,
  '#007 Overflow Behavior of int',
  'dtype-007-overflow-behavior-of-int',
  'Add 1 to INT_MAX and print the resulting (wrapped-around) value.

### Input
No input.

### Output
Print INT_MAX + 1.',
  'Medium',
  'Integer Types',
  array['int', 'Overflow', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "-2147483648", "explanation": "Sample for Overflow Behavior of int"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #007: Overflow Behavior of int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #007: Overflow Behavior of int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #007: Overflow Behavior of int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000308',
  'datatypes',
  8,
  '#008 Store and Print a Negative Integer',
  'dtype-008-store-and-print-a-negative-integer',
  'Read a negative integer and print it back.

### Input
A single negative integer.

### Output
Print the value.',
  'Easy',
  'Integer Types',
  array['int', 'Negative Numbers', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "-45", "output": "-45", "explanation": "Sample for Store and Print a Negative Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #008: Store and Print a Negative Integer\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #008: Store and Print a Negative Integer\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #008: Store and Print a Negative Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000309',
  'datatypes',
  9,
  '#009 Add an int and a short Together',
  'dtype-009-add-an-int-and-a-short-together',
  'Read an int and a short and print their sum.

### Input
Two integers.

### Output
Print their sum.',
  'Easy',
  'Integer Types',
  array['int', 'short', 'Mixed Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "10 5", "output": "15", "explanation": "Sample for Add an int and a short Together"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #009: Add an int and a short Together\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #009: Add an int and a short Together\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #009: Add an int and a short Together\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000310',
  'datatypes',
  10,
  '#010 Compare Sizes of int and long',
  'dtype-010-compare-sizes-of-int-and-long',
  'Print the number of bytes occupied by int and by long.

### Input
No input.

### Output
int:4 long:8',
  'Easy',
  'Integer Types',
  array['sizeof', 'int', 'long', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "int:4 long:8", "explanation": "Sample for Compare Sizes of int and long"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #010: Compare Sizes of int and long\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #010: Compare Sizes of int and long\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #010: Compare Sizes of int and long\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000311',
  'datatypes',
  11,
  '#011 Declare and Print a float Value',
  'dtype-011-declare-and-print-a-float-value',
  'Read a float value and print it back.

### Input
A decimal number.

### Output
Print the value.',
  'Easy',
  'Floating-Point Types',
  array['float', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "3.5", "output": "3.5", "explanation": "Sample for Declare and Print a float Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #011: Declare and Print a float Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #011: Declare and Print a float Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #011: Declare and Print a float Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000312',
  'datatypes',
  12,
  '#012 Declare and Print a double Value',
  'dtype-012-declare-and-print-a-double-value',
  'Read a double value and print it using default precision.

### Input
A decimal number.

### Output
Print the value.',
  'Easy',
  'Floating-Point Types',
  array['double', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "3.14159265", "output": "3.14159", "explanation": "Sample for Declare and Print a double Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #012: Declare and Print a double Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #012: Declare and Print a double Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #012: Declare and Print a double Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000313',
  'datatypes',
  13,
  '#013 Add Two Floats',
  'dtype-013-add-two-floats',
  'Read two float values and print their sum.

### Input
Two decimal numbers.

### Output
Print their sum.',
  'Easy',
  'Floating-Point Types',
  array['float', 'Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "2.5 3.5", "output": "6", "explanation": "Sample for Add Two Floats"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #013: Add Two Floats\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #013: Add Two Floats\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #013: Add Two Floats\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000314',
  'datatypes',
  14,
  '#014 Add Two Doubles',
  'dtype-014-add-two-doubles',
  'Read two double values and print their sum.

### Input
Two decimal numbers.

### Output
Print their sum.',
  'Easy',
  'Floating-Point Types',
  array['double', 'Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "2.25 3.75", "output": "6", "explanation": "Sample for Add Two Doubles"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #014: Add Two Doubles\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #014: Add Two Doubles\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #014: Add Two Doubles\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000315',
  'datatypes',
  15,
  '#015 Print a float with Fixed 2 Decimal Places',
  'dtype-015-print-a-float-with-fixed-2-decimal-places',
  'Read a float value and print it with exactly 2 decimal places.

### Input
A decimal number.

### Output
Print the value with 2 decimal places.',
  'Easy',
  'Floating-Point Types',
  array['float', 'Formatting', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "7.6789", "output": "7.68", "explanation": "Sample for Print a float with Fixed 2 Decimal Places"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #015: Print a float with Fixed 2 Decimal Places\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #015: Print a float with Fixed 2 Decimal Places\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #015: Print a float with Fixed 2 Decimal Places\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000316',
  'datatypes',
  16,
  '#016 Print a double with Fixed 4 Decimal Places',
  'dtype-016-print-a-double-with-fixed-4-decimal-places',
  'Read a double value and print it with exactly 4 decimal places.

### Input
A decimal number.

### Output
Print the value with 4 decimal places.',
  'Easy',
  'Floating-Point Types',
  array['double', 'Formatting', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "3.14159265", "output": "3.1416", "explanation": "Sample for Print a double with Fixed 4 Decimal Places"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #016: Print a double with Fixed 4 Decimal Places\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #016: Print a double with Fixed 4 Decimal Places\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #016: Print a double with Fixed 4 Decimal Places\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000317',
  'datatypes',
  17,
  '#017 Compare Sizes of float and double',
  'dtype-017-compare-sizes-of-float-and-double',
  'Print the number of bytes occupied by float and by double.

### Input
No input.

### Output
float:4 double:8',
  'Easy',
  'Floating-Point Types',
  array['sizeof', 'float', 'double', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "float:4 double:8", "explanation": "Sample for Compare Sizes of float and double"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #017: Compare Sizes of float and double\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #017: Compare Sizes of float and double\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #017: Compare Sizes of float and double\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000318',
  'datatypes',
  18,
  '#018 Store a Very Small Decimal in a double',
  'dtype-018-store-a-very-small-decimal-in-a-double',
  'Read a very small decimal value into a double and print it with 10 decimal places.

### Input
A small decimal number.

### Output
Print the value with 10 decimal places.',
  'Medium',
  'Floating-Point Types',
  array['double', 'Precision', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "0.0000001234", "output": "0.0000001234", "explanation": "Sample for Store a Very Small Decimal in a double"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #018: Store a Very Small Decimal in a double\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #018: Store a Very Small Decimal in a double\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #018: Store a Very Small Decimal in a double\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000319',
  'datatypes',
  19,
  '#019 Multiply Two Floats',
  'dtype-019-multiply-two-floats',
  'Read two float values and print their product.

### Input
Two decimal numbers.

### Output
Print their product.',
  'Easy',
  'Floating-Point Types',
  array['float', 'Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "2.5 4.0", "output": "10", "explanation": "Sample for Multiply Two Floats"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #019: Multiply Two Floats\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #019: Multiply Two Floats\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #019: Multiply Two Floats\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000320',
  'datatypes',
  20,
  '#020 Compute the Average of Three Doubles',
  'dtype-020-compute-the-average-of-three-doubles',
  'Read three double values and print their average.

### Input
Three decimal numbers.

### Output
Print the average.',
  'Easy',
  'Floating-Point Types',
  array['double', 'Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "1.5 2.5 3.5", "output": "2.5", "explanation": "Sample for Compute the Average of Three Doubles"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #020: Compute the Average of Three Doubles\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #020: Compute the Average of Three Doubles\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #020: Compute the Average of Three Doubles\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000321',
  'datatypes',
  21,
  '#021 Declare and Print a char Value',
  'dtype-021-declare-and-print-a-char-value',
  'Read a character and print it back.

### Input
A single character.

### Output
Print the character.',
  'Easy',
  'Character Type',
  array['char', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Q", "output": "Q", "explanation": "Sample for Declare and Print a char Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #021: Declare and Print a char Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #021: Declare and Print a char Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #021: Declare and Print a char Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000322',
  'datatypes',
  22,
  '#022 Print the ASCII Value of a char',
  'dtype-022-print-the-ascii-value-of-a-char',
  'Read a character and print its ASCII (integer) value.

### Input
A single character.

### Output
Print its ASCII value.',
  'Easy',
  'Character Type',
  array['char', 'ASCII', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "A", "output": "65", "explanation": "Sample for Print the ASCII Value of a char"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #022: Print the ASCII Value of a char\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #022: Print the ASCII Value of a char\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #022: Print the ASCII Value of a char\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000323',
  'datatypes',
  23,
  '#023 Convert an int to a char',
  'dtype-023-convert-an-int-to-a-char',
  'Read an integer ASCII code and print the corresponding character.

### Input
A single integer (valid ASCII code).

### Output
Print the character.',
  'Easy',
  'Character Type',
  array['char', 'Casting', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "90", "output": "Z", "explanation": "Sample for Convert an int to a char"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #023: Convert an int to a char\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #023: Convert an int to a char\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #023: Convert an int to a char\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000324',
  'datatypes',
  24,
  '#024 Convert a Digit Character to Its Numeric Value',
  'dtype-024-convert-a-digit-character-to-its-numeric-value',
  'Read a single digit character and print its equivalent numeric value.

### Input
A single digit character.

### Output
Print the numeric value of the digit.',
  'Medium',
  'Character Type',
  array['char', 'ASCII Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "7", "explanation": "Sample for Convert a Digit Character to Its Numeric Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #024: Convert a Digit Character to Its Numeric Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #024: Convert a Digit Character to Its Numeric Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #024: Convert a Digit Character to Its Numeric Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000325',
  'datatypes',
  25,
  '#025 Print the Size of the char Type',
  'dtype-025-print-the-size-of-the-char-type',
  'Print the number of bytes a char occupies.

### Input
No input.

### Output
1',
  'Easy',
  'Character Type',
  array['sizeof', 'char', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "1", "explanation": "Sample for Print the Size of the char Type"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #025: Print the Size of the char Type\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #025: Print the Size of the char Type\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #025: Print the Size of the char Type\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000326',
  'datatypes',
  26,
  '#026 Compare Two Characters Alphabetically',
  'dtype-026-compare-two-characters-alphabetically',
  'Read two characters and print which one comes first alphabetically.

### Input
Two characters.

### Output
Print the character that comes first.',
  'Easy',
  'Character Type',
  array['char', 'Comparison', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "a b", "output": "a", "explanation": "Sample for Compare Two Characters Alphabetically"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #026: Compare Two Characters Alphabetically\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #026: Compare Two Characters Alphabetically\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #026: Compare Two Characters Alphabetically\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000327',
  'datatypes',
  27,
  '#027 Check If a Character Is Uppercase',
  'dtype-027-check-if-a-character-is-uppercase',
  'Read a character and print whether it is uppercase.

### Input
A single character.

### Output
Print ''Uppercase'' or ''Not uppercase''.',
  'Easy',
  'Character Type',
  array['char', 'isupper', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "G", "output": "Uppercase", "explanation": "Sample for Check If a Character Is Uppercase"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #027: Check If a Character Is Uppercase\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #027: Check If a Character Is Uppercase\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #027: Check If a Character Is Uppercase\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000328',
  'datatypes',
  28,
  '#028 Convert a Lowercase char to Uppercase',
  'dtype-028-convert-a-lowercase-char-to-uppercase',
  'Read a lowercase letter and print its uppercase equivalent.

### Input
A single lowercase letter.

### Output
Print the uppercase letter.',
  'Easy',
  'Character Type',
  array['char', 'toupper', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "m", "output": "M", "explanation": "Sample for Convert a Lowercase char to Uppercase"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #028: Convert a Lowercase char to Uppercase\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #028: Convert a Lowercase char to Uppercase\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #028: Convert a Lowercase char to Uppercase\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000329',
  'datatypes',
  29,
  '#029 Combine Three char Variables into a Word',
  'dtype-029-combine-three-char-variables-into-a-word',
  'Read three separate characters and print them combined into a single word.

### Input
Three characters, space-separated.

### Output
Print the three characters joined together.',
  'Medium',
  'Character Type',
  array['char', 'Multiple Variables', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "C A T", "output": "CAT", "explanation": "Sample for Combine Three char Variables into a Word"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #029: Combine Three char Variables into a Word\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #029: Combine Three char Variables into a Word\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #029: Combine Three char Variables into a Word\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000330',
  'datatypes',
  30,
  '#030 Print the Character Before a Given Character',
  'dtype-030-print-the-character-before-a-given-character',
  'Read a character and print the character that comes immediately before it in the alphabet.

### Input
A single character (not ''a'').

### Output
Print the previous character.',
  'Easy',
  'Character Type',
  array['char', 'ASCII Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "d", "output": "c", "explanation": "Sample for Print the Character Before a Given Character"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #030: Print the Character Before a Given Character\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #030: Print the Character Before a Given Character\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #030: Print the Character Before a Given Character\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000331',
  'datatypes',
  31,
  '#031 Declare and Print a bool Value',
  'dtype-031-declare-and-print-a-bool-value',
  'Read an integer (0 or 1) into a bool variable and print it as true/false.

### Input
A single integer, 0 or 1.

### Output
Print ''true'' or ''false''.',
  'Easy',
  'Boolean Type',
  array['bool', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "1", "output": "true", "explanation": "Sample for Declare and Print a bool Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #031: Declare and Print a bool Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #031: Declare and Print a bool Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #031: Declare and Print a bool Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000332',
  'datatypes',
  32,
  '#032 Print a bool as an Integer',
  'dtype-032-print-a-bool-as-an-integer',
  'Read the word true or false into a bool and print it as 1 or 0.

### Input
The word ''true'' or ''false''.

### Output
Print 1 for true, 0 for false.',
  'Easy',
  'Boolean Type',
  array['bool', 'boolalpha', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "true", "output": "1", "explanation": "Sample for Print a bool as an Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #032: Print a bool as an Integer\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #032: Print a bool as an Integer\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #032: Print a bool as an Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000333',
  'datatypes',
  33,
  '#033 Store a Comparison Result in a bool',
  'dtype-033-store-a-comparison-result-in-a-bool',
  'Read two integers, store the result of checking whether the first is greater than the second in a bool, and print it.

### Input
Two integers a and b.

### Output
Print ''true'' if a > b, otherwise ''false''.',
  'Easy',
  'Boolean Type',
  array['bool', 'Comparison', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5 8", "output": "false", "explanation": "Sample for Store a Comparison Result in a bool"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #033: Store a Comparison Result in a bool\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #033: Store a Comparison Result in a bool\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #033: Store a Comparison Result in a bool\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000334',
  'datatypes',
  34,
  '#034 Logical AND of Two bools',
  'dtype-034-logical-and-of-two-bools',
  'Read two integers (0 or 1) into bool variables and print the result of their logical AND.

### Input
Two integers, each 0 or 1.

### Output
Print ''true'' or ''false''.',
  'Easy',
  'Boolean Type',
  array['bool', 'Logical AND', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "1 0", "output": "false", "explanation": "Sample for Logical AND of Two bools"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #034: Logical AND of Two bools\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #034: Logical AND of Two bools\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #034: Logical AND of Two bools\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000335',
  'datatypes',
  35,
  '#035 Logical OR of Two bools',
  'dtype-035-logical-or-of-two-bools',
  'Read two integers (0 or 1) into bool variables and print the result of their logical OR.

### Input
Two integers, each 0 or 1.

### Output
Print ''true'' or ''false''.',
  'Easy',
  'Boolean Type',
  array['bool', 'Logical OR', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "0 0", "output": "false", "explanation": "Sample for Logical OR of Two bools"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #035: Logical OR of Two bools\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #035: Logical OR of Two bools\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #035: Logical OR of Two bools\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000336',
  'datatypes',
  36,
  '#036 Logical NOT of a bool',
  'dtype-036-logical-not-of-a-bool',
  'Read an integer (0 or 1) into a bool variable and print the result of applying logical NOT.

### Input
A single integer, 0 or 1.

### Output
Print ''true'' or ''false''.',
  'Easy',
  'Boolean Type',
  array['bool', 'Logical NOT', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "1", "output": "false", "explanation": "Sample for Logical NOT of a bool"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #036: Logical NOT of a bool\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #036: Logical NOT of a bool\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #036: Logical NOT of a bool\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000337',
  'datatypes',
  37,
  '#037 Print the Size of the bool Type',
  'dtype-037-print-the-size-of-the-bool-type',
  'Print the number of bytes a bool occupies.

### Input
No input.

### Output
1',
  'Easy',
  'Boolean Type',
  array['sizeof', 'bool', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "1", "explanation": "Sample for Print the Size of the bool Type"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #037: Print the Size of the bool Type\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #037: Print the Size of the bool Type\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #037: Print the Size of the bool Type\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000338',
  'datatypes',
  38,
  '#038 Combine Multiple Boolean Conditions',
  'dtype-038-combine-multiple-boolean-conditions',
  'Read an integer and print whether it lies between 1 and 10 (inclusive), storing the combined condition in a bool.

### Input
A single integer N.

### Output
Print ''true'' if 1<=N<=10, otherwise ''false''.',
  'Medium',
  'Boolean Type',
  array['bool', 'Combined Conditions', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "true", "explanation": "Sample for Combine Multiple Boolean Conditions"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #038: Combine Multiple Boolean Conditions\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #038: Combine Multiple Boolean Conditions\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #038: Combine Multiple Boolean Conditions\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000339',
  'datatypes',
  39,
  '#039 Declare and Print a std::string',
  'dtype-039-declare-and-print-a-std::string',
  'Read a word into a std::string and print it back.

### Input
A single word.

### Output
Print the word.',
  'Easy',
  'String Type',
  array['std::string', 'Basic Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Hello", "output": "Hello", "explanation": "Sample for Declare and Print a std::string"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #039: Declare and Print a std::string\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #039: Declare and Print a std::string\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #039: Declare and Print a std::string\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000340',
  'datatypes',
  40,
  '#040 Concatenate Two Strings with a Space',
  'dtype-040-concatenate-two-strings-with-a-space',
  'Read two words and print them joined together with a space between them.

### Input
Two words.

### Output
Print the words joined with a space.',
  'Easy',
  'String Type',
  array['std::string', 'Concatenation', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Hello World", "output": "Hello World", "explanation": "Sample for Concatenate Two Strings with a Space"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #040: Concatenate Two Strings with a Space\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #040: Concatenate Two Strings with a Space\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #040: Concatenate Two Strings with a Space\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000341',
  'datatypes',
  41,
  '#041 Find the Length of a String',
  'dtype-041-find-the-length-of-a-string',
  'Read a word and print the number of characters it contains.

### Input
A single word.

### Output
Print the length.',
  'Easy',
  'String Type',
  array['std::string', 'length()', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Programming", "output": "11", "explanation": "Sample for Find the Length of a String"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #041: Find the Length of a String\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #041: Find the Length of a String\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #041: Find the Length of a String\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000342',
  'datatypes',
  42,
  '#042 Access a Character at a Given Index',
  'dtype-042-access-a-character-at-a-given-index',
  'Read a word and an index, and print the character at that index (0-based).

### Input
A word and an integer index.

### Output
Print the character at that index.',
  'Easy',
  'String Type',
  array['std::string', 'Indexing', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Hello 1", "output": "e", "explanation": "Sample for Access a Character at a Given Index"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #042: Access a Character at a Given Index\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #042: Access a Character at a Given Index\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #042: Access a Character at a Given Index\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000343',
  'datatypes',
  43,
  '#043 Compare Two Strings for Equality',
  'dtype-043-compare-two-strings-for-equality',
  'Read two words and print whether they are equal.

### Input
Two words.

### Output
Print ''Equal'' or ''Not Equal''.',
  'Easy',
  'String Type',
  array['std::string', 'Comparison', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "cat cat", "output": "Equal", "explanation": "Sample for Compare Two Strings for Equality"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #043: Compare Two Strings for Equality\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #043: Compare Two Strings for Equality\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #043: Compare Two Strings for Equality\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000344',
  'datatypes',
  44,
  '#044 Convert a String to Uppercase',
  'dtype-044-convert-a-string-to-uppercase',
  'Read a word and print it entirely in uppercase.

### Input
A single word.

### Output
Print the uppercase version.',
  'Medium',
  'String Type',
  array['std::string', 'Manipulation', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "hello", "output": "HELLO", "explanation": "Sample for Convert a String to Uppercase"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #044: Convert a String to Uppercase\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #044: Convert a String to Uppercase\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #044: Convert a String to Uppercase\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000345',
  'datatypes',
  45,
  '#045 Reverse a String',
  'dtype-045-reverse-a-string',
  'Read a word and print it reversed.

### Input
A single word.

### Output
Print the reversed word.',
  'Medium',
  'String Type',
  array['std::string', 'Manipulation', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "world", "output": "dlrow", "explanation": "Sample for Reverse a String"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #045: Reverse a String\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #045: Reverse a String\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #045: Reverse a String\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000346',
  'datatypes',
  46,
  '#046 Find a Substring''s Starting Position',
  'dtype-046-find-a-substring's-starting-position',
  'Read a word and a substring, and print the index at which the substring first appears.

### Input
A word and a substring.

### Output
Print the starting index of the substring.',
  'Medium',
  'String Type',
  array['std::string', 'find()', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "programming gram", "output": "3", "explanation": "Sample for Find a Substring''s Starting Position"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #046: Find a Substring''s Starting Position\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #046: Find a Substring''s Starting Position\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #046: Find a Substring''s Starting Position\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000347',
  'datatypes',
  47,
  '#047 Append a Character to a String',
  'dtype-047-append-a-character-to-a-string',
  'Read a word and a character, and print the word with the character appended.

### Input
A word and a character.

### Output
Print the word with the character added at the end.',
  'Easy',
  'String Type',
  array['std::string', 'Modification', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Cat s", "output": "Cats", "explanation": "Sample for Append a Character to a String"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #047: Append a Character to a String\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #047: Append a Character to a String\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #047: Append a Character to a String\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000348',
  'datatypes',
  48,
  '#048 Erase Part of a String',
  'dtype-048-erase-part-of-a-string',
  'Read a word and an index, and print the word with everything from that index onward removed.

### Input
A word and an integer index.

### Output
Print the word truncated at that index.',
  'Medium',
  'String Type',
  array['std::string', 'erase()', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "HelloWorld 5", "output": "Hello", "explanation": "Sample for Erase Part of a String"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #048: Erase Part of a String\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #048: Erase Part of a String\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #048: Erase Part of a String\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000349',
  'datatypes',
  49,
  '#049 Declare an unsigned int and Print It',
  'dtype-049-declare-an-unsigned-int-and-print-it',
  'Read a non-negative integer into an unsigned int and print it.

### Input
A single non-negative integer.

### Output
Print the value.',
  'Easy',
  'Type Modifiers',
  array['unsigned int', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "500", "output": "500", "explanation": "Sample for Declare an unsigned int and Print It"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #049: Declare an unsigned int and Print It\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #049: Declare an unsigned int and Print It\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #049: Declare an unsigned int and Print It\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000350',
  'datatypes',
  50,
  '#050 Behavior of unsigned int Underflow',
  'dtype-050-behavior-of-unsigned-int-underflow',
  'Subtract 1 from an unsigned int initialized to 0 and print the resulting (wrapped-around) value.

### Input
No input.

### Output
Print the value of 0u - 1.',
  'Medium',
  'Type Modifiers',
  array['unsigned int', 'Overflow', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "4294967295", "explanation": "Sample for Behavior of unsigned int Underflow"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #050: Behavior of unsigned int Underflow\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #050: Behavior of unsigned int Underflow\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #050: Behavior of unsigned int Underflow\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000351',
  'datatypes',
  51,
  '#051 Print the Range of a signed char',
  'dtype-051-print-the-range-of-a-signed-char',
  'Print the minimum and maximum values a signed char can hold.

### Input
No input.

### Output
-128 127',
  'Easy',
  'Type Modifiers',
  array['signed char', 'climits', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "-128 127", "explanation": "Sample for Print the Range of a signed char"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #051: Print the Range of a signed char\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #051: Print the Range of a signed char\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #051: Print the Range of a signed char\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000352',
  'datatypes',
  52,
  '#052 Print the Range of an unsigned char',
  'dtype-052-print-the-range-of-an-unsigned-char',
  'Print the minimum and maximum values an unsigned char can hold.

### Input
No input.

### Output
0 255',
  'Easy',
  'Type Modifiers',
  array['unsigned char', 'climits', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "0 255", "explanation": "Sample for Print the Range of an unsigned char"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #052: Print the Range of an unsigned char\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #052: Print the Range of an unsigned char\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #052: Print the Range of an unsigned char\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000353',
  'datatypes',
  53,
  '#053 Use const with an int',
  'dtype-053-use-const-with-an-int',
  'Declare a const int, initialize it from input, and print its value.

### Input
A single integer N.

### Output
Print N.',
  'Easy',
  'Type Modifiers',
  array['const', 'int', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "10", "output": "10", "explanation": "Sample for Use const with an int"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #053: Use const with an int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #053: Use const with an int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #053: Use const with an int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000354',
  'datatypes',
  54,
  '#054 Signed vs Unsigned Comparison Pitfall',
  'dtype-054-signed-vs-unsigned-comparison-pitfall',
  'Compare a signed -1 with an unsigned 1 and print the (surprising) result.

### Input
No input.

### Output
Print ''true'' or ''false'' for the comparison (-1 < 1u).',
  'Hard',
  'Type Modifiers',
  array['signed/unsigned', 'Comparison Pitfalls', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "false", "explanation": "Sample for Signed vs Unsigned Comparison Pitfall"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #054: Signed vs Unsigned Comparison Pitfall\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #054: Signed vs Unsigned Comparison Pitfall\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #054: Signed vs Unsigned Comparison Pitfall\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000355',
  'datatypes',
  55,
  '#055 Declare an unsigned long and Print It',
  'dtype-055-declare-an-unsigned-long-and-print-it',
  'Read a large non-negative integer into an unsigned long and print it.

### Input
A single large non-negative integer.

### Output
Print the value.',
  'Easy',
  'Type Modifiers',
  array['unsigned long', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "4000000000", "output": "4000000000", "explanation": "Sample for Declare an unsigned long and Print It"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #055: Declare an unsigned long and Print It\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #055: Declare an unsigned long and Print It\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #055: Declare an unsigned long and Print It\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000356',
  'datatypes',
  56,
  '#056 Combine const and unsigned Modifiers',
  'dtype-056-combine-const-and-unsigned-modifiers',
  'Declare a const unsigned int, initialize it from input, and print its value.

### Input
A single non-negative integer.

### Output
Print the value.',
  'Easy',
  'Type Modifiers',
  array['const', 'unsigned', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "7", "explanation": "Sample for Combine const and unsigned Modifiers"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #056: Combine const and unsigned Modifiers\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #056: Combine const and unsigned Modifiers\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #056: Combine const and unsigned Modifiers\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000357',
  'datatypes',
  57,
  '#057 Print an Integer Literal in Decimal',
  'dtype-057-print-an-integer-literal-in-decimal',
  'Print the value of the decimal literal 100 directly in code.

### Input
No input.

### Output
Print 100.',
  'Easy',
  'Literals',
  array['Literals', 'Decimal', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "100", "explanation": "Sample for Print an Integer Literal in Decimal"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #057: Print an Integer Literal in Decimal\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #057: Print an Integer Literal in Decimal\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #057: Print an Integer Literal in Decimal\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000358',
  'datatypes',
  58,
  '#058 Print a Hexadecimal Literal''s Decimal Value',
  'dtype-058-print-a-hexadecimal-literal's-decimal-value',
  'Print the decimal value of the hexadecimal literal 0xFF.

### Input
No input.

### Output
Print the decimal equivalent.',
  'Medium',
  'Literals',
  array['Literals', 'Hexadecimal', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "255", "explanation": "Sample for Print a Hexadecimal Literal''s Decimal Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #058: Print a Hexadecimal Literal''s Decimal Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #058: Print a Hexadecimal Literal''s Decimal Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #058: Print a Hexadecimal Literal''s Decimal Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000359',
  'datatypes',
  59,
  '#059 Print an Octal Literal''s Decimal Value',
  'dtype-059-print-an-octal-literal's-decimal-value',
  'Print the decimal value of the octal literal 010.

### Input
No input.

### Output
Print the decimal equivalent.',
  'Medium',
  'Literals',
  array['Literals', 'Octal', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "8", "explanation": "Sample for Print an Octal Literal''s Decimal Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #059: Print an Octal Literal''s Decimal Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #059: Print an Octal Literal''s Decimal Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #059: Print an Octal Literal''s Decimal Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000360',
  'datatypes',
  60,
  '#060 Print a Binary Literal''s Decimal Value',
  'dtype-060-print-a-binary-literal's-decimal-value',
  'Print the decimal value of the binary literal 0b101.

### Input
No input.

### Output
Print the decimal equivalent.',
  'Medium',
  'Literals',
  array['Literals', 'Binary', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "5", "explanation": "Sample for Print a Binary Literal''s Decimal Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #060: Print a Binary Literal''s Decimal Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #060: Print a Binary Literal''s Decimal Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #060: Print a Binary Literal''s Decimal Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000361',
  'datatypes',
  61,
  '#061 Print a Character Literal''s ASCII Value',
  'dtype-061-print-a-character-literal's-ascii-value',
  'Print the ASCII value of the character literal ''a''.

### Input
No input.

### Output
Print the ASCII value.',
  'Easy',
  'Literals',
  array['Literals', 'char', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "97", "explanation": "Sample for Print a Character Literal''s ASCII Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #061: Print a Character Literal''s ASCII Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #061: Print a Character Literal''s ASCII Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #061: Print a Character Literal''s ASCII Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000362',
  'datatypes',
  62,
  '#062 Print a Floating-Point Literal with the f Suffix',
  'dtype-062-print-a-floating-point-literal-with-the-f-suffix',
  'Print the value of the float literal 3.5f.

### Input
No input.

### Output
Print 3.5.',
  'Easy',
  'Literals',
  array['Literals', 'float', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "3.5", "explanation": "Sample for Print a Floating-Point Literal with the f Suffix"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #062: Print a Floating-Point Literal with the f Suffix\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #062: Print a Floating-Point Literal with the f Suffix\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #062: Print a Floating-Point Literal with the f Suffix\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000363',
  'datatypes',
  63,
  '#063 Print a String Literal''s Length',
  'dtype-063-print-a-string-literal's-length',
  'Print the length of the string literal ''Hello''.

### Input
No input.

### Output
Print its length.',
  'Easy',
  'Literals',
  array['Literals', 'std::string', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "5", "explanation": "Sample for Print a String Literal''s Length"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #063: Print a String Literal''s Length\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #063: Print a String Literal''s Length\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #063: Print a String Literal''s Length\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000364',
  'datatypes',
  64,
  '#064 Use Digit Separators in a Large Literal',
  'dtype-064-use-digit-separators-in-a-large-literal',
  'Print the value of the literal 1''000''000, which uses digit separators for readability.

### Input
No input.

### Output
Print 1000000.',
  'Easy',
  'Literals',
  array['Literals', 'Digit Separators', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "1000000", "explanation": "Sample for Use Digit Separators in a Large Literal"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #064: Use Digit Separators in a Large Literal\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #064: Use Digit Separators in a Large Literal\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #064: Use Digit Separators in a Large Literal\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000365',
  'datatypes',
  65,
  '#065 Print sizeof for All Basic Types',
  'dtype-065-print-sizeof-for-all-basic-types',
  'Print the size in bytes of int, float, double, char and bool.

### Input
No input.

### Output
int:4 float:4 double:8 char:1 bool:1',
  'Easy',
  'sizeof & Type Ranges',
  array['sizeof', 'All Types', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "int:4 float:4 double:8 char:1 bool:1", "explanation": "Sample for Print sizeof for All Basic Types"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #065: Print sizeof for All Basic Types\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #065: Print sizeof for All Basic Types\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #065: Print sizeof for All Basic Types\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000366',
  'datatypes',
  66,
  '#066 Print the Range of unsigned int',
  'dtype-066-print-the-range-of-unsigned-int',
  'Print the minimum and maximum values an unsigned int can hold.

### Input
No input.

### Output
0 4294967295',
  'Easy',
  'sizeof & Type Ranges',
  array['unsigned int', 'climits', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "0 4294967295", "explanation": "Sample for Print the Range of unsigned int"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #066: Print the Range of unsigned int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #066: Print the Range of unsigned int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #066: Print the Range of unsigned int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000367',
  'datatypes',
  67,
  '#067 Print the Range of long long',
  'dtype-067-print-the-range-of-long-long',
  'Print the minimum and maximum values a long long can hold.

### Input
No input.

### Output
-9223372036854775808 9223372036854775807',
  'Easy',
  'sizeof & Type Ranges',
  array['long long', 'climits', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "-9223372036854775808 9223372036854775807", "explanation": "Sample for Print the Range of long long"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #067: Print the Range of long long\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #067: Print the Range of long long\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #067: Print the Range of long long\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000368',
  'datatypes',
  68,
  '#068 Print Decimal Digits of Precision for float',
  'dtype-068-print-decimal-digits-of-precision-for-float',
  'Use std::numeric_limits<float>::digits10 to print how many reliable decimal digits a float can represent.

### Input
No input.

### Output
6',
  'Medium',
  'sizeof & Type Ranges',
  array['numeric_limits', 'float', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "6", "explanation": "Sample for Print Decimal Digits of Precision for float"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #068: Print Decimal Digits of Precision for float\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #068: Print Decimal Digits of Precision for float\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #068: Print Decimal Digits of Precision for float\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000369',
  'datatypes',
  69,
  '#069 Print Decimal Digits of Precision for double',
  'dtype-069-print-decimal-digits-of-precision-for-double',
  'Use std::numeric_limits<double>::digits10 to print how many reliable decimal digits a double can represent.

### Input
No input.

### Output
15',
  'Medium',
  'sizeof & Type Ranges',
  array['numeric_limits', 'double', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "15", "explanation": "Sample for Print Decimal Digits of Precision for double"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #069: Print Decimal Digits of Precision for double\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #069: Print Decimal Digits of Precision for double\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #069: Print Decimal Digits of Precision for double\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000370',
  'datatypes',
  70,
  '#070 Compare Sizes of int and int Pointer',
  'dtype-070-compare-sizes-of-int-and-int-pointer',
  'Print the size of an int and the size of an int pointer on this (64-bit) system.

### Input
No input.

### Output
int:4 pointer:8',
  'Medium',
  'sizeof & Type Ranges',
  array['sizeof', 'Pointers', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "int:4 pointer:8", "explanation": "Sample for Compare Sizes of int and int Pointer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #070: Compare Sizes of int and int Pointer\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #070: Compare Sizes of int and int Pointer\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #070: Compare Sizes of int and int Pointer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000371',
  'datatypes',
  71,
  '#071 Print the Number of Bits in an int',
  'dtype-071-print-the-number-of-bits-in-an-int',
  'Print the total number of bits in an int (sizeof(int) * 8).

### Input
No input.

### Output
32',
  'Easy',
  'sizeof & Type Ranges',
  array['sizeof', 'Bits', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "32", "explanation": "Sample for Print the Number of Bits in an int"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #071: Print the Number of Bits in an int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #071: Print the Number of Bits in an int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #071: Print the Number of Bits in an int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000372',
  'datatypes',
  72,
  '#072 Total Memory for an Array of 10 ints',
  'dtype-072-total-memory-for-an-array-of-10-ints',
  'Print the total number of bytes an array of 10 ints would occupy.

### Input
No input.

### Output
40',
  'Easy',
  'sizeof & Type Ranges',
  array['sizeof', 'Arrays', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "", "output": "40", "explanation": "Sample for Total Memory for an Array of 10 ints"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #072: Total Memory for an Array of 10 ints\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #072: Total Memory for an Array of 10 ints\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #072: Total Memory for an Array of 10 ints\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000373',
  'datatypes',
  73,
  '#073 Convert int to float Implicitly',
  'dtype-073-convert-int-to-float-implicitly',
  'Read two integers and divide them using a float context so the division is not truncated.

### Input
Two integers a and b.

### Output
Print a / b as a float.',
  'Medium',
  'Type Conversion Basics',
  array['Implicit Conversion', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5 2", "output": "2.5", "explanation": "Sample for Convert int to float Implicitly"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #073: Convert int to float Implicitly\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #073: Convert int to float Implicitly\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #073: Convert int to float Implicitly\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000374',
  'datatypes',
  74,
  '#074 Convert float to int Explicitly',
  'dtype-074-convert-float-to-int-explicitly',
  'Read a float value and print it truncated to an int.

### Input
A decimal number.

### Output
Print the truncated integer value.',
  'Easy',
  'Type Conversion Basics',
  array['Explicit Conversion', 'Truncation', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "9.9", "output": "9", "explanation": "Sample for Convert float to int Explicitly"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #074: Convert float to int Explicitly\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #074: Convert float to int Explicitly\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #074: Convert float to int Explicitly\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000375',
  'datatypes',
  75,
  '#075 Convert char to int Explicitly',
  'dtype-075-convert-char-to-int-explicitly',
  'Read a character and print its ASCII value using an explicit cast.

### Input
A single character.

### Output
Print the ASCII value.',
  'Easy',
  'Type Conversion Basics',
  array['Explicit Conversion', 'char', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "A", "output": "65", "explanation": "Sample for Convert char to int Explicitly"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #075: Convert char to int Explicitly\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #075: Convert char to int Explicitly\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #075: Convert char to int Explicitly\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000376',
  'datatypes',
  76,
  '#076 Convert int to char Explicitly',
  'dtype-076-convert-int-to-char-explicitly',
  'Read an integer ASCII code and print the corresponding character using an explicit cast.

### Input
A single integer (valid ASCII code).

### Output
Print the character.',
  'Easy',
  'Type Conversion Basics',
  array['Explicit Conversion', 'char', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "98", "output": "b", "explanation": "Sample for Convert int to char Explicitly"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #076: Convert int to char Explicitly\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #076: Convert int to char Explicitly\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #076: Convert int to char Explicitly\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000377',
  'datatypes',
  77,
  '#077 Convert bool to int',
  'dtype-077-convert-bool-to-int',
  'Read the word true or false into a bool and print it as an integer.

### Input
The word ''true'' or ''false''.

### Output
Print 1 for true, 0 for false.',
  'Easy',
  'Type Conversion Basics',
  array['Conversion', 'bool', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "true", "output": "1", "explanation": "Sample for Convert bool to int"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #077: Convert bool to int\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #077: Convert bool to int\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #077: Convert bool to int\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000378',
  'datatypes',
  78,
  '#078 Convert int to bool',
  'dtype-078-convert-int-to-bool',
  'Read an integer and print whether it converts to true or false as a bool (0 is false, anything else is true).

### Input
A single integer.

### Output
Print ''true'' or ''false''.',
  'Easy',
  'Type Conversion Basics',
  array['Conversion', 'bool', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "true", "explanation": "Sample for Convert int to bool"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #078: Convert int to bool\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #078: Convert int to bool\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #078: Convert int to bool\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000379',
  'datatypes',
  79,
  '#079 Convert double to float',
  'dtype-079-convert-double-to-float',
  'Read a double with many decimal digits, convert it to float, and print it using default precision.

### Input
A decimal number with many digits.

### Output
Print the value after conversion to float.',
  'Medium',
  'Type Conversion Basics',
  array['Conversion', 'Precision Loss', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "3.14159265358979", "output": "3.14159", "explanation": "Sample for Convert double to float"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #079: Convert double to float\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #079: Convert double to float\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #079: Convert double to float\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000380',
  'datatypes',
  80,
  '#080 Convert a String to an Integer',
  'dtype-080-convert-a-string-to-an-integer',
  'Read a numeric string and print its integer value using stoi.

### Input
A string of digits.

### Output
Print the converted integer.',
  'Easy',
  'Type Conversion Basics',
  array['stoi', 'Conversion', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "456", "output": "456", "explanation": "Sample for Convert a String to an Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #080: Convert a String to an Integer\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #080: Convert a String to an Integer\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #080: Convert a String to an Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000381',
  'datatypes',
  81,
  '#081 Choose a Data Type for a Person''s Age',
  'dtype-081-choose-a-data-type-for-a-person's-age',
  'Read a person''s age and print it stored as an int, since ages are small whole numbers.

### Input
A single integer age.

### Output
Stored as int: 25',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'int', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "25", "output": "Stored as int: 25", "explanation": "Sample for Choose a Data Type for a Person''s Age"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #081: Choose a Data Type for a Person''s Age\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #081: Choose a Data Type for a Person''s Age\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #081: Choose a Data Type for a Person''s Age\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000382',
  'datatypes',
  82,
  '#082 Choose a Data Type for Money with Decimals',
  'dtype-082-choose-a-data-type-for-money-with-decimals',
  'Read a monetary amount and print it stored as a double, since money often needs decimal precision.

### Input
A decimal amount.

### Output
Stored as double: 99.99',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'double', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "99.99", "output": "Stored as double: 99.99", "explanation": "Sample for Choose a Data Type for Money with Decimals"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #082: Choose a Data Type for Money with Decimals\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #082: Choose a Data Type for Money with Decimals\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #082: Choose a Data Type for Money with Decimals\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000383',
  'datatypes',
  83,
  '#083 Choose a Data Type for a Single Grade Letter',
  'dtype-083-choose-a-data-type-for-a-single-grade-letter',
  'Read a single grade letter and print it stored as a char.

### Input
A single letter.

### Output
Stored as char: A',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'char', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "A", "output": "Stored as char: A", "explanation": "Sample for Choose a Data Type for a Single Grade Letter"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #083: Choose a Data Type for a Single Grade Letter\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #083: Choose a Data Type for a Single Grade Letter\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #083: Choose a Data Type for a Single Grade Letter\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000384',
  'datatypes',
  84,
  '#084 Choose a Data Type for a Yes/No Answer',
  'dtype-084-choose-a-data-type-for-a-yes-no-answer',
  'Read a 1 or 0 answer and print it stored as a bool.

### Input
A single integer, 0 or 1.

### Output
Stored as bool: true',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'bool', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "1", "output": "Stored as bool: true", "explanation": "Sample for Choose a Data Type for a Yes/No Answer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #084: Choose a Data Type for a Yes/No Answer\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #084: Choose a Data Type for a Yes/No Answer\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #084: Choose a Data Type for a Yes/No Answer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000385',
  'datatypes',
  85,
  '#085 Choose a Data Type for a Large Population Count',
  'dtype-085-choose-a-data-type-for-a-large-population-count',
  'Read a large population number and print it stored as a long long, since it exceeds normal int range.

### Input
A large integer.

### Output
Stored as long long: 8000000000',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'long long', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "8000000000", "output": "Stored as long long: 8000000000", "explanation": "Sample for Choose a Data Type for a Large Population Count"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #085: Choose a Data Type for a Large Population Count\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #085: Choose a Data Type for a Large Population Count\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #085: Choose a Data Type for a Large Population Count\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000386',
  'datatypes',
  86,
  '#086 Choose a Data Type for a Full Name',
  'dtype-086-choose-a-data-type-for-a-full-name',
  'Read a full name and print it stored as a std::string.

### Input
A full name (may contain spaces).

### Output
Stored as string: Aarav Sharma',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'std::string', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Aarav Sharma", "output": "Stored as string: Aarav Sharma", "explanation": "Sample for Choose a Data Type for a Full Name"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #086: Choose a Data Type for a Full Name\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #086: Choose a Data Type for a Full Name\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #086: Choose a Data Type for a Full Name\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000387',
  'datatypes',
  87,
  '#087 Choose a Data Type for a Fractional Temperature',
  'dtype-087-choose-a-data-type-for-a-fractional-temperature',
  'Read a temperature with decimal precision and print it stored as a float.

### Input
A decimal temperature.

### Output
Stored as float: 36.60',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'float', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "36.6", "output": "Stored as float: 36.60", "explanation": "Sample for Choose a Data Type for a Fractional Temperature"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #087: Choose a Data Type for a Fractional Temperature\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #087: Choose a Data Type for a Fractional Temperature\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #087: Choose a Data Type for a Fractional Temperature\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000388',
  'datatypes',
  88,
  '#088 Choose a Data Type for an Alphanumeric Product ID',
  'dtype-088-choose-a-data-type-for-an-alphanumeric-product-id',
  'Read a product ID containing both letters and digits and print it stored as a std::string.

### Input
An alphanumeric product ID.

### Output
Stored as string: PID2026',
  'Easy',
  'Choosing Right Data Type',
  array['Type Selection', 'std::string', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "PID2026", "output": "Stored as string: PID2026", "explanation": "Sample for Choose a Data Type for an Alphanumeric Product ID"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #088: Choose a Data Type for an Alphanumeric Product ID\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #088: Choose a Data Type for an Alphanumeric Product ID\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #088: Choose a Data Type for an Alphanumeric Product ID\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000389',
  'datatypes',
  89,
  '#089 Combine int and char in One Expression',
  'dtype-089-combine-int-and-char-in-one-expression',
  'Read an integer and a character, and print the result of adding the integer to the character''s ASCII value.

### Input
An integer and a character.

### Output
70',
  'Medium',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5 A", "output": "70", "explanation": "Sample for Combine int and char in One Expression"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #089: Combine int and char in One Expression\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #089: Combine int and char in One Expression\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #089: Combine int and char in One Expression\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000390',
  'datatypes',
  90,
  '#090 Determine the Result Type of int / double',
  'dtype-090-determine-the-result-type-of-int---double',
  'Read an integer and a double and print the result of dividing the integer by the double.

### Input
An integer and a decimal number.

### Output
3.5',
  'Medium',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'Division', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "7 2.0", "output": "3.5", "explanation": "Sample for Determine the Result Type of int / double"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #090: Determine the Result Type of int / double\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #090: Determine the Result Type of int / double\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #090: Determine the Result Type of int / double\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000391',
  'datatypes',
  91,
  '#091 Mixed Arithmetic with bool in an Expression',
  'dtype-091-mixed-arithmetic-with-bool-in-an-expression',
  'Read an integer and a bool (as 0/1), and print the result of adding them together.

### Input
An integer and an integer (0 or 1) representing a bool.

### Output
6',
  'Medium',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'bool', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5 1", "output": "6", "explanation": "Sample for Mixed Arithmetic with bool in an Expression"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #091: Mixed Arithmetic with bool in an Expression\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #091: Mixed Arithmetic with bool in an Expression\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #091: Mixed Arithmetic with bool in an Expression\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000392',
  'datatypes',
  92,
  '#092 Concatenate a String with a Converted Number',
  'dtype-092-concatenate-a-string-with-a-converted-number',
  'Read a label and a number, convert the number to a string using to_string, and print them concatenated.

### Input
A label word and an integer.

### Output
Score: 90',
  'Medium',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'to_string', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Score 90", "output": "Score: 90", "explanation": "Sample for Concatenate a String with a Converted Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #092: Concatenate a String with a Converted Number\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #092: Concatenate a String with a Converted Number\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #092: Concatenate a String with a Converted Number\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000393',
  'datatypes',
  93,
  '#093 Compare an int and a float for Equality',
  'dtype-093-compare-an-int-and-a-float-for-equality',
  'Read an integer and a float and print whether they are numerically equal.

### Input
An integer and a decimal number.

### Output
Equal',
  'Easy',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'Comparison', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5 5.0", "output": "Equal", "explanation": "Sample for Compare an int and a float for Equality"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #093: Compare an int and a float for Equality\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #093: Compare an int and a float for Equality\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #093: Compare an int and a float for Equality\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000394',
  'datatypes',
  94,
  '#094 Store One Value of Every Basic Type',
  'dtype-094-store-one-value-of-every-basic-type',
  'Read an int, a float and a char, and print all three values separated by spaces.

### Input
An integer, a decimal number, and a character.

### Output
5 3.5 A',
  'Medium',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'Multiple Variables', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5 3.5 A", "output": "5 3.5 A", "explanation": "Sample for Store One Value of Every Basic Type"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #094: Store One Value of Every Basic Type\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #094: Store One Value of Every Basic Type\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #094: Store One Value of Every Basic Type\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000395',
  'datatypes',
  95,
  '#095 Mixed Integer and Character Arithmetic Result',
  'dtype-095-mixed-integer-and-character-arithmetic-result',
  'Read an ASCII code and an offset, add them, and print the resulting character.

### Input
An integer ASCII code and an integer offset.

### Output
C',
  'Medium',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'char Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "65 2", "output": "C", "explanation": "Sample for Mixed Integer and Character Arithmetic Result"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #095: Mixed Integer and Character Arithmetic Result\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #095: Mixed Integer and Character Arithmetic Result\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #095: Mixed Integer and Character Arithmetic Result\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000396',
  'datatypes',
  96,
  '#096 Determine the Type of int * float',
  'dtype-096-determine-the-type-of-int-*-float',
  'Read an integer and a float, multiply them, and print the result.

### Input
An integer and a decimal number.

### Output
10',
  'Easy',
  'Mixed Data Type Expressions',
  array['Mixed Types', 'Multiplication', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "4 2.5", "output": "10", "explanation": "Sample for Determine the Type of int * float"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #096: Determine the Type of int * float\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #096: Determine the Type of int * float\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #096: Determine the Type of int * float\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000397',
  'datatypes',
  97,
  '#097 Build a Record Using Every Basic Data Type',
  'dtype-097-build-a-record-using-every-basic-data-type',
  'Read a name (string), age (int), height (double), grade (char), and pass status (bool as 0/1). Print a formatted record using all five values.

### Input
A name, an integer, a decimal, a character, and 0/1.

### Output
Name: Aarav, Age: 21, Height: 5.8, Grade: A, Passed: true',
  'Hard',
  'Final Data Type Challenges',
  array['Mixed Types', 'Records', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Aarav 21 5.8 A 1", "output": "Name: Aarav, Age: 21, Height: 5.8, Grade: A, Passed: true", "explanation": "Sample for Build a Record Using Every Basic Data Type"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #097: Build a Record Using Every Basic Data Type\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #097: Build a Record Using Every Basic Data Type\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #097: Build a Record Using Every Basic Data Type\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000398',
  'datatypes',
  98,
  '#098 Detect the Most Suitable Integer Type for a Value',
  'dtype-098-detect-the-most-suitable-integer-type-for-a-value',
  'Read a large number and determine whether it fits within int range or requires long long, printing the result.

### Input
A single integer (possibly very large).

### Output
Needs: long long',
  'Medium',
  'Final Data Type Challenges',
  array['Type Selection', 'Range Checking', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "5000000000", "output": "Needs: long long", "explanation": "Sample for Detect the Most Suitable Integer Type for a Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #098: Detect the Most Suitable Integer Type for a Value\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #098: Detect the Most Suitable Integer Type for a Value\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #098: Detect the Most Suitable Integer Type for a Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000399',
  'datatypes',
  99,
  '#099 Simulate a Type Promotion Chain',
  'dtype-099-simulate-a-type-promotion-chain',
  'Read a character and an integer, add the character''s ASCII value to the integer, and print the resulting value.

### Input
A character and an integer.

### Output
75',
  'Medium',
  'Final Data Type Challenges',
  array['Type Promotion', 'Mixed Arithmetic', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "A 10", "output": "75", "explanation": "Sample for Simulate a Type Promotion Chain"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #099: Simulate a Type Promotion Chain\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #099: Simulate a Type Promotion Chain\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #099: Simulate a Type Promotion Chain\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000400',
  'datatypes',
  100,
  '#100 Final Challenge - Full Data Type Showcase',
  'dtype-100-final-challenge---full-data-type-showcase',
  'Read a name (string), age (int), height (double), grade (char), and active status (0/1 as bool). Print a full multi-line showcase labeling each value with its type.

### Input
A name, an integer, a decimal, a character, and 0/1.

### Output
Name: Riya (string)
Age: 19 (int)
Height: 5.5 (double)
Grade: F (char)
Active: true (bool)',
  'Hard',
  'Final Data Type Challenges',
  array['Mixed Types', 'Final Challenge', 'Data Types Mastery']::text[],
  'built_in',
  '[{"input": "Riya 19 5.5 F 1", "output": "Name: Riya (string)\nAge: 19 (int)\nHeight: 5.5 (double)\nGrade: F (char)\nActive: true (bool)", "explanation": "Sample for Final Challenge - Full Data Type Showcase"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <iomanip>\n#include <climits>\nusing namespace std;\n\n// Data Types Problem #100: Final Challenge - Full Data Type Showcase\nint main() {\n    // Write your code here\n    return 0;\n}\n", "python": "# Data Types Problem #100: Final Challenge - Full Data Type Showcase\ndef solve():\n    # Write your code here\n    pass\n\nsolve()\n", "javascript": "// Data Types Problem #100: Final Challenge - Full Data Type Showcase\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000401',
  'userinput',
  1,
  '#001 Read and Print an Integer',
  'input-001-read-and-print-an-integer',
  'Read a single integer using cin and print it back.

### Input
A single integer N.

### Output
Print N.',
  'Easy',
  'Basic Single-Value Input',
  array['cin', 'Basic Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "15", "output": "15", "explanation": "Sample for Read and Print an Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #001: Read and Print an Integer\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #001: Read and Print an Integer\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #001: Read and Print an Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000402',
  'userinput',
  2,
  '#002 Read and Print a Float',
  'input-002-read-and-print-a-float',
  'Read a single float using cin and print it with 2 decimal places.

### Input
A single decimal number.

### Output
Print the value with 2 decimal places.',
  'Easy',
  'Basic Single-Value Input',
  array['cin', 'Basic Input', 'Float', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3.5", "output": "3.50", "explanation": "Sample for Read and Print a Float"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #002: Read and Print a Float\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #002: Read and Print a Float\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #002: Read and Print a Float\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000403',
  'userinput',
  3,
  '#003 Read and Print a Character',
  'input-003-read-and-print-a-character',
  'Read a single character using cin and print it back.

### Input
A single character.

### Output
Print the character.',
  'Easy',
  'Basic Single-Value Input',
  array['cin', 'char Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Z", "output": "Z", "explanation": "Sample for Read and Print a Character"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #003: Read and Print a Character\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #003: Read and Print a Character\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #003: Read and Print a Character\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000404',
  'userinput',
  4,
  '#004 Read and Print a Double',
  'input-004-read-and-print-a-double',
  'Read a double using cin and print it using default precision.

### Input
A decimal number.

### Output
Print the value.',
  'Easy',
  'Basic Single-Value Input',
  array['cin', 'double Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "2.71828", "output": "2.71828", "explanation": "Sample for Read and Print a Double"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #004: Read and Print a Double\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #004: Read and Print a Double\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #004: Read and Print a Double\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000405',
  'userinput',
  5,
  '#005 Read a Boolean Using boolalpha',
  'input-005-read-a-boolean-using-boolalpha',
  'Use std::boolalpha so cin can read the words true/false directly into a bool, then print it back.

### Input
The word ''true'' or ''false''.

### Output
Print the value read.',
  'Medium',
  'Basic Single-Value Input',
  array['cin', 'bool', 'boolalpha', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "true", "output": "true", "explanation": "Sample for Read a Boolean Using boolalpha"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #005: Read a Boolean Using boolalpha\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #005: Read a Boolean Using boolalpha\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #005: Read a Boolean Using boolalpha\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000406',
  'userinput',
  6,
  '#006 Read a Long Long Value',
  'input-006-read-a-long-long-value',
  'Read a large integer into a long long variable using cin and print it.

### Input
A large integer.

### Output
Print the value.',
  'Easy',
  'Basic Single-Value Input',
  array['cin', 'long long', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "987654321012", "output": "987654321012", "explanation": "Sample for Read a Long Long Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #006: Read a Long Long Value\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #006: Read a Long Long Value\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #006: Read a Long Long Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000407',
  'userinput',
  7,
  '#007 Read an Integer and Print Its Double',
  'input-007-read-an-integer-and-print-its-double',
  'Read an integer using cin and print twice its value.

### Input
A single integer N.

### Output
Print 2 * N.',
  'Easy',
  'Basic Single-Value Input',
  array['cin', 'Arithmetic', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "14", "explanation": "Sample for Read an Integer and Print Its Double"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #007: Read an Integer and Print Its Double\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #007: Read an Integer and Print Its Double\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #007: Read an Integer and Print Its Double\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000408',
  'userinput',
  8,
  '#008 Read an Integer and Print Its Square',
  'input-008-read-an-integer-and-print-its-square',
  'Read an integer using cin and print its square.

### Input
A single integer N.

### Output
Print N * N.',
  'Easy',
  'Basic Single-Value Input',
  array['cin', 'Arithmetic', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "6", "output": "36", "explanation": "Sample for Read an Integer and Print Its Square"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #008: Read an Integer and Print Its Square\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #008: Read an Integer and Print Its Square\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #008: Read an Integer and Print Its Square\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000409',
  'userinput',
  9,
  '#009 Read Two Integers and Print Their Sum',
  'input-009-read-two-integers-and-print-their-sum',
  'Read two integers separated by a space and print their sum.

### Input
Two integers a and b.

### Output
Print a + b.',
  'Easy',
  'Multiple Values on Line',
  array['cin', 'Multiple Values', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "4 5", "output": "9", "explanation": "Sample for Read Two Integers and Print Their Sum"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #009: Read Two Integers and Print Their Sum\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #009: Read Two Integers and Print Their Sum\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #009: Read Two Integers and Print Their Sum\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000410',
  'userinput',
  10,
  '#010 Read Three Integers and Print Their Product',
  'input-010-read-three-integers-and-print-their-product',
  'Read three integers and print their product.

### Input
Three integers.

### Output
Print their product.',
  'Easy',
  'Multiple Values on Line',
  array['cin', 'Multiple Values', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "2 3 4", "output": "24", "explanation": "Sample for Read Three Integers and Print Their Product"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #010: Read Three Integers and Print Their Product\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #010: Read Three Integers and Print Their Product\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #010: Read Three Integers and Print Their Product\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000411',
  'userinput',
  11,
  '#011 Read Two Integers and Print the Larger',
  'input-011-read-two-integers-and-print-the-larger',
  'Read two integers and print whichever is larger.

### Input
Two integers a and b.

### Output
Print the larger value.',
  'Easy',
  'Multiple Values on Line',
  array['cin', 'Comparison', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "8 3", "output": "8", "explanation": "Sample for Read Two Integers and Print the Larger"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #011: Read Two Integers and Print the Larger\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #011: Read Two Integers and Print the Larger\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #011: Read Two Integers and Print the Larger\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000412',
  'userinput',
  12,
  '#012 Read Two Floats and Print Their Average',
  'input-012-read-two-floats-and-print-their-average',
  'Read two floats and print their average with 2 decimal places.

### Input
Two decimal numbers.

### Output
Print their average with 2 decimal places.',
  'Easy',
  'Multiple Values on Line',
  array['cin', 'Multiple Values', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "4.0 6.0", "output": "5.00", "explanation": "Sample for Read Two Floats and Print Their Average"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #012: Read Two Floats and Print Their Average\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #012: Read Two Floats and Print Their Average\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #012: Read Two Floats and Print Their Average\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000413',
  'userinput',
  13,
  '#013 Read Four Integers and Print Their Sum',
  'input-013-read-four-integers-and-print-their-sum',
  'Read four integers on one line and print their sum.

### Input
Four integers.

### Output
Print their sum.',
  'Easy',
  'Multiple Values on Line',
  array['cin', 'Multiple Values', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "1 2 3 4", "output": "10", "explanation": "Sample for Read Four Integers and Print Their Sum"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #013: Read Four Integers and Print Their Sum\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #013: Read Four Integers and Print Their Sum\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #013: Read Four Integers and Print Their Sum\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000414',
  'userinput',
  14,
  '#014 Read Mixed Types on One Line',
  'input-014-read-mixed-types-on-one-line',
  'Read an integer, a character, and a float (in that order) from one line and print them with labels.

### Input
An integer, a character, and a decimal number.

### Output
Print ''Int: X, Char: Y, Float: Z''.',
  'Medium',
  'Multiple Values on Line',
  array['cin', 'Mixed Types', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5 A 2.5", "output": "Int: 5, Char: A, Float: 2.5", "explanation": "Sample for Read Mixed Types on One Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #014: Read Mixed Types on One Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #014: Read Mixed Types on One Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #014: Read Mixed Types on One Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000415',
  'userinput',
  15,
  '#015 Read Two Integers and Print Quotient and Remainder',
  'input-015-read-two-integers-and-print-quotient-and-remainder',
  'Read two integers and print both the integer quotient and the remainder of the first divided by the second.

### Input
Two integers a and b.

### Output
Quotient: X, Remainder: Y',
  'Easy',
  'Multiple Values on Line',
  array['cin', 'Division/Modulus', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "17 4", "output": "Quotient: 4, Remainder: 1", "explanation": "Sample for Read Two Integers and Print Quotient and Remainder"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #015: Read Two Integers and Print Quotient and Remainder\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #015: Read Two Integers and Print Quotient and Remainder\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #015: Read Two Integers and Print Quotient and Remainder\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000416',
  'userinput',
  16,
  '#016 Read Coordinates and Print as a Pair',
  'input-016-read-coordinates-and-print-as-a-pair',
  'Read two integers representing x and y coordinates and print them as an ordered pair.

### Input
Two integers x and y.

### Output
Print ''(x, y)''.',
  'Easy',
  'Multiple Values on Line',
  array['cin', 'Formatting', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3 4", "output": "(3, 4)", "explanation": "Sample for Read Coordinates and Print as a Pair"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #016: Read Coordinates and Print as a Pair\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #016: Read Coordinates and Print as a Pair\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #016: Read Coordinates and Print as a Pair\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000417',
  'userinput',
  17,
  '#017 Read an int and a double, Print Their Sum',
  'input-017-read-an-int-and-a-double,-print-their-sum',
  'Read an integer and a double and print their sum.

### Input
An integer and a decimal number.

### Output
Print their sum.',
  'Easy',
  'Reading Different Types',
  array['cin', 'Type Promotion', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3 2.5", "output": "5.5", "explanation": "Sample for Read an int and a double, Print Their Sum"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #017: Read an int and a double, Print Their Sum\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #017: Read an int and a double, Print Their Sum\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #017: Read an int and a double, Print Their Sum\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000418',
  'userinput',
  18,
  '#018 Read a char and an int, Repeat the Char',
  'input-018-read-a-char-and-an-int,-repeat-the-char',
  'Read a character and an integer N, then print the character repeated N times.

### Input
A character and an integer N.

### Output
Print the character repeated N times.',
  'Medium',
  'Reading Different Types',
  array['cin', 'Mixed Types', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "A 4", "output": "AAAA", "explanation": "Sample for Read a char and an int, Repeat the Char"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #018: Read a char and an int, Repeat the Char\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #018: Read a char and an int, Repeat the Char\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #018: Read a char and an int, Repeat the Char\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000419',
  'userinput',
  19,
  '#019 Read 1/0 as a Boolean',
  'input-019-read-1-0-as-a-boolean',
  'Read an integer (0 or 1) into a bool variable and print it as true/false.

### Input
A single integer, 0 or 1.

### Output
Print ''true'' or ''false''.',
  'Easy',
  'Reading Different Types',
  array['cin', 'bool', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "0", "output": "false", "explanation": "Sample for Read 1/0 as a Boolean"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #019: Read 1/0 as a Boolean\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #019: Read 1/0 as a Boolean\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #019: Read 1/0 as a Boolean\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000420',
  'userinput',
  20,
  '#020 Read an Unsigned Integer',
  'input-020-read-an-unsigned-integer',
  'Read a non-negative integer into an unsigned int variable and print it.

### Input
A single non-negative integer.

### Output
Print the value.',
  'Easy',
  'Reading Different Types',
  array['cin', 'unsigned int', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "300", "output": "300", "explanation": "Sample for Read an Unsigned Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #020: Read an Unsigned Integer\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #020: Read an Unsigned Integer\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #020: Read an Unsigned Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000421',
  'userinput',
  21,
  '#021 Read a Short Integer',
  'input-021-read-a-short-integer',
  'Read an integer into a short variable and print it.

### Input
A single integer within short range.

### Output
Print the value.',
  'Easy',
  'Reading Different Types',
  array['cin', 'short', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "120", "output": "120", "explanation": "Sample for Read a Short Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #021: Read a Short Integer\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #021: Read a Short Integer\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #021: Read a Short Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000422',
  'userinput',
  22,
  '#022 Read a Hexadecimal Value',
  'input-022-read-a-hexadecimal-value',
  'Use std::hex so cin interprets the input as a hexadecimal number, then print its decimal value.

### Input
A hexadecimal number (no 0x prefix).

### Output
Print the equivalent decimal value.',
  'Medium',
  'Reading Different Types',
  array['cin', 'std::hex', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "1F", "output": "31", "explanation": "Sample for Read a Hexadecimal Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #022: Read a Hexadecimal Value\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #022: Read a Hexadecimal Value\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #022: Read a Hexadecimal Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000423',
  'userinput',
  23,
  '#023 Read an Octal Value',
  'input-023-read-an-octal-value',
  'Use std::oct so cin interprets the input as an octal number, then print its decimal value.

### Input
An octal number.

### Output
Print the equivalent decimal value.',
  'Medium',
  'Reading Different Types',
  array['cin', 'std::oct', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "17", "output": "15", "explanation": "Sample for Read an Octal Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #023: Read an Octal Value\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #023: Read an Octal Value\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #023: Read an Octal Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000424',
  'userinput',
  24,
  '#024 Read a Negative Integer and Print Its Absolute Value',
  'input-024-read-a-negative-integer-and-print-its-absolute-value',
  'Read a (possibly negative) integer and print its absolute value.

### Input
A single integer.

### Output
Print its absolute value.',
  'Easy',
  'Reading Different Types',
  array['cin', 'abs', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "-8", "output": "8", "explanation": "Sample for Read a Negative Integer and Print Its Absolute Value"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #024: Read a Negative Integer and Print Its Absolute Value\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #024: Read a Negative Integer and Print Its Absolute Value\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #024: Read a Negative Integer and Print Its Absolute Value\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000425',
  'userinput',
  25,
  '#025 Read Two Doubles and Print Their Difference',
  'input-025-read-two-doubles-and-print-their-difference',
  'Read two doubles and print their difference with 2 decimal places.

### Input
Two decimal numbers a and b.

### Output
Print a - b with 2 decimal places.',
  'Easy',
  'Reading Different Types',
  array['cin', 'double Arithmetic', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5.75 2.25", "output": "3.50", "explanation": "Sample for Read Two Doubles and Print Their Difference"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #025: Read Two Doubles and Print Their Difference\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #025: Read Two Doubles and Print Their Difference\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #025: Read Two Doubles and Print Their Difference\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000426',
  'userinput',
  26,
  '#026 Read a Very Large Number and Double It',
  'input-026-read-a-very-large-number-and-double-it',
  'Read a large number into a long long variable and print double its value.

### Input
A large integer.

### Output
Print 2 * the value.',
  'Easy',
  'Reading Different Types',
  array['cin', 'long long', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5000000000", "output": "10000000000", "explanation": "Sample for Read a Very Large Number and Double It"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #026: Read a Very Large Number and Double It\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #026: Read a Very Large Number and Double It\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #026: Read a Very Large Number and Double It\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000427',
  'userinput',
  27,
  '#027 Read a Single Word Using cin',
  'input-027-read-a-single-word-using-cin',
  'Read a single word (no spaces) into a std::string using cin and print it.

### Input
A single word.

### Output
Print the word.',
  'Easy',
  'cin vs getline',
  array['cin', 'String Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Hello", "output": "Hello", "explanation": "Sample for Read a Single Word Using cin"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #027: Read a Single Word Using cin\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #027: Read a Single Word Using cin\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #027: Read a Single Word Using cin\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000428',
  'userinput',
  28,
  '#028 Read a Full Line Using getline',
  'input-028-read-a-full-line-using-getline',
  'Read an entire line, including spaces, using getline and print it.

### Input
A line of text.

### Output
Print the line exactly as entered.',
  'Easy',
  'cin vs getline',
  array['getline', 'String Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Hello World", "output": "Hello World", "explanation": "Sample for Read a Full Line Using getline"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #028: Read a Full Line Using getline\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #028: Read a Full Line Using getline\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #028: Read a Full Line Using getline\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000429',
  'userinput',
  29,
  '#029 Read a Full Name and Greet',
  'input-029-read-a-full-name-and-greet',
  'Read a full name (which may contain spaces) using getline and print a greeting.

### Input
A full name.

### Output
Print ''Hello, <name>!''',
  'Easy',
  'cin vs getline',
  array['getline', 'String Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Aarav Kumar", "output": "Hello, Aarav Kumar!", "explanation": "Sample for Read a Full Name and Greet"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #029: Read a Full Name and Greet\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #029: Read a Full Name and Greet\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #029: Read a Full Name and Greet\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000430',
  'userinput',
  30,
  '#030 Read Two Words Using cin',
  'input-030-read-two-words-using-cin',
  'Read two words separated by a space using two cin >> reads and print each on its own line.

### Input
Two words.

### Output
Print the first word, then the second, each on its own line.',
  'Easy',
  'cin vs getline',
  array['cin', 'Whitespace Splitting', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Good Morning", "output": "Good\nMorning", "explanation": "Sample for Read Two Words Using cin"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #030: Read Two Words Using cin\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #030: Read Two Words Using cin\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #030: Read Two Words Using cin\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000431',
  'userinput',
  31,
  '#031 Compare cin and getline on the Same Line',
  'input-031-compare-cin-and-getline-on-the-same-line',
  'Given a line with multiple words, show what cin >> reads (just the first word) versus what getline reads (the whole line).

### Input
A line of text.

### Output
cin: FirstWord
getline: FullLine',
  'Medium',
  'cin vs getline',
  array['cin vs getline', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Hello World", "output": "cin: Hello\ngetline: Hello World", "explanation": "Sample for Compare cin and getline on the Same Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #031: Compare cin and getline on the Same Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #031: Compare cin and getline on the Same Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #031: Compare cin and getline on the Same Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000432',
  'userinput',
  32,
  '#032 Read a Sentence and Count Its Length',
  'input-032-read-a-sentence-and-count-its-length',
  'Read a line of text using getline and print the number of characters in it.

### Input
A line of text.

### Output
Print the character count.',
  'Easy',
  'cin vs getline',
  array['getline', 'String Length', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "I love C++", "output": "10", "explanation": "Sample for Read a Sentence and Count Its Length"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #032: Read a Sentence and Count Its Length\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #032: Read a Sentence and Count Its Length\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #032: Read a Sentence and Count Its Length\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000433',
  'userinput',
  33,
  '#033 Read a Line and Convert to Uppercase',
  'input-033-read-a-line-and-convert-to-uppercase',
  'Read a line using getline and print it entirely in uppercase.

### Input
A line of text.

### Output
Print the uppercase version.',
  'Medium',
  'cin vs getline',
  array['getline', 'String Manipulation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "hello world", "output": "HELLO WORLD", "explanation": "Sample for Read a Line and Convert to Uppercase"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #033: Read a Line and Convert to Uppercase\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #033: Read a Line and Convert to Uppercase\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #033: Read a Line and Convert to Uppercase\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000434',
  'userinput',
  34,
  '#034 Read a Line and Print It Reversed',
  'input-034-read-a-line-and-print-it-reversed',
  'Read a line using getline and print its characters in reverse order.

### Input
A line of text (no spaces).

### Output
Print the reversed text.',
  'Medium',
  'cin vs getline',
  array['getline', 'String Manipulation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "abcd", "output": "dcba", "explanation": "Sample for Read a Line and Print It Reversed"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #034: Read a Line and Print It Reversed\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #034: Read a Line and Print It Reversed\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #034: Read a Line and Print It Reversed\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000435',
  'userinput',
  35,
  '#035 Read a Line and Count the Words',
  'input-035-read-a-line-and-count-the-words',
  'Read a line using getline and count how many space-separated words it contains.

### Input
A line of text.

### Output
Print the word count.',
  'Medium',
  'cin vs getline',
  array['getline', 'Word Counting', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "I love coding in C++", "output": "5", "explanation": "Sample for Read a Line and Count the Words"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #035: Read a Line and Count the Words\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #035: Read a Line and Count the Words\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #035: Read a Line and Count the Words\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000436',
  'userinput',
  36,
  '#036 Read a Full Address Line',
  'input-036-read-a-full-address-line',
  'Read a full address (which may include commas) using getline and print it unchanged.

### Input
An address line.

### Output
Print the address exactly as entered.',
  'Easy',
  'cin vs getline',
  array['getline', 'String Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "221B Baker Street, London", "output": "221B Baker Street, London", "explanation": "Sample for Read a Full Address Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #036: Read a Full Address Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #036: Read a Full Address Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #036: Read a Full Address Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000437',
  'userinput',
  37,
  '#037 Check if Input Failed',
  'input-037-check-if-input-failed',
  'Attempt to read an integer; if the input is not a valid number, cin.fail() becomes true. Print a message accordingly.

### Input
A token that is not a valid integer.

### Output
Print ''Invalid input!'' when the read fails.',
  'Medium',
  'Validation & Error Handling',
  array['cin.fail()', 'Validation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "abc", "output": "Invalid input!", "explanation": "Sample for Check if Input Failed"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #037: Check if Input Failed\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #037: Check if Input Failed\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #037: Check if Input Failed\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000438',
  'userinput',
  38,
  '#038 Confirm a Valid Numeric Input',
  'input-038-confirm-a-valid-numeric-input',
  'Read an integer and, since it is valid, print a confirmation message with its value.

### Input
A single valid integer.

### Output
Print ''Valid input: N''.',
  'Easy',
  'Validation & Error Handling',
  array['cin', 'Validation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "25", "output": "Valid input: 25", "explanation": "Sample for Confirm a Valid Numeric Input"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #038: Confirm a Valid Numeric Input\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #038: Confirm a Valid Numeric Input\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #038: Confirm a Valid Numeric Input\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000439',
  'userinput',
  39,
  '#039 Validate That a Number Is Positive',
  'input-039-validate-that-a-number-is-positive',
  'Read an integer and check whether it is positive; print an appropriate message.

### Input
A single integer.

### Output
Print ''Please enter a positive number.'' if not positive, otherwise print the number.',
  'Easy',
  'Validation & Error Handling',
  array['Validation', 'Conditionals', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "-5", "output": "Please enter a positive number.", "explanation": "Sample for Validate That a Number Is Positive"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #039: Validate That a Number Is Positive\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #039: Validate That a Number Is Positive\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #039: Validate That a Number Is Positive\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000440',
  'userinput',
  40,
  '#040 Validate a Number Is Within a Range',
  'input-040-validate-a-number-is-within-a-range',
  'Read an integer and check whether it lies between 1 and 100 (inclusive).

### Input
A single integer.

### Output
Print ''Out of range!'' if outside 1-100, otherwise print the number.',
  'Medium',
  'Validation & Error Handling',
  array['Validation', 'Range Check', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "150", "output": "Out of range!", "explanation": "Sample for Validate a Number Is Within a Range"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #040: Validate a Number Is Within a Range\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #040: Validate a Number Is Within a Range\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #040: Validate a Number Is Within a Range\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000441',
  'userinput',
  41,
  '#041 Detect Non-Numeric Input',
  'input-041-detect-non-numeric-input',
  'Attempt to read an integer; if it fails because the input wasn''t numeric, print a friendly message.

### Input
A non-numeric token.

### Output
Print ''That is not a number.'' on failure.',
  'Medium',
  'Validation & Error Handling',
  array['cin.fail()', 'Validation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "abc", "output": "That is not a number.", "explanation": "Sample for Detect Non-Numeric Input"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #041: Detect Non-Numeric Input\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #041: Detect Non-Numeric Input\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #041: Detect Non-Numeric Input\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000442',
  'userinput',
  42,
  '#042 Accept and Confirm Valid Input',
  'input-042-accept-and-confirm-valid-input',
  'Read an integer that is known to be valid and print it back with a confirmation label.

### Input
A single valid integer.

### Output
Print ''You entered: N''.',
  'Easy',
  'Validation & Error Handling',
  array['Validation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "42", "output": "You entered: 42", "explanation": "Sample for Accept and Confirm Valid Input"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #042: Accept and Confirm Valid Input\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #042: Accept and Confirm Valid Input\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #042: Accept and Confirm Valid Input\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000443',
  'userinput',
  43,
  '#043 Validate That a Number Is Even',
  'input-043-validate-that-a-number-is-even',
  'Read an integer and check whether it is even; print an appropriate message if it isn''t.

### Input
A single integer.

### Output
Print ''Please enter an even number.'' if odd, otherwise print the number.',
  'Medium',
  'Validation & Error Handling',
  array['Validation', 'Modulus', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "Please enter an even number.", "explanation": "Sample for Validate That a Number Is Even"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #043: Validate That a Number Is Even\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #043: Validate That a Number Is Even\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #043: Validate That a Number Is Even\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000444',
  'userinput',
  44,
  '#044 Sum a Fixed Set of Values from Input',
  'input-044-sum-a-fixed-set-of-values-from-input',
  'Read three integers and print their total sum.

### Input
Three integers.

### Output
Print ''Sum: X''.',
  'Easy',
  'Validation & Error Handling',
  array['cin', 'Loop Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "1 2 3", "output": "Sum: 6", "explanation": "Sample for Sum a Fixed Set of Values from Input"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #044: Sum a Fixed Set of Values from Input\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #044: Sum a Fixed Set of Values from Input\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #044: Sum a Fixed Set of Values from Input\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000445',
  'userinput',
  45,
  '#045 Read a Character Using cin.get()',
  'input-045-read-a-character-using-cin.get()',
  'Read a single character using cin.get() and print it back.

### Input
A single character.

### Output
Print the character.',
  'Easy',
  'Character Input',
  array['cin.get()', 'char Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "X", "output": "X", "explanation": "Sample for Read a Character Using cin.get()"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #045: Read a Character Using cin.get()\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #045: Read a Character Using cin.get()\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #045: Read a Character Using cin.get()\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000446',
  'userinput',
  46,
  '#046 Check If a Character Is a Vowel',
  'input-046-check-if-a-character-is-a-vowel',
  'Read a character and print whether it is a vowel or a consonant.

### Input
A single lowercase letter.

### Output
Print ''Vowel'' or ''Consonant''.',
  'Medium',
  'Character Input',
  array['char Input', 'Conditionals', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "e", "output": "Vowel", "explanation": "Sample for Check If a Character Is a Vowel"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #046: Check If a Character Is a Vowel\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #046: Check If a Character Is a Vowel\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #046: Check If a Character Is a Vowel\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000447',
  'userinput',
  47,
  '#047 Convert a Character''s Case',
  'input-047-convert-a-character's-case',
  'Read a lowercase letter and print its uppercase equivalent.

### Input
A single lowercase letter.

### Output
Print the uppercase letter.',
  'Easy',
  'Character Input',
  array['char Input', 'toupper/tolower', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "g", "output": "G", "explanation": "Sample for Convert a Character''s Case"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #047: Convert a Character''s Case\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #047: Convert a Character''s Case\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #047: Convert a Character''s Case\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000448',
  'userinput',
  48,
  '#048 Check If a Character Is a Digit',
  'input-048-check-if-a-character-is-a-digit',
  'Read a character and print whether it is a digit.

### Input
A single character.

### Output
Print ''Digit'' or ''Not a digit''.',
  'Easy',
  'Character Input',
  array['char Input', 'isdigit', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "7", "output": "Digit", "explanation": "Sample for Check If a Character Is a Digit"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #048: Check If a Character Is a Digit\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #048: Check If a Character Is a Digit\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #048: Check If a Character Is a Digit\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000449',
  'userinput',
  49,
  '#049 Check If a Character Is Alphabetic',
  'input-049-check-if-a-character-is-alphabetic',
  'Read a character and print whether it is alphabetic.

### Input
A single character.

### Output
Print ''Alphabetic'' or ''Not alphabetic''.',
  'Easy',
  'Character Input',
  array['char Input', 'isalpha', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "$", "output": "Not alphabetic", "explanation": "Sample for Check If a Character Is Alphabetic"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #049: Check If a Character Is Alphabetic\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #049: Check If a Character Is Alphabetic\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #049: Check If a Character Is Alphabetic\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000450',
  'userinput',
  50,
  '#050 Read Multiple Characters in a Loop',
  'input-050-read-multiple-characters-in-a-loop',
  'Read a short word one character at a time using a loop and print each character on its own line.

### Input
A word with no spaces.

### Output
Print each character on its own line.',
  'Medium',
  'Character Input',
  array['char Input', 'Loops', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "abc", "output": "a\nb\nc", "explanation": "Sample for Read Multiple Characters in a Loop"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #050: Read Multiple Characters in a Loop\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #050: Read Multiple Characters in a Loop\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #050: Read Multiple Characters in a Loop\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000451',
  'userinput',
  51,
  '#051 Print the Next Character in the Alphabet',
  'input-051-print-the-next-character-in-the-alphabet',
  'Read a lowercase letter and print the letter that comes after it.

### Input
A single lowercase letter (not z).

### Output
Print the next letter.',
  'Easy',
  'Character Input',
  array['char Input', 'ASCII Arithmetic', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "y", "output": "z", "explanation": "Sample for Print the Next Character in the Alphabet"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #051: Print the Next Character in the Alphabet\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #051: Print the Next Character in the Alphabet\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #051: Print the Next Character in the Alphabet\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000452',
  'userinput',
  52,
  '#052 Count Occurrences of a Character in a Line',
  'input-052-count-occurrences-of-a-character-in-a-line',
  'Read a line of text, then read a character, and count how many times that character appears in the line.

### Input
A line of text, then a single character.

### Output
Print the count.',
  'Medium',
  'Character Input',
  array['getline', 'char Input', 'Counting', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "banana\na", "output": "3", "explanation": "Sample for Count Occurrences of a Character in a Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #052: Count Occurrences of a Character in a Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #052: Count Occurrences of a Character in a Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #052: Count Occurrences of a Character in a Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000453',
  'userinput',
  53,
  '#053 Read N Integers and Print Their Sum',
  'input-053-read-n-integers-and-print-their-sum',
  'Read an integer N, then read N integers, and print their total sum.

### Input
An integer N, followed by N integers.

### Output
Print the sum of the N integers.',
  'Easy',
  'Loop-Based Input',
  array['Loop Input', 'Accumulation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3\n1 2 3", "output": "6", "explanation": "Sample for Read N Integers and Print Their Sum"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #053: Read N Integers and Print Their Sum\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #053: Read N Integers and Print Their Sum\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #053: Read N Integers and Print Their Sum\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000454',
  'userinput',
  54,
  '#054 Read N Integers and Print the Largest',
  'input-054-read-n-integers-and-print-the-largest',
  'Read an integer N, then read N integers, and print the largest one.

### Input
An integer N, followed by N integers.

### Output
Print the maximum value.',
  'Easy',
  'Loop-Based Input',
  array['Loop Input', 'Comparison', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "4\n5 9 2 7", "output": "9", "explanation": "Sample for Read N Integers and Print the Largest"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #054: Read N Integers and Print the Largest\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #054: Read N Integers and Print the Largest\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #054: Read N Integers and Print the Largest\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000455',
  'userinput',
  55,
  '#055 Read N Integers and Print the Smallest',
  'input-055-read-n-integers-and-print-the-smallest',
  'Read an integer N, then read N integers, and print the smallest one.

### Input
An integer N, followed by N integers.

### Output
Print the minimum value.',
  'Easy',
  'Loop-Based Input',
  array['Loop Input', 'Comparison', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "4\n5 9 2 7", "output": "2", "explanation": "Sample for Read N Integers and Print the Smallest"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #055: Read N Integers and Print the Smallest\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #055: Read N Integers and Print the Smallest\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #055: Read N Integers and Print the Smallest\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000456',
  'userinput',
  56,
  '#056 Read N Integers and Print Their Average',
  'input-056-read-n-integers-and-print-their-average',
  'Read an integer N, then read N integers, and print their average as an integer.

### Input
An integer N, followed by N integers.

### Output
Print the average.',
  'Easy',
  'Loop-Based Input',
  array['Loop Input', 'Average', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "4\n2 4 6 8", "output": "5", "explanation": "Sample for Read N Integers and Print Their Average"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #056: Read N Integers and Print Their Average\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #056: Read N Integers and Print Their Average\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #056: Read N Integers and Print Their Average\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000457',
  'userinput',
  57,
  '#057 Read N Floats and Print Their Sum',
  'input-057-read-n-floats-and-print-their-sum',
  'Read an integer N, then read N floats, and print their sum with 2 decimal places.

### Input
An integer N, followed by N decimal numbers.

### Output
Print the sum with 2 decimal places.',
  'Easy',
  'Loop-Based Input',
  array['Loop Input', 'double', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3\n1.5 2.5 3.0", "output": "7.00", "explanation": "Sample for Read N Floats and Print Their Sum"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #057: Read N Floats and Print Their Sum\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #057: Read N Floats and Print Their Sum\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #057: Read N Floats and Print Their Sum\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000458',
  'userinput',
  58,
  '#058 Read N Names Using getline in a Loop',
  'input-058-read-n-names-using-getline-in-a-loop',
  'Read an integer N, then read N names (one per line) using getline, and print each name.

### Input
An integer N, followed by N lines of text.

### Output
Print each name on its own line.',
  'Medium',
  'Loop-Based Input',
  array['Loop Input', 'getline', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "2\nAarav\nRiya", "output": "Aarav\nRiya", "explanation": "Sample for Read N Names Using getline in a Loop"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #058: Read N Names Using getline in a Loop\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #058: Read N Names Using getline in a Loop\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #058: Read N Names Using getline in a Loop\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000459',
  'userinput',
  59,
  '#059 Count Even Numbers Among N Inputs',
  'input-059-count-even-numbers-among-n-inputs',
  'Read an integer N, then read N integers, and count how many of them are even.

### Input
An integer N, followed by N integers.

### Output
Print the count of even numbers.',
  'Easy',
  'Loop-Based Input',
  array['Loop Input', 'Counting', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5\n1 2 3 4 5", "output": "2", "explanation": "Sample for Count Even Numbers Among N Inputs"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #059: Count Even Numbers Among N Inputs\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #059: Count Even Numbers Among N Inputs\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #059: Count Even Numbers Among N Inputs\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000460',
  'userinput',
  60,
  '#060 Read N Integers and Print Them Reversed',
  'input-060-read-n-integers-and-print-them-reversed',
  'Read an integer N, then read N integers, and print them in reverse order on one line.

### Input
An integer N, followed by N integers.

### Output
Print the values in reverse order, space-separated.',
  'Medium',
  'Loop-Based Input',
  array['Loop Input', 'Arrays', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "4\n1 2 3 4", "output": "4 3 2 1", "explanation": "Sample for Read N Integers and Print Them Reversed"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #060: Read N Integers and Print Them Reversed\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #060: Read N Integers and Print Them Reversed\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #060: Read N Integers and Print Them Reversed\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000461',
  'userinput',
  61,
  '#061 Read N Integers and Print Only the Positive Ones',
  'input-061-read-n-integers-and-print-only-the-positive-ones',
  'Read an integer N, then read N integers, and print only the positive ones on one line.

### Input
An integer N, followed by N integers.

### Output
Print the positive values, space-separated.',
  'Medium',
  'Loop-Based Input',
  array['Loop Input', 'Filtering', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5\n-1 2 -3 4 5", "output": "2 4 5", "explanation": "Sample for Read N Integers and Print Only the Positive Ones"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #061: Read N Integers and Print Only the Positive Ones\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #061: Read N Integers and Print Only the Positive Ones\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #061: Read N Integers and Print Only the Positive Ones\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000462',
  'userinput',
  62,
  '#062 Read N Pairs and Print Each Sum',
  'input-062-read-n-pairs-and-print-each-sum',
  'Read an integer N, then read N pairs of integers, printing the sum of each pair on its own line.

### Input
An integer N, followed by N pairs of integers.

### Output
Print each pair''s sum on its own line.',
  'Medium',
  'Loop-Based Input',
  array['Loop Input', 'Multiple Values', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "2\n1 2\n3 4", "output": "3\n7", "explanation": "Sample for Read N Pairs and Print Each Sum"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #062: Read N Pairs and Print Each Sum\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #062: Read N Pairs and Print Each Sum\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #062: Read N Pairs and Print Each Sum\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000463',
  'userinput',
  63,
  '#063 Read an Integer Then a Full Line',
  'input-063-read-an-integer-then-a-full-line',
  'Read an integer, then correctly read the full line of text that follows it (handling the leftover newline).

### Input
An integer, then a line of text.

### Output
Print the integer, then the line, each on its own line.',
  'Medium',
  'Mixed Input Formats',
  array['cin.ignore()', 'Mixed Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5\nHello World", "output": "5\nHello World", "explanation": "Sample for Read an Integer Then a Full Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #063: Read an Integer Then a Full Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #063: Read an Integer Then a Full Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #063: Read an Integer Then a Full Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000464',
  'userinput',
  64,
  '#064 Read a Character Then an Integer',
  'input-064-read-a-character-then-an-integer',
  'Read a character, then an integer, from input separated by a space.

### Input
A character and an integer, space-separated.

### Output
Print the character, then the integer, each on its own line.',
  'Easy',
  'Mixed Input Formats',
  array['cin', 'Whitespace Skipping', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "A 5", "output": "A\n5", "explanation": "Sample for Read a Character Then an Integer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #064: Read a Character Then an Integer\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #064: Read a Character Then an Integer\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #064: Read a Character Then an Integer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000465',
  'userinput',
  65,
  '#065 Read Numbers With Extra Spaces Between Them',
  'input-065-read-numbers-with-extra-spaces-between-them',
  'Read three integers even though they are separated by extra spaces, and print their sum.

### Input
Three integers separated by varying amounts of whitespace.

### Output
Print their sum.',
  'Easy',
  'Mixed Input Formats',
  array['cin', 'Whitespace Skipping', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3   7   2", "output": "12", "explanation": "Sample for Read Numbers With Extra Spaces Between Them"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #065: Read Numbers With Extra Spaces Between Them\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #065: Read Numbers With Extra Spaces Between Them\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #065: Read Numbers With Extra Spaces Between Them\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000466',
  'userinput',
  66,
  '#066 Read a Line Containing a Tab Character',
  'input-066-read-a-line-containing-a-tab-character',
  'Read a line that contains a tab character using getline and print it unchanged.

### Input
A line of text containing a tab.

### Output
Print the line exactly as entered.',
  'Medium',
  'Mixed Input Formats',
  array['getline', 'Whitespace Preservation', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Hello\tWorld", "output": "Hello\tWorld", "explanation": "Sample for Read a Line Containing a Tab Character"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #066: Read a Line Containing a Tab Character\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #066: Read a Line Containing a Tab Character\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #066: Read a Line Containing a Tab Character\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000467',
  'userinput',
  67,
  '#067 Skip Leading Whitespace Before a Number',
  'input-067-skip-leading-whitespace-before-a-number',
  'Read an integer even though it is preceded by leading spaces, and print it.

### Input
An integer with leading spaces.

### Output
Print the integer.',
  'Easy',
  'Mixed Input Formats',
  array['cin', 'Whitespace Skipping', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "   42", "output": "42", "explanation": "Sample for Skip Leading Whitespace Before a Number"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #067: Skip Leading Whitespace Before a Number\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #067: Skip Leading Whitespace Before a Number\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #067: Skip Leading Whitespace Before a Number\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000468',
  'userinput',
  68,
  '#068 Read Two Lines Sequentially',
  'input-068-read-two-lines-sequentially',
  'Read two separate lines of text using getline and print both.

### Input
Two lines of text.

### Output
Print the first line, then the second, each on its own line.',
  'Easy',
  'Mixed Input Formats',
  array['getline', 'Sequential Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Line One\nLine Two", "output": "Line One\nLine Two", "explanation": "Sample for Read Two Lines Sequentially"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #068: Read Two Lines Sequentially\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #068: Read Two Lines Sequentially\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #068: Read Two Lines Sequentially\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000469',
  'userinput',
  69,
  '#069 Read an Integer Immediately Followed by a Character',
  'input-069-read-an-integer-immediately-followed-by-a-character',
  'Read an integer and a character even though they appear with no space between them.

### Input
A digit sequence immediately followed by a letter.

### Output
Print the integer, then the character, each on its own line.',
  'Medium',
  'Mixed Input Formats',
  array['cin', 'Token Parsing', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5X", "output": "5\nX", "explanation": "Sample for Read an Integer Immediately Followed by a Character"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #069: Read an Integer Immediately Followed by a Character\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #069: Read an Integer Immediately Followed by a Character\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #069: Read an Integer Immediately Followed by a Character\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000470',
  'userinput',
  70,
  '#070 Combine cin and getline Safely',
  'input-070-combine-cin-and-getline-safely',
  'Read an integer using cin, then safely read the following line of text using getline.

### Input
An integer, then a line of text.

### Output
Print the integer, then the line, each on its own line.',
  'Medium',
  'Mixed Input Formats',
  array['cin.ignore()', 'Mixed Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3\nHello", "output": "3\nHello", "explanation": "Sample for Combine cin and getline Safely"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #070: Combine cin and getline Safely\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #070: Combine cin and getline Safely\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #070: Combine cin and getline Safely\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000471',
  'userinput',
  71,
  '#071 Split a Line by Commas Using getline',
  'input-071-split-a-line-by-commas-using-getline',
  'Read a comma-separated line and print each item on its own line using getline with '','' as the delimiter.

### Input
A comma-separated line.

### Output
Print each item on its own line.',
  'Medium',
  'getline with Delimiters',
  array['getline', 'Delimiter', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "apple,banana,cherry", "output": "apple\nbanana\ncherry", "explanation": "Sample for Split a Line by Commas Using getline"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #071: Split a Line by Commas Using getline\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #071: Split a Line by Commas Using getline\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #071: Split a Line by Commas Using getline\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000472',
  'userinput',
  72,
  '#072 Count Items in a Comma-Separated Line',
  'input-072-count-items-in-a-comma-separated-line',
  'Read a comma-separated line and print how many items it contains.

### Input
A comma-separated line.

### Output
Print the item count.',
  'Medium',
  'getline with Delimiters',
  array['getline', 'Delimiter', 'Counting', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "a,b,c,d", "output": "4", "explanation": "Sample for Count Items in a Comma-Separated Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #072: Count Items in a Comma-Separated Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #072: Count Items in a Comma-Separated Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #072: Count Items in a Comma-Separated Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000473',
  'userinput',
  73,
  '#073 Split a Line by a Custom Delimiter',
  'input-073-split-a-line-by-a-custom-delimiter',
  'Read a line separated by semicolons and print each item on its own line.

### Input
A semicolon-separated line.

### Output
Print each item on its own line.',
  'Medium',
  'getline with Delimiters',
  array['getline', 'Delimiter', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "one;two;three", "output": "one\ntwo\nthree", "explanation": "Sample for Split a Line by a Custom Delimiter"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #073: Split a Line by a Custom Delimiter\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #073: Split a Line by a Custom Delimiter\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #073: Split a Line by a Custom Delimiter\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000474',
  'userinput',
  74,
  '#074 Read a Key-Value Pair Separated by a Colon',
  'input-074-read-a-key-value-pair-separated-by-a-colon',
  'Read a line in the form key:value and print the key and value separately.

### Input
A line in the form key:value.

### Output
Key: Name, Value: Aarav',
  'Medium',
  'getline with Delimiters',
  array['getline', 'Delimiter', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Name:Aarav", "output": "Key: Name, Value: Aarav", "explanation": "Sample for Read a Key-Value Pair Separated by a Colon"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #074: Read a Key-Value Pair Separated by a Colon\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #074: Read a Key-Value Pair Separated by a Colon\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #074: Read a Key-Value Pair Separated by a Colon\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000475',
  'userinput',
  75,
  '#075 Extract the First and Last Word of a Line',
  'input-075-extract-the-first-and-last-word-of-a-line',
  'Read a line using getline and print its first and last words.

### Input
A line of text with multiple words.

### Output
First: The, Last: fox',
  'Medium',
  'getline with Delimiters',
  array['getline', 'String Parsing', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "The quick brown fox", "output": "First: The, Last: fox", "explanation": "Sample for Extract the First and Last Word of a Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #075: Extract the First and Last Word of a Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #075: Extract the First and Last Word of a Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #075: Extract the First and Last Word of a Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000476',
  'userinput',
  76,
  '#076 Read a CSV Line and Print One Field',
  'input-076-read-a-csv-line-and-print-one-field',
  'Read a comma-separated line representing id,name,score and print just the name.

### Input
A line in the form id,name,score.

### Output
Print the name field.',
  'Medium',
  'getline with Delimiters',
  array['getline', 'Delimiter', 'CSV', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "101,Riya,90", "output": "Riya", "explanation": "Sample for Read a CSV Line and Print One Field"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #076: Read a CSV Line and Print One Field\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #076: Read a CSV Line and Print One Field\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #076: Read a CSV Line and Print One Field\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000477',
  'userinput',
  77,
  '#077 Merge a Field From Multiple Delimited Lines',
  'input-077-merge-a-field-from-multiple-delimited-lines',
  'Read two comma-separated lines, each in the form id,name, and print the two names separated by a space.

### Input
Two lines, each in the form id,name.

### Output
Print both names separated by a space.',
  'Hard',
  'getline with Delimiters',
  array['getline', 'Delimiter', 'Loop Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "1,Aarav\n2,Riya", "output": "Aarav Riya", "explanation": "Sample for Merge a Field From Multiple Delimited Lines"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #077: Merge a Field From Multiple Delimited Lines\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #077: Merge a Field From Multiple Delimited Lines\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #077: Merge a Field From Multiple Delimited Lines\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000478',
  'userinput',
  78,
  '#078 Parse a Date String',
  'input-078-parse-a-date-string',
  'Read a date string in the form DD-MM-YYYY and print each part with a label.

### Input
A date string in the form DD-MM-YYYY.

### Output
Day: 15, Month: 08, Year: 2026',
  'Medium',
  'getline with Delimiters',
  array['getline', 'Delimiter', 'Parsing', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "15-08-2026", "output": "Day: 15, Month: 08, Year: 2026", "explanation": "Sample for Parse a Date String"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #078: Parse a Date String\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #078: Parse a Date String\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #078: Parse a Date String\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000479',
  'userinput',
  79,
  '#079 Read an Integer Then a Line Correctly',
  'input-079-read-an-integer-then-a-line-correctly',
  'Read an integer, use cin.ignore() to discard the leftover newline, then read the following line correctly.

### Input
An integer, then a line of text.

### Output
Print the integer, then the line, each on its own line.',
  'Medium',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'Buffer Handling', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5\nHello", "output": "5\nHello", "explanation": "Sample for Read an Integer Then a Line Correctly"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #079: Read an Integer Then a Line Correctly\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #079: Read an Integer Then a Line Correctly\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #079: Read an Integer Then a Line Correctly\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000480',
  'userinput',
  80,
  '#080 Use cin.ignore() to Skip to the Next Line',
  'input-080-use-cin.ignore()-to-skip-to-the-next-line',
  'Read an integer, skip past the rest of that line using cin.ignore(), then read the next full line.

### Input
An integer, then a line of text.

### Output
Print the integer, then the line, each on its own line.',
  'Easy',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'Buffer Handling', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "10\nWorld", "output": "10\nWorld", "explanation": "Sample for Use cin.ignore() to Skip to the Next Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #080: Use cin.ignore() to Skip to the Next Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #080: Use cin.ignore() to Skip to the Next Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #080: Use cin.ignore() to Skip to the Next Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000481',
  'userinput',
  81,
  '#081 Clear the Entire Input Buffer',
  'input-081-clear-the-entire-input-buffer',
  'Read an integer and use cin.ignore() with numeric_limits to discard any remaining characters on that line before reading the next line.

### Input
An integer, then a line of text.

### Output
Print the integer, then the line, each on its own line.',
  'Medium',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'numeric_limits', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "7\nTest Line", "output": "7\nTest Line", "explanation": "Sample for Clear the Entire Input Buffer"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #081: Clear the Entire Input Buffer\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #081: Clear the Entire Input Buffer\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #081: Clear the Entire Input Buffer\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000482',
  'userinput',
  82,
  '#082 Read Multiple Lines After a Count in a Loop',
  'input-082-read-multiple-lines-after-a-count-in-a-loop',
  'Read an integer N, then correctly read N following lines of text.

### Input
An integer N, followed by N lines.

### Output
Print each line on its own line.',
  'Medium',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'Loop Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "2\nLine1\nLine2", "output": "Line1\nLine2", "explanation": "Sample for Read Multiple Lines After a Count in a Loop"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #082: Read Multiple Lines After a Count in a Loop\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #082: Read Multiple Lines After a Count in a Loop\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #082: Read Multiple Lines After a Count in a Loop\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000483',
  'userinput',
  83,
  '#083 Read a Mixed Age and Name Record',
  'input-083-read-a-mixed-age-and-name-record',
  'Read an integer age, then a full name on the next line, and print both with labels.

### Input
An integer, then a name on the following line.

### Output
Age: 21, Name: John Doe',
  'Medium',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'Mixed Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "21\nJohn Doe", "output": "Age: 21, Name: John Doe", "explanation": "Sample for Read a Mixed Age and Name Record"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #083: Read a Mixed Age and Name Record\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #083: Read a Mixed Age and Name Record\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #083: Read a Mixed Age and Name Record\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000484',
  'userinput',
  84,
  '#084 Fix a Skipped Input Caused by a Leftover Newline',
  'input-084-fix-a-skipped-input-caused-by-a-leftover-newline',
  'Read an integer, correctly clear the input buffer, then read a following word without it being skipped.

### Input
An integer, then a word on the next line.

### Output
Print the integer, then the word, each on its own line.',
  'Medium',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'Buffer Handling', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "3\nApple", "output": "3\nApple", "explanation": "Sample for Fix a Skipped Input Caused by a Leftover Newline"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #084: Fix a Skipped Input Caused by a Leftover Newline\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #084: Fix a Skipped Input Caused by a Leftover Newline\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #084: Fix a Skipped Input Caused by a Leftover Newline\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000485',
  'userinput',
  85,
  '#085 Read a Character, Then a Line',
  'input-085-read-a-character,-then-a-line',
  'Read a single confirmation character, then correctly read the line that follows.

### Input
A character, then a line of text.

### Output
Print the character, then the line, each on its own line.',
  'Medium',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'Mixed Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Y\nConfirmed", "output": "Y\nConfirmed", "explanation": "Sample for Read a Character, Then a Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #085: Read a Character, Then a Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #085: Read a Character, Then a Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #085: Read a Character, Then a Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000486',
  'userinput',
  86,
  '#086 Read Multiple int+string Records',
  'input-086-read-multiple-int+string-records',
  'Read two records, each consisting of an integer and a name on the same line, and print them combined.

### Input
Two lines, each in the form: integer name.

### Output
Print each record as ''id-name'' on its own line.',
  'Hard',
  'cin.ignore() Buffer Issues',
  array['cin.ignore()', 'Loop Input', 'Records', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "1 Aarav\n2 Riya", "output": "1-Aarav\n2-Riya", "explanation": "Sample for Read Multiple int+string Records"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #086: Read Multiple int+string Records\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #086: Read Multiple int+string Records\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #086: Read Multiple int+string Records\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000487',
  'userinput',
  87,
  '#087 Simple Login Check',
  'input-087-simple-login-check',
  'Read a username and a password and print whether access is granted (username must be ''admin'' and password ''1234'').

### Input
A username and a password.

### Output
Access Granted',
  'Medium',
  'Real-World Input Scenarios',
  array['Real-World', 'String Comparison', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "admin 1234", "output": "Access Granted", "explanation": "Sample for Simple Login Check"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #087: Simple Login Check\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #087: Simple Login Check\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #087: Simple Login Check\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000488',
  'userinput',
  88,
  '#088 Simple Calculator From Input',
  'input-088-simple-calculator-from-input',
  'Read two numbers and an operator (+, -, *, or /) and print the result of applying it.

### Input
Two integers and an operator character.

### Output
Print the computed result.',
  'Medium',
  'Real-World Input Scenarios',
  array['Real-World', 'Mixed Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "6 3 +", "output": "9", "explanation": "Sample for Simple Calculator From Input"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #088: Simple Calculator From Input\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #088: Simple Calculator From Input\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #088: Simple Calculator From Input\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000489',
  'userinput',
  89,
  '#089 Formatted Receipt Line',
  'input-089-formatted-receipt-line',
  'Read a product name and price and print a formatted receipt line.

### Input
A product name and a decimal price.

### Output
Pen - $10.50',
  'Easy',
  'Real-World Input Scenarios',
  array['Real-World', 'String + double', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Pen 10.50", "output": "Pen - $10.50", "explanation": "Sample for Formatted Receipt Line"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #089: Formatted Receipt Line\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #089: Formatted Receipt Line\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #089: Formatted Receipt Line\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000490',
  'userinput',
  90,
  '#090 Student Average From Input',
  'input-090-student-average-from-input',
  'Read a student''s name and 3 marks, and print the student''s average.

### Input
A name and three integer marks.

### Output
Riya''s Average: 80',
  'Easy',
  'Real-World Input Scenarios',
  array['Real-World', 'Loop Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Riya 80 90 70", "output": "Riya''s Average: 80", "explanation": "Sample for Student Average From Input"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #090: Student Average From Input\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #090: Student Average From Input\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #090: Student Average From Input\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000491',
  'userinput',
  91,
  '#091 Sum Values Until a Sentinel Is Entered',
  'input-091-sum-values-until-a-sentinel-is-entered',
  'Read integers one at a time and add them to a running total until -1 is entered, then print the total.

### Input
A sequence of integers ending in -1.

### Output
Total: 60',
  'Medium',
  'Real-World Input Scenarios',
  array['Real-World', 'Sentinel-Controlled Loop', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "10 20 30 -1", "output": "Total: 60", "explanation": "Sample for Sum Values Until a Sentinel Is Entered"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #091: Sum Values Until a Sentinel Is Entered\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #091: Sum Values Until a Sentinel Is Entered\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #091: Sum Values Until a Sentinel Is Entered\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000492',
  'userinput',
  92,
  '#092 Simple To-Do Item',
  'input-092-simple-to-do-item',
  'Read a task description and a priority level and print them formatted together.

### Input
A task description and a priority word.

### Output
Task: Buy groceries [High]',
  'Easy',
  'Real-World Input Scenarios',
  array['Real-World', 'getline', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Buy groceries High", "output": "Task: Buy groceries [High]", "explanation": "Sample for Simple To-Do Item"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #092: Simple To-Do Item\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #092: Simple To-Do Item\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #092: Simple To-Do Item\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000493',
  'userinput',
  93,
  '#093 Calculate Age From Birth Year',
  'input-093-calculate-age-from-birth-year',
  'Read a birth year and the current year, and print the calculated age.

### Input
A birth year and the current year.

### Output
Age: 21',
  'Easy',
  'Real-World Input Scenarios',
  array['Real-World', 'Arithmetic', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "2005 2026", "output": "Age: 21", "explanation": "Sample for Calculate Age From Birth Year"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #093: Calculate Age From Birth Year\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #093: Calculate Age From Birth Year\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #093: Calculate Age From Birth Year\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000494',
  'userinput',
  94,
  '#094 Feedback Rating Message',
  'input-094-feedback-rating-message',
  'Read a rating from 1 to 5 and print a matching feedback message (5 = Excellent!).

### Input
A single integer rating from 1 to 5.

### Output
Excellent!',
  'Medium',
  'Real-World Input Scenarios',
  array['Real-World', 'Conditionals', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "5", "output": "Excellent!", "explanation": "Sample for Feedback Rating Message"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #094: Feedback Rating Message\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #094: Feedback Rating Message\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #094: Feedback Rating Message\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000495',
  'userinput',
  95,
  '#095 Read Two Lines and Print Both',
  'input-095-read-two-lines-and-print-both',
  'Read two lines of feedback text and print both.

### Input
Two lines of text.

### Output
Hello
World',
  'Easy',
  'Real-World Input Scenarios',
  array['Real-World', 'getline', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Hello\nWorld", "output": "Hello\nWorld", "explanation": "Sample for Read Two Lines and Print Both"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #095: Read Two Lines and Print Both\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #095: Read Two Lines and Print Both\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #095: Read Two Lines and Print Both\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000496',
  'userinput',
  96,
  '#096 Build a Contact Entry',
  'input-096-build-a-contact-entry',
  'Read a name, phone number, and email, and print them as a formatted contact entry.

### Input
A name, a phone number, and an email.

### Output
Name: Aarav, Phone: 9876543210, Email: aarav@mail.com',
  'Medium',
  'Real-World Input Scenarios',
  array['Real-World', 'Mixed Input', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Aarav 9876543210 aarav@mail.com", "output": "Name: Aarav, Phone: 9876543210, Email: aarav@mail.com", "explanation": "Sample for Build a Contact Entry"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #096: Build a Contact Entry\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #096: Build a Contact Entry\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #096: Build a Contact Entry\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000497',
  'userinput',
  97,
  '#097 Parse a Full CSV Record',
  'input-097-parse-a-full-csv-record',
  'Read a comma-separated record in the form id,name,score and print each field with a label.

### Input
A line in the form id,name,score.

### Output
ID: 7, Name: Neha, Score: 88',
  'Hard',
  'Final Input Challenges',
  array['getline', 'Delimiter', 'Final Challenge', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "7,Neha,88", "output": "ID: 7, Name: Neha, Score: 88", "explanation": "Sample for Parse a Full CSV Record"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #097: Parse a Full CSV Record\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #097: Parse a Full CSV Record\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #097: Parse a Full CSV Record\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000498',
  'userinput',
  98,
  '#098 Find the Topper From N Student Records',
  'input-098-find-the-topper-from-n-student-records',
  'Read N student records, each with a name and a score, and print the name of the student with the highest score.

### Input
An integer N, followed by N lines each with a name and a score.

### Output
Topper: Riya',
  'Hard',
  'Final Input Challenges',
  array['Loop Input', 'Records', 'Comparison', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "2\nAarav 80\nRiya 90", "output": "Topper: Riya", "explanation": "Sample for Find the Topper From N Student Records"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #098: Find the Topper From N Student Records\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #098: Find the Topper From N Student Records\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #098: Find the Topper From N Student Records\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000499',
  'userinput',
  99,
  '#099 Mini Input-Validated Login',
  'input-099-mini-input-validated-login',
  'Read a username and password and print whether the login succeeded, using fixed valid credentials.

### Input
A username and a password.

### Output
Login Successful',
  'Medium',
  'Final Input Challenges',
  array['Validation', 'String Comparison', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "admin admin123", "output": "Login Successful", "explanation": "Sample for Mini Input-Validated Login"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #099: Mini Input-Validated Login\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #099: Mini Input-Validated Login\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #099: Mini Input-Validated Login\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
),
(
  '00000000-0000-4000-8000-000000000500',
  'userinput',
  100,
  '#100 Final Challenge - Complete Order Form',
  'input-100-final-challenge---complete-order-form',
  'Read a customer name, an item name, a quantity, and a unit price, then print an order summary and the total bill.

### Input
A name, an item name, a quantity, and a unit price.

### Output
Order: Aarav ordered 3 x Pen
Total: 30',
  'Hard',
  'Final Input Challenges',
  array['Mixed Types', 'Final Challenge', 'User Input Mastery']::text[],
  'built_in',
  '[{"input": "Aarav Pen 3 10", "output": "Order: Aarav ordered 3 x Pen\nTotal: 30", "explanation": "Sample for Final Challenge - Complete Order Form"}]'::jsonb,
  '{"cpp": "#include <iostream>\n#include <string>\nusing namespace std;\n\n// User Input Problem #100: Final Challenge - Complete Order Form\nint main() {\n    // Write your input handling code here\n    return 0;\n}\n", "python": "# User Input Problem #100: Final Challenge - Complete Order Form\ndef solve():\n    # Write your input code here\n    pass\n\nsolve()\n", "javascript": "// User Input Problem #100: Final Challenge - Complete Order Form\nfunction solve() {\n    // Write your code here\n}\n\nsolve();\n", "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}\n"}'::jsonb
)
on conflict (id) do update set
  book = excluded.book,
  order_index = excluded.order_index,
  title = excluded.title,
  description = excluded.description,
  difficulty = excluded.difficulty,
  category = excluded.category,
  tags = excluded.tags,
  sample_test_cases = excluded.sample_test_cases,
  starter_templates = excluded.starter_templates;
