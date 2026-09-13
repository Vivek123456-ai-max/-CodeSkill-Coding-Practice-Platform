import { Problem } from '../../types/problem';

export const MAPS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6012-000000000001",
    "book": "maps",
    "order_index": 1,
    "title": "#001 Map Key-Value Storage and Iteration (`std::map`)",
    "slug": "maps-001-map-key-value-storage-and-iteration-std-map",
    "description": "Store student name and mark pairs in `std::map` and iterate in alphabetical order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Put 'Bob':85, 'Alice':95",
        "output": "Alice: 95\nBob: 85 (Ordered by key)",
        "explanation": "Executes logic for Map Key-Value Storage and Iteration (`std::map`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Key-Value Storage and Iteration (`std::map`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Key-Value Storage and Iteration (`std::map`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Key-Value Storage and Iteration (`std::map`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000002",
    "book": "maps",
    "order_index": 2,
    "title": "#002 Map Element Access (`operator[]` vs `.at()`)",
    "slug": "maps-002-map-element-access-operator-vs-at",
    "description": "Demonstrate `operator[]` default-inserts missing key while `.at()` throws `std::out_of_range`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Access existing 'Alice' vs missing 'Dan'",
        "output": "m['Alice']=95, m['Dan'] auto-created with 0, m.at('Eve') threw exception",
        "explanation": "Executes logic for Map Element Access (`operator[]` vs `.at()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Element Access (`operator[]` vs `.at()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Element Access (`operator[]` vs `.at()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Element Access (`operator[]` vs `.at()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000003",
    "book": "maps",
    "order_index": 3,
    "title": "#003 Map Element Search (`.find()` and `.count()`)",
    "slug": "maps-003-map-element-search-find-and-count",
    "description": "Search key in `std::map` in O(log N) time using iterator check `if (m.find(k) != m.end())`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find 'Charlie' in map",
        "output": "Found 'Charlie': Value = 78",
        "explanation": "Executes logic for Map Element Search (`.find()` and `.count()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Element Search (`.find()` and `.count()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Element Search (`.find()` and `.count()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Element Search (`.find()` and `.count()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000004",
    "book": "maps",
    "order_index": 4,
    "title": "#004 Map Erasure by Key and by Iterator",
    "slug": "maps-004-map-erasure-by-key-and-by-iterator",
    "description": "Erase key-value pair from `std::map` in O(log N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase 'Bob' from map",
        "output": "Key 'Bob' erased (Map size: 1)",
        "explanation": "Executes logic for Map Erasure by Key and by Iterator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Erasure by Key and by Iterator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Erasure by Key and by Iterator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Erasure by Key and by Iterator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000005",
    "book": "maps",
    "order_index": 5,
    "title": "#005 Map Lower Bound and Upper Bound on Keys",
    "slug": "maps-005-map-lower-bound-and-upper-bound-on-keys",
    "description": "Find first key `>= 'C'` in `std::map<string, int>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lower bound 'C' in {Alice:90, Bob:80, David:70}",
        "output": "Lower Bound Key: 'David' (Value: 70)",
        "explanation": "Executes logic for Map Lower Bound and Upper Bound on Keys."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Lower Bound and Upper Bound on Keys\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Lower Bound and Upper Bound on Keys\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Lower Bound and Upper Bound on Keys\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000006",
    "book": "maps",
    "order_index": 6,
    "title": "#006 Multimap Supporting Duplicate Keys (`std::multimap`)",
    "slug": "maps-006-multimap-supporting-duplicate-keys-std-multimap",
    "description": "Store multiple values under the same key in `std::multimap`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Put 'math': 101, 'math': 102",
        "output": "Multimap ['math']: [101, 102]",
        "explanation": "Executes logic for Multimap Supporting Duplicate Keys (`std::multimap`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Multimap Supporting Duplicate Keys (`std::multimap`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Multimap Supporting Duplicate Keys (`std::multimap`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Multimap Supporting Duplicate Keys (`std::multimap`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000007",
    "book": "maps",
    "order_index": 7,
    "title": "#007 Unordered Map (`std::unordered_map`) O(1) Hash Map",
    "slug": "maps-007-unordered-map-std-unordered-map-o-1-hash-map",
    "description": "Store key-value pairs in hash table with O(1) average lookup.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Put ID 101 -> 'Laptop'",
        "output": "Unordered Map [101]: 'Laptop' (O(1) lookup)",
        "explanation": "Executes logic for Unordered Map (`std::unordered_map`) O(1) Hash Map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unordered Map (`std::unordered_map`) O(1) Hash Map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unordered Map (`std::unordered_map`) O(1) Hash Map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unordered Map (`std::unordered_map`) O(1) Hash Map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000008",
    "book": "maps",
    "order_index": 8,
    "title": "#008 Word Frequency Counter with std::unordered_map",
    "slug": "maps-008-word-frequency-counter-with-std-unordered-map",
    "description": "Count frequency of every word in text paragraph.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "'the quick brown fox jumps over the lazy dog'",
        "output": "Word Frequencies: the=2, quick=1, brown=1, fox=1, ...",
        "explanation": "Executes logic for Word Frequency Counter with std::unordered_map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Word Frequency Counter with std::unordered_map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Word Frequency Counter with std::unordered_map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Word Frequency Counter with std::unordered_map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000009",
    "book": "maps",
    "order_index": 9,
    "title": "#009 Two Sum Problem with std::unordered_map in O(N)",
    "slug": "maps-009-two-sum-problem-with-std-unordered-map-in-o-n",
    "description": "Find indices of two numbers that add up to target in single pass using hash map.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Array [2, 7, 11, 15], Target 9",
        "output": "Indices: [0, 1] (2 + 7 = 9)",
        "explanation": "Executes logic for Two Sum Problem with std::unordered_map in O(N)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Two Sum Problem with std::unordered_map in O(N)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Two Sum Problem with std::unordered_map in O(N)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Two Sum Problem with std::unordered_map in O(N)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000010",
    "book": "maps",
    "order_index": 10,
    "title": "#010 Group Anagrams with std::unordered_map",
    "slug": "maps-010-group-anagrams-with-std-unordered-map",
    "description": "Group words that have identical sorted letter signatures.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "['eat','tea','tan','ate','nat','bat']",
        "output": "Groups: [['bat'], ['nat','tan'], ['ate','eat','tea']]",
        "explanation": "Executes logic for Group Anagrams with std::unordered_map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Group Anagrams with std::unordered_map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Group Anagrams with std::unordered_map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Group Anagrams with std::unordered_map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000011",
    "book": "maps",
    "order_index": 11,
    "title": "#011 First Unique Character in String (Frequency Map)",
    "slug": "maps-011-first-unique-character-in-string-frequency-map",
    "description": "Find first non-repeating character in string in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "String 'leetcode'",
        "output": "First Unique Character: 'l' (at index 0)",
        "explanation": "Executes logic for First Unique Character in String (Frequency Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// First Unique Character in String (Frequency Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# First Unique Character in String (Frequency Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// First Unique Character in String (Frequency Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000012",
    "book": "maps",
    "order_index": 12,
    "title": "#012 Subarray Sum Equals K (Prefix Sum Hash Map O(N))",
    "slug": "maps-012-subarray-sum-equals-k-prefix-sum-hash-map-o-n",
    "description": "Count contiguous subarrays whose sum equals K using prefix sum frequencies.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [1, 1, 1], k=2",
        "output": "Subarrays Count: 2 ([1,1] at [0..1] and [1..2])",
        "explanation": "Executes logic for Subarray Sum Equals K (Prefix Sum Hash Map O(N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Subarray Sum Equals K (Prefix Sum Hash Map O(N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subarray Sum Equals K (Prefix Sum Hash Map O(N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subarray Sum Equals K (Prefix Sum Hash Map O(N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000013",
    "book": "maps",
    "order_index": 13,
    "title": "#013 Continuous Subarray Sum (Multiple of K)",
    "slug": "maps-013-continuous-subarray-sum-multiple-of-k",
    "description": "Determine if array has contiguous subarray of length >= 2 summing to multiple of K.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [23, 2, 4, 6, 7], k=6",
        "output": "Contains Subarray Multiple of K: true ([2, 4] = 6)",
        "explanation": "Executes logic for Continuous Subarray Sum (Multiple of K)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Continuous Subarray Sum (Multiple of K)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Continuous Subarray Sum (Multiple of K)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Continuous Subarray Sum (Multiple of K)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000014",
    "book": "maps",
    "order_index": 14,
    "title": "#014 Isomorphic Strings (Bijective Map Validation)",
    "slug": "maps-014-isomorphic-strings-bijective-map-validation",
    "description": "Determine if characters in string s can be replaced to get string t.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s='egg', t='add'",
        "output": "Isomorphic: true (e->a, g->d)",
        "explanation": "Executes logic for Isomorphic Strings (Bijective Map Validation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Isomorphic Strings (Bijective Map Validation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Isomorphic Strings (Bijective Map Validation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Isomorphic Strings (Bijective Map Validation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000015",
    "book": "maps",
    "order_index": 15,
    "title": "#015 Word Pattern Matching (`dog cat cat dog`)",
    "slug": "maps-015-word-pattern-matching-dog-cat-cat-dog",
    "description": "Determine if string follows pattern with bijective character-to-word mapping.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pattern 'abba', s='dog cat cat dog'",
        "output": "Pattern matches: true",
        "explanation": "Executes logic for Word Pattern Matching (`dog cat cat dog`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Word Pattern Matching (`dog cat cat dog`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Word Pattern Matching (`dog cat cat dog`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Word Pattern Matching (`dog cat cat dog`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000016",
    "book": "maps",
    "order_index": 16,
    "title": "#016 LRU Cache Implementation using `unordered_map` and `list`",
    "slug": "maps-016-lru-cache-implementation-using-unordered-map-and-l",
    "description": "Design Least Recently Used cache with O(1) `get` and `put`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Capacity 2: Put 1, Put 2, Get 1, Put 3",
        "output": "Evicted key 2: Cache contains keys [1, 3]",
        "explanation": "Executes logic for LRU Cache Implementation using `unordered_map` and `list`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// LRU Cache Implementation using `unordered_map` and `list`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# LRU Cache Implementation using `unordered_map` and `list`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// LRU Cache Implementation using `unordered_map` and `list`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000017",
    "book": "maps",
    "order_index": 17,
    "title": "#017 LFU Cache Implementation (Least Frequently Used)",
    "slug": "maps-017-lfu-cache-implementation-least-frequently-used",
    "description": "Design LFU cache evicting least frequently accessed items with O(1) operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Capacity 2: Put 1, Put 2, Get 1, Put 3",
        "output": "Evicted key 2 (Min frequency 1): Cache holds [1, 3]",
        "explanation": "Executes logic for LFU Cache Implementation (Least Frequently Used)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// LFU Cache Implementation (Least Frequently Used)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# LFU Cache Implementation (Least Frequently Used)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// LFU Cache Implementation (Least Frequently Used)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000018",
    "book": "maps",
    "order_index": 18,
    "title": "#018 Top K Frequent Words (Map + Priority Queue)",
    "slug": "maps-018-top-k-frequent-words-map-priority-queue",
    "description": "Return K most frequent words sorted by frequency, then alphabetically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Words ['i','love','leetcode','i','love','coding'], k=2",
        "output": "Top 2: ['i', 'love']",
        "explanation": "Executes logic for Top K Frequent Words (Map + Priority Queue)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Top K Frequent Words (Map + Priority Queue)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Top K Frequent Words (Map + Priority Queue)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Top K Frequent Words (Map + Priority Queue)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000019",
    "book": "maps",
    "order_index": 19,
    "title": "#019 Design Undergound Railway System (Check-in/Check-out Map)",
    "slug": "maps-019-design-undergound-railway-system-check-in-check-ou",
    "description": "Track passenger travel times between subway stations with map of averages.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Checkin/Checkout 3 passengers",
        "output": "Average Travel Time (StationA -> StationB): 14.0 mins",
        "explanation": "Executes logic for Design Undergound Railway System (Check-in/Check-out Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Design Undergound Railway System (Check-in/Check-out Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Design Undergound Railway System (Check-in/Check-out Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Design Undergound Railway System (Check-in/Check-out Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000020",
    "book": "maps",
    "order_index": 20,
    "title": "#020 Stock Price Fluctuation Tracker Class",
    "slug": "maps-020-stock-price-fluctuation-tracker-class",
    "description": "Maintain stock price timestamps, current price, max and min price in O(log N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Update (1, 10), Update (2, 5), Current, Max, Min",
        "output": "Current: 5, Max: 10, Min: 5",
        "explanation": "Executes logic for Stock Price Fluctuation Tracker Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stock Price Fluctuation Tracker Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stock Price Fluctuation Tracker Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stock Price Fluctuation Tracker Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000021",
    "book": "maps",
    "order_index": 21,
    "title": "#021 Time Based Key-Value Store (`TimeMap`)",
    "slug": "maps-021-time-based-key-value-store-timemap",
    "description": "Store keys with values at multiple timestamps and retrieve value at timestamp <= target.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Set(foo, bar, t=1), Get(foo, t=1)",
        "output": "Retrieved: 'bar'",
        "explanation": "Executes logic for Time Based Key-Value Store (`TimeMap`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Time Based Key-Value Store (`TimeMap`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Time Based Key-Value Store (`TimeMap`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Time Based Key-Value Store (`TimeMap`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000022",
    "book": "maps",
    "order_index": 22,
    "title": "#022 Find Duplicate Subtrees in Binary Tree (Tree Serialization Map)",
    "slug": "maps-022-find-duplicate-subtrees-in-binary-tree-tree-serial",
    "description": "Find all duplicate subtrees by serializing subtree structures into hash map.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Binary tree with duplicate branches",
        "output": "Duplicate subtree roots collected: [2, 4]",
        "explanation": "Executes logic for Find Duplicate Subtrees in Binary Tree (Tree Serialization Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find Duplicate Subtrees in Binary Tree (Tree Serialization Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find Duplicate Subtrees in Binary Tree (Tree Serialization Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find Duplicate Subtrees in Binary Tree (Tree Serialization Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000023",
    "book": "maps",
    "order_index": 23,
    "title": "#023 All O`one Data Structure (Increment, Decrement, GetMax, GetMin in O(1))",
    "slug": "maps-023-all-o-one-data-structure-increment-decrement-getma",
    "description": "Maintain string keys and frequency counts with O(1) min and max key retrieval.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inc 'a', Inc 'b', Inc 'a', GetMaxKey",
        "output": "Max Key: 'a' (Count: 2), Min Key: 'b' (Count: 1)",
        "explanation": "Executes logic for All O`one Data Structure (Increment, Decrement, GetMax, GetMin in O(1))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// All O`one Data Structure (Increment, Decrement, GetMax, GetMin in O(1))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# All O`one Data Structure (Increment, Decrement, GetMax, GetMin in O(1))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// All O`one Data Structure (Increment, Decrement, GetMax, GetMin in O(1))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000024",
    "book": "maps",
    "order_index": 24,
    "title": "#024 Ransom Note from Magazine (Character Frequency Map)",
    "slug": "maps-024-ransom-note-from-magazine-character-frequency-map",
    "description": "Determine if ransom note can be constructed from magazine characters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Ransom 'aa', Magazine 'aab'",
        "output": "Can Construct: true",
        "explanation": "Executes logic for Ransom Note from Magazine (Character Frequency Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Ransom Note from Magazine (Character Frequency Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Ransom Note from Magazine (Character Frequency Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Ransom Note from Magazine (Character Frequency Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000025",
    "book": "maps",
    "order_index": 25,
    "title": "#025 Valid Anagram Verification with Map",
    "slug": "maps-025-valid-anagram-verification-with-map",
    "description": "Check if string t is an anagram of string s using character frequency map.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s='anagram', t='nagaram'",
        "output": "Is Anagram: true",
        "explanation": "Executes logic for Valid Anagram Verification with Map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Valid Anagram Verification with Map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Valid Anagram Verification with Map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Valid Anagram Verification with Map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000026",
    "book": "maps",
    "order_index": 26,
    "title": "#026 Minimum Window Substring with Character Map",
    "slug": "maps-026-minimum-window-substring-with-character-map",
    "description": "Find smallest substring of S containing all characters of T in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "S='ADOBECODEBANC', T='ABC'",
        "output": "Minimum Window: 'BANC'",
        "explanation": "Executes logic for Minimum Window Substring with Character Map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Minimum Window Substring with Character Map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Minimum Window Substring with Character Map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Minimum Window Substring with Character Map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000027",
    "book": "maps",
    "order_index": 27,
    "title": "#027 Longest Substring with At Most Two Distinct Characters",
    "slug": "maps-027-longest-substring-with-at-most-two-distinct-charac",
    "description": "Find length of longest substring with at most 2 distinct characters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "s='ccaabbb'",
        "output": "Longest Substring: 'aabbb' (Length: 5)",
        "explanation": "Executes logic for Longest Substring with At Most Two Distinct Characters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Substring with At Most Two Distinct Characters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Substring with At Most Two Distinct Characters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Substring with At Most Two Distinct Characters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000028",
    "book": "maps",
    "order_index": 28,
    "title": "#028 4Sum II (Count Tuples Summing to Zero with Hash Map)",
    "slug": "maps-028-4sum-ii-count-tuples-summing-to-zero-with-hash-map",
    "description": "Find number of tuples (i, j, k, l) such that `A[i] + B[j] + C[k] + D[l] == 0` in O(N^2).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "4 arrays of size 2",
        "output": "Tuple Count: 2",
        "explanation": "Executes logic for 4Sum II (Count Tuples Summing to Zero with Hash Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// 4Sum II (Count Tuples Summing to Zero with Hash Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# 4Sum II (Count Tuples Summing to Zero with Hash Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// 4Sum II (Count Tuples Summing to Zero with Hash Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000029",
    "book": "maps",
    "order_index": 29,
    "title": "#029 Custom Hash Function for `std::unordered_map` with Composite Class Key",
    "slug": "maps-029-custom-hash-function-for-std-unordered-map-with-co",
    "description": "Implement hash map with `Employee(id, dept)` as key.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map[Employee(101, 'ENG')] = $95000",
        "output": "Custom key stored and retrieved: $95,000",
        "explanation": "Executes logic for Custom Hash Function for `std::unordered_map` with Composite Class Key."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Hash Function for `std::unordered_map` with Composite Class Key\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Hash Function for `std::unordered_map` with Composite Class Key\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Hash Function for `std::unordered_map` with Composite Class Key\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000030",
    "book": "maps",
    "order_index": 30,
    "title": "#030 Map with Custom Functor Key Comparator",
    "slug": "maps-030-map-with-custom-functor-key-comparator",
    "description": "Order `std::map` by string length descending using custom comparator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Keys ['apple', 'pie', 'banana']",
        "output": "Map Order: banana -> apple -> pie",
        "explanation": "Executes logic for Map with Custom Functor Key Comparator."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map with Custom Functor Key Comparator\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map with Custom Functor Key Comparator\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map with Custom Functor Key Comparator\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000031",
    "book": "maps",
    "order_index": 31,
    "title": "#031 Find Players with Zero or One Losses",
    "slug": "maps-031-find-players-with-zero-or-one-losses",
    "description": "Return players who have not lost any matches and players who lost exactly one match.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matches [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]",
        "output": "Winners: [1, 2, 10], Lost 1: [4, 5, 7, 8]",
        "explanation": "Executes logic for Find Players with Zero or One Losses."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find Players with Zero or One Losses\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find Players with Zero or One Losses\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find Players with Zero or One Losses\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000032",
    "book": "maps",
    "order_index": 32,
    "title": "#032 Brick Wall Crossing (Least Cut Bricks with Map)",
    "slug": "maps-032-brick-wall-crossing-least-cut-bricks-with-map",
    "description": "Find vertical cut through multi-layer brick wall that crosses minimum bricks.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Brick wall matrix",
        "output": "Minimum Crossed Bricks: 2",
        "explanation": "Executes logic for Brick Wall Crossing (Least Cut Bricks with Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Brick Wall Crossing (Least Cut Bricks with Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Brick Wall Crossing (Least Cut Bricks with Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Brick Wall Crossing (Least Cut Bricks with Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000033",
    "book": "maps",
    "order_index": 33,
    "title": "#033 Contiguous Array with Equal 0s and 1s (Prefix Difference Map)",
    "slug": "maps-033-contiguous-array-with-equal-0s-and-1s-prefix-diffe",
    "description": "Find maximum length of contiguous subarray with equal number of 0s and 1s in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[0, 1, 0]",
        "output": "Max Length: 2 ([0, 1])",
        "explanation": "Executes logic for Contiguous Array with Equal 0s and 1s (Prefix Difference Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Contiguous Array with Equal 0s and 1s (Prefix Difference Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Contiguous Array with Equal 0s and 1s (Prefix Difference Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Contiguous Array with Equal 0s and 1s (Prefix Difference Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000034",
    "book": "maps",
    "order_index": 34,
    "title": "#034 Sort Array by Increasing Frequency (Map + Lambda)",
    "slug": "maps-034-sort-array-by-increasing-frequency-map-lambda",
    "description": "Sort array elements in increasing order of frequency; if tied, sort by value descending.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 1, 2, 2, 2, 3]",
        "output": "Sorted: [3, 1, 1, 2, 2, 2]",
        "explanation": "Executes logic for Sort Array by Increasing Frequency (Map + Lambda)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sort Array by Increasing Frequency (Map + Lambda)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sort Array by Increasing Frequency (Map + Lambda)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sort Array by Increasing Frequency (Map + Lambda)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000035",
    "book": "maps",
    "order_index": 35,
    "title": "#035 Custom Dictionary Alien Alphabet Verifier (Map Letter Weights)",
    "slug": "maps-035-custom-dictionary-alien-alphabet-verifier-map-lett",
    "description": "Verify if list of words is sorted lexicographically according to alien alphabet order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Words ['hello','leetcode'], Order='hlabcdefgijkmnopqrstuvwxyz'",
        "output": "Alien Sorted: true",
        "explanation": "Executes logic for Custom Dictionary Alien Alphabet Verifier (Map Letter Weights)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Custom Dictionary Alien Alphabet Verifier (Map Letter Weights)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Custom Dictionary Alien Alphabet Verifier (Map Letter Weights)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Custom Dictionary Alien Alphabet Verifier (Map Letter Weights)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000036",
    "book": "maps",
    "order_index": 36,
    "title": "#036 Number of Good Pairs (Equal Values Map Formula `N*(N-1)/2`)",
    "slug": "maps-036-number-of-good-pairs-equal-values-map-formula-n-n",
    "description": "Count number of index pairs (i, j) where `nums[i] == nums[j]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 1, 1, 3]",
        "output": "Good Pairs: 4",
        "explanation": "Executes logic for Number of Good Pairs (Equal Values Map Formula `N*(N-1)/2`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Number of Good Pairs (Equal Values Map Formula `N*(N-1)/2`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Number of Good Pairs (Equal Values Map Formula `N*(N-1)/2`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Number of Good Pairs (Equal Values Map Formula `N*(N-1)/2`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000037",
    "book": "maps",
    "order_index": 37,
    "title": "#037 Finding Pairs with a Given Sum in Matrix Rows",
    "slug": "maps-037-finding-pairs-with-a-given-sum-in-matrix-rows",
    "description": "Find pair from different rows of matrix summing to target using hash map.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix 2x3, Target 10",
        "output": "Pair Found: Row 0 Val 3 + Row 1 Val 7 = 10",
        "explanation": "Executes logic for Finding Pairs with a Given Sum in Matrix Rows."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Pairs with a Given Sum in Matrix Rows\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Pairs with a Given Sum in Matrix Rows\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Pairs with a Given Sum in Matrix Rows\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000038",
    "book": "maps",
    "order_index": 38,
    "title": "#038 Map Key Reversal (`map<K, V>` to `multimap<V, K>`)",
    "slug": "maps-038-map-key-reversal-map-k-v-to-multimap-v-k",
    "description": "Invert map so values become keys in a new multimap for reverse lookup.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map: {Alice: 90, Bob: 80, Charlie: 90}",
        "output": "Inverted: 80 -> [Bob], 90 -> [Alice, Charlie]",
        "explanation": "Executes logic for Map Key Reversal (`map<K, V>` to `multimap<V, K>`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Key Reversal (`map<K, V>` to `multimap<V, K>`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Key Reversal (`map<K, V>` to `multimap<V, K>`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Key Reversal (`map<K, V>` to `multimap<V, K>`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000039",
    "book": "maps",
    "order_index": 39,
    "title": "#039 Nested Map for Multi-Dimensional Lookup `map<string, map<string, int>>`",
    "slug": "maps-039-nested-map-for-multi-dimensional-lookup-map-string",
    "description": "Represent sparse graph or matrix with nested maps.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Graph[A][B] = 10",
        "output": "Weight A -> B: 10",
        "explanation": "Executes logic for Nested Map for Multi-Dimensional Lookup `map<string, map<string, int>>`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Nested Map for Multi-Dimensional Lookup `map<string, map<string, int>>`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nested Map for Multi-Dimensional Lookup `map<string, map<string, int>>`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nested Map for Multi-Dimensional Lookup `map<string, map<string, int>>`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000040",
    "book": "maps",
    "order_index": 40,
    "title": "#040 Map Range-Based Query with Lower and Upper Bound",
    "slug": "maps-040-map-range-based-query-with-lower-and-upper-bound",
    "description": "Sum values of all keys falling in range `[K1, K2]` in `std::map` in O(log N + K).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Range [20, 40] in {10:1, 20:2, 30:3, 40:4, 50:5}",
        "output": "Sum in Range [20..40]: 9 (2 + 3 + 4)",
        "explanation": "Executes logic for Map Range-Based Query with Lower and Upper Bound."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Range-Based Query with Lower and Upper Bound\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Range-Based Query with Lower and Upper Bound\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Range-Based Query with Lower and Upper Bound\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000041",
    "book": "maps",
    "order_index": 41,
    "title": "#041 Checking Map Key Existence without Insertion (`contains()` in C++20)",
    "slug": "maps-041-checking-map-key-existence-without-insertion-conta",
    "description": "Use modern `m.contains(key)` to check key presence cleanly.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check if 'Bob' in map",
        "output": "m.contains('Bob'): true",
        "explanation": "Executes logic for Checking Map Key Existence without Insertion (`contains()` in C++20)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Checking Map Key Existence without Insertion (`contains()` in C++20)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Checking Map Key Existence without Insertion (`contains()` in C++20)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Checking Map Key Existence without Insertion (`contains()` in C++20)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000042",
    "book": "maps",
    "order_index": 42,
    "title": "#042 Merge Two Maps with Value Accumulation",
    "slug": "maps-042-merge-two-maps-with-value-accumulation",
    "description": "Merge map B into map A, adding values together if key exists in both.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: {apple:2, banana:3} B: {apple:5, orange:1}",
        "output": "Merged Map: {apple:7, banana:3, orange:1}",
        "explanation": "Executes logic for Merge Two Maps with Value Accumulation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Merge Two Maps with Value Accumulation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merge Two Maps with Value Accumulation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merge Two Maps with Value Accumulation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000043",
    "book": "maps",
    "order_index": 43,
    "title": "#043 Find Most Frequent Subtree Sum",
    "slug": "maps-043-find-most-frequent-subtree-sum",
    "description": "Compute subtree sum of every node in binary tree and return the most frequent sum(s).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tree with 3 nodes",
        "output": "Most Frequent Sums: [2, -3, 4]",
        "explanation": "Executes logic for Find Most Frequent Subtree Sum."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Find Most Frequent Subtree Sum\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Find Most Frequent Subtree Sum\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Find Most Frequent Subtree Sum\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000044",
    "book": "maps",
    "order_index": 44,
    "title": "#044 Shortest Completing Word in List",
    "slug": "maps-044-shortest-completing-word-in-list",
    "description": "Find shortest word containing all letters from license plate string.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Plate '1s3 PSt', Words ['step','steps','stripe','stepple']",
        "output": "Shortest Completing Word: 'steps'",
        "explanation": "Executes logic for Shortest Completing Word in List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shortest Completing Word in List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shortest Completing Word in List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shortest Completing Word in List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000045",
    "book": "maps",
    "order_index": 45,
    "title": "#045 Sentence Similarity Evaluation with Hash Map",
    "slug": "maps-045-sentence-similarity-evaluation-with-hash-map",
    "description": "Determine if two sentences are similar given list of similar word pairs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Words1 ['great','acting'], Words2 ['fine','drama']",
        "output": "Sentences Similar: true",
        "explanation": "Executes logic for Sentence Similarity Evaluation with Hash Map."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sentence Similarity Evaluation with Hash Map\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sentence Similarity Evaluation with Hash Map\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sentence Similarity Evaluation with Hash Map\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000046",
    "book": "maps",
    "order_index": 46,
    "title": "#046 Max Points on a Line (Slope Hash Map O(N^2))",
    "slug": "maps-046-max-points-on-a-line-slope-hash-map-o-n-2",
    "description": "Find maximum number of points that lie on the same straight line.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Points [[1,1],[2,2],[3,3]]",
        "output": "Max Points on Line: 3 (Slope: 1.0)",
        "explanation": "Executes logic for Max Points on a Line (Slope Hash Map O(N^2))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Max Points on a Line (Slope Hash Map O(N^2))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Max Points on a Line (Slope Hash Map O(N^2))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Max Points on a Line (Slope Hash Map O(N^2))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000047",
    "book": "maps",
    "order_index": 47,
    "title": "#047 Optimal Account Balancing (Debt Simplification with Map)",
    "slug": "maps-047-optimal-account-balancing-debt-simplification-with",
    "description": "Find minimum transactions to settle all debts among group of people.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Debts [[0,1,10], [2,0,5]]",
        "output": "Minimum Transactions to Settle: 2",
        "explanation": "Executes logic for Optimal Account Balancing (Debt Simplification with Map)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Optimal Account Balancing (Debt Simplification with Map)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Optimal Account Balancing (Debt Simplification with Map)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Optimal Account Balancing (Debt Simplification with Map)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000048",
    "book": "maps",
    "order_index": 48,
    "title": "#048 Snapshot Array with Map Versioning",
    "slug": "maps-048-snapshot-array-with-map-versioning",
    "description": "Design array supporting `set(idx, val)`, `snap()`, and `get(idx, snap_id)` in O(log S).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SnapArray(3): Set(0, 5), Snap() -> SnapID 0",
        "output": "Get(0, snap_id=0): 5",
        "explanation": "Executes logic for Snapshot Array with Map Versioning."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Snapshot Array with Map Versioning\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Snapshot Array with Map Versioning\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Snapshot Array with Map Versioning\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000049",
    "book": "maps",
    "order_index": 49,
    "title": "#049 Map Memory Overhead and Red-Black Tree Layout",
    "slug": "maps-049-map-memory-overhead-and-red-black-tree-layout",
    "description": "Inspect tree node size in `std::map` (3 pointers + color bit + key + value).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10,000 entries in map",
        "output": "Tree node overhead: 32 bytes per entry (Red-Black tree verified)",
        "explanation": "Executes logic for Map Memory Overhead and Red-Black Tree Layout."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Memory Overhead and Red-Black Tree Layout\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Memory Overhead and Red-Black Tree Layout\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Memory Overhead and Red-Black Tree Layout\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000050",
    "book": "maps",
    "order_index": 50,
    "title": "#050 Bucket Iterator in `std::unordered_map`",
    "slug": "maps-050-bucket-iterator-in-std-unordered-map",
    "description": "Iterate over elements in specific hash bucket using `unordered_map::begin(bucket_idx)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inspect bucket 5",
        "output": "Bucket 5 elements iterated: [KeyA, KeyB]",
        "explanation": "Executes logic for Bucket Iterator in `std::unordered_map`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Bucket Iterator in `std::unordered_map`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bucket Iterator in `std::unordered_map`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bucket Iterator in `std::unordered_map`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000051",
    "book": "maps",
    "order_index": 51,
    "title": "#051 Map Algorithm Problem 51",
    "slug": "maps-051-map-algorithm-problem-51",
    "description": "Solve key-value mapping challenge #51 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 51 10",
        "output": "Map query #51 resolved with key-value binding verified (Value: 510)",
        "explanation": "Executes logic for Map Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000052",
    "book": "maps",
    "order_index": 52,
    "title": "#052 Map Algorithm Problem 52",
    "slug": "maps-052-map-algorithm-problem-52",
    "description": "Solve key-value mapping challenge #52 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 52 10",
        "output": "Map query #52 resolved with key-value binding verified (Value: 520)",
        "explanation": "Executes logic for Map Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000053",
    "book": "maps",
    "order_index": 53,
    "title": "#053 Map Algorithm Problem 53",
    "slug": "maps-053-map-algorithm-problem-53",
    "description": "Solve key-value mapping challenge #53 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 53 10",
        "output": "Map query #53 resolved with key-value binding verified (Value: 530)",
        "explanation": "Executes logic for Map Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000054",
    "book": "maps",
    "order_index": 54,
    "title": "#054 Map Algorithm Problem 54",
    "slug": "maps-054-map-algorithm-problem-54",
    "description": "Solve key-value mapping challenge #54 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 54 10",
        "output": "Map query #54 resolved with key-value binding verified (Value: 540)",
        "explanation": "Executes logic for Map Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000055",
    "book": "maps",
    "order_index": 55,
    "title": "#055 Map Algorithm Problem 55",
    "slug": "maps-055-map-algorithm-problem-55",
    "description": "Solve key-value mapping challenge #55 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 55 10",
        "output": "Map query #55 resolved with key-value binding verified (Value: 550)",
        "explanation": "Executes logic for Map Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000056",
    "book": "maps",
    "order_index": 56,
    "title": "#056 Map Algorithm Problem 56",
    "slug": "maps-056-map-algorithm-problem-56",
    "description": "Solve key-value mapping challenge #56 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 56 10",
        "output": "Map query #56 resolved with key-value binding verified (Value: 560)",
        "explanation": "Executes logic for Map Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000057",
    "book": "maps",
    "order_index": 57,
    "title": "#057 Map Algorithm Problem 57",
    "slug": "maps-057-map-algorithm-problem-57",
    "description": "Solve key-value mapping challenge #57 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 57 10",
        "output": "Map query #57 resolved with key-value binding verified (Value: 570)",
        "explanation": "Executes logic for Map Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000058",
    "book": "maps",
    "order_index": 58,
    "title": "#058 Map Algorithm Problem 58",
    "slug": "maps-058-map-algorithm-problem-58",
    "description": "Solve key-value mapping challenge #58 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 58 10",
        "output": "Map query #58 resolved with key-value binding verified (Value: 580)",
        "explanation": "Executes logic for Map Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000059",
    "book": "maps",
    "order_index": 59,
    "title": "#059 Map Algorithm Problem 59",
    "slug": "maps-059-map-algorithm-problem-59",
    "description": "Solve key-value mapping challenge #59 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 59 10",
        "output": "Map query #59 resolved with key-value binding verified (Value: 590)",
        "explanation": "Executes logic for Map Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000060",
    "book": "maps",
    "order_index": 60,
    "title": "#060 Map Algorithm Problem 60",
    "slug": "maps-060-map-algorithm-problem-60",
    "description": "Solve key-value mapping challenge #60 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 60 10",
        "output": "Map query #60 resolved with key-value binding verified (Value: 600)",
        "explanation": "Executes logic for Map Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000061",
    "book": "maps",
    "order_index": 61,
    "title": "#061 Map Algorithm Problem 61",
    "slug": "maps-061-map-algorithm-problem-61",
    "description": "Solve key-value mapping challenge #61 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 61 10",
        "output": "Map query #61 resolved with key-value binding verified (Value: 610)",
        "explanation": "Executes logic for Map Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000062",
    "book": "maps",
    "order_index": 62,
    "title": "#062 Map Algorithm Problem 62",
    "slug": "maps-062-map-algorithm-problem-62",
    "description": "Solve key-value mapping challenge #62 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 62 10",
        "output": "Map query #62 resolved with key-value binding verified (Value: 620)",
        "explanation": "Executes logic for Map Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000063",
    "book": "maps",
    "order_index": 63,
    "title": "#063 Map Algorithm Problem 63",
    "slug": "maps-063-map-algorithm-problem-63",
    "description": "Solve key-value mapping challenge #63 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 63 10",
        "output": "Map query #63 resolved with key-value binding verified (Value: 630)",
        "explanation": "Executes logic for Map Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000064",
    "book": "maps",
    "order_index": 64,
    "title": "#064 Map Algorithm Problem 64",
    "slug": "maps-064-map-algorithm-problem-64",
    "description": "Solve key-value mapping challenge #64 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 64 10",
        "output": "Map query #64 resolved with key-value binding verified (Value: 640)",
        "explanation": "Executes logic for Map Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000065",
    "book": "maps",
    "order_index": 65,
    "title": "#065 Map Algorithm Problem 65",
    "slug": "maps-065-map-algorithm-problem-65",
    "description": "Solve key-value mapping challenge #65 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 65 10",
        "output": "Map query #65 resolved with key-value binding verified (Value: 650)",
        "explanation": "Executes logic for Map Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000066",
    "book": "maps",
    "order_index": 66,
    "title": "#066 Map Algorithm Problem 66",
    "slug": "maps-066-map-algorithm-problem-66",
    "description": "Solve key-value mapping challenge #66 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 66 10",
        "output": "Map query #66 resolved with key-value binding verified (Value: 660)",
        "explanation": "Executes logic for Map Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000067",
    "book": "maps",
    "order_index": 67,
    "title": "#067 Map Algorithm Problem 67",
    "slug": "maps-067-map-algorithm-problem-67",
    "description": "Solve key-value mapping challenge #67 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 67 10",
        "output": "Map query #67 resolved with key-value binding verified (Value: 670)",
        "explanation": "Executes logic for Map Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000068",
    "book": "maps",
    "order_index": 68,
    "title": "#068 Map Algorithm Problem 68",
    "slug": "maps-068-map-algorithm-problem-68",
    "description": "Solve key-value mapping challenge #68 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 68 10",
        "output": "Map query #68 resolved with key-value binding verified (Value: 680)",
        "explanation": "Executes logic for Map Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000069",
    "book": "maps",
    "order_index": 69,
    "title": "#069 Map Algorithm Problem 69",
    "slug": "maps-069-map-algorithm-problem-69",
    "description": "Solve key-value mapping challenge #69 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 69 10",
        "output": "Map query #69 resolved with key-value binding verified (Value: 690)",
        "explanation": "Executes logic for Map Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000070",
    "book": "maps",
    "order_index": 70,
    "title": "#070 Map Algorithm Problem 70",
    "slug": "maps-070-map-algorithm-problem-70",
    "description": "Solve key-value mapping challenge #70 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 70 10",
        "output": "Map query #70 resolved with key-value binding verified (Value: 700)",
        "explanation": "Executes logic for Map Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000071",
    "book": "maps",
    "order_index": 71,
    "title": "#071 Map Algorithm Problem 71",
    "slug": "maps-071-map-algorithm-problem-71",
    "description": "Solve key-value mapping challenge #71 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 71 10",
        "output": "Map query #71 resolved with key-value binding verified (Value: 710)",
        "explanation": "Executes logic for Map Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000072",
    "book": "maps",
    "order_index": 72,
    "title": "#072 Map Algorithm Problem 72",
    "slug": "maps-072-map-algorithm-problem-72",
    "description": "Solve key-value mapping challenge #72 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 72 10",
        "output": "Map query #72 resolved with key-value binding verified (Value: 720)",
        "explanation": "Executes logic for Map Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000073",
    "book": "maps",
    "order_index": 73,
    "title": "#073 Map Algorithm Problem 73",
    "slug": "maps-073-map-algorithm-problem-73",
    "description": "Solve key-value mapping challenge #73 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 73 10",
        "output": "Map query #73 resolved with key-value binding verified (Value: 730)",
        "explanation": "Executes logic for Map Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000074",
    "book": "maps",
    "order_index": 74,
    "title": "#074 Map Algorithm Problem 74",
    "slug": "maps-074-map-algorithm-problem-74",
    "description": "Solve key-value mapping challenge #74 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 74 10",
        "output": "Map query #74 resolved with key-value binding verified (Value: 740)",
        "explanation": "Executes logic for Map Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000075",
    "book": "maps",
    "order_index": 75,
    "title": "#075 Map Algorithm Problem 75",
    "slug": "maps-075-map-algorithm-problem-75",
    "description": "Solve key-value mapping challenge #75 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 75 10",
        "output": "Map query #75 resolved with key-value binding verified (Value: 750)",
        "explanation": "Executes logic for Map Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000076",
    "book": "maps",
    "order_index": 76,
    "title": "#076 Map Algorithm Problem 76",
    "slug": "maps-076-map-algorithm-problem-76",
    "description": "Solve key-value mapping challenge #76 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 76 10",
        "output": "Map query #76 resolved with key-value binding verified (Value: 760)",
        "explanation": "Executes logic for Map Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000077",
    "book": "maps",
    "order_index": 77,
    "title": "#077 Map Algorithm Problem 77",
    "slug": "maps-077-map-algorithm-problem-77",
    "description": "Solve key-value mapping challenge #77 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 77 10",
        "output": "Map query #77 resolved with key-value binding verified (Value: 770)",
        "explanation": "Executes logic for Map Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000078",
    "book": "maps",
    "order_index": 78,
    "title": "#078 Map Algorithm Problem 78",
    "slug": "maps-078-map-algorithm-problem-78",
    "description": "Solve key-value mapping challenge #78 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 78 10",
        "output": "Map query #78 resolved with key-value binding verified (Value: 780)",
        "explanation": "Executes logic for Map Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000079",
    "book": "maps",
    "order_index": 79,
    "title": "#079 Map Algorithm Problem 79",
    "slug": "maps-079-map-algorithm-problem-79",
    "description": "Solve key-value mapping challenge #79 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 79 10",
        "output": "Map query #79 resolved with key-value binding verified (Value: 790)",
        "explanation": "Executes logic for Map Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000080",
    "book": "maps",
    "order_index": 80,
    "title": "#080 Map Algorithm Problem 80",
    "slug": "maps-080-map-algorithm-problem-80",
    "description": "Solve key-value mapping challenge #80 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 80 10",
        "output": "Map query #80 resolved with key-value binding verified (Value: 800)",
        "explanation": "Executes logic for Map Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000081",
    "book": "maps",
    "order_index": 81,
    "title": "#081 Map Algorithm Problem 81",
    "slug": "maps-081-map-algorithm-problem-81",
    "description": "Solve key-value mapping challenge #81 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 81 10",
        "output": "Map query #81 resolved with key-value binding verified (Value: 810)",
        "explanation": "Executes logic for Map Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000082",
    "book": "maps",
    "order_index": 82,
    "title": "#082 Map Algorithm Problem 82",
    "slug": "maps-082-map-algorithm-problem-82",
    "description": "Solve key-value mapping challenge #82 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 82 10",
        "output": "Map query #82 resolved with key-value binding verified (Value: 820)",
        "explanation": "Executes logic for Map Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000083",
    "book": "maps",
    "order_index": 83,
    "title": "#083 Map Algorithm Problem 83",
    "slug": "maps-083-map-algorithm-problem-83",
    "description": "Solve key-value mapping challenge #83 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 83 10",
        "output": "Map query #83 resolved with key-value binding verified (Value: 830)",
        "explanation": "Executes logic for Map Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000084",
    "book": "maps",
    "order_index": 84,
    "title": "#084 Map Algorithm Problem 84",
    "slug": "maps-084-map-algorithm-problem-84",
    "description": "Solve key-value mapping challenge #84 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 84 10",
        "output": "Map query #84 resolved with key-value binding verified (Value: 840)",
        "explanation": "Executes logic for Map Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000085",
    "book": "maps",
    "order_index": 85,
    "title": "#085 Map Algorithm Problem 85",
    "slug": "maps-085-map-algorithm-problem-85",
    "description": "Solve key-value mapping challenge #85 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 85 10",
        "output": "Map query #85 resolved with key-value binding verified (Value: 850)",
        "explanation": "Executes logic for Map Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000086",
    "book": "maps",
    "order_index": 86,
    "title": "#086 Map Algorithm Problem 86",
    "slug": "maps-086-map-algorithm-problem-86",
    "description": "Solve key-value mapping challenge #86 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 86 10",
        "output": "Map query #86 resolved with key-value binding verified (Value: 860)",
        "explanation": "Executes logic for Map Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000087",
    "book": "maps",
    "order_index": 87,
    "title": "#087 Map Algorithm Problem 87",
    "slug": "maps-087-map-algorithm-problem-87",
    "description": "Solve key-value mapping challenge #87 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 87 10",
        "output": "Map query #87 resolved with key-value binding verified (Value: 870)",
        "explanation": "Executes logic for Map Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000088",
    "book": "maps",
    "order_index": 88,
    "title": "#088 Map Algorithm Problem 88",
    "slug": "maps-088-map-algorithm-problem-88",
    "description": "Solve key-value mapping challenge #88 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 88 10",
        "output": "Map query #88 resolved with key-value binding verified (Value: 880)",
        "explanation": "Executes logic for Map Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000089",
    "book": "maps",
    "order_index": 89,
    "title": "#089 Map Algorithm Problem 89",
    "slug": "maps-089-map-algorithm-problem-89",
    "description": "Solve key-value mapping challenge #89 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 89 10",
        "output": "Map query #89 resolved with key-value binding verified (Value: 890)",
        "explanation": "Executes logic for Map Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000090",
    "book": "maps",
    "order_index": 90,
    "title": "#090 Map Algorithm Problem 90",
    "slug": "maps-090-map-algorithm-problem-90",
    "description": "Solve key-value mapping challenge #90 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 90 10",
        "output": "Map query #90 resolved with key-value binding verified (Value: 900)",
        "explanation": "Executes logic for Map Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000091",
    "book": "maps",
    "order_index": 91,
    "title": "#091 Map Algorithm Problem 91",
    "slug": "maps-091-map-algorithm-problem-91",
    "description": "Solve key-value mapping challenge #91 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 91 10",
        "output": "Map query #91 resolved with key-value binding verified (Value: 910)",
        "explanation": "Executes logic for Map Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000092",
    "book": "maps",
    "order_index": 92,
    "title": "#092 Map Algorithm Problem 92",
    "slug": "maps-092-map-algorithm-problem-92",
    "description": "Solve key-value mapping challenge #92 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 92 10",
        "output": "Map query #92 resolved with key-value binding verified (Value: 920)",
        "explanation": "Executes logic for Map Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000093",
    "book": "maps",
    "order_index": 93,
    "title": "#093 Map Algorithm Problem 93",
    "slug": "maps-093-map-algorithm-problem-93",
    "description": "Solve key-value mapping challenge #93 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 93 10",
        "output": "Map query #93 resolved with key-value binding verified (Value: 930)",
        "explanation": "Executes logic for Map Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000094",
    "book": "maps",
    "order_index": 94,
    "title": "#094 Map Algorithm Problem 94",
    "slug": "maps-094-map-algorithm-problem-94",
    "description": "Solve key-value mapping challenge #94 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 94 10",
        "output": "Map query #94 resolved with key-value binding verified (Value: 940)",
        "explanation": "Executes logic for Map Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000095",
    "book": "maps",
    "order_index": 95,
    "title": "#095 Map Algorithm Problem 95",
    "slug": "maps-095-map-algorithm-problem-95",
    "description": "Solve key-value mapping challenge #95 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 95 10",
        "output": "Map query #95 resolved with key-value binding verified (Value: 950)",
        "explanation": "Executes logic for Map Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000096",
    "book": "maps",
    "order_index": 96,
    "title": "#096 Map Algorithm Problem 96",
    "slug": "maps-096-map-algorithm-problem-96",
    "description": "Solve key-value mapping challenge #96 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 96 10",
        "output": "Map query #96 resolved with key-value binding verified (Value: 960)",
        "explanation": "Executes logic for Map Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000097",
    "book": "maps",
    "order_index": 97,
    "title": "#097 Map Algorithm Problem 97",
    "slug": "maps-097-map-algorithm-problem-97",
    "description": "Solve key-value mapping challenge #97 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 97 10",
        "output": "Map query #97 resolved with key-value binding verified (Value: 970)",
        "explanation": "Executes logic for Map Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000098",
    "book": "maps",
    "order_index": 98,
    "title": "#098 Map Algorithm Problem 98",
    "slug": "maps-098-map-algorithm-problem-98",
    "description": "Solve key-value mapping challenge #98 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 98 10",
        "output": "Map query #98 resolved with key-value binding verified (Value: 980)",
        "explanation": "Executes logic for Map Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000099",
    "book": "maps",
    "order_index": 99,
    "title": "#099 Map Algorithm Problem 99",
    "slug": "maps-099-map-algorithm-problem-99",
    "description": "Solve key-value mapping challenge #99 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 99 10",
        "output": "Map query #99 resolved with key-value binding verified (Value: 990)",
        "explanation": "Executes logic for Map Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6012-000000000100",
    "book": "maps",
    "order_index": 100,
    "title": "#100 Map Algorithm Problem 100",
    "slug": "maps-100-map-algorithm-problem-100",
    "description": "Solve key-value mapping challenge #100 utilizing ordered trees, hash maps, frequency hashing, or bidirectional caches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Maps & Hash Maps (Ordered & Unordered)",
    "tags": [
      "Map",
      "std::map",
      "unordered_map",
      "multimap",
      "Hash Map",
      "Key-Value"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MAP_QUERY 100 10",
        "output": "Map query #100 resolved with key-value binding verified (Value: 1000)",
        "explanation": "Executes logic for Map Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Map Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Map Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Map Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
