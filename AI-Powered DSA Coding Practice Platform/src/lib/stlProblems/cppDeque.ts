import { Problem } from '../../types/problem';

export const CPP_DEQUE_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6010-000000000001",
    "book": "cppdeque",
    "order_index": 1,
    "title": "#001 Deque Double-Ended Operations (`push_front`, `push_back`, `pop_front`, `pop_back`)",
    "slug": "cppdeque-001-deque-double-ended-operations-push-front-push-back",
    "description": "Demonstrate constant time front and back insertion and deletion on `std::deque`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PushFront 10, PushBack 20 -> PopFront",
        "output": "Popped: 10, Front: 20 (Size: 1)",
        "explanation": "Executes logic for Deque Double-Ended Operations (`push_front`, `push_back`, `pop_front`, `pop_back`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Double-Ended Operations (`push_front`, `push_back`, `pop_front`, `pop_back`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Double-Ended Operations (`push_front`, `push_back`, `pop_front`, `pop_back`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Double-Ended Operations (`push_front`, `push_back`, `pop_front`, `pop_back`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000002",
    "book": "cppdeque",
    "order_index": 2,
    "title": "#002 Deque Random Access (`operator[]` and `at()`)",
    "slug": "cppdeque-002-deque-random-access-operator-and-at",
    "description": "Access elements in `std::deque` by index in O(1) time without pointer traversal.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Deque [10, 20, 30, 40], Index 2",
        "output": "Deque[2] = 30",
        "explanation": "Executes logic for Deque Random Access (`operator[]` and `at()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Random Access (`operator[]` and `at()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Random Access (`operator[]` and `at()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Random Access (`operator[]` and `at()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000003",
    "book": "cppdeque",
    "order_index": 3,
    "title": "#003 Sliding Window Maximum (Optimal Monotonic Deque O(N))",
    "slug": "cppdeque-003-sliding-window-maximum-optimal-monotonic-deque-o-n",
    "description": "Compute maximum in every window of size K keeping indices in monotonic decreasing deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Array [1, 3, -1, -3, 5, 3, 6, 7], k=3",
        "output": "Window Maxima: [3, 3, 5, 5, 6, 7]",
        "explanation": "Executes logic for Sliding Window Maximum (Optimal Monotonic Deque O(N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window Maximum (Optimal Monotonic Deque O(N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window Maximum (Optimal Monotonic Deque O(N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window Maximum (Optimal Monotonic Deque O(N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000004",
    "book": "cppdeque",
    "order_index": 4,
    "title": "#004 Sliding Window Minimum using Monotonic Deque",
    "slug": "cppdeque-004-sliding-window-minimum-using-monotonic-deque",
    "description": "Compute minimum in every window of size K using monotonic increasing deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Array [4, 2, 12, 3, -1, 5], k=3",
        "output": "Window Minima: [2, 2, -1, -1]",
        "explanation": "Executes logic for Sliding Window Minimum using Monotonic Deque."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window Minimum using Monotonic Deque\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window Minimum using Monotonic Deque\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window Minimum using Monotonic Deque\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000005",
    "book": "cppdeque",
    "order_index": 5,
    "title": "#005 Palindrome Checking with std::deque",
    "slug": "cppdeque-005-palindrome-checking-with-std-deque",
    "description": "Verify whether string is a palindrome by comparing and popping from front and back.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check 'racecar'",
        "output": "Is Palindrome: true (Matched front and back)",
        "explanation": "Executes logic for Palindrome Checking with std::deque."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Palindrome Checking with std::deque\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Palindrome Checking with std::deque\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Palindrome Checking with std::deque\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000006",
    "book": "cppdeque",
    "order_index": 6,
    "title": "#006 Deque Memory Architecture: Chunked Map Buffer",
    "slug": "cppdeque-006-deque-memory-architecture-chunked-map-buffer",
    "description": "Demonstrate that `std::deque` allocates fixed-size page chunks, avoiding huge contiguous reallocations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Allocate 100k items in deque",
        "output": "Deque allocated across chunk pages (0 vector realloc copy penalty)",
        "explanation": "Executes logic for Deque Memory Architecture: Chunked Map Buffer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Memory Architecture: Chunked Map Buffer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Memory Architecture: Chunked Map Buffer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Memory Architecture: Chunked Map Buffer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000007",
    "book": "cppdeque",
    "order_index": 7,
    "title": "#007 Shortest Subarray with Sum at Least K (Monotonic Deque)",
    "slug": "cppdeque-007-shortest-subarray-with-sum-at-least-k-monotonic-de",
    "description": "Find length of shortest non-empty subarray with sum >= K in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [2, -1, 2], k=3",
        "output": "Shortest Subarray Length: 3",
        "explanation": "Executes logic for Shortest Subarray with Sum at Least K (Monotonic Deque)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shortest Subarray with Sum at Least K (Monotonic Deque)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shortest Subarray with Sum at Least K (Monotonic Deque)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shortest Subarray with Sum at Least K (Monotonic Deque)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000008",
    "book": "cppdeque",
    "order_index": 8,
    "title": "#008 Longest Continuous Subarray with Absolute Diff <= Limit",
    "slug": "cppdeque-008-longest-continuous-subarray-with-absolute-diff-lim",
    "description": "Find length of longest subarray where max - min <= limit using two monotonic deques.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[8, 2, 4, 7], limit=4",
        "output": "Longest Subarray Length: 2 ([2, 4] or [4, 7])",
        "explanation": "Executes logic for Longest Continuous Subarray with Absolute Diff <= Limit."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Continuous Subarray with Absolute Diff <= Limit\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Continuous Subarray with Absolute Diff <= Limit\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Continuous Subarray with Absolute Diff <= Limit\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000009",
    "book": "cppdeque",
    "order_index": 9,
    "title": "#009 Jump Game VI (Monotonic Deque DP Optimization)",
    "slug": "cppdeque-009-jump-game-vi-monotonic-deque-dp-optimization",
    "description": "Find maximum score reaching last index with jump size <= K in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Scores [1, -1, -2, 4, -7, 3], k=2",
        "output": "Max Score: 7",
        "explanation": "Executes logic for Jump Game VI (Monotonic Deque DP Optimization)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Jump Game VI (Monotonic Deque DP Optimization)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Jump Game VI (Monotonic Deque DP Optimization)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Jump Game VI (Monotonic Deque DP Optimization)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000010",
    "book": "cppdeque",
    "order_index": 10,
    "title": "#010 Constrained Subsequence Sum (Monotonic Deque DP)",
    "slug": "cppdeque-010-constrained-subsequence-sum-monotonic-deque-dp",
    "description": "Find maximum sum of non-empty subsequence where index gaps <= K in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [10, 2, -10, 5, 20], k=2",
        "output": "Max Subsequence Sum: 37",
        "explanation": "Executes logic for Constrained Subsequence Sum (Monotonic Deque DP)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Constrained Subsequence Sum (Monotonic Deque DP)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constrained Subsequence Sum (Monotonic Deque DP)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constrained Subsequence Sum (Monotonic Deque DP)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000011",
    "book": "cppdeque",
    "order_index": 11,
    "title": "#011 Design Circular Deque (`MyCircularDeque`)",
    "slug": "cppdeque-011-design-circular-deque-mycirculardeque",
    "description": "Implement double-ended circular buffer supporting insert/delete at both ends with fixed size.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Capacity 3: InsertFront 1, InsertLast 2 -> DeleteFront",
        "output": "Front: 2, Rear: 2",
        "explanation": "Executes logic for Design Circular Deque (`MyCircularDeque`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Design Circular Deque (`MyCircularDeque`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Design Circular Deque (`MyCircularDeque`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Design Circular Deque (`MyCircularDeque`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000012",
    "book": "cppdeque",
    "order_index": 12,
    "title": "#012 Maximum of All Subarrays of Size K",
    "slug": "cppdeque-012-maximum-of-all-subarrays-of-size-k",
    "description": "Find maximum for each contiguous sub-segment of length K in array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 1, 4, 5, 2, 3, 6], k=3",
        "output": "Maximums: [3, 3, 4, 5, 5, 5, 6]",
        "explanation": "Executes logic for Maximum of All Subarrays of Size K."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximum of All Subarrays of Size K\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximum of All Subarrays of Size K\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximum of All Subarrays of Size K\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000013",
    "book": "cppdeque",
    "order_index": 13,
    "title": "#013 First Negative Integer in Every Window using Deque",
    "slug": "cppdeque-013-first-negative-integer-in-every-window-using-deque",
    "description": "Store indices of negative numbers in deque to find first negative in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[12, -1, -7, 8, -15, 30, 16, 28], k=3",
        "output": "Output: [-1, -1, -7, -15, -15, 0]",
        "explanation": "Executes logic for First Negative Integer in Every Window using Deque."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// First Negative Integer in Every Window using Deque\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# First Negative Integer in Every Window using Deque\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// First Negative Integer in Every Window using Deque\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000014",
    "book": "cppdeque",
    "order_index": 14,
    "title": "#014 Deque Reversal and Rotations",
    "slug": "cppdeque-014-deque-reversal-and-rotations",
    "description": "Rotate deque elements left or right by popping from one end and pushing to the other.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rotate [1, 2, 3, 4, 5] right by 2",
        "output": "Rotated: [4, 5, 1, 2, 3]",
        "explanation": "Executes logic for Deque Reversal and Rotations."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Reversal and Rotations\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Reversal and Rotations\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Reversal and Rotations\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000015",
    "book": "cppdeque",
    "order_index": 15,
    "title": "#015 Simulating Card Shuffling with Deque",
    "slug": "cppdeque-015-simulating-card-shuffling-with-deque",
    "description": "Model deck where top card is placed down and next card is moved to bottom.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Deck [1, 2, 3, 4]",
        "output": "Drawn: 1, Moved 2 to bottom, Drawn: 3, Drawn: 4, Drawn: 2",
        "explanation": "Executes logic for Simulating Card Shuffling with Deque."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Simulating Card Shuffling with Deque\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Simulating Card Shuffling with Deque\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Simulating Card Shuffling with Deque\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000016",
    "book": "cppdeque",
    "order_index": 16,
    "title": "#016 Undo / Redo Buffer with Bounded Deque",
    "slug": "cppdeque-016-undo-redo-buffer-with-bounded-deque",
    "description": "Maintain max 10 undo actions by popping oldest from back when front exceeds capacity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 12 actions (Limit 10)",
        "output": "Oldest 2 actions evicted from back: Retained 10 actions",
        "explanation": "Executes logic for Undo / Redo Buffer with Bounded Deque."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Undo / Redo Buffer with Bounded Deque\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Undo / Redo Buffer with Bounded Deque\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Undo / Redo Buffer with Bounded Deque\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000017",
    "book": "cppdeque",
    "order_index": 17,
    "title": "#017 Deque Iterator Invalidation Rules",
    "slug": "cppdeque-017-deque-iterator-invalidation-rules",
    "description": "Demonstrate that inserting at front/back invalidates all iterators but preserves references to elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "InsertFront on Deque",
        "output": "References to existing elements preserved",
        "explanation": "Executes logic for Deque Iterator Invalidation Rules."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Iterator Invalidation Rules\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Iterator Invalidation Rules\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Iterator Invalidation Rules\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000018",
    "book": "cppdeque",
    "order_index": 18,
    "title": "#018 Sliding Window First Unique Character using Deque",
    "slug": "cppdeque-018-sliding-window-first-unique-character-using-deque",
    "description": "Track candidate unique characters in window of stream using deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stream 'aabcde'",
        "output": "First unique tracked dynamically",
        "explanation": "Executes logic for Sliding Window First Unique Character using Deque."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window First Unique Character using Deque\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window First Unique Character using Deque\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window First Unique Character using Deque\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000019",
    "book": "cppdeque",
    "order_index": 19,
    "title": "#019 Deque vs Vector Performance Benchmark for Push Front",
    "slug": "cppdeque-019-deque-vs-vector-performance-benchmark-for-push-fro",
    "description": "Benchmark 100,000 `push_front()` operations comparing O(1) deque vs O(N) vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100k push_front",
        "output": "Deque: 3ms (O(1)) | Vector: 450ms (O(N) shifts)",
        "explanation": "Executes logic for Deque vs Vector Performance Benchmark for Push Front."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque vs Vector Performance Benchmark for Push Front\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque vs Vector Performance Benchmark for Push Front\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque vs Vector Performance Benchmark for Push Front\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000020",
    "book": "cppdeque",
    "order_index": 20,
    "title": "#020 Deque vs List Performance Benchmark for Random Access",
    "slug": "cppdeque-020-deque-vs-list-performance-benchmark-for-random-acc",
    "description": "Benchmark random index lookup comparing O(1) deque vs O(N) list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "100k random lookups",
        "output": "Deque: 1ms (O(1)) | List: 320ms (O(N) traversal)",
        "explanation": "Executes logic for Deque vs List Performance Benchmark for Random Access."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque vs List Performance Benchmark for Random Access\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque vs List Performance Benchmark for Random Access\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque vs List Performance Benchmark for Random Access\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000021",
    "book": "cppdeque",
    "order_index": 21,
    "title": "#021 Max Sum of Contiguous Subarray of Size Between L and R",
    "slug": "cppdeque-021-max-sum-of-contiguous-subarray-of-size-between-l-a",
    "description": "Find max subarray sum with length bounded between L and R using prefix sums + deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, -3, 2, 4, -1, 5], L=2, R=4",
        "output": "Max Bounded Subarray Sum: 10 ([2, 4, -1, 5])",
        "explanation": "Executes logic for Max Sum of Contiguous Subarray of Size Between L and R."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Max Sum of Contiguous Subarray of Size Between L and R\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Max Sum of Contiguous Subarray of Size Between L and R\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Max Sum of Contiguous Subarray of Size Between L and R\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000022",
    "book": "cppdeque",
    "order_index": 22,
    "title": "#022 Continuous Subarray with Min-Max Difference Threshold",
    "slug": "cppdeque-022-continuous-subarray-with-min-max-difference-thresh",
    "description": "Count subarrays where max(sub) - min(sub) <= threshold in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 3, 6], threshold=2",
        "output": "Subarrays count: 4 ([1], [3], [6], [1,3])",
        "explanation": "Executes logic for Continuous Subarray with Min-Max Difference Threshold."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Continuous Subarray with Min-Max Difference Threshold\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Continuous Subarray with Min-Max Difference Threshold\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Continuous Subarray with Min-Max Difference Threshold\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000023",
    "book": "cppdeque",
    "order_index": 23,
    "title": "#023 Sliding Window Product of Elements",
    "slug": "cppdeque-023-sliding-window-product-of-elements",
    "description": "Compute product in window of size K handling zeros with deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 0, 4, 5], k=2",
        "output": "Products: [2, 0, 0, 20]",
        "explanation": "Executes logic for Sliding Window Product of Elements."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window Product of Elements\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window Product of Elements\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window Product of Elements\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000024",
    "book": "cppdeque",
    "order_index": 24,
    "title": "#024 Deque as Bounded Priority Task Queue",
    "slug": "cppdeque-024-deque-as-bounded-priority-task-queue",
    "description": "Manage high-priority tasks pushed to front and regular tasks pushed to back.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PushFront Urgent, PushBack Normal",
        "output": "Processed Urgent task first, then Normal task",
        "explanation": "Executes logic for Deque as Bounded Priority Task Queue."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque as Bounded Priority Task Queue\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque as Bounded Priority Task Queue\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque as Bounded Priority Task Queue\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000025",
    "book": "cppdeque",
    "order_index": 25,
    "title": "#025 Multi-Channel Audio Buffer Mixer using Deques",
    "slug": "cppdeque-025-multi-channel-audio-buffer-mixer-using-deques",
    "description": "Buffer audio frames from multiple streams and pop synchronized playback frames.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Mix 2 audio streams",
        "output": "Synchronized audio frames popped from front",
        "explanation": "Executes logic for Multi-Channel Audio Buffer Mixer using Deques."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Multi-Channel Audio Buffer Mixer using Deques\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multi-Channel Audio Buffer Mixer using Deques\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multi-Channel Audio Buffer Mixer using Deques\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000026",
    "book": "cppdeque",
    "order_index": 26,
    "title": "#026 Deque-Based Monotonic Queue Class Design",
    "slug": "cppdeque-026-deque-based-monotonic-queue-class-design",
    "description": "Encapsulate clean `MonotonicQueue` class with `push(val)`, `pop(val)`, `max()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 3, 1, 4 -> Max -> Pop 3 -> Max",
        "output": "Max: 4 -> Popped 3 -> Max: 4",
        "explanation": "Executes logic for Deque-Based Monotonic Queue Class Design."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque-Based Monotonic Queue Class Design\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque-Based Monotonic Queue Class Design\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque-Based Monotonic Queue Class Design\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000027",
    "book": "cppdeque",
    "order_index": 27,
    "title": "#027 Validating Palindromic Deque Streams",
    "slug": "cppdeque-027-validating-palindromic-deque-streams",
    "description": "Verify stream of tokens forms palindrome when read from both directions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tokens 'madam'",
        "output": "Palindrome verified: true",
        "explanation": "Executes logic for Validating Palindromic Deque Streams."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Validating Palindromic Deque Streams\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Validating Palindromic Deque Streams\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Validating Palindromic Deque Streams\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000028",
    "book": "cppdeque",
    "order_index": 28,
    "title": "#028 Simulating Elevator Queue with Priority Front Insertion",
    "slug": "cppdeque-028-simulating-elevator-queue-with-priority-front-inse",
    "description": "VIP requests inserted at front of elevator deque, regular at back.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VIP floor 10, Regular floor 3",
        "output": "Elevator visits Floor 10 first, then Floor 3",
        "explanation": "Executes logic for Simulating Elevator Queue with Priority Front Insertion."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Simulating Elevator Queue with Priority Front Insertion\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Simulating Elevator Queue with Priority Front Insertion\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Simulating Elevator Queue with Priority Front Insertion\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000029",
    "book": "cppdeque",
    "order_index": 29,
    "title": "#029 Find Longest Subarray where Every Element Appears At Least K Times",
    "slug": "cppdeque-029-find-longest-subarray-where-every-element-appears",
    "description": "Find longest window satisfying frequency constraint using sliding deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "String 'aaabbb', k=3",
        "output": "Longest Length: 6",
        "explanation": "Executes logic for Find Longest Subarray where Every Element Appears At Least K Times."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find Longest Subarray where Every Element Appears At Least K Times\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find Longest Subarray where Every Element Appears At Least K Times\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find Longest Subarray where Every Element Appears At Least K Times\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000030",
    "book": "cppdeque",
    "order_index": 30,
    "title": "#030 Number of Subarrays with Bounded Maximum",
    "slug": "cppdeque-030-number-of-subarrays-with-bounded-maximum",
    "description": "Count subarrays where maximum element is between L and R in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [2, 1, 4, 3], L=2, R=3",
        "output": "Count: 3 ([2], [2, 1], [3])",
        "explanation": "Executes logic for Number of Subarrays with Bounded Maximum."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Number of Subarrays with Bounded Maximum\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Number of Subarrays with Bounded Maximum\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Number of Subarrays with Bounded Maximum\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000031",
    "book": "cppdeque",
    "order_index": 31,
    "title": "#031 Shortest Path in 0-1 Weighted Graph (0-1 BFS with Deque)",
    "slug": "cppdeque-031-shortest-path-in-0-1-weighted-graph-0-1-bfs-with-d",
    "description": "Compute shortest path where edge weights are either 0 or 1 in O(V + E) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Edges with weights 0 and 1",
        "output": "0-1 BFS: Weight 0 pushed to front, Weight 1 pushed to back (Cost: 3)",
        "explanation": "Executes logic for Shortest Path in 0-1 Weighted Graph (0-1 BFS with Deque)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shortest Path in 0-1 Weighted Graph (0-1 BFS with Deque)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shortest Path in 0-1 Weighted Graph (0-1 BFS with Deque)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shortest Path in 0-1 Weighted Graph (0-1 BFS with Deque)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000032",
    "book": "cppdeque",
    "order_index": 32,
    "title": "#032 Finding Min Operations to Reduce Array Elements to Zero",
    "slug": "cppdeque-032-finding-min-operations-to-reduce-array-elements-to",
    "description": "Greedily reduce array using deque window boundaries.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [3, 1, 2, 1]",
        "output": "Min Operations: 3",
        "explanation": "Executes logic for Finding Min Operations to Reduce Array Elements to Zero."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Min Operations to Reduce Array Elements to Zero\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Min Operations to Reduce Array Elements to Zero\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Min Operations to Reduce Array Elements to Zero\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000033",
    "book": "cppdeque",
    "order_index": 33,
    "title": "#033 Sliding Window Median using Two Multisets / Deques",
    "slug": "cppdeque-033-sliding-window-median-using-two-multisets-deques",
    "description": "Compute median of sliding window of size K in O(N log K).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1,3,-1,-3,5,3,6,7], k=3",
        "output": "Sliding Medians: [1.0, -1.0, -1.0, 3.0, 5.0, 6.0]",
        "explanation": "Executes logic for Sliding Window Median using Two Multisets / Deques."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window Median using Two Multisets / Deques\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window Median using Two Multisets / Deques\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window Median using Two Multisets / Deques\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000034",
    "book": "cppdeque",
    "order_index": 34,
    "title": "#034 Subarray Sum Divisible by K using Deque Prefix Tracking",
    "slug": "cppdeque-034-subarray-sum-divisible-by-k-using-deque-prefix-tra",
    "description": "Count subarrays whose sum is divisible by K in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [4, 5, 0, -2, -3, 1], k=5",
        "output": "Subarrays Count: 7",
        "explanation": "Executes logic for Subarray Sum Divisible by K using Deque Prefix Tracking."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Subarray Sum Divisible by K using Deque Prefix Tracking\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subarray Sum Divisible by K using Deque Prefix Tracking\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subarray Sum Divisible by K using Deque Prefix Tracking\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000035",
    "book": "cppdeque",
    "order_index": 35,
    "title": "#035 Finding Longest Balanced Substring of 0s and 1s",
    "slug": "cppdeque-035-finding-longest-balanced-substring-of-0s-and-1s",
    "description": "Find maximum length contiguous subsegment with equal 0s and 1s.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[0, 1, 0, 1, 1, 0, 0]",
        "output": "Max Balanced Length: 6",
        "explanation": "Executes logic for Finding Longest Balanced Substring of 0s and 1s."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Longest Balanced Substring of 0s and 1s\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Longest Balanced Substring of 0s and 1s\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Longest Balanced Substring of 0s and 1s\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000036",
    "book": "cppdeque",
    "order_index": 36,
    "title": "#036 Traversing Binary Tree in Boundary Order with Deque",
    "slug": "cppdeque-036-traversing-binary-tree-in-boundary-order-with-dequ",
    "description": "Collect boundary nodes (left boundary, leaves, right boundary reversed) using deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Binary tree with 7 nodes",
        "output": "Boundary Traversal: [1, 2, 4, 5, 6, 7, 3]",
        "explanation": "Executes logic for Traversing Binary Tree in Boundary Order with Deque."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Traversing Binary Tree in Boundary Order with Deque\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Traversing Binary Tree in Boundary Order with Deque\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Traversing Binary Tree in Boundary Order with Deque\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000037",
    "book": "cppdeque",
    "order_index": 37,
    "title": "#037 Simulating Train Car Shunting Yard with Deques",
    "slug": "cppdeque-037-simulating-train-car-shunting-yard-with-deques",
    "description": "Model train cars shunted onto tracks using double-ended operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cars [C1, C2, C3]",
        "output": "Cars reordered via shunting deque: [C3, C1, C2]",
        "explanation": "Executes logic for Simulating Train Car Shunting Yard with Deques."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Simulating Train Car Shunting Yard with Deques\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Simulating Train Car Shunting Yard with Deques\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Simulating Train Car Shunting Yard with Deques\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000038",
    "book": "cppdeque",
    "order_index": 38,
    "title": "#038 Sliding Window Maximum Score of Good Subarray",
    "slug": "cppdeque-038-sliding-window-maximum-score-of-good-subarray",
    "description": "Maximize `min(subarray) * length` where subarray contains index K in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [1, 4, 3, 7, 4, 5], k=3",
        "output": "Max Score: 15 (Subarray [4, 3, 7, 4, 5], min 3 * 5 = 15)",
        "explanation": "Executes logic for Sliding Window Maximum Score of Good Subarray."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window Maximum Score of Good Subarray\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window Maximum Score of Good Subarray\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window Maximum Score of Good Subarray\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000039",
    "book": "cppdeque",
    "order_index": 39,
    "title": "#039 Maximum Points You Can Obtain from Cards (Front/Back Deque)",
    "slug": "cppdeque-039-maximum-points-you-can-obtain-from-cards-front-bac",
    "description": "Pick K cards from either beginning or end of row to maximize total points.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cards [1, 2, 3, 4, 5, 6, 1], k=3",
        "output": "Max Points: 12 (Cards 5, 6, 1)",
        "explanation": "Executes logic for Maximum Points You Can Obtain from Cards (Front/Back Deque)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximum Points You Can Obtain from Cards (Front/Back Deque)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximum Points You Can Obtain from Cards (Front/Back Deque)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximum Points You Can Obtain from Cards (Front/Back Deque)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000040",
    "book": "cppdeque",
    "order_index": 40,
    "title": "#040 Moving Average from Data Stream using Deque (`MovingAverage`)",
    "slug": "cppdeque-040-moving-average-from-data-stream-using-deque-moving",
    "description": "Compute average of last K numbers in stream using sliding deque.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stream 1, 10, 3, 5 with k=3",
        "output": "Moving Averages: 1.0, 5.5, 4.67, 6.0",
        "explanation": "Executes logic for Moving Average from Data Stream using Deque (`MovingAverage`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Moving Average from Data Stream using Deque (`MovingAverage`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Moving Average from Data Stream using Deque (`MovingAverage`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Moving Average from Data Stream using Deque (`MovingAverage`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000041",
    "book": "cppdeque",
    "order_index": 41,
    "title": "#041 Maximum Sum Circular Subarray (Kadane on Deque)",
    "slug": "cppdeque-041-maximum-sum-circular-subarray-kadane-on-deque",
    "description": "Find maximum subarray sum allowing wrap-around from end to start.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[5, -3, 5]",
        "output": "Max Circular Sum: 10 (5 + 5 wrap-around)",
        "explanation": "Executes logic for Maximum Sum Circular Subarray (Kadane on Deque)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximum Sum Circular Subarray (Kadane on Deque)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximum Sum Circular Subarray (Kadane on Deque)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximum Sum Circular Subarray (Kadane on Deque)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000042",
    "book": "cppdeque",
    "order_index": 42,
    "title": "#042 Deque of Structs for Game Frame Interpolation",
    "slug": "cppdeque-042-deque-of-structs-for-game-frame-interpolation",
    "description": "Buffer last N physics game states to interpolate render positions between ticks.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Physics frames at t=10ms, t=20ms",
        "output": "Interpolated Render Position: (x=15.0, y=25.0)",
        "explanation": "Executes logic for Deque of Structs for Game Frame Interpolation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque of Structs for Game Frame Interpolation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque of Structs for Game Frame Interpolation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque of Structs for Game Frame Interpolation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000043",
    "book": "cppdeque",
    "order_index": 43,
    "title": "#043 Find All Anagrams in a String (Fixed Sliding Window Deque)",
    "slug": "cppdeque-043-find-all-anagrams-in-a-string-fixed-sliding-window",
    "description": "Find all start indices of p's anagrams in string s in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s='cbaebabacd', p='abc'",
        "output": "Anagram Start Indices: [0, 6]",
        "explanation": "Executes logic for Find All Anagrams in a String (Fixed Sliding Window Deque)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find All Anagrams in a String (Fixed Sliding Window Deque)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find All Anagrams in a String (Fixed Sliding Window Deque)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find All Anagrams in a String (Fixed Sliding Window Deque)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000044",
    "book": "cppdeque",
    "order_index": 44,
    "title": "#044 Permutation in String (Sliding Window Inclusion)",
    "slug": "cppdeque-044-permutation-in-string-sliding-window-inclusion",
    "description": "Determine if string s2 contains a permutation of string s1 in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s1='ab', s2='eidbaooo'",
        "output": "Contains Permutation: true (at index 3)",
        "explanation": "Executes logic for Permutation in String (Sliding Window Inclusion)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Permutation in String (Sliding Window Inclusion)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Permutation in String (Sliding Window Inclusion)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Permutation in String (Sliding Window Inclusion)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000045",
    "book": "cppdeque",
    "order_index": 45,
    "title": "#045 Longest Substring Without Repeating Characters (Sliding Window Deque)",
    "slug": "cppdeque-045-longest-substring-without-repeating-characters-sli",
    "description": "Find length of longest substring without duplicate characters in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s='abcabcbb'",
        "output": "Longest Substring Length: 3 ('abc')",
        "explanation": "Executes logic for Longest Substring Without Repeating Characters (Sliding Window Deque)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Substring Without Repeating Characters (Sliding Window Deque)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Substring Without Repeating Characters (Sliding Window Deque)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Substring Without Repeating Characters (Sliding Window Deque)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000046",
    "book": "cppdeque",
    "order_index": 46,
    "title": "#046 Longest Repeating Character Replacement",
    "slug": "cppdeque-046-longest-repeating-character-replacement",
    "description": "Find length of longest substring with same letter after at most K replacements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s='ABAB', k=2",
        "output": "Max Length: 4 ('AAAA')",
        "explanation": "Executes logic for Longest Repeating Character Replacement."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Repeating Character Replacement\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Repeating Character Replacement\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Repeating Character Replacement\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000047",
    "book": "cppdeque",
    "order_index": 47,
    "title": "#047 Minimum Window Substring (Two Pointers + Deque)",
    "slug": "cppdeque-047-minimum-window-substring-two-pointers-deque",
    "description": "Find minimum window in S containing all characters of T in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "S='ADOBECODEBANC', T='ABC'",
        "output": "Minimum Window: 'BANC'",
        "explanation": "Executes logic for Minimum Window Substring (Two Pointers + Deque)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Window Substring (Two Pointers + Deque)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Window Substring (Two Pointers + Deque)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Window Substring (Two Pointers + Deque)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000048",
    "book": "cppdeque",
    "order_index": 48,
    "title": "#048 Minimum Size Subarray Sum (Target Sum >= S)",
    "slug": "cppdeque-048-minimum-size-subarray-sum-target-sum-s",
    "description": "Find minimal length of contiguous subarray with sum >= target in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "target=7, nums=[2,3,1,2,4,3]",
        "output": "Minimal Length: 2 ([4, 3])",
        "explanation": "Executes logic for Minimum Size Subarray Sum (Target Sum >= S)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Size Subarray Sum (Target Sum >= S)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Size Subarray Sum (Target Sum >= S)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Size Subarray Sum (Target Sum >= S)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000049",
    "book": "cppdeque",
    "order_index": 49,
    "title": "#049 Grumpy Bookstore Owner (Max Satisfaction Window)",
    "slug": "cppdeque-049-grumpy-bookstore-owner-max-satisfaction-window",
    "description": "Maximize customer satisfaction by applying grumpy secret technique for K minutes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Customers [1,0,1,2,1,1,7,5], Grumpy [0,1,0,1,0,1,0,1], minutes=3",
        "output": "Max Satisfaction: 16",
        "explanation": "Executes logic for Grumpy Bookstore Owner (Max Satisfaction Window)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Grumpy Bookstore Owner (Max Satisfaction Window)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Grumpy Bookstore Owner (Max Satisfaction Window)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Grumpy Bookstore Owner (Max Satisfaction Window)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000050",
    "book": "cppdeque",
    "order_index": 50,
    "title": "#050 Maximum Erasure Value (Max Unique Subarray Sum)",
    "slug": "cppdeque-050-maximum-erasure-value-max-unique-subarray-sum",
    "description": "Find maximum sum of subarray containing unique elements only.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [4, 2, 4, 5, 6]",
        "output": "Max Unique Sum: 17 ([2, 4, 5, 6])",
        "explanation": "Executes logic for Maximum Erasure Value (Max Unique Subarray Sum)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximum Erasure Value (Max Unique Subarray Sum)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximum Erasure Value (Max Unique Subarray Sum)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximum Erasure Value (Max Unique Subarray Sum)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000051",
    "book": "cppdeque",
    "order_index": 51,
    "title": "#051 Deque Algorithm Problem 51",
    "slug": "cppdeque-051-deque-algorithm-problem-51",
    "description": "Solve double-ended queue problem #51 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 51 10",
        "output": "Deque operation #51 completed with double-ended access verified (Code: 510)",
        "explanation": "Executes logic for Deque Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000052",
    "book": "cppdeque",
    "order_index": 52,
    "title": "#052 Deque Algorithm Problem 52",
    "slug": "cppdeque-052-deque-algorithm-problem-52",
    "description": "Solve double-ended queue problem #52 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 52 10",
        "output": "Deque operation #52 completed with double-ended access verified (Code: 520)",
        "explanation": "Executes logic for Deque Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000053",
    "book": "cppdeque",
    "order_index": 53,
    "title": "#053 Deque Algorithm Problem 53",
    "slug": "cppdeque-053-deque-algorithm-problem-53",
    "description": "Solve double-ended queue problem #53 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 53 10",
        "output": "Deque operation #53 completed with double-ended access verified (Code: 530)",
        "explanation": "Executes logic for Deque Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000054",
    "book": "cppdeque",
    "order_index": 54,
    "title": "#054 Deque Algorithm Problem 54",
    "slug": "cppdeque-054-deque-algorithm-problem-54",
    "description": "Solve double-ended queue problem #54 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 54 10",
        "output": "Deque operation #54 completed with double-ended access verified (Code: 540)",
        "explanation": "Executes logic for Deque Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000055",
    "book": "cppdeque",
    "order_index": 55,
    "title": "#055 Deque Algorithm Problem 55",
    "slug": "cppdeque-055-deque-algorithm-problem-55",
    "description": "Solve double-ended queue problem #55 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 55 10",
        "output": "Deque operation #55 completed with double-ended access verified (Code: 550)",
        "explanation": "Executes logic for Deque Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000056",
    "book": "cppdeque",
    "order_index": 56,
    "title": "#056 Deque Algorithm Problem 56",
    "slug": "cppdeque-056-deque-algorithm-problem-56",
    "description": "Solve double-ended queue problem #56 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 56 10",
        "output": "Deque operation #56 completed with double-ended access verified (Code: 560)",
        "explanation": "Executes logic for Deque Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000057",
    "book": "cppdeque",
    "order_index": 57,
    "title": "#057 Deque Algorithm Problem 57",
    "slug": "cppdeque-057-deque-algorithm-problem-57",
    "description": "Solve double-ended queue problem #57 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 57 10",
        "output": "Deque operation #57 completed with double-ended access verified (Code: 570)",
        "explanation": "Executes logic for Deque Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000058",
    "book": "cppdeque",
    "order_index": 58,
    "title": "#058 Deque Algorithm Problem 58",
    "slug": "cppdeque-058-deque-algorithm-problem-58",
    "description": "Solve double-ended queue problem #58 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 58 10",
        "output": "Deque operation #58 completed with double-ended access verified (Code: 580)",
        "explanation": "Executes logic for Deque Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000059",
    "book": "cppdeque",
    "order_index": 59,
    "title": "#059 Deque Algorithm Problem 59",
    "slug": "cppdeque-059-deque-algorithm-problem-59",
    "description": "Solve double-ended queue problem #59 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 59 10",
        "output": "Deque operation #59 completed with double-ended access verified (Code: 590)",
        "explanation": "Executes logic for Deque Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000060",
    "book": "cppdeque",
    "order_index": 60,
    "title": "#060 Deque Algorithm Problem 60",
    "slug": "cppdeque-060-deque-algorithm-problem-60",
    "description": "Solve double-ended queue problem #60 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 60 10",
        "output": "Deque operation #60 completed with double-ended access verified (Code: 600)",
        "explanation": "Executes logic for Deque Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000061",
    "book": "cppdeque",
    "order_index": 61,
    "title": "#061 Deque Algorithm Problem 61",
    "slug": "cppdeque-061-deque-algorithm-problem-61",
    "description": "Solve double-ended queue problem #61 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 61 10",
        "output": "Deque operation #61 completed with double-ended access verified (Code: 610)",
        "explanation": "Executes logic for Deque Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000062",
    "book": "cppdeque",
    "order_index": 62,
    "title": "#062 Deque Algorithm Problem 62",
    "slug": "cppdeque-062-deque-algorithm-problem-62",
    "description": "Solve double-ended queue problem #62 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 62 10",
        "output": "Deque operation #62 completed with double-ended access verified (Code: 620)",
        "explanation": "Executes logic for Deque Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000063",
    "book": "cppdeque",
    "order_index": 63,
    "title": "#063 Deque Algorithm Problem 63",
    "slug": "cppdeque-063-deque-algorithm-problem-63",
    "description": "Solve double-ended queue problem #63 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 63 10",
        "output": "Deque operation #63 completed with double-ended access verified (Code: 630)",
        "explanation": "Executes logic for Deque Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000064",
    "book": "cppdeque",
    "order_index": 64,
    "title": "#064 Deque Algorithm Problem 64",
    "slug": "cppdeque-064-deque-algorithm-problem-64",
    "description": "Solve double-ended queue problem #64 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 64 10",
        "output": "Deque operation #64 completed with double-ended access verified (Code: 640)",
        "explanation": "Executes logic for Deque Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000065",
    "book": "cppdeque",
    "order_index": 65,
    "title": "#065 Deque Algorithm Problem 65",
    "slug": "cppdeque-065-deque-algorithm-problem-65",
    "description": "Solve double-ended queue problem #65 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 65 10",
        "output": "Deque operation #65 completed with double-ended access verified (Code: 650)",
        "explanation": "Executes logic for Deque Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000066",
    "book": "cppdeque",
    "order_index": 66,
    "title": "#066 Deque Algorithm Problem 66",
    "slug": "cppdeque-066-deque-algorithm-problem-66",
    "description": "Solve double-ended queue problem #66 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 66 10",
        "output": "Deque operation #66 completed with double-ended access verified (Code: 660)",
        "explanation": "Executes logic for Deque Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000067",
    "book": "cppdeque",
    "order_index": 67,
    "title": "#067 Deque Algorithm Problem 67",
    "slug": "cppdeque-067-deque-algorithm-problem-67",
    "description": "Solve double-ended queue problem #67 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 67 10",
        "output": "Deque operation #67 completed with double-ended access verified (Code: 670)",
        "explanation": "Executes logic for Deque Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000068",
    "book": "cppdeque",
    "order_index": 68,
    "title": "#068 Deque Algorithm Problem 68",
    "slug": "cppdeque-068-deque-algorithm-problem-68",
    "description": "Solve double-ended queue problem #68 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 68 10",
        "output": "Deque operation #68 completed with double-ended access verified (Code: 680)",
        "explanation": "Executes logic for Deque Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000069",
    "book": "cppdeque",
    "order_index": 69,
    "title": "#069 Deque Algorithm Problem 69",
    "slug": "cppdeque-069-deque-algorithm-problem-69",
    "description": "Solve double-ended queue problem #69 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 69 10",
        "output": "Deque operation #69 completed with double-ended access verified (Code: 690)",
        "explanation": "Executes logic for Deque Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000070",
    "book": "cppdeque",
    "order_index": 70,
    "title": "#070 Deque Algorithm Problem 70",
    "slug": "cppdeque-070-deque-algorithm-problem-70",
    "description": "Solve double-ended queue problem #70 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 70 10",
        "output": "Deque operation #70 completed with double-ended access verified (Code: 700)",
        "explanation": "Executes logic for Deque Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000071",
    "book": "cppdeque",
    "order_index": 71,
    "title": "#071 Deque Algorithm Problem 71",
    "slug": "cppdeque-071-deque-algorithm-problem-71",
    "description": "Solve double-ended queue problem #71 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 71 10",
        "output": "Deque operation #71 completed with double-ended access verified (Code: 710)",
        "explanation": "Executes logic for Deque Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000072",
    "book": "cppdeque",
    "order_index": 72,
    "title": "#072 Deque Algorithm Problem 72",
    "slug": "cppdeque-072-deque-algorithm-problem-72",
    "description": "Solve double-ended queue problem #72 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 72 10",
        "output": "Deque operation #72 completed with double-ended access verified (Code: 720)",
        "explanation": "Executes logic for Deque Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000073",
    "book": "cppdeque",
    "order_index": 73,
    "title": "#073 Deque Algorithm Problem 73",
    "slug": "cppdeque-073-deque-algorithm-problem-73",
    "description": "Solve double-ended queue problem #73 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 73 10",
        "output": "Deque operation #73 completed with double-ended access verified (Code: 730)",
        "explanation": "Executes logic for Deque Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000074",
    "book": "cppdeque",
    "order_index": 74,
    "title": "#074 Deque Algorithm Problem 74",
    "slug": "cppdeque-074-deque-algorithm-problem-74",
    "description": "Solve double-ended queue problem #74 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 74 10",
        "output": "Deque operation #74 completed with double-ended access verified (Code: 740)",
        "explanation": "Executes logic for Deque Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000075",
    "book": "cppdeque",
    "order_index": 75,
    "title": "#075 Deque Algorithm Problem 75",
    "slug": "cppdeque-075-deque-algorithm-problem-75",
    "description": "Solve double-ended queue problem #75 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 75 10",
        "output": "Deque operation #75 completed with double-ended access verified (Code: 750)",
        "explanation": "Executes logic for Deque Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000076",
    "book": "cppdeque",
    "order_index": 76,
    "title": "#076 Deque Algorithm Problem 76",
    "slug": "cppdeque-076-deque-algorithm-problem-76",
    "description": "Solve double-ended queue problem #76 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 76 10",
        "output": "Deque operation #76 completed with double-ended access verified (Code: 760)",
        "explanation": "Executes logic for Deque Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000077",
    "book": "cppdeque",
    "order_index": 77,
    "title": "#077 Deque Algorithm Problem 77",
    "slug": "cppdeque-077-deque-algorithm-problem-77",
    "description": "Solve double-ended queue problem #77 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 77 10",
        "output": "Deque operation #77 completed with double-ended access verified (Code: 770)",
        "explanation": "Executes logic for Deque Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000078",
    "book": "cppdeque",
    "order_index": 78,
    "title": "#078 Deque Algorithm Problem 78",
    "slug": "cppdeque-078-deque-algorithm-problem-78",
    "description": "Solve double-ended queue problem #78 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 78 10",
        "output": "Deque operation #78 completed with double-ended access verified (Code: 780)",
        "explanation": "Executes logic for Deque Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000079",
    "book": "cppdeque",
    "order_index": 79,
    "title": "#079 Deque Algorithm Problem 79",
    "slug": "cppdeque-079-deque-algorithm-problem-79",
    "description": "Solve double-ended queue problem #79 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 79 10",
        "output": "Deque operation #79 completed with double-ended access verified (Code: 790)",
        "explanation": "Executes logic for Deque Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000080",
    "book": "cppdeque",
    "order_index": 80,
    "title": "#080 Deque Algorithm Problem 80",
    "slug": "cppdeque-080-deque-algorithm-problem-80",
    "description": "Solve double-ended queue problem #80 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 80 10",
        "output": "Deque operation #80 completed with double-ended access verified (Code: 800)",
        "explanation": "Executes logic for Deque Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000081",
    "book": "cppdeque",
    "order_index": 81,
    "title": "#081 Deque Algorithm Problem 81",
    "slug": "cppdeque-081-deque-algorithm-problem-81",
    "description": "Solve double-ended queue problem #81 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 81 10",
        "output": "Deque operation #81 completed with double-ended access verified (Code: 810)",
        "explanation": "Executes logic for Deque Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000082",
    "book": "cppdeque",
    "order_index": 82,
    "title": "#082 Deque Algorithm Problem 82",
    "slug": "cppdeque-082-deque-algorithm-problem-82",
    "description": "Solve double-ended queue problem #82 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 82 10",
        "output": "Deque operation #82 completed with double-ended access verified (Code: 820)",
        "explanation": "Executes logic for Deque Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000083",
    "book": "cppdeque",
    "order_index": 83,
    "title": "#083 Deque Algorithm Problem 83",
    "slug": "cppdeque-083-deque-algorithm-problem-83",
    "description": "Solve double-ended queue problem #83 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 83 10",
        "output": "Deque operation #83 completed with double-ended access verified (Code: 830)",
        "explanation": "Executes logic for Deque Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000084",
    "book": "cppdeque",
    "order_index": 84,
    "title": "#084 Deque Algorithm Problem 84",
    "slug": "cppdeque-084-deque-algorithm-problem-84",
    "description": "Solve double-ended queue problem #84 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 84 10",
        "output": "Deque operation #84 completed with double-ended access verified (Code: 840)",
        "explanation": "Executes logic for Deque Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000085",
    "book": "cppdeque",
    "order_index": 85,
    "title": "#085 Deque Algorithm Problem 85",
    "slug": "cppdeque-085-deque-algorithm-problem-85",
    "description": "Solve double-ended queue problem #85 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 85 10",
        "output": "Deque operation #85 completed with double-ended access verified (Code: 850)",
        "explanation": "Executes logic for Deque Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000086",
    "book": "cppdeque",
    "order_index": 86,
    "title": "#086 Deque Algorithm Problem 86",
    "slug": "cppdeque-086-deque-algorithm-problem-86",
    "description": "Solve double-ended queue problem #86 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 86 10",
        "output": "Deque operation #86 completed with double-ended access verified (Code: 860)",
        "explanation": "Executes logic for Deque Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000087",
    "book": "cppdeque",
    "order_index": 87,
    "title": "#087 Deque Algorithm Problem 87",
    "slug": "cppdeque-087-deque-algorithm-problem-87",
    "description": "Solve double-ended queue problem #87 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 87 10",
        "output": "Deque operation #87 completed with double-ended access verified (Code: 870)",
        "explanation": "Executes logic for Deque Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000088",
    "book": "cppdeque",
    "order_index": 88,
    "title": "#088 Deque Algorithm Problem 88",
    "slug": "cppdeque-088-deque-algorithm-problem-88",
    "description": "Solve double-ended queue problem #88 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 88 10",
        "output": "Deque operation #88 completed with double-ended access verified (Code: 880)",
        "explanation": "Executes logic for Deque Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000089",
    "book": "cppdeque",
    "order_index": 89,
    "title": "#089 Deque Algorithm Problem 89",
    "slug": "cppdeque-089-deque-algorithm-problem-89",
    "description": "Solve double-ended queue problem #89 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 89 10",
        "output": "Deque operation #89 completed with double-ended access verified (Code: 890)",
        "explanation": "Executes logic for Deque Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000090",
    "book": "cppdeque",
    "order_index": 90,
    "title": "#090 Deque Algorithm Problem 90",
    "slug": "cppdeque-090-deque-algorithm-problem-90",
    "description": "Solve double-ended queue problem #90 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 90 10",
        "output": "Deque operation #90 completed with double-ended access verified (Code: 900)",
        "explanation": "Executes logic for Deque Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000091",
    "book": "cppdeque",
    "order_index": 91,
    "title": "#091 Deque Algorithm Problem 91",
    "slug": "cppdeque-091-deque-algorithm-problem-91",
    "description": "Solve double-ended queue problem #91 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 91 10",
        "output": "Deque operation #91 completed with double-ended access verified (Code: 910)",
        "explanation": "Executes logic for Deque Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000092",
    "book": "cppdeque",
    "order_index": 92,
    "title": "#092 Deque Algorithm Problem 92",
    "slug": "cppdeque-092-deque-algorithm-problem-92",
    "description": "Solve double-ended queue problem #92 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 92 10",
        "output": "Deque operation #92 completed with double-ended access verified (Code: 920)",
        "explanation": "Executes logic for Deque Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000093",
    "book": "cppdeque",
    "order_index": 93,
    "title": "#093 Deque Algorithm Problem 93",
    "slug": "cppdeque-093-deque-algorithm-problem-93",
    "description": "Solve double-ended queue problem #93 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 93 10",
        "output": "Deque operation #93 completed with double-ended access verified (Code: 930)",
        "explanation": "Executes logic for Deque Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000094",
    "book": "cppdeque",
    "order_index": 94,
    "title": "#094 Deque Algorithm Problem 94",
    "slug": "cppdeque-094-deque-algorithm-problem-94",
    "description": "Solve double-ended queue problem #94 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 94 10",
        "output": "Deque operation #94 completed with double-ended access verified (Code: 940)",
        "explanation": "Executes logic for Deque Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000095",
    "book": "cppdeque",
    "order_index": 95,
    "title": "#095 Deque Algorithm Problem 95",
    "slug": "cppdeque-095-deque-algorithm-problem-95",
    "description": "Solve double-ended queue problem #95 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 95 10",
        "output": "Deque operation #95 completed with double-ended access verified (Code: 950)",
        "explanation": "Executes logic for Deque Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000096",
    "book": "cppdeque",
    "order_index": 96,
    "title": "#096 Deque Algorithm Problem 96",
    "slug": "cppdeque-096-deque-algorithm-problem-96",
    "description": "Solve double-ended queue problem #96 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 96 10",
        "output": "Deque operation #96 completed with double-ended access verified (Code: 960)",
        "explanation": "Executes logic for Deque Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000097",
    "book": "cppdeque",
    "order_index": 97,
    "title": "#097 Deque Algorithm Problem 97",
    "slug": "cppdeque-097-deque-algorithm-problem-97",
    "description": "Solve double-ended queue problem #97 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 97 10",
        "output": "Deque operation #97 completed with double-ended access verified (Code: 970)",
        "explanation": "Executes logic for Deque Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000098",
    "book": "cppdeque",
    "order_index": 98,
    "title": "#098 Deque Algorithm Problem 98",
    "slug": "cppdeque-098-deque-algorithm-problem-98",
    "description": "Solve double-ended queue problem #98 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 98 10",
        "output": "Deque operation #98 completed with double-ended access verified (Code: 980)",
        "explanation": "Executes logic for Deque Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000099",
    "book": "cppdeque",
    "order_index": 99,
    "title": "#099 Deque Algorithm Problem 99",
    "slug": "cppdeque-099-deque-algorithm-problem-99",
    "description": "Solve double-ended queue problem #99 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 99 10",
        "output": "Deque operation #99 completed with double-ended access verified (Code: 990)",
        "explanation": "Executes logic for Deque Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6010-000000000100",
    "book": "cppdeque",
    "order_index": 100,
    "title": "#100 Deque Algorithm Problem 100",
    "slug": "cppdeque-100-deque-algorithm-problem-100",
    "description": "Solve double-ended queue problem #100 managing sliding windows, monotonic sequences, or double-ended buffer operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Deque & Double-Ended Queues",
    "tags": [
      "Deque",
      "std::deque",
      "Sliding Window",
      "Monotonic Deque",
      "Double-Ended Queue"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DEQUE_OP 100 10",
        "output": "Deque operation #100 completed with double-ended access verified (Code: 1000)",
        "explanation": "Executes logic for Deque Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deque Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deque Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deque Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
