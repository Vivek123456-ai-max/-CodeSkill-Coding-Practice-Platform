import { Problem } from '../../types/problem';

export const CPP_ERRORS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6001-000000000001",
    "book": "cpperrors",
    "order_index": 1,
    "title": "#001 Syntax Error Identification (Missing Semicolon / Parenthesis)",
    "slug": "cpperrors-001-syntax-error-identification-missing-semicolon-pare",
    "description": "Identify and fix common syntax errors such as missing semicolons, unmatched curly braces, or misspelled keywords.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "int a = 10",
        "output": "Syntax Error Resolved: Semicolon appended -> a = 10",
        "explanation": "Executes logic for Syntax Error Identification (Missing Semicolon / Parenthesis)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Syntax Error Identification (Missing Semicolon / Parenthesis)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Syntax Error Identification (Missing Semicolon / Parenthesis)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Syntax Error Identification (Missing Semicolon / Parenthesis)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000002",
    "book": "cpperrors",
    "order_index": 2,
    "title": "#002 Semantic Error (Type Mismatch Assignment)",
    "slug": "cpperrors-002-semantic-error-type-mismatch-assignment",
    "description": "Fix semantic error where a string literal is improperly assigned to an integer variable.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "int x = 'hello'",
        "output": "Semantic Error Resolved: Converted to std::string",
        "explanation": "Executes logic for Semantic Error (Type Mismatch Assignment)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Semantic Error (Type Mismatch Assignment)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Semantic Error (Type Mismatch Assignment)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Semantic Error (Type Mismatch Assignment)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000003",
    "book": "cpperrors",
    "order_index": 3,
    "title": "#003 Linker Error: Undefined Reference to Function",
    "slug": "cpperrors-003-linker-error-undefined-reference-to-function",
    "description": "Resolve undefined reference linker error by providing the missing function definition matching its prototype.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call calculateTotal()",
        "output": "Linker Error Fixed: calculateTotal() definition provided -> Output: 100",
        "explanation": "Executes logic for Linker Error: Undefined Reference to Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Linker Error: Undefined Reference to Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Linker Error: Undefined Reference to Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Linker Error: Undefined Reference to Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000004",
    "book": "cpperrors",
    "order_index": 4,
    "title": "#004 Linker Error: Duplicate Symbol Definition",
    "slug": "cpperrors-004-linker-error-duplicate-symbol-definition",
    "description": "Prevent multiple definition linker errors across translation units using header include guards or `#pragma once`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Duplicate symbol foo",
        "output": "Include guards added: Duplicate symbol resolved",
        "explanation": "Executes logic for Linker Error: Duplicate Symbol Definition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Linker Error: Duplicate Symbol Definition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Linker Error: Duplicate Symbol Definition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Linker Error: Duplicate Symbol Definition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000005",
    "book": "cpperrors",
    "order_index": 5,
    "title": "#005 Runtime Error: Division by Zero (SIGFPE)",
    "slug": "cpperrors-005-runtime-error-division-by-zero-sigfpe",
    "description": "Detect and prevent floating point exception / arithmetic runtime error before dividing by zero.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Divide 50 by 0",
        "output": "Error Guard Triggered: Division by zero avoided (Safe fallback: 0)",
        "explanation": "Executes logic for Runtime Error: Division by Zero (SIGFPE)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Division by Zero (SIGFPE)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Division by Zero (SIGFPE)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Division by Zero (SIGFPE)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000006",
    "book": "cpperrors",
    "order_index": 6,
    "title": "#006 Runtime Error: Array Index Out of Bounds (SIGSEGV)",
    "slug": "cpperrors-006-runtime-error-array-index-out-of-bounds-sigsegv",
    "description": "Replace unsafe direct indexing `arr[i]` with bounds-checked `arr.at(i)` or explicit range validation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Access index 10 in array of size 5",
        "output": "Out of bounds error caught: Index 10 is >= size 5",
        "explanation": "Executes logic for Runtime Error: Array Index Out of Bounds (SIGSEGV)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Array Index Out of Bounds (SIGSEGV)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Array Index Out of Bounds (SIGSEGV)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Array Index Out of Bounds (SIGSEGV)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000007",
    "book": "cpperrors",
    "order_index": 7,
    "title": "#007 Runtime Error: Null Pointer Dereference (SIGSEGV)",
    "slug": "cpperrors-007-runtime-error-null-pointer-dereference-sigsegv",
    "description": "Detect null pointer dereference before accessing member data or invoking methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Dereference nullptr",
        "output": "Null pointer detected: Operation skipped safely",
        "explanation": "Executes logic for Runtime Error: Null Pointer Dereference (SIGSEGV)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Null Pointer Dereference (SIGSEGV)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Null Pointer Dereference (SIGSEGV)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Null Pointer Dereference (SIGSEGV)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000008",
    "book": "cpperrors",
    "order_index": 8,
    "title": "#008 Runtime Error: Stack Overflow via Infinite Recursion",
    "slug": "cpperrors-008-runtime-error-stack-overflow-via-infinite-recursio",
    "description": "Fix infinite recursion by introducing correct base termination condition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Recursive countdown from 5",
        "output": "Base condition reached at 0: Stack overflow prevented",
        "explanation": "Executes logic for Runtime Error: Stack Overflow via Infinite Recursion."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Stack Overflow via Infinite Recursion\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Stack Overflow via Infinite Recursion\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Stack Overflow via Infinite Recursion\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000009",
    "book": "cpperrors",
    "order_index": 9,
    "title": "#009 Memory Error: Double Free Bug",
    "slug": "cpperrors-009-memory-error-double-free-bug",
    "description": "Prevent calling `delete` twice on the same heap pointer by immediately assigning pointer to `nullptr`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Double delete ptr",
        "output": "Double free avoided: Second delete on nullptr is a safe no-op",
        "explanation": "Executes logic for Memory Error: Double Free Bug."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Memory Error: Double Free Bug\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memory Error: Double Free Bug\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memory Error: Double Free Bug\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000010",
    "book": "cpperrors",
    "order_index": 10,
    "title": "#010 Memory Error: Memory Leak Detection",
    "slug": "cpperrors-010-memory-error-memory-leak-detection",
    "description": "Fix memory leak by pairing every `new` with an explicit `delete` or utilizing `std::unique_ptr` RAII.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alloc 1000 ints",
        "output": "Memory freed cleanly: Net leaks = 0 bytes",
        "explanation": "Executes logic for Memory Error: Memory Leak Detection."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Memory Error: Memory Leak Detection\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memory Error: Memory Leak Detection\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memory Error: Memory Leak Detection\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000011",
    "book": "cpperrors",
    "order_index": 11,
    "title": "#011 Memory Error: Dangling Pointer Reference",
    "slug": "cpperrors-011-memory-error-dangling-pointer-reference",
    "description": "Fix dangling pointer that points to deallocated stack memory returning out of local function scope.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Return address of local var",
        "output": "Dangling pointer fixed: Returned by value instead of local pointer",
        "explanation": "Executes logic for Memory Error: Dangling Pointer Reference."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Memory Error: Dangling Pointer Reference\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memory Error: Dangling Pointer Reference\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memory Error: Dangling Pointer Reference\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000012",
    "book": "cpperrors",
    "order_index": 12,
    "title": "#012 Logic Error: Off-By-One Loop Condition",
    "slug": "cpperrors-012-logic-error-off-by-one-loop-condition",
    "description": "Fix off-by-one error in `for (int i = 0; i <= n; ++i)` accessing `arr[n]` which is past the end.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Iterate array size 4",
        "output": "Loop bounds corrected: [0, 1, 2, 3] iterated cleanly",
        "explanation": "Executes logic for Logic Error: Off-By-One Loop Condition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Off-By-One Loop Condition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Off-By-One Loop Condition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Off-By-One Loop Condition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000013",
    "book": "cpperrors",
    "order_index": 13,
    "title": "#013 Logic Error: Operator Precedence Misunderstanding",
    "slug": "cpperrors-013-logic-error-operator-precedence-misunderstanding",
    "description": "Fix logical bug caused by operator precedence (e.g. `1 << 2 + 1` evaluating to `1 << 3` instead of `(1<<2)+1`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1 << (2 + 1) vs (1 << 2) + 1",
        "output": "Precedence parentheses added: Result = 5",
        "explanation": "Executes logic for Logic Error: Operator Precedence Misunderstanding."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Operator Precedence Misunderstanding\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Operator Precedence Misunderstanding\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Operator Precedence Misunderstanding\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000014",
    "book": "cpperrors",
    "order_index": 14,
    "title": "#014 Logic Error: Assignment Inside If Condition (`=` vs `==`)",
    "slug": "cpperrors-014-logic-error-assignment-inside-if-condition-vs",
    "description": "Fix bug where `if (x = 5)` accidentally mutates `x` instead of performing equality check `if (x == 5)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check x == 5",
        "output": "Equality operator corrected: Condition evaluated without state mutation",
        "explanation": "Executes logic for Logic Error: Assignment Inside If Condition (`=` vs `==`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Assignment Inside If Condition (`=` vs `==`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Assignment Inside If Condition (`=` vs `==`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Assignment Inside If Condition (`=` vs `==`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000015",
    "book": "cpperrors",
    "order_index": 15,
    "title": "#015 Logic Error: Uninitialized Variable Garbage Value",
    "slug": "cpperrors-015-logic-error-uninitialized-variable-garbage-value",
    "description": "Fix logic bug where local variable is used in accumulator loop before being initialized to 0.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sum with uninit accumulator",
        "output": "Accumulator initialized to 0: Correct sum computed",
        "explanation": "Executes logic for Logic Error: Uninitialized Variable Garbage Value."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Uninitialized Variable Garbage Value\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Uninitialized Variable Garbage Value\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Uninitialized Variable Garbage Value\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000016",
    "book": "cpperrors",
    "order_index": 16,
    "title": "#016 Undefined Behavior: Modifying Const Variable via Const Cast",
    "slug": "cpperrors-016-undefined-behavior-modifying-const-variable-via-co",
    "description": "Explain and fix undefined behavior caused by casting away const on literal constant memory.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Mutate const literal",
        "output": "Undefined behavior prevented: Mutable copy created",
        "explanation": "Executes logic for Undefined Behavior: Modifying Const Variable via Const Cast."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Undefined Behavior: Modifying Const Variable via Const Cast\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Undefined Behavior: Modifying Const Variable via Const Cast\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Undefined Behavior: Modifying Const Variable via Const Cast\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000017",
    "book": "cpperrors",
    "order_index": 17,
    "title": "#017 Undefined Behavior: Sequence Point Violation (`i = i++`)",
    "slug": "cpperrors-017-undefined-behavior-sequence-point-violation-i-i",
    "description": "Fix undefined behavior caused by multiple unsequenced side effects on the same scalar variable in one expression.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "i = i++",
        "output": "Sequenced cleanly: Evaluated value then incremented",
        "explanation": "Executes logic for Undefined Behavior: Sequence Point Violation (`i = i++`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Undefined Behavior: Sequence Point Violation (`i = i++`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Undefined Behavior: Sequence Point Violation (`i = i++`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Undefined Behavior: Sequence Point Violation (`i = i++`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000018",
    "book": "cpperrors",
    "order_index": 18,
    "title": "#018 Undefined Behavior: Shifting by More Than Bit Width",
    "slug": "cpperrors-018-undefined-behavior-shifting-by-more-than-bit-width",
    "description": "Prevent shifting a 32-bit integer by 32 or more positions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1 << 35",
        "output": "Shift bounded: 1 << (35 % 32) = 8",
        "explanation": "Executes logic for Undefined Behavior: Shifting by More Than Bit Width."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Undefined Behavior: Shifting by More Than Bit Width\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Undefined Behavior: Shifting by More Than Bit Width\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Undefined Behavior: Shifting by More Than Bit Width\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000019",
    "book": "cpperrors",
    "order_index": 19,
    "title": "#019 Undefined Behavior: Signed Integer Overflow",
    "slug": "cpperrors-019-undefined-behavior-signed-integer-overflow",
    "description": "Detect and prevent signed 32-bit integer overflow before executing addition `INT_MAX + 1`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "INT_MAX + 10",
        "output": "Overflow guard triggered: Clamped or promoted to int64_t",
        "explanation": "Executes logic for Undefined Behavior: Signed Integer Overflow."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Undefined Behavior: Signed Integer Overflow\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Undefined Behavior: Signed Integer Overflow\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Undefined Behavior: Signed Integer Overflow\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000020",
    "book": "cpperrors",
    "order_index": 20,
    "title": "#020 Compilation Error: Missing Return Statement in Non-Void Function",
    "slug": "cpperrors-020-compilation-error-missing-return-statement-in-non",
    "description": "Fix compiler warning/error `-Wreturn-type` ensuring all code branches return a value.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Non-void function with if branch",
        "output": "Missing return added on else branch: Safe exit guaranteed",
        "explanation": "Executes logic for Compilation Error: Missing Return Statement in Non-Void Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Missing Return Statement in Non-Void Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Missing Return Statement in Non-Void Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Missing Return Statement in Non-Void Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000021",
    "book": "cpperrors",
    "order_index": 21,
    "title": "#021 Compilation Error: Narrowing Conversion in Initializer List",
    "slug": "cpperrors-021-compilation-error-narrowing-conversion-in-initiali",
    "description": "Fix narrowing conversion error (e.g. `int x{3.14}`) by using explicit static cast.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Narrowing float to int",
        "output": "Explicit static_cast<int>(3.14) applied: x = 3",
        "explanation": "Executes logic for Compilation Error: Narrowing Conversion in Initializer List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Narrowing Conversion in Initializer List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Narrowing Conversion in Initializer List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Narrowing Conversion in Initializer List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000022",
    "book": "cpperrors",
    "order_index": 22,
    "title": "#022 Compilation Error: Re-declaring Variable in Same Scope",
    "slug": "cpperrors-022-compilation-error-re-declaring-variable-in-same-sc",
    "description": "Fix compilation error caused by declaring variable with identical name in same block scope.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "int x = 5; int x = 10;",
        "output": "Variable shadowing resolved: Renamed to x2 = 10",
        "explanation": "Executes logic for Compilation Error: Re-declaring Variable in Same Scope."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Re-declaring Variable in Same Scope\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Re-declaring Variable in Same Scope\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Re-declaring Variable in Same Scope\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000023",
    "book": "cpperrors",
    "order_index": 23,
    "title": "#023 Compilation Error: Accessing Private Member Directly",
    "slug": "cpperrors-023-compilation-error-accessing-private-member-directl",
    "description": "Fix compilation error where `obj.private_var` is accessed directly from non-member function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Direct private access",
        "output": "Getter method used: obj.getVar() = 42",
        "explanation": "Executes logic for Compilation Error: Accessing Private Member Directly."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Accessing Private Member Directly\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Accessing Private Member Directly\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Accessing Private Member Directly\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000024",
    "book": "cpperrors",
    "order_index": 24,
    "title": "#024 Compilation Error: Pure Virtual Function Call Without Override",
    "slug": "cpperrors-024-compilation-error-pure-virtual-function-call-witho",
    "description": "Fix abstract class instantiation error by implementing all required pure virtual methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Instantiate AbstractShape",
        "output": "Pure virtual area() implemented in Circle: Instantiation successful",
        "explanation": "Executes logic for Compilation Error: Pure Virtual Function Call Without Override."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Pure Virtual Function Call Without Override\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Pure Virtual Function Call Without Override\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Pure Virtual Function Call Without Override\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000025",
    "book": "cpperrors",
    "order_index": 25,
    "title": "#025 Compilation Error: Const Object Calling Non-Const Method",
    "slug": "cpperrors-025-compilation-error-const-object-calling-non-const-m",
    "description": "Fix compilation error where const object attempts to invoke a mutating non-const member function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "const Point p; p.move();",
        "output": "Method marked const or object made non-const",
        "explanation": "Executes logic for Compilation Error: Const Object Calling Non-Const Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Const Object Calling Non-Const Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Const Object Calling Non-Const Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Const Object Calling Non-Const Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000026",
    "book": "cpperrors",
    "order_index": 26,
    "title": "#026 Linker Error: Static Member Variable Not Defined",
    "slug": "cpperrors-026-linker-error-static-member-variable-not-defined",
    "description": "Fix linker error by providing definition `int MyClass::count = 0;` outside class declaration.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Static member count",
        "output": "Static member definition placed in .cpp translation unit",
        "explanation": "Executes logic for Linker Error: Static Member Variable Not Defined."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Linker Error: Static Member Variable Not Defined\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Linker Error: Static Member Variable Not Defined\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Linker Error: Static Member Variable Not Defined\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000027",
    "book": "cpperrors",
    "order_index": 27,
    "title": "#027 Linker Error: Inline Function in Header Without Inline Keyword",
    "slug": "cpperrors-027-linker-error-inline-function-in-header-without-inl",
    "description": "Fix multiple definitions linker error by adding `inline` keyword to header function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Header function included twice",
        "output": "Marked inline: Linker resolved identical function bodies",
        "explanation": "Executes logic for Linker Error: Inline Function in Header Without Inline Keyword."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Linker Error: Inline Function in Header Without Inline Keyword\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Linker Error: Inline Function in Header Without Inline Keyword\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Linker Error: Inline Function in Header Without Inline Keyword\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000028",
    "book": "cpperrors",
    "order_index": 28,
    "title": "#028 Runtime Error: Vector Iterator Invalidation",
    "slug": "cpperrors-028-runtime-error-vector-iterator-invalidation",
    "description": "Fix crash caused by modifying vector (push_back / erase) while iterating with raw iterators.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase during iteration",
        "output": "Iterator updated with return value of erase(): No invalidation",
        "explanation": "Executes logic for Runtime Error: Vector Iterator Invalidation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Vector Iterator Invalidation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Vector Iterator Invalidation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Vector Iterator Invalidation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000029",
    "book": "cpperrors",
    "order_index": 29,
    "title": "#029 Runtime Error: Deleting Array with Scalar Delete (`delete` vs `delete[]`)",
    "slug": "cpperrors-029-runtime-error-deleting-array-with-scalar-delete-de",
    "description": "Fix undefined behavior where dynamically allocated array `new int[10]` is freed with scalar `delete`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "delete vs delete[]",
        "output": "Correct delete[] operator used: All array destructors invoked",
        "explanation": "Executes logic for Runtime Error: Deleting Array with Scalar Delete (`delete` vs `delete[]`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Deleting Array with Scalar Delete (`delete` vs `delete[]`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Deleting Array with Scalar Delete (`delete` vs `delete[]`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Deleting Array with Scalar Delete (`delete` vs `delete[]`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000030",
    "book": "cpperrors",
    "order_index": 30,
    "title": "#030 Memory Error: Buffer Overflow via Unsafe strcpy / sprintf",
    "slug": "cpperrors-030-memory-error-buffer-overflow-via-unsafe-strcpy-spr",
    "description": "Replace unsafe C-strings functions with safe `std::string` or `snprintf`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy 20 chars into 10-char buffer",
        "output": "Safe buffer copy: Truncated or resized to prevent overflow",
        "explanation": "Executes logic for Memory Error: Buffer Overflow via Unsafe strcpy / sprintf."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Memory Error: Buffer Overflow via Unsafe strcpy / sprintf\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memory Error: Buffer Overflow via Unsafe strcpy / sprintf\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memory Error: Buffer Overflow via Unsafe strcpy / sprintf\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000031",
    "book": "cpperrors",
    "order_index": 31,
    "title": "#031 Logic Error: Shadowing Global Variable in Local Block",
    "slug": "cpperrors-031-logic-error-shadowing-global-variable-in-local-blo",
    "description": "Disambiguate local variable from global variable using unary scope resolution `::var`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Local vs Global x",
        "output": "Global accessed via ::x (100), Local x (10)",
        "explanation": "Executes logic for Logic Error: Shadowing Global Variable in Local Block."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Shadowing Global Variable in Local Block\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Shadowing Global Variable in Local Block\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Shadowing Global Variable in Local Block\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000032",
    "book": "cpperrors",
    "order_index": 32,
    "title": "#032 Logic Error: Integer Truncation in Floating-Point Division",
    "slug": "cpperrors-032-logic-error-integer-truncation-in-floating-point-d",
    "description": "Fix `int / int` yielding 0 before assignment to double (e.g. `double d = 1 / 2`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1 / 2 assigned to double",
        "output": "Cast to floating point `1.0 / 2`: Result = 0.5",
        "explanation": "Executes logic for Logic Error: Integer Truncation in Floating-Point Division."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Integer Truncation in Floating-Point Division\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Integer Truncation in Floating-Point Division\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Integer Truncation in Floating-Point Division\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000033",
    "book": "cpperrors",
    "order_index": 33,
    "title": "#033 Logic Error: Floating-Point Exact Equality Comparison (`==`)",
    "slug": "cpperrors-033-logic-error-floating-point-exact-equality-comparis",
    "description": "Replace flawed `f1 == f2` with epsilon tolerance check `fabs(f1 - f2) < 1e-9`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "0.1 + 0.2 == 0.3",
        "output": "Epsilon comparison used: Equal within 1e-9 tolerance",
        "explanation": "Executes logic for Logic Error: Floating-Point Exact Equality Comparison (`==`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Floating-Point Exact Equality Comparison (`==`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Floating-Point Exact Equality Comparison (`==`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Floating-Point Exact Equality Comparison (`==`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000034",
    "book": "cpperrors",
    "order_index": 34,
    "title": "#034 Logic Error: Incorrect Loop Decrement Condition",
    "slug": "cpperrors-034-logic-error-incorrect-loop-decrement-condition",
    "description": "Fix `for (unsigned int i = 10; i >= 0; --i)` creating infinite loop due to unsigned underflow.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Unsigned loop >= 0",
        "output": "Signed type used or loop rewritten: Terminated at 0",
        "explanation": "Executes logic for Logic Error: Incorrect Loop Decrement Condition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Incorrect Loop Decrement Condition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Incorrect Loop Decrement Condition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Incorrect Loop Decrement Condition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000035",
    "book": "cpperrors",
    "order_index": 35,
    "title": "#035 Logic Error: Misplaced Semicolon After While / For Loop",
    "slug": "cpperrors-035-logic-error-misplaced-semicolon-after-while-for-lo",
    "description": "Fix bug where `while (x < 10);` loops indefinitely due to accidental semicolon.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "while (x < 10);",
        "output": "Accidental semicolon removed: Loop body executes normally",
        "explanation": "Executes logic for Logic Error: Misplaced Semicolon After While / For Loop."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Misplaced Semicolon After While / For Loop\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Misplaced Semicolon After While / For Loop\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Misplaced Semicolon After While / For Loop\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000036",
    "book": "cpperrors",
    "order_index": 36,
    "title": "#036 Logic Error: Short-Circuit Evaluation Side Effects",
    "slug": "cpperrors-036-logic-error-short-circuit-evaluation-side-effects",
    "description": "Fix bug where essential mutation inside `if (flag || ++count > 5)` is skipped due to short-circuiting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Short-circuit skip",
        "output": "Side effect moved before if condition: Count incremented reliably",
        "explanation": "Executes logic for Logic Error: Short-Circuit Evaluation Side Effects."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Short-Circuit Evaluation Side Effects\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Short-Circuit Evaluation Side Effects\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Short-Circuit Evaluation Side Effects\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000037",
    "book": "cpperrors",
    "order_index": 37,
    "title": "#037 Logic Error: Passing Large Object by Value Unintentionally",
    "slug": "cpperrors-037-logic-error-passing-large-object-by-value-unintent",
    "description": "Fix performance and slicing bug by changing function parameter from `Type` to `const Type&`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pass 1MB matrix by value",
        "output": "Changed to const Matrix&: Copy overhead eliminated",
        "explanation": "Executes logic for Logic Error: Passing Large Object by Value Unintentionally."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Passing Large Object by Value Unintentionally\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Passing Large Object by Value Unintentionally\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Passing Large Object by Value Unintentionally\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000038",
    "book": "cpperrors",
    "order_index": 38,
    "title": "#038 Logic Error: Forgetting Virtual Destructor in Polymorphic Base",
    "slug": "cpperrors-038-logic-error-forgetting-virtual-destructor-in-polym",
    "description": "Fix memory leak where derived destructor is never called when deleted through `Base*`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Delete derived via base ptr",
        "output": "Virtual destructor added to base: Derived resources freed",
        "explanation": "Executes logic for Logic Error: Forgetting Virtual Destructor in Polymorphic Base."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Logic Error: Forgetting Virtual Destructor in Polymorphic Base\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Logic Error: Forgetting Virtual Destructor in Polymorphic Base\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Logic Error: Forgetting Virtual Destructor in Polymorphic Base\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000039",
    "book": "cpperrors",
    "order_index": 39,
    "title": "#039 Compilation Error: Missing Template Arguments",
    "slug": "cpperrors-039-compilation-error-missing-template-arguments",
    "description": "Fix compilation error where template class is used without type parameters (e.g. `vector v;`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "vector without <int>",
        "output": "Template argument supplied: vector<int> instantiated",
        "explanation": "Executes logic for Compilation Error: Missing Template Arguments."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Missing Template Arguments\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Missing Template Arguments\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Missing Template Arguments\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000040",
    "book": "cpperrors",
    "order_index": 40,
    "title": "#040 Compilation Error: Typename Disambiguation in Dependent Types",
    "slug": "cpperrors-040-compilation-error-typename-disambiguation-in-depen",
    "description": "Fix compilation error by adding `typename` keyword before dependent type `typename T::iterator`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "T::iterator in template",
        "output": "Added typename keyword: Dependent type parsed successfully",
        "explanation": "Executes logic for Compilation Error: Typename Disambiguation in Dependent Types."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Typename Disambiguation in Dependent Types\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Typename Disambiguation in Dependent Types\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Typename Disambiguation in Dependent Types\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000041",
    "book": "cpperrors",
    "order_index": 41,
    "title": "#041 Compilation Error: Missing `#include <algorithm>` for std::sort",
    "slug": "cpperrors-041-compilation-error-missing-include-algorithm-for-st",
    "description": "Fix compilation error when using standard algorithms without including header.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call std::sort()",
        "output": "Header <algorithm> included: std::sort resolved",
        "explanation": "Executes logic for Compilation Error: Missing `#include <algorithm>` for std::sort."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Missing `#include <algorithm>` for std::sort\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Missing `#include <algorithm>` for std::sort\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Missing `#include <algorithm>` for std::sort\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000042",
    "book": "cpperrors",
    "order_index": 42,
    "title": "#042 Compilation Error: Mismatched Types in Ternary Operator",
    "slug": "cpperrors-042-compilation-error-mismatched-types-in-ternary-oper",
    "description": "Fix ternary operator type mismatch error (e.g. `cond ? 5 : 'hello'`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "int vs string in ternary",
        "output": "Return types unified: Both branches return std::string",
        "explanation": "Executes logic for Compilation Error: Mismatched Types in Ternary Operator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compilation Error: Mismatched Types in Ternary Operator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compilation Error: Mismatched Types in Ternary Operator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compilation Error: Mismatched Types in Ternary Operator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000043",
    "book": "cpperrors",
    "order_index": 43,
    "title": "#043 Runtime Error: Bad Allocation Exception (`std::bad_alloc`)",
    "slug": "cpperrors-043-runtime-error-bad-allocation-exception-std-bad-all",
    "description": "Handle out-of-memory exception when attempting to allocate huge contiguous memory block.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Allocate 100 GB on heap",
        "output": "Caught std::bad_alloc safely: Fallback memory strategy executed",
        "explanation": "Executes logic for Runtime Error: Bad Allocation Exception (`std::bad_alloc`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Bad Allocation Exception (`std::bad_alloc`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Bad Allocation Exception (`std::bad_alloc`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Bad Allocation Exception (`std::bad_alloc`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000044",
    "book": "cpperrors",
    "order_index": 44,
    "title": "#044 Runtime Error: Out of Range Exception in std::vector (`std::out_of_range`)",
    "slug": "cpperrors-044-runtime-error-out-of-range-exception-in-std-vector",
    "description": "Catch and handle `std::out_of_range` when accessing invalid index via `vec.at(100)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "vec.at(100)",
        "output": "Caught std::out_of_range: Invalid index handled without crash",
        "explanation": "Executes logic for Runtime Error: Out of Range Exception in std::vector (`std::out_of_range`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Out of Range Exception in std::vector (`std::out_of_range`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Out of Range Exception in std::vector (`std::out_of_range`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Out of Range Exception in std::vector (`std::out_of_range`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000045",
    "book": "cpperrors",
    "order_index": 45,
    "title": "#045 Runtime Error: Invalid Argument Exception (`std::invalid_argument`)",
    "slug": "cpperrors-045-runtime-error-invalid-argument-exception-std-inval",
    "description": "Handle exception thrown by `std::stoi` when parsing non-numeric string.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "std::stoi('abc')",
        "output": "Caught std::invalid_argument: Input is not a valid integer",
        "explanation": "Executes logic for Runtime Error: Invalid Argument Exception (`std::invalid_argument`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Invalid Argument Exception (`std::invalid_argument`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Invalid Argument Exception (`std::invalid_argument`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Invalid Argument Exception (`std::invalid_argument`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000046",
    "book": "cpperrors",
    "order_index": 46,
    "title": "#046 Runtime Error: Out of Range Exception in std::stoi (`std::out_of_range`)",
    "slug": "cpperrors-046-runtime-error-out-of-range-exception-in-std-stoi-s",
    "description": "Handle overflow exception when parsing number exceeding 32-bit integer limits.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "std::stoi('9999999999999')",
        "output": "Caught std::out_of_range: Number exceeds 32-bit int bounds",
        "explanation": "Executes logic for Runtime Error: Out of Range Exception in std::stoi (`std::out_of_range`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Runtime Error: Out of Range Exception in std::stoi (`std::out_of_range`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Runtime Error: Out of Range Exception in std::stoi (`std::out_of_range`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Runtime Error: Out of Range Exception in std::stoi (`std::out_of_range`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000047",
    "book": "cpperrors",
    "order_index": 47,
    "title": "#047 Memory Error: Use After Free (UAF)",
    "slug": "cpperrors-047-memory-error-use-after-free-uaf",
    "description": "Detect and fix accessing memory buffer after calling `free()` or `delete`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read ptr after delete",
        "output": "Use-after-free prevented: Pointer nulled upon deallocation",
        "explanation": "Executes logic for Memory Error: Use After Free (UAF)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Memory Error: Use After Free (UAF)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memory Error: Use After Free (UAF)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memory Error: Use After Free (UAF)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000048",
    "book": "cpperrors",
    "order_index": 48,
    "title": "#048 Memory Error: Memory Aliasing Corruption",
    "slug": "cpperrors-048-memory-error-memory-aliasing-corruption",
    "description": "Fix unexpected mutation when two pointers alias the same heap buffer without copy-on-write.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Two pointers to same buffer",
        "output": "Independent deep copy allocated: Aliasing corruption prevented",
        "explanation": "Executes logic for Memory Error: Memory Aliasing Corruption."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Memory Error: Memory Aliasing Corruption\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Memory Error: Memory Aliasing Corruption\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Memory Error: Memory Aliasing Corruption\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000049",
    "book": "cpperrors",
    "order_index": 49,
    "title": "#049 Compiler Warning: Unused Variable (-Wunused-variable)",
    "slug": "cpperrors-049-compiler-warning-unused-variable-wunused-variable",
    "description": "Suppress or remove unused local variables, or use `[[maybe_unused]]` attribute (C++17).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Unused int temp",
        "output": "Marked [[maybe_unused]]: Compiled cleanly without warnings",
        "explanation": "Executes logic for Compiler Warning: Unused Variable (-Wunused-variable)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compiler Warning: Unused Variable (-Wunused-variable)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compiler Warning: Unused Variable (-Wunused-variable)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compiler Warning: Unused Variable (-Wunused-variable)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000050",
    "book": "cpperrors",
    "order_index": 50,
    "title": "#050 Compiler Warning: Sign Comparison Mismatch (-Wsign-compare)",
    "slug": "cpperrors-050-compiler-warning-sign-comparison-mismatch-wsign-co",
    "description": "Fix warning comparing signed `int` with unsigned `std::vector::size()` by using `size_t`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "int i < vec.size()",
        "output": "Loop index typed as size_t: Signed/unsigned mismatch resolved",
        "explanation": "Executes logic for Compiler Warning: Sign Comparison Mismatch (-Wsign-compare)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Compiler Warning: Sign Comparison Mismatch (-Wsign-compare)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compiler Warning: Sign Comparison Mismatch (-Wsign-compare)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compiler Warning: Sign Comparison Mismatch (-Wsign-compare)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000051",
    "book": "cpperrors",
    "order_index": 51,
    "title": "#051 C++ Error Diagnosis Problem 51",
    "slug": "cpperrors-051-c-error-diagnosis-problem-51",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #51, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 51 FIX",
        "output": "Error condition #51 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000052",
    "book": "cpperrors",
    "order_index": 52,
    "title": "#052 C++ Error Diagnosis Problem 52",
    "slug": "cpperrors-052-c-error-diagnosis-problem-52",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #52, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 52 FIX",
        "output": "Error condition #52 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000053",
    "book": "cpperrors",
    "order_index": 53,
    "title": "#053 C++ Error Diagnosis Problem 53",
    "slug": "cpperrors-053-c-error-diagnosis-problem-53",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #53, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 53 FIX",
        "output": "Error condition #53 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000054",
    "book": "cpperrors",
    "order_index": 54,
    "title": "#054 C++ Error Diagnosis Problem 54",
    "slug": "cpperrors-054-c-error-diagnosis-problem-54",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #54, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 54 FIX",
        "output": "Error condition #54 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000055",
    "book": "cpperrors",
    "order_index": 55,
    "title": "#055 C++ Error Diagnosis Problem 55",
    "slug": "cpperrors-055-c-error-diagnosis-problem-55",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #55, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 55 FIX",
        "output": "Error condition #55 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000056",
    "book": "cpperrors",
    "order_index": 56,
    "title": "#056 C++ Error Diagnosis Problem 56",
    "slug": "cpperrors-056-c-error-diagnosis-problem-56",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #56, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 56 FIX",
        "output": "Error condition #56 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000057",
    "book": "cpperrors",
    "order_index": 57,
    "title": "#057 C++ Error Diagnosis Problem 57",
    "slug": "cpperrors-057-c-error-diagnosis-problem-57",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #57, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 57 FIX",
        "output": "Error condition #57 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000058",
    "book": "cpperrors",
    "order_index": 58,
    "title": "#058 C++ Error Diagnosis Problem 58",
    "slug": "cpperrors-058-c-error-diagnosis-problem-58",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #58, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 58 FIX",
        "output": "Error condition #58 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000059",
    "book": "cpperrors",
    "order_index": 59,
    "title": "#059 C++ Error Diagnosis Problem 59",
    "slug": "cpperrors-059-c-error-diagnosis-problem-59",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #59, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 59 FIX",
        "output": "Error condition #59 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000060",
    "book": "cpperrors",
    "order_index": 60,
    "title": "#060 C++ Error Diagnosis Problem 60",
    "slug": "cpperrors-060-c-error-diagnosis-problem-60",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #60, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 60 FIX",
        "output": "Error condition #60 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000061",
    "book": "cpperrors",
    "order_index": 61,
    "title": "#061 C++ Error Diagnosis Problem 61",
    "slug": "cpperrors-061-c-error-diagnosis-problem-61",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #61, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 61 FIX",
        "output": "Error condition #61 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000062",
    "book": "cpperrors",
    "order_index": 62,
    "title": "#062 C++ Error Diagnosis Problem 62",
    "slug": "cpperrors-062-c-error-diagnosis-problem-62",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #62, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 62 FIX",
        "output": "Error condition #62 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000063",
    "book": "cpperrors",
    "order_index": 63,
    "title": "#063 C++ Error Diagnosis Problem 63",
    "slug": "cpperrors-063-c-error-diagnosis-problem-63",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #63, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 63 FIX",
        "output": "Error condition #63 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000064",
    "book": "cpperrors",
    "order_index": 64,
    "title": "#064 C++ Error Diagnosis Problem 64",
    "slug": "cpperrors-064-c-error-diagnosis-problem-64",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #64, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 64 FIX",
        "output": "Error condition #64 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000065",
    "book": "cpperrors",
    "order_index": 65,
    "title": "#065 C++ Error Diagnosis Problem 65",
    "slug": "cpperrors-065-c-error-diagnosis-problem-65",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #65, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 65 FIX",
        "output": "Error condition #65 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000066",
    "book": "cpperrors",
    "order_index": 66,
    "title": "#066 C++ Error Diagnosis Problem 66",
    "slug": "cpperrors-066-c-error-diagnosis-problem-66",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #66, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 66 FIX",
        "output": "Error condition #66 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000067",
    "book": "cpperrors",
    "order_index": 67,
    "title": "#067 C++ Error Diagnosis Problem 67",
    "slug": "cpperrors-067-c-error-diagnosis-problem-67",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #67, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 67 FIX",
        "output": "Error condition #67 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000068",
    "book": "cpperrors",
    "order_index": 68,
    "title": "#068 C++ Error Diagnosis Problem 68",
    "slug": "cpperrors-068-c-error-diagnosis-problem-68",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #68, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 68 FIX",
        "output": "Error condition #68 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000069",
    "book": "cpperrors",
    "order_index": 69,
    "title": "#069 C++ Error Diagnosis Problem 69",
    "slug": "cpperrors-069-c-error-diagnosis-problem-69",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #69, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 69 FIX",
        "output": "Error condition #69 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000070",
    "book": "cpperrors",
    "order_index": 70,
    "title": "#070 C++ Error Diagnosis Problem 70",
    "slug": "cpperrors-070-c-error-diagnosis-problem-70",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #70, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 70 FIX",
        "output": "Error condition #70 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000071",
    "book": "cpperrors",
    "order_index": 71,
    "title": "#071 C++ Error Diagnosis Problem 71",
    "slug": "cpperrors-071-c-error-diagnosis-problem-71",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #71, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 71 FIX",
        "output": "Error condition #71 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000072",
    "book": "cpperrors",
    "order_index": 72,
    "title": "#072 C++ Error Diagnosis Problem 72",
    "slug": "cpperrors-072-c-error-diagnosis-problem-72",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #72, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 72 FIX",
        "output": "Error condition #72 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000073",
    "book": "cpperrors",
    "order_index": 73,
    "title": "#073 C++ Error Diagnosis Problem 73",
    "slug": "cpperrors-073-c-error-diagnosis-problem-73",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #73, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 73 FIX",
        "output": "Error condition #73 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000074",
    "book": "cpperrors",
    "order_index": 74,
    "title": "#074 C++ Error Diagnosis Problem 74",
    "slug": "cpperrors-074-c-error-diagnosis-problem-74",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #74, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 74 FIX",
        "output": "Error condition #74 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000075",
    "book": "cpperrors",
    "order_index": 75,
    "title": "#075 C++ Error Diagnosis Problem 75",
    "slug": "cpperrors-075-c-error-diagnosis-problem-75",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #75, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 75 FIX",
        "output": "Error condition #75 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000076",
    "book": "cpperrors",
    "order_index": 76,
    "title": "#076 C++ Error Diagnosis Problem 76",
    "slug": "cpperrors-076-c-error-diagnosis-problem-76",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #76, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 76 FIX",
        "output": "Error condition #76 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000077",
    "book": "cpperrors",
    "order_index": 77,
    "title": "#077 C++ Error Diagnosis Problem 77",
    "slug": "cpperrors-077-c-error-diagnosis-problem-77",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #77, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 77 FIX",
        "output": "Error condition #77 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000078",
    "book": "cpperrors",
    "order_index": 78,
    "title": "#078 C++ Error Diagnosis Problem 78",
    "slug": "cpperrors-078-c-error-diagnosis-problem-78",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #78, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 78 FIX",
        "output": "Error condition #78 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000079",
    "book": "cpperrors",
    "order_index": 79,
    "title": "#079 C++ Error Diagnosis Problem 79",
    "slug": "cpperrors-079-c-error-diagnosis-problem-79",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #79, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 79 FIX",
        "output": "Error condition #79 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000080",
    "book": "cpperrors",
    "order_index": 80,
    "title": "#080 C++ Error Diagnosis Problem 80",
    "slug": "cpperrors-080-c-error-diagnosis-problem-80",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #80, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 80 FIX",
        "output": "Error condition #80 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000081",
    "book": "cpperrors",
    "order_index": 81,
    "title": "#081 C++ Error Diagnosis Problem 81",
    "slug": "cpperrors-081-c-error-diagnosis-problem-81",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #81, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 81 FIX",
        "output": "Error condition #81 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000082",
    "book": "cpperrors",
    "order_index": 82,
    "title": "#082 C++ Error Diagnosis Problem 82",
    "slug": "cpperrors-082-c-error-diagnosis-problem-82",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #82, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 82 FIX",
        "output": "Error condition #82 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000083",
    "book": "cpperrors",
    "order_index": 83,
    "title": "#083 C++ Error Diagnosis Problem 83",
    "slug": "cpperrors-083-c-error-diagnosis-problem-83",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #83, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 83 FIX",
        "output": "Error condition #83 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000084",
    "book": "cpperrors",
    "order_index": 84,
    "title": "#084 C++ Error Diagnosis Problem 84",
    "slug": "cpperrors-084-c-error-diagnosis-problem-84",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #84, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 84 FIX",
        "output": "Error condition #84 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000085",
    "book": "cpperrors",
    "order_index": 85,
    "title": "#085 C++ Error Diagnosis Problem 85",
    "slug": "cpperrors-085-c-error-diagnosis-problem-85",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #85, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 85 FIX",
        "output": "Error condition #85 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000086",
    "book": "cpperrors",
    "order_index": 86,
    "title": "#086 C++ Error Diagnosis Problem 86",
    "slug": "cpperrors-086-c-error-diagnosis-problem-86",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #86, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 86 FIX",
        "output": "Error condition #86 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000087",
    "book": "cpperrors",
    "order_index": 87,
    "title": "#087 C++ Error Diagnosis Problem 87",
    "slug": "cpperrors-087-c-error-diagnosis-problem-87",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #87, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 87 FIX",
        "output": "Error condition #87 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000088",
    "book": "cpperrors",
    "order_index": 88,
    "title": "#088 C++ Error Diagnosis Problem 88",
    "slug": "cpperrors-088-c-error-diagnosis-problem-88",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #88, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 88 FIX",
        "output": "Error condition #88 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000089",
    "book": "cpperrors",
    "order_index": 89,
    "title": "#089 C++ Error Diagnosis Problem 89",
    "slug": "cpperrors-089-c-error-diagnosis-problem-89",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #89, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 89 FIX",
        "output": "Error condition #89 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000090",
    "book": "cpperrors",
    "order_index": 90,
    "title": "#090 C++ Error Diagnosis Problem 90",
    "slug": "cpperrors-090-c-error-diagnosis-problem-90",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #90, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 90 FIX",
        "output": "Error condition #90 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000091",
    "book": "cpperrors",
    "order_index": 91,
    "title": "#091 C++ Error Diagnosis Problem 91",
    "slug": "cpperrors-091-c-error-diagnosis-problem-91",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #91, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 91 FIX",
        "output": "Error condition #91 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000092",
    "book": "cpperrors",
    "order_index": 92,
    "title": "#092 C++ Error Diagnosis Problem 92",
    "slug": "cpperrors-092-c-error-diagnosis-problem-92",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #92, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 92 FIX",
        "output": "Error condition #92 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000093",
    "book": "cpperrors",
    "order_index": 93,
    "title": "#093 C++ Error Diagnosis Problem 93",
    "slug": "cpperrors-093-c-error-diagnosis-problem-93",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #93, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 93 FIX",
        "output": "Error condition #93 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000094",
    "book": "cpperrors",
    "order_index": 94,
    "title": "#094 C++ Error Diagnosis Problem 94",
    "slug": "cpperrors-094-c-error-diagnosis-problem-94",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #94, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 94 FIX",
        "output": "Error condition #94 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000095",
    "book": "cpperrors",
    "order_index": 95,
    "title": "#095 C++ Error Diagnosis Problem 95",
    "slug": "cpperrors-095-c-error-diagnosis-problem-95",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #95, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 95 FIX",
        "output": "Error condition #95 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000096",
    "book": "cpperrors",
    "order_index": 96,
    "title": "#096 C++ Error Diagnosis Problem 96",
    "slug": "cpperrors-096-c-error-diagnosis-problem-96",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #96, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 96 FIX",
        "output": "Error condition #96 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000097",
    "book": "cpperrors",
    "order_index": 97,
    "title": "#097 C++ Error Diagnosis Problem 97",
    "slug": "cpperrors-097-c-error-diagnosis-problem-97",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #97, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 97 FIX",
        "output": "Error condition #97 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000098",
    "book": "cpperrors",
    "order_index": 98,
    "title": "#098 C++ Error Diagnosis Problem 98",
    "slug": "cpperrors-098-c-error-diagnosis-problem-98",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #98, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 98 FIX",
        "output": "Error condition #98 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000099",
    "book": "cpperrors",
    "order_index": 99,
    "title": "#099 C++ Error Diagnosis Problem 99",
    "slug": "cpperrors-099-c-error-diagnosis-problem-99",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #99, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 99 FIX",
        "output": "Error condition #99 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6001-000000000100",
    "book": "cpperrors",
    "order_index": 100,
    "title": "#100 C++ Error Diagnosis Problem 100",
    "slug": "cpperrors-100-c-error-diagnosis-problem-100",
    "description": "Diagnose and resolve C++ compiler, linker, runtime, or logic error condition #100, restoring program correctness and safety.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Error Types & Diagnosis",
    "tags": [
      "Errors",
      "Compiler Errors",
      "Linker Errors",
      "Runtime Errors",
      "Debugging"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ERROR_CODE 100 FIX",
        "output": "Error condition #100 resolved successfully (Status: Clean execution)",
        "explanation": "Executes logic for C++ Error Diagnosis Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Error Diagnosis Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Error Diagnosis Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Error Diagnosis Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
