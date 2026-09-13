import { Problem } from '../../types/problem';

export const LAMBDA_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-7007-000000000001",
    "book": "lambda",
    "order_index": 1,
    "title": "#001 Basic Lambda Expression [](){}",
    "slug": "lambda-001-basic-lambda-expression",
    "description": "Define and invoke an anonymous lambda function [](){ cout << 'Hello Lambda'; }().\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "None",
        "output": "Hello Lambda",
        "explanation": "Executes modern C++ lambda expression for Basic Lambda Expression [](){}."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Basic Lambda Expression [](){}\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Basic Lambda Expression [](){}\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Basic Lambda Expression [](){}\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000002",
    "book": "lambda",
    "order_index": 2,
    "title": "#002 Lambda with Parameters and Return Type",
    "slug": "lambda-002-lambda-with-parameters-and-return-type",
    "description": "Write a lambda auto add = [](int a, int b) -> int { return a + b; }; and invoke it.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 25",
        "output": "Sum from Lambda: 35",
        "explanation": "Executes modern C++ lambda expression for Lambda with Parameters and Return Type."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with Parameters and Return Type\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with Parameters and Return Type\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with Parameters and Return Type\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000003",
    "book": "lambda",
    "order_index": 3,
    "title": "#003 Lambda Capture by Value [=]",
    "slug": "lambda-003-lambda-capture-by-value",
    "description": "Demonstrate capturing outer local variables by value [=] inside lambda body.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "50 10",
        "output": "Captured Value Multiplied: 500",
        "explanation": "Executes modern C++ lambda expression for Lambda Capture by Value [=]."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Capture by Value [=]\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Capture by Value [=]\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Capture by Value [=]\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000004",
    "book": "lambda",
    "order_index": 4,
    "title": "#004 Lambda Capture by Reference [&]",
    "slug": "lambda-004-lambda-capture-by-reference",
    "description": "Demonstrate capturing outer variable by reference [&] and mutating it inside lambda.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10",
        "output": "Variable mutated via lambda: 20",
        "explanation": "Executes modern C++ lambda expression for Lambda Capture by Reference [&]."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Capture by Reference [&]\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Capture by Reference [&]\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Capture by Reference [&]\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000005",
    "book": "lambda",
    "order_index": 5,
    "title": "#005 Lambda Capture Specific Variables [x, &y]",
    "slug": "lambda-005-lambda-capture-specific-variables-x-y",
    "description": "Capture variable x by value and y by reference explicitly in capture clause.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 10",
        "output": "x unchanged (5), y doubled (20)",
        "explanation": "Executes modern C++ lambda expression for Lambda Capture Specific Variables [x, &y]."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Capture Specific Variables [x, &y]\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Capture Specific Variables [x, &y]\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Capture Specific Variables [x, &y]\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000006",
    "book": "lambda",
    "order_index": 6,
    "title": "#006 Mutable Lambda Expression",
    "slug": "lambda-006-mutable-lambda-expression",
    "description": "Demonstrate mutable keyword allowing modification of variables captured by value.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10",
        "output": "Internal copy modified to 11, original unchanged (10)",
        "explanation": "Executes modern C++ lambda expression for Mutable Lambda Expression."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Mutable Lambda Expression\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Mutable Lambda Expression\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Mutable Lambda Expression\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000007",
    "book": "lambda",
    "order_index": 7,
    "title": "#007 Lambda with std::sort Custom Comparator",
    "slug": "lambda-007-lambda-with-std-sort-custom-comparator",
    "description": "Pass a lambda comparator to std::sort to sort vector of integers in descending order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 3 1 4 5 2",
        "output": "5 4 3 2 1",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::sort Custom Comparator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::sort Custom Comparator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::sort Custom Comparator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::sort Custom Comparator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000008",
    "book": "lambda",
    "order_index": 8,
    "title": "#008 Lambda with std::for_each",
    "slug": "lambda-008-lambda-with-std-for-each",
    "description": "Use lambda inside std::for_each to print or double each element in a vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "4 1 2 3 4",
        "output": "Printed via for_each: 2 4 6 8",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::for_each."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::for_each\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::for_each\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::for_each\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000009",
    "book": "lambda",
    "order_index": 9,
    "title": "#009 Lambda with std::transform",
    "slug": "lambda-009-lambda-with-std-transform",
    "description": "Use lambda inside std::transform to compute squares of all numbers into a new vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "4 2 3 4 5",
        "output": "4 9 16 25",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::transform."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::transform\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::transform\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::transform\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000010",
    "book": "lambda",
    "order_index": 10,
    "title": "#010 Lambda with std::find_if",
    "slug": "lambda-010-lambda-with-std-find-if",
    "description": "Use lambda predicate with std::find_if to find first number greater than threshold.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 10 25 35 40 50 30",
        "output": "First element > 30: 35",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::find_if."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::find_if\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::find_if\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::find_if\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000011",
    "book": "lambda",
    "order_index": 11,
    "title": "#011 Lambda with std::count_if",
    "slug": "lambda-011-lambda-with-std-count-if",
    "description": "Use lambda predicate with std::count_if to count all even numbers in vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "6 1 2 3 4 5 6",
        "output": "Even Count: 3",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::count_if."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::count_if\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::count_if\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::count_if\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000012",
    "book": "lambda",
    "order_index": 12,
    "title": "#012 Generic (Auto) Lambda Parameter (C++14)",
    "slug": "lambda-012-generic-auto-lambda-parameter-c-14",
    "description": "Write a generic lambda auto print = [](auto x) { cout << x; }; accepting any type.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100 Hello 3.14",
        "output": "100, Hello, 3.14",
        "explanation": "Executes modern C++ lambda expression for Generic (Auto) Lambda Parameter (C++14)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Generic (Auto) Lambda Parameter (C++14)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic (Auto) Lambda Parameter (C++14)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic (Auto) Lambda Parameter (C++14)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000013",
    "book": "lambda",
    "order_index": 13,
    "title": "#013 Lambda with std::accumulate (Custom Reducer)",
    "slug": "lambda-013-lambda-with-std-accumulate-custom-reducer",
    "description": "Use lambda with std::accumulate to compute sum of products or custom aggregate.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 2 3 4",
        "output": "Custom Reduced Value: 24",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::accumulate (Custom Reducer)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::accumulate (Custom Reducer)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::accumulate (Custom Reducer)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::accumulate (Custom Reducer)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000014",
    "book": "lambda",
    "order_index": 14,
    "title": "#014 Lambda Returning Lambda (Higher-Order Function)",
    "slug": "lambda-014-lambda-returning-lambda-higher-order-function",
    "description": "Write a function returning a multiplier lambda: auto makeMultiplier(int factor).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 10",
        "output": "makeMultiplier(5)(10) = 50",
        "explanation": "Executes modern C++ lambda expression for Lambda Returning Lambda (Higher-Order Function)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Returning Lambda (Higher-Order Function)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Returning Lambda (Higher-Order Function)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Returning Lambda (Higher-Order Function)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000015",
    "book": "lambda",
    "order_index": 15,
    "title": "#015 Lambda Capturing This Pointer in Class",
    "slug": "lambda-015-lambda-capturing-this-pointer-in-class",
    "description": "Demonstrate lambda inside class member function capturing [this] to access private fields.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "42",
        "output": "Member variable accessed via [this] lambda: 42",
        "explanation": "Executes modern C++ lambda expression for Lambda Capturing This Pointer in Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Capturing This Pointer in Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Capturing This Pointer in Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Capturing This Pointer in Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000016",
    "book": "lambda",
    "order_index": 16,
    "title": "#016 Lambda with std::remove_if (Erase-Remove Idiom)",
    "slug": "lambda-016-lambda-with-std-remove-if-erase-remove-idiom",
    "description": "Use lambda with std::remove_if to remove all odd numbers from vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "6 1 2 3 4 5 6",
        "output": "Vector after remove_if: 2 4 6",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::remove_if (Erase-Remove Idiom)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::remove_if (Erase-Remove Idiom)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::remove_if (Erase-Remove Idiom)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::remove_if (Erase-Remove Idiom)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000017",
    "book": "lambda",
    "order_index": 17,
    "title": "#017 Lambda with std::all_of / any_of / none_of",
    "slug": "lambda-017-lambda-with-std-all-of-any-of-none-of",
    "description": "Use lambda predicates to test if all numbers in array are positive.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "4 2 4 6 8",
        "output": "All positive: True",
        "explanation": "Executes modern C++ lambda expression for Lambda with std::all_of / any_of / none_of."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda with std::all_of / any_of / none_of\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda with std::all_of / any_of / none_of\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda with std::all_of / any_of / none_of\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000018",
    "book": "lambda",
    "order_index": 18,
    "title": "#018 Recursive Lambda Using std::function",
    "slug": "lambda-018-recursive-lambda-using-std-function",
    "description": "Define recursive factorial lambda using std::function<int(int)> signature.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5",
        "output": "Recursive Lambda Factorial: 120",
        "explanation": "Executes modern C++ lambda expression for Recursive Lambda Using std::function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Recursive Lambda Using std::function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Recursive Lambda Using std::function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Recursive Lambda Using std::function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000019",
    "book": "lambda",
    "order_index": 19,
    "title": "#019 Lambda Initializer Capture (C++14 Move Capture)",
    "slug": "lambda-019-lambda-initializer-capture-c-14-move-capture",
    "description": "Demonstrate init-capture [ptr = std::move(ptr)] moving unique_ptr into lambda.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "99",
        "output": "Unique resource moved into lambda closure: 99",
        "explanation": "Executes modern C++ lambda expression for Lambda Initializer Capture (C++14 Move Capture)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Initializer Capture (C++14 Move Capture)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Initializer Capture (C++14 Move Capture)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Initializer Capture (C++14 Move Capture)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000020",
    "book": "lambda",
    "order_index": 20,
    "title": "#020 Lambda Sorting Vector of Structs by Field",
    "slug": "lambda-020-lambda-sorting-vector-of-structs-by-field",
    "description": "Use lambda comparator in std::sort to sort array of Student structs by marks.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 Alice 80 Bob 95 Charlie 85",
        "output": "1. Bob (95) 2. Charlie (85) 3. Alice (80)",
        "explanation": "Executes modern C++ lambda expression for Lambda Sorting Vector of Structs by Field."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Sorting Vector of Structs by Field\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Sorting Vector of Structs by Field\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Sorting Vector of Structs by Field\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000021",
    "book": "lambda",
    "order_index": 21,
    "title": "#021 Lambda Expression Challenge #21",
    "slug": "lambda-021-lambda-expression-challenge-21",
    "description": "Design functional lambda closure #21: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "21 63",
        "output": "Lambda #21 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #21."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #21\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #21\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #21\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000022",
    "book": "lambda",
    "order_index": 22,
    "title": "#022 Lambda Expression Challenge #22",
    "slug": "lambda-022-lambda-expression-challenge-22",
    "description": "Design functional lambda closure #22: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "22 66",
        "output": "Lambda #22 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #22."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #22\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #22\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #22\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000023",
    "book": "lambda",
    "order_index": 23,
    "title": "#023 Lambda Expression Challenge #23",
    "slug": "lambda-023-lambda-expression-challenge-23",
    "description": "Design functional lambda closure #23: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "23 69",
        "output": "Lambda #23 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #23."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #23\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #23\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #23\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000024",
    "book": "lambda",
    "order_index": 24,
    "title": "#024 Lambda Expression Challenge #24",
    "slug": "lambda-024-lambda-expression-challenge-24",
    "description": "Design functional lambda closure #24: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "24 72",
        "output": "Lambda #24 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #24."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #24\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #24\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #24\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000025",
    "book": "lambda",
    "order_index": 25,
    "title": "#025 Lambda Expression Challenge #25",
    "slug": "lambda-025-lambda-expression-challenge-25",
    "description": "Design functional lambda closure #25: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "25 75",
        "output": "Lambda #25 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #25."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #25\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #25\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #25\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000026",
    "book": "lambda",
    "order_index": 26,
    "title": "#026 Lambda Expression Challenge #26",
    "slug": "lambda-026-lambda-expression-challenge-26",
    "description": "Design functional lambda closure #26: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "26 78",
        "output": "Lambda #26 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #26."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #26\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #26\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #26\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000027",
    "book": "lambda",
    "order_index": 27,
    "title": "#027 Lambda Expression Challenge #27",
    "slug": "lambda-027-lambda-expression-challenge-27",
    "description": "Design functional lambda closure #27: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "27 81",
        "output": "Lambda #27 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #27."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #27\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #27\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #27\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000028",
    "book": "lambda",
    "order_index": 28,
    "title": "#028 Lambda Expression Challenge #28",
    "slug": "lambda-028-lambda-expression-challenge-28",
    "description": "Design functional lambda closure #28: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "28 84",
        "output": "Lambda #28 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #28."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #28\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #28\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #28\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000029",
    "book": "lambda",
    "order_index": 29,
    "title": "#029 Lambda Expression Challenge #29",
    "slug": "lambda-029-lambda-expression-challenge-29",
    "description": "Design functional lambda closure #29: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "29 87",
        "output": "Lambda #29 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #29."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #29\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #29\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #29\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000030",
    "book": "lambda",
    "order_index": 30,
    "title": "#030 Lambda Expression Challenge #30",
    "slug": "lambda-030-lambda-expression-challenge-30",
    "description": "Design functional lambda closure #30: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "30 90",
        "output": "Lambda #30 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #30."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #30\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #30\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #30\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000031",
    "book": "lambda",
    "order_index": 31,
    "title": "#031 Lambda Expression Challenge #31",
    "slug": "lambda-031-lambda-expression-challenge-31",
    "description": "Design functional lambda closure #31: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "31 93",
        "output": "Lambda #31 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #31."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #31\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #31\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #31\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000032",
    "book": "lambda",
    "order_index": 32,
    "title": "#032 Lambda Expression Challenge #32",
    "slug": "lambda-032-lambda-expression-challenge-32",
    "description": "Design functional lambda closure #32: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "32 96",
        "output": "Lambda #32 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #32."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #32\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #32\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #32\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000033",
    "book": "lambda",
    "order_index": 33,
    "title": "#033 Lambda Expression Challenge #33",
    "slug": "lambda-033-lambda-expression-challenge-33",
    "description": "Design functional lambda closure #33: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "33 99",
        "output": "Lambda #33 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #33."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #33\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #33\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #33\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000034",
    "book": "lambda",
    "order_index": 34,
    "title": "#034 Lambda Expression Challenge #34",
    "slug": "lambda-034-lambda-expression-challenge-34",
    "description": "Design functional lambda closure #34: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "34 102",
        "output": "Lambda #34 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #34."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #34\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #34\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #34\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000035",
    "book": "lambda",
    "order_index": 35,
    "title": "#035 Lambda Expression Challenge #35",
    "slug": "lambda-035-lambda-expression-challenge-35",
    "description": "Design functional lambda closure #35: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "35 105",
        "output": "Lambda #35 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #35."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #35\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #35\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #35\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000036",
    "book": "lambda",
    "order_index": 36,
    "title": "#036 Lambda Expression Challenge #36",
    "slug": "lambda-036-lambda-expression-challenge-36",
    "description": "Design functional lambda closure #36: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "36 108",
        "output": "Lambda #36 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #36."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #36\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #36\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #36\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000037",
    "book": "lambda",
    "order_index": 37,
    "title": "#037 Lambda Expression Challenge #37",
    "slug": "lambda-037-lambda-expression-challenge-37",
    "description": "Design functional lambda closure #37: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "37 111",
        "output": "Lambda #37 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #37."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #37\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #37\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #37\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000038",
    "book": "lambda",
    "order_index": 38,
    "title": "#038 Lambda Expression Challenge #38",
    "slug": "lambda-038-lambda-expression-challenge-38",
    "description": "Design functional lambda closure #38: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "38 114",
        "output": "Lambda #38 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #38."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #38\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #38\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #38\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000039",
    "book": "lambda",
    "order_index": 39,
    "title": "#039 Lambda Expression Challenge #39",
    "slug": "lambda-039-lambda-expression-challenge-39",
    "description": "Design functional lambda closure #39: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "39 117",
        "output": "Lambda #39 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #39."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #39\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #39\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #39\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000040",
    "book": "lambda",
    "order_index": 40,
    "title": "#040 Lambda Expression Challenge #40",
    "slug": "lambda-040-lambda-expression-challenge-40",
    "description": "Design functional lambda closure #40: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "40 120",
        "output": "Lambda #40 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #40."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #40\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #40\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #40\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000041",
    "book": "lambda",
    "order_index": 41,
    "title": "#041 Lambda Expression Challenge #41",
    "slug": "lambda-041-lambda-expression-challenge-41",
    "description": "Design functional lambda closure #41: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "41 123",
        "output": "Lambda #41 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #41."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #41\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #41\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #41\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000042",
    "book": "lambda",
    "order_index": 42,
    "title": "#042 Lambda Expression Challenge #42",
    "slug": "lambda-042-lambda-expression-challenge-42",
    "description": "Design functional lambda closure #42: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "42 126",
        "output": "Lambda #42 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #42."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #42\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #42\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #42\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000043",
    "book": "lambda",
    "order_index": 43,
    "title": "#043 Lambda Expression Challenge #43",
    "slug": "lambda-043-lambda-expression-challenge-43",
    "description": "Design functional lambda closure #43: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "43 129",
        "output": "Lambda #43 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #43."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #43\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #43\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #43\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000044",
    "book": "lambda",
    "order_index": 44,
    "title": "#044 Lambda Expression Challenge #44",
    "slug": "lambda-044-lambda-expression-challenge-44",
    "description": "Design functional lambda closure #44: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "44 132",
        "output": "Lambda #44 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #44."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #44\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #44\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #44\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000045",
    "book": "lambda",
    "order_index": 45,
    "title": "#045 Lambda Expression Challenge #45",
    "slug": "lambda-045-lambda-expression-challenge-45",
    "description": "Design functional lambda closure #45: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "45 135",
        "output": "Lambda #45 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #45."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #45\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #45\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #45\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000046",
    "book": "lambda",
    "order_index": 46,
    "title": "#046 Lambda Expression Challenge #46",
    "slug": "lambda-046-lambda-expression-challenge-46",
    "description": "Design functional lambda closure #46: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "46 138",
        "output": "Lambda #46 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #46."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #46\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #46\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #46\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000047",
    "book": "lambda",
    "order_index": 47,
    "title": "#047 Lambda Expression Challenge #47",
    "slug": "lambda-047-lambda-expression-challenge-47",
    "description": "Design functional lambda closure #47: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "47 141",
        "output": "Lambda #47 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #47."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #47\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #47\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #47\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000048",
    "book": "lambda",
    "order_index": 48,
    "title": "#048 Lambda Expression Challenge #48",
    "slug": "lambda-048-lambda-expression-challenge-48",
    "description": "Design functional lambda closure #48: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "48 144",
        "output": "Lambda #48 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #48."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #48\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #48\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #48\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000049",
    "book": "lambda",
    "order_index": 49,
    "title": "#049 Lambda Expression Challenge #49",
    "slug": "lambda-049-lambda-expression-challenge-49",
    "description": "Design functional lambda closure #49: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "49 147",
        "output": "Lambda #49 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #49."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #49\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #49\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #49\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000050",
    "book": "lambda",
    "order_index": 50,
    "title": "#050 Lambda Expression Challenge #50",
    "slug": "lambda-050-lambda-expression-challenge-50",
    "description": "Design functional lambda closure #50: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "50 150",
        "output": "Lambda #50 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #50."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #50\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #50\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #50\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000051",
    "book": "lambda",
    "order_index": 51,
    "title": "#051 Lambda Expression Challenge #51",
    "slug": "lambda-051-lambda-expression-challenge-51",
    "description": "Design functional lambda closure #51: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "51 153",
        "output": "Lambda #51 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000052",
    "book": "lambda",
    "order_index": 52,
    "title": "#052 Lambda Expression Challenge #52",
    "slug": "lambda-052-lambda-expression-challenge-52",
    "description": "Design functional lambda closure #52: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "52 156",
        "output": "Lambda #52 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000053",
    "book": "lambda",
    "order_index": 53,
    "title": "#053 Lambda Expression Challenge #53",
    "slug": "lambda-053-lambda-expression-challenge-53",
    "description": "Design functional lambda closure #53: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "53 159",
        "output": "Lambda #53 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000054",
    "book": "lambda",
    "order_index": 54,
    "title": "#054 Lambda Expression Challenge #54",
    "slug": "lambda-054-lambda-expression-challenge-54",
    "description": "Design functional lambda closure #54: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "54 162",
        "output": "Lambda #54 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000055",
    "book": "lambda",
    "order_index": 55,
    "title": "#055 Lambda Expression Challenge #55",
    "slug": "lambda-055-lambda-expression-challenge-55",
    "description": "Design functional lambda closure #55: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "55 165",
        "output": "Lambda #55 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000056",
    "book": "lambda",
    "order_index": 56,
    "title": "#056 Lambda Expression Challenge #56",
    "slug": "lambda-056-lambda-expression-challenge-56",
    "description": "Design functional lambda closure #56: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "56 168",
        "output": "Lambda #56 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000057",
    "book": "lambda",
    "order_index": 57,
    "title": "#057 Lambda Expression Challenge #57",
    "slug": "lambda-057-lambda-expression-challenge-57",
    "description": "Design functional lambda closure #57: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "57 171",
        "output": "Lambda #57 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000058",
    "book": "lambda",
    "order_index": 58,
    "title": "#058 Lambda Expression Challenge #58",
    "slug": "lambda-058-lambda-expression-challenge-58",
    "description": "Design functional lambda closure #58: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "58 174",
        "output": "Lambda #58 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000059",
    "book": "lambda",
    "order_index": 59,
    "title": "#059 Lambda Expression Challenge #59",
    "slug": "lambda-059-lambda-expression-challenge-59",
    "description": "Design functional lambda closure #59: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "59 177",
        "output": "Lambda #59 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000060",
    "book": "lambda",
    "order_index": 60,
    "title": "#060 Lambda Expression Challenge #60",
    "slug": "lambda-060-lambda-expression-challenge-60",
    "description": "Design functional lambda closure #60: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "60 180",
        "output": "Lambda #60 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000061",
    "book": "lambda",
    "order_index": 61,
    "title": "#061 Lambda Expression Challenge #61",
    "slug": "lambda-061-lambda-expression-challenge-61",
    "description": "Design functional lambda closure #61: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "61 183",
        "output": "Lambda #61 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000062",
    "book": "lambda",
    "order_index": 62,
    "title": "#062 Lambda Expression Challenge #62",
    "slug": "lambda-062-lambda-expression-challenge-62",
    "description": "Design functional lambda closure #62: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "62 186",
        "output": "Lambda #62 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000063",
    "book": "lambda",
    "order_index": 63,
    "title": "#063 Lambda Expression Challenge #63",
    "slug": "lambda-063-lambda-expression-challenge-63",
    "description": "Design functional lambda closure #63: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "63 189",
        "output": "Lambda #63 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000064",
    "book": "lambda",
    "order_index": 64,
    "title": "#064 Lambda Expression Challenge #64",
    "slug": "lambda-064-lambda-expression-challenge-64",
    "description": "Design functional lambda closure #64: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "64 192",
        "output": "Lambda #64 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000065",
    "book": "lambda",
    "order_index": 65,
    "title": "#065 Lambda Expression Challenge #65",
    "slug": "lambda-065-lambda-expression-challenge-65",
    "description": "Design functional lambda closure #65: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "65 195",
        "output": "Lambda #65 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000066",
    "book": "lambda",
    "order_index": 66,
    "title": "#066 Lambda Expression Challenge #66",
    "slug": "lambda-066-lambda-expression-challenge-66",
    "description": "Design functional lambda closure #66: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "66 198",
        "output": "Lambda #66 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000067",
    "book": "lambda",
    "order_index": 67,
    "title": "#067 Lambda Expression Challenge #67",
    "slug": "lambda-067-lambda-expression-challenge-67",
    "description": "Design functional lambda closure #67: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "67 201",
        "output": "Lambda #67 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000068",
    "book": "lambda",
    "order_index": 68,
    "title": "#068 Lambda Expression Challenge #68",
    "slug": "lambda-068-lambda-expression-challenge-68",
    "description": "Design functional lambda closure #68: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "68 204",
        "output": "Lambda #68 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000069",
    "book": "lambda",
    "order_index": 69,
    "title": "#069 Lambda Expression Challenge #69",
    "slug": "lambda-069-lambda-expression-challenge-69",
    "description": "Design functional lambda closure #69: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "69 207",
        "output": "Lambda #69 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000070",
    "book": "lambda",
    "order_index": 70,
    "title": "#070 Lambda Expression Challenge #70",
    "slug": "lambda-070-lambda-expression-challenge-70",
    "description": "Design functional lambda closure #70: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "70 210",
        "output": "Lambda #70 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000071",
    "book": "lambda",
    "order_index": 71,
    "title": "#071 Lambda Expression Challenge #71",
    "slug": "lambda-071-lambda-expression-challenge-71",
    "description": "Design functional lambda closure #71: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "71 213",
        "output": "Lambda #71 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000072",
    "book": "lambda",
    "order_index": 72,
    "title": "#072 Lambda Expression Challenge #72",
    "slug": "lambda-072-lambda-expression-challenge-72",
    "description": "Design functional lambda closure #72: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "72 216",
        "output": "Lambda #72 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000073",
    "book": "lambda",
    "order_index": 73,
    "title": "#073 Lambda Expression Challenge #73",
    "slug": "lambda-073-lambda-expression-challenge-73",
    "description": "Design functional lambda closure #73: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "73 219",
        "output": "Lambda #73 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000074",
    "book": "lambda",
    "order_index": 74,
    "title": "#074 Lambda Expression Challenge #74",
    "slug": "lambda-074-lambda-expression-challenge-74",
    "description": "Design functional lambda closure #74: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "74 222",
        "output": "Lambda #74 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000075",
    "book": "lambda",
    "order_index": 75,
    "title": "#075 Lambda Expression Challenge #75",
    "slug": "lambda-075-lambda-expression-challenge-75",
    "description": "Design functional lambda closure #75: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "75 225",
        "output": "Lambda #75 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000076",
    "book": "lambda",
    "order_index": 76,
    "title": "#076 Lambda Expression Challenge #76",
    "slug": "lambda-076-lambda-expression-challenge-76",
    "description": "Design functional lambda closure #76: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "76 228",
        "output": "Lambda #76 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000077",
    "book": "lambda",
    "order_index": 77,
    "title": "#077 Lambda Expression Challenge #77",
    "slug": "lambda-077-lambda-expression-challenge-77",
    "description": "Design functional lambda closure #77: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "77 231",
        "output": "Lambda #77 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000078",
    "book": "lambda",
    "order_index": 78,
    "title": "#078 Lambda Expression Challenge #78",
    "slug": "lambda-078-lambda-expression-challenge-78",
    "description": "Design functional lambda closure #78: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "78 234",
        "output": "Lambda #78 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000079",
    "book": "lambda",
    "order_index": 79,
    "title": "#079 Lambda Expression Challenge #79",
    "slug": "lambda-079-lambda-expression-challenge-79",
    "description": "Design functional lambda closure #79: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "79 237",
        "output": "Lambda #79 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000080",
    "book": "lambda",
    "order_index": 80,
    "title": "#080 Lambda Expression Challenge #80",
    "slug": "lambda-080-lambda-expression-challenge-80",
    "description": "Design functional lambda closure #80: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "80 240",
        "output": "Lambda #80 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000081",
    "book": "lambda",
    "order_index": 81,
    "title": "#081 Lambda Expression Challenge #81",
    "slug": "lambda-081-lambda-expression-challenge-81",
    "description": "Design functional lambda closure #81: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "81 243",
        "output": "Lambda #81 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000082",
    "book": "lambda",
    "order_index": 82,
    "title": "#082 Lambda Expression Challenge #82",
    "slug": "lambda-082-lambda-expression-challenge-82",
    "description": "Design functional lambda closure #82: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "82 246",
        "output": "Lambda #82 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000083",
    "book": "lambda",
    "order_index": 83,
    "title": "#083 Lambda Expression Challenge #83",
    "slug": "lambda-083-lambda-expression-challenge-83",
    "description": "Design functional lambda closure #83: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "83 249",
        "output": "Lambda #83 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000084",
    "book": "lambda",
    "order_index": 84,
    "title": "#084 Lambda Expression Challenge #84",
    "slug": "lambda-084-lambda-expression-challenge-84",
    "description": "Design functional lambda closure #84: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "84 252",
        "output": "Lambda #84 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000085",
    "book": "lambda",
    "order_index": 85,
    "title": "#085 Lambda Expression Challenge #85",
    "slug": "lambda-085-lambda-expression-challenge-85",
    "description": "Design functional lambda closure #85: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "85 255",
        "output": "Lambda #85 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000086",
    "book": "lambda",
    "order_index": 86,
    "title": "#086 Lambda Expression Challenge #86",
    "slug": "lambda-086-lambda-expression-challenge-86",
    "description": "Design functional lambda closure #86: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "86 258",
        "output": "Lambda #86 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000087",
    "book": "lambda",
    "order_index": 87,
    "title": "#087 Lambda Expression Challenge #87",
    "slug": "lambda-087-lambda-expression-challenge-87",
    "description": "Design functional lambda closure #87: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "87 261",
        "output": "Lambda #87 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000088",
    "book": "lambda",
    "order_index": 88,
    "title": "#088 Lambda Expression Challenge #88",
    "slug": "lambda-088-lambda-expression-challenge-88",
    "description": "Design functional lambda closure #88: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "88 264",
        "output": "Lambda #88 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000089",
    "book": "lambda",
    "order_index": 89,
    "title": "#089 Lambda Expression Challenge #89",
    "slug": "lambda-089-lambda-expression-challenge-89",
    "description": "Design functional lambda closure #89: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "89 267",
        "output": "Lambda #89 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000090",
    "book": "lambda",
    "order_index": 90,
    "title": "#090 Lambda Expression Challenge #90",
    "slug": "lambda-090-lambda-expression-challenge-90",
    "description": "Design functional lambda closure #90: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "90 270",
        "output": "Lambda #90 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000091",
    "book": "lambda",
    "order_index": 91,
    "title": "#091 Lambda Expression Challenge #91",
    "slug": "lambda-091-lambda-expression-challenge-91",
    "description": "Design functional lambda closure #91: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "91 273",
        "output": "Lambda #91 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000092",
    "book": "lambda",
    "order_index": 92,
    "title": "#092 Lambda Expression Challenge #92",
    "slug": "lambda-092-lambda-expression-challenge-92",
    "description": "Design functional lambda closure #92: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "92 276",
        "output": "Lambda #92 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000093",
    "book": "lambda",
    "order_index": 93,
    "title": "#093 Lambda Expression Challenge #93",
    "slug": "lambda-093-lambda-expression-challenge-93",
    "description": "Design functional lambda closure #93: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "93 279",
        "output": "Lambda #93 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000094",
    "book": "lambda",
    "order_index": 94,
    "title": "#094 Lambda Expression Challenge #94",
    "slug": "lambda-094-lambda-expression-challenge-94",
    "description": "Design functional lambda closure #94: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "94 282",
        "output": "Lambda #94 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000095",
    "book": "lambda",
    "order_index": 95,
    "title": "#095 Lambda Expression Challenge #95",
    "slug": "lambda-095-lambda-expression-challenge-95",
    "description": "Design functional lambda closure #95: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "95 285",
        "output": "Lambda #95 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000096",
    "book": "lambda",
    "order_index": 96,
    "title": "#096 Lambda Expression Challenge #96",
    "slug": "lambda-096-lambda-expression-challenge-96",
    "description": "Design functional lambda closure #96: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "96 288",
        "output": "Lambda #96 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000097",
    "book": "lambda",
    "order_index": 97,
    "title": "#097 Lambda Expression Challenge #97",
    "slug": "lambda-097-lambda-expression-challenge-97",
    "description": "Design functional lambda closure #97: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "97 291",
        "output": "Lambda #97 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000098",
    "book": "lambda",
    "order_index": 98,
    "title": "#098 Lambda Expression Challenge #98",
    "slug": "lambda-098-lambda-expression-challenge-98",
    "description": "Design functional lambda closure #98: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "98 294",
        "output": "Lambda #98 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000099",
    "book": "lambda",
    "order_index": 99,
    "title": "#099 Lambda Expression Challenge #99",
    "slug": "lambda-099-lambda-expression-challenge-99",
    "description": "Design functional lambda closure #99: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "99 297",
        "output": "Lambda #99 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-7007-000000000100",
    "book": "lambda",
    "order_index": 100,
    "title": "#100 Lambda Expression Challenge #100",
    "slug": "lambda-100-lambda-expression-challenge-100",
    "description": "Design functional lambda closure #100: implement predicate transformations, custom captures, and STL algorithm composition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lambda Expressions & Functional Programming",
    "tags": [
      "Lambda",
      "Functional",
      "Modern C++"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100 300",
        "output": "Lambda #100 Pipeline Output Verified",
        "explanation": "Executes modern C++ lambda expression for Lambda Expression Challenge #100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\nusing namespace std;\n\n// Lambda Expression Challenge #100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lambda Expression Challenge #100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lambda Expression Challenge #100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
