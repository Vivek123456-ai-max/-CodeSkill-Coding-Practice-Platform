import { Problem } from '../../types/problem';

export const ALGORITHMS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6014-000000000001",
    "book": "algorithms",
    "order_index": 1,
    "title": "#001 Sorting with `std::sort` (IntroSort O(N log N))",
    "slug": "algorithms-001-sorting-with-std-sort-introsort-o-n-log-n",
    "description": "Sort array in ascending order using hybrid QuickSort, HeapSort, InsertionSort.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort [5, 2, 8, 1, 9, 3]",
        "output": "Sorted: [1, 2, 3, 5, 8, 9]",
        "explanation": "Executes logic for Sorting with `std::sort` (IntroSort O(N log N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Sorting with `std::sort` (IntroSort O(N log N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Sorting with `std::sort` (IntroSort O(N log N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Sorting with `std::sort` (IntroSort O(N log N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000002",
    "book": "algorithms",
    "order_index": 2,
    "title": "#002 Stable Sorting with `std::stable_sort` (MergeSort)",
    "slug": "algorithms-002-stable-sorting-with-std-stable-sort-mergesort",
    "description": "Sort elements preserving relative order of equivalent keys in O(N log N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stable sort students by grade",
        "output": "Relative order of equal grades preserved",
        "explanation": "Executes logic for Stable Sorting with `std::stable_sort` (MergeSort)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Stable Sorting with `std::stable_sort` (MergeSort)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stable Sorting with `std::stable_sort` (MergeSort)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stable Sorting with `std::stable_sort` (MergeSort)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000003",
    "book": "algorithms",
    "order_index": 3,
    "title": "#003 Partial Sorting with `std::partial_sort`",
    "slug": "algorithms-003-partial-sorting-with-std-partial-sort",
    "description": "Find and sort only top K smallest elements in array of size N in O(N log K).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Partial sort top 3 of [9, 5, 7, 1, 3, 8]",
        "output": "Top 3 sorted: [1, 3, 5]",
        "explanation": "Executes logic for Partial Sorting with `std::partial_sort`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Partial Sorting with `std::partial_sort`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Partial Sorting with `std::partial_sort`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Partial Sorting with `std::partial_sort`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000004",
    "book": "algorithms",
    "order_index": 4,
    "title": "#004 Nth Element Partitioning with `std::nth_element` (QuickSelect O(N))",
    "slug": "algorithms-004-nth-element-partitioning-with-std-nth-element-quic",
    "description": "Place K-th element at its sorted position with smaller items left and larger right in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find 3rd smallest in [9, 1, 8, 2, 7, 3, 5]",
        "output": "3rd Element: 3 (Left: [1, 2], Right: [5, 7, 8, 9])",
        "explanation": "Executes logic for Nth Element Partitioning with `std::nth_element` (QuickSelect O(N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Nth Element Partitioning with `std::nth_element` (QuickSelect O(N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Nth Element Partitioning with `std::nth_element` (QuickSelect O(N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Nth Element Partitioning with `std::nth_element` (QuickSelect O(N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000005",
    "book": "algorithms",
    "order_index": 5,
    "title": "#005 Binary Search with `std::binary_search`",
    "slug": "algorithms-005-binary-search-with-std-binary-search",
    "description": "Check presence of target element in sorted array in O(log N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Search 42 in [10, 20, 30, 42, 50]",
        "output": "Found: true",
        "explanation": "Executes logic for Binary Search with `std::binary_search`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Binary Search with `std::binary_search`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Binary Search with `std::binary_search`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Binary Search with `std::binary_search`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000006",
    "book": "algorithms",
    "order_index": 6,
    "title": "#006 Lower Bound with `std::lower_bound`",
    "slug": "algorithms-006-lower-bound-with-std-lower-bound",
    "description": "Find first iterator position with value `>= target` in sorted range.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lower bound 30 in [10, 20, 30, 30, 40]",
        "output": "First >= 30 at index 2",
        "explanation": "Executes logic for Lower Bound with `std::lower_bound`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Lower Bound with `std::lower_bound`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lower Bound with `std::lower_bound`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lower Bound with `std::lower_bound`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000007",
    "book": "algorithms",
    "order_index": 7,
    "title": "#007 Upper Bound with `std::upper_bound`",
    "slug": "algorithms-007-upper-bound-with-std-upper-bound",
    "description": "Find first iterator position with value `> target` in sorted range.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Upper bound 30 in [10, 20, 30, 30, 40]",
        "output": "First > 30 at index 4 (Value 40)",
        "explanation": "Executes logic for Upper Bound with `std::upper_bound`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Upper Bound with `std::upper_bound`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Upper Bound with `std::upper_bound`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Upper Bound with `std::upper_bound`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000008",
    "book": "algorithms",
    "order_index": 8,
    "title": "#008 Equal Range with `std::equal_range`",
    "slug": "algorithms-008-equal-range-with-std-equal-range",
    "description": "Get pair of `lower_bound` and `upper_bound` iterators in a single O(log N) call.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Equal range for 30",
        "output": "Range covers 2 elements from index 2 to 4",
        "explanation": "Executes logic for Equal Range with `std::equal_range`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Equal Range with `std::equal_range`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Equal Range with `std::equal_range`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Equal Range with `std::equal_range`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000009",
    "book": "algorithms",
    "order_index": 9,
    "title": "#009 Element Finding with `std::find` and `std::find_if`",
    "slug": "algorithms-009-element-finding-with-std-find-and-std-find-if",
    "description": "Find first element matching exact value or matching predicate function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find first negative in [3, 5, -2, 8]",
        "output": "First negative: -2 (at index 2)",
        "explanation": "Executes logic for Element Finding with `std::find` and `std::find_if`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Element Finding with `std::find` and `std::find_if`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Element Finding with `std::find` and `std::find_if`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Element Finding with `std::find` and `std::find_if`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000010",
    "book": "algorithms",
    "order_index": 10,
    "title": "#010 Element Counting with `std::count` and `std::count_if`",
    "slug": "algorithms-010-element-counting-with-std-count-and-std-count-if",
    "description": "Count total matches of target and matches of predicate in array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Count evens in [1, 2, 3, 4, 5, 6]",
        "output": "Even Count: 3",
        "explanation": "Executes logic for Element Counting with `std::count` and `std::count_if`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Element Counting with `std::count` and `std::count_if`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Element Counting with `std::count` and `std::count_if`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Element Counting with `std::count` and `std::count_if`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000011",
    "book": "algorithms",
    "order_index": 11,
    "title": "#011 Maximum and Minimum Elements with `std::min_element` & `std::max_element`",
    "slug": "algorithms-011-maximum-and-minimum-elements-with-std-min-element",
    "description": "Locate min and max values in container.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[14, 28, 7, 92, 45]",
        "output": "Min: 7, Max: 92",
        "explanation": "Executes logic for Maximum and Minimum Elements with `std::min_element` & `std::max_element`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximum and Minimum Elements with `std::min_element` & `std::max_element`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximum and Minimum Elements with `std::min_element` & `std::max_element`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximum and Minimum Elements with `std::min_element` & `std::max_element`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000012",
    "book": "algorithms",
    "order_index": 12,
    "title": "#012 Clamp Function (`std::clamp` in C++17)",
    "slug": "algorithms-012-clamp-function-std-clamp-in-c-17",
    "description": "Clamp value X between minimum and maximum bounds `std::clamp(v, lo, hi)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Clamp 150 between 0 and 100",
        "output": "Clamped Value: 100",
        "explanation": "Executes logic for Clamp Function (`std::clamp` in C++17)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Clamp Function (`std::clamp` in C++17)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Clamp Function (`std::clamp` in C++17)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Clamp Function (`std::clamp` in C++17)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000013",
    "book": "algorithms",
    "order_index": 13,
    "title": "#013 Range Transformation with `std::transform` (Unary & Binary)",
    "slug": "algorithms-013-range-transformation-with-std-transform-unary-bina",
    "description": "Apply unary operation or binary operation combining two ranges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A=[1,2,3] + B=[10,20,30]",
        "output": "Sum Range: [11, 22, 33]",
        "explanation": "Executes logic for Range Transformation with `std::transform` (Unary & Binary)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Range Transformation with `std::transform` (Unary & Binary)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Range Transformation with `std::transform` (Unary & Binary)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Range Transformation with `std::transform` (Unary & Binary)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000014",
    "book": "algorithms",
    "order_index": 14,
    "title": "#014 Range Reduction with `std::accumulate`",
    "slug": "algorithms-014-range-reduction-with-std-accumulate",
    "description": "Compute cumulative sum, product, or custom folded binary reduction.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sum [1, 2, 3, 4, 5]",
        "output": "Sum: 15",
        "explanation": "Executes logic for Range Reduction with `std::accumulate`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Range Reduction with `std::accumulate`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Range Reduction with `std::accumulate`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Range Reduction with `std::accumulate`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000015",
    "book": "algorithms",
    "order_index": 15,
    "title": "#015 Inclusive Scan and Exclusive Scan (`std::inclusive_scan` in C++17)",
    "slug": "algorithms-015-inclusive-scan-and-exclusive-scan-std-inclusive-sc",
    "description": "Compute running prefix sums array in parallelizable format.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Scan [1, 2, 3, 4]",
        "output": "Inclusive Scan: [1, 3, 6, 10]",
        "explanation": "Executes logic for Inclusive Scan and Exclusive Scan (`std::inclusive_scan` in C++17)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Inclusive Scan and Exclusive Scan (`std::inclusive_scan` in C++17)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inclusive Scan and Exclusive Scan (`std::inclusive_scan` in C++17)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inclusive Scan and Exclusive Scan (`std::inclusive_scan` in C++17)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000016",
    "book": "algorithms",
    "order_index": 16,
    "title": "#016 Adjacent Difference (`std::adjacent_difference`)",
    "slug": "algorithms-016-adjacent-difference-std-adjacent-difference",
    "description": "Compute differences between consecutive elements `arr[i] - arr[i-1]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[2, 6, 12, 20]",
        "output": "Differences: [2, 4, 6, 8]",
        "explanation": "Executes logic for Adjacent Difference (`std::adjacent_difference`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Adjacent Difference (`std::adjacent_difference`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Adjacent Difference (`std::adjacent_difference`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Adjacent Difference (`std::adjacent_difference`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000017",
    "book": "algorithms",
    "order_index": 17,
    "title": "#017 Iota Generator (`std::iota`)",
    "slug": "algorithms-017-iota-generator-std-iota",
    "description": "Fill range with sequentially increasing values starting at X (e.g. 1, 2, 3, ...).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Iota on size 5 starting at 10",
        "output": "Filled: [10, 11, 12, 13, 14]",
        "explanation": "Executes logic for Iota Generator (`std::iota`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Iota Generator (`std::iota`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Iota Generator (`std::iota`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Iota Generator (`std::iota`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000018",
    "book": "algorithms",
    "order_index": 18,
    "title": "#018 Range Reversal with `std::reverse` and `std::reverse_copy`",
    "slug": "algorithms-018-range-reversal-with-std-reverse-and-std-reverse-co",
    "description": "Reverse range in-place or copy reversed elements to destination.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5]",
        "output": "Reversed: [5, 4, 3, 2, 1]",
        "explanation": "Executes logic for Range Reversal with `std::reverse` and `std::reverse_copy`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Range Reversal with `std::reverse` and `std::reverse_copy`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Range Reversal with `std::reverse` and `std::reverse_copy`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Range Reversal with `std::reverse` and `std::reverse_copy`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000019",
    "book": "algorithms",
    "order_index": 19,
    "title": "#019 Range Rotation with `std::rotate` and `std::rotate_copy`",
    "slug": "algorithms-019-range-rotation-with-std-rotate-and-std-rotate-copy",
    "description": "Rotate elements around middle pivot.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rotate [1, 2, 3, 4, 5] by 2",
        "output": "Rotated: [3, 4, 5, 1, 2]",
        "explanation": "Executes logic for Range Rotation with `std::rotate` and `std::rotate_copy`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Range Rotation with `std::rotate` and `std::rotate_copy`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Range Rotation with `std::rotate` and `std::rotate_copy`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Range Rotation with `std::rotate` and `std::rotate_copy`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000020",
    "book": "algorithms",
    "order_index": 20,
    "title": "#020 Range Shuffling with `std::shuffle`",
    "slug": "algorithms-020-range-shuffling-with-std-shuffle",
    "description": "Randomly shuffle elements using pseudo-random number generator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Shuffle [1..6]",
        "output": "Deck shuffled randomly",
        "explanation": "Executes logic for Range Shuffling with `std::shuffle`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Range Shuffling with `std::shuffle`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Range Shuffling with `std::shuffle`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Range Shuffling with `std::shuffle`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000021",
    "book": "algorithms",
    "order_index": 21,
    "title": "#021 Next Permutation and Previous Permutation (`std::next_permutation`)",
    "slug": "algorithms-021-next-permutation-and-previous-permutation-std-next",
    "description": "Generate next lexicographically greater permutation in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Permute [1, 2, 3]",
        "output": "Next: [1, 3, 2]",
        "explanation": "Executes logic for Next Permutation and Previous Permutation (`std::next_permutation`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Next Permutation and Previous Permutation (`std::next_permutation`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Next Permutation and Previous Permutation (`std::next_permutation`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Next Permutation and Previous Permutation (`std::next_permutation`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000022",
    "book": "algorithms",
    "order_index": 22,
    "title": "#022 Checking Sortedness (`std::is_sorted` and `is_sorted_until`)",
    "slug": "algorithms-022-checking-sortedness-std-is-sorted-and-is-sorted-un",
    "description": "Verify if range is sorted and find first out-of-order element.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 5, 3, 4]",
        "output": "is_sorted: false (Out of order at index 3: 3)",
        "explanation": "Executes logic for Checking Sortedness (`std::is_sorted` and `is_sorted_until`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Checking Sortedness (`std::is_sorted` and `is_sorted_until`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Checking Sortedness (`std::is_sorted` and `is_sorted_until`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Checking Sortedness (`std::is_sorted` and `is_sorted_until`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000023",
    "book": "algorithms",
    "order_index": 23,
    "title": "#023 Heap Operations: `make_heap`, `push_heap`, `pop_heap`, `sort_heap`",
    "slug": "algorithms-023-heap-operations-make-heap-push-heap-pop-heap-sort",
    "description": "Build and manipulate max-heap directly within a vector buffer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Make heap from [3, 1, 4, 1, 5, 9]",
        "output": "Heap created: Max element 9 at front",
        "explanation": "Executes logic for Heap Operations: `make_heap`, `push_heap`, `pop_heap`, `sort_heap`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Heap Operations: `make_heap`, `push_heap`, `pop_heap`, `sort_heap`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Heap Operations: `make_heap`, `push_heap`, `pop_heap`, `sort_heap`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Heap Operations: `make_heap`, `push_heap`, `pop_heap`, `sort_heap`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000024",
    "book": "algorithms",
    "order_index": 24,
    "title": "#024 Set Operations on Sorted Ranges: `std::set_union`",
    "slug": "algorithms-024-set-operations-on-sorted-ranges-std-set-union",
    "description": "Compute union of two pre-sorted vectors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2] B: [2, 3]",
        "output": "Union: [1, 2, 3]",
        "explanation": "Executes logic for Set Operations on Sorted Ranges: `std::set_union`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Operations on Sorted Ranges: `std::set_union`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Operations on Sorted Ranges: `std::set_union`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Operations on Sorted Ranges: `std::set_union`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000025",
    "book": "algorithms",
    "order_index": 25,
    "title": "#025 Set Operations on Sorted Ranges: `std::set_intersection`",
    "slug": "algorithms-025-set-operations-on-sorted-ranges-std-set-intersecti",
    "description": "Compute intersection of two pre-sorted vectors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3] B: [2, 3, 4]",
        "output": "Intersection: [2, 3]",
        "explanation": "Executes logic for Set Operations on Sorted Ranges: `std::set_intersection`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Operations on Sorted Ranges: `std::set_intersection`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Operations on Sorted Ranges: `std::set_intersection`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Operations on Sorted Ranges: `std::set_intersection`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000026",
    "book": "algorithms",
    "order_index": 26,
    "title": "#026 Set Operations on Sorted Ranges: `std::set_difference`",
    "slug": "algorithms-026-set-operations-on-sorted-ranges-std-set-difference",
    "description": "Compute difference A - B on pre-sorted vectors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2, 3] B: [2, 3, 4]",
        "output": "Difference: [1]",
        "explanation": "Executes logic for Set Operations on Sorted Ranges: `std::set_difference`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Operations on Sorted Ranges: `std::set_difference`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Operations on Sorted Ranges: `std::set_difference`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Operations on Sorted Ranges: `std::set_difference`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000027",
    "book": "algorithms",
    "order_index": 27,
    "title": "#027 Set Operations on Sorted Ranges: `std::set_symmetric_difference`",
    "slug": "algorithms-027-set-operations-on-sorted-ranges-std-set-symmetric",
    "description": "Compute symmetric difference on pre-sorted vectors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2] B: [2, 3]",
        "output": "Symmetric Difference: [1, 3]",
        "explanation": "Executes logic for Set Operations on Sorted Ranges: `std::set_symmetric_difference`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Set Operations on Sorted Ranges: `std::set_symmetric_difference`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Set Operations on Sorted Ranges: `std::set_symmetric_difference`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Set Operations on Sorted Ranges: `std::set_symmetric_difference`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000028",
    "book": "algorithms",
    "order_index": 28,
    "title": "#028 Subset Check with `std::includes`",
    "slug": "algorithms-028-subset-check-with-std-includes",
    "description": "Determine if sorted range B is completely contained within sorted range A.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1..5], B: [2, 4]",
        "output": "Includes: true",
        "explanation": "Executes logic for Subset Check with `std::includes`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Subset Check with `std::includes`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subset Check with `std::includes`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subset Check with `std::includes`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000029",
    "book": "algorithms",
    "order_index": 29,
    "title": "#029 Merging Sorted Ranges with `std::merge` and `inplace_merge`",
    "slug": "algorithms-029-merging-sorted-ranges-with-std-merge-and-inplace-m",
    "description": "Merge two sorted halves of array in-place.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 3, 5, 2, 4, 6]",
        "output": "In-Place Merged: [1, 2, 3, 4, 5, 6]",
        "explanation": "Executes logic for Merging Sorted Ranges with `std::merge` and `inplace_merge`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Merging Sorted Ranges with `std::merge` and `inplace_merge`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merging Sorted Ranges with `std::merge` and `inplace_merge`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merging Sorted Ranges with `std::merge` and `inplace_merge`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000030",
    "book": "algorithms",
    "order_index": 30,
    "title": "#030 Partitioning Range with `std::partition` and `stable_partition`",
    "slug": "algorithms-030-partitioning-range-with-std-partition-and-stable-p",
    "description": "Partition range into matching and non-matching subranges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Partition evens/odds",
        "output": "Evens grouped before odds",
        "explanation": "Executes logic for Partitioning Range with `std::partition` and `stable_partition`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Partitioning Range with `std::partition` and `stable_partition`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Partitioning Range with `std::partition` and `stable_partition`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Partitioning Range with `std::partition` and `stable_partition`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000031",
    "book": "algorithms",
    "order_index": 31,
    "title": "#031 Checking Partition Boundary (`std::is_partitioned` & `partition_point`)",
    "slug": "algorithms-031-checking-partition-boundary-std-is-partitioned-par",
    "description": "Find exact iterator where partition condition transitions from true to false.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Partition point on [2, 4, 6, 1, 3]",
        "output": "Partition point at index 3 (Value: 1)",
        "explanation": "Executes logic for Checking Partition Boundary (`std::is_partitioned` & `partition_point`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Checking Partition Boundary (`std::is_partitioned` & `partition_point`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Checking Partition Boundary (`std::is_partitioned` & `partition_point`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Checking Partition Boundary (`std::is_partitioned` & `partition_point`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000032",
    "book": "algorithms",
    "order_index": 32,
    "title": "#032 Replacing Elements with `std::replace` and `replace_if`",
    "slug": "algorithms-032-replacing-elements-with-std-replace-and-replace-if",
    "description": "Replace all occurrences of value satisfying condition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Replace negatives with 0",
        "output": "[-1, 2, -3, 4] -> [0, 2, 0, 4]",
        "explanation": "Executes logic for Replacing Elements with `std::replace` and `replace_if`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Replacing Elements with `std::replace` and `replace_if`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Replacing Elements with `std::replace` and `replace_if`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Replacing Elements with `std::replace` and `replace_if`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000033",
    "book": "algorithms",
    "order_index": 33,
    "title": "#033 Filling Elements with `std::fill` and `fill_n`",
    "slug": "algorithms-033-filling-elements-with-std-fill-and-fill-n",
    "description": "Fill container elements with assigned constant value.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Fill 4 slots with 99",
        "output": "[99, 99, 99, 99]",
        "explanation": "Executes logic for Filling Elements with `std::fill` and `fill_n`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Filling Elements with `std::fill` and `fill_n`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Filling Elements with `std::fill` and `fill_n`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Filling Elements with `std::fill` and `fill_n`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000034",
    "book": "algorithms",
    "order_index": 34,
    "title": "#034 Generating Elements with `std::generate` and `generate_n`",
    "slug": "algorithms-034-generating-elements-with-std-generate-and-generate",
    "description": "Populate container using generator function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Generate 4 powers of 2",
        "output": "[1, 2, 4, 8]",
        "explanation": "Executes logic for Generating Elements with `std::generate` and `generate_n`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Generating Elements with `std::generate` and `generate_n`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generating Elements with `std::generate` and `generate_n`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generating Elements with `std::generate` and `generate_n`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000035",
    "book": "algorithms",
    "order_index": 35,
    "title": "#035 Removing Elements with `std::remove` and `remove_if` (Erase-Remove)",
    "slug": "algorithms-035-removing-elements-with-std-remove-and-remove-if-er",
    "description": "Shift matching elements to end and return new logical end iterator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Remove 0s from [1, 0, 2, 0, 3]",
        "output": "Logical Range: [1, 2, 3]",
        "explanation": "Executes logic for Removing Elements with `std::remove` and `remove_if` (Erase-Remove)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Removing Elements with `std::remove` and `remove_if` (Erase-Remove)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Removing Elements with `std::remove` and `remove_if` (Erase-Remove)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Removing Elements with `std::remove` and `remove_if` (Erase-Remove)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000036",
    "book": "algorithms",
    "order_index": 36,
    "title": "#036 Deduplication with `std::unique` and `unique_copy`",
    "slug": "algorithms-036-deduplication-with-std-unique-and-unique-copy",
    "description": "Remove consecutive duplicates from sorted range.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 1, 2, 3, 3]",
        "output": "Unique: [1, 2, 3]",
        "explanation": "Executes logic for Deduplication with `std::unique` and `unique_copy`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Deduplication with `std::unique` and `unique_copy`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deduplication with `std::unique` and `unique_copy`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deduplication with `std::unique` and `unique_copy`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000037",
    "book": "algorithms",
    "order_index": 37,
    "title": "#037 Searching Pattern Subsequence with `std::search` and `search_n`",
    "slug": "algorithms-037-searching-pattern-subsequence-with-std-search-and",
    "description": "Find starting position of subrange or consecutive N matches.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Search 3 consecutive 7s in [1, 7, 7, 7, 2]",
        "output": "Found 3 consecutive 7s at index 1",
        "explanation": "Executes logic for Searching Pattern Subsequence with `std::search` and `search_n`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Searching Pattern Subsequence with `std::search` and `search_n`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Searching Pattern Subsequence with `std::search` and `search_n`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Searching Pattern Subsequence with `std::search` and `search_n`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000038",
    "book": "algorithms",
    "order_index": 38,
    "title": "#038 Finding First Mismatch with `std::mismatch`",
    "slug": "algorithms-038-finding-first-mismatch-with-std-mismatch",
    "description": "Find first differing element pair across two ranges.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compare [1, 2, 3] and [1, 2, 4]",
        "output": "Mismatch: 3 vs 4 at index 2",
        "explanation": "Executes logic for Finding First Mismatch with `std::mismatch`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding First Mismatch with `std::mismatch`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding First Mismatch with `std::mismatch`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding First Mismatch with `std::mismatch`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000039",
    "book": "algorithms",
    "order_index": 39,
    "title": "#039 Checking Equality with `std::equal`",
    "slug": "algorithms-039-checking-equality-with-std-equal",
    "description": "Verify if two ranges are identical in values.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compare [1, 2, 3] and [1, 2, 3]",
        "output": "Equal: true",
        "explanation": "Executes logic for Checking Equality with `std::equal`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Checking Equality with `std::equal`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Checking Equality with `std::equal`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Checking Equality with `std::equal`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000040",
    "book": "algorithms",
    "order_index": 40,
    "title": "#040 Lexicographical Comparison with `std::lexicographical_compare`",
    "slug": "algorithms-040-lexicographical-comparison-with-std-lexicographica",
    "description": "Compare two ranges lexicographically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compare 'abc' vs 'abd'",
        "output": "Result: 'abc' < 'abd' (true)",
        "explanation": "Executes logic for Lexicographical Comparison with `std::lexicographical_compare`."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Lexicographical Comparison with `std::lexicographical_compare`\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Lexicographical Comparison with `std::lexicographical_compare`\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Lexicographical Comparison with `std::lexicographical_compare`\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000041",
    "book": "algorithms",
    "order_index": 41,
    "title": "#041 Counting Inversions in Array with Merge Sort",
    "slug": "algorithms-041-counting-inversions-in-array-with-merge-sort",
    "description": "Count number of inversions `(i < j and arr[i] > arr[j])` in O(N log N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[8, 4, 2, 1]",
        "output": "Inversion Count: 6",
        "explanation": "Executes logic for Counting Inversions in Array with Merge Sort."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Counting Inversions in Array with Merge Sort\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Counting Inversions in Array with Merge Sort\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Counting Inversions in Array with Merge Sort\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000042",
    "book": "algorithms",
    "order_index": 42,
    "title": "#042 Dutch National Flag 3-Way Partitioning",
    "slug": "algorithms-042-dutch-national-flag-3-way-partitioning",
    "description": "Sort array of 0s, 1s, and 2s in-place in a single pass O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[2, 0, 2, 1, 1, 0]",
        "output": "Sorted: [0, 0, 1, 1, 2, 2]",
        "explanation": "Executes logic for Dutch National Flag 3-Way Partitioning."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Dutch National Flag 3-Way Partitioning\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dutch National Flag 3-Way Partitioning\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dutch National Flag 3-Way Partitioning\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000043",
    "book": "algorithms",
    "order_index": 43,
    "title": "#043 Kth Smallest Element via QuickSelect (O(N) Average)",
    "slug": "algorithms-043-kth-smallest-element-via-quickselect-o-n-average",
    "description": "Find K-th smallest element in unsorted array using randomized partition.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[7, 10, 4, 3, 20, 15], k=3",
        "output": "3rd Smallest: 7",
        "explanation": "Executes logic for Kth Smallest Element via QuickSelect (O(N) Average)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Kth Smallest Element via QuickSelect (O(N) Average)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Kth Smallest Element via QuickSelect (O(N) Average)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Kth Smallest Element via QuickSelect (O(N) Average)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000044",
    "book": "algorithms",
    "order_index": 44,
    "title": "#044 Longest Increasing Subsequence (Patience Sorting O(N log N))",
    "slug": "algorithms-044-longest-increasing-subsequence-patience-sorting-o",
    "description": "Find length of longest strictly increasing subsequence using `lower_bound`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[10, 9, 2, 5, 3, 7, 101, 18]",
        "output": "LIS Length: 4 ([2, 3, 7, 101])",
        "explanation": "Executes logic for Longest Increasing Subsequence (Patience Sorting O(N log N))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Increasing Subsequence (Patience Sorting O(N log N))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Increasing Subsequence (Patience Sorting O(N log N))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Increasing Subsequence (Patience Sorting O(N log N))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000045",
    "book": "algorithms",
    "order_index": 45,
    "title": "#045 Count Smaller Numbers After Self (Segment Tree / Merge Sort)",
    "slug": "algorithms-045-count-smaller-numbers-after-self-segment-tree-merg",
    "description": "For each element, count count of smaller elements to its right in O(N log N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[5, 2, 6, 1]",
        "output": "Output: [2, 1, 1, 0]",
        "explanation": "Executes logic for Count Smaller Numbers After Self (Segment Tree / Merge Sort)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Count Smaller Numbers After Self (Segment Tree / Merge Sort)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Count Smaller Numbers After Self (Segment Tree / Merge Sort)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Count Smaller Numbers After Self (Segment Tree / Merge Sort)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000046",
    "book": "algorithms",
    "order_index": 46,
    "title": "#046 Two Pointer Container Traversal (Pair Sum Closest to Target)",
    "slug": "algorithms-046-two-pointer-container-traversal-pair-sum-closest-t",
    "description": "Find pair of numbers whose sum is closest to target in sorted array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sorted [10, 22, 28, 29, 30, 40], Target 54",
        "output": "Closest Pair: (22, 30) = 52",
        "explanation": "Executes logic for Two Pointer Container Traversal (Pair Sum Closest to Target)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Two Pointer Container Traversal (Pair Sum Closest to Target)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Two Pointer Container Traversal (Pair Sum Closest to Target)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Two Pointer Container Traversal (Pair Sum Closest to Target)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000047",
    "book": "algorithms",
    "order_index": 47,
    "title": "#047 Three Sum Closest to Target",
    "slug": "algorithms-047-three-sum-closest-to-target",
    "description": "Find three integers in array whose sum is closest to target.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [-1, 2, 1, -4], Target 1",
        "output": "Closest Sum: 2 (-1 + 2 + 1 = 2)",
        "explanation": "Executes logic for Three Sum Closest to Target."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Three Sum Closest to Target\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Three Sum Closest to Target\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Three Sum Closest to Target\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000048",
    "book": "algorithms",
    "order_index": 48,
    "title": "#048 Four Sum (Find All Unique Quadruplets Summing to Target)",
    "slug": "algorithms-048-four-sum-find-all-unique-quadruplets-summing-to-ta",
    "description": "Find all unique quadruplets `[a,b,c,d]` that sum to target in O(N^3).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Nums [1, 0, -1, 0, -2, 2], Target 0",
        "output": "Quadruplets: [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]",
        "explanation": "Executes logic for Four Sum (Find All Unique Quadruplets Summing to Target)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Four Sum (Find All Unique Quadruplets Summing to Target)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Four Sum (Find All Unique Quadruplets Summing to Target)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Four Sum (Find All Unique Quadruplets Summing to Target)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000049",
    "book": "algorithms",
    "order_index": 49,
    "title": "#049 Maximum Product Subarray (Dynamic Programming on Algorithm Range)",
    "slug": "algorithms-049-maximum-product-subarray-dynamic-programming-on-al",
    "description": "Find contiguous subarray that has largest product in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[2, 3, -2, 4]",
        "output": "Max Product: 6 ([2, 3])",
        "explanation": "Executes logic for Maximum Product Subarray (Dynamic Programming on Algorithm Range)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Maximum Product Subarray (Dynamic Programming on Algorithm Range)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Maximum Product Subarray (Dynamic Programming on Algorithm Range)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Maximum Product Subarray (Dynamic Programming on Algorithm Range)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000050",
    "book": "algorithms",
    "order_index": 50,
    "title": "#050 Execution Policy Parallelism (`std::execution::par` in C++17)",
    "slug": "algorithms-050-execution-policy-parallelism-std-execution-par-in",
    "description": "Demonstrate parallel sorting with `std::sort(std::execution::par, v.begin(), v.end())`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort 1,000,000 ints in parallel",
        "output": "Parallel sort completed in multi-threaded execution (3x speedup)",
        "explanation": "Executes logic for Execution Policy Parallelism (`std::execution::par` in C++17)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Execution Policy Parallelism (`std::execution::par` in C++17)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Execution Policy Parallelism (`std::execution::par` in C++17)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Execution Policy Parallelism (`std::execution::par` in C++17)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000051",
    "book": "algorithms",
    "order_index": 51,
    "title": "#051 C++ Algorithm Problem 51",
    "slug": "algorithms-051-c-algorithm-problem-51",
    "description": "Solve algorithmic challenge #51 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 51 10",
        "output": "Algorithm #51 executed with optimal time complexity (Result: 510)",
        "explanation": "Executes logic for C++ Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000052",
    "book": "algorithms",
    "order_index": 52,
    "title": "#052 C++ Algorithm Problem 52",
    "slug": "algorithms-052-c-algorithm-problem-52",
    "description": "Solve algorithmic challenge #52 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 52 10",
        "output": "Algorithm #52 executed with optimal time complexity (Result: 520)",
        "explanation": "Executes logic for C++ Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000053",
    "book": "algorithms",
    "order_index": 53,
    "title": "#053 C++ Algorithm Problem 53",
    "slug": "algorithms-053-c-algorithm-problem-53",
    "description": "Solve algorithmic challenge #53 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 53 10",
        "output": "Algorithm #53 executed with optimal time complexity (Result: 530)",
        "explanation": "Executes logic for C++ Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000054",
    "book": "algorithms",
    "order_index": 54,
    "title": "#054 C++ Algorithm Problem 54",
    "slug": "algorithms-054-c-algorithm-problem-54",
    "description": "Solve algorithmic challenge #54 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 54 10",
        "output": "Algorithm #54 executed with optimal time complexity (Result: 540)",
        "explanation": "Executes logic for C++ Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000055",
    "book": "algorithms",
    "order_index": 55,
    "title": "#055 C++ Algorithm Problem 55",
    "slug": "algorithms-055-c-algorithm-problem-55",
    "description": "Solve algorithmic challenge #55 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 55 10",
        "output": "Algorithm #55 executed with optimal time complexity (Result: 550)",
        "explanation": "Executes logic for C++ Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000056",
    "book": "algorithms",
    "order_index": 56,
    "title": "#056 C++ Algorithm Problem 56",
    "slug": "algorithms-056-c-algorithm-problem-56",
    "description": "Solve algorithmic challenge #56 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 56 10",
        "output": "Algorithm #56 executed with optimal time complexity (Result: 560)",
        "explanation": "Executes logic for C++ Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000057",
    "book": "algorithms",
    "order_index": 57,
    "title": "#057 C++ Algorithm Problem 57",
    "slug": "algorithms-057-c-algorithm-problem-57",
    "description": "Solve algorithmic challenge #57 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 57 10",
        "output": "Algorithm #57 executed with optimal time complexity (Result: 570)",
        "explanation": "Executes logic for C++ Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000058",
    "book": "algorithms",
    "order_index": 58,
    "title": "#058 C++ Algorithm Problem 58",
    "slug": "algorithms-058-c-algorithm-problem-58",
    "description": "Solve algorithmic challenge #58 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 58 10",
        "output": "Algorithm #58 executed with optimal time complexity (Result: 580)",
        "explanation": "Executes logic for C++ Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000059",
    "book": "algorithms",
    "order_index": 59,
    "title": "#059 C++ Algorithm Problem 59",
    "slug": "algorithms-059-c-algorithm-problem-59",
    "description": "Solve algorithmic challenge #59 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 59 10",
        "output": "Algorithm #59 executed with optimal time complexity (Result: 590)",
        "explanation": "Executes logic for C++ Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000060",
    "book": "algorithms",
    "order_index": 60,
    "title": "#060 C++ Algorithm Problem 60",
    "slug": "algorithms-060-c-algorithm-problem-60",
    "description": "Solve algorithmic challenge #60 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 60 10",
        "output": "Algorithm #60 executed with optimal time complexity (Result: 600)",
        "explanation": "Executes logic for C++ Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000061",
    "book": "algorithms",
    "order_index": 61,
    "title": "#061 C++ Algorithm Problem 61",
    "slug": "algorithms-061-c-algorithm-problem-61",
    "description": "Solve algorithmic challenge #61 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 61 10",
        "output": "Algorithm #61 executed with optimal time complexity (Result: 610)",
        "explanation": "Executes logic for C++ Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000062",
    "book": "algorithms",
    "order_index": 62,
    "title": "#062 C++ Algorithm Problem 62",
    "slug": "algorithms-062-c-algorithm-problem-62",
    "description": "Solve algorithmic challenge #62 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 62 10",
        "output": "Algorithm #62 executed with optimal time complexity (Result: 620)",
        "explanation": "Executes logic for C++ Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000063",
    "book": "algorithms",
    "order_index": 63,
    "title": "#063 C++ Algorithm Problem 63",
    "slug": "algorithms-063-c-algorithm-problem-63",
    "description": "Solve algorithmic challenge #63 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 63 10",
        "output": "Algorithm #63 executed with optimal time complexity (Result: 630)",
        "explanation": "Executes logic for C++ Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000064",
    "book": "algorithms",
    "order_index": 64,
    "title": "#064 C++ Algorithm Problem 64",
    "slug": "algorithms-064-c-algorithm-problem-64",
    "description": "Solve algorithmic challenge #64 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 64 10",
        "output": "Algorithm #64 executed with optimal time complexity (Result: 640)",
        "explanation": "Executes logic for C++ Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000065",
    "book": "algorithms",
    "order_index": 65,
    "title": "#065 C++ Algorithm Problem 65",
    "slug": "algorithms-065-c-algorithm-problem-65",
    "description": "Solve algorithmic challenge #65 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 65 10",
        "output": "Algorithm #65 executed with optimal time complexity (Result: 650)",
        "explanation": "Executes logic for C++ Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000066",
    "book": "algorithms",
    "order_index": 66,
    "title": "#066 C++ Algorithm Problem 66",
    "slug": "algorithms-066-c-algorithm-problem-66",
    "description": "Solve algorithmic challenge #66 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 66 10",
        "output": "Algorithm #66 executed with optimal time complexity (Result: 660)",
        "explanation": "Executes logic for C++ Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000067",
    "book": "algorithms",
    "order_index": 67,
    "title": "#067 C++ Algorithm Problem 67",
    "slug": "algorithms-067-c-algorithm-problem-67",
    "description": "Solve algorithmic challenge #67 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 67 10",
        "output": "Algorithm #67 executed with optimal time complexity (Result: 670)",
        "explanation": "Executes logic for C++ Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000068",
    "book": "algorithms",
    "order_index": 68,
    "title": "#068 C++ Algorithm Problem 68",
    "slug": "algorithms-068-c-algorithm-problem-68",
    "description": "Solve algorithmic challenge #68 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 68 10",
        "output": "Algorithm #68 executed with optimal time complexity (Result: 680)",
        "explanation": "Executes logic for C++ Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000069",
    "book": "algorithms",
    "order_index": 69,
    "title": "#069 C++ Algorithm Problem 69",
    "slug": "algorithms-069-c-algorithm-problem-69",
    "description": "Solve algorithmic challenge #69 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 69 10",
        "output": "Algorithm #69 executed with optimal time complexity (Result: 690)",
        "explanation": "Executes logic for C++ Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000070",
    "book": "algorithms",
    "order_index": 70,
    "title": "#070 C++ Algorithm Problem 70",
    "slug": "algorithms-070-c-algorithm-problem-70",
    "description": "Solve algorithmic challenge #70 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 70 10",
        "output": "Algorithm #70 executed with optimal time complexity (Result: 700)",
        "explanation": "Executes logic for C++ Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000071",
    "book": "algorithms",
    "order_index": 71,
    "title": "#071 C++ Algorithm Problem 71",
    "slug": "algorithms-071-c-algorithm-problem-71",
    "description": "Solve algorithmic challenge #71 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 71 10",
        "output": "Algorithm #71 executed with optimal time complexity (Result: 710)",
        "explanation": "Executes logic for C++ Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000072",
    "book": "algorithms",
    "order_index": 72,
    "title": "#072 C++ Algorithm Problem 72",
    "slug": "algorithms-072-c-algorithm-problem-72",
    "description": "Solve algorithmic challenge #72 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 72 10",
        "output": "Algorithm #72 executed with optimal time complexity (Result: 720)",
        "explanation": "Executes logic for C++ Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000073",
    "book": "algorithms",
    "order_index": 73,
    "title": "#073 C++ Algorithm Problem 73",
    "slug": "algorithms-073-c-algorithm-problem-73",
    "description": "Solve algorithmic challenge #73 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 73 10",
        "output": "Algorithm #73 executed with optimal time complexity (Result: 730)",
        "explanation": "Executes logic for C++ Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000074",
    "book": "algorithms",
    "order_index": 74,
    "title": "#074 C++ Algorithm Problem 74",
    "slug": "algorithms-074-c-algorithm-problem-74",
    "description": "Solve algorithmic challenge #74 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 74 10",
        "output": "Algorithm #74 executed with optimal time complexity (Result: 740)",
        "explanation": "Executes logic for C++ Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000075",
    "book": "algorithms",
    "order_index": 75,
    "title": "#075 C++ Algorithm Problem 75",
    "slug": "algorithms-075-c-algorithm-problem-75",
    "description": "Solve algorithmic challenge #75 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 75 10",
        "output": "Algorithm #75 executed with optimal time complexity (Result: 750)",
        "explanation": "Executes logic for C++ Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000076",
    "book": "algorithms",
    "order_index": 76,
    "title": "#076 C++ Algorithm Problem 76",
    "slug": "algorithms-076-c-algorithm-problem-76",
    "description": "Solve algorithmic challenge #76 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 76 10",
        "output": "Algorithm #76 executed with optimal time complexity (Result: 760)",
        "explanation": "Executes logic for C++ Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000077",
    "book": "algorithms",
    "order_index": 77,
    "title": "#077 C++ Algorithm Problem 77",
    "slug": "algorithms-077-c-algorithm-problem-77",
    "description": "Solve algorithmic challenge #77 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 77 10",
        "output": "Algorithm #77 executed with optimal time complexity (Result: 770)",
        "explanation": "Executes logic for C++ Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000078",
    "book": "algorithms",
    "order_index": 78,
    "title": "#078 C++ Algorithm Problem 78",
    "slug": "algorithms-078-c-algorithm-problem-78",
    "description": "Solve algorithmic challenge #78 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 78 10",
        "output": "Algorithm #78 executed with optimal time complexity (Result: 780)",
        "explanation": "Executes logic for C++ Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000079",
    "book": "algorithms",
    "order_index": 79,
    "title": "#079 C++ Algorithm Problem 79",
    "slug": "algorithms-079-c-algorithm-problem-79",
    "description": "Solve algorithmic challenge #79 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 79 10",
        "output": "Algorithm #79 executed with optimal time complexity (Result: 790)",
        "explanation": "Executes logic for C++ Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000080",
    "book": "algorithms",
    "order_index": 80,
    "title": "#080 C++ Algorithm Problem 80",
    "slug": "algorithms-080-c-algorithm-problem-80",
    "description": "Solve algorithmic challenge #80 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 80 10",
        "output": "Algorithm #80 executed with optimal time complexity (Result: 800)",
        "explanation": "Executes logic for C++ Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000081",
    "book": "algorithms",
    "order_index": 81,
    "title": "#081 C++ Algorithm Problem 81",
    "slug": "algorithms-081-c-algorithm-problem-81",
    "description": "Solve algorithmic challenge #81 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 81 10",
        "output": "Algorithm #81 executed with optimal time complexity (Result: 810)",
        "explanation": "Executes logic for C++ Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000082",
    "book": "algorithms",
    "order_index": 82,
    "title": "#082 C++ Algorithm Problem 82",
    "slug": "algorithms-082-c-algorithm-problem-82",
    "description": "Solve algorithmic challenge #82 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 82 10",
        "output": "Algorithm #82 executed with optimal time complexity (Result: 820)",
        "explanation": "Executes logic for C++ Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000083",
    "book": "algorithms",
    "order_index": 83,
    "title": "#083 C++ Algorithm Problem 83",
    "slug": "algorithms-083-c-algorithm-problem-83",
    "description": "Solve algorithmic challenge #83 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 83 10",
        "output": "Algorithm #83 executed with optimal time complexity (Result: 830)",
        "explanation": "Executes logic for C++ Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000084",
    "book": "algorithms",
    "order_index": 84,
    "title": "#084 C++ Algorithm Problem 84",
    "slug": "algorithms-084-c-algorithm-problem-84",
    "description": "Solve algorithmic challenge #84 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 84 10",
        "output": "Algorithm #84 executed with optimal time complexity (Result: 840)",
        "explanation": "Executes logic for C++ Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000085",
    "book": "algorithms",
    "order_index": 85,
    "title": "#085 C++ Algorithm Problem 85",
    "slug": "algorithms-085-c-algorithm-problem-85",
    "description": "Solve algorithmic challenge #85 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 85 10",
        "output": "Algorithm #85 executed with optimal time complexity (Result: 850)",
        "explanation": "Executes logic for C++ Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000086",
    "book": "algorithms",
    "order_index": 86,
    "title": "#086 C++ Algorithm Problem 86",
    "slug": "algorithms-086-c-algorithm-problem-86",
    "description": "Solve algorithmic challenge #86 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 86 10",
        "output": "Algorithm #86 executed with optimal time complexity (Result: 860)",
        "explanation": "Executes logic for C++ Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000087",
    "book": "algorithms",
    "order_index": 87,
    "title": "#087 C++ Algorithm Problem 87",
    "slug": "algorithms-087-c-algorithm-problem-87",
    "description": "Solve algorithmic challenge #87 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 87 10",
        "output": "Algorithm #87 executed with optimal time complexity (Result: 870)",
        "explanation": "Executes logic for C++ Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000088",
    "book": "algorithms",
    "order_index": 88,
    "title": "#088 C++ Algorithm Problem 88",
    "slug": "algorithms-088-c-algorithm-problem-88",
    "description": "Solve algorithmic challenge #88 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 88 10",
        "output": "Algorithm #88 executed with optimal time complexity (Result: 880)",
        "explanation": "Executes logic for C++ Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000089",
    "book": "algorithms",
    "order_index": 89,
    "title": "#089 C++ Algorithm Problem 89",
    "slug": "algorithms-089-c-algorithm-problem-89",
    "description": "Solve algorithmic challenge #89 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 89 10",
        "output": "Algorithm #89 executed with optimal time complexity (Result: 890)",
        "explanation": "Executes logic for C++ Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000090",
    "book": "algorithms",
    "order_index": 90,
    "title": "#090 C++ Algorithm Problem 90",
    "slug": "algorithms-090-c-algorithm-problem-90",
    "description": "Solve algorithmic challenge #90 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 90 10",
        "output": "Algorithm #90 executed with optimal time complexity (Result: 900)",
        "explanation": "Executes logic for C++ Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000091",
    "book": "algorithms",
    "order_index": 91,
    "title": "#091 C++ Algorithm Problem 91",
    "slug": "algorithms-091-c-algorithm-problem-91",
    "description": "Solve algorithmic challenge #91 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 91 10",
        "output": "Algorithm #91 executed with optimal time complexity (Result: 910)",
        "explanation": "Executes logic for C++ Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000092",
    "book": "algorithms",
    "order_index": 92,
    "title": "#092 C++ Algorithm Problem 92",
    "slug": "algorithms-092-c-algorithm-problem-92",
    "description": "Solve algorithmic challenge #92 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 92 10",
        "output": "Algorithm #92 executed with optimal time complexity (Result: 920)",
        "explanation": "Executes logic for C++ Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000093",
    "book": "algorithms",
    "order_index": 93,
    "title": "#093 C++ Algorithm Problem 93",
    "slug": "algorithms-093-c-algorithm-problem-93",
    "description": "Solve algorithmic challenge #93 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 93 10",
        "output": "Algorithm #93 executed with optimal time complexity (Result: 930)",
        "explanation": "Executes logic for C++ Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000094",
    "book": "algorithms",
    "order_index": 94,
    "title": "#094 C++ Algorithm Problem 94",
    "slug": "algorithms-094-c-algorithm-problem-94",
    "description": "Solve algorithmic challenge #94 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 94 10",
        "output": "Algorithm #94 executed with optimal time complexity (Result: 940)",
        "explanation": "Executes logic for C++ Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000095",
    "book": "algorithms",
    "order_index": 95,
    "title": "#095 C++ Algorithm Problem 95",
    "slug": "algorithms-095-c-algorithm-problem-95",
    "description": "Solve algorithmic challenge #95 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 95 10",
        "output": "Algorithm #95 executed with optimal time complexity (Result: 950)",
        "explanation": "Executes logic for C++ Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000096",
    "book": "algorithms",
    "order_index": 96,
    "title": "#096 C++ Algorithm Problem 96",
    "slug": "algorithms-096-c-algorithm-problem-96",
    "description": "Solve algorithmic challenge #96 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 96 10",
        "output": "Algorithm #96 executed with optimal time complexity (Result: 960)",
        "explanation": "Executes logic for C++ Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000097",
    "book": "algorithms",
    "order_index": 97,
    "title": "#097 C++ Algorithm Problem 97",
    "slug": "algorithms-097-c-algorithm-problem-97",
    "description": "Solve algorithmic challenge #97 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 97 10",
        "output": "Algorithm #97 executed with optimal time complexity (Result: 970)",
        "explanation": "Executes logic for C++ Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000098",
    "book": "algorithms",
    "order_index": 98,
    "title": "#098 C++ Algorithm Problem 98",
    "slug": "algorithms-098-c-algorithm-problem-98",
    "description": "Solve algorithmic challenge #98 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 98 10",
        "output": "Algorithm #98 executed with optimal time complexity (Result: 980)",
        "explanation": "Executes logic for C++ Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000099",
    "book": "algorithms",
    "order_index": 99,
    "title": "#099 C++ Algorithm Problem 99",
    "slug": "algorithms-099-c-algorithm-problem-99",
    "description": "Solve algorithmic challenge #99 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 99 10",
        "output": "Algorithm #99 executed with optimal time complexity (Result: 990)",
        "explanation": "Executes logic for C++ Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6014-000000000100",
    "book": "algorithms",
    "order_index": 100,
    "title": "#100 C++ Algorithm Problem 100",
    "slug": "algorithms-100-c-algorithm-problem-100",
    "description": "Solve algorithmic challenge #100 leveraging STL <algorithm>, <numeric>, sorting, partitioning, or binary search optimizations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ STL Algorithms & Numerical Operations",
    "tags": [
      "Algorithms",
      "std::sort",
      "Binary Search",
      "std::transform",
      "STL",
      "Optimization"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ALG_RUN 100 10",
        "output": "Algorithm #100 executed with optimal time complexity (Result: 1000)",
        "explanation": "Executes logic for C++ Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// C++ Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# C++ Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// C++ Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
