import { Problem } from '../../types/problem';

export const STACKS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6008-000000000001",
    "book": "stacks",
    "order_index": 1,
    "title": "#001 Stack Adapter Operations (`push`, `pop`, `top`, `empty`, `size`)",
    "slug": "stacks-001-stack-adapter-operations-push-pop-top-empty-size",
    "description": "Demonstrate standard LIFO operations on `std::stack<int>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 10, 20, 30 -> Pop -> Top",
        "output": "Popped: 30, Current Top: 20, Size: 2",
        "explanation": "Executes logic for Stack Adapter Operations (`push`, `pop`, `top`, `empty`, `size`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Adapter Operations (`push`, `pop`, `top`, `empty`, `size`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Adapter Operations (`push`, `pop`, `top`, `empty`, `size`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Adapter Operations (`push`, `pop`, `top`, `empty`, `size`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000002",
    "book": "stacks",
    "order_index": 2,
    "title": "#002 Valid Parentheses Matching with Stack",
    "slug": "stacks-002-valid-parentheses-matching-with-stack",
    "description": "Check if parentheses string `()[]{}` is balanced and properly nested.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '{[()]}'",
        "output": "Balanced: true",
        "explanation": "Executes logic for Valid Parentheses Matching with Stack."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Valid Parentheses Matching with Stack\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Valid Parentheses Matching with Stack\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Valid Parentheses Matching with Stack\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000003",
    "book": "stacks",
    "order_index": 3,
    "title": "#003 Next Greater Element (Monotonic Stack)",
    "slug": "stacks-003-next-greater-element-monotonic-stack",
    "description": "For each element in array, find first greater element to its right in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 5, 2, 25]",
        "output": "Next Greater: [5, 25, 25, -1]",
        "explanation": "Executes logic for Next Greater Element (Monotonic Stack)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Next Greater Element (Monotonic Stack)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Next Greater Element (Monotonic Stack)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Next Greater Element (Monotonic Stack)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000004",
    "book": "stacks",
    "order_index": 4,
    "title": "#004 Next Smaller Element (Monotonic Stack)",
    "slug": "stacks-004-next-smaller-element-monotonic-stack",
    "description": "Find first smaller element to the right of each element in array in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 8, 5, 2, 25]",
        "output": "Next Smaller: [2, 5, 2, -1, -1]",
        "explanation": "Executes logic for Next Smaller Element (Monotonic Stack)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Next Smaller Element (Monotonic Stack)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Next Smaller Element (Monotonic Stack)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Next Smaller Element (Monotonic Stack)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000005",
    "book": "stacks",
    "order_index": 5,
    "title": "#005 Previous Greater Element",
    "slug": "stacks-005-previous-greater-element",
    "description": "Find first greater element to the left of each element in array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[10, 4, 2, 20, 40, 12, 30]",
        "output": "Previous Greater: [-1, 10, 4, -1, -1, 40, 40]",
        "explanation": "Executes logic for Previous Greater Element."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Previous Greater Element\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Previous Greater Element\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Previous Greater Element\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000006",
    "book": "stacks",
    "order_index": 6,
    "title": "#006 Previous Smaller Element",
    "slug": "stacks-006-previous-smaller-element",
    "description": "Find first smaller element to the left of each element in array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 5, 2, 10, 8]",
        "output": "Previous Smaller: [-1, 4, -1, 2, 2]",
        "explanation": "Executes logic for Previous Smaller Element."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Previous Smaller Element\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Previous Smaller Element\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Previous Smaller Element\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000007",
    "book": "stacks",
    "order_index": 7,
    "title": "#007 Daily Temperatures (Days to Warmer Temperature)",
    "slug": "stacks-007-daily-temperatures-days-to-warmer-temperature",
    "description": "Find number of days to wait until warmer temperature using monotonic decreasing stack.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[73, 74, 75, 71, 69, 72, 76, 73]",
        "output": "Output: [1, 1, 4, 2, 1, 1, 0, 0]",
        "explanation": "Executes logic for Daily Temperatures (Days to Warmer Temperature)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Daily Temperatures (Days to Warmer Temperature)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Daily Temperatures (Days to Warmer Temperature)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Daily Temperatures (Days to Warmer Temperature)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000008",
    "book": "stacks",
    "order_index": 8,
    "title": "#008 Stock Span Problem",
    "slug": "stacks-008-stock-span-problem",
    "description": "Calculate span of stock prices (consecutive days where price was <= today) in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[100, 80, 60, 70, 60, 75, 85]",
        "output": "Spans: [1, 1, 1, 2, 1, 4, 6]",
        "explanation": "Executes logic for Stock Span Problem."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stock Span Problem\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stock Span Problem\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stock Span Problem\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000009",
    "book": "stacks",
    "order_index": 9,
    "title": "#009 Largest Rectangle in Histogram (Monotonic Stack O(N))",
    "slug": "stacks-009-largest-rectangle-in-histogram-monotonic-stack-o-n",
    "description": "Find area of largest rectangle in histogram bar heights.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[2, 1, 5, 6, 2, 3]",
        "output": "Largest Rectangle Area: 10 (Heights 5 and 6)",
        "explanation": "Executes logic for Largest Rectangle in Histogram (Monotonic Stack O(N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Largest Rectangle in Histogram (Monotonic Stack O(N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Largest Rectangle in Histogram (Monotonic Stack O(N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Largest Rectangle in Histogram (Monotonic Stack O(N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000010",
    "book": "stacks",
    "order_index": 10,
    "title": "#010 Maximal Rectangle in 2D Binary Matrix",
    "slug": "stacks-010-maximal-rectangle-in-2d-binary-matrix",
    "description": "Find largest rectangle of 1s in binary matrix using histogram stack per row.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix with 1s",
        "output": "Maximal Rectangle Area: 6",
        "explanation": "Executes logic for Maximal Rectangle in 2D Binary Matrix."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximal Rectangle in 2D Binary Matrix\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximal Rectangle in 2D Binary Matrix\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximal Rectangle in 2D Binary Matrix\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000011",
    "book": "stacks",
    "order_index": 11,
    "title": "#011 Min Stack with O(1) GetMin (`getMin()`)",
    "slug": "stacks-011-min-stack-with-o-1-getmin-getmin",
    "description": "Design stack supporting push, pop, top, and retrieving minimum element in O(1) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 5, 3, 7 -> GetMin -> Pop -> GetMin",
        "output": "Min: 3 -> Popped 7 -> Min: 3",
        "explanation": "Executes logic for Min Stack with O(1) GetMin (`getMin()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Min Stack with O(1) GetMin (`getMin()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Min Stack with O(1) GetMin (`getMin()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Min Stack with O(1) GetMin (`getMin()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000012",
    "book": "stacks",
    "order_index": 12,
    "title": "#012 Max Stack with O(1) GetMax (`getMax()`)",
    "slug": "stacks-012-max-stack-with-o-1-getmax-getmax",
    "description": "Design stack supporting O(1) retrieval of maximum element.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 10, 20, 5 -> GetMax",
        "output": "Max: 20",
        "explanation": "Executes logic for Max Stack with O(1) GetMax (`getMax()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Max Stack with O(1) GetMax (`getMax()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Max Stack with O(1) GetMax (`getMax()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Max Stack with O(1) GetMax (`getMax()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000013",
    "book": "stacks",
    "order_index": 13,
    "title": "#013 Evaluate Reverse Polish Notation (Postfix Evaluation)",
    "slug": "stacks-013-evaluate-reverse-polish-notation-postfix-evaluatio",
    "description": "Evaluate arithmetic expression given in Postfix notation using stack.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tokens: ['2', '1', '+', '3', '*']",
        "output": "Result: 9 ((2 + 1) * 3)",
        "explanation": "Executes logic for Evaluate Reverse Polish Notation (Postfix Evaluation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Evaluate Reverse Polish Notation (Postfix Evaluation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Evaluate Reverse Polish Notation (Postfix Evaluation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Evaluate Reverse Polish Notation (Postfix Evaluation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000014",
    "book": "stacks",
    "order_index": 14,
    "title": "#014 Infix to Postfix Expression Conversion (Shunting Yard)",
    "slug": "stacks-014-infix-to-postfix-expression-conversion-shunting-ya",
    "description": "Convert standard infix expression to postfix notation respecting operator precedence.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expression 'A + B * C'",
        "output": "Postfix: 'A B C * +'",
        "explanation": "Executes logic for Infix to Postfix Expression Conversion (Shunting Yard)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Infix to Postfix Expression Conversion (Shunting Yard)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Infix to Postfix Expression Conversion (Shunting Yard)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Infix to Postfix Expression Conversion (Shunting Yard)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000015",
    "book": "stacks",
    "order_index": 15,
    "title": "#015 Infix to Prefix Expression Conversion",
    "slug": "stacks-015-infix-to-prefix-expression-conversion",
    "description": "Convert infix expression to prefix notation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expression '(A + B) * C'",
        "output": "Prefix: '* + A B C'",
        "explanation": "Executes logic for Infix to Prefix Expression Conversion."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Infix to Prefix Expression Conversion\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Infix to Prefix Expression Conversion\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Infix to Prefix Expression Conversion\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000016",
    "book": "stacks",
    "order_index": 16,
    "title": "#016 Prefix Expression Evaluation",
    "slug": "stacks-016-prefix-expression-evaluation",
    "description": "Evaluate expression given in prefix notation by scanning right to left with stack.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expression '+ 9 * 2 6'",
        "output": "Result: 21 (9 + (2 * 6))",
        "explanation": "Executes logic for Prefix Expression Evaluation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Prefix Expression Evaluation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Prefix Expression Evaluation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Prefix Expression Evaluation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000017",
    "book": "stacks",
    "order_index": 17,
    "title": "#017 Simplify File Path (Unix Path Canonicalization)",
    "slug": "stacks-017-simplify-file-path-unix-path-canonicalization",
    "description": "Canonicalize Unix path `'/a/./b/../../c/'` into `'/c'` using stack of directory names.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Path '/a/./b/../../c/'",
        "output": "Simplified Path: '/c'",
        "explanation": "Executes logic for Simplify File Path (Unix Path Canonicalization)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Simplify File Path (Unix Path Canonicalization)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Simplify File Path (Unix Path Canonicalization)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Simplify File Path (Unix Path Canonicalization)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000018",
    "book": "stacks",
    "order_index": 18,
    "title": "#018 Decode String (k[encoded_string])",
    "slug": "stacks-018-decode-string-k-encoded-string",
    "description": "Decode string formatted as `3[a2[c]]` into `accaccacc` using stack.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '3[a2[c]]'",
        "output": "Decoded: 'accaccacc'",
        "explanation": "Executes logic for Decode String (k[encoded_string])."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Decode String (k[encoded_string])\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Decode String (k[encoded_string])\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Decode String (k[encoded_string])\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000019",
    "book": "stacks",
    "order_index": 19,
    "title": "#019 Remove All Adjacent Duplicates in String",
    "slug": "stacks-019-remove-all-adjacent-duplicates-in-string",
    "description": "Remove adjacent matching character pairs repeatedly until none remain.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'abbaca'",
        "output": "Output: 'ca'",
        "explanation": "Executes logic for Remove All Adjacent Duplicates in String."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Remove All Adjacent Duplicates in String\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Remove All Adjacent Duplicates in String\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Remove All Adjacent Duplicates in String\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000020",
    "book": "stacks",
    "order_index": 20,
    "title": "#020 Remove K Adjacent Duplicates in String II",
    "slug": "stacks-020-remove-k-adjacent-duplicates-in-string-ii",
    "description": "Remove K consecutive identical characters using stack of pair<char, count>.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'deeedbbcccbdaa', k=3",
        "output": "Output: 'aa'",
        "explanation": "Executes logic for Remove K Adjacent Duplicates in String II."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Remove K Adjacent Duplicates in String II\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Remove K Adjacent Duplicates in String II\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Remove K Adjacent Duplicates in String II\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000021",
    "book": "stacks",
    "order_index": 21,
    "title": "#021 Online Stock Span Tracker Class",
    "slug": "stacks-021-online-stock-span-tracker-class",
    "description": "Implement `StockSpanner` class with `.next(price)` computing span online.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stream 100, 80, 60, 70, 60, 75, 85",
        "output": "Spans emitted: 1, 1, 1, 2, 1, 4, 6",
        "explanation": "Executes logic for Online Stock Span Tracker Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Online Stock Span Tracker Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Online Stock Span Tracker Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Online Stock Span Tracker Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000022",
    "book": "stacks",
    "order_index": 22,
    "title": "#022 Asteroid Collision Simulation",
    "slug": "stacks-022-asteroid-collision-simulation",
    "description": "Simulate asteroids moving in directions (+ right, - left) and exploding upon collision.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Asteroids [5, 10, -5]",
        "output": "State after collisions: [5, 10]",
        "explanation": "Executes logic for Asteroid Collision Simulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Asteroid Collision Simulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Asteroid Collision Simulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Asteroid Collision Simulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000023",
    "book": "stacks",
    "order_index": 23,
    "title": "#023 Remove Duplicate Letters (Smallest Lexicographical Order)",
    "slug": "stacks-023-remove-duplicate-letters-smallest-lexicographical",
    "description": "Remove duplicate letters so that every letter appears once in smallest alphabetical order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'bcabc'",
        "output": "Output: 'abc'",
        "explanation": "Executes logic for Remove Duplicate Letters (Smallest Lexicographical Order)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Remove Duplicate Letters (Smallest Lexicographical Order)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Remove Duplicate Letters (Smallest Lexicographical Order)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Remove Duplicate Letters (Smallest Lexicographical Order)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000024",
    "book": "stacks",
    "order_index": 24,
    "title": "#024 Trapping Rainwater using Monotonic Stack",
    "slug": "stacks-024-trapping-rainwater-using-monotonic-stack",
    "description": "Compute rainwater trapping using monotonic decreasing stack storing bar indices.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Heights [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "Trapped Water: 6 units (Computed via Stack)",
        "explanation": "Executes logic for Trapping Rainwater using Monotonic Stack."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Trapping Rainwater using Monotonic Stack\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Trapping Rainwater using Monotonic Stack\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Trapping Rainwater using Monotonic Stack\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000025",
    "book": "stacks",
    "order_index": 25,
    "title": "#025 Basic Calculator with Parentheses `(`, `)` and `+`, `-`",
    "slug": "stacks-025-basic-calculator-with-parentheses-and",
    "description": "Evaluate arithmetic expression string containing parentheses and negative numbers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expression ' 2-1 + 2 '",
        "output": "Result: 3",
        "explanation": "Executes logic for Basic Calculator with Parentheses `(`, `)` and `+`, `-`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Basic Calculator with Parentheses `(`, `)` and `+`, `-`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Basic Calculator with Parentheses `(`, `)` and `+`, `-`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Basic Calculator with Parentheses `(`, `)` and `+`, `-`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000026",
    "book": "stacks",
    "order_index": 26,
    "title": "#026 Basic Calculator II with `+`, `-`, `*`, `/` (No Parentheses)",
    "slug": "stacks-026-basic-calculator-ii-with-no-parentheses",
    "description": "Evaluate expression string respecting multiplication and division precedence.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Expression '3+2*2'",
        "output": "Result: 7",
        "explanation": "Executes logic for Basic Calculator II with `+`, `-`, `*`, `/` (No Parentheses)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Basic Calculator II with `+`, `-`, `*`, `/` (No Parentheses)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Basic Calculator II with `+`, `-`, `*`, `/` (No Parentheses)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Basic Calculator II with `+`, `-`, `*`, `/` (No Parentheses)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000027",
    "book": "stacks",
    "order_index": 27,
    "title": "#027 Validate Stack Sequences (Pushed vs Popped)",
    "slug": "stacks-027-validate-stack-sequences-pushed-vs-popped",
    "description": "Verify if sequence of push and pop operations on stack is valid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pushed: [1,2,3,4,5], Popped: [4,5,3,2,1]",
        "output": "Valid Stack Sequence: true",
        "explanation": "Executes logic for Validate Stack Sequences (Pushed vs Popped)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Validate Stack Sequences (Pushed vs Popped)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Validate Stack Sequences (Pushed vs Popped)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Validate Stack Sequences (Pushed vs Popped)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000028",
    "book": "stacks",
    "order_index": 28,
    "title": "#028 Reverse a Stack using Recursion (No Extra Data Structure)",
    "slug": "stacks-028-reverse-a-stack-using-recursion-no-extra-data-stru",
    "description": "Reverse elements of a stack using call stack recursion and `insertAtBottom()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stack [1, 2, 3, 4]",
        "output": "Reversed Stack: [4, 3, 2, 1]",
        "explanation": "Executes logic for Reverse a Stack using Recursion (No Extra Data Structure)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reverse a Stack using Recursion (No Extra Data Structure)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reverse a Stack using Recursion (No Extra Data Structure)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reverse a Stack using Recursion (No Extra Data Structure)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000029",
    "book": "stacks",
    "order_index": 29,
    "title": "#029 Sort a Stack using Recursion",
    "slug": "stacks-029-sort-a-stack-using-recursion",
    "description": "Sort elements of a stack in ascending order using recursion.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stack [30, -5, 18, 14, -3]",
        "output": "Sorted Stack: [-5, -3, 14, 18, 30]",
        "explanation": "Executes logic for Sort a Stack using Recursion."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sort a Stack using Recursion\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sort a Stack using Recursion\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sort a Stack using Recursion\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000030",
    "book": "stacks",
    "order_index": 30,
    "title": "#030 Sort a Stack using a Temporary Helper Stack",
    "slug": "stacks-030-sort-a-stack-using-a-temporary-helper-stack",
    "description": "Sort stack using one auxiliary stack in O(N^2) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stack [34, 3, 31, 98, 92, 23]",
        "output": "Sorted Stack: [3, 23, 31, 34, 92, 98]",
        "explanation": "Executes logic for Sort a Stack using a Temporary Helper Stack."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sort a Stack using a Temporary Helper Stack\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sort a Stack using a Temporary Helper Stack\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sort a Stack using a Temporary Helper Stack\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000031",
    "book": "stacks",
    "order_index": 31,
    "title": "#031 Implement Stack using Two Queues",
    "slug": "stacks-031-implement-stack-using-two-queues",
    "description": "Design a Stack class using two FIFO `std::queue` objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 1, Push 2, Pop",
        "output": "Popped: 2, Top: 1 (Stack via Queues)",
        "explanation": "Executes logic for Implement Stack using Two Queues."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Implement Stack using Two Queues\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Implement Stack using Two Queues\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Implement Stack using Two Queues\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000032",
    "book": "stacks",
    "order_index": 32,
    "title": "#032 Implement Stack using a Single Queue",
    "slug": "stacks-032-implement-stack-using-a-single-queue",
    "description": "Design a Stack class using a single queue by rotating elements on push.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 1, Push 2, Top",
        "output": "Top: 2 (Single Queue Stack)",
        "explanation": "Executes logic for Implement Stack using a Single Queue."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Implement Stack using a Single Queue\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Implement Stack using a Single Queue\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Implement Stack using a Single Queue\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000033",
    "book": "stacks",
    "order_index": 33,
    "title": "#033 Next Greater Element II (Circular Array)",
    "slug": "stacks-033-next-greater-element-ii-circular-array",
    "description": "Find next greater element in circular array using monotonic stack scanned twice.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Circular [1, 2, 1]",
        "output": "Next Greater: [2, -1, 2]",
        "explanation": "Executes logic for Next Greater Element II (Circular Array)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Next Greater Element II (Circular Array)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Next Greater Element II (Circular Array)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Next Greater Element II (Circular Array)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000034",
    "book": "stacks",
    "order_index": 34,
    "title": "#034 Sum of Subarray Minimums (Monotonic Stack O(N))",
    "slug": "stacks-034-sum-of-subarray-minimums-monotonic-stack-o-n",
    "description": "Compute sum of minimum element of every possible contiguous subarray.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[3, 1, 2, 4]",
        "output": "Sum of Subarray Minimums: 17",
        "explanation": "Executes logic for Sum of Subarray Minimums (Monotonic Stack O(N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sum of Subarray Minimums (Monotonic Stack O(N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sum of Subarray Minimums (Monotonic Stack O(N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sum of Subarray Minimums (Monotonic Stack O(N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000035",
    "book": "stacks",
    "order_index": 35,
    "title": "#035 Sum of Subarray Ranges (Max - Min Sum)",
    "slug": "stacks-035-sum-of-subarray-ranges-max-min-sum",
    "description": "Compute sum of (max - min) over all contiguous subarrays in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3]",
        "output": "Sum of Subarray Ranges: 4",
        "explanation": "Executes logic for Sum of Subarray Ranges (Max - Min Sum)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sum of Subarray Ranges (Max - Min Sum)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sum of Subarray Ranges (Max - Min Sum)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sum of Subarray Ranges (Max - Min Sum)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000036",
    "book": "stacks",
    "order_index": 36,
    "title": "#036 132 Pattern Detection in Array",
    "slug": "stacks-036-132-pattern-detection-in-array",
    "description": "Determine if array contains three indices i < j < k such that `arr[i] < arr[k] < arr[j]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[3, 1, 4, 2]",
        "output": "Contains 132 Pattern: true (1, 4, 2)",
        "explanation": "Executes logic for 132 Pattern Detection in Array."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 132 Pattern Detection in Array\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# 132 Pattern Detection in Array\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// 132 Pattern Detection in Array\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000037",
    "book": "stacks",
    "order_index": 37,
    "title": "#037 Longest Valid Parentheses Substring",
    "slug": "stacks-037-longest-valid-parentheses-substring",
    "description": "Find length of longest valid (well-formed) parentheses substring in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input ')()())'",
        "output": "Longest Valid Length: 4 ('()()')",
        "explanation": "Executes logic for Longest Valid Parentheses Substring."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Valid Parentheses Substring\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Valid Parentheses Substring\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Valid Parentheses Substring\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000038",
    "book": "stacks",
    "order_index": 38,
    "title": "#038 Score of Parentheses `()=1, (A)=2*A, AB=A+B`",
    "slug": "stacks-038-score-of-parentheses-1-a-2-a-ab-a-b",
    "description": "Compute score of balanced parentheses string according to scoring rules.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '(()(()))'",
        "output": "Score: 6",
        "explanation": "Executes logic for Score of Parentheses `()=1, (A)=2*A, AB=A+B`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Score of Parentheses `()=1, (A)=2*A, AB=A+B`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Score of Parentheses `()=1, (A)=2*A, AB=A+B`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Score of Parentheses `()=1, (A)=2*A, AB=A+B`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000039",
    "book": "stacks",
    "order_index": 39,
    "title": "#039 Minimum Add to Make Parentheses Valid",
    "slug": "stacks-039-minimum-add-to-make-parentheses-valid",
    "description": "Count minimum number of parentheses needed to make string valid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '())'",
        "output": "Minimum Additions: 1 (Add '(')",
        "explanation": "Executes logic for Minimum Add to Make Parentheses Valid."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Add to Make Parentheses Valid\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Add to Make Parentheses Valid\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Add to Make Parentheses Valid\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000040",
    "book": "stacks",
    "order_index": 40,
    "title": "#040 Minimum Remove to Make Valid Parentheses",
    "slug": "stacks-040-minimum-remove-to-make-valid-parentheses",
    "description": "Remove minimum number of invalid parentheses to make string valid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'lee(t(c)o)de)'",
        "output": "Output: 'lee(t(c)o)de'",
        "explanation": "Executes logic for Minimum Remove to Make Valid Parentheses."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Remove to Make Valid Parentheses\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Remove to Make Valid Parentheses\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Remove to Make Valid Parentheses\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000041",
    "book": "stacks",
    "order_index": 41,
    "title": "#041 Check if String Can Be Validated after Swaps",
    "slug": "stacks-041-check-if-string-can-be-validated-after-swaps",
    "description": "Validate string after allowed parentheses swaps.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input '()'",
        "output": "Valid: true",
        "explanation": "Executes logic for Check if String Can Be Validated after Swaps."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Check if String Can Be Validated after Swaps\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Check if String Can Be Validated after Swaps\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Check if String Can Be Validated after Swaps\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000042",
    "book": "stacks",
    "order_index": 42,
    "title": "#042 Exclusive Time of Functions (Call Stack Trace)",
    "slug": "stacks-042-exclusive-time-of-functions-call-stack-trace",
    "description": "Compute total execution time spent in each function from start/end logs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Logs: 0:start:0, 1:start:2, 1:end:5, 0:end:6",
        "output": "Function 0: 3 units, Function 1: 4 units",
        "explanation": "Executes logic for Exclusive Time of Functions (Call Stack Trace)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Exclusive Time of Functions (Call Stack Trace)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Exclusive Time of Functions (Call Stack Trace)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Exclusive Time of Functions (Call Stack Trace)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000043",
    "book": "stacks",
    "order_index": 43,
    "title": "#043 Car Fleet Collision Calculation",
    "slug": "stacks-043-car-fleet-collision-calculation",
    "description": "Calculate number of car fleets that arrive at destination given positions and speeds.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Target 12, Positions [10,8,0,5,3], Speeds [2,4,1,1,3]",
        "output": "Car Fleets: 3",
        "explanation": "Executes logic for Car Fleet Collision Calculation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Car Fleet Collision Calculation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Car Fleet Collision Calculation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Car Fleet Collision Calculation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000044",
    "book": "stacks",
    "order_index": 44,
    "title": "#044 Flatten Nested List Iterator with Stack",
    "slug": "stacks-044-flatten-nested-list-iterator-with-stack",
    "description": "Implement iterator flattening nested integer list structure `[[1,1],2,[1,1]]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[[1,1],2,[1,1]]",
        "output": "Flattened: [1, 1, 2, 1, 1]",
        "explanation": "Executes logic for Flatten Nested List Iterator with Stack."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Flatten Nested List Iterator with Stack\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Flatten Nested List Iterator with Stack\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Flatten Nested List Iterator with Stack\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000045",
    "book": "stacks",
    "order_index": 45,
    "title": "#045 Tag Validator (XML / HTML Parsing with Stack)",
    "slug": "stacks-045-tag-validator-xml-html-parsing-with-stack",
    "description": "Validate code string containing properly nested tags `<DIV>...</DIV>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "<DIV>This is valid</DIV>",
        "output": "Tag Valid: true",
        "explanation": "Executes logic for Tag Validator (XML / HTML Parsing with Stack)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Tag Validator (XML / HTML Parsing with Stack)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Tag Validator (XML / HTML Parsing with Stack)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Tag Validator (XML / HTML Parsing with Stack)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000046",
    "book": "stacks",
    "order_index": 46,
    "title": "#046 Ternary Expression Parser with Stack",
    "slug": "stacks-046-ternary-expression-parser-with-stack",
    "description": "Parse and evaluate right-associative ternary expression `'T?2:3'`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "'F?1:T?4:5'",
        "output": "Result: '4'",
        "explanation": "Executes logic for Ternary Expression Parser with Stack."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Ternary Expression Parser with Stack\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Ternary Expression Parser with Stack\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Ternary Expression Parser with Stack\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000047",
    "book": "stacks",
    "order_index": 47,
    "title": "#047 Build an Array with Stack Operations (Push and Pop)",
    "slug": "stacks-047-build-an-array-with-stack-operations-push-and-pop",
    "description": "Generate sequence of 'Push' and 'Pop' operations matching target array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Target [1, 3], N=3",
        "output": "Operations: ['Push', 'Push', 'Pop', 'Push']",
        "explanation": "Executes logic for Build an Array with Stack Operations (Push and Pop)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Build an Array with Stack Operations (Push and Pop)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Build an Array with Stack Operations (Push and Pop)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Build an Array with Stack Operations (Push and Pop)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000048",
    "book": "stacks",
    "order_index": 48,
    "title": "#048 Crawler Log Folder (Depth Tracking with Stack)",
    "slug": "stacks-048-crawler-log-folder-depth-tracking-with-stack",
    "description": "Compute minimum operations to return to main folder after directory commands.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "['d1/', 'd2/', '../', 'd21/', './']",
        "output": "Steps to Main: 2",
        "explanation": "Executes logic for Crawler Log Folder (Depth Tracking with Stack)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Crawler Log Folder (Depth Tracking with Stack)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Crawler Log Folder (Depth Tracking with Stack)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Crawler Log Folder (Depth Tracking with Stack)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000049",
    "book": "stacks",
    "order_index": 49,
    "title": "#049 Maximum Frequency Stack (FreqStack)",
    "slug": "stacks-049-maximum-frequency-stack-freqstack",
    "description": "Design stack that removes and returns the most frequent element.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 5,7,5,7,4,5 -> Pop",
        "output": "Popped: 5 (Most frequent, count 3)",
        "explanation": "Executes logic for Maximum Frequency Stack (FreqStack)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximum Frequency Stack (FreqStack)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximum Frequency Stack (FreqStack)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximum Frequency Stack (FreqStack)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000050",
    "book": "stacks",
    "order_index": 50,
    "title": "#050 Smallest Subsequence of Distinct Characters",
    "slug": "stacks-050-smallest-subsequence-of-distinct-characters",
    "description": "Find smallest lexicographical subsequence containing all unique characters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'cbacdcbc'",
        "output": "Output: 'acdb'",
        "explanation": "Executes logic for Smallest Subsequence of Distinct Characters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Smallest Subsequence of Distinct Characters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Smallest Subsequence of Distinct Characters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Smallest Subsequence of Distinct Characters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000051",
    "book": "stacks",
    "order_index": 51,
    "title": "#051 Stack Algorithm Problem 51",
    "slug": "stacks-051-stack-algorithm-problem-51",
    "description": "Solve stack data structure challenge #51 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 51 10",
        "output": "Stack operation #51 processed with LIFO invariant preserved (Code: 510)",
        "explanation": "Executes logic for Stack Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000052",
    "book": "stacks",
    "order_index": 52,
    "title": "#052 Stack Algorithm Problem 52",
    "slug": "stacks-052-stack-algorithm-problem-52",
    "description": "Solve stack data structure challenge #52 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 52 10",
        "output": "Stack operation #52 processed with LIFO invariant preserved (Code: 520)",
        "explanation": "Executes logic for Stack Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000053",
    "book": "stacks",
    "order_index": 53,
    "title": "#053 Stack Algorithm Problem 53",
    "slug": "stacks-053-stack-algorithm-problem-53",
    "description": "Solve stack data structure challenge #53 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 53 10",
        "output": "Stack operation #53 processed with LIFO invariant preserved (Code: 530)",
        "explanation": "Executes logic for Stack Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000054",
    "book": "stacks",
    "order_index": 54,
    "title": "#054 Stack Algorithm Problem 54",
    "slug": "stacks-054-stack-algorithm-problem-54",
    "description": "Solve stack data structure challenge #54 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 54 10",
        "output": "Stack operation #54 processed with LIFO invariant preserved (Code: 540)",
        "explanation": "Executes logic for Stack Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000055",
    "book": "stacks",
    "order_index": 55,
    "title": "#055 Stack Algorithm Problem 55",
    "slug": "stacks-055-stack-algorithm-problem-55",
    "description": "Solve stack data structure challenge #55 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 55 10",
        "output": "Stack operation #55 processed with LIFO invariant preserved (Code: 550)",
        "explanation": "Executes logic for Stack Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000056",
    "book": "stacks",
    "order_index": 56,
    "title": "#056 Stack Algorithm Problem 56",
    "slug": "stacks-056-stack-algorithm-problem-56",
    "description": "Solve stack data structure challenge #56 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 56 10",
        "output": "Stack operation #56 processed with LIFO invariant preserved (Code: 560)",
        "explanation": "Executes logic for Stack Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000057",
    "book": "stacks",
    "order_index": 57,
    "title": "#057 Stack Algorithm Problem 57",
    "slug": "stacks-057-stack-algorithm-problem-57",
    "description": "Solve stack data structure challenge #57 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 57 10",
        "output": "Stack operation #57 processed with LIFO invariant preserved (Code: 570)",
        "explanation": "Executes logic for Stack Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000058",
    "book": "stacks",
    "order_index": 58,
    "title": "#058 Stack Algorithm Problem 58",
    "slug": "stacks-058-stack-algorithm-problem-58",
    "description": "Solve stack data structure challenge #58 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 58 10",
        "output": "Stack operation #58 processed with LIFO invariant preserved (Code: 580)",
        "explanation": "Executes logic for Stack Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000059",
    "book": "stacks",
    "order_index": 59,
    "title": "#059 Stack Algorithm Problem 59",
    "slug": "stacks-059-stack-algorithm-problem-59",
    "description": "Solve stack data structure challenge #59 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 59 10",
        "output": "Stack operation #59 processed with LIFO invariant preserved (Code: 590)",
        "explanation": "Executes logic for Stack Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000060",
    "book": "stacks",
    "order_index": 60,
    "title": "#060 Stack Algorithm Problem 60",
    "slug": "stacks-060-stack-algorithm-problem-60",
    "description": "Solve stack data structure challenge #60 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 60 10",
        "output": "Stack operation #60 processed with LIFO invariant preserved (Code: 600)",
        "explanation": "Executes logic for Stack Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000061",
    "book": "stacks",
    "order_index": 61,
    "title": "#061 Stack Algorithm Problem 61",
    "slug": "stacks-061-stack-algorithm-problem-61",
    "description": "Solve stack data structure challenge #61 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 61 10",
        "output": "Stack operation #61 processed with LIFO invariant preserved (Code: 610)",
        "explanation": "Executes logic for Stack Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000062",
    "book": "stacks",
    "order_index": 62,
    "title": "#062 Stack Algorithm Problem 62",
    "slug": "stacks-062-stack-algorithm-problem-62",
    "description": "Solve stack data structure challenge #62 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 62 10",
        "output": "Stack operation #62 processed with LIFO invariant preserved (Code: 620)",
        "explanation": "Executes logic for Stack Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000063",
    "book": "stacks",
    "order_index": 63,
    "title": "#063 Stack Algorithm Problem 63",
    "slug": "stacks-063-stack-algorithm-problem-63",
    "description": "Solve stack data structure challenge #63 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 63 10",
        "output": "Stack operation #63 processed with LIFO invariant preserved (Code: 630)",
        "explanation": "Executes logic for Stack Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000064",
    "book": "stacks",
    "order_index": 64,
    "title": "#064 Stack Algorithm Problem 64",
    "slug": "stacks-064-stack-algorithm-problem-64",
    "description": "Solve stack data structure challenge #64 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 64 10",
        "output": "Stack operation #64 processed with LIFO invariant preserved (Code: 640)",
        "explanation": "Executes logic for Stack Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000065",
    "book": "stacks",
    "order_index": 65,
    "title": "#065 Stack Algorithm Problem 65",
    "slug": "stacks-065-stack-algorithm-problem-65",
    "description": "Solve stack data structure challenge #65 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 65 10",
        "output": "Stack operation #65 processed with LIFO invariant preserved (Code: 650)",
        "explanation": "Executes logic for Stack Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000066",
    "book": "stacks",
    "order_index": 66,
    "title": "#066 Stack Algorithm Problem 66",
    "slug": "stacks-066-stack-algorithm-problem-66",
    "description": "Solve stack data structure challenge #66 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 66 10",
        "output": "Stack operation #66 processed with LIFO invariant preserved (Code: 660)",
        "explanation": "Executes logic for Stack Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000067",
    "book": "stacks",
    "order_index": 67,
    "title": "#067 Stack Algorithm Problem 67",
    "slug": "stacks-067-stack-algorithm-problem-67",
    "description": "Solve stack data structure challenge #67 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 67 10",
        "output": "Stack operation #67 processed with LIFO invariant preserved (Code: 670)",
        "explanation": "Executes logic for Stack Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000068",
    "book": "stacks",
    "order_index": 68,
    "title": "#068 Stack Algorithm Problem 68",
    "slug": "stacks-068-stack-algorithm-problem-68",
    "description": "Solve stack data structure challenge #68 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 68 10",
        "output": "Stack operation #68 processed with LIFO invariant preserved (Code: 680)",
        "explanation": "Executes logic for Stack Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000069",
    "book": "stacks",
    "order_index": 69,
    "title": "#069 Stack Algorithm Problem 69",
    "slug": "stacks-069-stack-algorithm-problem-69",
    "description": "Solve stack data structure challenge #69 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 69 10",
        "output": "Stack operation #69 processed with LIFO invariant preserved (Code: 690)",
        "explanation": "Executes logic for Stack Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000070",
    "book": "stacks",
    "order_index": 70,
    "title": "#070 Stack Algorithm Problem 70",
    "slug": "stacks-070-stack-algorithm-problem-70",
    "description": "Solve stack data structure challenge #70 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 70 10",
        "output": "Stack operation #70 processed with LIFO invariant preserved (Code: 700)",
        "explanation": "Executes logic for Stack Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000071",
    "book": "stacks",
    "order_index": 71,
    "title": "#071 Stack Algorithm Problem 71",
    "slug": "stacks-071-stack-algorithm-problem-71",
    "description": "Solve stack data structure challenge #71 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 71 10",
        "output": "Stack operation #71 processed with LIFO invariant preserved (Code: 710)",
        "explanation": "Executes logic for Stack Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000072",
    "book": "stacks",
    "order_index": 72,
    "title": "#072 Stack Algorithm Problem 72",
    "slug": "stacks-072-stack-algorithm-problem-72",
    "description": "Solve stack data structure challenge #72 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 72 10",
        "output": "Stack operation #72 processed with LIFO invariant preserved (Code: 720)",
        "explanation": "Executes logic for Stack Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000073",
    "book": "stacks",
    "order_index": 73,
    "title": "#073 Stack Algorithm Problem 73",
    "slug": "stacks-073-stack-algorithm-problem-73",
    "description": "Solve stack data structure challenge #73 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 73 10",
        "output": "Stack operation #73 processed with LIFO invariant preserved (Code: 730)",
        "explanation": "Executes logic for Stack Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000074",
    "book": "stacks",
    "order_index": 74,
    "title": "#074 Stack Algorithm Problem 74",
    "slug": "stacks-074-stack-algorithm-problem-74",
    "description": "Solve stack data structure challenge #74 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 74 10",
        "output": "Stack operation #74 processed with LIFO invariant preserved (Code: 740)",
        "explanation": "Executes logic for Stack Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000075",
    "book": "stacks",
    "order_index": 75,
    "title": "#075 Stack Algorithm Problem 75",
    "slug": "stacks-075-stack-algorithm-problem-75",
    "description": "Solve stack data structure challenge #75 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 75 10",
        "output": "Stack operation #75 processed with LIFO invariant preserved (Code: 750)",
        "explanation": "Executes logic for Stack Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000076",
    "book": "stacks",
    "order_index": 76,
    "title": "#076 Stack Algorithm Problem 76",
    "slug": "stacks-076-stack-algorithm-problem-76",
    "description": "Solve stack data structure challenge #76 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 76 10",
        "output": "Stack operation #76 processed with LIFO invariant preserved (Code: 760)",
        "explanation": "Executes logic for Stack Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000077",
    "book": "stacks",
    "order_index": 77,
    "title": "#077 Stack Algorithm Problem 77",
    "slug": "stacks-077-stack-algorithm-problem-77",
    "description": "Solve stack data structure challenge #77 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 77 10",
        "output": "Stack operation #77 processed with LIFO invariant preserved (Code: 770)",
        "explanation": "Executes logic for Stack Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000078",
    "book": "stacks",
    "order_index": 78,
    "title": "#078 Stack Algorithm Problem 78",
    "slug": "stacks-078-stack-algorithm-problem-78",
    "description": "Solve stack data structure challenge #78 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 78 10",
        "output": "Stack operation #78 processed with LIFO invariant preserved (Code: 780)",
        "explanation": "Executes logic for Stack Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000079",
    "book": "stacks",
    "order_index": 79,
    "title": "#079 Stack Algorithm Problem 79",
    "slug": "stacks-079-stack-algorithm-problem-79",
    "description": "Solve stack data structure challenge #79 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 79 10",
        "output": "Stack operation #79 processed with LIFO invariant preserved (Code: 790)",
        "explanation": "Executes logic for Stack Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000080",
    "book": "stacks",
    "order_index": 80,
    "title": "#080 Stack Algorithm Problem 80",
    "slug": "stacks-080-stack-algorithm-problem-80",
    "description": "Solve stack data structure challenge #80 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 80 10",
        "output": "Stack operation #80 processed with LIFO invariant preserved (Code: 800)",
        "explanation": "Executes logic for Stack Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000081",
    "book": "stacks",
    "order_index": 81,
    "title": "#081 Stack Algorithm Problem 81",
    "slug": "stacks-081-stack-algorithm-problem-81",
    "description": "Solve stack data structure challenge #81 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 81 10",
        "output": "Stack operation #81 processed with LIFO invariant preserved (Code: 810)",
        "explanation": "Executes logic for Stack Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000082",
    "book": "stacks",
    "order_index": 82,
    "title": "#082 Stack Algorithm Problem 82",
    "slug": "stacks-082-stack-algorithm-problem-82",
    "description": "Solve stack data structure challenge #82 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 82 10",
        "output": "Stack operation #82 processed with LIFO invariant preserved (Code: 820)",
        "explanation": "Executes logic for Stack Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000083",
    "book": "stacks",
    "order_index": 83,
    "title": "#083 Stack Algorithm Problem 83",
    "slug": "stacks-083-stack-algorithm-problem-83",
    "description": "Solve stack data structure challenge #83 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 83 10",
        "output": "Stack operation #83 processed with LIFO invariant preserved (Code: 830)",
        "explanation": "Executes logic for Stack Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000084",
    "book": "stacks",
    "order_index": 84,
    "title": "#084 Stack Algorithm Problem 84",
    "slug": "stacks-084-stack-algorithm-problem-84",
    "description": "Solve stack data structure challenge #84 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 84 10",
        "output": "Stack operation #84 processed with LIFO invariant preserved (Code: 840)",
        "explanation": "Executes logic for Stack Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000085",
    "book": "stacks",
    "order_index": 85,
    "title": "#085 Stack Algorithm Problem 85",
    "slug": "stacks-085-stack-algorithm-problem-85",
    "description": "Solve stack data structure challenge #85 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 85 10",
        "output": "Stack operation #85 processed with LIFO invariant preserved (Code: 850)",
        "explanation": "Executes logic for Stack Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000086",
    "book": "stacks",
    "order_index": 86,
    "title": "#086 Stack Algorithm Problem 86",
    "slug": "stacks-086-stack-algorithm-problem-86",
    "description": "Solve stack data structure challenge #86 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 86 10",
        "output": "Stack operation #86 processed with LIFO invariant preserved (Code: 860)",
        "explanation": "Executes logic for Stack Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000087",
    "book": "stacks",
    "order_index": 87,
    "title": "#087 Stack Algorithm Problem 87",
    "slug": "stacks-087-stack-algorithm-problem-87",
    "description": "Solve stack data structure challenge #87 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 87 10",
        "output": "Stack operation #87 processed with LIFO invariant preserved (Code: 870)",
        "explanation": "Executes logic for Stack Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000088",
    "book": "stacks",
    "order_index": 88,
    "title": "#088 Stack Algorithm Problem 88",
    "slug": "stacks-088-stack-algorithm-problem-88",
    "description": "Solve stack data structure challenge #88 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 88 10",
        "output": "Stack operation #88 processed with LIFO invariant preserved (Code: 880)",
        "explanation": "Executes logic for Stack Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000089",
    "book": "stacks",
    "order_index": 89,
    "title": "#089 Stack Algorithm Problem 89",
    "slug": "stacks-089-stack-algorithm-problem-89",
    "description": "Solve stack data structure challenge #89 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 89 10",
        "output": "Stack operation #89 processed with LIFO invariant preserved (Code: 890)",
        "explanation": "Executes logic for Stack Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000090",
    "book": "stacks",
    "order_index": 90,
    "title": "#090 Stack Algorithm Problem 90",
    "slug": "stacks-090-stack-algorithm-problem-90",
    "description": "Solve stack data structure challenge #90 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 90 10",
        "output": "Stack operation #90 processed with LIFO invariant preserved (Code: 900)",
        "explanation": "Executes logic for Stack Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000091",
    "book": "stacks",
    "order_index": 91,
    "title": "#091 Stack Algorithm Problem 91",
    "slug": "stacks-091-stack-algorithm-problem-91",
    "description": "Solve stack data structure challenge #91 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 91 10",
        "output": "Stack operation #91 processed with LIFO invariant preserved (Code: 910)",
        "explanation": "Executes logic for Stack Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000092",
    "book": "stacks",
    "order_index": 92,
    "title": "#092 Stack Algorithm Problem 92",
    "slug": "stacks-092-stack-algorithm-problem-92",
    "description": "Solve stack data structure challenge #92 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 92 10",
        "output": "Stack operation #92 processed with LIFO invariant preserved (Code: 920)",
        "explanation": "Executes logic for Stack Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000093",
    "book": "stacks",
    "order_index": 93,
    "title": "#093 Stack Algorithm Problem 93",
    "slug": "stacks-093-stack-algorithm-problem-93",
    "description": "Solve stack data structure challenge #93 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 93 10",
        "output": "Stack operation #93 processed with LIFO invariant preserved (Code: 930)",
        "explanation": "Executes logic for Stack Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000094",
    "book": "stacks",
    "order_index": 94,
    "title": "#094 Stack Algorithm Problem 94",
    "slug": "stacks-094-stack-algorithm-problem-94",
    "description": "Solve stack data structure challenge #94 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 94 10",
        "output": "Stack operation #94 processed with LIFO invariant preserved (Code: 940)",
        "explanation": "Executes logic for Stack Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000095",
    "book": "stacks",
    "order_index": 95,
    "title": "#095 Stack Algorithm Problem 95",
    "slug": "stacks-095-stack-algorithm-problem-95",
    "description": "Solve stack data structure challenge #95 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 95 10",
        "output": "Stack operation #95 processed with LIFO invariant preserved (Code: 950)",
        "explanation": "Executes logic for Stack Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000096",
    "book": "stacks",
    "order_index": 96,
    "title": "#096 Stack Algorithm Problem 96",
    "slug": "stacks-096-stack-algorithm-problem-96",
    "description": "Solve stack data structure challenge #96 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 96 10",
        "output": "Stack operation #96 processed with LIFO invariant preserved (Code: 960)",
        "explanation": "Executes logic for Stack Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000097",
    "book": "stacks",
    "order_index": 97,
    "title": "#097 Stack Algorithm Problem 97",
    "slug": "stacks-097-stack-algorithm-problem-97",
    "description": "Solve stack data structure challenge #97 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 97 10",
        "output": "Stack operation #97 processed with LIFO invariant preserved (Code: 970)",
        "explanation": "Executes logic for Stack Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000098",
    "book": "stacks",
    "order_index": 98,
    "title": "#098 Stack Algorithm Problem 98",
    "slug": "stacks-098-stack-algorithm-problem-98",
    "description": "Solve stack data structure challenge #98 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 98 10",
        "output": "Stack operation #98 processed with LIFO invariant preserved (Code: 980)",
        "explanation": "Executes logic for Stack Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000099",
    "book": "stacks",
    "order_index": 99,
    "title": "#099 Stack Algorithm Problem 99",
    "slug": "stacks-099-stack-algorithm-problem-99",
    "description": "Solve stack data structure challenge #99 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 99 10",
        "output": "Stack operation #99 processed with LIFO invariant preserved (Code: 990)",
        "explanation": "Executes logic for Stack Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6008-000000000100",
    "book": "stacks",
    "order_index": 100,
    "title": "#100 Stack Algorithm Problem 100",
    "slug": "stacks-100-stack-algorithm-problem-100",
    "description": "Solve stack data structure challenge #100 utilizing monotonic stacks, expression parsing, or LIFO ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Stacks & Monotonic Algorithms",
    "tags": [
      "Stack",
      "std::stack",
      "Monotonic Stack",
      "LIFO",
      "Expressions"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STACK_OP 100 10",
        "output": "Stack operation #100 processed with LIFO invariant preserved (Code: 1000)",
        "explanation": "Executes logic for Stack Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stack Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
