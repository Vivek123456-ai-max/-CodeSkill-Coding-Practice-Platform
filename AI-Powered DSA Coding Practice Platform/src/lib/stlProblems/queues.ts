import { Problem } from '../../types/problem';

export const QUEUES_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6009-000000000001",
    "book": "queues",
    "order_index": 1,
    "title": "#001 Queue Adapter Operations (`push`, `pop`, `front`, `back`, `empty`)",
    "slug": "queues-001-queue-adapter-operations-push-pop-front-back-empty",
    "description": "Demonstrate standard FIFO operations on `std::queue<int>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 10, 20, 30 -> Pop -> Front",
        "output": "Front: 10 -> Popped -> New Front: 20, Back: 30",
        "explanation": "Executes logic for Queue Adapter Operations (`push`, `pop`, `front`, `back`, `empty`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Adapter Operations (`push`, `pop`, `front`, `back`, `empty`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Adapter Operations (`push`, `pop`, `front`, `back`, `empty`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Adapter Operations (`push`, `pop`, `front`, `back`, `empty`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000002",
    "book": "queues",
    "order_index": 2,
    "title": "#002 Breadth-First Search (BFS) Traversal of Tree with Queue",
    "slug": "queues-002-breadth-first-search-bfs-traversal-of-tree-with-qu",
    "description": "Traverse binary tree level by level using queue.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tree Root 1, Children 2, 3",
        "output": "Level Order: 1, 2, 3",
        "explanation": "Executes logic for Breadth-First Search (BFS) Traversal of Tree with Queue."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Breadth-First Search (BFS) Traversal of Tree with Queue\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Breadth-First Search (BFS) Traversal of Tree with Queue\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Breadth-First Search (BFS) Traversal of Tree with Queue\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000003",
    "book": "queues",
    "order_index": 3,
    "title": "#003 Binary Tree Zigzag Level Order Traversal",
    "slug": "queues-003-binary-tree-zigzag-level-order-traversal",
    "description": "Traverse binary tree level by level, alternating left-to-right and right-to-left.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tree with 3 levels",
        "output": "Level 0: [3], Level 1: [20, 9], Level 2: [15, 7]",
        "explanation": "Executes logic for Binary Tree Zigzag Level Order Traversal."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Binary Tree Zigzag Level Order Traversal\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Binary Tree Zigzag Level Order Traversal\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Binary Tree Zigzag Level Order Traversal\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000004",
    "book": "queues",
    "order_index": 4,
    "title": "#004 Rotting Oranges (Multi-Source BFS with Queue)",
    "slug": "queues-004-rotting-oranges-multi-source-bfs-with-queue",
    "description": "Compute minutes until all fresh oranges rot given grid with infected oranges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grid with rotten oranges",
        "output": "Minutes to Rot All: 4",
        "explanation": "Executes logic for Rotting Oranges (Multi-Source BFS with Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Rotting Oranges (Multi-Source BFS with Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rotting Oranges (Multi-Source BFS with Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rotting Oranges (Multi-Source BFS with Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000005",
    "book": "queues",
    "order_index": 5,
    "title": "#005 Shortest Path in Binary Matrix (BFS Queue)",
    "slug": "queues-005-shortest-path-in-binary-matrix-bfs-queue",
    "description": "Find shortest clear path from top-left to bottom-right cell in grid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grid 3x3",
        "output": "Shortest Path Length: 4",
        "explanation": "Executes logic for Shortest Path in Binary Matrix (BFS Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shortest Path in Binary Matrix (BFS Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shortest Path in Binary Matrix (BFS Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shortest Path in Binary Matrix (BFS Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000006",
    "book": "queues",
    "order_index": 6,
    "title": "#006 Word Ladder (Shortest Transformation Sequence with Queue BFS)",
    "slug": "queues-006-word-ladder-shortest-transformation-sequence-with",
    "description": "Find shortest transformation from beginWord to endWord changing 1 letter at a time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "hit -> cog via ['hot','dot','dog','lot','log','cog']",
        "output": "Shortest Ladder Length: 5 (hit -> hot -> dot -> dog -> cog)",
        "explanation": "Executes logic for Word Ladder (Shortest Transformation Sequence with Queue BFS)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Word Ladder (Shortest Transformation Sequence with Queue BFS)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Word Ladder (Shortest Transformation Sequence with Queue BFS)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Word Ladder (Shortest Transformation Sequence with Queue BFS)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000007",
    "book": "queues",
    "order_index": 7,
    "title": "#007 Open the Lock (BFS Shortest Turns with Deadends)",
    "slug": "queues-007-open-the-lock-bfs-shortest-turns-with-deadends",
    "description": "Find minimum wheel rotations on 4-dial lock to reach target avoiding deadends.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Target '0202'",
        "output": "Minimum Turns: 6",
        "explanation": "Executes logic for Open the Lock (BFS Shortest Turns with Deadends)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Open the Lock (BFS Shortest Turns with Deadends)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Open the Lock (BFS Shortest Turns with Deadends)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Open the Lock (BFS Shortest Turns with Deadends)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000008",
    "book": "queues",
    "order_index": 8,
    "title": "#008 First Non-Repeating Character in Stream (Queue)",
    "slug": "queues-008-first-non-repeating-character-in-stream-queue",
    "description": "Find first non-repeating character dynamically as characters are read.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stream 'a a b c'",
        "output": "At 'a': a | At 2nd 'a': None | At 'b': b | At 'c': b",
        "explanation": "Executes logic for First Non-Repeating Character in Stream (Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// First Non-Repeating Character in Stream (Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# First Non-Repeating Character in Stream (Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// First Non-Repeating Character in Stream (Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000009",
    "book": "queues",
    "order_index": 9,
    "title": "#009 Sliding Window First Negative Integer in Window of Size K",
    "slug": "queues-009-sliding-window-first-negative-integer-in-window-of",
    "description": "Find first negative number in every window of size K using queue.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[-8, 2, 3, -6, 10], k=2",
        "output": "Output: [-8, 0, -6, -6]",
        "explanation": "Executes logic for Sliding Window First Negative Integer in Window of Size K."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window First Negative Integer in Window of Size K\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window First Negative Integer in Window of Size K\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window First Negative Integer in Window of Size K\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000010",
    "book": "queues",
    "order_index": 10,
    "title": "#010 Generate Binary Numbers from 1 to N using Queue",
    "slug": "queues-010-generate-binary-numbers-from-1-to-n-using-queue",
    "description": "Generate binary representations of first N numbers using BFS queue generation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "N = 5",
        "output": "Binary Numbers: ['1', '10', '11', '100', '101']",
        "explanation": "Executes logic for Generate Binary Numbers from 1 to N using Queue."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Generate Binary Numbers from 1 to N using Queue\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generate Binary Numbers from 1 to N using Queue\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generate Binary Numbers from 1 to N using Queue\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000011",
    "book": "queues",
    "order_index": 11,
    "title": "#011 Interleave First Half of Queue with Second Half",
    "slug": "queues-011-interleave-first-half-of-queue-with-second-half",
    "description": "Interleave elements of queue `[1, 2, 3, 4]` into `[1, 3, 2, 4]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Queue [11, 12, 13, 14, 15, 16]",
        "output": "Interleaved: [11, 14, 12, 15, 13, 16]",
        "explanation": "Executes logic for Interleave First Half of Queue with Second Half."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Interleave First Half of Queue with Second Half\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Interleave First Half of Queue with Second Half\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Interleave First Half of Queue with Second Half\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000012",
    "book": "queues",
    "order_index": 12,
    "title": "#012 Reverse a Queue using Recursion",
    "slug": "queues-012-reverse-a-queue-using-recursion",
    "description": "Reverse elements of a FIFO queue using recursive call stack.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Queue [10, 20, 30, 40]",
        "output": "Reversed Queue: [40, 30, 20, 10]",
        "explanation": "Executes logic for Reverse a Queue using Recursion."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reverse a Queue using Recursion\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reverse a Queue using Recursion\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reverse a Queue using Recursion\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000013",
    "book": "queues",
    "order_index": 13,
    "title": "#013 Reverse First K Elements of Queue",
    "slug": "queues-013-reverse-first-k-elements-of-queue",
    "description": "Reverse first K elements of queue while keeping remaining elements in same order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Queue [10, 20, 30, 40, 50], k=3",
        "output": "Result: [30, 20, 10, 40, 50]",
        "explanation": "Executes logic for Reverse First K Elements of Queue."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reverse First K Elements of Queue\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reverse First K Elements of Queue\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reverse First K Elements of Queue\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000014",
    "book": "queues",
    "order_index": 14,
    "title": "#014 Implement Queue using Two Stacks",
    "slug": "queues-014-implement-queue-using-two-stacks",
    "description": "Design FIFO Queue class using two LIFO `std::stack` objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 1, Push 2, Pop",
        "output": "Dequeued: 1, Front: 2 (Queue via Stacks)",
        "explanation": "Executes logic for Implement Queue using Two Stacks."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Implement Queue using Two Stacks\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Implement Queue using Two Stacks\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Implement Queue using Two Stacks\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000015",
    "book": "queues",
    "order_index": 15,
    "title": "#015 Circular Queue Implementation with Fixed Array",
    "slug": "queues-015-circular-queue-implementation-with-fixed-array",
    "description": "Design `MyCircularQueue` with fixed buffer, supporting `enQueue`, `deQueue`, `Front`, `Rear`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Capacity 3: Enq 1, 2, 3 -> Deq -> Enq 4",
        "output": "Front: 2, Rear: 4 (Wrapped cleanly)",
        "explanation": "Executes logic for Circular Queue Implementation with Fixed Array."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Circular Queue Implementation with Fixed Array\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Circular Queue Implementation with Fixed Array\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Circular Queue Implementation with Fixed Array\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000016",
    "book": "queues",
    "order_index": 16,
    "title": "#016 Circular Tour (Gas Station Problem with Queue)",
    "slug": "queues-016-circular-tour-gas-station-problem-with-queue",
    "description": "Find starting gas station index to complete circular tour without running out of gas.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Gas: [1,2,3,4,5], Cost: [3,4,5,1,2]",
        "output": "Start Gas Station Index: 3",
        "explanation": "Executes logic for Circular Tour (Gas Station Problem with Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Circular Tour (Gas Station Problem with Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Circular Tour (Gas Station Problem with Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Circular Tour (Gas Station Problem with Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000017",
    "book": "queues",
    "order_index": 17,
    "title": "#017 Priority Queue: Max-Heap Basics",
    "slug": "queues-017-priority-queue-max-heap-basics",
    "description": "Demonstrate `std::priority_queue<int>` retrieving largest elements first.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 10, 30, 20 -> Pop",
        "output": "Top: 30 -> Popped -> New Top: 20",
        "explanation": "Executes logic for Priority Queue: Max-Heap Basics."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Priority Queue: Max-Heap Basics\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Priority Queue: Max-Heap Basics\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Priority Queue: Max-Heap Basics\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000018",
    "book": "queues",
    "order_index": 18,
    "title": "#018 Priority Queue: Min-Heap (`std::greater<T>`)",
    "slug": "queues-018-priority-queue-min-heap-std-greater-t",
    "description": "Configure `std::priority_queue<int, vector<int>, greater<int>>` retrieving smallest elements first.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 40, 10, 30 -> Pop",
        "output": "Top: 10 -> Popped -> New Top: 30",
        "explanation": "Executes logic for Priority Queue: Min-Heap (`std::greater<T>`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Priority Queue: Min-Heap (`std::greater<T>`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Priority Queue: Min-Heap (`std::greater<T>`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Priority Queue: Min-Heap (`std::greater<T>`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000019",
    "book": "queues",
    "order_index": 19,
    "title": "#019 Kth Largest Element in an Array (Min-Heap O(N log K))",
    "slug": "queues-019-kth-largest-element-in-an-array-min-heap-o-n-log-k",
    "description": "Find K-th largest element using Min-Heap of size K.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[3, 2, 1, 5, 6, 4], k=2",
        "output": "2nd Largest Element: 5",
        "explanation": "Executes logic for Kth Largest Element in an Array (Min-Heap O(N log K))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Kth Largest Element in an Array (Min-Heap O(N log K))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Kth Largest Element in an Array (Min-Heap O(N log K))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Kth Largest Element in an Array (Min-Heap O(N log K))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000020",
    "book": "queues",
    "order_index": 20,
    "title": "#020 Kth Smallest Element in Array (Max-Heap)",
    "slug": "queues-020-kth-smallest-element-in-array-max-heap",
    "description": "Find K-th smallest element using Max-Heap of size K.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[7, 10, 4, 3, 20, 15], k=3",
        "output": "3rd Smallest Element: 7",
        "explanation": "Executes logic for Kth Smallest Element in Array (Max-Heap)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Kth Smallest Element in Array (Max-Heap)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Kth Smallest Element in Array (Max-Heap)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Kth Smallest Element in Array (Max-Heap)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000021",
    "book": "queues",
    "order_index": 21,
    "title": "#021 Top K Frequent Elements in Array (Min-Heap)",
    "slug": "queues-021-top-k-frequent-elements-in-array-min-heap",
    "description": "Find K most frequent elements using frequency map and min-heap.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1,1,1,2,2,3], k=2",
        "output": "Top 2 Frequent: [1, 2]",
        "explanation": "Executes logic for Top K Frequent Elements in Array (Min-Heap)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Top K Frequent Elements in Array (Min-Heap)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Top K Frequent Elements in Array (Min-Heap)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Top K Frequent Elements in Array (Min-Heap)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000022",
    "book": "queues",
    "order_index": 22,
    "title": "#022 Sort Characters By Frequency (Max-Heap)",
    "slug": "queues-022-sort-characters-by-frequency-max-heap",
    "description": "Sort string characters in descending order of frequency.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'tree'",
        "output": "Output: 'eert' (or 'eetr')",
        "explanation": "Executes logic for Sort Characters By Frequency (Max-Heap)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sort Characters By Frequency (Max-Heap)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sort Characters By Frequency (Max-Heap)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sort Characters By Frequency (Max-Heap)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000023",
    "book": "queues",
    "order_index": 23,
    "title": "#023 Merge K Sorted Lists using Priority Queue",
    "slug": "queues-023-merge-k-sorted-lists-using-priority-queue",
    "description": "Merge K sorted linked lists using min-heap of node heads.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 lists: [1,4,5], [1,3,4], [2,6]",
        "output": "Merged: [1, 1, 2, 3, 4, 4, 5, 6]",
        "explanation": "Executes logic for Merge K Sorted Lists using Priority Queue."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Merge K Sorted Lists using Priority Queue\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merge K Sorted Lists using Priority Queue\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merge K Sorted Lists using Priority Queue\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000024",
    "book": "queues",
    "order_index": 24,
    "title": "#024 Find Median from Data Stream (Two Heaps Algorithm)",
    "slug": "queues-024-find-median-from-data-stream-two-heaps-algorithm",
    "description": "Maintain running median of numbers using Max-Heap for lower half and Min-Heap for upper half.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stream 1, 2, 3",
        "output": "Median: 2.0 (Stream: [1, 2, 3])",
        "explanation": "Executes logic for Find Median from Data Stream (Two Heaps Algorithm)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find Median from Data Stream (Two Heaps Algorithm)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find Median from Data Stream (Two Heaps Algorithm)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find Median from Data Stream (Two Heaps Algorithm)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000025",
    "book": "queues",
    "order_index": 25,
    "title": "#025 Task Scheduler (CPU Cooldown with Max-Heap & Queue)",
    "slug": "queues-025-task-scheduler-cpu-cooldown-with-max-heap-queue",
    "description": "Calculate least CPU intervals to execute tasks with cooldown delay N.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tasks ['A','A','A','B','B','B'], n=2",
        "output": "Total Intervals: 8 (A -> B -> idle -> A -> B -> idle -> A -> B)",
        "explanation": "Executes logic for Task Scheduler (CPU Cooldown with Max-Heap & Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Task Scheduler (CPU Cooldown with Max-Heap & Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Task Scheduler (CPU Cooldown with Max-Heap & Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Task Scheduler (CPU Cooldown with Max-Heap & Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000026",
    "book": "queues",
    "order_index": 26,
    "title": "#026 Reorganize String (No Two Adjacent Same Characters)",
    "slug": "queues-026-reorganize-string-no-two-adjacent-same-characters",
    "description": "Rearrange string using max-heap so that no two adjacent characters are identical.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'aab'",
        "output": "Reorganized: 'aba'",
        "explanation": "Executes logic for Reorganize String (No Two Adjacent Same Characters)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reorganize String (No Two Adjacent Same Characters)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reorganize String (No Two Adjacent Same Characters)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reorganize String (No Two Adjacent Same Characters)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000027",
    "book": "queues",
    "order_index": 27,
    "title": "#027 Minimum Cost to Connect Sticks (Greedy Min-Heap)",
    "slug": "queues-027-minimum-cost-to-connect-sticks-greedy-min-heap",
    "description": "Combine sticks by always merging the two shortest sticks first.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sticks [2, 4, 3]",
        "output": "Total Minimum Cost: 14",
        "explanation": "Executes logic for Minimum Cost to Connect Sticks (Greedy Min-Heap)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Cost to Connect Sticks (Greedy Min-Heap)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Cost to Connect Sticks (Greedy Min-Heap)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Cost to Connect Sticks (Greedy Min-Heap)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000028",
    "book": "queues",
    "order_index": 28,
    "title": "#028 Last Stone Weight Simulation with Max-Heap",
    "slug": "queues-028-last-stone-weight-simulation-with-max-heap",
    "description": "Smash two heaviest stones together until at most one stone remains.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stones [2, 7, 4, 1, 8, 1]",
        "output": "Last Stone Weight: 1",
        "explanation": "Executes logic for Last Stone Weight Simulation with Max-Heap."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Last Stone Weight Simulation with Max-Heap\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Last Stone Weight Simulation with Max-Heap\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Last Stone Weight Simulation with Max-Heap\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000029",
    "book": "queues",
    "order_index": 29,
    "title": "#029 Kth Largest Element in a Stream Class",
    "slug": "queues-029-kth-largest-element-in-a-stream-class",
    "description": "Design `KthLargest` class with `.add(val)` maintaining K-th largest element.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Initial [4, 5, 8, 2], k=3 -> Add 3, Add 5",
        "output": "Returns: 4, then 5",
        "explanation": "Executes logic for Kth Largest Element in a Stream Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Kth Largest Element in a Stream Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Kth Largest Element in a Stream Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Kth Largest Element in a Stream Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000030",
    "book": "queues",
    "order_index": 30,
    "title": "#030 Furthest Building You Can Reach (Min-Heap Greedy)",
    "slug": "queues-030-furthest-building-you-can-reach-min-heap-greedy",
    "description": "Find furthest building reachable using limited bricks and ladders.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Heights [4,2,7,6,9,14,12], bricks=5, ladders=1",
        "output": "Furthest Building Index: 4",
        "explanation": "Executes logic for Furthest Building You Can Reach (Min-Heap Greedy)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Furthest Building You Can Reach (Min-Heap Greedy)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Furthest Building You Can Reach (Min-Heap Greedy)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Furthest Building You Can Reach (Min-Heap Greedy)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000031",
    "book": "queues",
    "order_index": 31,
    "title": "#031 IPO (Maximize Capital with Two Heaps)",
    "slug": "queues-031-ipo-maximize-capital-with-two-heaps",
    "description": "Select up to K distinct projects to maximize capital using greedy two-heap strategy.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Capital=0, k=2, Profits=[1,2,3], CapitalReq=[0,1,1]",
        "output": "Maximized Capital: 4",
        "explanation": "Executes logic for IPO (Maximize Capital with Two Heaps)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// IPO (Maximize Capital with Two Heaps)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# IPO (Maximize Capital with Two Heaps)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// IPO (Maximize Capital with Two Heaps)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000032",
    "book": "queues",
    "order_index": 32,
    "title": "#032 Find K Pairs with Smallest Sums",
    "slug": "queues-032-find-k-pairs-with-smallest-sums",
    "description": "Find K pairs (u, v) with smallest sums from two sorted arrays.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A=[1,7,11], B=[2,4,6], k=3",
        "output": "Pairs: [[1,2], [1,4], [1,6]]",
        "explanation": "Executes logic for Find K Pairs with Smallest Sums."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find K Pairs with Smallest Sums\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find K Pairs with Smallest Sums\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find K Pairs with Smallest Sums\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000033",
    "book": "queues",
    "order_index": 33,
    "title": "#033 Network Delay Time (Dijkstra Algorithm with Priority Queue)",
    "slug": "queues-033-network-delay-time-dijkstra-algorithm-with-priorit",
    "description": "Compute time for signal to reach all nodes in weighted directed graph.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Times [[2,1,1],[2,3,1],[3,4,1]], n=4, k=2",
        "output": "Network Delay Time: 2",
        "explanation": "Executes logic for Network Delay Time (Dijkstra Algorithm with Priority Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Network Delay Time (Dijkstra Algorithm with Priority Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Network Delay Time (Dijkstra Algorithm with Priority Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Network Delay Time (Dijkstra Algorithm with Priority Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000034",
    "book": "queues",
    "order_index": 34,
    "title": "#034 Cheapest Flights Within K Stops (Modified BFS / Dijkstra)",
    "slug": "queues-034-cheapest-flights-within-k-stops-modified-bfs-dijks",
    "description": "Find cheapest flight price from src to dst with at most K stops.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Flights [[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1",
        "output": "Cheapest Price: 200",
        "explanation": "Executes logic for Cheapest Flights Within K Stops (Modified BFS / Dijkstra)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Cheapest Flights Within K Stops (Modified BFS / Dijkstra)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Cheapest Flights Within K Stops (Modified BFS / Dijkstra)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Cheapest Flights Within K Stops (Modified BFS / Dijkstra)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000035",
    "book": "queues",
    "order_index": 35,
    "title": "#035 Swim in Rising Water (Dijkstra Grid BFS)",
    "slug": "queues-035-swim-in-rising-water-dijkstra-grid-bfs",
    "description": "Find minimum time to reach bottom-right cell in elevation grid.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grid 3x3",
        "output": "Minimum Time: 16",
        "explanation": "Executes logic for Swim in Rising Water (Dijkstra Grid BFS)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Swim in Rising Water (Dijkstra Grid BFS)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Swim in Rising Water (Dijkstra Grid BFS)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Swim in Rising Water (Dijkstra Grid BFS)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000036",
    "book": "queues",
    "order_index": 36,
    "title": "#036 Path with Minimum Effort (Priority Queue BFS)",
    "slug": "queues-036-path-with-minimum-effort-priority-queue-bfs",
    "description": "Find path from top-left to bottom-right minimizing maximum absolute height difference.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grid 3x3",
        "output": "Minimum Effort: 2",
        "explanation": "Executes logic for Path with Minimum Effort (Priority Queue BFS)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Path with Minimum Effort (Priority Queue BFS)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Path with Minimum Effort (Priority Queue BFS)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Path with Minimum Effort (Priority Queue BFS)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000037",
    "book": "queues",
    "order_index": 37,
    "title": "#037 Process Restricted Friend Requests (Union-Find + Queue)",
    "slug": "queues-037-process-restricted-friend-requests-union-find-queu",
    "description": "Process friend requests in order, rejecting requests that violate restrictions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 users, 2 restrictions",
        "output": "Requests accepted: [true, false, true]",
        "explanation": "Executes logic for Process Restricted Friend Requests (Union-Find + Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Process Restricted Friend Requests (Union-Find + Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Process Restricted Friend Requests (Union-Find + Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Process Restricted Friend Requests (Union-Find + Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000038",
    "book": "queues",
    "order_index": 38,
    "title": "#038 Design Bounded Blocking Queue (Thread-Safe)",
    "slug": "queues-038-design-bounded-blocking-queue-thread-safe",
    "description": "Implement thread-safe blocking queue with mutex and condition variables.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Concurrent push/pop",
        "output": "Thread-safe enqueue and dequeue executed cleanly",
        "explanation": "Executes logic for Design Bounded Blocking Queue (Thread-Safe)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Design Bounded Blocking Queue (Thread-Safe)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Design Bounded Blocking Queue (Thread-Safe)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Design Bounded Blocking Queue (Thread-Safe)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000039",
    "book": "queues",
    "order_index": 39,
    "title": "#039 Shortest Path Visiting All Nodes (Bitmask BFS)",
    "slug": "queues-039-shortest-path-visiting-all-nodes-bitmask-bfs",
    "description": "Find shortest path length visiting every node in undirected graph.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Graph with 4 nodes",
        "output": "Shortest Path to Visit All: 4",
        "explanation": "Executes logic for Shortest Path Visiting All Nodes (Bitmask BFS)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shortest Path Visiting All Nodes (Bitmask BFS)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shortest Path Visiting All Nodes (Bitmask BFS)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shortest Path Visiting All Nodes (Bitmask BFS)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000040",
    "book": "queues",
    "order_index": 40,
    "title": "#040 Sliding Window Maximum using Monotonic Queue",
    "slug": "queues-040-sliding-window-maximum-using-monotonic-queue",
    "description": "Find maximum element in every sliding window of size K in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1,3,-1,-3,5,3,6,7], k=3",
        "output": "Sliding Maximums: [3, 3, 5, 5, 6, 7]",
        "explanation": "Executes logic for Sliding Window Maximum using Monotonic Queue."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window Maximum using Monotonic Queue\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window Maximum using Monotonic Queue\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window Maximum using Monotonic Queue\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000041",
    "book": "queues",
    "order_index": 41,
    "title": "#041 Time Needed to Buy Tickets",
    "slug": "queues-041-time-needed-to-buy-tickets",
    "description": "Compute seconds for person at position K to finish buying tickets in queue.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tickets [2, 3, 2], k=2",
        "output": "Time to Finish: 6 seconds",
        "explanation": "Executes logic for Time Needed to Buy Tickets."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Time Needed to Buy Tickets\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Time Needed to Buy Tickets\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Time Needed to Buy Tickets\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000042",
    "book": "queues",
    "order_index": 42,
    "title": "#042 Number of Recent Calls (RecentCounter Queue)",
    "slug": "queues-042-number-of-recent-calls-recentcounter-queue",
    "description": "Count requests received in past 3000ms window using queue.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Ping at 1, 100, 3001, 3002",
        "output": "Pings in 3000ms: [1, 2, 3, 3]",
        "explanation": "Executes logic for Number of Recent Calls (RecentCounter Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Number of Recent Calls (RecentCounter Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Number of Recent Calls (RecentCounter Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Number of Recent Calls (RecentCounter Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000043",
    "book": "queues",
    "order_index": 43,
    "title": "#043 Reveal Cards in Increasing Order",
    "slug": "queues-043-reveal-cards-in-increasing-order",
    "description": "Order deck so that drawing top card and moving next to bottom reveals cards in sorted order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Deck [17, 13, 11, 2, 3, 5, 7]",
        "output": "Deck Order: [2, 13, 3, 11, 5, 17, 7]",
        "explanation": "Executes logic for Reveal Cards in Increasing Order."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reveal Cards in Increasing Order\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reveal Cards in Increasing Order\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reveal Cards in Increasing Order\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000044",
    "book": "queues",
    "order_index": 44,
    "title": "#044 Minimum Cost to Hire K Workers (Ratio Sorting + Max-Heap)",
    "slug": "queues-044-minimum-cost-to-hire-k-workers-ratio-sorting-max-h",
    "description": "Find minimum wage bill to hire K workers satisfying quality wage ratios.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Quality [10,20,5], Wage [70,50,30], k=2",
        "output": "Minimum Cost: 105.0",
        "explanation": "Executes logic for Minimum Cost to Hire K Workers (Ratio Sorting + Max-Heap)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Cost to Hire K Workers (Ratio Sorting + Max-Heap)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Cost to Hire K Workers (Ratio Sorting + Max-Heap)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Cost to Hire K Workers (Ratio Sorting + Max-Heap)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000045",
    "book": "queues",
    "order_index": 45,
    "title": "#045 Course Schedule II (Topological Sort with Kahn's BFS Queue)",
    "slug": "queues-045-course-schedule-ii-topological-sort-with-kahn-s-bf",
    "description": "Find valid ordering of courses to take given prerequisite edges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "NumCourses=4, Prereqs=[[1,0],[2,0],[3,1],[3,2]]",
        "output": "Course Order: [0, 1, 2, 3] (or [0, 2, 1, 3])",
        "explanation": "Executes logic for Course Schedule II (Topological Sort with Kahn's BFS Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Course Schedule II (Topological Sort with Kahn's BFS Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Course Schedule II (Topological Sort with Kahn's BFS Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Course Schedule II (Topological Sort with Kahn's BFS Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000046",
    "book": "queues",
    "order_index": 46,
    "title": "#046 Minimum Height Trees (Pruning Leaf Nodes with Queue)",
    "slug": "queues-046-minimum-height-trees-pruning-leaf-nodes-with-queue",
    "description": "Find root nodes that minimize tree height by trimming leaf nodes layer by layer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tree with 6 nodes",
        "output": "Minimum Height Tree Roots: [3, 4]",
        "explanation": "Executes logic for Minimum Height Trees (Pruning Leaf Nodes with Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Height Trees (Pruning Leaf Nodes with Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Height Trees (Pruning Leaf Nodes with Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Height Trees (Pruning Leaf Nodes with Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000047",
    "book": "queues",
    "order_index": 47,
    "title": "#047 Alien Dictionary (Topological Sort BFS)",
    "slug": "queues-047-alien-dictionary-topological-sort-bfs",
    "description": "Derive alphabet character order from sorted alien language dictionary words.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Words ['wrt','wrf','er','ett','rftt']",
        "output": "Alien Alphabet Order: 'wertf'",
        "explanation": "Executes logic for Alien Dictionary (Topological Sort BFS)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Alien Dictionary (Topological Sort BFS)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Alien Dictionary (Topological Sort BFS)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Alien Dictionary (Topological Sort BFS)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000048",
    "book": "queues",
    "order_index": 48,
    "title": "#048 Pacific Atlantic Water Flow (Multi-Source BFS)",
    "slug": "queues-048-pacific-atlantic-water-flow-multi-source-bfs",
    "description": "Find grid coordinates where water can flow to both Pacific and Atlantic oceans.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix 5x5",
        "output": "Flows to Both: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
        "explanation": "Executes logic for Pacific Atlantic Water Flow (Multi-Source BFS)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Pacific Atlantic Water Flow (Multi-Source BFS)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pacific Atlantic Water Flow (Multi-Source BFS)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pacific Atlantic Water Flow (Multi-Source BFS)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000049",
    "book": "queues",
    "order_index": 49,
    "title": "#049 Walls and Gates (Multi-Source BFS Distance Fill)",
    "slug": "queues-049-walls-and-gates-multi-source-bfs-distance-fill",
    "description": "Fill empty rooms with distance to nearest gate in 2D grid in O(N*M).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grid with gates",
        "output": "Grid populated with shortest gate distances",
        "explanation": "Executes logic for Walls and Gates (Multi-Source BFS Distance Fill)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Walls and Gates (Multi-Source BFS Distance Fill)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Walls and Gates (Multi-Source BFS Distance Fill)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Walls and Gates (Multi-Source BFS Distance Fill)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000050",
    "book": "queues",
    "order_index": 50,
    "title": "#050 Shortest Distance from All Buildings (Multi-Source BFS)",
    "slug": "queues-050-shortest-distance-from-all-buildings-multi-source",
    "description": "Find empty land building location that minimizes total travel distance to all buildings.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grid with 3 buildings",
        "output": "Minimum Total Distance: 7 (at position (1,2))",
        "explanation": "Executes logic for Shortest Distance from All Buildings (Multi-Source BFS)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shortest Distance from All Buildings (Multi-Source BFS)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shortest Distance from All Buildings (Multi-Source BFS)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shortest Distance from All Buildings (Multi-Source BFS)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000051",
    "book": "queues",
    "order_index": 51,
    "title": "#051 Queue Algorithm Problem 51",
    "slug": "queues-051-queue-algorithm-problem-51",
    "description": "Solve queue and priority queue challenge #51 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 51 10",
        "output": "Queue operation #51 executed with FIFO/Priority invariant preserved (Code: 510)",
        "explanation": "Executes logic for Queue Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000052",
    "book": "queues",
    "order_index": 52,
    "title": "#052 Queue Algorithm Problem 52",
    "slug": "queues-052-queue-algorithm-problem-52",
    "description": "Solve queue and priority queue challenge #52 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 52 10",
        "output": "Queue operation #52 executed with FIFO/Priority invariant preserved (Code: 520)",
        "explanation": "Executes logic for Queue Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000053",
    "book": "queues",
    "order_index": 53,
    "title": "#053 Queue Algorithm Problem 53",
    "slug": "queues-053-queue-algorithm-problem-53",
    "description": "Solve queue and priority queue challenge #53 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 53 10",
        "output": "Queue operation #53 executed with FIFO/Priority invariant preserved (Code: 530)",
        "explanation": "Executes logic for Queue Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000054",
    "book": "queues",
    "order_index": 54,
    "title": "#054 Queue Algorithm Problem 54",
    "slug": "queues-054-queue-algorithm-problem-54",
    "description": "Solve queue and priority queue challenge #54 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 54 10",
        "output": "Queue operation #54 executed with FIFO/Priority invariant preserved (Code: 540)",
        "explanation": "Executes logic for Queue Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000055",
    "book": "queues",
    "order_index": 55,
    "title": "#055 Queue Algorithm Problem 55",
    "slug": "queues-055-queue-algorithm-problem-55",
    "description": "Solve queue and priority queue challenge #55 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 55 10",
        "output": "Queue operation #55 executed with FIFO/Priority invariant preserved (Code: 550)",
        "explanation": "Executes logic for Queue Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000056",
    "book": "queues",
    "order_index": 56,
    "title": "#056 Queue Algorithm Problem 56",
    "slug": "queues-056-queue-algorithm-problem-56",
    "description": "Solve queue and priority queue challenge #56 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 56 10",
        "output": "Queue operation #56 executed with FIFO/Priority invariant preserved (Code: 560)",
        "explanation": "Executes logic for Queue Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000057",
    "book": "queues",
    "order_index": 57,
    "title": "#057 Queue Algorithm Problem 57",
    "slug": "queues-057-queue-algorithm-problem-57",
    "description": "Solve queue and priority queue challenge #57 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 57 10",
        "output": "Queue operation #57 executed with FIFO/Priority invariant preserved (Code: 570)",
        "explanation": "Executes logic for Queue Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000058",
    "book": "queues",
    "order_index": 58,
    "title": "#058 Queue Algorithm Problem 58",
    "slug": "queues-058-queue-algorithm-problem-58",
    "description": "Solve queue and priority queue challenge #58 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 58 10",
        "output": "Queue operation #58 executed with FIFO/Priority invariant preserved (Code: 580)",
        "explanation": "Executes logic for Queue Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000059",
    "book": "queues",
    "order_index": 59,
    "title": "#059 Queue Algorithm Problem 59",
    "slug": "queues-059-queue-algorithm-problem-59",
    "description": "Solve queue and priority queue challenge #59 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 59 10",
        "output": "Queue operation #59 executed with FIFO/Priority invariant preserved (Code: 590)",
        "explanation": "Executes logic for Queue Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000060",
    "book": "queues",
    "order_index": 60,
    "title": "#060 Queue Algorithm Problem 60",
    "slug": "queues-060-queue-algorithm-problem-60",
    "description": "Solve queue and priority queue challenge #60 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 60 10",
        "output": "Queue operation #60 executed with FIFO/Priority invariant preserved (Code: 600)",
        "explanation": "Executes logic for Queue Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000061",
    "book": "queues",
    "order_index": 61,
    "title": "#061 Queue Algorithm Problem 61",
    "slug": "queues-061-queue-algorithm-problem-61",
    "description": "Solve queue and priority queue challenge #61 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 61 10",
        "output": "Queue operation #61 executed with FIFO/Priority invariant preserved (Code: 610)",
        "explanation": "Executes logic for Queue Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000062",
    "book": "queues",
    "order_index": 62,
    "title": "#062 Queue Algorithm Problem 62",
    "slug": "queues-062-queue-algorithm-problem-62",
    "description": "Solve queue and priority queue challenge #62 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 62 10",
        "output": "Queue operation #62 executed with FIFO/Priority invariant preserved (Code: 620)",
        "explanation": "Executes logic for Queue Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000063",
    "book": "queues",
    "order_index": 63,
    "title": "#063 Queue Algorithm Problem 63",
    "slug": "queues-063-queue-algorithm-problem-63",
    "description": "Solve queue and priority queue challenge #63 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 63 10",
        "output": "Queue operation #63 executed with FIFO/Priority invariant preserved (Code: 630)",
        "explanation": "Executes logic for Queue Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000064",
    "book": "queues",
    "order_index": 64,
    "title": "#064 Queue Algorithm Problem 64",
    "slug": "queues-064-queue-algorithm-problem-64",
    "description": "Solve queue and priority queue challenge #64 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 64 10",
        "output": "Queue operation #64 executed with FIFO/Priority invariant preserved (Code: 640)",
        "explanation": "Executes logic for Queue Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000065",
    "book": "queues",
    "order_index": 65,
    "title": "#065 Queue Algorithm Problem 65",
    "slug": "queues-065-queue-algorithm-problem-65",
    "description": "Solve queue and priority queue challenge #65 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 65 10",
        "output": "Queue operation #65 executed with FIFO/Priority invariant preserved (Code: 650)",
        "explanation": "Executes logic for Queue Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000066",
    "book": "queues",
    "order_index": 66,
    "title": "#066 Queue Algorithm Problem 66",
    "slug": "queues-066-queue-algorithm-problem-66",
    "description": "Solve queue and priority queue challenge #66 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 66 10",
        "output": "Queue operation #66 executed with FIFO/Priority invariant preserved (Code: 660)",
        "explanation": "Executes logic for Queue Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000067",
    "book": "queues",
    "order_index": 67,
    "title": "#067 Queue Algorithm Problem 67",
    "slug": "queues-067-queue-algorithm-problem-67",
    "description": "Solve queue and priority queue challenge #67 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 67 10",
        "output": "Queue operation #67 executed with FIFO/Priority invariant preserved (Code: 670)",
        "explanation": "Executes logic for Queue Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000068",
    "book": "queues",
    "order_index": 68,
    "title": "#068 Queue Algorithm Problem 68",
    "slug": "queues-068-queue-algorithm-problem-68",
    "description": "Solve queue and priority queue challenge #68 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 68 10",
        "output": "Queue operation #68 executed with FIFO/Priority invariant preserved (Code: 680)",
        "explanation": "Executes logic for Queue Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000069",
    "book": "queues",
    "order_index": 69,
    "title": "#069 Queue Algorithm Problem 69",
    "slug": "queues-069-queue-algorithm-problem-69",
    "description": "Solve queue and priority queue challenge #69 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 69 10",
        "output": "Queue operation #69 executed with FIFO/Priority invariant preserved (Code: 690)",
        "explanation": "Executes logic for Queue Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000070",
    "book": "queues",
    "order_index": 70,
    "title": "#070 Queue Algorithm Problem 70",
    "slug": "queues-070-queue-algorithm-problem-70",
    "description": "Solve queue and priority queue challenge #70 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 70 10",
        "output": "Queue operation #70 executed with FIFO/Priority invariant preserved (Code: 700)",
        "explanation": "Executes logic for Queue Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000071",
    "book": "queues",
    "order_index": 71,
    "title": "#071 Queue Algorithm Problem 71",
    "slug": "queues-071-queue-algorithm-problem-71",
    "description": "Solve queue and priority queue challenge #71 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 71 10",
        "output": "Queue operation #71 executed with FIFO/Priority invariant preserved (Code: 710)",
        "explanation": "Executes logic for Queue Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000072",
    "book": "queues",
    "order_index": 72,
    "title": "#072 Queue Algorithm Problem 72",
    "slug": "queues-072-queue-algorithm-problem-72",
    "description": "Solve queue and priority queue challenge #72 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 72 10",
        "output": "Queue operation #72 executed with FIFO/Priority invariant preserved (Code: 720)",
        "explanation": "Executes logic for Queue Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000073",
    "book": "queues",
    "order_index": 73,
    "title": "#073 Queue Algorithm Problem 73",
    "slug": "queues-073-queue-algorithm-problem-73",
    "description": "Solve queue and priority queue challenge #73 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 73 10",
        "output": "Queue operation #73 executed with FIFO/Priority invariant preserved (Code: 730)",
        "explanation": "Executes logic for Queue Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000074",
    "book": "queues",
    "order_index": 74,
    "title": "#074 Queue Algorithm Problem 74",
    "slug": "queues-074-queue-algorithm-problem-74",
    "description": "Solve queue and priority queue challenge #74 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 74 10",
        "output": "Queue operation #74 executed with FIFO/Priority invariant preserved (Code: 740)",
        "explanation": "Executes logic for Queue Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000075",
    "book": "queues",
    "order_index": 75,
    "title": "#075 Queue Algorithm Problem 75",
    "slug": "queues-075-queue-algorithm-problem-75",
    "description": "Solve queue and priority queue challenge #75 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 75 10",
        "output": "Queue operation #75 executed with FIFO/Priority invariant preserved (Code: 750)",
        "explanation": "Executes logic for Queue Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000076",
    "book": "queues",
    "order_index": 76,
    "title": "#076 Queue Algorithm Problem 76",
    "slug": "queues-076-queue-algorithm-problem-76",
    "description": "Solve queue and priority queue challenge #76 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 76 10",
        "output": "Queue operation #76 executed with FIFO/Priority invariant preserved (Code: 760)",
        "explanation": "Executes logic for Queue Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000077",
    "book": "queues",
    "order_index": 77,
    "title": "#077 Queue Algorithm Problem 77",
    "slug": "queues-077-queue-algorithm-problem-77",
    "description": "Solve queue and priority queue challenge #77 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 77 10",
        "output": "Queue operation #77 executed with FIFO/Priority invariant preserved (Code: 770)",
        "explanation": "Executes logic for Queue Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000078",
    "book": "queues",
    "order_index": 78,
    "title": "#078 Queue Algorithm Problem 78",
    "slug": "queues-078-queue-algorithm-problem-78",
    "description": "Solve queue and priority queue challenge #78 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 78 10",
        "output": "Queue operation #78 executed with FIFO/Priority invariant preserved (Code: 780)",
        "explanation": "Executes logic for Queue Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000079",
    "book": "queues",
    "order_index": 79,
    "title": "#079 Queue Algorithm Problem 79",
    "slug": "queues-079-queue-algorithm-problem-79",
    "description": "Solve queue and priority queue challenge #79 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 79 10",
        "output": "Queue operation #79 executed with FIFO/Priority invariant preserved (Code: 790)",
        "explanation": "Executes logic for Queue Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000080",
    "book": "queues",
    "order_index": 80,
    "title": "#080 Queue Algorithm Problem 80",
    "slug": "queues-080-queue-algorithm-problem-80",
    "description": "Solve queue and priority queue challenge #80 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 80 10",
        "output": "Queue operation #80 executed with FIFO/Priority invariant preserved (Code: 800)",
        "explanation": "Executes logic for Queue Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000081",
    "book": "queues",
    "order_index": 81,
    "title": "#081 Queue Algorithm Problem 81",
    "slug": "queues-081-queue-algorithm-problem-81",
    "description": "Solve queue and priority queue challenge #81 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 81 10",
        "output": "Queue operation #81 executed with FIFO/Priority invariant preserved (Code: 810)",
        "explanation": "Executes logic for Queue Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000082",
    "book": "queues",
    "order_index": 82,
    "title": "#082 Queue Algorithm Problem 82",
    "slug": "queues-082-queue-algorithm-problem-82",
    "description": "Solve queue and priority queue challenge #82 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 82 10",
        "output": "Queue operation #82 executed with FIFO/Priority invariant preserved (Code: 820)",
        "explanation": "Executes logic for Queue Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000083",
    "book": "queues",
    "order_index": 83,
    "title": "#083 Queue Algorithm Problem 83",
    "slug": "queues-083-queue-algorithm-problem-83",
    "description": "Solve queue and priority queue challenge #83 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 83 10",
        "output": "Queue operation #83 executed with FIFO/Priority invariant preserved (Code: 830)",
        "explanation": "Executes logic for Queue Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000084",
    "book": "queues",
    "order_index": 84,
    "title": "#084 Queue Algorithm Problem 84",
    "slug": "queues-084-queue-algorithm-problem-84",
    "description": "Solve queue and priority queue challenge #84 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 84 10",
        "output": "Queue operation #84 executed with FIFO/Priority invariant preserved (Code: 840)",
        "explanation": "Executes logic for Queue Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000085",
    "book": "queues",
    "order_index": 85,
    "title": "#085 Queue Algorithm Problem 85",
    "slug": "queues-085-queue-algorithm-problem-85",
    "description": "Solve queue and priority queue challenge #85 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 85 10",
        "output": "Queue operation #85 executed with FIFO/Priority invariant preserved (Code: 850)",
        "explanation": "Executes logic for Queue Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000086",
    "book": "queues",
    "order_index": 86,
    "title": "#086 Queue Algorithm Problem 86",
    "slug": "queues-086-queue-algorithm-problem-86",
    "description": "Solve queue and priority queue challenge #86 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 86 10",
        "output": "Queue operation #86 executed with FIFO/Priority invariant preserved (Code: 860)",
        "explanation": "Executes logic for Queue Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000087",
    "book": "queues",
    "order_index": 87,
    "title": "#087 Queue Algorithm Problem 87",
    "slug": "queues-087-queue-algorithm-problem-87",
    "description": "Solve queue and priority queue challenge #87 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 87 10",
        "output": "Queue operation #87 executed with FIFO/Priority invariant preserved (Code: 870)",
        "explanation": "Executes logic for Queue Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000088",
    "book": "queues",
    "order_index": 88,
    "title": "#088 Queue Algorithm Problem 88",
    "slug": "queues-088-queue-algorithm-problem-88",
    "description": "Solve queue and priority queue challenge #88 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 88 10",
        "output": "Queue operation #88 executed with FIFO/Priority invariant preserved (Code: 880)",
        "explanation": "Executes logic for Queue Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000089",
    "book": "queues",
    "order_index": 89,
    "title": "#089 Queue Algorithm Problem 89",
    "slug": "queues-089-queue-algorithm-problem-89",
    "description": "Solve queue and priority queue challenge #89 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 89 10",
        "output": "Queue operation #89 executed with FIFO/Priority invariant preserved (Code: 890)",
        "explanation": "Executes logic for Queue Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000090",
    "book": "queues",
    "order_index": 90,
    "title": "#090 Queue Algorithm Problem 90",
    "slug": "queues-090-queue-algorithm-problem-90",
    "description": "Solve queue and priority queue challenge #90 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 90 10",
        "output": "Queue operation #90 executed with FIFO/Priority invariant preserved (Code: 900)",
        "explanation": "Executes logic for Queue Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000091",
    "book": "queues",
    "order_index": 91,
    "title": "#091 Queue Algorithm Problem 91",
    "slug": "queues-091-queue-algorithm-problem-91",
    "description": "Solve queue and priority queue challenge #91 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 91 10",
        "output": "Queue operation #91 executed with FIFO/Priority invariant preserved (Code: 910)",
        "explanation": "Executes logic for Queue Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000092",
    "book": "queues",
    "order_index": 92,
    "title": "#092 Queue Algorithm Problem 92",
    "slug": "queues-092-queue-algorithm-problem-92",
    "description": "Solve queue and priority queue challenge #92 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 92 10",
        "output": "Queue operation #92 executed with FIFO/Priority invariant preserved (Code: 920)",
        "explanation": "Executes logic for Queue Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000093",
    "book": "queues",
    "order_index": 93,
    "title": "#093 Queue Algorithm Problem 93",
    "slug": "queues-093-queue-algorithm-problem-93",
    "description": "Solve queue and priority queue challenge #93 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 93 10",
        "output": "Queue operation #93 executed with FIFO/Priority invariant preserved (Code: 930)",
        "explanation": "Executes logic for Queue Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000094",
    "book": "queues",
    "order_index": 94,
    "title": "#094 Queue Algorithm Problem 94",
    "slug": "queues-094-queue-algorithm-problem-94",
    "description": "Solve queue and priority queue challenge #94 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 94 10",
        "output": "Queue operation #94 executed with FIFO/Priority invariant preserved (Code: 940)",
        "explanation": "Executes logic for Queue Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000095",
    "book": "queues",
    "order_index": 95,
    "title": "#095 Queue Algorithm Problem 95",
    "slug": "queues-095-queue-algorithm-problem-95",
    "description": "Solve queue and priority queue challenge #95 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 95 10",
        "output": "Queue operation #95 executed with FIFO/Priority invariant preserved (Code: 950)",
        "explanation": "Executes logic for Queue Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000096",
    "book": "queues",
    "order_index": 96,
    "title": "#096 Queue Algorithm Problem 96",
    "slug": "queues-096-queue-algorithm-problem-96",
    "description": "Solve queue and priority queue challenge #96 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 96 10",
        "output": "Queue operation #96 executed with FIFO/Priority invariant preserved (Code: 960)",
        "explanation": "Executes logic for Queue Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000097",
    "book": "queues",
    "order_index": 97,
    "title": "#097 Queue Algorithm Problem 97",
    "slug": "queues-097-queue-algorithm-problem-97",
    "description": "Solve queue and priority queue challenge #97 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 97 10",
        "output": "Queue operation #97 executed with FIFO/Priority invariant preserved (Code: 970)",
        "explanation": "Executes logic for Queue Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000098",
    "book": "queues",
    "order_index": 98,
    "title": "#098 Queue Algorithm Problem 98",
    "slug": "queues-098-queue-algorithm-problem-98",
    "description": "Solve queue and priority queue challenge #98 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 98 10",
        "output": "Queue operation #98 executed with FIFO/Priority invariant preserved (Code: 980)",
        "explanation": "Executes logic for Queue Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000099",
    "book": "queues",
    "order_index": 99,
    "title": "#099 Queue Algorithm Problem 99",
    "slug": "queues-099-queue-algorithm-problem-99",
    "description": "Solve queue and priority queue challenge #99 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 99 10",
        "output": "Queue operation #99 executed with FIFO/Priority invariant preserved (Code: 990)",
        "explanation": "Executes logic for Queue Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6009-000000000100",
    "book": "queues",
    "order_index": 100,
    "title": "#100 Queue Algorithm Problem 100",
    "slug": "queues-100-queue-algorithm-problem-100",
    "description": "Solve queue and priority queue challenge #100 using BFS traversals, heap ordering, or stream scheduling.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Queues & Priority Queues",
    "tags": [
      "Queue",
      "std::queue",
      "Priority Queue",
      "BFS",
      "FIFO",
      "Heap"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "QUEUE_OP 100 10",
        "output": "Queue operation #100 executed with FIFO/Priority invariant preserved (Code: 1000)",
        "explanation": "Executes logic for Queue Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Queue Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
