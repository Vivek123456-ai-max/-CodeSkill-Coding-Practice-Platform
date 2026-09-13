import { Problem } from '../../types/problem';

export const SETS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6011-000000000001",
    "book": "sets",
    "order_index": 1,
    "title": "#001 Set Insertion and Automatic Sorting (`std::set`)",
    "slug": "sets-001-set-insertion-and-automatic-sorting-std-set",
    "description": "Insert unsorted elements into `std::set` and observe sorted, deduplicated output.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 5, 2, 8, 2, 1, 5",
        "output": "Set: {1, 2, 5, 8} (Sorted, Unique)",
        "explanation": "Executes logic for Set Insertion and Automatic Sorting (`std::set`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Insertion and Automatic Sorting (`std::set`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Insertion and Automatic Sorting (`std::set`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Insertion and Automatic Sorting (`std::set`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000002",
    "book": "sets",
    "order_index": 2,
    "title": "#002 Set Element Lookup with `.find()` and `.count()`",
    "slug": "sets-002-set-element-lookup-with-find-and-count",
    "description": "Search for elements in `std::set` in O(log N) time using Red-Black tree search.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find 8 in {1, 2, 5, 8}",
        "output": "Found: true (Count: 1)",
        "explanation": "Executes logic for Set Element Lookup with `.find()` and `.count()`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Element Lookup with `.find()` and `.count()`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Element Lookup with `.find()` and `.count()`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Element Lookup with `.find()` and `.count()`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000003",
    "book": "sets",
    "order_index": 3,
    "title": "#003 Set Erasure (`erase()`) by Value and by Iterator",
    "slug": "sets-003-set-erasure-erase-by-value-and-by-iterator",
    "description": "Erase single element or range from `std::set` in O(log N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase 5 from {1, 2, 5, 8}",
        "output": "Set after erase: {1, 2, 8}",
        "explanation": "Executes logic for Set Erasure (`erase()`) by Value and by Iterator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Erasure (`erase()`) by Value and by Iterator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Erasure (`erase()`) by Value and by Iterator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Erasure (`erase()`) by Value and by Iterator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000004",
    "book": "sets",
    "order_index": 4,
    "title": "#004 Set Lower Bound and Upper Bound (`lower_bound` & `upper_bound`)",
    "slug": "sets-004-set-lower-bound-and-upper-bound-lower-bound-upper",
    "description": "Find first element `>= X` and first element `> X` in `std::set` in O(log N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Bounds for 5 in {10, 20, 30, 40, 50}",
        "output": "Lower Bound(25): 30, Upper Bound(30): 40",
        "explanation": "Executes logic for Set Lower Bound and Upper Bound (`lower_bound` & `upper_bound`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Lower Bound and Upper Bound (`lower_bound` & `upper_bound`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Lower Bound and Upper Bound (`lower_bound` & `upper_bound`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Lower Bound and Upper Bound (`lower_bound` & `upper_bound`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000005",
    "book": "sets",
    "order_index": 5,
    "title": "#005 Set Custom Comparator (Descending Order `greater<T>`)",
    "slug": "sets-005-set-custom-comparator-descending-order-greater-t",
    "description": "Define `std::set<int, greater<int>>` storing elements in strictly decreasing order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 10, 50, 30, 20",
        "output": "Set Descending: {50, 30, 20, 10}",
        "explanation": "Executes logic for Set Custom Comparator (Descending Order `greater<T>`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Custom Comparator (Descending Order `greater<T>`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Custom Comparator (Descending Order `greater<T>`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Custom Comparator (Descending Order `greater<T>`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000006",
    "book": "sets",
    "order_index": 6,
    "title": "#006 Multiset with Duplicate Elements (`std::multiset`)",
    "slug": "sets-006-multiset-with-duplicate-elements-std-multiset",
    "description": "Store duplicate elements in sorted order and count occurrences with `.count()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 2, 5, 2, 8, 2",
        "output": "Multiset: {2, 2, 2, 5, 8} (Count of 2: 3)",
        "explanation": "Executes logic for Multiset with Duplicate Elements (`std::multiset`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Multiset with Duplicate Elements (`std::multiset`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multiset with Duplicate Elements (`std::multiset`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multiset with Duplicate Elements (`std::multiset`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000007",
    "book": "sets",
    "order_index": 7,
    "title": "#007 Multiset Erase: Erase All vs Erase Single Instance",
    "slug": "sets-007-multiset-erase-erase-all-vs-erase-single-instance",
    "description": "Demonstrate `ms.erase(val)` removes all duplicates while `ms.erase(ms.find(val))` removes one.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase one instance of 2",
        "output": "Remaining: {2, 2, 5, 8} (One instance removed)",
        "explanation": "Executes logic for Multiset Erase: Erase All vs Erase Single Instance."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Multiset Erase: Erase All vs Erase Single Instance\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multiset Erase: Erase All vs Erase Single Instance\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multiset Erase: Erase All vs Erase Single Instance\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000008",
    "book": "sets",
    "order_index": 8,
    "title": "#008 Multiset Equal Range (`equal_range()`)",
    "slug": "sets-008-multiset-equal-range-equal-range",
    "description": "Retrieve pair of iterators representing the range of all occurrences of target value in O(log N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Range for 2 in {1, 2, 2, 2, 3}",
        "output": "Equal Range bounds 3 occurrences of 2",
        "explanation": "Executes logic for Multiset Equal Range (`equal_range()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Multiset Equal Range (`equal_range()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multiset Equal Range (`equal_range()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multiset Equal Range (`equal_range()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000009",
    "book": "sets",
    "order_index": 9,
    "title": "#009 Unordered Set (`std::unordered_set`) O(1) Hash Table",
    "slug": "sets-009-unordered-set-std-unordered-set-o-1-hash-table",
    "description": "Store unique elements in hash table with O(1) average search and insert.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 42, 100, 25",
        "output": "Unordered Set contains 42: true (O(1) hash lookup)",
        "explanation": "Executes logic for Unordered Set (`std::unordered_set`) O(1) Hash Table."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Set (`std::unordered_set`) O(1) Hash Table\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Set (`std::unordered_set`) O(1) Hash Table\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Set (`std::unordered_set`) O(1) Hash Table\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000010",
    "book": "sets",
    "order_index": 10,
    "title": "#010 Unordered Multiset (`std::unordered_multiset`)",
    "slug": "sets-010-unordered-multiset-std-unordered-multiset",
    "description": "Store duplicates in hash table without ordering.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert duplicate hashes",
        "output": "Unordered multiset count of 'item': 4",
        "explanation": "Executes logic for Unordered Multiset (`std::unordered_multiset`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Multiset (`std::unordered_multiset`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Multiset (`std::unordered_multiset`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Multiset (`std::unordered_multiset`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000011",
    "book": "sets",
    "order_index": 11,
    "title": "#011 Set Union (`std::set_union`)",
    "slug": "sets-011-set-union-std-set-union",
    "description": "Compute mathematical union of two sets A and B.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: {1, 2, 3} B: {3, 4, 5}",
        "output": "Union: {1, 2, 3, 4, 5}",
        "explanation": "Executes logic for Set Union (`std::set_union`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Union (`std::set_union`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Union (`std::set_union`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Union (`std::set_union`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000012",
    "book": "sets",
    "order_index": 12,
    "title": "#012 Set Intersection (`std::set_intersection`)",
    "slug": "sets-012-set-intersection-std-set-intersection",
    "description": "Compute mathematical intersection of two sets A and B.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: {1, 2, 3, 4} B: {2, 4, 6}",
        "output": "Intersection: {2, 4}",
        "explanation": "Executes logic for Set Intersection (`std::set_intersection`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Intersection (`std::set_intersection`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Intersection (`std::set_intersection`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Intersection (`std::set_intersection`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000013",
    "book": "sets",
    "order_index": 13,
    "title": "#013 Set Difference (`std::set_difference`)",
    "slug": "sets-013-set-difference-std-set-difference",
    "description": "Compute mathematical difference A - B (elements in A but not in B).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: {1, 2, 3, 4} B: {2, 4, 6}",
        "output": "Difference: {1, 3}",
        "explanation": "Executes logic for Set Difference (`std::set_difference`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Difference (`std::set_difference`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Difference (`std::set_difference`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Difference (`std::set_difference`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000014",
    "book": "sets",
    "order_index": 14,
    "title": "#014 Set Symmetric Difference (`std::set_symmetric_difference`)",
    "slug": "sets-014-set-symmetric-difference-std-set-symmetric-differe",
    "description": "Find elements present in either A or B, but not both.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: {1, 2, 3} B: {2, 3, 4}",
        "output": "Symmetric Difference: {1, 4}",
        "explanation": "Executes logic for Set Symmetric Difference (`std::set_symmetric_difference`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Symmetric Difference (`std::set_symmetric_difference`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Symmetric Difference (`std::set_symmetric_difference`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Symmetric Difference (`std::set_symmetric_difference`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000015",
    "book": "sets",
    "order_index": 15,
    "title": "#015 Subset Verification (`std::includes`)",
    "slug": "sets-015-subset-verification-std-includes",
    "description": "Check if set B is a subset of set A using `std::includes`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: {1, 2, 3, 4, 5}, B: {2, 4}",
        "output": "Includes (B is subset of A): true",
        "explanation": "Executes logic for Subset Verification (`std::includes`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Subset Verification (`std::includes`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subset Verification (`std::includes`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subset Verification (`std::includes`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000016",
    "book": "sets",
    "order_index": 16,
    "title": "#016 Two Sum using `std::unordered_set` in O(N)",
    "slug": "sets-016-two-sum-using-std-unordered-set-in-o-n",
    "description": "Find if array contains two numbers summing to target using hash set.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Array [2, 7, 11, 15], Target 9",
        "output": "Pair found: (2, 7) = 9",
        "explanation": "Executes logic for Two Sum using `std::unordered_set` in O(N)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Two Sum using `std::unordered_set` in O(N)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Two Sum using `std::unordered_set` in O(N)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Two Sum using `std::unordered_set` in O(N)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000017",
    "book": "sets",
    "order_index": 17,
    "title": "#017 Contains Duplicate in Array (Hash Set)",
    "slug": "sets-017-contains-duplicate-in-array-hash-set",
    "description": "Determine if any value appears at least twice in integer array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 1]",
        "output": "Contains Duplicate: true",
        "explanation": "Executes logic for Contains Duplicate in Array (Hash Set)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Contains Duplicate in Array (Hash Set)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Contains Duplicate in Array (Hash Set)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Contains Duplicate in Array (Hash Set)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000018",
    "book": "sets",
    "order_index": 18,
    "title": "#018 Longest Consecutive Sequence (Hash Set O(N))",
    "slug": "sets-018-longest-consecutive-sequence-hash-set-o-n",
    "description": "Find length of longest sequence of consecutive elements in unsorted array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[100, 4, 200, 1, 3, 2]",
        "output": "Longest Consecutive Length: 4 ({1, 2, 3, 4})",
        "explanation": "Executes logic for Longest Consecutive Sequence (Hash Set O(N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Consecutive Sequence (Hash Set O(N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Consecutive Sequence (Hash Set O(N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Consecutive Sequence (Hash Set O(N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000019",
    "book": "sets",
    "order_index": 19,
    "title": "#019 Intersection of Two Arrays (Unique Common Elements)",
    "slug": "sets-019-intersection-of-two-arrays-unique-common-elements",
    "description": "Return array of unique common elements present in both input arrays.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums1 [1,2,2,1], Nums2 [2,2]",
        "output": "Intersection: [2]",
        "explanation": "Executes logic for Intersection of Two Arrays (Unique Common Elements)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Intersection of Two Arrays (Unique Common Elements)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Intersection of Two Arrays (Unique Common Elements)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Intersection of Two Arrays (Unique Common Elements)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000020",
    "book": "sets",
    "order_index": 20,
    "title": "#020 Happy Number Detection (Cycle Detection via Hash Set)",
    "slug": "sets-020-happy-number-detection-cycle-detection-via-hash-se",
    "description": "Determine if number reaches 1 when replaced by sum of squares of its digits.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Number 19",
        "output": "Is Happy Number: true (19 -> 82 -> 68 -> 100 -> 1)",
        "explanation": "Executes logic for Happy Number Detection (Cycle Detection via Hash Set)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Happy Number Detection (Cycle Detection via Hash Set)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Happy Number Detection (Cycle Detection via Hash Set)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Happy Number Detection (Cycle Detection via Hash Set)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000021",
    "book": "sets",
    "order_index": 21,
    "title": "#021 First Repeating Element in Array (Hash Set)",
    "slug": "sets-021-first-repeating-element-in-array-hash-set",
    "description": "Find first element that repeats in array with smallest original index.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[10, 5, 3, 4, 3, 5, 6]",
        "output": "First Repeating Element: 5 (at index 1)",
        "explanation": "Executes logic for First Repeating Element in Array (Hash Set)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// First Repeating Element in Array (Hash Set)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# First Repeating Element in Array (Hash Set)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// First Repeating Element in Array (Hash Set)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000022",
    "book": "sets",
    "order_index": 22,
    "title": "#022 Find All Numbers Disappeared in an Array",
    "slug": "sets-022-find-all-numbers-disappeared-in-an-array",
    "description": "Find all integers in range [1, N] that do not appear in array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 3, 2, 7, 8, 2, 3, 1]",
        "output": "Disappeared Numbers: [5, 6]",
        "explanation": "Executes logic for Find All Numbers Disappeared in an Array."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find All Numbers Disappeared in an Array\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find All Numbers Disappeared in an Array\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find All Numbers Disappeared in an Array\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000023",
    "book": "sets",
    "order_index": 23,
    "title": "#023 Set of Custom Structs with Overloaded `operator<`",
    "slug": "sets-023-set-of-custom-structs-with-overloaded-operator",
    "description": "Store `Point(x, y)` structs in `std::set` ordered by x-coordinate then y-coordinate.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert Points (1,2), (0,5), (1,1)",
        "output": "Set Order: (0,5), (1,1), (1,2)",
        "explanation": "Executes logic for Set of Custom Structs with Overloaded `operator<`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set of Custom Structs with Overloaded `operator<`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set of Custom Structs with Overloaded `operator<`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set of Custom Structs with Overloaded `operator<`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000024",
    "book": "sets",
    "order_index": 24,
    "title": "#024 Set of Custom Structs with Custom Functor Comparator",
    "slug": "sets-024-set-of-custom-structs-with-custom-functor-comparat",
    "description": "Store `Student` structs sorted by GPA descending using functor comparator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert Alice(3.8), Bob(3.9), Charlie(3.5)",
        "output": "Set Order: Bob (3.9), Alice (3.8), Charlie (3.5)",
        "explanation": "Executes logic for Set of Custom Structs with Custom Functor Comparator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set of Custom Structs with Custom Functor Comparator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set of Custom Structs with Custom Functor Comparator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set of Custom Structs with Custom Functor Comparator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000025",
    "book": "sets",
    "order_index": 25,
    "title": "#025 Unordered Set with Custom Hash and Equality Functor",
    "slug": "sets-025-unordered-set-with-custom-hash-and-equality-functo",
    "description": "Store `Point` objects in `std::unordered_set` with custom hash combining x and y.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert Point(1, 2)",
        "output": "Point(1, 2) hashed and stored in unordered_set",
        "explanation": "Executes logic for Unordered Set with Custom Hash and Equality Functor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Set with Custom Hash and Equality Functor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Set with Custom Hash and Equality Functor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Set with Custom Hash and Equality Functor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000026",
    "book": "sets",
    "order_index": 26,
    "title": "#026 Finding Missing and Repeated Values in Grid",
    "slug": "sets-026-finding-missing-and-repeated-values-in-grid",
    "description": "Find repeated number A and missing number B in N x N grid containing [1..N^2].\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Grid [[1,3],[2,2]]",
        "output": "Repeated: 2, Missing: 4",
        "explanation": "Executes logic for Finding Missing and Repeated Values in Grid."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Missing and Repeated Values in Grid\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Missing and Repeated Values in Grid\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Missing and Repeated Values in Grid\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000027",
    "book": "sets",
    "order_index": 27,
    "title": "#027 Count Pairs with Absolute Difference K",
    "slug": "sets-027-count-pairs-with-absolute-difference-k",
    "description": "Count pairs `(i, j)` where `|arr[i] - arr[j]| == k` using hash set.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 5, 3, 4, 2], k=2",
        "output": "Pairs Count: 3 ((1,3), (3,5), (2,4))",
        "explanation": "Executes logic for Count Pairs with Absolute Difference K."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Count Pairs with Absolute Difference K\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Count Pairs with Absolute Difference K\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Count Pairs with Absolute Difference K\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000028",
    "book": "sets",
    "order_index": 28,
    "title": "#028 Distinct Elements in Every Window of Size K",
    "slug": "sets-028-distinct-elements-in-every-window-of-size-k",
    "description": "Count distinct numbers in sliding window of size K using frequency map / multiset.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 1, 3, 4, 2, 3], k=4",
        "output": "Distinct Counts: [3, 4, 4, 3]",
        "explanation": "Executes logic for Distinct Elements in Every Window of Size K."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Distinct Elements in Every Window of Size K\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Distinct Elements in Every Window of Size K\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Distinct Elements in Every Window of Size K\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000029",
    "book": "sets",
    "order_index": 29,
    "title": "#029 Finding Common Characters Across All Strings",
    "slug": "sets-029-finding-common-characters-across-all-strings",
    "description": "Find all characters that appear in every string in list of words.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "['bella', 'label', 'roller']",
        "output": "Common Characters: ['e', 'l', 'l']",
        "explanation": "Executes logic for Finding Common Characters Across All Strings."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Common Characters Across All Strings\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Common Characters Across All Strings\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Common Characters Across All Strings\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000030",
    "book": "sets",
    "order_index": 30,
    "title": "#030 Determine if Two Strings Are Close (Set Operation)",
    "slug": "sets-030-determine-if-two-strings-are-close-set-operation",
    "description": "Check if two strings can be transformed using swap and frequency swap operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Word1 'abc', Word2 'bca'",
        "output": "Are Close: true",
        "explanation": "Executes logic for Determine if Two Strings Are Close (Set Operation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Determine if Two Strings Are Close (Set Operation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Determine if Two Strings Are Close (Set Operation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Determine if Two Strings Are Close (Set Operation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000031",
    "book": "sets",
    "order_index": 31,
    "title": "#031 Subarray Sums Divisible by K using Hash Set / Map",
    "slug": "sets-031-subarray-sums-divisible-by-k-using-hash-set-map",
    "description": "Count contiguous subarrays whose sum is divisible by K.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 5, 0, -2, -3, 1], k=5",
        "output": "Subarrays Count: 7",
        "explanation": "Executes logic for Subarray Sums Divisible by K using Hash Set / Map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Subarray Sums Divisible by K using Hash Set / Map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subarray Sums Divisible by K using Hash Set / Map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subarray Sums Divisible by K using Hash Set / Map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000032",
    "book": "sets",
    "order_index": 32,
    "title": "#032 Minimum Operations to Make Array Unique",
    "slug": "sets-032-minimum-operations-to-make-array-unique",
    "description": "Increment duplicate elements until all array values are distinct.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[3, 2, 1, 2, 1, 7]",
        "output": "Increment Operations: 6 (Result: [1, 2, 3, 4, 5, 7])",
        "explanation": "Executes logic for Minimum Operations to Make Array Unique."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Operations to Make Array Unique\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Operations to Make Array Unique\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Operations to Make Array Unique\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000033",
    "book": "sets",
    "order_index": 33,
    "title": "#033 Group Anagrams Key Generation with Sorted Set String",
    "slug": "sets-033-group-anagrams-key-generation-with-sorted-set-stri",
    "description": "Group strings that are anagrams of each other.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "['eat','tea','tan','ate','nat','bat']",
        "output": "Groups: [['bat'], ['nat','tan'], ['ate','eat','tea']]",
        "explanation": "Executes logic for Group Anagrams Key Generation with Sorted Set String."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Group Anagrams Key Generation with Sorted Set String\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Group Anagrams Key Generation with Sorted Set String\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Group Anagrams Key Generation with Sorted Set String\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000034",
    "book": "sets",
    "order_index": 34,
    "title": "#034 Single Number in Array Where Every Other Appears Twice (Set Sum)",
    "slug": "sets-034-single-number-in-array-where-every-other-appears-t",
    "description": "Find unique number using formula `2 * sum(set) - sum(array)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 1, 2, 1, 2]",
        "output": "Single Number: 4",
        "explanation": "Executes logic for Single Number in Array Where Every Other Appears Twice (Set Sum)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Single Number in Array Where Every Other Appears Twice (Set Sum)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Single Number in Array Where Every Other Appears Twice (Set Sum)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Single Number in Array Where Every Other Appears Twice (Set Sum)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000035",
    "book": "sets",
    "order_index": 35,
    "title": "#035 K-th Distinct String in an Array",
    "slug": "sets-035-k-th-distinct-string-in-an-array",
    "description": "Find K-th distinct string that appears exactly once in array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "['d','b','c','b','c','a'], k=2",
        "output": "2nd Distinct String: 'a'",
        "explanation": "Executes logic for K-th Distinct String in an Array."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// K-th Distinct String in an Array\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# K-th Distinct String in an Array\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// K-th Distinct String in an Array\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000036",
    "book": "sets",
    "order_index": 36,
    "title": "#036 Find the Difference of Two Arrays (Set Difference)",
    "slug": "sets-036-find-the-difference-of-two-arrays-set-difference",
    "description": "Return distinct elements unique to nums1 and unique to nums2.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums1 [1,2,3], Nums2 [2,4,6]",
        "output": "Unique1: [1, 3], Unique2: [4, 6]",
        "explanation": "Executes logic for Find the Difference of Two Arrays (Set Difference)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find the Difference of Two Arrays (Set Difference)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find the Difference of Two Arrays (Set Difference)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find the Difference of Two Arrays (Set Difference)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000037",
    "book": "sets",
    "order_index": 37,
    "title": "#037 Subarray with Zero Sum Detection (Hash Set)",
    "slug": "sets-037-subarray-with-zero-sum-detection-hash-set",
    "description": "Check if array contains contiguous subarray with sum equal to 0.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 2, -3, 1, 6]",
        "output": "Zero Sum Subarray Exists: true ([2, -3, 1])",
        "explanation": "Executes logic for Subarray with Zero Sum Detection (Hash Set)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Subarray with Zero Sum Detection (Hash Set)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subarray with Zero Sum Detection (Hash Set)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subarray with Zero Sum Detection (Hash Set)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000038",
    "book": "sets",
    "order_index": 38,
    "title": "#038 Longest Substring with At Most K Distinct Characters",
    "slug": "sets-038-longest-substring-with-at-most-k-distinct-characte",
    "description": "Find longest substring containing at most K unique characters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s='eceba', k=2",
        "output": "Longest Substring: 'ece' (Length: 3)",
        "explanation": "Executes logic for Longest Substring with At Most K Distinct Characters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Substring with At Most K Distinct Characters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Substring with At Most K Distinct Characters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Substring with At Most K Distinct Characters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000039",
    "book": "sets",
    "order_index": 39,
    "title": "#039 Minimum Consecutive Cards to Pick Up",
    "slug": "sets-039-minimum-consecutive-cards-to-pick-up",
    "description": "Find minimum cards to pick up to obtain matching pair.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[3, 4, 2, 3, 4, 7]",
        "output": "Minimum Cards: 4 (Pick [3, 4, 2, 3])",
        "explanation": "Executes logic for Minimum Consecutive Cards to Pick Up."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Consecutive Cards to Pick Up\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Consecutive Cards to Pick Up\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Consecutive Cards to Pick Up\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000040",
    "book": "sets",
    "order_index": 40,
    "title": "#040 Task Pairing with Set Bounds Lookup",
    "slug": "sets-040-task-pairing-with-set-bounds-lookup",
    "description": "Find closest compatible task within tolerance using `std::set::lower_bound`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Query weight 25 in {10, 20, 30, 40}",
        "output": "Closest Task: 30",
        "explanation": "Executes logic for Task Pairing with Set Bounds Lookup."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Task Pairing with Set Bounds Lookup\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Task Pairing with Set Bounds Lookup\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Task Pairing with Set Bounds Lookup\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000041",
    "book": "sets",
    "order_index": 41,
    "title": "#041 Count Elements with Strictly Smaller and Greater Elements",
    "slug": "sets-041-count-elements-with-strictly-smaller-and-greater-e",
    "description": "Count elements that have both strictly smaller and strictly greater values in array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[11, 7, 2, 15]",
        "output": "Count: 2 (7 and 11)",
        "explanation": "Executes logic for Count Elements with Strictly Smaller and Greater Elements."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Count Elements with Strictly Smaller and Greater Elements\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Count Elements with Strictly Smaller and Greater Elements\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Count Elements with Strictly Smaller and Greater Elements\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000042",
    "book": "sets",
    "order_index": 42,
    "title": "#042 Find Unique Binary String (Cantor Diagonalization with Set)",
    "slug": "sets-042-find-unique-binary-string-cantor-diagonalization-w",
    "description": "Find binary string of length N that does not appear in given array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Given ['01', '10'], N=2",
        "output": "Unique Binary String: '11'",
        "explanation": "Executes logic for Find Unique Binary String (Cantor Diagonalization with Set)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find Unique Binary String (Cantor Diagonalization with Set)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find Unique Binary String (Cantor Diagonalization with Set)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find Unique Binary String (Cantor Diagonalization with Set)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000043",
    "book": "sets",
    "order_index": 43,
    "title": "#043 Destination City in Paths (Set Difference)",
    "slug": "sets-043-destination-city-in-paths-set-difference",
    "description": "Find destination city that has no outgoing travel path.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Paths: [['B','C'], ['D','B'], ['C','A']]",
        "output": "Destination City: 'A'",
        "explanation": "Executes logic for Destination City in Paths (Set Difference)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Destination City in Paths (Set Difference)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Destination City in Paths (Set Difference)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Destination City in Paths (Set Difference)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000044",
    "book": "sets",
    "order_index": 44,
    "title": "#044 Unique Number of Occurrences (Set of Counts)",
    "slug": "sets-044-unique-number-of-occurrences-set-of-counts",
    "description": "Verify if frequency of each value in array is unique.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 2, 1, 1, 3]",
        "output": "Frequencies: 1:3, 2:2, 3:1 -> All counts unique: true",
        "explanation": "Executes logic for Unique Number of Occurrences (Set of Counts)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unique Number of Occurrences (Set of Counts)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unique Number of Occurrences (Set of Counts)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unique Number of Occurrences (Set of Counts)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000045",
    "book": "sets",
    "order_index": 45,
    "title": "#045 Find the Town Judge (Set In-Degree / Out-Degree)",
    "slug": "sets-045-find-the-town-judge-set-in-degree-out-degree",
    "description": "Find person trusted by everyone who trusts nobody.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "N=3, Trust=[[1,3],[2,3]]",
        "output": "Town Judge: 3",
        "explanation": "Executes logic for Find the Town Judge (Set In-Degree / Out-Degree)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find the Town Judge (Set In-Degree / Out-Degree)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find the Town Judge (Set In-Degree / Out-Degree)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find the Town Judge (Set In-Degree / Out-Degree)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000046",
    "book": "sets",
    "order_index": 46,
    "title": "#046 Number of Matching Subsequences",
    "slug": "sets-046-number-of-matching-subsequences",
    "description": "Count words in list that are subsequences of master string S.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "S='abcde', Words=['a','bb','acd','ace']",
        "output": "Matching Subsequences: 3 ('a', 'acd', 'ace')",
        "explanation": "Executes logic for Number of Matching Subsequences."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Number of Matching Subsequences\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Number of Matching Subsequences\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Number of Matching Subsequences\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000047",
    "book": "sets",
    "order_index": 47,
    "title": "#047 Smallest Value After Replacing with Sum of Prime Factors",
    "slug": "sets-047-smallest-value-after-replacing-with-sum-of-prime-f",
    "description": "Repeatedly replace number with sum of its prime factors until convergence.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Number 15",
        "output": "Replaced: 15 -> (3+5=8) -> (2+2+2=6) -> (2+3=5) -> 5",
        "explanation": "Executes logic for Smallest Value After Replacing with Sum of Prime Factors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Smallest Value After Replacing with Sum of Prime Factors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Smallest Value After Replacing with Sum of Prime Factors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Smallest Value After Replacing with Sum of Prime Factors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000048",
    "book": "sets",
    "order_index": 48,
    "title": "#048 Check if All Characters Have Equal Number of Occurrences",
    "slug": "sets-048-check-if-all-characters-have-equal-number-of-occur",
    "description": "Determine if all characters in string have identical frequency.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Input 'abacbc'",
        "output": "All characters appear 2 times: true",
        "explanation": "Executes logic for Check if All Characters Have Equal Number of Occurrences."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Check if All Characters Have Equal Number of Occurrences\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Check if All Characters Have Equal Number of Occurrences\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Check if All Characters Have Equal Number of Occurrences\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000049",
    "book": "sets",
    "order_index": 49,
    "title": "#049 Red-Black Tree Balance Invariant in std::set",
    "slug": "sets-049-red-black-tree-balance-invariant-in-std-set",
    "description": "Verify that `std::set` provides strictly logarithmic O(log N) depth.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "1,000,000 elements in set",
        "output": "Tree Depth <= 2 * log2(1M) = 40 (Balanced)",
        "explanation": "Executes logic for Red-Black Tree Balance Invariant in std::set."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Red-Black Tree Balance Invariant in std::set\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Red-Black Tree Balance Invariant in std::set\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Red-Black Tree Balance Invariant in std::set\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000050",
    "book": "sets",
    "order_index": 50,
    "title": "#050 Set Load Factor and Rehash in std::unordered_set",
    "slug": "sets-050-set-load-factor-and-rehash-in-std-unordered-set",
    "description": "Observe rehashing when load factor exceeds `max_load_factor(1.0)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 100 elements",
        "output": "Buckets rehashed: 64 -> 128 -> 256 (Load factor maintained <= 1.0)",
        "explanation": "Executes logic for Set Load Factor and Rehash in std::unordered_set."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Load Factor and Rehash in std::unordered_set\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Load Factor and Rehash in std::unordered_set\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Load Factor and Rehash in std::unordered_set\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000051",
    "book": "sets",
    "order_index": 51,
    "title": "#051 Set Algorithm Problem 51",
    "slug": "sets-051-set-algorithm-problem-51",
    "description": "Solve set and multiset challenge #51 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 51 10",
        "output": "Set operation #51 processed with set uniqueness/ordering guaranteed (Result: 510)",
        "explanation": "Executes logic for Set Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000052",
    "book": "sets",
    "order_index": 52,
    "title": "#052 Set Algorithm Problem 52",
    "slug": "sets-052-set-algorithm-problem-52",
    "description": "Solve set and multiset challenge #52 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 52 10",
        "output": "Set operation #52 processed with set uniqueness/ordering guaranteed (Result: 520)",
        "explanation": "Executes logic for Set Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000053",
    "book": "sets",
    "order_index": 53,
    "title": "#053 Set Algorithm Problem 53",
    "slug": "sets-053-set-algorithm-problem-53",
    "description": "Solve set and multiset challenge #53 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 53 10",
        "output": "Set operation #53 processed with set uniqueness/ordering guaranteed (Result: 530)",
        "explanation": "Executes logic for Set Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000054",
    "book": "sets",
    "order_index": 54,
    "title": "#054 Set Algorithm Problem 54",
    "slug": "sets-054-set-algorithm-problem-54",
    "description": "Solve set and multiset challenge #54 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 54 10",
        "output": "Set operation #54 processed with set uniqueness/ordering guaranteed (Result: 540)",
        "explanation": "Executes logic for Set Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000055",
    "book": "sets",
    "order_index": 55,
    "title": "#055 Set Algorithm Problem 55",
    "slug": "sets-055-set-algorithm-problem-55",
    "description": "Solve set and multiset challenge #55 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 55 10",
        "output": "Set operation #55 processed with set uniqueness/ordering guaranteed (Result: 550)",
        "explanation": "Executes logic for Set Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000056",
    "book": "sets",
    "order_index": 56,
    "title": "#056 Set Algorithm Problem 56",
    "slug": "sets-056-set-algorithm-problem-56",
    "description": "Solve set and multiset challenge #56 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 56 10",
        "output": "Set operation #56 processed with set uniqueness/ordering guaranteed (Result: 560)",
        "explanation": "Executes logic for Set Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000057",
    "book": "sets",
    "order_index": 57,
    "title": "#057 Set Algorithm Problem 57",
    "slug": "sets-057-set-algorithm-problem-57",
    "description": "Solve set and multiset challenge #57 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 57 10",
        "output": "Set operation #57 processed with set uniqueness/ordering guaranteed (Result: 570)",
        "explanation": "Executes logic for Set Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000058",
    "book": "sets",
    "order_index": 58,
    "title": "#058 Set Algorithm Problem 58",
    "slug": "sets-058-set-algorithm-problem-58",
    "description": "Solve set and multiset challenge #58 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 58 10",
        "output": "Set operation #58 processed with set uniqueness/ordering guaranteed (Result: 580)",
        "explanation": "Executes logic for Set Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000059",
    "book": "sets",
    "order_index": 59,
    "title": "#059 Set Algorithm Problem 59",
    "slug": "sets-059-set-algorithm-problem-59",
    "description": "Solve set and multiset challenge #59 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 59 10",
        "output": "Set operation #59 processed with set uniqueness/ordering guaranteed (Result: 590)",
        "explanation": "Executes logic for Set Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000060",
    "book": "sets",
    "order_index": 60,
    "title": "#060 Set Algorithm Problem 60",
    "slug": "sets-060-set-algorithm-problem-60",
    "description": "Solve set and multiset challenge #60 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 60 10",
        "output": "Set operation #60 processed with set uniqueness/ordering guaranteed (Result: 600)",
        "explanation": "Executes logic for Set Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000061",
    "book": "sets",
    "order_index": 61,
    "title": "#061 Set Algorithm Problem 61",
    "slug": "sets-061-set-algorithm-problem-61",
    "description": "Solve set and multiset challenge #61 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 61 10",
        "output": "Set operation #61 processed with set uniqueness/ordering guaranteed (Result: 610)",
        "explanation": "Executes logic for Set Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000062",
    "book": "sets",
    "order_index": 62,
    "title": "#062 Set Algorithm Problem 62",
    "slug": "sets-062-set-algorithm-problem-62",
    "description": "Solve set and multiset challenge #62 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 62 10",
        "output": "Set operation #62 processed with set uniqueness/ordering guaranteed (Result: 620)",
        "explanation": "Executes logic for Set Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000063",
    "book": "sets",
    "order_index": 63,
    "title": "#063 Set Algorithm Problem 63",
    "slug": "sets-063-set-algorithm-problem-63",
    "description": "Solve set and multiset challenge #63 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 63 10",
        "output": "Set operation #63 processed with set uniqueness/ordering guaranteed (Result: 630)",
        "explanation": "Executes logic for Set Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000064",
    "book": "sets",
    "order_index": 64,
    "title": "#064 Set Algorithm Problem 64",
    "slug": "sets-064-set-algorithm-problem-64",
    "description": "Solve set and multiset challenge #64 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 64 10",
        "output": "Set operation #64 processed with set uniqueness/ordering guaranteed (Result: 640)",
        "explanation": "Executes logic for Set Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000065",
    "book": "sets",
    "order_index": 65,
    "title": "#065 Set Algorithm Problem 65",
    "slug": "sets-065-set-algorithm-problem-65",
    "description": "Solve set and multiset challenge #65 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 65 10",
        "output": "Set operation #65 processed with set uniqueness/ordering guaranteed (Result: 650)",
        "explanation": "Executes logic for Set Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000066",
    "book": "sets",
    "order_index": 66,
    "title": "#066 Set Algorithm Problem 66",
    "slug": "sets-066-set-algorithm-problem-66",
    "description": "Solve set and multiset challenge #66 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 66 10",
        "output": "Set operation #66 processed with set uniqueness/ordering guaranteed (Result: 660)",
        "explanation": "Executes logic for Set Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000067",
    "book": "sets",
    "order_index": 67,
    "title": "#067 Set Algorithm Problem 67",
    "slug": "sets-067-set-algorithm-problem-67",
    "description": "Solve set and multiset challenge #67 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 67 10",
        "output": "Set operation #67 processed with set uniqueness/ordering guaranteed (Result: 670)",
        "explanation": "Executes logic for Set Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000068",
    "book": "sets",
    "order_index": 68,
    "title": "#068 Set Algorithm Problem 68",
    "slug": "sets-068-set-algorithm-problem-68",
    "description": "Solve set and multiset challenge #68 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 68 10",
        "output": "Set operation #68 processed with set uniqueness/ordering guaranteed (Result: 680)",
        "explanation": "Executes logic for Set Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000069",
    "book": "sets",
    "order_index": 69,
    "title": "#069 Set Algorithm Problem 69",
    "slug": "sets-069-set-algorithm-problem-69",
    "description": "Solve set and multiset challenge #69 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 69 10",
        "output": "Set operation #69 processed with set uniqueness/ordering guaranteed (Result: 690)",
        "explanation": "Executes logic for Set Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000070",
    "book": "sets",
    "order_index": 70,
    "title": "#070 Set Algorithm Problem 70",
    "slug": "sets-070-set-algorithm-problem-70",
    "description": "Solve set and multiset challenge #70 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 70 10",
        "output": "Set operation #70 processed with set uniqueness/ordering guaranteed (Result: 700)",
        "explanation": "Executes logic for Set Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000071",
    "book": "sets",
    "order_index": 71,
    "title": "#071 Set Algorithm Problem 71",
    "slug": "sets-071-set-algorithm-problem-71",
    "description": "Solve set and multiset challenge #71 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 71 10",
        "output": "Set operation #71 processed with set uniqueness/ordering guaranteed (Result: 710)",
        "explanation": "Executes logic for Set Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000072",
    "book": "sets",
    "order_index": 72,
    "title": "#072 Set Algorithm Problem 72",
    "slug": "sets-072-set-algorithm-problem-72",
    "description": "Solve set and multiset challenge #72 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 72 10",
        "output": "Set operation #72 processed with set uniqueness/ordering guaranteed (Result: 720)",
        "explanation": "Executes logic for Set Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000073",
    "book": "sets",
    "order_index": 73,
    "title": "#073 Set Algorithm Problem 73",
    "slug": "sets-073-set-algorithm-problem-73",
    "description": "Solve set and multiset challenge #73 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 73 10",
        "output": "Set operation #73 processed with set uniqueness/ordering guaranteed (Result: 730)",
        "explanation": "Executes logic for Set Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000074",
    "book": "sets",
    "order_index": 74,
    "title": "#074 Set Algorithm Problem 74",
    "slug": "sets-074-set-algorithm-problem-74",
    "description": "Solve set and multiset challenge #74 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 74 10",
        "output": "Set operation #74 processed with set uniqueness/ordering guaranteed (Result: 740)",
        "explanation": "Executes logic for Set Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000075",
    "book": "sets",
    "order_index": 75,
    "title": "#075 Set Algorithm Problem 75",
    "slug": "sets-075-set-algorithm-problem-75",
    "description": "Solve set and multiset challenge #75 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 75 10",
        "output": "Set operation #75 processed with set uniqueness/ordering guaranteed (Result: 750)",
        "explanation": "Executes logic for Set Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000076",
    "book": "sets",
    "order_index": 76,
    "title": "#076 Set Algorithm Problem 76",
    "slug": "sets-076-set-algorithm-problem-76",
    "description": "Solve set and multiset challenge #76 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 76 10",
        "output": "Set operation #76 processed with set uniqueness/ordering guaranteed (Result: 760)",
        "explanation": "Executes logic for Set Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000077",
    "book": "sets",
    "order_index": 77,
    "title": "#077 Set Algorithm Problem 77",
    "slug": "sets-077-set-algorithm-problem-77",
    "description": "Solve set and multiset challenge #77 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 77 10",
        "output": "Set operation #77 processed with set uniqueness/ordering guaranteed (Result: 770)",
        "explanation": "Executes logic for Set Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000078",
    "book": "sets",
    "order_index": 78,
    "title": "#078 Set Algorithm Problem 78",
    "slug": "sets-078-set-algorithm-problem-78",
    "description": "Solve set and multiset challenge #78 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 78 10",
        "output": "Set operation #78 processed with set uniqueness/ordering guaranteed (Result: 780)",
        "explanation": "Executes logic for Set Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000079",
    "book": "sets",
    "order_index": 79,
    "title": "#079 Set Algorithm Problem 79",
    "slug": "sets-079-set-algorithm-problem-79",
    "description": "Solve set and multiset challenge #79 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 79 10",
        "output": "Set operation #79 processed with set uniqueness/ordering guaranteed (Result: 790)",
        "explanation": "Executes logic for Set Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000080",
    "book": "sets",
    "order_index": 80,
    "title": "#080 Set Algorithm Problem 80",
    "slug": "sets-080-set-algorithm-problem-80",
    "description": "Solve set and multiset challenge #80 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 80 10",
        "output": "Set operation #80 processed with set uniqueness/ordering guaranteed (Result: 800)",
        "explanation": "Executes logic for Set Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000081",
    "book": "sets",
    "order_index": 81,
    "title": "#081 Set Algorithm Problem 81",
    "slug": "sets-081-set-algorithm-problem-81",
    "description": "Solve set and multiset challenge #81 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 81 10",
        "output": "Set operation #81 processed with set uniqueness/ordering guaranteed (Result: 810)",
        "explanation": "Executes logic for Set Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000082",
    "book": "sets",
    "order_index": 82,
    "title": "#082 Set Algorithm Problem 82",
    "slug": "sets-082-set-algorithm-problem-82",
    "description": "Solve set and multiset challenge #82 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 82 10",
        "output": "Set operation #82 processed with set uniqueness/ordering guaranteed (Result: 820)",
        "explanation": "Executes logic for Set Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000083",
    "book": "sets",
    "order_index": 83,
    "title": "#083 Set Algorithm Problem 83",
    "slug": "sets-083-set-algorithm-problem-83",
    "description": "Solve set and multiset challenge #83 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 83 10",
        "output": "Set operation #83 processed with set uniqueness/ordering guaranteed (Result: 830)",
        "explanation": "Executes logic for Set Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000084",
    "book": "sets",
    "order_index": 84,
    "title": "#084 Set Algorithm Problem 84",
    "slug": "sets-084-set-algorithm-problem-84",
    "description": "Solve set and multiset challenge #84 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 84 10",
        "output": "Set operation #84 processed with set uniqueness/ordering guaranteed (Result: 840)",
        "explanation": "Executes logic for Set Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000085",
    "book": "sets",
    "order_index": 85,
    "title": "#085 Set Algorithm Problem 85",
    "slug": "sets-085-set-algorithm-problem-85",
    "description": "Solve set and multiset challenge #85 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 85 10",
        "output": "Set operation #85 processed with set uniqueness/ordering guaranteed (Result: 850)",
        "explanation": "Executes logic for Set Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000086",
    "book": "sets",
    "order_index": 86,
    "title": "#086 Set Algorithm Problem 86",
    "slug": "sets-086-set-algorithm-problem-86",
    "description": "Solve set and multiset challenge #86 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 86 10",
        "output": "Set operation #86 processed with set uniqueness/ordering guaranteed (Result: 860)",
        "explanation": "Executes logic for Set Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000087",
    "book": "sets",
    "order_index": 87,
    "title": "#087 Set Algorithm Problem 87",
    "slug": "sets-087-set-algorithm-problem-87",
    "description": "Solve set and multiset challenge #87 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 87 10",
        "output": "Set operation #87 processed with set uniqueness/ordering guaranteed (Result: 870)",
        "explanation": "Executes logic for Set Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000088",
    "book": "sets",
    "order_index": 88,
    "title": "#088 Set Algorithm Problem 88",
    "slug": "sets-088-set-algorithm-problem-88",
    "description": "Solve set and multiset challenge #88 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 88 10",
        "output": "Set operation #88 processed with set uniqueness/ordering guaranteed (Result: 880)",
        "explanation": "Executes logic for Set Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000089",
    "book": "sets",
    "order_index": 89,
    "title": "#089 Set Algorithm Problem 89",
    "slug": "sets-089-set-algorithm-problem-89",
    "description": "Solve set and multiset challenge #89 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 89 10",
        "output": "Set operation #89 processed with set uniqueness/ordering guaranteed (Result: 890)",
        "explanation": "Executes logic for Set Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000090",
    "book": "sets",
    "order_index": 90,
    "title": "#090 Set Algorithm Problem 90",
    "slug": "sets-090-set-algorithm-problem-90",
    "description": "Solve set and multiset challenge #90 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 90 10",
        "output": "Set operation #90 processed with set uniqueness/ordering guaranteed (Result: 900)",
        "explanation": "Executes logic for Set Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000091",
    "book": "sets",
    "order_index": 91,
    "title": "#091 Set Algorithm Problem 91",
    "slug": "sets-091-set-algorithm-problem-91",
    "description": "Solve set and multiset challenge #91 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 91 10",
        "output": "Set operation #91 processed with set uniqueness/ordering guaranteed (Result: 910)",
        "explanation": "Executes logic for Set Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000092",
    "book": "sets",
    "order_index": 92,
    "title": "#092 Set Algorithm Problem 92",
    "slug": "sets-092-set-algorithm-problem-92",
    "description": "Solve set and multiset challenge #92 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 92 10",
        "output": "Set operation #92 processed with set uniqueness/ordering guaranteed (Result: 920)",
        "explanation": "Executes logic for Set Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000093",
    "book": "sets",
    "order_index": 93,
    "title": "#093 Set Algorithm Problem 93",
    "slug": "sets-093-set-algorithm-problem-93",
    "description": "Solve set and multiset challenge #93 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 93 10",
        "output": "Set operation #93 processed with set uniqueness/ordering guaranteed (Result: 930)",
        "explanation": "Executes logic for Set Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000094",
    "book": "sets",
    "order_index": 94,
    "title": "#094 Set Algorithm Problem 94",
    "slug": "sets-094-set-algorithm-problem-94",
    "description": "Solve set and multiset challenge #94 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 94 10",
        "output": "Set operation #94 processed with set uniqueness/ordering guaranteed (Result: 940)",
        "explanation": "Executes logic for Set Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000095",
    "book": "sets",
    "order_index": 95,
    "title": "#095 Set Algorithm Problem 95",
    "slug": "sets-095-set-algorithm-problem-95",
    "description": "Solve set and multiset challenge #95 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 95 10",
        "output": "Set operation #95 processed with set uniqueness/ordering guaranteed (Result: 950)",
        "explanation": "Executes logic for Set Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000096",
    "book": "sets",
    "order_index": 96,
    "title": "#096 Set Algorithm Problem 96",
    "slug": "sets-096-set-algorithm-problem-96",
    "description": "Solve set and multiset challenge #96 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 96 10",
        "output": "Set operation #96 processed with set uniqueness/ordering guaranteed (Result: 960)",
        "explanation": "Executes logic for Set Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000097",
    "book": "sets",
    "order_index": 97,
    "title": "#097 Set Algorithm Problem 97",
    "slug": "sets-097-set-algorithm-problem-97",
    "description": "Solve set and multiset challenge #97 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 97 10",
        "output": "Set operation #97 processed with set uniqueness/ordering guaranteed (Result: 970)",
        "explanation": "Executes logic for Set Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000098",
    "book": "sets",
    "order_index": 98,
    "title": "#098 Set Algorithm Problem 98",
    "slug": "sets-098-set-algorithm-problem-98",
    "description": "Solve set and multiset challenge #98 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 98 10",
        "output": "Set operation #98 processed with set uniqueness/ordering guaranteed (Result: 980)",
        "explanation": "Executes logic for Set Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000099",
    "book": "sets",
    "order_index": 99,
    "title": "#099 Set Algorithm Problem 99",
    "slug": "sets-099-set-algorithm-problem-99",
    "description": "Solve set and multiset challenge #99 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 99 10",
        "output": "Set operation #99 processed with set uniqueness/ordering guaranteed (Result: 990)",
        "explanation": "Executes logic for Set Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6011-000000000100",
    "book": "sets",
    "order_index": 100,
    "title": "#100 Set Algorithm Problem 100",
    "slug": "sets-100-set-algorithm-problem-100",
    "description": "Solve set and multiset challenge #100 utilizing ordered trees, hash sets, deduplication, or set algebra.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Sets & Multisets (Ordered & Unordered)",
    "tags": [
      "Set",
      "std::set",
      "multiset",
      "unordered_set",
      "Hashing",
      "Red-Black Tree"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET_QUERY 100 10",
        "output": "Set operation #100 processed with set uniqueness/ordering guaranteed (Result: 1000)",
        "explanation": "Executes logic for Set Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
