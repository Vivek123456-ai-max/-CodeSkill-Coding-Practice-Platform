import { Problem } from '../../types/problem';

export const ITERATORS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6013-000000000001",
    "book": "iterators",
    "order_index": 1,
    "title": "#001 Iterator Categories Overview (Input, Output, Forward, Bidirectional, Random Access)",
    "slug": "iterators-001-iterator-categories-overview-input-output-forward",
    "description": "Classify iterator categories supported by vector, list, set, and forward_list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector vs List vs Set iterators",
        "output": "Vector: Random Access | List: Bidirectional | Set: Bidirectional | ForwardList: Forward",
        "explanation": "Executes logic for Iterator Categories Overview (Input, Output, Forward, Bidirectional, Random Access)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Categories Overview (Input, Output, Forward, Bidirectional, Random Access)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Categories Overview (Input, Output, Forward, Bidirectional, Random Access)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Categories Overview (Input, Output, Forward, Bidirectional, Random Access)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000002",
    "book": "iterators",
    "order_index": 2,
    "title": "#002 Basic Forward Iteration with `begin()` and `end()`",
    "slug": "iterators-002-basic-forward-iteration-with-begin-and-end",
    "description": "Iterate over container from start to finish using iterator pointer arithmetic `for (auto it = v.begin(); it != v.end(); ++it)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector [10, 20, 30]",
        "output": "Iterated: 10, 20, 30",
        "explanation": "Executes logic for Basic Forward Iteration with `begin()` and `end()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Basic Forward Iteration with `begin()` and `end()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Basic Forward Iteration with `begin()` and `end()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Basic Forward Iteration with `begin()` and `end()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000003",
    "book": "iterators",
    "order_index": 3,
    "title": "#003 Reverse Iteration with `rbegin()` and `rend()`",
    "slug": "iterators-003-reverse-iteration-with-rbegin-and-rend",
    "description": "Iterate backward through container using reverse iterators.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector [1, 2, 3, 4, 5]",
        "output": "Reverse Iterated: 5, 4, 3, 2, 1",
        "explanation": "Executes logic for Reverse Iteration with `rbegin()` and `rend()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reverse Iteration with `rbegin()` and `rend()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reverse Iteration with `rbegin()` and `rend()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reverse Iteration with `rbegin()` and `rend()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000004",
    "book": "iterators",
    "order_index": 4,
    "title": "#004 Const Iterators with `cbegin()` and `cend()` (Read-Only)",
    "slug": "iterators-004-const-iterators-with-cbegin-and-cend-read-only",
    "description": "Ensure read-only traversal using const iterators disallowing element mutation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector [10, 20, 30]",
        "output": "Const Iterator traversed safely (Mutation disallowed)",
        "explanation": "Executes logic for Const Iterators with `cbegin()` and `cend()` (Read-Only)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Const Iterators with `cbegin()` and `cend()` (Read-Only)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Const Iterators with `cbegin()` and `cend()` (Read-Only)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Const Iterators with `cbegin()` and `cend()` (Read-Only)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000005",
    "book": "iterators",
    "order_index": 5,
    "title": "#005 Advancing Iterators with `std::advance()`",
    "slug": "iterators-005-advancing-iterators-with-std-advance",
    "description": "Move iterator forward or backward by N positions in O(1) for random access or O(N) for list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Advance list iterator by 3",
        "output": "Iterator advanced 3 steps to value 40",
        "explanation": "Executes logic for Advancing Iterators with `std::advance()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Advancing Iterators with `std::advance()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Advancing Iterators with `std::advance()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Advancing Iterators with `std::advance()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000006",
    "book": "iterators",
    "order_index": 6,
    "title": "#006 Getting Next and Previous Iterators (`std::next()` and `std::prev()`)",
    "slug": "iterators-006-getting-next-and-previous-iterators-std-next-and-s",
    "description": "Obtain iterator to next or previous element without modifying original iterator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "std::next(it, 2) on [10, 20, 30, 40]",
        "output": "Next iterator points to 30",
        "explanation": "Executes logic for Getting Next and Previous Iterators (`std::next()` and `std::prev()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Getting Next and Previous Iterators (`std::next()` and `std::prev()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Getting Next and Previous Iterators (`std::next()` and `std::prev()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Getting Next and Previous Iterators (`std::next()` and `std::prev()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000007",
    "book": "iterators",
    "order_index": 7,
    "title": "#007 Calculating Distance Between Iterators (`std::distance()`)",
    "slug": "iterators-007-calculating-distance-between-iterators-std-distanc",
    "description": "Compute number of elements between two iterators in O(1) for vector or O(N) for list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Distance between begin and end in size 5 container",
        "output": "Distance: 5 elements",
        "explanation": "Executes logic for Calculating Distance Between Iterators (`std::distance()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Calculating Distance Between Iterators (`std::distance()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Calculating Distance Between Iterators (`std::distance()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Calculating Distance Between Iterators (`std::distance()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000008",
    "book": "iterators",
    "order_index": 8,
    "title": "#008 Stream Output Iterator (`std::ostream_iterator`)",
    "slug": "iterators-008-stream-output-iterator-std-ostream-iterator",
    "description": "Print entire vector to console in one line using `std::copy` and `ostream_iterator<int>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy [1, 2, 3] to cout",
        "output": "Output: 1 2 3",
        "explanation": "Executes logic for Stream Output Iterator (`std::ostream_iterator`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stream Output Iterator (`std::ostream_iterator`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stream Output Iterator (`std::ostream_iterator`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stream Output Iterator (`std::ostream_iterator`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000009",
    "book": "iterators",
    "order_index": 9,
    "title": "#009 Stream Input Iterator (`std::istream_iterator`)",
    "slug": "iterators-009-stream-input-iterator-std-istream-iterator",
    "description": "Read sequence of integers directly from input stream into vector using stream iterators.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stream '10 20 30 40'",
        "output": "Vector loaded from stream: [10, 20, 30, 40]",
        "explanation": "Executes logic for Stream Input Iterator (`std::istream_iterator`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stream Input Iterator (`std::istream_iterator`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stream Input Iterator (`std::istream_iterator`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stream Input Iterator (`std::istream_iterator`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000010",
    "book": "iterators",
    "order_index": 10,
    "title": "#010 Insert Iterator: `std::back_inserter`",
    "slug": "iterators-010-insert-iterator-std-back-inserter",
    "description": "Append elements dynamically to vector during algorithm execution via `back_inserter`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy [1, 2] to empty vec with back_inserter",
        "output": "Vector: [1, 2]",
        "explanation": "Executes logic for Insert Iterator: `std::back_inserter`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Insert Iterator: `std::back_inserter`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Insert Iterator: `std::back_inserter`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Insert Iterator: `std::back_inserter`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000011",
    "book": "iterators",
    "order_index": 11,
    "title": "#011 Insert Iterator: `std::front_inserter` (for Deque and List)",
    "slug": "iterators-011-insert-iterator-std-front-inserter-for-deque-and-l",
    "description": "Prepend elements to front of container using `front_inserter`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Copy [1, 2, 3] with front_inserter",
        "output": "Deque: [3, 2, 1]",
        "explanation": "Executes logic for Insert Iterator: `std::front_inserter` (for Deque and List)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Insert Iterator: `std::front_inserter` (for Deque and List)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Insert Iterator: `std::front_inserter` (for Deque and List)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Insert Iterator: `std::front_inserter` (for Deque and List)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000012",
    "book": "iterators",
    "order_index": 12,
    "title": "#012 Insert Iterator: `std::inserter` (General Position Insertion)",
    "slug": "iterators-012-insert-iterator-std-inserter-general-position-inse",
    "description": "Insert elements at specific location in vector or set using `inserter`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert into middle with inserter",
        "output": "Elements inserted at target iterator position",
        "explanation": "Executes logic for Insert Iterator: `std::inserter` (General Position Insertion)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Insert Iterator: `std::inserter` (General Position Insertion)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Insert Iterator: `std::inserter` (General Position Insertion)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Insert Iterator: `std::inserter` (General Position Insertion)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000013",
    "book": "iterators",
    "order_index": 13,
    "title": "#013 Move Iterator (`std::make_move_iterator`)",
    "slug": "iterators-013-move-iterator-std-make-move-iterator",
    "description": "Convert iterator range to move elements instead of copying during algorithm execution.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Move range from vector A to B",
        "output": "Elements moved into B in O(1) per element",
        "explanation": "Executes logic for Move Iterator (`std::make_move_iterator`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Move Iterator (`std::make_move_iterator`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Move Iterator (`std::make_move_iterator`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Move Iterator (`std::make_move_iterator`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000014",
    "book": "iterators",
    "order_index": 14,
    "title": "#014 Custom Container Iterator Class Implementation",
    "slug": "iterators-014-custom-container-iterator-class-implementation",
    "description": "Implement a custom RandomAccessIterator for a custom Array wrapper class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Custom array [5, 10, 15]",
        "output": "Custom iterator traversed array: 5, 10, 15",
        "explanation": "Executes logic for Custom Container Iterator Class Implementation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Container Iterator Class Implementation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Container Iterator Class Implementation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Container Iterator Class Implementation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000015",
    "book": "iterators",
    "order_index": 15,
    "title": "#015 Iterator Traits (`std::iterator_traits`)",
    "slug": "iterators-015-iterator-traits-std-iterator-traits",
    "description": "Query `value_type`, `difference_type`, and `iterator_category` from iterator traits.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Traits of vector<int>::iterator",
        "output": "Value Type: int, Category: random_access_iterator_tag",
        "explanation": "Executes logic for Iterator Traits (`std::iterator_traits`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Traits (`std::iterator_traits`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Traits (`std::iterator_traits`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Traits (`std::iterator_traits`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000016",
    "book": "iterators",
    "order_index": 16,
    "title": "#016 Iterator Invalidation Rules on Vector Resizing",
    "slug": "iterators-016-iterator-invalidation-rules-on-vector-resizing",
    "description": "Demonstrate that vector `push_back` causing reallocation invalidates all existing iterators.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Retain iterator before reserve full",
        "output": "Iterator invalidated on vector buffer reallocation",
        "explanation": "Executes logic for Iterator Invalidation Rules on Vector Resizing."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Invalidation Rules on Vector Resizing\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Invalidation Rules on Vector Resizing\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Invalidation Rules on Vector Resizing\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000017",
    "book": "iterators",
    "order_index": 17,
    "title": "#017 Iterator Invalidation Rules on Map and Set",
    "slug": "iterators-017-iterator-invalidation-rules-on-map-and-set",
    "description": "Show that inserting or erasing in `std::map` does not invalidate iterators to other nodes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map node deletion",
        "output": "Iterators to other keys remain completely valid",
        "explanation": "Executes logic for Iterator Invalidation Rules on Map and Set."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Invalidation Rules on Map and Set\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Invalidation Rules on Map and Set\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Invalidation Rules on Map and Set\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000018",
    "book": "iterators",
    "order_index": 18,
    "title": "#018 Filtering Elements via Iterator Predicates",
    "slug": "iterators-018-filtering-elements-via-iterator-predicates",
    "description": "Iterate over container and collect only elements satisfying predicate.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Filter evens from [1, 2, 3, 4, 5]",
        "output": "Filtered: [2, 4]",
        "explanation": "Executes logic for Filtering Elements via Iterator Predicates."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Filtering Elements via Iterator Predicates\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Filtering Elements via Iterator Predicates\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Filtering Elements via Iterator Predicates\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000019",
    "book": "iterators",
    "order_index": 19,
    "title": "#019 Transforming Range via Iterators",
    "slug": "iterators-019-transforming-range-via-iterators",
    "description": "Apply function to each element in iterator range and write to output iterator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Square each item in [1, 2, 3]",
        "output": "Transformed: [1, 4, 9]",
        "explanation": "Executes logic for Transforming Range via Iterators."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Transforming Range via Iterators\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Transforming Range via Iterators\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Transforming Range via Iterators\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000020",
    "book": "iterators",
    "order_index": 20,
    "title": "#020 Bidirectional Traversal of Doubly Linked List",
    "slug": "iterators-020-bidirectional-traversal-of-doubly-linked-list",
    "description": "Traverse `std::list` forward, pause at middle, and step backward using `--it`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Step forward 3 then back 1",
        "output": "Iterator moved: 1 -> 2 -> 3 -> 2",
        "explanation": "Executes logic for Bidirectional Traversal of Doubly Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Bidirectional Traversal of Doubly Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bidirectional Traversal of Doubly Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bidirectional Traversal of Doubly Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000021",
    "book": "iterators",
    "order_index": 21,
    "title": "#021 Two-Pointer Range Traversal (Meeting in Middle)",
    "slug": "iterators-021-two-pointer-range-traversal-meeting-in-middle",
    "description": "Use two iterators starting at `begin()` and `end()-1` moving toward each other.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Verify palindrome with iterators",
        "output": "Iterators met in middle: Palindrome verified",
        "explanation": "Executes logic for Two-Pointer Range Traversal (Meeting in Middle)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Two-Pointer Range Traversal (Meeting in Middle)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Two-Pointer Range Traversal (Meeting in Middle)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Two-Pointer Range Traversal (Meeting in Middle)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000022",
    "book": "iterators",
    "order_index": 22,
    "title": "#022 Sliding Window Iterator Bounds",
    "slug": "iterators-022-sliding-window-iterator-bounds",
    "description": "Maintain window defined by `[left_it, right_it)` advancing across container.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Window size 3 over [1,2,3,4,5]",
        "output": "Windows: [1,2,3], [2,3,4], [3,4,5]",
        "explanation": "Executes logic for Sliding Window Iterator Bounds."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sliding Window Iterator Bounds\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sliding Window Iterator Bounds\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sliding Window Iterator Bounds\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000023",
    "book": "iterators",
    "order_index": 23,
    "title": "#023 Rotating Range with Iterators (`std::rotate`)",
    "slug": "iterators-023-rotating-range-with-iterators-std-rotate",
    "description": "Rotate subrange `[first, middle, last)` using iterator triad.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rotate [1,2,3,4,5] around 3",
        "output": "Result: [3, 4, 5, 1, 2]",
        "explanation": "Executes logic for Rotating Range with Iterators (`std::rotate`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Rotating Range with Iterators (`std::rotate`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rotating Range with Iterators (`std::rotate`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rotating Range with Iterators (`std::rotate`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000024",
    "book": "iterators",
    "order_index": 24,
    "title": "#024 Partitioning Range with Iterators (`std::partition`)",
    "slug": "iterators-024-partitioning-range-with-iterators-std-partition",
    "description": "Partition range `[begin, end)` into two groups based on predicate iterator return.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Partition odds/evens",
        "output": "Partition boundary iterator returned: Evens first",
        "explanation": "Executes logic for Partitioning Range with Iterators (`std::partition`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Partitioning Range with Iterators (`std::partition`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Partitioning Range with Iterators (`std::partition`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Partitioning Range with Iterators (`std::partition`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000025",
    "book": "iterators",
    "order_index": 25,
    "title": "#025 Finding Element Position Index via Iterator Distance",
    "slug": "iterators-025-finding-element-position-index-via-iterator-distan",
    "description": "Convert iterator to 0-based integer index using `std::distance(v.begin(), it)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find 30 in [10, 20, 30, 40]",
        "output": "Found at index: 2 (Computed via std::distance)",
        "explanation": "Executes logic for Finding Element Position Index via Iterator Distance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Element Position Index via Iterator Distance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Element Position Index via Iterator Distance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Element Position Index via Iterator Distance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000026",
    "book": "iterators",
    "order_index": 26,
    "title": "#026 Zip Iterator Simulation (Traversing Two Ranges in Parallel)",
    "slug": "iterators-026-zip-iterator-simulation-traversing-two-ranges-in-p",
    "description": "Iterate over two vectors simultaneously using two iterator handles.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3] B: ['a', 'b', 'c']",
        "output": "Zipped Pairs: (1,'a'), (2,'b'), (3,'c')",
        "explanation": "Executes logic for Zip Iterator Simulation (Traversing Two Ranges in Parallel)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Zip Iterator Simulation (Traversing Two Ranges in Parallel)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Zip Iterator Simulation (Traversing Two Ranges in Parallel)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Zip Iterator Simulation (Traversing Two Ranges in Parallel)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000027",
    "book": "iterators",
    "order_index": 27,
    "title": "#027 Step / Stride Iterator (Advancing by K Steps)",
    "slug": "iterators-027-step-stride-iterator-advancing-by-k-steps",
    "description": "Iterate over every K-th element in container using `advance(it, K)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Every 2nd item in [10, 20, 30, 40, 50]",
        "output": "Sampled: 10, 30, 50",
        "explanation": "Executes logic for Step / Stride Iterator (Advancing by K Steps)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Step / Stride Iterator (Advancing by K Steps)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Step / Stride Iterator (Advancing by K Steps)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Step / Stride Iterator (Advancing by K Steps)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000028",
    "book": "iterators",
    "order_index": 28,
    "title": "#028 Constexpr Iterators in C++20",
    "slug": "iterators-028-constexpr-iterators-in-c-20",
    "description": "Demonstrate compile-time array traversal using constexpr iterators.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compile-time sum of array",
        "output": "Compile-time sum: 15 (Computed with constexpr iterators)",
        "explanation": "Executes logic for Constexpr Iterators in C++20."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Constexpr Iterators in C++20\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Constexpr Iterators in C++20\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Constexpr Iterators in C++20\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000029",
    "book": "iterators",
    "order_index": 29,
    "title": "#029 Circular Iterator (Infinite Wrap-Around Generator)",
    "slug": "iterators-029-circular-iterator-infinite-wrap-around-generator",
    "description": "Implement cyclic iterator wrapping from `end()` back to `begin()` infinitely.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cycle 7 steps on [A, B, C]",
        "output": "Yielded: A, B, C, A, B, C, A",
        "explanation": "Executes logic for Circular Iterator (Infinite Wrap-Around Generator)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Circular Iterator (Infinite Wrap-Around Generator)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Circular Iterator (Infinite Wrap-Around Generator)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Circular Iterator (Infinite Wrap-Around Generator)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000030",
    "book": "iterators",
    "order_index": 30,
    "title": "#030 Flattening Nested Container Iterators",
    "slug": "iterators-030-flattening-nested-container-iterators",
    "description": "Iterate over `vector<vector<int>>` as a single flat stream.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[[1, 2], [3, 4, 5]]",
        "output": "Flat Stream: 1, 2, 3, 4, 5",
        "explanation": "Executes logic for Flattening Nested Container Iterators."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Flattening Nested Container Iterators\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Flattening Nested Container Iterators\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Flattening Nested Container Iterators\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000031",
    "book": "iterators",
    "order_index": 31,
    "title": "#031 Sentinel / End Iterator Semantics",
    "slug": "iterators-031-sentinel-end-iterator-semantics",
    "description": "Demonstrate how `end()` represents one-past-the-last element and must never be dereferenced.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check it == end()",
        "output": "Safe sentinel check: Loop terminated without past-end dereference",
        "explanation": "Executes logic for Sentinel / End Iterator Semantics."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sentinel / End Iterator Semantics\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sentinel / End Iterator Semantics\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sentinel / End Iterator Semantics\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000032",
    "book": "iterators",
    "order_index": 32,
    "title": "#032 Counting Iterator / Range Generator (0 to N-1)",
    "slug": "iterators-032-counting-iterator-range-generator-0-to-n-1",
    "description": "Generate sequence of numbers dynamically without allocating memory buffer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Range 0 to 5",
        "output": "Generated: 0, 1, 2, 3, 4",
        "explanation": "Executes logic for Counting Iterator / Range Generator (0 to N-1)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Counting Iterator / Range Generator (0 to N-1)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Counting Iterator / Range Generator (0 to N-1)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Counting Iterator / Range Generator (0 to N-1)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000033",
    "book": "iterators",
    "order_index": 33,
    "title": "#033 Permutation Iterator with `std::next_permutation`",
    "slug": "iterators-033-permutation-iterator-with-std-next-permutation",
    "description": "Iterate through all permutations of range until fully cycled.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Permute [1, 2, 3]",
        "output": "Yielded 6 unique permutations",
        "explanation": "Executes logic for Permutation Iterator with `std::next_permutation`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Permutation Iterator with `std::next_permutation`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Permutation Iterator with `std::next_permutation`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Permutation Iterator with `std::next_permutation`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000034",
    "book": "iterators",
    "order_index": 34,
    "title": "#034 Merging Two Sorted Iterator Ranges (`std::merge`)",
    "slug": "iterators-034-merging-two-sorted-iterator-ranges-std-merge",
    "description": "Merge two sorted iterator streams into single output iterator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 3] B: [2, 4]",
        "output": "Merged: [1, 2, 3, 4]",
        "explanation": "Executes logic for Merging Two Sorted Iterator Ranges (`std::merge`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Merging Two Sorted Iterator Ranges (`std::merge`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merging Two Sorted Iterator Ranges (`std::merge`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merging Two Sorted Iterator Ranges (`std::merge`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000035",
    "book": "iterators",
    "order_index": 35,
    "title": "#035 Comparing Two Ranges for Equality (`std::equal`)",
    "slug": "iterators-035-comparing-two-ranges-for-equality-std-equal",
    "description": "Check if elements in two iterator ranges match completely.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compare [1, 2, 3] with [1, 2, 3]",
        "output": "Equal: true",
        "explanation": "Executes logic for Comparing Two Ranges for Equality (`std::equal`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Comparing Two Ranges for Equality (`std::equal`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Comparing Two Ranges for Equality (`std::equal`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Comparing Two Ranges for Equality (`std::equal`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000036",
    "book": "iterators",
    "order_index": 36,
    "title": "#036 Lexicographical Comparison of Two Ranges (`std::lexicographical_compare`)",
    "slug": "iterators-036-lexicographical-comparison-of-two-ranges-std-lexic",
    "description": "Compare two iterator ranges in alphabetical dictionary order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "'apple' vs 'banana'",
        "output": "Result: 'apple' < 'banana' (true)",
        "explanation": "Executes logic for Lexicographical Comparison of Two Ranges (`std::lexicographical_compare`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Lexicographical Comparison of Two Ranges (`std::lexicographical_compare`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lexicographical Comparison of Two Ranges (`std::lexicographical_compare`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lexicographical Comparison of Two Ranges (`std::lexicographical_compare`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000037",
    "book": "iterators",
    "order_index": 37,
    "title": "#037 Finding First Mismatch Between Two Ranges (`std::mismatch`)",
    "slug": "iterators-037-finding-first-mismatch-between-two-ranges-std-mism",
    "description": "Find pair of iterators pointing to first differing elements in two containers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compare [1, 2, 3, 4] vs [1, 2, 9, 4]",
        "output": "First Mismatch at index 2: 3 vs 9",
        "explanation": "Executes logic for Finding First Mismatch Between Two Ranges (`std::mismatch`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding First Mismatch Between Two Ranges (`std::mismatch`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding First Mismatch Between Two Ranges (`std::mismatch`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding First Mismatch Between Two Ranges (`std::mismatch`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000038",
    "book": "iterators",
    "order_index": 38,
    "title": "#038 Searching Subsequence in Range (`std::search`)",
    "slug": "iterators-038-searching-subsequence-in-range-std-search",
    "description": "Find first occurrence of sub-range `[pattern_begin, pattern_end)` in container.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Search [3, 4] in [1, 2, 3, 4, 5]",
        "output": "Pattern found starting at index 2",
        "explanation": "Executes logic for Searching Subsequence in Range (`std::search`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Searching Subsequence in Range (`std::search`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Searching Subsequence in Range (`std::search`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Searching Subsequence in Range (`std::search`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000039",
    "book": "iterators",
    "order_index": 39,
    "title": "#039 Finding Consecutive Identical Elements (`std::adjacent_find`)",
    "slug": "iterators-039-finding-consecutive-identical-elements-std-adjacen",
    "description": "Find first pair of consecutive matching elements in container.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 3, 4]",
        "output": "Adjacent duplicate found: 3 (at index 2)",
        "explanation": "Executes logic for Finding Consecutive Identical Elements (`std::adjacent_find`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Consecutive Identical Elements (`std::adjacent_find`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Consecutive Identical Elements (`std::adjacent_find`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Consecutive Identical Elements (`std::adjacent_find`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000040",
    "book": "iterators",
    "order_index": 40,
    "title": "#040 Replacing Elements in Range (`std::replace` & `std::replace_if`)",
    "slug": "iterators-040-replacing-elements-in-range-std-replace-std-replac",
    "description": "Replace all occurrences of old_val with new_val throughout iterator range.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Replace 0 with 9 in [1, 0, 2, 0]",
        "output": "Result: [1, 9, 2, 9]",
        "explanation": "Executes logic for Replacing Elements in Range (`std::replace` & `std::replace_if`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Replacing Elements in Range (`std::replace` & `std::replace_if`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Replacing Elements in Range (`std::replace` & `std::replace_if`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Replacing Elements in Range (`std::replace` & `std::replace_if`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000041",
    "book": "iterators",
    "order_index": 41,
    "title": "#041 Filling Range with Value (`std::fill` & `std::fill_n`)",
    "slug": "iterators-041-filling-range-with-value-std-fill-std-fill-n",
    "description": "Fill iterator range with assigned value.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Fill 5 slots with 42",
        "output": "Filled: [42, 42, 42, 42, 42]",
        "explanation": "Executes logic for Filling Range with Value (`std::fill` & `std::fill_n`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Filling Range with Value (`std::fill` & `std::fill_n`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Filling Range with Value (`std::fill` & `std::fill_n`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Filling Range with Value (`std::fill` & `std::fill_n`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000042",
    "book": "iterators",
    "order_index": 42,
    "title": "#042 Generating Range Values with Functor (`std::generate`)",
    "slug": "iterators-042-generating-range-values-with-functor-std-generate",
    "description": "Populate iterator range using generator lambda (e.g. sequence 1, 2, 3...).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Generate 5 sequence values",
        "output": "Generated: [1, 2, 3, 4, 5]",
        "explanation": "Executes logic for Generating Range Values with Functor (`std::generate`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Generating Range Values with Functor (`std::generate`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generating Range Values with Functor (`std::generate`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generating Range Values with Functor (`std::generate`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000043",
    "book": "iterators",
    "order_index": 43,
    "title": "#043 Removing Consecutive Duplicates with `std::unique`",
    "slug": "iterators-043-removing-consecutive-duplicates-with-std-unique",
    "description": "Eliminate duplicate adjacent values and return iterator to new logical end.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 1, 2, 2, 3]",
        "output": "Unique range: [1, 2, 3]",
        "explanation": "Executes logic for Removing Consecutive Duplicates with `std::unique`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Removing Consecutive Duplicates with `std::unique`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Removing Consecutive Duplicates with `std::unique`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Removing Consecutive Duplicates with `std::unique`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000044",
    "book": "iterators",
    "order_index": 44,
    "title": "#044 Shuffling Range Randomly (`std::shuffle`)",
    "slug": "iterators-044-shuffling-range-randomly-std-shuffle",
    "description": "Randomly permute elements in iterator range using standard random engine.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Shuffle [1, 2, 3, 4, 5]",
        "output": "Shuffled array generated with uniform distribution",
        "explanation": "Executes logic for Shuffling Range Randomly (`std::shuffle`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shuffling Range Randomly (`std::shuffle`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shuffling Range Randomly (`std::shuffle`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shuffling Range Randomly (`std::shuffle`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000045",
    "book": "iterators",
    "order_index": 45,
    "title": "#045 Sampling Random Elements (`std::sample` in C++17)",
    "slug": "iterators-045-sampling-random-elements-std-sample-in-c-17",
    "description": "Randomly sample K elements from input range without replacement.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sample 3 items from 10 items",
        "output": "Sampled 3 distinct items randomly",
        "explanation": "Executes logic for Sampling Random Elements (`std::sample` in C++17)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sampling Random Elements (`std::sample` in C++17)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sampling Random Elements (`std::sample` in C++17)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sampling Random Elements (`std::sample` in C++17)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000046",
    "book": "iterators",
    "order_index": 46,
    "title": "#046 Counting Elements Matching Predicate (`std::count_if`)",
    "slug": "iterators-046-counting-elements-matching-predicate-std-count-if",
    "description": "Count number of elements in iterator range matching condition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Count odds in [1, 2, 3, 4, 5]",
        "output": "Odd Count: 3",
        "explanation": "Executes logic for Counting Elements Matching Predicate (`std::count_if`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Counting Elements Matching Predicate (`std::count_if`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Counting Elements Matching Predicate (`std::count_if`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Counting Elements Matching Predicate (`std::count_if`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000047",
    "book": "iterators",
    "order_index": 47,
    "title": "#047 Checking All / Any / None Predicates (`std::all_of`, `any_of`, `none_of`)",
    "slug": "iterators-047-checking-all-any-none-predicates-std-all-of-any-of",
    "description": "Verify container properties across iterator range in single call.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check all positive in [1, 2, 3]",
        "output": "all_of positive: true | any_of > 2: true | none_of < 0: true",
        "explanation": "Executes logic for Checking All / Any / None Predicates (`std::all_of`, `any_of`, `none_of`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Checking All / Any / None Predicates (`std::all_of`, `any_of`, `none_of`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Checking All / Any / None Predicates (`std::all_of`, `any_of`, `none_of`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Checking All / Any / None Predicates (`std::all_of`, `any_of`, `none_of`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000048",
    "book": "iterators",
    "order_index": 48,
    "title": "#048 Finding Min and Max Elements in One Pass (`std::minmax_element`)",
    "slug": "iterators-048-finding-min-and-max-elements-in-one-pass-std-minma",
    "description": "Find pair of iterators to min and max elements in single pass.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[14, 28, 7, 92, 45]",
        "output": "Min: 7 (index 2), Max: 92 (index 3)",
        "explanation": "Executes logic for Finding Min and Max Elements in One Pass (`std::minmax_element`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Min and Max Elements in One Pass (`std::minmax_element`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Min and Max Elements in One Pass (`std::minmax_element`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Min and Max Elements in One Pass (`std::minmax_element`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000049",
    "book": "iterators",
    "order_index": 49,
    "title": "#049 Accumulating Range with Binary Operation (`std::accumulate`)",
    "slug": "iterators-049-accumulating-range-with-binary-operation-std-accum",
    "description": "Compute product or custom folded result over iterator range.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Product of [1, 2, 3, 4]",
        "output": "Folded Product: 24",
        "explanation": "Executes logic for Accumulating Range with Binary Operation (`std::accumulate`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Accumulating Range with Binary Operation (`std::accumulate`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Accumulating Range with Binary Operation (`std::accumulate`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Accumulating Range with Binary Operation (`std::accumulate`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000050",
    "book": "iterators",
    "order_index": 50,
    "title": "#050 Inner Product Between Two Iterator Ranges (`std::inner_product`)",
    "slug": "iterators-050-inner-product-between-two-iterator-ranges-std-inne",
    "description": "Compute dot product between two vector iterator ranges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3] B: [4, 5, 6]",
        "output": "Inner Product: 32 (1*4 + 2*5 + 3*6)",
        "explanation": "Executes logic for Inner Product Between Two Iterator Ranges (`std::inner_product`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Inner Product Between Two Iterator Ranges (`std::inner_product`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inner Product Between Two Iterator Ranges (`std::inner_product`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inner Product Between Two Iterator Ranges (`std::inner_product`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000051",
    "book": "iterators",
    "order_index": 51,
    "title": "#051 Iterator Algorithm Problem 51",
    "slug": "iterators-051-iterator-algorithm-problem-51",
    "description": "Solve iterator traversal and range processing problem #51 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 51 10",
        "output": "Iterator range operation #51 executed with boundary contracts satisfied (Result: 510)",
        "explanation": "Executes logic for Iterator Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000052",
    "book": "iterators",
    "order_index": 52,
    "title": "#052 Iterator Algorithm Problem 52",
    "slug": "iterators-052-iterator-algorithm-problem-52",
    "description": "Solve iterator traversal and range processing problem #52 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 52 10",
        "output": "Iterator range operation #52 executed with boundary contracts satisfied (Result: 520)",
        "explanation": "Executes logic for Iterator Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000053",
    "book": "iterators",
    "order_index": 53,
    "title": "#053 Iterator Algorithm Problem 53",
    "slug": "iterators-053-iterator-algorithm-problem-53",
    "description": "Solve iterator traversal and range processing problem #53 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 53 10",
        "output": "Iterator range operation #53 executed with boundary contracts satisfied (Result: 530)",
        "explanation": "Executes logic for Iterator Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000054",
    "book": "iterators",
    "order_index": 54,
    "title": "#054 Iterator Algorithm Problem 54",
    "slug": "iterators-054-iterator-algorithm-problem-54",
    "description": "Solve iterator traversal and range processing problem #54 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 54 10",
        "output": "Iterator range operation #54 executed with boundary contracts satisfied (Result: 540)",
        "explanation": "Executes logic for Iterator Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000055",
    "book": "iterators",
    "order_index": 55,
    "title": "#055 Iterator Algorithm Problem 55",
    "slug": "iterators-055-iterator-algorithm-problem-55",
    "description": "Solve iterator traversal and range processing problem #55 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 55 10",
        "output": "Iterator range operation #55 executed with boundary contracts satisfied (Result: 550)",
        "explanation": "Executes logic for Iterator Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000056",
    "book": "iterators",
    "order_index": 56,
    "title": "#056 Iterator Algorithm Problem 56",
    "slug": "iterators-056-iterator-algorithm-problem-56",
    "description": "Solve iterator traversal and range processing problem #56 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 56 10",
        "output": "Iterator range operation #56 executed with boundary contracts satisfied (Result: 560)",
        "explanation": "Executes logic for Iterator Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000057",
    "book": "iterators",
    "order_index": 57,
    "title": "#057 Iterator Algorithm Problem 57",
    "slug": "iterators-057-iterator-algorithm-problem-57",
    "description": "Solve iterator traversal and range processing problem #57 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 57 10",
        "output": "Iterator range operation #57 executed with boundary contracts satisfied (Result: 570)",
        "explanation": "Executes logic for Iterator Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000058",
    "book": "iterators",
    "order_index": 58,
    "title": "#058 Iterator Algorithm Problem 58",
    "slug": "iterators-058-iterator-algorithm-problem-58",
    "description": "Solve iterator traversal and range processing problem #58 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 58 10",
        "output": "Iterator range operation #58 executed with boundary contracts satisfied (Result: 580)",
        "explanation": "Executes logic for Iterator Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000059",
    "book": "iterators",
    "order_index": 59,
    "title": "#059 Iterator Algorithm Problem 59",
    "slug": "iterators-059-iterator-algorithm-problem-59",
    "description": "Solve iterator traversal and range processing problem #59 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 59 10",
        "output": "Iterator range operation #59 executed with boundary contracts satisfied (Result: 590)",
        "explanation": "Executes logic for Iterator Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000060",
    "book": "iterators",
    "order_index": 60,
    "title": "#060 Iterator Algorithm Problem 60",
    "slug": "iterators-060-iterator-algorithm-problem-60",
    "description": "Solve iterator traversal and range processing problem #60 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 60 10",
        "output": "Iterator range operation #60 executed with boundary contracts satisfied (Result: 600)",
        "explanation": "Executes logic for Iterator Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000061",
    "book": "iterators",
    "order_index": 61,
    "title": "#061 Iterator Algorithm Problem 61",
    "slug": "iterators-061-iterator-algorithm-problem-61",
    "description": "Solve iterator traversal and range processing problem #61 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 61 10",
        "output": "Iterator range operation #61 executed with boundary contracts satisfied (Result: 610)",
        "explanation": "Executes logic for Iterator Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000062",
    "book": "iterators",
    "order_index": 62,
    "title": "#062 Iterator Algorithm Problem 62",
    "slug": "iterators-062-iterator-algorithm-problem-62",
    "description": "Solve iterator traversal and range processing problem #62 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 62 10",
        "output": "Iterator range operation #62 executed with boundary contracts satisfied (Result: 620)",
        "explanation": "Executes logic for Iterator Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000063",
    "book": "iterators",
    "order_index": 63,
    "title": "#063 Iterator Algorithm Problem 63",
    "slug": "iterators-063-iterator-algorithm-problem-63",
    "description": "Solve iterator traversal and range processing problem #63 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 63 10",
        "output": "Iterator range operation #63 executed with boundary contracts satisfied (Result: 630)",
        "explanation": "Executes logic for Iterator Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000064",
    "book": "iterators",
    "order_index": 64,
    "title": "#064 Iterator Algorithm Problem 64",
    "slug": "iterators-064-iterator-algorithm-problem-64",
    "description": "Solve iterator traversal and range processing problem #64 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 64 10",
        "output": "Iterator range operation #64 executed with boundary contracts satisfied (Result: 640)",
        "explanation": "Executes logic for Iterator Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000065",
    "book": "iterators",
    "order_index": 65,
    "title": "#065 Iterator Algorithm Problem 65",
    "slug": "iterators-065-iterator-algorithm-problem-65",
    "description": "Solve iterator traversal and range processing problem #65 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 65 10",
        "output": "Iterator range operation #65 executed with boundary contracts satisfied (Result: 650)",
        "explanation": "Executes logic for Iterator Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000066",
    "book": "iterators",
    "order_index": 66,
    "title": "#066 Iterator Algorithm Problem 66",
    "slug": "iterators-066-iterator-algorithm-problem-66",
    "description": "Solve iterator traversal and range processing problem #66 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 66 10",
        "output": "Iterator range operation #66 executed with boundary contracts satisfied (Result: 660)",
        "explanation": "Executes logic for Iterator Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000067",
    "book": "iterators",
    "order_index": 67,
    "title": "#067 Iterator Algorithm Problem 67",
    "slug": "iterators-067-iterator-algorithm-problem-67",
    "description": "Solve iterator traversal and range processing problem #67 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 67 10",
        "output": "Iterator range operation #67 executed with boundary contracts satisfied (Result: 670)",
        "explanation": "Executes logic for Iterator Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000068",
    "book": "iterators",
    "order_index": 68,
    "title": "#068 Iterator Algorithm Problem 68",
    "slug": "iterators-068-iterator-algorithm-problem-68",
    "description": "Solve iterator traversal and range processing problem #68 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 68 10",
        "output": "Iterator range operation #68 executed with boundary contracts satisfied (Result: 680)",
        "explanation": "Executes logic for Iterator Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000069",
    "book": "iterators",
    "order_index": 69,
    "title": "#069 Iterator Algorithm Problem 69",
    "slug": "iterators-069-iterator-algorithm-problem-69",
    "description": "Solve iterator traversal and range processing problem #69 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 69 10",
        "output": "Iterator range operation #69 executed with boundary contracts satisfied (Result: 690)",
        "explanation": "Executes logic for Iterator Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000070",
    "book": "iterators",
    "order_index": 70,
    "title": "#070 Iterator Algorithm Problem 70",
    "slug": "iterators-070-iterator-algorithm-problem-70",
    "description": "Solve iterator traversal and range processing problem #70 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 70 10",
        "output": "Iterator range operation #70 executed with boundary contracts satisfied (Result: 700)",
        "explanation": "Executes logic for Iterator Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000071",
    "book": "iterators",
    "order_index": 71,
    "title": "#071 Iterator Algorithm Problem 71",
    "slug": "iterators-071-iterator-algorithm-problem-71",
    "description": "Solve iterator traversal and range processing problem #71 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 71 10",
        "output": "Iterator range operation #71 executed with boundary contracts satisfied (Result: 710)",
        "explanation": "Executes logic for Iterator Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000072",
    "book": "iterators",
    "order_index": 72,
    "title": "#072 Iterator Algorithm Problem 72",
    "slug": "iterators-072-iterator-algorithm-problem-72",
    "description": "Solve iterator traversal and range processing problem #72 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 72 10",
        "output": "Iterator range operation #72 executed with boundary contracts satisfied (Result: 720)",
        "explanation": "Executes logic for Iterator Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000073",
    "book": "iterators",
    "order_index": 73,
    "title": "#073 Iterator Algorithm Problem 73",
    "slug": "iterators-073-iterator-algorithm-problem-73",
    "description": "Solve iterator traversal and range processing problem #73 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 73 10",
        "output": "Iterator range operation #73 executed with boundary contracts satisfied (Result: 730)",
        "explanation": "Executes logic for Iterator Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000074",
    "book": "iterators",
    "order_index": 74,
    "title": "#074 Iterator Algorithm Problem 74",
    "slug": "iterators-074-iterator-algorithm-problem-74",
    "description": "Solve iterator traversal and range processing problem #74 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 74 10",
        "output": "Iterator range operation #74 executed with boundary contracts satisfied (Result: 740)",
        "explanation": "Executes logic for Iterator Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000075",
    "book": "iterators",
    "order_index": 75,
    "title": "#075 Iterator Algorithm Problem 75",
    "slug": "iterators-075-iterator-algorithm-problem-75",
    "description": "Solve iterator traversal and range processing problem #75 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 75 10",
        "output": "Iterator range operation #75 executed with boundary contracts satisfied (Result: 750)",
        "explanation": "Executes logic for Iterator Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000076",
    "book": "iterators",
    "order_index": 76,
    "title": "#076 Iterator Algorithm Problem 76",
    "slug": "iterators-076-iterator-algorithm-problem-76",
    "description": "Solve iterator traversal and range processing problem #76 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 76 10",
        "output": "Iterator range operation #76 executed with boundary contracts satisfied (Result: 760)",
        "explanation": "Executes logic for Iterator Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000077",
    "book": "iterators",
    "order_index": 77,
    "title": "#077 Iterator Algorithm Problem 77",
    "slug": "iterators-077-iterator-algorithm-problem-77",
    "description": "Solve iterator traversal and range processing problem #77 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 77 10",
        "output": "Iterator range operation #77 executed with boundary contracts satisfied (Result: 770)",
        "explanation": "Executes logic for Iterator Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000078",
    "book": "iterators",
    "order_index": 78,
    "title": "#078 Iterator Algorithm Problem 78",
    "slug": "iterators-078-iterator-algorithm-problem-78",
    "description": "Solve iterator traversal and range processing problem #78 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 78 10",
        "output": "Iterator range operation #78 executed with boundary contracts satisfied (Result: 780)",
        "explanation": "Executes logic for Iterator Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000079",
    "book": "iterators",
    "order_index": 79,
    "title": "#079 Iterator Algorithm Problem 79",
    "slug": "iterators-079-iterator-algorithm-problem-79",
    "description": "Solve iterator traversal and range processing problem #79 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 79 10",
        "output": "Iterator range operation #79 executed with boundary contracts satisfied (Result: 790)",
        "explanation": "Executes logic for Iterator Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000080",
    "book": "iterators",
    "order_index": 80,
    "title": "#080 Iterator Algorithm Problem 80",
    "slug": "iterators-080-iterator-algorithm-problem-80",
    "description": "Solve iterator traversal and range processing problem #80 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 80 10",
        "output": "Iterator range operation #80 executed with boundary contracts satisfied (Result: 800)",
        "explanation": "Executes logic for Iterator Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000081",
    "book": "iterators",
    "order_index": 81,
    "title": "#081 Iterator Algorithm Problem 81",
    "slug": "iterators-081-iterator-algorithm-problem-81",
    "description": "Solve iterator traversal and range processing problem #81 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 81 10",
        "output": "Iterator range operation #81 executed with boundary contracts satisfied (Result: 810)",
        "explanation": "Executes logic for Iterator Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000082",
    "book": "iterators",
    "order_index": 82,
    "title": "#082 Iterator Algorithm Problem 82",
    "slug": "iterators-082-iterator-algorithm-problem-82",
    "description": "Solve iterator traversal and range processing problem #82 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 82 10",
        "output": "Iterator range operation #82 executed with boundary contracts satisfied (Result: 820)",
        "explanation": "Executes logic for Iterator Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000083",
    "book": "iterators",
    "order_index": 83,
    "title": "#083 Iterator Algorithm Problem 83",
    "slug": "iterators-083-iterator-algorithm-problem-83",
    "description": "Solve iterator traversal and range processing problem #83 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 83 10",
        "output": "Iterator range operation #83 executed with boundary contracts satisfied (Result: 830)",
        "explanation": "Executes logic for Iterator Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000084",
    "book": "iterators",
    "order_index": 84,
    "title": "#084 Iterator Algorithm Problem 84",
    "slug": "iterators-084-iterator-algorithm-problem-84",
    "description": "Solve iterator traversal and range processing problem #84 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 84 10",
        "output": "Iterator range operation #84 executed with boundary contracts satisfied (Result: 840)",
        "explanation": "Executes logic for Iterator Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000085",
    "book": "iterators",
    "order_index": 85,
    "title": "#085 Iterator Algorithm Problem 85",
    "slug": "iterators-085-iterator-algorithm-problem-85",
    "description": "Solve iterator traversal and range processing problem #85 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 85 10",
        "output": "Iterator range operation #85 executed with boundary contracts satisfied (Result: 850)",
        "explanation": "Executes logic for Iterator Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000086",
    "book": "iterators",
    "order_index": 86,
    "title": "#086 Iterator Algorithm Problem 86",
    "slug": "iterators-086-iterator-algorithm-problem-86",
    "description": "Solve iterator traversal and range processing problem #86 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 86 10",
        "output": "Iterator range operation #86 executed with boundary contracts satisfied (Result: 860)",
        "explanation": "Executes logic for Iterator Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000087",
    "book": "iterators",
    "order_index": 87,
    "title": "#087 Iterator Algorithm Problem 87",
    "slug": "iterators-087-iterator-algorithm-problem-87",
    "description": "Solve iterator traversal and range processing problem #87 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 87 10",
        "output": "Iterator range operation #87 executed with boundary contracts satisfied (Result: 870)",
        "explanation": "Executes logic for Iterator Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000088",
    "book": "iterators",
    "order_index": 88,
    "title": "#088 Iterator Algorithm Problem 88",
    "slug": "iterators-088-iterator-algorithm-problem-88",
    "description": "Solve iterator traversal and range processing problem #88 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 88 10",
        "output": "Iterator range operation #88 executed with boundary contracts satisfied (Result: 880)",
        "explanation": "Executes logic for Iterator Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000089",
    "book": "iterators",
    "order_index": 89,
    "title": "#089 Iterator Algorithm Problem 89",
    "slug": "iterators-089-iterator-algorithm-problem-89",
    "description": "Solve iterator traversal and range processing problem #89 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 89 10",
        "output": "Iterator range operation #89 executed with boundary contracts satisfied (Result: 890)",
        "explanation": "Executes logic for Iterator Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000090",
    "book": "iterators",
    "order_index": 90,
    "title": "#090 Iterator Algorithm Problem 90",
    "slug": "iterators-090-iterator-algorithm-problem-90",
    "description": "Solve iterator traversal and range processing problem #90 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 90 10",
        "output": "Iterator range operation #90 executed with boundary contracts satisfied (Result: 900)",
        "explanation": "Executes logic for Iterator Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000091",
    "book": "iterators",
    "order_index": 91,
    "title": "#091 Iterator Algorithm Problem 91",
    "slug": "iterators-091-iterator-algorithm-problem-91",
    "description": "Solve iterator traversal and range processing problem #91 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 91 10",
        "output": "Iterator range operation #91 executed with boundary contracts satisfied (Result: 910)",
        "explanation": "Executes logic for Iterator Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000092",
    "book": "iterators",
    "order_index": 92,
    "title": "#092 Iterator Algorithm Problem 92",
    "slug": "iterators-092-iterator-algorithm-problem-92",
    "description": "Solve iterator traversal and range processing problem #92 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 92 10",
        "output": "Iterator range operation #92 executed with boundary contracts satisfied (Result: 920)",
        "explanation": "Executes logic for Iterator Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000093",
    "book": "iterators",
    "order_index": 93,
    "title": "#093 Iterator Algorithm Problem 93",
    "slug": "iterators-093-iterator-algorithm-problem-93",
    "description": "Solve iterator traversal and range processing problem #93 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 93 10",
        "output": "Iterator range operation #93 executed with boundary contracts satisfied (Result: 930)",
        "explanation": "Executes logic for Iterator Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000094",
    "book": "iterators",
    "order_index": 94,
    "title": "#094 Iterator Algorithm Problem 94",
    "slug": "iterators-094-iterator-algorithm-problem-94",
    "description": "Solve iterator traversal and range processing problem #94 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 94 10",
        "output": "Iterator range operation #94 executed with boundary contracts satisfied (Result: 940)",
        "explanation": "Executes logic for Iterator Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000095",
    "book": "iterators",
    "order_index": 95,
    "title": "#095 Iterator Algorithm Problem 95",
    "slug": "iterators-095-iterator-algorithm-problem-95",
    "description": "Solve iterator traversal and range processing problem #95 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 95 10",
        "output": "Iterator range operation #95 executed with boundary contracts satisfied (Result: 950)",
        "explanation": "Executes logic for Iterator Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000096",
    "book": "iterators",
    "order_index": 96,
    "title": "#096 Iterator Algorithm Problem 96",
    "slug": "iterators-096-iterator-algorithm-problem-96",
    "description": "Solve iterator traversal and range processing problem #96 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 96 10",
        "output": "Iterator range operation #96 executed with boundary contracts satisfied (Result: 960)",
        "explanation": "Executes logic for Iterator Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000097",
    "book": "iterators",
    "order_index": 97,
    "title": "#097 Iterator Algorithm Problem 97",
    "slug": "iterators-097-iterator-algorithm-problem-97",
    "description": "Solve iterator traversal and range processing problem #97 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 97 10",
        "output": "Iterator range operation #97 executed with boundary contracts satisfied (Result: 970)",
        "explanation": "Executes logic for Iterator Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000098",
    "book": "iterators",
    "order_index": 98,
    "title": "#098 Iterator Algorithm Problem 98",
    "slug": "iterators-098-iterator-algorithm-problem-98",
    "description": "Solve iterator traversal and range processing problem #98 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 98 10",
        "output": "Iterator range operation #98 executed with boundary contracts satisfied (Result: 980)",
        "explanation": "Executes logic for Iterator Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000099",
    "book": "iterators",
    "order_index": 99,
    "title": "#099 Iterator Algorithm Problem 99",
    "slug": "iterators-099-iterator-algorithm-problem-99",
    "description": "Solve iterator traversal and range processing problem #99 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 99 10",
        "output": "Iterator range operation #99 executed with boundary contracts satisfied (Result: 990)",
        "explanation": "Executes logic for Iterator Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6013-000000000100",
    "book": "iterators",
    "order_index": 100,
    "title": "#100 Iterator Algorithm Problem 100",
    "slug": "iterators-100-iterator-algorithm-problem-100",
    "description": "Solve iterator traversal and range processing problem #100 handling custom iterator tags, range bounds, or stream adapters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Iterators & Range Traversal",
    "tags": [
      "Iterators",
      "Ranges",
      "begin/end",
      "Stream Iterators",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ITER_OP 100 10",
        "output": "Iterator range operation #100 executed with boundary contracts satisfied (Result: 1000)",
        "explanation": "Executes logic for Iterator Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
