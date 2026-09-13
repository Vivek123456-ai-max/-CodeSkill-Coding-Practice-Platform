import { Problem } from '../../types/problem';

export const FUNC_PARAM_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-7003-000000000001",
    "book": "funcparams",
    "order_index": 1,
    "title": "#001 Pass-by-Value Demonstration",
    "slug": "funcparams-001-pass-by-value-demonstration",
    "description": "Write a function void incrementVal(int x) showing parameter modification does not affect original.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10",
        "output": "Original before: 10, inside: 11, after: 10",
        "explanation": "Demonstrates function parameter mechanisms for Pass-by-Value Demonstration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Pass-by-Value Demonstration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pass-by-Value Demonstration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pass-by-Value Demonstration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000002",
    "book": "funcparams",
    "order_index": 2,
    "title": "#002 Pass-by-Reference Integer Swap",
    "slug": "funcparams-002-pass-by-reference-integer-swap",
    "description": "Write a function void swapRef(int& a, int& b) swapping two integers in place.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 10",
        "output": "Swapped: 10 5",
        "explanation": "Demonstrates function parameter mechanisms for Pass-by-Reference Integer Swap."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Pass-by-Reference Integer Swap\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pass-by-Reference Integer Swap\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pass-by-Reference Integer Swap\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000003",
    "book": "funcparams",
    "order_index": 3,
    "title": "#003 Pass-by-Pointer Integer Swap",
    "slug": "funcparams-003-pass-by-pointer-integer-swap",
    "description": "Write a function void swapPtr(int* a, int* b) swapping two integers using pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "20 40",
        "output": "Swapped: 40 20",
        "explanation": "Demonstrates function parameter mechanisms for Pass-by-Pointer Integer Swap."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Pass-by-Pointer Integer Swap\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pass-by-Pointer Integer Swap\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pass-by-Pointer Integer Swap\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000004",
    "book": "funcparams",
    "order_index": 4,
    "title": "#004 Const Reference Parameter Efficiency",
    "slug": "funcparams-004-const-reference-parameter-efficiency",
    "description": "Write a function void printVector(const vector<int>& v) ensuring zero copies and read-only access.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 10 20 30",
        "output": "Vector: 10 20 30 (Read-only const ref)",
        "explanation": "Demonstrates function parameter mechanisms for Const Reference Parameter Efficiency."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Const Reference Parameter Efficiency\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Const Reference Parameter Efficiency\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Const Reference Parameter Efficiency\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000005",
    "book": "funcparams",
    "order_index": 5,
    "title": "#005 Default Parameter Single Value",
    "slug": "funcparams-005-default-parameter-single-value",
    "description": "Write a function double calculateTotal(double price, double tax = 0.05) with default tax rate.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100",
        "output": "$105.00 (Tax 5% applied by default)",
        "explanation": "Demonstrates function parameter mechanisms for Default Parameter Single Value."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Default Parameter Single Value\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Default Parameter Single Value\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Default Parameter Single Value\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000006",
    "book": "funcparams",
    "order_index": 6,
    "title": "#006 Default Parameter Multiple Values",
    "slug": "funcparams-006-default-parameter-multiple-values",
    "description": "Write a function void displayInfo(string name = 'Guest', int age = 18, string role = 'User').\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice 25 Admin",
        "output": "Alice, 25, Admin",
        "explanation": "Demonstrates function parameter mechanisms for Default Parameter Multiple Values."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Default Parameter Multiple Values\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Default Parameter Multiple Values\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Default Parameter Multiple Values\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000007",
    "book": "funcparams",
    "order_index": 7,
    "title": "#007 Output Parameters via References",
    "slug": "funcparams-007-output-parameters-via-references",
    "description": "Write a function void getStats(int a, int b, int& sum, int& diff, int& prod) returning 3 outputs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 5",
        "output": "Sum: 15, Diff: 5, Prod: 50",
        "explanation": "Demonstrates function parameter mechanisms for Output Parameters via References."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Output Parameters via References\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Output Parameters via References\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Output Parameters via References\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000008",
    "book": "funcparams",
    "order_index": 8,
    "title": "#008 Array Parameter Sized vs Decay",
    "slug": "funcparams-008-array-parameter-sized-vs-decay",
    "description": "Write a function void processArray(int arr[], int size) demonstrating array pointer decay.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "4 2 4 6 8",
        "output": "Array sum: 20",
        "explanation": "Demonstrates function parameter mechanisms for Array Parameter Sized vs Decay."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Array Parameter Sized vs Decay\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Array Parameter Sized vs Decay\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Array Parameter Sized vs Decay\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000009",
    "book": "funcparams",
    "order_index": 9,
    "title": "#009 2D Array Parameter Fixed Column Size",
    "slug": "funcparams-009-2d-array-parameter-fixed-column-size",
    "description": "Write a function void printMatrix(int mat[][3], int rows) with fixed column dimension.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2 1 2 3 4 5 6",
        "output": "1 2 3\n4 5 6",
        "explanation": "Demonstrates function parameter mechanisms for 2D Array Parameter Fixed Column Size."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// 2D Array Parameter Fixed Column Size\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# 2D Array Parameter Fixed Column Size\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// 2D Array Parameter Fixed Column Size\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000010",
    "book": "funcparams",
    "order_index": 10,
    "title": "#010 Struct Parameter by Const Reference",
    "slug": "funcparams-010-struct-parameter-by-const-reference",
    "description": "Write a function void printStudent(const Student& s) passing struct efficiently by const ref.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice 101 92.5",
        "output": "Student Alice (101): 92.5%",
        "explanation": "Demonstrates function parameter mechanisms for Struct Parameter by Const Reference."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Struct Parameter by Const Reference\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Struct Parameter by Const Reference\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Struct Parameter by Const Reference\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000011",
    "book": "funcparams",
    "order_index": 11,
    "title": "#011 Reference Parameter In-Place String Uppercase",
    "slug": "funcparams-011-reference-parameter-in-place-string-uppercase",
    "description": "Write a function void toUpperRef(string& s) modifying original string directly.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "codetutor",
        "output": "CODETUTOR",
        "explanation": "Demonstrates function parameter mechanisms for Reference Parameter In-Place String Uppercase."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Reference Parameter In-Place String Uppercase\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reference Parameter In-Place String Uppercase\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reference Parameter In-Place String Uppercase\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000012",
    "book": "funcparams",
    "order_index": 12,
    "title": "#012 Pointer Parameter Memory Allocation Inside Function",
    "slug": "funcparams-012-pointer-parameter-memory-allocation-inside-functio",
    "description": "Write a function void allocateBuffer(int*& ptr, int size) allocating heap memory via pointer reference.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "4",
        "output": "Buffer of size 4 allocated successfully",
        "explanation": "Demonstrates function parameter mechanisms for Pointer Parameter Memory Allocation Inside Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Pointer Parameter Memory Allocation Inside Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pointer Parameter Memory Allocation Inside Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pointer Parameter Memory Allocation Inside Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000013",
    "book": "funcparams",
    "order_index": 13,
    "title": "#013 Rvalue Reference Parameter (&& Move Semantics)",
    "slug": "funcparams-013-rvalue-reference-parameter-move-semantics",
    "description": "Write a function void processRvalue(string&& s) demonstrating rvalue binding.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TemporaryString",
        "output": "Moved Rvalue Resource: TemporaryString",
        "explanation": "Demonstrates function parameter mechanisms for Rvalue Reference Parameter (&& Move Semantics)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Rvalue Reference Parameter (&& Move Semantics)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rvalue Reference Parameter (&& Move Semantics)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rvalue Reference Parameter (&& Move Semantics)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000014",
    "book": "funcparams",
    "order_index": 14,
    "title": "#014 Function Accepting Function Pointer Parameter",
    "slug": "funcparams-014-function-accepting-function-pointer-parameter",
    "description": "Write a function void applyOperation(int a, int b, int (*op)(int, int)) applying callback.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "6 7 multiply",
        "output": "Result: 42",
        "explanation": "Demonstrates function parameter mechanisms for Function Accepting Function Pointer Parameter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Function Accepting Function Pointer Parameter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Function Accepting Function Pointer Parameter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Function Accepting Function Pointer Parameter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000015",
    "book": "funcparams",
    "order_index": 15,
    "title": "#015 Default Arguments Declaration Rule Demo",
    "slug": "funcparams-015-default-arguments-declaration-rule-demo",
    "description": "Demonstrate default arguments must be specified from right to left in parameter list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10",
        "output": "Function called with trailing default arguments",
        "explanation": "Demonstrates function parameter mechanisms for Default Arguments Declaration Rule Demo."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Default Arguments Declaration Rule Demo\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Default Arguments Declaration Rule Demo\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Default Arguments Declaration Rule Demo\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000016",
    "book": "funcparams",
    "order_index": 16,
    "title": "#016 Const Pointer vs Pointer to Const Parameters",
    "slug": "funcparams-016-const-pointer-vs-pointer-to-const-parameters",
    "description": "Demonstrate void f(const int* ptr) vs void g(int* const ptr) as parameter constraints.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "42",
        "output": "Parameter constness constraints verified",
        "explanation": "Demonstrates function parameter mechanisms for Const Pointer vs Pointer to Const Parameters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Const Pointer vs Pointer to Const Parameters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Const Pointer vs Pointer to Const Parameters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Const Pointer vs Pointer to Const Parameters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000017",
    "book": "funcparams",
    "order_index": 17,
    "title": "#017 Variadic Template Arguments Parameters (C++11)",
    "slug": "funcparams-017-variadic-template-arguments-parameters-c-11",
    "description": "Write a variadic template function printAll(Args... args) printing any number of parameters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1 Hello 3.14",
        "output": "1 Hello 3.14",
        "explanation": "Demonstrates function parameter mechanisms for Variadic Template Arguments Parameters (C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Variadic Template Arguments Parameters (C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Variadic Template Arguments Parameters (C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Variadic Template Arguments Parameters (C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000018",
    "book": "funcparams",
    "order_index": 18,
    "title": "#018 Passing std::initializer_list Parameter",
    "slug": "funcparams-018-passing-std-initializer-list-parameter",
    "description": "Write a function int sumList(initializer_list<int> list) taking arbitrary braced numbers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 20 30 40",
        "output": "Sum: 100",
        "explanation": "Demonstrates function parameter mechanisms for Passing std::initializer_list Parameter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Passing std::initializer_list Parameter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Passing std::initializer_list Parameter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Passing std::initializer_list Parameter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000019",
    "book": "funcparams",
    "order_index": 19,
    "title": "#019 Reference to Pointer Parameter for Linked List Insert",
    "slug": "funcparams-019-reference-to-pointer-parameter-for-linked-list-ins",
    "description": "Write a function void insertHead(Node*& head, int val) updating head via pointer reference.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 10 20 30",
        "output": "30 -> 20 -> 10 -> NULL",
        "explanation": "Demonstrates function parameter mechanisms for Reference to Pointer Parameter for Linked List Insert."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Reference to Pointer Parameter for Linked List Insert\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reference to Pointer Parameter for Linked List Insert\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reference to Pointer Parameter for Linked List Insert\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000020",
    "book": "funcparams",
    "order_index": 20,
    "title": "#020 Array Modification via Reference Parameter",
    "slug": "funcparams-020-array-modification-via-reference-parameter",
    "description": "Write a function void doubleArray(int (&arr)[5]) accepting fixed-size array reference.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1 2 3 4 5",
        "output": "2 4 6 8 10",
        "explanation": "Demonstrates function parameter mechanisms for Array Modification via Reference Parameter."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Array Modification via Reference Parameter\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Array Modification via Reference Parameter\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Array Modification via Reference Parameter\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000021",
    "book": "funcparams",
    "order_index": 21,
    "title": "#021 Parameter Handling Challenge #21",
    "slug": "funcparams-021-parameter-handling-challenge-21",
    "description": "Implement parameter passing pattern #21: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "21 42",
        "output": "Parameter Set #21 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #21."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #21\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #21\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #21\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000022",
    "book": "funcparams",
    "order_index": 22,
    "title": "#022 Parameter Handling Challenge #22",
    "slug": "funcparams-022-parameter-handling-challenge-22",
    "description": "Implement parameter passing pattern #22: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "22 44",
        "output": "Parameter Set #22 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #22."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #22\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #22\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #22\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000023",
    "book": "funcparams",
    "order_index": 23,
    "title": "#023 Parameter Handling Challenge #23",
    "slug": "funcparams-023-parameter-handling-challenge-23",
    "description": "Implement parameter passing pattern #23: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "23 46",
        "output": "Parameter Set #23 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #23."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #23\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #23\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #23\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000024",
    "book": "funcparams",
    "order_index": 24,
    "title": "#024 Parameter Handling Challenge #24",
    "slug": "funcparams-024-parameter-handling-challenge-24",
    "description": "Implement parameter passing pattern #24: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "24 48",
        "output": "Parameter Set #24 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #24."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #24\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #24\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #24\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000025",
    "book": "funcparams",
    "order_index": 25,
    "title": "#025 Parameter Handling Challenge #25",
    "slug": "funcparams-025-parameter-handling-challenge-25",
    "description": "Implement parameter passing pattern #25: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "25 50",
        "output": "Parameter Set #25 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #25."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #25\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #25\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #25\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000026",
    "book": "funcparams",
    "order_index": 26,
    "title": "#026 Parameter Handling Challenge #26",
    "slug": "funcparams-026-parameter-handling-challenge-26",
    "description": "Implement parameter passing pattern #26: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "26 52",
        "output": "Parameter Set #26 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #26."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #26\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #26\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #26\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000027",
    "book": "funcparams",
    "order_index": 27,
    "title": "#027 Parameter Handling Challenge #27",
    "slug": "funcparams-027-parameter-handling-challenge-27",
    "description": "Implement parameter passing pattern #27: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "27 54",
        "output": "Parameter Set #27 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #27."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #27\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #27\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #27\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000028",
    "book": "funcparams",
    "order_index": 28,
    "title": "#028 Parameter Handling Challenge #28",
    "slug": "funcparams-028-parameter-handling-challenge-28",
    "description": "Implement parameter passing pattern #28: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "28 56",
        "output": "Parameter Set #28 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #28."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #28\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #28\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #28\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000029",
    "book": "funcparams",
    "order_index": 29,
    "title": "#029 Parameter Handling Challenge #29",
    "slug": "funcparams-029-parameter-handling-challenge-29",
    "description": "Implement parameter passing pattern #29: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "29 58",
        "output": "Parameter Set #29 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #29."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #29\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #29\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #29\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000030",
    "book": "funcparams",
    "order_index": 30,
    "title": "#030 Parameter Handling Challenge #30",
    "slug": "funcparams-030-parameter-handling-challenge-30",
    "description": "Implement parameter passing pattern #30: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "30 60",
        "output": "Parameter Set #30 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #30."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #30\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #30\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #30\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000031",
    "book": "funcparams",
    "order_index": 31,
    "title": "#031 Parameter Handling Challenge #31",
    "slug": "funcparams-031-parameter-handling-challenge-31",
    "description": "Implement parameter passing pattern #31: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "31 62",
        "output": "Parameter Set #31 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #31."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #31\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #31\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #31\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000032",
    "book": "funcparams",
    "order_index": 32,
    "title": "#032 Parameter Handling Challenge #32",
    "slug": "funcparams-032-parameter-handling-challenge-32",
    "description": "Implement parameter passing pattern #32: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "32 64",
        "output": "Parameter Set #32 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #32."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #32\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #32\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #32\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000033",
    "book": "funcparams",
    "order_index": 33,
    "title": "#033 Parameter Handling Challenge #33",
    "slug": "funcparams-033-parameter-handling-challenge-33",
    "description": "Implement parameter passing pattern #33: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "33 66",
        "output": "Parameter Set #33 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #33."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #33\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #33\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #33\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000034",
    "book": "funcparams",
    "order_index": 34,
    "title": "#034 Parameter Handling Challenge #34",
    "slug": "funcparams-034-parameter-handling-challenge-34",
    "description": "Implement parameter passing pattern #34: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "34 68",
        "output": "Parameter Set #34 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #34."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #34\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #34\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #34\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000035",
    "book": "funcparams",
    "order_index": 35,
    "title": "#035 Parameter Handling Challenge #35",
    "slug": "funcparams-035-parameter-handling-challenge-35",
    "description": "Implement parameter passing pattern #35: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "35 70",
        "output": "Parameter Set #35 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #35."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #35\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #35\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #35\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000036",
    "book": "funcparams",
    "order_index": 36,
    "title": "#036 Parameter Handling Challenge #36",
    "slug": "funcparams-036-parameter-handling-challenge-36",
    "description": "Implement parameter passing pattern #36: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "36 72",
        "output": "Parameter Set #36 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #36."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #36\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #36\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #36\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000037",
    "book": "funcparams",
    "order_index": 37,
    "title": "#037 Parameter Handling Challenge #37",
    "slug": "funcparams-037-parameter-handling-challenge-37",
    "description": "Implement parameter passing pattern #37: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "37 74",
        "output": "Parameter Set #37 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #37."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #37\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #37\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #37\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000038",
    "book": "funcparams",
    "order_index": 38,
    "title": "#038 Parameter Handling Challenge #38",
    "slug": "funcparams-038-parameter-handling-challenge-38",
    "description": "Implement parameter passing pattern #38: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "38 76",
        "output": "Parameter Set #38 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #38."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #38\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #38\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #38\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000039",
    "book": "funcparams",
    "order_index": 39,
    "title": "#039 Parameter Handling Challenge #39",
    "slug": "funcparams-039-parameter-handling-challenge-39",
    "description": "Implement parameter passing pattern #39: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "39 78",
        "output": "Parameter Set #39 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #39."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #39\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #39\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #39\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000040",
    "book": "funcparams",
    "order_index": 40,
    "title": "#040 Parameter Handling Challenge #40",
    "slug": "funcparams-040-parameter-handling-challenge-40",
    "description": "Implement parameter passing pattern #40: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "40 80",
        "output": "Parameter Set #40 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #40."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #40\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #40\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #40\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000041",
    "book": "funcparams",
    "order_index": 41,
    "title": "#041 Parameter Handling Challenge #41",
    "slug": "funcparams-041-parameter-handling-challenge-41",
    "description": "Implement parameter passing pattern #41: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "41 82",
        "output": "Parameter Set #41 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #41."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #41\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #41\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #41\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000042",
    "book": "funcparams",
    "order_index": 42,
    "title": "#042 Parameter Handling Challenge #42",
    "slug": "funcparams-042-parameter-handling-challenge-42",
    "description": "Implement parameter passing pattern #42: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "42 84",
        "output": "Parameter Set #42 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #42."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #42\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #42\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #42\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000043",
    "book": "funcparams",
    "order_index": 43,
    "title": "#043 Parameter Handling Challenge #43",
    "slug": "funcparams-043-parameter-handling-challenge-43",
    "description": "Implement parameter passing pattern #43: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "43 86",
        "output": "Parameter Set #43 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #43."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #43\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #43\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #43\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000044",
    "book": "funcparams",
    "order_index": 44,
    "title": "#044 Parameter Handling Challenge #44",
    "slug": "funcparams-044-parameter-handling-challenge-44",
    "description": "Implement parameter passing pattern #44: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "44 88",
        "output": "Parameter Set #44 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #44."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #44\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #44\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #44\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000045",
    "book": "funcparams",
    "order_index": 45,
    "title": "#045 Parameter Handling Challenge #45",
    "slug": "funcparams-045-parameter-handling-challenge-45",
    "description": "Implement parameter passing pattern #45: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "45 90",
        "output": "Parameter Set #45 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #45."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #45\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #45\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #45\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000046",
    "book": "funcparams",
    "order_index": 46,
    "title": "#046 Parameter Handling Challenge #46",
    "slug": "funcparams-046-parameter-handling-challenge-46",
    "description": "Implement parameter passing pattern #46: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "46 92",
        "output": "Parameter Set #46 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #46."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #46\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #46\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #46\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000047",
    "book": "funcparams",
    "order_index": 47,
    "title": "#047 Parameter Handling Challenge #47",
    "slug": "funcparams-047-parameter-handling-challenge-47",
    "description": "Implement parameter passing pattern #47: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "47 94",
        "output": "Parameter Set #47 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #47."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #47\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #47\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #47\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000048",
    "book": "funcparams",
    "order_index": 48,
    "title": "#048 Parameter Handling Challenge #48",
    "slug": "funcparams-048-parameter-handling-challenge-48",
    "description": "Implement parameter passing pattern #48: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "48 96",
        "output": "Parameter Set #48 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #48."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #48\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #48\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #48\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000049",
    "book": "funcparams",
    "order_index": 49,
    "title": "#049 Parameter Handling Challenge #49",
    "slug": "funcparams-049-parameter-handling-challenge-49",
    "description": "Implement parameter passing pattern #49: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "49 98",
        "output": "Parameter Set #49 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #49."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #49\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #49\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #49\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000050",
    "book": "funcparams",
    "order_index": 50,
    "title": "#050 Parameter Handling Challenge #50",
    "slug": "funcparams-050-parameter-handling-challenge-50",
    "description": "Implement parameter passing pattern #50: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "50 100",
        "output": "Parameter Set #50 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #50."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #50\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #50\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #50\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000051",
    "book": "funcparams",
    "order_index": 51,
    "title": "#051 Parameter Handling Challenge #51",
    "slug": "funcparams-051-parameter-handling-challenge-51",
    "description": "Implement parameter passing pattern #51: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "51 102",
        "output": "Parameter Set #51 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000052",
    "book": "funcparams",
    "order_index": 52,
    "title": "#052 Parameter Handling Challenge #52",
    "slug": "funcparams-052-parameter-handling-challenge-52",
    "description": "Implement parameter passing pattern #52: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "52 104",
        "output": "Parameter Set #52 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000053",
    "book": "funcparams",
    "order_index": 53,
    "title": "#053 Parameter Handling Challenge #53",
    "slug": "funcparams-053-parameter-handling-challenge-53",
    "description": "Implement parameter passing pattern #53: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "53 106",
        "output": "Parameter Set #53 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000054",
    "book": "funcparams",
    "order_index": 54,
    "title": "#054 Parameter Handling Challenge #54",
    "slug": "funcparams-054-parameter-handling-challenge-54",
    "description": "Implement parameter passing pattern #54: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "54 108",
        "output": "Parameter Set #54 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000055",
    "book": "funcparams",
    "order_index": 55,
    "title": "#055 Parameter Handling Challenge #55",
    "slug": "funcparams-055-parameter-handling-challenge-55",
    "description": "Implement parameter passing pattern #55: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "55 110",
        "output": "Parameter Set #55 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000056",
    "book": "funcparams",
    "order_index": 56,
    "title": "#056 Parameter Handling Challenge #56",
    "slug": "funcparams-056-parameter-handling-challenge-56",
    "description": "Implement parameter passing pattern #56: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "56 112",
        "output": "Parameter Set #56 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000057",
    "book": "funcparams",
    "order_index": 57,
    "title": "#057 Parameter Handling Challenge #57",
    "slug": "funcparams-057-parameter-handling-challenge-57",
    "description": "Implement parameter passing pattern #57: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "57 114",
        "output": "Parameter Set #57 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000058",
    "book": "funcparams",
    "order_index": 58,
    "title": "#058 Parameter Handling Challenge #58",
    "slug": "funcparams-058-parameter-handling-challenge-58",
    "description": "Implement parameter passing pattern #58: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "58 116",
        "output": "Parameter Set #58 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000059",
    "book": "funcparams",
    "order_index": 59,
    "title": "#059 Parameter Handling Challenge #59",
    "slug": "funcparams-059-parameter-handling-challenge-59",
    "description": "Implement parameter passing pattern #59: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "59 118",
        "output": "Parameter Set #59 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000060",
    "book": "funcparams",
    "order_index": 60,
    "title": "#060 Parameter Handling Challenge #60",
    "slug": "funcparams-060-parameter-handling-challenge-60",
    "description": "Implement parameter passing pattern #60: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "60 120",
        "output": "Parameter Set #60 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000061",
    "book": "funcparams",
    "order_index": 61,
    "title": "#061 Parameter Handling Challenge #61",
    "slug": "funcparams-061-parameter-handling-challenge-61",
    "description": "Implement parameter passing pattern #61: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "61 122",
        "output": "Parameter Set #61 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000062",
    "book": "funcparams",
    "order_index": 62,
    "title": "#062 Parameter Handling Challenge #62",
    "slug": "funcparams-062-parameter-handling-challenge-62",
    "description": "Implement parameter passing pattern #62: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "62 124",
        "output": "Parameter Set #62 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000063",
    "book": "funcparams",
    "order_index": 63,
    "title": "#063 Parameter Handling Challenge #63",
    "slug": "funcparams-063-parameter-handling-challenge-63",
    "description": "Implement parameter passing pattern #63: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "63 126",
        "output": "Parameter Set #63 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000064",
    "book": "funcparams",
    "order_index": 64,
    "title": "#064 Parameter Handling Challenge #64",
    "slug": "funcparams-064-parameter-handling-challenge-64",
    "description": "Implement parameter passing pattern #64: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "64 128",
        "output": "Parameter Set #64 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000065",
    "book": "funcparams",
    "order_index": 65,
    "title": "#065 Parameter Handling Challenge #65",
    "slug": "funcparams-065-parameter-handling-challenge-65",
    "description": "Implement parameter passing pattern #65: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "65 130",
        "output": "Parameter Set #65 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000066",
    "book": "funcparams",
    "order_index": 66,
    "title": "#066 Parameter Handling Challenge #66",
    "slug": "funcparams-066-parameter-handling-challenge-66",
    "description": "Implement parameter passing pattern #66: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "66 132",
        "output": "Parameter Set #66 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000067",
    "book": "funcparams",
    "order_index": 67,
    "title": "#067 Parameter Handling Challenge #67",
    "slug": "funcparams-067-parameter-handling-challenge-67",
    "description": "Implement parameter passing pattern #67: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "67 134",
        "output": "Parameter Set #67 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000068",
    "book": "funcparams",
    "order_index": 68,
    "title": "#068 Parameter Handling Challenge #68",
    "slug": "funcparams-068-parameter-handling-challenge-68",
    "description": "Implement parameter passing pattern #68: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "68 136",
        "output": "Parameter Set #68 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000069",
    "book": "funcparams",
    "order_index": 69,
    "title": "#069 Parameter Handling Challenge #69",
    "slug": "funcparams-069-parameter-handling-challenge-69",
    "description": "Implement parameter passing pattern #69: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "69 138",
        "output": "Parameter Set #69 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000070",
    "book": "funcparams",
    "order_index": 70,
    "title": "#070 Parameter Handling Challenge #70",
    "slug": "funcparams-070-parameter-handling-challenge-70",
    "description": "Implement parameter passing pattern #70: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "70 140",
        "output": "Parameter Set #70 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000071",
    "book": "funcparams",
    "order_index": 71,
    "title": "#071 Parameter Handling Challenge #71",
    "slug": "funcparams-071-parameter-handling-challenge-71",
    "description": "Implement parameter passing pattern #71: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "71 142",
        "output": "Parameter Set #71 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000072",
    "book": "funcparams",
    "order_index": 72,
    "title": "#072 Parameter Handling Challenge #72",
    "slug": "funcparams-072-parameter-handling-challenge-72",
    "description": "Implement parameter passing pattern #72: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "72 144",
        "output": "Parameter Set #72 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000073",
    "book": "funcparams",
    "order_index": 73,
    "title": "#073 Parameter Handling Challenge #73",
    "slug": "funcparams-073-parameter-handling-challenge-73",
    "description": "Implement parameter passing pattern #73: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "73 146",
        "output": "Parameter Set #73 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000074",
    "book": "funcparams",
    "order_index": 74,
    "title": "#074 Parameter Handling Challenge #74",
    "slug": "funcparams-074-parameter-handling-challenge-74",
    "description": "Implement parameter passing pattern #74: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "74 148",
        "output": "Parameter Set #74 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000075",
    "book": "funcparams",
    "order_index": 75,
    "title": "#075 Parameter Handling Challenge #75",
    "slug": "funcparams-075-parameter-handling-challenge-75",
    "description": "Implement parameter passing pattern #75: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "75 150",
        "output": "Parameter Set #75 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000076",
    "book": "funcparams",
    "order_index": 76,
    "title": "#076 Parameter Handling Challenge #76",
    "slug": "funcparams-076-parameter-handling-challenge-76",
    "description": "Implement parameter passing pattern #76: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "76 152",
        "output": "Parameter Set #76 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000077",
    "book": "funcparams",
    "order_index": 77,
    "title": "#077 Parameter Handling Challenge #77",
    "slug": "funcparams-077-parameter-handling-challenge-77",
    "description": "Implement parameter passing pattern #77: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "77 154",
        "output": "Parameter Set #77 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000078",
    "book": "funcparams",
    "order_index": 78,
    "title": "#078 Parameter Handling Challenge #78",
    "slug": "funcparams-078-parameter-handling-challenge-78",
    "description": "Implement parameter passing pattern #78: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "78 156",
        "output": "Parameter Set #78 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000079",
    "book": "funcparams",
    "order_index": 79,
    "title": "#079 Parameter Handling Challenge #79",
    "slug": "funcparams-079-parameter-handling-challenge-79",
    "description": "Implement parameter passing pattern #79: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "79 158",
        "output": "Parameter Set #79 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000080",
    "book": "funcparams",
    "order_index": 80,
    "title": "#080 Parameter Handling Challenge #80",
    "slug": "funcparams-080-parameter-handling-challenge-80",
    "description": "Implement parameter passing pattern #80: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "80 160",
        "output": "Parameter Set #80 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000081",
    "book": "funcparams",
    "order_index": 81,
    "title": "#081 Parameter Handling Challenge #81",
    "slug": "funcparams-081-parameter-handling-challenge-81",
    "description": "Implement parameter passing pattern #81: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "81 162",
        "output": "Parameter Set #81 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000082",
    "book": "funcparams",
    "order_index": 82,
    "title": "#082 Parameter Handling Challenge #82",
    "slug": "funcparams-082-parameter-handling-challenge-82",
    "description": "Implement parameter passing pattern #82: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "82 164",
        "output": "Parameter Set #82 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000083",
    "book": "funcparams",
    "order_index": 83,
    "title": "#083 Parameter Handling Challenge #83",
    "slug": "funcparams-083-parameter-handling-challenge-83",
    "description": "Implement parameter passing pattern #83: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "83 166",
        "output": "Parameter Set #83 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000084",
    "book": "funcparams",
    "order_index": 84,
    "title": "#084 Parameter Handling Challenge #84",
    "slug": "funcparams-084-parameter-handling-challenge-84",
    "description": "Implement parameter passing pattern #84: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "84 168",
        "output": "Parameter Set #84 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000085",
    "book": "funcparams",
    "order_index": 85,
    "title": "#085 Parameter Handling Challenge #85",
    "slug": "funcparams-085-parameter-handling-challenge-85",
    "description": "Implement parameter passing pattern #85: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "85 170",
        "output": "Parameter Set #85 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000086",
    "book": "funcparams",
    "order_index": 86,
    "title": "#086 Parameter Handling Challenge #86",
    "slug": "funcparams-086-parameter-handling-challenge-86",
    "description": "Implement parameter passing pattern #86: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "86 172",
        "output": "Parameter Set #86 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000087",
    "book": "funcparams",
    "order_index": 87,
    "title": "#087 Parameter Handling Challenge #87",
    "slug": "funcparams-087-parameter-handling-challenge-87",
    "description": "Implement parameter passing pattern #87: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "87 174",
        "output": "Parameter Set #87 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000088",
    "book": "funcparams",
    "order_index": 88,
    "title": "#088 Parameter Handling Challenge #88",
    "slug": "funcparams-088-parameter-handling-challenge-88",
    "description": "Implement parameter passing pattern #88: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "88 176",
        "output": "Parameter Set #88 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000089",
    "book": "funcparams",
    "order_index": 89,
    "title": "#089 Parameter Handling Challenge #89",
    "slug": "funcparams-089-parameter-handling-challenge-89",
    "description": "Implement parameter passing pattern #89: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "89 178",
        "output": "Parameter Set #89 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000090",
    "book": "funcparams",
    "order_index": 90,
    "title": "#090 Parameter Handling Challenge #90",
    "slug": "funcparams-090-parameter-handling-challenge-90",
    "description": "Implement parameter passing pattern #90: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "90 180",
        "output": "Parameter Set #90 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000091",
    "book": "funcparams",
    "order_index": 91,
    "title": "#091 Parameter Handling Challenge #91",
    "slug": "funcparams-091-parameter-handling-challenge-91",
    "description": "Implement parameter passing pattern #91: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "91 182",
        "output": "Parameter Set #91 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000092",
    "book": "funcparams",
    "order_index": 92,
    "title": "#092 Parameter Handling Challenge #92",
    "slug": "funcparams-092-parameter-handling-challenge-92",
    "description": "Implement parameter passing pattern #92: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "92 184",
        "output": "Parameter Set #92 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000093",
    "book": "funcparams",
    "order_index": 93,
    "title": "#093 Parameter Handling Challenge #93",
    "slug": "funcparams-093-parameter-handling-challenge-93",
    "description": "Implement parameter passing pattern #93: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "93 186",
        "output": "Parameter Set #93 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000094",
    "book": "funcparams",
    "order_index": 94,
    "title": "#094 Parameter Handling Challenge #94",
    "slug": "funcparams-094-parameter-handling-challenge-94",
    "description": "Implement parameter passing pattern #94: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "94 188",
        "output": "Parameter Set #94 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000095",
    "book": "funcparams",
    "order_index": 95,
    "title": "#095 Parameter Handling Challenge #95",
    "slug": "funcparams-095-parameter-handling-challenge-95",
    "description": "Implement parameter passing pattern #95: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "95 190",
        "output": "Parameter Set #95 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000096",
    "book": "funcparams",
    "order_index": 96,
    "title": "#096 Parameter Handling Challenge #96",
    "slug": "funcparams-096-parameter-handling-challenge-96",
    "description": "Implement parameter passing pattern #96: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "96 192",
        "output": "Parameter Set #96 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000097",
    "book": "funcparams",
    "order_index": 97,
    "title": "#097 Parameter Handling Challenge #97",
    "slug": "funcparams-097-parameter-handling-challenge-97",
    "description": "Implement parameter passing pattern #97: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "97 194",
        "output": "Parameter Set #97 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000098",
    "book": "funcparams",
    "order_index": 98,
    "title": "#098 Parameter Handling Challenge #98",
    "slug": "funcparams-098-parameter-handling-challenge-98",
    "description": "Implement parameter passing pattern #98: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "98 196",
        "output": "Parameter Set #98 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000099",
    "book": "funcparams",
    "order_index": 99,
    "title": "#099 Parameter Handling Challenge #99",
    "slug": "funcparams-099-parameter-handling-challenge-99",
    "description": "Implement parameter passing pattern #99: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "99 198",
        "output": "Parameter Set #99 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-7003-000000000100",
    "book": "funcparams",
    "order_index": 100,
    "title": "#100 Parameter Handling Challenge #100",
    "slug": "funcparams-100-parameter-handling-challenge-100",
    "description": "Implement parameter passing pattern #100: configure pass-by-ref, const correctness, and default arguments for optimal execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Function Parameter Semantics",
    "tags": [
      "Parameters",
      "Pass by Reference",
      "Const"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100 200",
        "output": "Parameter Set #100 Processed In-Place",
        "explanation": "Demonstrates function parameter mechanisms for Parameter Handling Challenge #100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Parameter Handling Challenge #100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Parameter Handling Challenge #100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Parameter Handling Challenge #100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
