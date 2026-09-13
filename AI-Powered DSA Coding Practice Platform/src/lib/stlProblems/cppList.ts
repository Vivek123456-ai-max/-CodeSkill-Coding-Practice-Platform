import { Problem } from '../../types/problem';

export const CPP_LIST_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6007-000000000001",
    "book": "cpplist",
    "order_index": 1,
    "title": "#001 Doubly Linked List Initialization and Traversal (`std::list`)",
    "slug": "cpplist-001-doubly-linked-list-initialization-and-traversal-st",
    "description": "Initialize `std::list<int>`, push front and back, and traverse forward and backward.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PushFront 10, PushBack 20, 30",
        "output": "List Forward: [10, 20, 30] | Backward: [30, 20, 10]",
        "explanation": "Executes logic for Doubly Linked List Initialization and Traversal (`std::list`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Doubly Linked List Initialization and Traversal (`std::list`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Doubly Linked List Initialization and Traversal (`std::list`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Doubly Linked List Initialization and Traversal (`std::list`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000002",
    "book": "cpplist",
    "order_index": 2,
    "title": "#002 Singly Linked List (`std::forward_list`)",
    "slug": "cpplist-002-singly-linked-list-std-forward-list",
    "description": "Use `std::forward_list` for memory-efficient forward-only traversal.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PushFront 1, 2, 3",
        "output": "Forward List: 3 -> 2 -> 1 -> NULL",
        "explanation": "Executes logic for Singly Linked List (`std::forward_list`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Singly Linked List (`std::forward_list`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Singly Linked List (`std::forward_list`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Singly Linked List (`std::forward_list`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000003",
    "book": "cpplist",
    "order_index": 3,
    "title": "#003 List Insert in Constant Time O(1) Given Iterator",
    "slug": "cpplist-003-list-insert-in-constant-time-o-1-given-iterator",
    "description": "Insert element at specific iterator position in `std::list` without shifting elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 99 before 20 in [10, 20, 30]",
        "output": "List: [10, 99, 20, 30]",
        "explanation": "Executes logic for List Insert in Constant Time O(1) Given Iterator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Insert in Constant Time O(1) Given Iterator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Insert in Constant Time O(1) Given Iterator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Insert in Constant Time O(1) Given Iterator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000004",
    "book": "cpplist",
    "order_index": 4,
    "title": "#004 List Erase in Constant Time O(1)",
    "slug": "cpplist-004-list-erase-in-constant-time-o-1",
    "description": "Erase element pointed to by iterator in `std::list` in O(1) pointer updates.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase 20 from [10, 20, 30]",
        "output": "List: [10, 30]",
        "explanation": "Executes logic for List Erase in Constant Time O(1)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Erase in Constant Time O(1)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Erase in Constant Time O(1)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Erase in Constant Time O(1)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000005",
    "book": "cpplist",
    "order_index": 5,
    "title": "#005 List Splice Operation (`splice()`)",
    "slug": "cpplist-005-list-splice-operation-splice",
    "description": "Transfer elements from one `std::list` into another in O(1) time without copying.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Splice List B into List A",
        "output": "List A: [1, 2, 3, 4, 5] (List B is now empty)",
        "explanation": "Executes logic for List Splice Operation (`splice()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Splice Operation (`splice()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Splice Operation (`splice()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Splice Operation (`splice()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000006",
    "book": "cpplist",
    "order_index": 6,
    "title": "#006 List Merge Operation (`merge()`)",
    "slug": "cpplist-006-list-merge-operation-merge",
    "description": "Merge two sorted `std::list` containers into one sorted list in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Merge [1, 3, 5] and [2, 4, 6]",
        "output": "Merged List: [1, 2, 3, 4, 5, 6]",
        "explanation": "Executes logic for List Merge Operation (`merge()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Merge Operation (`merge()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Merge Operation (`merge()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Merge Operation (`merge()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000007",
    "book": "cpplist",
    "order_index": 7,
    "title": "#007 List In-Place Sorting (`list::sort()`)",
    "slug": "cpplist-007-list-in-place-sorting-list-sort",
    "description": "Sort a `std::list` using its member `.sort()` method (Merge Sort internally).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort [5, 2, 8, 1, 9]",
        "output": "Sorted List: [1, 2, 5, 8, 9]",
        "explanation": "Executes logic for List In-Place Sorting (`list::sort()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List In-Place Sorting (`list::sort()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List In-Place Sorting (`list::sort()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List In-Place Sorting (`list::sort()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000008",
    "book": "cpplist",
    "order_index": 8,
    "title": "#008 List In-Place Reversal (`list::reverse()`)",
    "slug": "cpplist-008-list-in-place-reversal-list-reverse",
    "description": "Reverse a `std::list` in-place by updating prev/next node pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5]",
        "output": "Reversed: [5, 4, 3, 2, 1]",
        "explanation": "Executes logic for List In-Place Reversal (`list::reverse()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List In-Place Reversal (`list::reverse()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List In-Place Reversal (`list::reverse()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List In-Place Reversal (`list::reverse()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000009",
    "book": "cpplist",
    "order_index": 9,
    "title": "#009 List In-Place Deduplication (`list::unique()`)",
    "slug": "cpplist-009-list-in-place-deduplication-list-unique",
    "description": "Remove consecutive duplicate elements from `std::list` in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 1, 2, 3, 3, 3, 4, 4]",
        "output": "Deduplicated: [1, 2, 3, 4]",
        "explanation": "Executes logic for List In-Place Deduplication (`list::unique()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List In-Place Deduplication (`list::unique()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List In-Place Deduplication (`list::unique()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List In-Place Deduplication (`list::unique()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000010",
    "book": "cpplist",
    "order_index": 10,
    "title": "#010 List Conditional Removal (`list::remove()` & `list::remove_if()`)",
    "slug": "cpplist-010-list-conditional-removal-list-remove-list-remove-i",
    "description": "Remove all occurrences of value or elements matching predicate.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Remove all odds from [1, 2, 3, 4, 5, 6]",
        "output": "Remaining: [2, 4, 6]",
        "explanation": "Executes logic for List Conditional Removal (`list::remove()` & `list::remove_if()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Conditional Removal (`list::remove()` & `list::remove_if()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Conditional Removal (`list::remove()` & `list::remove_if()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Conditional Removal (`list::remove()` & `list::remove_if()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000011",
    "book": "cpplist",
    "order_index": 11,
    "title": "#011 Forward List Insert After (`insert_after()`)",
    "slug": "cpplist-011-forward-list-insert-after-insert-after",
    "description": "Insert element after specified iterator in `std::forward_list`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 42 after head in [10, 20]",
        "output": "Forward List: [10, 42, 20]",
        "explanation": "Executes logic for Forward List Insert After (`insert_after()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Forward List Insert After (`insert_after()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Forward List Insert After (`insert_after()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Forward List Insert After (`insert_after()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000012",
    "book": "cpplist",
    "order_index": 12,
    "title": "#012 Forward List Erase After (`erase_after()`)",
    "slug": "cpplist-012-forward-list-erase-after-erase-after",
    "description": "Erase element immediately following iterator in `std::forward_list`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase after head in [10, 42, 20]",
        "output": "Forward List: [10, 20]",
        "explanation": "Executes logic for Forward List Erase After (`erase_after()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Forward List Erase After (`erase_after()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Forward List Erase After (`erase_after()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Forward List Erase After (`erase_after()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000013",
    "book": "cpplist",
    "order_index": 13,
    "title": "#013 Iterator Stability in std::list Across Mutations",
    "slug": "cpplist-013-iterator-stability-in-std-list-across-mutations",
    "description": "Demonstrate that inserting or erasing elements in `std::list` does not invalidate existing iterators.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Retain iterator to node 20",
        "output": "Iterator to 20 remains valid after inserting 99 elsewhere",
        "explanation": "Executes logic for Iterator Stability in std::list Across Mutations."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iterator Stability in std::list Across Mutations\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iterator Stability in std::list Across Mutations\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iterator Stability in std::list Across Mutations\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000014",
    "book": "cpplist",
    "order_index": 14,
    "title": "#014 Finding Nth Element from End in Linked List",
    "slug": "cpplist-014-finding-nth-element-from-end-in-linked-list",
    "description": "Find K-th node from end using two-pointer technique (fast/slow pointers).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find 2nd from end in [10, 20, 30, 40, 50]",
        "output": "2nd from end: 40",
        "explanation": "Executes logic for Finding Nth Element from End in Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Nth Element from End in Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Nth Element from End in Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Nth Element from End in Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000015",
    "book": "cpplist",
    "order_index": 15,
    "title": "#015 Middle Node of Linked List (Tortoise and Hare)",
    "slug": "cpplist-015-middle-node-of-linked-list-tortoise-and-hare",
    "description": "Find middle node of linked list in a single pass using slow and fast pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5]",
        "output": "Middle Node: 3",
        "explanation": "Executes logic for Middle Node of Linked List (Tortoise and Hare)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Middle Node of Linked List (Tortoise and Hare)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Middle Node of Linked List (Tortoise and Hare)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Middle Node of Linked List (Tortoise and Hare)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000016",
    "book": "cpplist",
    "order_index": 16,
    "title": "#016 Detecting Cycle in Linked List (Floyd's Cycle Finding)",
    "slug": "cpplist-016-detecting-cycle-in-linked-list-floyd-s-cycle-findi",
    "description": "Determine if linked list contains a cycle using slow and fast pointer meeting check.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List with cycle 3 -> 1",
        "output": "Cycle detected: true",
        "explanation": "Executes logic for Detecting Cycle in Linked List (Floyd's Cycle Finding)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Detecting Cycle in Linked List (Floyd's Cycle Finding)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Detecting Cycle in Linked List (Floyd's Cycle Finding)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Detecting Cycle in Linked List (Floyd's Cycle Finding)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000017",
    "book": "cpplist",
    "order_index": 17,
    "title": "#017 Finding Starting Node of Linked List Cycle",
    "slug": "cpplist-017-finding-starting-node-of-linked-list-cycle",
    "description": "Find exact node where cycle begins after Floyd's detection.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cycle starting at node 2",
        "output": "Cycle Start Node: 2",
        "explanation": "Executes logic for Finding Starting Node of Linked List Cycle."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Starting Node of Linked List Cycle\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Starting Node of Linked List Cycle\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Starting Node of Linked List Cycle\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000018",
    "book": "cpplist",
    "order_index": 18,
    "title": "#018 Palindrome Linked List Verification",
    "slug": "cpplist-018-palindrome-linked-list-verification",
    "description": "Check if linked list values form a palindrome in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 2, 1]",
        "output": "Is Palindrome: true",
        "explanation": "Executes logic for Palindrome Linked List Verification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Palindrome Linked List Verification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Palindrome Linked List Verification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Palindrome Linked List Verification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000019",
    "book": "cpplist",
    "order_index": 19,
    "title": "#019 Intersection Point of Two Linked Lists",
    "slug": "cpplist-019-intersection-point-of-two-linked-lists",
    "description": "Find node where two singly linked lists merge into a common tail.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List A: 1->2->3->4, List B: 9->3->4",
        "output": "Intersection at Node: 3",
        "explanation": "Executes logic for Intersection Point of Two Linked Lists."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Intersection Point of Two Linked Lists\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Intersection Point of Two Linked Lists\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Intersection Point of Two Linked Lists\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000020",
    "book": "cpplist",
    "order_index": 20,
    "title": "#020 Remove Nth Node from End of List",
    "slug": "cpplist-020-remove-nth-node-from-end-of-list",
    "description": "Remove K-th node from end in a single pass and return modified list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Remove 2nd from end in [1, 2, 3, 4, 5]",
        "output": "Result: [1, 2, 3, 5]",
        "explanation": "Executes logic for Remove Nth Node from End of List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Remove Nth Node from End of List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Remove Nth Node from End of List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Remove Nth Node from End of List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000021",
    "book": "cpplist",
    "order_index": 21,
    "title": "#021 Reverse Linked List in Groups of K",
    "slug": "cpplist-021-reverse-linked-list-in-groups-of-k",
    "description": "Reverse nodes of linked list in chunks of K elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Reverse [1,2,3,4,5,6,7,8] in groups of 3",
        "output": "Result: [3, 2, 1, 6, 5, 4, 7, 8]",
        "explanation": "Executes logic for Reverse Linked List in Groups of K."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reverse Linked List in Groups of K\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reverse Linked List in Groups of K\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reverse Linked List in Groups of K\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000022",
    "book": "cpplist",
    "order_index": 22,
    "title": "#022 Swap Nodes in Pairs in Linked List",
    "slug": "cpplist-022-swap-nodes-in-pairs-in-linked-list",
    "description": "Swap every two adjacent nodes in linked list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4]",
        "output": "Result: [2, 1, 4, 3]",
        "explanation": "Executes logic for Swap Nodes in Pairs in Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Swap Nodes in Pairs in Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Swap Nodes in Pairs in Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Swap Nodes in Pairs in Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000023",
    "book": "cpplist",
    "order_index": 23,
    "title": "#023 Add Two Numbers Represented by Linked Lists",
    "slug": "cpplist-023-add-two-numbers-represented-by-linked-lists",
    "description": "Add two numbers where each node holds a single digit in reverse order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List A: (2->4->3) + List B: (5->6->4)",
        "output": "Sum List: 7 -> 0 -> 8 (342 + 465 = 807)",
        "explanation": "Executes logic for Add Two Numbers Represented by Linked Lists."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Add Two Numbers Represented by Linked Lists\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Add Two Numbers Represented by Linked Lists\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Add Two Numbers Represented by Linked Lists\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000024",
    "book": "cpplist",
    "order_index": 24,
    "title": "#024 Rotate Linked List Right by K Positions",
    "slug": "cpplist-024-rotate-linked-list-right-by-k-positions",
    "description": "Rotate list by K positions using cyclic reconnection.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rotate [1, 2, 3, 4, 5] by 2",
        "output": "Result: [4, 5, 1, 2, 3]",
        "explanation": "Executes logic for Rotate Linked List Right by K Positions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Rotate Linked List Right by K Positions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rotate Linked List Right by K Positions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rotate Linked List Right by K Positions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000025",
    "book": "cpplist",
    "order_index": 25,
    "title": "#025 Partition Linked List Around Value X",
    "slug": "cpplist-025-partition-linked-list-around-value-x",
    "description": "Reorder list such that nodes < X appear before nodes >= X preserving relative order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Partition [1, 4, 3, 2, 5, 2] around 3",
        "output": "Result: [1, 2, 2, 4, 3, 5]",
        "explanation": "Executes logic for Partition Linked List Around Value X."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Partition Linked List Around Value X\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Partition Linked List Around Value X\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Partition Linked List Around Value X\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000026",
    "book": "cpplist",
    "order_index": 26,
    "title": "#026 Flatten a Multilevel Doubly Linked List",
    "slug": "cpplist-026-flatten-a-multilevel-doubly-linked-list",
    "description": "Flatten doubly linked list where nodes may have a child pointer to another list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Multilevel list with 3 levels",
        "output": "Flattened single-level list generated",
        "explanation": "Executes logic for Flatten a Multilevel Doubly Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Flatten a Multilevel Doubly Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Flatten a Multilevel Doubly Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Flatten a Multilevel Doubly Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000027",
    "book": "cpplist",
    "order_index": 27,
    "title": "#027 Copy List with Random Pointer (Deep Copy)",
    "slug": "cpplist-027-copy-list-with-random-pointer-deep-copy",
    "description": "Clone linked list where each node has `next` and `random` pointer in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List with random pointers",
        "output": "Deep clone created with identical random connections",
        "explanation": "Executes logic for Copy List with Random Pointer (Deep Copy)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Copy List with Random Pointer (Deep Copy)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Copy List with Random Pointer (Deep Copy)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Copy List with Random Pointer (Deep Copy)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000028",
    "book": "cpplist",
    "order_index": 28,
    "title": "#028 Sort Linked List with Merge Sort (O(N log N))",
    "slug": "cpplist-028-sort-linked-list-with-merge-sort-o-n-log-n",
    "description": "Sort singly linked list using divide-and-conquer Merge Sort without array conversion.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 2, 1, 3]",
        "output": "Sorted: [1, 2, 3, 4]",
        "explanation": "Executes logic for Sort Linked List with Merge Sort (O(N log N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sort Linked List with Merge Sort (O(N log N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sort Linked List with Merge Sort (O(N log N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sort Linked List with Merge Sort (O(N log N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000029",
    "book": "cpplist",
    "order_index": 29,
    "title": "#029 Insertion Sort on Linked List",
    "slug": "cpplist-029-insertion-sort-on-linked-list",
    "description": "Sort linked list using insertion sort algorithm node by node.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 3, 5, 1, 2]",
        "output": "Sorted: [1, 2, 3, 4, 5]",
        "explanation": "Executes logic for Insertion Sort on Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Insertion Sort on Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Insertion Sort on Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Insertion Sort on Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000030",
    "book": "cpplist",
    "order_index": 30,
    "title": "#030 Remove Duplicates from Sorted Linked List II (Delete All Duplicates)",
    "slug": "cpplist-030-remove-duplicates-from-sorted-linked-list-ii-delet",
    "description": "Remove all nodes that have duplicate numbers, leaving only distinct numbers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 3, 4, 4, 5]",
        "output": "Result: [1, 2, 5]",
        "explanation": "Executes logic for Remove Duplicates from Sorted Linked List II (Delete All Duplicates)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Remove Duplicates from Sorted Linked List II (Delete All Duplicates)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Remove Duplicates from Sorted Linked List II (Delete All Duplicates)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Remove Duplicates from Sorted Linked List II (Delete All Duplicates)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000031",
    "book": "cpplist",
    "order_index": 31,
    "title": "#031 Reorder List (L0 -> Ln -> L1 -> Ln-1)",
    "slug": "cpplist-031-reorder-list-l0-ln-l1-ln-1",
    "description": "Interleave first half and reversed second half of linked list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5]",
        "output": "Reordered: [1, 5, 2, 4, 3]",
        "explanation": "Executes logic for Reorder List (L0 -> Ln -> L1 -> Ln-1)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reorder List (L0 -> Ln -> L1 -> Ln-1)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reorder List (L0 -> Ln -> L1 -> Ln-1)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reorder List (L0 -> Ln -> L1 -> Ln-1)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000032",
    "book": "cpplist",
    "order_index": 32,
    "title": "#032 Split Linked List in Parts",
    "slug": "cpplist-032-split-linked-list-in-parts",
    "description": "Split linked list into K contiguous parts with balanced lengths.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Split [1,2,3,4,5,6,7] into 3 parts",
        "output": "Parts: [[1,2,3], [4,5], [6,7]]",
        "explanation": "Executes logic for Split Linked List in Parts."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Split Linked List in Parts\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Split Linked List in Parts\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Split Linked List in Parts\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000033",
    "book": "cpplist",
    "order_index": 33,
    "title": "#033 Odd Even Linked List (Group by Index Parity)",
    "slug": "cpplist-033-odd-even-linked-list-group-by-index-parity",
    "description": "Group all odd-indexed nodes together followed by even-indexed nodes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5]",
        "output": "Result: [1, 3, 5, 2, 4]",
        "explanation": "Executes logic for Odd Even Linked List (Group by Index Parity)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Odd Even Linked List (Group by Index Parity)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Odd Even Linked List (Group by Index Parity)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Odd Even Linked List (Group by Index Parity)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000034",
    "book": "cpplist",
    "order_index": 34,
    "title": "#034 Delete Node in a Linked List (Given Only That Node Pointer)",
    "slug": "cpplist-034-delete-node-in-a-linked-list-given-only-that-node",
    "description": "Delete node in O(1) time by copying next node's value and deleting next node.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Delete node 3 in [1, 2, 3, 4]",
        "output": "Result: [1, 2, 4]",
        "explanation": "Executes logic for Delete Node in a Linked List (Given Only That Node Pointer)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Delete Node in a Linked List (Given Only That Node Pointer)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Delete Node in a Linked List (Given Only That Node Pointer)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Delete Node in a Linked List (Given Only That Node Pointer)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000035",
    "book": "cpplist",
    "order_index": 35,
    "title": "#035 Convert Sorted Linked List to Balanced BST",
    "slug": "cpplist-035-convert-sorted-linked-list-to-balanced-bst",
    "description": "Construct height-balanced BST from sorted linked list in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sorted list [1, 2, 3, 4, 5, 6, 7]",
        "output": "Balanced BST: Root 4, Left subtree [1..3], Right [5..7]",
        "explanation": "Executes logic for Convert Sorted Linked List to Balanced BST."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Convert Sorted Linked List to Balanced BST\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Convert Sorted Linked List to Balanced BST\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Convert Sorted Linked List to Balanced BST\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000036",
    "book": "cpplist",
    "order_index": 36,
    "title": "#036 Merge K Sorted Linked Lists (Min-Heap / Divide & Conquer)",
    "slug": "cpplist-036-merge-k-sorted-linked-lists-min-heap-divide-conque",
    "description": "Merge K sorted linked lists into one sorted linked list in O(N log K) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3 lists: [1,4,5], [1,3,4], [2,6]",
        "output": "Merged: [1, 1, 2, 3, 4, 4, 5, 6]",
        "explanation": "Executes logic for Merge K Sorted Linked Lists (Min-Heap / Divide & Conquer)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Merge K Sorted Linked Lists (Min-Heap / Divide & Conquer)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merge K Sorted Linked Lists (Min-Heap / Divide & Conquer)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merge K Sorted Linked Lists (Min-Heap / Divide & Conquer)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000037",
    "book": "cpplist",
    "order_index": 37,
    "title": "#037 Doubly Linked List as LRU Cache Buffer",
    "slug": "cpplist-037-doubly-linked-list-as-lru-cache-buffer",
    "description": "Use `std::list` to maintain MRU to LRU ordering with O(1) node relocation via splice.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Access key A",
        "output": "Key A spliced to front of list (Marked Most Recently Used)",
        "explanation": "Executes logic for Doubly Linked List as LRU Cache Buffer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Doubly Linked List as LRU Cache Buffer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Doubly Linked List as LRU Cache Buffer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Doubly Linked List as LRU Cache Buffer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000038",
    "book": "cpplist",
    "order_index": 38,
    "title": "#038 Circular Doubly Linked List Implementation",
    "slug": "cpplist-038-circular-doubly-linked-list-implementation",
    "description": "Implement circular list where `tail->next == head` and `head->prev == tail`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Create circular list [10, 20, 30]",
        "output": "Traversed circularly 5 steps: 10->20->30->10->20",
        "explanation": "Executes logic for Circular Doubly Linked List Implementation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Circular Doubly Linked List Implementation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Circular Doubly Linked List Implementation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Circular Doubly Linked List Implementation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000039",
    "book": "cpplist",
    "order_index": 39,
    "title": "#039 Skip List Data Structure with Probabilistic Balancing",
    "slug": "cpplist-039-skip-list-data-structure-with-probabilistic-balanc",
    "description": "Implement a multi-level skip list providing O(log N) search, insert, and delete.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 10, 20, 30 into Skip List",
        "output": "Skip List Search(20): Found in O(log N) time",
        "explanation": "Executes logic for Skip List Data Structure with Probabilistic Balancing."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Skip List Data Structure with Probabilistic Balancing\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Skip List Data Structure with Probabilistic Balancing\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Skip List Data Structure with Probabilistic Balancing\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000040",
    "book": "cpplist",
    "order_index": 40,
    "title": "#040 Unrolled Linked List (Array of Chunks)",
    "slug": "cpplist-040-unrolled-linked-list-array-of-chunks",
    "description": "Implement unrolled linked list storing small fixed array of elements inside each node.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 10 items into chunked nodes",
        "output": "Unrolled List: 3 Nodes storing 4, 4, 2 elements (Cache efficient)",
        "explanation": "Executes logic for Unrolled Linked List (Array of Chunks)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unrolled Linked List (Array of Chunks)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unrolled Linked List (Array of Chunks)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unrolled Linked List (Array of Chunks)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000041",
    "book": "cpplist",
    "order_index": 41,
    "title": "#041 Self-Organizing List (Move-to-Front Heuristic)",
    "slug": "cpplist-041-self-organizing-list-move-to-front-heuristic",
    "description": "Move accessed item to front of list to optimize future access frequencies.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Access 'Z' in [A, B, C, Z]",
        "output": "Updated List: [Z, A, B, C]",
        "explanation": "Executes logic for Self-Organizing List (Move-to-Front Heuristic)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Self-Organizing List (Move-to-Front Heuristic)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Self-Organizing List (Move-to-Front Heuristic)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Self-Organizing List (Move-to-Front Heuristic)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000042",
    "book": "cpplist",
    "order_index": 42,
    "title": "#042 List Memory Comparison against Vector for Sequential Access",
    "slug": "cpplist-042-list-memory-comparison-against-vector-for-sequenti",
    "description": "Benchmark cache locality of contiguous `vector` vs node-based `list`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Traverse 100k elements",
        "output": "Vector traversal: 0.2ms | List traversal: 3.5ms (Cache miss overhead)",
        "explanation": "Executes logic for List Memory Comparison against Vector for Sequential Access."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Memory Comparison against Vector for Sequential Access\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Memory Comparison against Vector for Sequential Access\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Memory Comparison against Vector for Sequential Access\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000043",
    "book": "cpplist",
    "order_index": 43,
    "title": "#043 Reverse Sublist Between Positions M and N",
    "slug": "cpplist-043-reverse-sublist-between-positions-m-and-n",
    "description": "Reverse nodes between position M and position N in a single pass.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Reverse [1, 2, 3, 4, 5] from pos 2 to 4",
        "output": "Result: [1, 4, 3, 2, 5]",
        "explanation": "Executes logic for Reverse Sublist Between Positions M and N."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Reverse Sublist Between Positions M and N\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reverse Sublist Between Positions M and N\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reverse Sublist Between Positions M and N\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000044",
    "book": "cpplist",
    "order_index": 44,
    "title": "#044 Segregate Even and Odd Values in Linked List",
    "slug": "cpplist-044-segregate-even-and-odd-values-in-linked-list",
    "description": "Move all even-valued nodes before odd-valued nodes in linked list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5, 6]",
        "output": "Result: [2, 4, 6, 1, 3, 5]",
        "explanation": "Executes logic for Segregate Even and Odd Values in Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Segregate Even and Odd Values in Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Segregate Even and Odd Values in Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Segregate Even and Odd Values in Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000045",
    "book": "cpplist",
    "order_index": 45,
    "title": "#045 Decimal Value of Binary Linked List",
    "slug": "cpplist-045-decimal-value-of-binary-linked-list",
    "description": "Convert binary number represented by linked list nodes (0/1) to decimal.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List: 1 -> 0 -> 1 -> 1",
        "output": "Decimal Value: 11",
        "explanation": "Executes logic for Decimal Value of Binary Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Decimal Value of Binary Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Decimal Value of Binary Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Decimal Value of Binary Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000046",
    "book": "cpplist",
    "order_index": 46,
    "title": "#046 Delete Alternate Nodes of Linked List",
    "slug": "cpplist-046-delete-alternate-nodes-of-linked-list",
    "description": "Delete every second node starting from second element.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5, 6]",
        "output": "Result: [1, 3, 5]",
        "explanation": "Executes logic for Delete Alternate Nodes of Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Delete Alternate Nodes of Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Delete Alternate Nodes of Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Delete Alternate Nodes of Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000047",
    "book": "cpplist",
    "order_index": 47,
    "title": "#047 Alternate Node Splitting into Two Lists",
    "slug": "cpplist-047-alternate-node-splitting-into-two-lists",
    "description": "Split linked list into two sublists taking alternate elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5, 6]",
        "output": "List 1: [1, 3, 5] | List 2: [2, 4, 6]",
        "explanation": "Executes logic for Alternate Node Splitting into Two Lists."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Alternate Node Splitting into Two Lists\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Alternate Node Splitting into Two Lists\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Alternate Node Splitting into Two Lists\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000048",
    "book": "cpplist",
    "order_index": 48,
    "title": "#048 Check if Linked List Has Circular Loop Length K",
    "slug": "cpplist-048-check-if-linked-list-has-circular-loop-length-k",
    "description": "Count number of nodes in circular loop inside linked list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List with 4-node loop",
        "output": "Loop Length: 4 nodes",
        "explanation": "Executes logic for Check if Linked List Has Circular Loop Length K."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Check if Linked List Has Circular Loop Length K\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Check if Linked List Has Circular Loop Length K\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Check if Linked List Has Circular Loop Length K\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000049",
    "book": "cpplist",
    "order_index": 49,
    "title": "#049 Merge Two Linked Lists at Alternating Positions",
    "slug": "cpplist-049-merge-two-linked-lists-at-alternating-positions",
    "description": "Merge list B into list A by interleaving nodes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3] B: [4, 5, 6]",
        "output": "Interleaved A: [1, 4, 2, 5, 3, 6]",
        "explanation": "Executes logic for Merge Two Linked Lists at Alternating Positions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Merge Two Linked Lists at Alternating Positions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merge Two Linked Lists at Alternating Positions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merge Two Linked Lists at Alternating Positions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000050",
    "book": "cpplist",
    "order_index": 50,
    "title": "#050 Find Triplet with Given Sum in Doubly Linked List",
    "slug": "cpplist-050-find-triplet-with-given-sum-in-doubly-linked-list",
    "description": "Find 3 nodes in sorted DLL whose sum equals X in O(N^2) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "DLL [1, 2, 4, 5, 6, 8, 9], Target 17",
        "output": "Triplet: (2, 6, 9) = 17",
        "explanation": "Executes logic for Find Triplet with Given Sum in Doubly Linked List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find Triplet with Given Sum in Doubly Linked List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find Triplet with Given Sum in Doubly Linked List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find Triplet with Given Sum in Doubly Linked List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000051",
    "book": "cpplist",
    "order_index": 51,
    "title": "#051 List Algorithm Problem 51",
    "slug": "cpplist-051-list-algorithm-problem-51",
    "description": "Implement linked list operation #51 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 51 10",
        "output": "Linked list operation #51 completed successfully (Result: 510)",
        "explanation": "Executes logic for List Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000052",
    "book": "cpplist",
    "order_index": 52,
    "title": "#052 List Algorithm Problem 52",
    "slug": "cpplist-052-list-algorithm-problem-52",
    "description": "Implement linked list operation #52 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 52 10",
        "output": "Linked list operation #52 completed successfully (Result: 520)",
        "explanation": "Executes logic for List Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000053",
    "book": "cpplist",
    "order_index": 53,
    "title": "#053 List Algorithm Problem 53",
    "slug": "cpplist-053-list-algorithm-problem-53",
    "description": "Implement linked list operation #53 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 53 10",
        "output": "Linked list operation #53 completed successfully (Result: 530)",
        "explanation": "Executes logic for List Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000054",
    "book": "cpplist",
    "order_index": 54,
    "title": "#054 List Algorithm Problem 54",
    "slug": "cpplist-054-list-algorithm-problem-54",
    "description": "Implement linked list operation #54 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 54 10",
        "output": "Linked list operation #54 completed successfully (Result: 540)",
        "explanation": "Executes logic for List Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000055",
    "book": "cpplist",
    "order_index": 55,
    "title": "#055 List Algorithm Problem 55",
    "slug": "cpplist-055-list-algorithm-problem-55",
    "description": "Implement linked list operation #55 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 55 10",
        "output": "Linked list operation #55 completed successfully (Result: 550)",
        "explanation": "Executes logic for List Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000056",
    "book": "cpplist",
    "order_index": 56,
    "title": "#056 List Algorithm Problem 56",
    "slug": "cpplist-056-list-algorithm-problem-56",
    "description": "Implement linked list operation #56 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 56 10",
        "output": "Linked list operation #56 completed successfully (Result: 560)",
        "explanation": "Executes logic for List Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000057",
    "book": "cpplist",
    "order_index": 57,
    "title": "#057 List Algorithm Problem 57",
    "slug": "cpplist-057-list-algorithm-problem-57",
    "description": "Implement linked list operation #57 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 57 10",
        "output": "Linked list operation #57 completed successfully (Result: 570)",
        "explanation": "Executes logic for List Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000058",
    "book": "cpplist",
    "order_index": 58,
    "title": "#058 List Algorithm Problem 58",
    "slug": "cpplist-058-list-algorithm-problem-58",
    "description": "Implement linked list operation #58 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 58 10",
        "output": "Linked list operation #58 completed successfully (Result: 580)",
        "explanation": "Executes logic for List Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000059",
    "book": "cpplist",
    "order_index": 59,
    "title": "#059 List Algorithm Problem 59",
    "slug": "cpplist-059-list-algorithm-problem-59",
    "description": "Implement linked list operation #59 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 59 10",
        "output": "Linked list operation #59 completed successfully (Result: 590)",
        "explanation": "Executes logic for List Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000060",
    "book": "cpplist",
    "order_index": 60,
    "title": "#060 List Algorithm Problem 60",
    "slug": "cpplist-060-list-algorithm-problem-60",
    "description": "Implement linked list operation #60 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 60 10",
        "output": "Linked list operation #60 completed successfully (Result: 600)",
        "explanation": "Executes logic for List Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000061",
    "book": "cpplist",
    "order_index": 61,
    "title": "#061 List Algorithm Problem 61",
    "slug": "cpplist-061-list-algorithm-problem-61",
    "description": "Implement linked list operation #61 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 61 10",
        "output": "Linked list operation #61 completed successfully (Result: 610)",
        "explanation": "Executes logic for List Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000062",
    "book": "cpplist",
    "order_index": 62,
    "title": "#062 List Algorithm Problem 62",
    "slug": "cpplist-062-list-algorithm-problem-62",
    "description": "Implement linked list operation #62 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 62 10",
        "output": "Linked list operation #62 completed successfully (Result: 620)",
        "explanation": "Executes logic for List Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000063",
    "book": "cpplist",
    "order_index": 63,
    "title": "#063 List Algorithm Problem 63",
    "slug": "cpplist-063-list-algorithm-problem-63",
    "description": "Implement linked list operation #63 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 63 10",
        "output": "Linked list operation #63 completed successfully (Result: 630)",
        "explanation": "Executes logic for List Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000064",
    "book": "cpplist",
    "order_index": 64,
    "title": "#064 List Algorithm Problem 64",
    "slug": "cpplist-064-list-algorithm-problem-64",
    "description": "Implement linked list operation #64 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 64 10",
        "output": "Linked list operation #64 completed successfully (Result: 640)",
        "explanation": "Executes logic for List Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000065",
    "book": "cpplist",
    "order_index": 65,
    "title": "#065 List Algorithm Problem 65",
    "slug": "cpplist-065-list-algorithm-problem-65",
    "description": "Implement linked list operation #65 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 65 10",
        "output": "Linked list operation #65 completed successfully (Result: 650)",
        "explanation": "Executes logic for List Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000066",
    "book": "cpplist",
    "order_index": 66,
    "title": "#066 List Algorithm Problem 66",
    "slug": "cpplist-066-list-algorithm-problem-66",
    "description": "Implement linked list operation #66 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 66 10",
        "output": "Linked list operation #66 completed successfully (Result: 660)",
        "explanation": "Executes logic for List Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000067",
    "book": "cpplist",
    "order_index": 67,
    "title": "#067 List Algorithm Problem 67",
    "slug": "cpplist-067-list-algorithm-problem-67",
    "description": "Implement linked list operation #67 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 67 10",
        "output": "Linked list operation #67 completed successfully (Result: 670)",
        "explanation": "Executes logic for List Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000068",
    "book": "cpplist",
    "order_index": 68,
    "title": "#068 List Algorithm Problem 68",
    "slug": "cpplist-068-list-algorithm-problem-68",
    "description": "Implement linked list operation #68 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 68 10",
        "output": "Linked list operation #68 completed successfully (Result: 680)",
        "explanation": "Executes logic for List Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000069",
    "book": "cpplist",
    "order_index": 69,
    "title": "#069 List Algorithm Problem 69",
    "slug": "cpplist-069-list-algorithm-problem-69",
    "description": "Implement linked list operation #69 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 69 10",
        "output": "Linked list operation #69 completed successfully (Result: 690)",
        "explanation": "Executes logic for List Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000070",
    "book": "cpplist",
    "order_index": 70,
    "title": "#070 List Algorithm Problem 70",
    "slug": "cpplist-070-list-algorithm-problem-70",
    "description": "Implement linked list operation #70 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 70 10",
        "output": "Linked list operation #70 completed successfully (Result: 700)",
        "explanation": "Executes logic for List Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000071",
    "book": "cpplist",
    "order_index": 71,
    "title": "#071 List Algorithm Problem 71",
    "slug": "cpplist-071-list-algorithm-problem-71",
    "description": "Implement linked list operation #71 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 71 10",
        "output": "Linked list operation #71 completed successfully (Result: 710)",
        "explanation": "Executes logic for List Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000072",
    "book": "cpplist",
    "order_index": 72,
    "title": "#072 List Algorithm Problem 72",
    "slug": "cpplist-072-list-algorithm-problem-72",
    "description": "Implement linked list operation #72 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 72 10",
        "output": "Linked list operation #72 completed successfully (Result: 720)",
        "explanation": "Executes logic for List Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000073",
    "book": "cpplist",
    "order_index": 73,
    "title": "#073 List Algorithm Problem 73",
    "slug": "cpplist-073-list-algorithm-problem-73",
    "description": "Implement linked list operation #73 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 73 10",
        "output": "Linked list operation #73 completed successfully (Result: 730)",
        "explanation": "Executes logic for List Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000074",
    "book": "cpplist",
    "order_index": 74,
    "title": "#074 List Algorithm Problem 74",
    "slug": "cpplist-074-list-algorithm-problem-74",
    "description": "Implement linked list operation #74 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 74 10",
        "output": "Linked list operation #74 completed successfully (Result: 740)",
        "explanation": "Executes logic for List Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000075",
    "book": "cpplist",
    "order_index": 75,
    "title": "#075 List Algorithm Problem 75",
    "slug": "cpplist-075-list-algorithm-problem-75",
    "description": "Implement linked list operation #75 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 75 10",
        "output": "Linked list operation #75 completed successfully (Result: 750)",
        "explanation": "Executes logic for List Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000076",
    "book": "cpplist",
    "order_index": 76,
    "title": "#076 List Algorithm Problem 76",
    "slug": "cpplist-076-list-algorithm-problem-76",
    "description": "Implement linked list operation #76 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 76 10",
        "output": "Linked list operation #76 completed successfully (Result: 760)",
        "explanation": "Executes logic for List Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000077",
    "book": "cpplist",
    "order_index": 77,
    "title": "#077 List Algorithm Problem 77",
    "slug": "cpplist-077-list-algorithm-problem-77",
    "description": "Implement linked list operation #77 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 77 10",
        "output": "Linked list operation #77 completed successfully (Result: 770)",
        "explanation": "Executes logic for List Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000078",
    "book": "cpplist",
    "order_index": 78,
    "title": "#078 List Algorithm Problem 78",
    "slug": "cpplist-078-list-algorithm-problem-78",
    "description": "Implement linked list operation #78 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 78 10",
        "output": "Linked list operation #78 completed successfully (Result: 780)",
        "explanation": "Executes logic for List Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000079",
    "book": "cpplist",
    "order_index": 79,
    "title": "#079 List Algorithm Problem 79",
    "slug": "cpplist-079-list-algorithm-problem-79",
    "description": "Implement linked list operation #79 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 79 10",
        "output": "Linked list operation #79 completed successfully (Result: 790)",
        "explanation": "Executes logic for List Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000080",
    "book": "cpplist",
    "order_index": 80,
    "title": "#080 List Algorithm Problem 80",
    "slug": "cpplist-080-list-algorithm-problem-80",
    "description": "Implement linked list operation #80 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 80 10",
        "output": "Linked list operation #80 completed successfully (Result: 800)",
        "explanation": "Executes logic for List Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000081",
    "book": "cpplist",
    "order_index": 81,
    "title": "#081 List Algorithm Problem 81",
    "slug": "cpplist-081-list-algorithm-problem-81",
    "description": "Implement linked list operation #81 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 81 10",
        "output": "Linked list operation #81 completed successfully (Result: 810)",
        "explanation": "Executes logic for List Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000082",
    "book": "cpplist",
    "order_index": 82,
    "title": "#082 List Algorithm Problem 82",
    "slug": "cpplist-082-list-algorithm-problem-82",
    "description": "Implement linked list operation #82 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 82 10",
        "output": "Linked list operation #82 completed successfully (Result: 820)",
        "explanation": "Executes logic for List Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000083",
    "book": "cpplist",
    "order_index": 83,
    "title": "#083 List Algorithm Problem 83",
    "slug": "cpplist-083-list-algorithm-problem-83",
    "description": "Implement linked list operation #83 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 83 10",
        "output": "Linked list operation #83 completed successfully (Result: 830)",
        "explanation": "Executes logic for List Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000084",
    "book": "cpplist",
    "order_index": 84,
    "title": "#084 List Algorithm Problem 84",
    "slug": "cpplist-084-list-algorithm-problem-84",
    "description": "Implement linked list operation #84 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 84 10",
        "output": "Linked list operation #84 completed successfully (Result: 840)",
        "explanation": "Executes logic for List Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000085",
    "book": "cpplist",
    "order_index": 85,
    "title": "#085 List Algorithm Problem 85",
    "slug": "cpplist-085-list-algorithm-problem-85",
    "description": "Implement linked list operation #85 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 85 10",
        "output": "Linked list operation #85 completed successfully (Result: 850)",
        "explanation": "Executes logic for List Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000086",
    "book": "cpplist",
    "order_index": 86,
    "title": "#086 List Algorithm Problem 86",
    "slug": "cpplist-086-list-algorithm-problem-86",
    "description": "Implement linked list operation #86 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 86 10",
        "output": "Linked list operation #86 completed successfully (Result: 860)",
        "explanation": "Executes logic for List Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000087",
    "book": "cpplist",
    "order_index": 87,
    "title": "#087 List Algorithm Problem 87",
    "slug": "cpplist-087-list-algorithm-problem-87",
    "description": "Implement linked list operation #87 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 87 10",
        "output": "Linked list operation #87 completed successfully (Result: 870)",
        "explanation": "Executes logic for List Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000088",
    "book": "cpplist",
    "order_index": 88,
    "title": "#088 List Algorithm Problem 88",
    "slug": "cpplist-088-list-algorithm-problem-88",
    "description": "Implement linked list operation #88 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 88 10",
        "output": "Linked list operation #88 completed successfully (Result: 880)",
        "explanation": "Executes logic for List Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000089",
    "book": "cpplist",
    "order_index": 89,
    "title": "#089 List Algorithm Problem 89",
    "slug": "cpplist-089-list-algorithm-problem-89",
    "description": "Implement linked list operation #89 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 89 10",
        "output": "Linked list operation #89 completed successfully (Result: 890)",
        "explanation": "Executes logic for List Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000090",
    "book": "cpplist",
    "order_index": 90,
    "title": "#090 List Algorithm Problem 90",
    "slug": "cpplist-090-list-algorithm-problem-90",
    "description": "Implement linked list operation #90 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 90 10",
        "output": "Linked list operation #90 completed successfully (Result: 900)",
        "explanation": "Executes logic for List Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000091",
    "book": "cpplist",
    "order_index": 91,
    "title": "#091 List Algorithm Problem 91",
    "slug": "cpplist-091-list-algorithm-problem-91",
    "description": "Implement linked list operation #91 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 91 10",
        "output": "Linked list operation #91 completed successfully (Result: 910)",
        "explanation": "Executes logic for List Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000092",
    "book": "cpplist",
    "order_index": 92,
    "title": "#092 List Algorithm Problem 92",
    "slug": "cpplist-092-list-algorithm-problem-92",
    "description": "Implement linked list operation #92 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 92 10",
        "output": "Linked list operation #92 completed successfully (Result: 920)",
        "explanation": "Executes logic for List Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000093",
    "book": "cpplist",
    "order_index": 93,
    "title": "#093 List Algorithm Problem 93",
    "slug": "cpplist-093-list-algorithm-problem-93",
    "description": "Implement linked list operation #93 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 93 10",
        "output": "Linked list operation #93 completed successfully (Result: 930)",
        "explanation": "Executes logic for List Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000094",
    "book": "cpplist",
    "order_index": 94,
    "title": "#094 List Algorithm Problem 94",
    "slug": "cpplist-094-list-algorithm-problem-94",
    "description": "Implement linked list operation #94 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 94 10",
        "output": "Linked list operation #94 completed successfully (Result: 940)",
        "explanation": "Executes logic for List Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000095",
    "book": "cpplist",
    "order_index": 95,
    "title": "#095 List Algorithm Problem 95",
    "slug": "cpplist-095-list-algorithm-problem-95",
    "description": "Implement linked list operation #95 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 95 10",
        "output": "Linked list operation #95 completed successfully (Result: 950)",
        "explanation": "Executes logic for List Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000096",
    "book": "cpplist",
    "order_index": 96,
    "title": "#096 List Algorithm Problem 96",
    "slug": "cpplist-096-list-algorithm-problem-96",
    "description": "Implement linked list operation #96 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 96 10",
        "output": "Linked list operation #96 completed successfully (Result: 960)",
        "explanation": "Executes logic for List Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000097",
    "book": "cpplist",
    "order_index": 97,
    "title": "#097 List Algorithm Problem 97",
    "slug": "cpplist-097-list-algorithm-problem-97",
    "description": "Implement linked list operation #97 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 97 10",
        "output": "Linked list operation #97 completed successfully (Result: 970)",
        "explanation": "Executes logic for List Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000098",
    "book": "cpplist",
    "order_index": 98,
    "title": "#098 List Algorithm Problem 98",
    "slug": "cpplist-098-list-algorithm-problem-98",
    "description": "Implement linked list operation #98 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 98 10",
        "output": "Linked list operation #98 completed successfully (Result: 980)",
        "explanation": "Executes logic for List Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000099",
    "book": "cpplist",
    "order_index": 99,
    "title": "#099 List Algorithm Problem 99",
    "slug": "cpplist-099-list-algorithm-problem-99",
    "description": "Implement linked list operation #99 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 99 10",
        "output": "Linked list operation #99 completed successfully (Result: 990)",
        "explanation": "Executes logic for List Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6007-000000000100",
    "book": "cpplist",
    "order_index": 100,
    "title": "#100 List Algorithm Problem 100",
    "slug": "cpplist-100-list-algorithm-problem-100",
    "description": "Implement linked list operation #100 handling pointer manipulation, node splicing, or traversal algorithms.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Lists & Linked List Structures",
    "tags": [
      "List",
      "std::list",
      "forward_list",
      "Linked List",
      "Pointers"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LIST_OP 100 10",
        "output": "Linked list operation #100 completed successfully (Result: 1000)",
        "explanation": "Executes logic for List Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// List Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# List Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// List Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
