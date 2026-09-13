import { Problem } from '../../types/problem';

export const DATA_STRUCTURES_STL_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6005-000000000001",
    "book": "datastructuresstl",
    "order_index": 1,
    "title": "#001 STL Container Categories Identification",
    "slug": "datastructuresstl-001-stl-container-categories-identification",
    "description": "Identify whether a given container is Sequence (vector, list, deque), Associative (set, map), or Adapter (stack, queue).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "std::vector vs std::map vs std::stack",
        "output": "Vector: Sequence | Map: Associative | Stack: Container Adapter",
        "explanation": "Executes logic for STL Container Categories Identification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Container Categories Identification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Container Categories Identification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Container Categories Identification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000002",
    "book": "datastructuresstl",
    "order_index": 2,
    "title": "#002 STL Time Complexity Comparison",
    "slug": "datastructuresstl-002-stl-time-complexity-comparison",
    "description": "Compare asymptotic lookup and insertion time of `std::vector` vs `std::list` vs `std::unordered_map`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lookup time comparison",
        "output": "Vector: O(1) index | List: O(N) traversal | Unordered_map: O(1) avg hash",
        "explanation": "Executes logic for STL Time Complexity Comparison."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Time Complexity Comparison\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Time Complexity Comparison\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Time Complexity Comparison\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000003",
    "book": "datastructuresstl",
    "order_index": 3,
    "title": "#003 STL Container Sizing Methods (size, empty, max_size)",
    "slug": "datastructuresstl-003-stl-container-sizing-methods-size-empty-max-size",
    "description": "Inspect `.size()`, `.empty()`, and `.max_size()` across diverse STL containers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector with 3 items",
        "output": "Size: 3, Empty: false, Max Size: 4611686018427387903",
        "explanation": "Executes logic for STL Container Sizing Methods (size, empty, max_size)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Container Sizing Methods (size, empty, max_size)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Container Sizing Methods (size, empty, max_size)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Container Sizing Methods (size, empty, max_size)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000004",
    "book": "datastructuresstl",
    "order_index": 4,
    "title": "#004 STL Container Swapping with `std::swap` and member `swap()`",
    "slug": "datastructuresstl-004-stl-container-swapping-with-std-swap-and-member-sw",
    "description": "Swap contents of two large containers in O(1) time without copying elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Swap VecA and VecB",
        "output": "O(1) Swap completed: Internal buffer pointers exchanged",
        "explanation": "Executes logic for STL Container Swapping with `std::swap` and member `swap()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Container Swapping with `std::swap` and member `swap()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Container Swapping with `std::swap` and member `swap()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Container Swapping with `std::swap` and member `swap()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000005",
    "book": "datastructuresstl",
    "order_index": 5,
    "title": "#005 STL Container Element Access: `operator[]` vs `at()`",
    "slug": "datastructuresstl-005-stl-container-element-access-operator-vs-at",
    "description": "Compare fast unchecked indexing `arr[i]` with safe bounds-checked `arr.at(i)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Index 0 vs Index 10",
        "output": "arr[0] = 10, arr.at(10) threw std::out_of_range",
        "explanation": "Executes logic for STL Container Element Access: `operator[]` vs `at()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Container Element Access: `operator[]` vs `at()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Container Element Access: `operator[]` vs `at()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Container Element Access: `operator[]` vs `at()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000006",
    "book": "datastructuresstl",
    "order_index": 6,
    "title": "#006 Sequence Container: `std::array` (Fixed Size)",
    "slug": "datastructuresstl-006-sequence-container-std-array-fixed-size",
    "description": "Demonstrate `std::array<int, 5>` compile-time fixed array with STL iterator support.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Array<int, 5> = {1, 2, 3, 4, 5}",
        "output": "std::array initialized on stack: Sum = 15",
        "explanation": "Executes logic for Sequence Container: `std::array` (Fixed Size)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sequence Container: `std::array` (Fixed Size)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sequence Container: `std::array` (Fixed Size)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sequence Container: `std::array` (Fixed Size)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000007",
    "book": "datastructuresstl",
    "order_index": 7,
    "title": "#007 Sequence Container: `std::vector` Dynamic Growth",
    "slug": "datastructuresstl-007-sequence-container-std-vector-dynamic-growth",
    "description": "Observe vector capacity doubling (1 -> 2 -> 4 -> 8) during push_back operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 5 items",
        "output": "Size: 5, Capacity: 8 (Doubled dynamically)",
        "explanation": "Executes logic for Sequence Container: `std::vector` Dynamic Growth."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sequence Container: `std::vector` Dynamic Growth\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sequence Container: `std::vector` Dynamic Growth\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sequence Container: `std::vector` Dynamic Growth\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000008",
    "book": "datastructuresstl",
    "order_index": 8,
    "title": "#008 Sequence Container: `std::deque` Double-Ended Buffer",
    "slug": "datastructuresstl-008-sequence-container-std-deque-double-ended-buffer",
    "description": "Push elements to both front and back in O(1) time using `std::deque`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PushFront 10, PushBack 20",
        "output": "Deque: [10, 20]",
        "explanation": "Executes logic for Sequence Container: `std::deque` Double-Ended Buffer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sequence Container: `std::deque` Double-Ended Buffer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sequence Container: `std::deque` Double-Ended Buffer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sequence Container: `std::deque` Double-Ended Buffer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000009",
    "book": "datastructuresstl",
    "order_index": 9,
    "title": "#009 Sequence Container: `std::forward_list` (Singly Linked List)",
    "slug": "datastructuresstl-009-sequence-container-std-forward-list-singly-linked",
    "description": "Use `std::forward_list` with minimal memory overhead (single next pointer per node).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PushFront 1, 2, 3",
        "output": "Forward list: 3 -> 2 -> 1 -> NULL",
        "explanation": "Executes logic for Sequence Container: `std::forward_list` (Singly Linked List)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sequence Container: `std::forward_list` (Singly Linked List)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sequence Container: `std::forward_list` (Singly Linked List)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sequence Container: `std::forward_list` (Singly Linked List)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000010",
    "book": "datastructuresstl",
    "order_index": 10,
    "title": "#010 Sequence Container: `std::list` (Doubly Linked List)",
    "slug": "datastructuresstl-010-sequence-container-std-list-doubly-linked-list",
    "description": "Insert and delete elements in the middle of a `std::list` in O(1) time given an iterator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 99 after first element",
        "output": "List: [10, 99, 20, 30]",
        "explanation": "Executes logic for Sequence Container: `std::list` (Doubly Linked List)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sequence Container: `std::list` (Doubly Linked List)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sequence Container: `std::list` (Doubly Linked List)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sequence Container: `std::list` (Doubly Linked List)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000011",
    "book": "datastructuresstl",
    "order_index": 11,
    "title": "#011 Container Adapter: `std::stack` (LIFO)",
    "slug": "datastructuresstl-011-container-adapter-std-stack-lifo",
    "description": "Demonstrate Last-In First-Out operations with `push()`, `pop()`, `top()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 1, 2, 3 -> Pop",
        "output": "Top: 3 -> Popped -> New Top: 2",
        "explanation": "Executes logic for Container Adapter: `std::stack` (LIFO)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Adapter: `std::stack` (LIFO)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Adapter: `std::stack` (LIFO)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Adapter: `std::stack` (LIFO)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000012",
    "book": "datastructuresstl",
    "order_index": 12,
    "title": "#012 Container Adapter: `std::queue` (FIFO)",
    "slug": "datastructuresstl-012-container-adapter-std-queue-fifo",
    "description": "Demonstrate First-In First-Out operations with `push()`, `pop()`, `front()`, `back()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 1, 2, 3 -> Pop",
        "output": "Front: 1 -> Popped -> New Front: 2",
        "explanation": "Executes logic for Container Adapter: `std::queue` (FIFO)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Adapter: `std::queue` (FIFO)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Adapter: `std::queue` (FIFO)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Adapter: `std::queue` (FIFO)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000013",
    "book": "datastructuresstl",
    "order_index": 13,
    "title": "#013 Container Adapter: `std::priority_queue` (Max-Heap Default)",
    "slug": "datastructuresstl-013-container-adapter-std-priority-queue-max-heap-defa",
    "description": "Demonstrate priority queue always serving the maximum element first.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 30, 10, 50, 20",
        "output": "Top element: 50",
        "explanation": "Executes logic for Container Adapter: `std::priority_queue` (Max-Heap Default)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Adapter: `std::priority_queue` (Max-Heap Default)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Adapter: `std::priority_queue` (Max-Heap Default)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Adapter: `std::priority_queue` (Max-Heap Default)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000014",
    "book": "datastructuresstl",
    "order_index": 14,
    "title": "#014 Associative Container: `std::set` (Ordered Unique)",
    "slug": "datastructuresstl-014-associative-container-std-set-ordered-unique",
    "description": "Insert duplicate values into `std::set` and observe automatic deduplication and sorted order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 5, 2, 8, 2, 5",
        "output": "Set: {2, 5, 8} (Sorted, Unique)",
        "explanation": "Executes logic for Associative Container: `std::set` (Ordered Unique)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Associative Container: `std::set` (Ordered Unique)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Associative Container: `std::set` (Ordered Unique)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Associative Container: `std::set` (Ordered Unique)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000015",
    "book": "datastructuresstl",
    "order_index": 15,
    "title": "#015 Associative Container: `std::multiset` (Ordered with Duplicates)",
    "slug": "datastructuresstl-015-associative-container-std-multiset-ordered-with-du",
    "description": "Store duplicate values in sorted order using `std::multiset`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 5, 2, 8, 2, 5",
        "output": "Multiset: {2, 2, 5, 5, 8}",
        "explanation": "Executes logic for Associative Container: `std::multiset` (Ordered with Duplicates)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Associative Container: `std::multiset` (Ordered with Duplicates)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Associative Container: `std::multiset` (Ordered with Duplicates)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Associative Container: `std::multiset` (Ordered with Duplicates)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000016",
    "book": "datastructuresstl",
    "order_index": 16,
    "title": "#016 Associative Container: `std::map` (Key-Value Ordered)",
    "slug": "datastructuresstl-016-associative-container-std-map-key-value-ordered",
    "description": "Store student grades keyed by name in alphabetical order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Put 'Bob': 85, 'Alice': 95",
        "output": "Map in order: Alice -> 95, Bob -> 85",
        "explanation": "Executes logic for Associative Container: `std::map` (Key-Value Ordered)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Associative Container: `std::map` (Key-Value Ordered)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Associative Container: `std::map` (Key-Value Ordered)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Associative Container: `std::map` (Key-Value Ordered)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000017",
    "book": "datastructuresstl",
    "order_index": 17,
    "title": "#017 Associative Container: `std::multimap` (Duplicate Keys)",
    "slug": "datastructuresstl-017-associative-container-std-multimap-duplicate-keys",
    "description": "Store multiple phone numbers under the same contact name.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Put 'John': '123', 'John': '456'",
        "output": "Multimap for 'John': ['123', '456']",
        "explanation": "Executes logic for Associative Container: `std::multimap` (Duplicate Keys)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Associative Container: `std::multimap` (Duplicate Keys)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Associative Container: `std::multimap` (Duplicate Keys)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Associative Container: `std::multimap` (Duplicate Keys)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000018",
    "book": "datastructuresstl",
    "order_index": 18,
    "title": "#018 Unordered Associative: `std::unordered_set` (Hash Table)",
    "slug": "datastructuresstl-018-unordered-associative-std-unordered-set-hash-table",
    "description": "Demonstrate O(1) average lookup and insertion with `std::unordered_set`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 100, 200, 300",
        "output": "Unordered set contains 200: true (O(1) hash lookup)",
        "explanation": "Executes logic for Unordered Associative: `std::unordered_set` (Hash Table)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Associative: `std::unordered_set` (Hash Table)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Associative: `std::unordered_set` (Hash Table)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Associative: `std::unordered_set` (Hash Table)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000019",
    "book": "datastructuresstl",
    "order_index": 19,
    "title": "#019 Unordered Associative: `std::unordered_map` (Hash Map)",
    "slug": "datastructuresstl-019-unordered-associative-std-unordered-map-hash-map",
    "description": "Implement fast frequency counter for words using `std::unordered_map<string, int>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Words: 'apple banana apple'",
        "output": "Frequencies: apple=2, banana=1",
        "explanation": "Executes logic for Unordered Associative: `std::unordered_map` (Hash Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Associative: `std::unordered_map` (Hash Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Associative: `std::unordered_map` (Hash Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Associative: `std::unordered_map` (Hash Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000020",
    "book": "datastructuresstl",
    "order_index": 20,
    "title": "#020 Unordered Associative: `std::unordered_multiset`",
    "slug": "datastructuresstl-020-unordered-associative-std-unordered-multiset",
    "description": "Hash table supporting duplicate elements without sorting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert duplicate hashes",
        "output": "Unordered multiset count of 42: 3",
        "explanation": "Executes logic for Unordered Associative: `std::unordered_multiset`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Associative: `std::unordered_multiset`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Associative: `std::unordered_multiset`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Associative: `std::unordered_multiset`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000021",
    "book": "datastructuresstl",
    "order_index": 21,
    "title": "#021 Unordered Associative: `std::unordered_multimap`",
    "slug": "datastructuresstl-021-unordered-associative-std-unordered-multimap",
    "description": "Hash table storing multiple values per key with O(1) average access.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map user to multiple roles",
        "output": "Roles for user: ['Admin', 'Editor']",
        "explanation": "Executes logic for Unordered Associative: `std::unordered_multimap`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Associative: `std::unordered_multimap`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Associative: `std::unordered_multimap`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Associative: `std::unordered_multimap`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000022",
    "book": "datastructuresstl",
    "order_index": 22,
    "title": "#022 STL Container Memory Overhead Benchmark",
    "slug": "datastructuresstl-022-stl-container-memory-overhead-benchmark",
    "description": "Compare memory consumed per element across `vector<int>`, `list<int>`, and `set<int>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10,000 elements",
        "output": "Vector: 4B/elem | List: 24B/elem | Set: 32B/elem (Tree node overhead)",
        "explanation": "Executes logic for STL Container Memory Overhead Benchmark."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Container Memory Overhead Benchmark\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Container Memory Overhead Benchmark\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Container Memory Overhead Benchmark\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000023",
    "book": "datastructuresstl",
    "order_index": 23,
    "title": "#023 Iterating with Range-Based For Loop (`for (const auto& item : c)`)",
    "slug": "datastructuresstl-023-iterating-with-range-based-for-loop-for-const-auto",
    "description": "Demonstrate clean modern C++ range-based loop across any STL container.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Traverse vector [1, 2, 3]",
        "output": "Items: 1, 2, 3",
        "explanation": "Executes logic for Iterating with Range-Based For Loop (`for (const auto& item : c)`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterating with Range-Based For Loop (`for (const auto& item : c)`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterating with Range-Based For Loop (`for (const auto& item : c)`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterating with Range-Based For Loop (`for (const auto& item : c)`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000024",
    "book": "datastructuresstl",
    "order_index": 24,
    "title": "#024 Modifying Elements in Range-Based For Loop (`for (auto& item : c)`)",
    "slug": "datastructuresstl-024-modifying-elements-in-range-based-for-loop-for-aut",
    "description": "Double every element in a container in-place using reference in range-based loop.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector [10, 20, 30] * 2",
        "output": "Modified vector: [20, 40, 60]",
        "explanation": "Executes logic for Modifying Elements in Range-Based For Loop (`for (auto& item : c)`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Modifying Elements in Range-Based For Loop (`for (auto& item : c)`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Modifying Elements in Range-Based For Loop (`for (auto& item : c)`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Modifying Elements in Range-Based For Loop (`for (auto& item : c)`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000025",
    "book": "datastructuresstl",
    "order_index": 25,
    "title": "#025 STL Structured Binding with Maps (C++17 `auto [key, val]`)",
    "slug": "datastructuresstl-025-stl-structured-binding-with-maps-c-17-auto-key-val",
    "description": "Decompose map pairs into key and value variables cleanly in loop.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map: {Alice: 95, Bob: 88}",
        "output": "Pair: Key='Alice', Value=95",
        "explanation": "Executes logic for STL Structured Binding with Maps (C++17 `auto [key, val]`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Structured Binding with Maps (C++17 `auto [key, val]`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Structured Binding with Maps (C++17 `auto [key, val]`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Structured Binding with Maps (C++17 `auto [key, val]`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000026",
    "book": "datastructuresstl",
    "order_index": 26,
    "title": "#026 Container Emplacement vs Push (`emplace_back` vs `push_back`)",
    "slug": "datastructuresstl-026-container-emplacement-vs-push-emplace-back-vs-push",
    "description": "Construct object in-place in container buffer avoiding temporary copy.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "emplace_back(101, 'Item')",
        "output": "Object constructed in-place (0 copy/move calls)",
        "explanation": "Executes logic for Container Emplacement vs Push (`emplace_back` vs `push_back`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Emplacement vs Push (`emplace_back` vs `push_back`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Emplacement vs Push (`emplace_back` vs `push_back`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Emplacement vs Push (`emplace_back` vs `push_back`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000027",
    "book": "datastructuresstl",
    "order_index": 27,
    "title": "#027 STL Container Initializer Lists (`{1, 2, 3}`)",
    "slug": "datastructuresstl-027-stl-container-initializer-lists-1-2-3",
    "description": "Initialize vector, set, map directly using braced initializer list syntax.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector = {10, 20, 30}",
        "output": "Vector initialized with 3 elements: [10, 20, 30]",
        "explanation": "Executes logic for STL Container Initializer Lists (`{1, 2, 3}`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Container Initializer Lists (`{1, 2, 3}`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Container Initializer Lists (`{1, 2, 3}`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Container Initializer Lists (`{1, 2, 3}`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000028",
    "book": "datastructuresstl",
    "order_index": 28,
    "title": "#028 Converting Between STL Containers (Vector to Set)",
    "slug": "datastructuresstl-028-converting-between-stl-containers-vector-to-set",
    "description": "Deduplicate and sort a `std::vector` by passing its iterators to `std::set` constructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector [4, 1, 3, 1, 4] to Set",
        "output": "Set from vector iterators: {1, 3, 4}",
        "explanation": "Executes logic for Converting Between STL Containers (Vector to Set)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Converting Between STL Containers (Vector to Set)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Converting Between STL Containers (Vector to Set)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Converting Between STL Containers (Vector to Set)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000029",
    "book": "datastructuresstl",
    "order_index": 29,
    "title": "#029 Converting Map Keys to Vector",
    "slug": "datastructuresstl-029-converting-map-keys-to-vector",
    "description": "Extract all keys from `std::map<string, int>` into a `std::vector<string>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map with 3 keys",
        "output": "Keys Vector: ['Alice', 'Bob', 'Charlie']",
        "explanation": "Executes logic for Converting Map Keys to Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Converting Map Keys to Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Converting Map Keys to Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Converting Map Keys to Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000030",
    "book": "datastructuresstl",
    "order_index": 30,
    "title": "#030 Converting Map Values to Vector",
    "slug": "datastructuresstl-030-converting-map-values-to-vector",
    "description": "Extract all values from `std::map` into `std::vector`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map scores [95, 88, 72]",
        "output": "Values Vector: [95, 88, 72]",
        "explanation": "Executes logic for Converting Map Values to Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Converting Map Values to Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Converting Map Values to Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Converting Map Values to Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000031",
    "book": "datastructuresstl",
    "order_index": 31,
    "title": "#031 Sorting Container with Custom Functor Comparator",
    "slug": "datastructuresstl-031-sorting-container-with-custom-functor-comparator",
    "description": "Sort vector of structs using custom functor struct implementing `operator()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort students by GPA descending",
        "output": "Sorted: Bob (3.9), Alice (3.8), Charlie (3.5)",
        "explanation": "Executes logic for Sorting Container with Custom Functor Comparator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sorting Container with Custom Functor Comparator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sorting Container with Custom Functor Comparator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sorting Container with Custom Functor Comparator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000032",
    "book": "datastructuresstl",
    "order_index": 32,
    "title": "#032 Sorting Container with Lambda Comparator",
    "slug": "datastructuresstl-032-sorting-container-with-lambda-comparator",
    "description": "Sort vector of strings by length using inline lambda `[](const string& a, const string& b) { return a.size() < b.size(); }`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "['elephant', 'cat', 'dog', 'hippopotamus']",
        "output": "Sorted by length: ['cat', 'dog', 'elephant', 'hippopotamus']",
        "explanation": "Executes logic for Sorting Container with Lambda Comparator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sorting Container with Lambda Comparator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sorting Container with Lambda Comparator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sorting Container with Lambda Comparator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000033",
    "book": "datastructuresstl",
    "order_index": 33,
    "title": "#033 Searching in STL: Member Function vs Generic Algorithm (`map.find()` vs `std::find()`)",
    "slug": "datastructuresstl-033-searching-in-stl-member-function-vs-generic-algori",
    "description": "Demonstrate why `map.find(k)` is O(log N) while `std::find(m.begin(), m.end(), v)` is O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lookup in 100k map",
        "output": "Member map.find(): O(log N) fast tree lookup verified",
        "explanation": "Executes logic for Searching in STL: Member Function vs Generic Algorithm (`map.find()` vs `std::find()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Searching in STL: Member Function vs Generic Algorithm (`map.find()` vs `std::find()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Searching in STL: Member Function vs Generic Algorithm (`map.find()` vs `std::find()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Searching in STL: Member Function vs Generic Algorithm (`map.find()` vs `std::find()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000034",
    "book": "datastructuresstl",
    "order_index": 34,
    "title": "#034 Erasing Elements: Erase-Remove Idiom (Pre-C++20)",
    "slug": "datastructuresstl-034-erasing-elements-erase-remove-idiom-pre-c-20",
    "description": "Remove all occurrences of value 0 from vector using `vec.erase(remove(vec.begin(), vec.end(), 0), vec.end())`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 0, 2, 0, 3, 0]",
        "output": "Erase-Remove result: [1, 2, 3]",
        "explanation": "Executes logic for Erasing Elements: Erase-Remove Idiom (Pre-C++20)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Erasing Elements: Erase-Remove Idiom (Pre-C++20)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Erasing Elements: Erase-Remove Idiom (Pre-C++20)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Erasing Elements: Erase-Remove Idiom (Pre-C++20)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000035",
    "book": "datastructuresstl",
    "order_index": 35,
    "title": "#035 Erasing Elements: Modern `std::erase` and `std::erase_if` (C++20)",
    "slug": "datastructuresstl-035-erasing-elements-modern-std-erase-and-std-erase-if",
    "description": "Remove all even numbers from vector using uniform `std::erase_if(vec, predicate)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5, 6]",
        "output": "std::erase_if result: [1, 3, 5]",
        "explanation": "Executes logic for Erasing Elements: Modern `std::erase` and `std::erase_if` (C++20)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Erasing Elements: Modern `std::erase` and `std::erase_if` (C++20)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Erasing Elements: Modern `std::erase` and `std::erase_if` (C++20)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Erasing Elements: Modern `std::erase` and `std::erase_if` (C++20)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000036",
    "book": "datastructuresstl",
    "order_index": 36,
    "title": "#036 STL `std::pair` and `std::make_pair`",
    "slug": "datastructuresstl-036-stl-std-pair-and-std-make-pair",
    "description": "Create, compare, and unpack `std::pair<int, string>` objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pair(10, 'Apple')",
        "output": "Pair first: 10, second: 'Apple'",
        "explanation": "Executes logic for STL `std::pair` and `std::make_pair`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL `std::pair` and `std::make_pair`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL `std::pair` and `std::make_pair`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL `std::pair` and `std::make_pair`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000037",
    "book": "datastructuresstl",
    "order_index": 37,
    "title": "#037 STL `std::tuple` and `std::get` (C++11)",
    "slug": "datastructuresstl-037-stl-std-tuple-and-std-get-c-11",
    "description": "Store heterogeneous triad `std::tuple<int, string, double>` and access with `std::get<N>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tuple(101, 'Laptop', 999.99)",
        "output": "ID=101, Name='Laptop', Price=999.99",
        "explanation": "Executes logic for STL `std::tuple` and `std::get` (C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL `std::tuple` and `std::get` (C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL `std::tuple` and `std::get` (C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL `std::tuple` and `std::get` (C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000038",
    "book": "datastructuresstl",
    "order_index": 38,
    "title": "#038 STL `std::bitset` for Compact Binary Flags",
    "slug": "datastructuresstl-038-stl-std-bitset-for-compact-binary-flags",
    "description": "Store 64 boolean flags in 8 bytes with fast bitwise operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set bits 0, 3, 7 in Bitset<8>",
        "output": "Bitset: 10001001 (Count: 3 bits set)",
        "explanation": "Executes logic for STL `std::bitset` for Compact Binary Flags."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL `std::bitset` for Compact Binary Flags\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL `std::bitset` for Compact Binary Flags\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL `std::bitset` for Compact Binary Flags\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000039",
    "book": "datastructuresstl",
    "order_index": 39,
    "title": "#039 Custom Hash Function for `std::unordered_set` with Custom Class",
    "slug": "datastructuresstl-039-custom-hash-function-for-std-unordered-set-with-cu",
    "description": "Provide `std::hash<Point>` specialization or custom hash functor for user struct.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert Point(3,4) into unordered_set",
        "output": "Custom Point hashed and inserted into unordered_set",
        "explanation": "Executes logic for Custom Hash Function for `std::unordered_set` with Custom Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Hash Function for `std::unordered_set` with Custom Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Hash Function for `std::unordered_set` with Custom Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Hash Function for `std::unordered_set` with Custom Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000040",
    "book": "datastructuresstl",
    "order_index": 40,
    "title": "#040 Custom Hash Function for `std::unordered_map` with Composite Key",
    "slug": "datastructuresstl-040-custom-hash-function-for-std-unordered-map-with-co",
    "description": "Hash pair `std::pair<int, int>` as key in `std::unordered_map`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map[(1, 2)] = 100",
        "output": "Composite pair key stored and retrieved: 100",
        "explanation": "Executes logic for Custom Hash Function for `std::unordered_map` with Composite Key."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Hash Function for `std::unordered_map` with Composite Key\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Hash Function for `std::unordered_map` with Composite Key\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Hash Function for `std::unordered_map` with Composite Key\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000041",
    "book": "datastructuresstl",
    "order_index": 41,
    "title": "#041 Nested STL Data Structures: `map<string, vector<int>>`",
    "slug": "datastructuresstl-041-nested-stl-data-structures-map-string-vector-int",
    "description": "Group test scores under student names using map of vectors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice: [90, 95], Bob: [80]",
        "output": "Alice avg score: 92.5",
        "explanation": "Executes logic for Nested STL Data Structures: `map<string, vector<int>>`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Nested STL Data Structures: `map<string, vector<int>>`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nested STL Data Structures: `map<string, vector<int>>`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nested STL Data Structures: `map<string, vector<int>>`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000042",
    "book": "datastructuresstl",
    "order_index": 42,
    "title": "#042 Nested STL Data Structures: `vector<unordered_map<string, string>>`",
    "slug": "datastructuresstl-042-nested-stl-data-structures-vector-unordered-map-st",
    "description": "Represent table of JSON-like document records.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2 document records",
        "output": "Record 0: name=Alice, role=Admin",
        "explanation": "Executes logic for Nested STL Data Structures: `vector<unordered_map<string, string>>`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Nested STL Data Structures: `vector<unordered_map<string, string>>`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nested STL Data Structures: `vector<unordered_map<string, string>>`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nested STL Data Structures: `vector<unordered_map<string, string>>`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000043",
    "book": "datastructuresstl",
    "order_index": 43,
    "title": "#043 Nested STL Data Structures: `unordered_map<int, set<int>>` (Adjacency List)",
    "slug": "datastructuresstl-043-nested-stl-data-structures-unordered-map-int-set-i",
    "description": "Represent graph adjacency list with automatic neighbor deduplication and sorting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Edge 1->2, 1->3, 1->2",
        "output": "Node 1 neighbors: {2, 3}",
        "explanation": "Executes logic for Nested STL Data Structures: `unordered_map<int, set<int>>` (Adjacency List)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Nested STL Data Structures: `unordered_map<int, set<int>>` (Adjacency List)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nested STL Data Structures: `unordered_map<int, set<int>>` (Adjacency List)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nested STL Data Structures: `unordered_map<int, set<int>>` (Adjacency List)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000044",
    "book": "datastructuresstl",
    "order_index": 44,
    "title": "#044 Container Merging with `std::merge`",
    "slug": "datastructuresstl-044-container-merging-with-std-merge",
    "description": "Merge two sorted vectors into a single sorted destination vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 3, 5] B: [2, 4, 6]",
        "output": "Merged: [1, 2, 3, 4, 5, 6]",
        "explanation": "Executes logic for Container Merging with `std::merge`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Merging with `std::merge`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Merging with `std::merge`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Merging with `std::merge`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000045",
    "book": "datastructuresstl",
    "order_index": 45,
    "title": "#045 Container Set Operations: `std::set_intersection`",
    "slug": "datastructuresstl-045-container-set-operations-std-set-intersection",
    "description": "Find common elements between two sorted ranges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3, 4] B: [2, 4, 6]",
        "output": "Intersection: [2, 4]",
        "explanation": "Executes logic for Container Set Operations: `std::set_intersection`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Set Operations: `std::set_intersection`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Set Operations: `std::set_intersection`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Set Operations: `std::set_intersection`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000046",
    "book": "datastructuresstl",
    "order_index": 46,
    "title": "#046 Container Set Operations: `std::set_difference`",
    "slug": "datastructuresstl-046-container-set-operations-std-set-difference",
    "description": "Find elements present in A but not in B.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3, 4] B: [2, 4, 6]",
        "output": "Difference A - B: [1, 3]",
        "explanation": "Executes logic for Container Set Operations: `std::set_difference`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Set Operations: `std::set_difference`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Set Operations: `std::set_difference`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Set Operations: `std::set_difference`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000047",
    "book": "datastructuresstl",
    "order_index": 47,
    "title": "#047 Container Set Operations: `std::set_union`",
    "slug": "datastructuresstl-047-container-set-operations-std-set-union",
    "description": "Combine all unique elements from two sorted ranges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3] B: [3, 4, 5]",
        "output": "Union: [1, 2, 3, 4, 5]",
        "explanation": "Executes logic for Container Set Operations: `std::set_union`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Set Operations: `std::set_union`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Set Operations: `std::set_union`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Set Operations: `std::set_union`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000048",
    "book": "datastructuresstl",
    "order_index": 48,
    "title": "#048 Container Numeric Reduction: `std::accumulate`",
    "slug": "datastructuresstl-048-container-numeric-reduction-std-accumulate",
    "description": "Compute sum and product of container elements with `std::accumulate`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sum [1, 2, 3, 4, 5]",
        "output": "Accumulated Sum: 15, Product: 120",
        "explanation": "Executes logic for Container Numeric Reduction: `std::accumulate`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Numeric Reduction: `std::accumulate`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Numeric Reduction: `std::accumulate`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Numeric Reduction: `std::accumulate`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000049",
    "book": "datastructuresstl",
    "order_index": 49,
    "title": "#049 Container Element Counting: `std::count` and `std::count_if`",
    "slug": "datastructuresstl-049-container-element-counting-std-count-and-std-count",
    "description": "Count frequency of value and count elements satisfying condition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Count evens in [1, 2, 3, 4, 5, 6]",
        "output": "Even Count: 3",
        "explanation": "Executes logic for Container Element Counting: `std::count` and `std::count_if`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Element Counting: `std::count` and `std::count_if`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Element Counting: `std::count` and `std::count_if`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Element Counting: `std::count` and `std::count_if`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000050",
    "book": "datastructuresstl",
    "order_index": 50,
    "title": "#050 Container Maximum Element: `std::max_element` with Custom Comparator",
    "slug": "datastructuresstl-050-container-maximum-element-std-max-element-with-cus",
    "description": "Find most expensive product in vector of Product structs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Products: Laptop($1000), Mouse($25), Monitor($300)",
        "output": "Max Product: Laptop ($1000)",
        "explanation": "Executes logic for Container Maximum Element: `std::max_element` with Custom Comparator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container Maximum Element: `std::max_element` with Custom Comparator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container Maximum Element: `std::max_element` with Custom Comparator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container Maximum Element: `std::max_element` with Custom Comparator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000051",
    "book": "datastructuresstl",
    "order_index": 51,
    "title": "#051 STL Architecture Problem 51",
    "slug": "datastructuresstl-051-stl-architecture-problem-51",
    "description": "Apply STL container, algorithm, or adapter pattern #51 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 51 10",
        "output": "STL Structure #51 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000052",
    "book": "datastructuresstl",
    "order_index": 52,
    "title": "#052 STL Architecture Problem 52",
    "slug": "datastructuresstl-052-stl-architecture-problem-52",
    "description": "Apply STL container, algorithm, or adapter pattern #52 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 52 10",
        "output": "STL Structure #52 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000053",
    "book": "datastructuresstl",
    "order_index": 53,
    "title": "#053 STL Architecture Problem 53",
    "slug": "datastructuresstl-053-stl-architecture-problem-53",
    "description": "Apply STL container, algorithm, or adapter pattern #53 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 53 10",
        "output": "STL Structure #53 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000054",
    "book": "datastructuresstl",
    "order_index": 54,
    "title": "#054 STL Architecture Problem 54",
    "slug": "datastructuresstl-054-stl-architecture-problem-54",
    "description": "Apply STL container, algorithm, or adapter pattern #54 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 54 10",
        "output": "STL Structure #54 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000055",
    "book": "datastructuresstl",
    "order_index": 55,
    "title": "#055 STL Architecture Problem 55",
    "slug": "datastructuresstl-055-stl-architecture-problem-55",
    "description": "Apply STL container, algorithm, or adapter pattern #55 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 55 10",
        "output": "STL Structure #55 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000056",
    "book": "datastructuresstl",
    "order_index": 56,
    "title": "#056 STL Architecture Problem 56",
    "slug": "datastructuresstl-056-stl-architecture-problem-56",
    "description": "Apply STL container, algorithm, or adapter pattern #56 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 56 10",
        "output": "STL Structure #56 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000057",
    "book": "datastructuresstl",
    "order_index": 57,
    "title": "#057 STL Architecture Problem 57",
    "slug": "datastructuresstl-057-stl-architecture-problem-57",
    "description": "Apply STL container, algorithm, or adapter pattern #57 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 57 10",
        "output": "STL Structure #57 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000058",
    "book": "datastructuresstl",
    "order_index": 58,
    "title": "#058 STL Architecture Problem 58",
    "slug": "datastructuresstl-058-stl-architecture-problem-58",
    "description": "Apply STL container, algorithm, or adapter pattern #58 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 58 10",
        "output": "STL Structure #58 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000059",
    "book": "datastructuresstl",
    "order_index": 59,
    "title": "#059 STL Architecture Problem 59",
    "slug": "datastructuresstl-059-stl-architecture-problem-59",
    "description": "Apply STL container, algorithm, or adapter pattern #59 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 59 10",
        "output": "STL Structure #59 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000060",
    "book": "datastructuresstl",
    "order_index": 60,
    "title": "#060 STL Architecture Problem 60",
    "slug": "datastructuresstl-060-stl-architecture-problem-60",
    "description": "Apply STL container, algorithm, or adapter pattern #60 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 60 10",
        "output": "STL Structure #60 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000061",
    "book": "datastructuresstl",
    "order_index": 61,
    "title": "#061 STL Architecture Problem 61",
    "slug": "datastructuresstl-061-stl-architecture-problem-61",
    "description": "Apply STL container, algorithm, or adapter pattern #61 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 61 10",
        "output": "STL Structure #61 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000062",
    "book": "datastructuresstl",
    "order_index": 62,
    "title": "#062 STL Architecture Problem 62",
    "slug": "datastructuresstl-062-stl-architecture-problem-62",
    "description": "Apply STL container, algorithm, or adapter pattern #62 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 62 10",
        "output": "STL Structure #62 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000063",
    "book": "datastructuresstl",
    "order_index": 63,
    "title": "#063 STL Architecture Problem 63",
    "slug": "datastructuresstl-063-stl-architecture-problem-63",
    "description": "Apply STL container, algorithm, or adapter pattern #63 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 63 10",
        "output": "STL Structure #63 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000064",
    "book": "datastructuresstl",
    "order_index": 64,
    "title": "#064 STL Architecture Problem 64",
    "slug": "datastructuresstl-064-stl-architecture-problem-64",
    "description": "Apply STL container, algorithm, or adapter pattern #64 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 64 10",
        "output": "STL Structure #64 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000065",
    "book": "datastructuresstl",
    "order_index": 65,
    "title": "#065 STL Architecture Problem 65",
    "slug": "datastructuresstl-065-stl-architecture-problem-65",
    "description": "Apply STL container, algorithm, or adapter pattern #65 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 65 10",
        "output": "STL Structure #65 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000066",
    "book": "datastructuresstl",
    "order_index": 66,
    "title": "#066 STL Architecture Problem 66",
    "slug": "datastructuresstl-066-stl-architecture-problem-66",
    "description": "Apply STL container, algorithm, or adapter pattern #66 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 66 10",
        "output": "STL Structure #66 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000067",
    "book": "datastructuresstl",
    "order_index": 67,
    "title": "#067 STL Architecture Problem 67",
    "slug": "datastructuresstl-067-stl-architecture-problem-67",
    "description": "Apply STL container, algorithm, or adapter pattern #67 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 67 10",
        "output": "STL Structure #67 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000068",
    "book": "datastructuresstl",
    "order_index": 68,
    "title": "#068 STL Architecture Problem 68",
    "slug": "datastructuresstl-068-stl-architecture-problem-68",
    "description": "Apply STL container, algorithm, or adapter pattern #68 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 68 10",
        "output": "STL Structure #68 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000069",
    "book": "datastructuresstl",
    "order_index": 69,
    "title": "#069 STL Architecture Problem 69",
    "slug": "datastructuresstl-069-stl-architecture-problem-69",
    "description": "Apply STL container, algorithm, or adapter pattern #69 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 69 10",
        "output": "STL Structure #69 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000070",
    "book": "datastructuresstl",
    "order_index": 70,
    "title": "#070 STL Architecture Problem 70",
    "slug": "datastructuresstl-070-stl-architecture-problem-70",
    "description": "Apply STL container, algorithm, or adapter pattern #70 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 70 10",
        "output": "STL Structure #70 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000071",
    "book": "datastructuresstl",
    "order_index": 71,
    "title": "#071 STL Architecture Problem 71",
    "slug": "datastructuresstl-071-stl-architecture-problem-71",
    "description": "Apply STL container, algorithm, or adapter pattern #71 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 71 10",
        "output": "STL Structure #71 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000072",
    "book": "datastructuresstl",
    "order_index": 72,
    "title": "#072 STL Architecture Problem 72",
    "slug": "datastructuresstl-072-stl-architecture-problem-72",
    "description": "Apply STL container, algorithm, or adapter pattern #72 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 72 10",
        "output": "STL Structure #72 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000073",
    "book": "datastructuresstl",
    "order_index": 73,
    "title": "#073 STL Architecture Problem 73",
    "slug": "datastructuresstl-073-stl-architecture-problem-73",
    "description": "Apply STL container, algorithm, or adapter pattern #73 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 73 10",
        "output": "STL Structure #73 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000074",
    "book": "datastructuresstl",
    "order_index": 74,
    "title": "#074 STL Architecture Problem 74",
    "slug": "datastructuresstl-074-stl-architecture-problem-74",
    "description": "Apply STL container, algorithm, or adapter pattern #74 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 74 10",
        "output": "STL Structure #74 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000075",
    "book": "datastructuresstl",
    "order_index": 75,
    "title": "#075 STL Architecture Problem 75",
    "slug": "datastructuresstl-075-stl-architecture-problem-75",
    "description": "Apply STL container, algorithm, or adapter pattern #75 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 75 10",
        "output": "STL Structure #75 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000076",
    "book": "datastructuresstl",
    "order_index": 76,
    "title": "#076 STL Architecture Problem 76",
    "slug": "datastructuresstl-076-stl-architecture-problem-76",
    "description": "Apply STL container, algorithm, or adapter pattern #76 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 76 10",
        "output": "STL Structure #76 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000077",
    "book": "datastructuresstl",
    "order_index": 77,
    "title": "#077 STL Architecture Problem 77",
    "slug": "datastructuresstl-077-stl-architecture-problem-77",
    "description": "Apply STL container, algorithm, or adapter pattern #77 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 77 10",
        "output": "STL Structure #77 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000078",
    "book": "datastructuresstl",
    "order_index": 78,
    "title": "#078 STL Architecture Problem 78",
    "slug": "datastructuresstl-078-stl-architecture-problem-78",
    "description": "Apply STL container, algorithm, or adapter pattern #78 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 78 10",
        "output": "STL Structure #78 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000079",
    "book": "datastructuresstl",
    "order_index": 79,
    "title": "#079 STL Architecture Problem 79",
    "slug": "datastructuresstl-079-stl-architecture-problem-79",
    "description": "Apply STL container, algorithm, or adapter pattern #79 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 79 10",
        "output": "STL Structure #79 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000080",
    "book": "datastructuresstl",
    "order_index": 80,
    "title": "#080 STL Architecture Problem 80",
    "slug": "datastructuresstl-080-stl-architecture-problem-80",
    "description": "Apply STL container, algorithm, or adapter pattern #80 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 80 10",
        "output": "STL Structure #80 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000081",
    "book": "datastructuresstl",
    "order_index": 81,
    "title": "#081 STL Architecture Problem 81",
    "slug": "datastructuresstl-081-stl-architecture-problem-81",
    "description": "Apply STL container, algorithm, or adapter pattern #81 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 81 10",
        "output": "STL Structure #81 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000082",
    "book": "datastructuresstl",
    "order_index": 82,
    "title": "#082 STL Architecture Problem 82",
    "slug": "datastructuresstl-082-stl-architecture-problem-82",
    "description": "Apply STL container, algorithm, or adapter pattern #82 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 82 10",
        "output": "STL Structure #82 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000083",
    "book": "datastructuresstl",
    "order_index": 83,
    "title": "#083 STL Architecture Problem 83",
    "slug": "datastructuresstl-083-stl-architecture-problem-83",
    "description": "Apply STL container, algorithm, or adapter pattern #83 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 83 10",
        "output": "STL Structure #83 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000084",
    "book": "datastructuresstl",
    "order_index": 84,
    "title": "#084 STL Architecture Problem 84",
    "slug": "datastructuresstl-084-stl-architecture-problem-84",
    "description": "Apply STL container, algorithm, or adapter pattern #84 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 84 10",
        "output": "STL Structure #84 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000085",
    "book": "datastructuresstl",
    "order_index": 85,
    "title": "#085 STL Architecture Problem 85",
    "slug": "datastructuresstl-085-stl-architecture-problem-85",
    "description": "Apply STL container, algorithm, or adapter pattern #85 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 85 10",
        "output": "STL Structure #85 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000086",
    "book": "datastructuresstl",
    "order_index": 86,
    "title": "#086 STL Architecture Problem 86",
    "slug": "datastructuresstl-086-stl-architecture-problem-86",
    "description": "Apply STL container, algorithm, or adapter pattern #86 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 86 10",
        "output": "STL Structure #86 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000087",
    "book": "datastructuresstl",
    "order_index": 87,
    "title": "#087 STL Architecture Problem 87",
    "slug": "datastructuresstl-087-stl-architecture-problem-87",
    "description": "Apply STL container, algorithm, or adapter pattern #87 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 87 10",
        "output": "STL Structure #87 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000088",
    "book": "datastructuresstl",
    "order_index": 88,
    "title": "#088 STL Architecture Problem 88",
    "slug": "datastructuresstl-088-stl-architecture-problem-88",
    "description": "Apply STL container, algorithm, or adapter pattern #88 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 88 10",
        "output": "STL Structure #88 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000089",
    "book": "datastructuresstl",
    "order_index": 89,
    "title": "#089 STL Architecture Problem 89",
    "slug": "datastructuresstl-089-stl-architecture-problem-89",
    "description": "Apply STL container, algorithm, or adapter pattern #89 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 89 10",
        "output": "STL Structure #89 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000090",
    "book": "datastructuresstl",
    "order_index": 90,
    "title": "#090 STL Architecture Problem 90",
    "slug": "datastructuresstl-090-stl-architecture-problem-90",
    "description": "Apply STL container, algorithm, or adapter pattern #90 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 90 10",
        "output": "STL Structure #90 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000091",
    "book": "datastructuresstl",
    "order_index": 91,
    "title": "#091 STL Architecture Problem 91",
    "slug": "datastructuresstl-091-stl-architecture-problem-91",
    "description": "Apply STL container, algorithm, or adapter pattern #91 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 91 10",
        "output": "STL Structure #91 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000092",
    "book": "datastructuresstl",
    "order_index": 92,
    "title": "#092 STL Architecture Problem 92",
    "slug": "datastructuresstl-092-stl-architecture-problem-92",
    "description": "Apply STL container, algorithm, or adapter pattern #92 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 92 10",
        "output": "STL Structure #92 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000093",
    "book": "datastructuresstl",
    "order_index": 93,
    "title": "#093 STL Architecture Problem 93",
    "slug": "datastructuresstl-093-stl-architecture-problem-93",
    "description": "Apply STL container, algorithm, or adapter pattern #93 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 93 10",
        "output": "STL Structure #93 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000094",
    "book": "datastructuresstl",
    "order_index": 94,
    "title": "#094 STL Architecture Problem 94",
    "slug": "datastructuresstl-094-stl-architecture-problem-94",
    "description": "Apply STL container, algorithm, or adapter pattern #94 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 94 10",
        "output": "STL Structure #94 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000095",
    "book": "datastructuresstl",
    "order_index": 95,
    "title": "#095 STL Architecture Problem 95",
    "slug": "datastructuresstl-095-stl-architecture-problem-95",
    "description": "Apply STL container, algorithm, or adapter pattern #95 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 95 10",
        "output": "STL Structure #95 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000096",
    "book": "datastructuresstl",
    "order_index": 96,
    "title": "#096 STL Architecture Problem 96",
    "slug": "datastructuresstl-096-stl-architecture-problem-96",
    "description": "Apply STL container, algorithm, or adapter pattern #96 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 96 10",
        "output": "STL Structure #96 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000097",
    "book": "datastructuresstl",
    "order_index": 97,
    "title": "#097 STL Architecture Problem 97",
    "slug": "datastructuresstl-097-stl-architecture-problem-97",
    "description": "Apply STL container, algorithm, or adapter pattern #97 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 97 10",
        "output": "STL Structure #97 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000098",
    "book": "datastructuresstl",
    "order_index": 98,
    "title": "#098 STL Architecture Problem 98",
    "slug": "datastructuresstl-098-stl-architecture-problem-98",
    "description": "Apply STL container, algorithm, or adapter pattern #98 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 98 10",
        "output": "STL Structure #98 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000099",
    "book": "datastructuresstl",
    "order_index": 99,
    "title": "#099 STL Architecture Problem 99",
    "slug": "datastructuresstl-099-stl-architecture-problem-99",
    "description": "Apply STL container, algorithm, or adapter pattern #99 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 99 10",
        "output": "STL Structure #99 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6005-000000000100",
    "book": "datastructuresstl",
    "order_index": 100,
    "title": "#100 STL Architecture Problem 100",
    "slug": "datastructuresstl-100-stl-architecture-problem-100",
    "description": "Apply STL container, algorithm, or adapter pattern #100 choosing the optimal data structure for time and space complexity.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Data Structures & STL Architecture",
    "tags": [
      "Data Structures",
      "STL",
      "Containers",
      "Complexity",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "STL_QUERY 100 10",
        "output": "STL Structure #100 configured and query evaluated (Complexity: O(log N))",
        "explanation": "Executes logic for STL Architecture Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// STL Architecture Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# STL Architecture Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// STL Architecture Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
