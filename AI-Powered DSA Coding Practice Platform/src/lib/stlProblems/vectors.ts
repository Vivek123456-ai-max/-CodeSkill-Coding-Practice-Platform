import { Problem } from '../../types/problem';

export const VECTORS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-6006-000000000001",
    "book": "vectors",
    "order_index": 1,
    "title": "#001 Vector Initialization and Push Back",
    "slug": "vectors-001-vector-initialization-and-push-back",
    "description": "Initialize an empty `std::vector<int>`, push 5 values, and print its elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 10 20 30 40 50",
        "output": "Vector: [10, 20, 30, 40, 50] (Size: 5)",
        "explanation": "Executes logic for Vector Initialization and Push Back."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Initialization and Push Back\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Initialization and Push Back\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Initialization and Push Back\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000002",
    "book": "vectors",
    "order_index": 2,
    "title": "#002 Vector Capacity vs Size Tracking",
    "slug": "vectors-002-vector-capacity-vs-size-tracking",
    "description": "Track how `.capacity()` changes relative to `.size()` as 10 elements are appended.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Append 10 items",
        "output": "Size: 10, Capacity: 16 (Dynamic allocation confirmed)",
        "explanation": "Executes logic for Vector Capacity vs Size Tracking."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Capacity vs Size Tracking\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Capacity vs Size Tracking\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Capacity vs Size Tracking\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000003",
    "book": "vectors",
    "order_index": 3,
    "title": "#003 Vector Reserve Optimization (`reserve()`)",
    "slug": "vectors-003-vector-reserve-optimization-reserve",
    "description": "Use `.reserve(N)` to allocate memory up-front, preventing multiple reallocations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Reserve 1000 items",
        "output": "Allocated 1000 capacity upfront (Reallocations: 0)",
        "explanation": "Executes logic for Vector Reserve Optimization (`reserve()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Reserve Optimization (`reserve()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Reserve Optimization (`reserve()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Reserve Optimization (`reserve()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000004",
    "book": "vectors",
    "order_index": 4,
    "title": "#004 Vector Resize Method (`resize()`)",
    "slug": "vectors-004-vector-resize-method-resize",
    "description": "Use `.resize(N, default_val)` to grow or shrink vector and initialize new slots.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Resize(5, 42)",
        "output": "Vector: [42, 42, 42, 42, 42]",
        "explanation": "Executes logic for Vector Resize Method (`resize()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Resize Method (`resize()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Resize Method (`resize()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Resize Method (`resize()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000005",
    "book": "vectors",
    "order_index": 5,
    "title": "#005 Vector Element Access: Front, Back, Data Pointer",
    "slug": "vectors-005-vector-element-access-front-back-data-pointer",
    "description": "Access first element with `.front()`, last with `.back()`, and raw array with `.data()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector [5, 10, 15, 20]",
        "output": "Front: 5, Back: 20, Data[1]: 10",
        "explanation": "Executes logic for Vector Element Access: Front, Back, Data Pointer."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Element Access: Front, Back, Data Pointer\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Element Access: Front, Back, Data Pointer\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Element Access: Front, Back, Data Pointer\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000006",
    "book": "vectors",
    "order_index": 6,
    "title": "#006 Vector Pop Back Operation",
    "slug": "vectors-006-vector-pop-back-operation",
    "description": "Remove last element in O(1) time using `.pop_back()` and verify size reduction.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 10, 20 -> Pop",
        "output": "Popped: 20, Remaining: [10] (Size: 1)",
        "explanation": "Executes logic for Vector Pop Back Operation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Pop Back Operation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Pop Back Operation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Pop Back Operation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000007",
    "book": "vectors",
    "order_index": 7,
    "title": "#007 Vector Insertion at Index (`insert()`)",
    "slug": "vectors-007-vector-insertion-at-index-insert",
    "description": "Insert a single value or multiple values at a specific iterator position in vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 99 at index 2 in [1, 2, 3, 4]",
        "output": "Result: [1, 2, 99, 3, 4]",
        "explanation": "Executes logic for Vector Insertion at Index (`insert()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Insertion at Index (`insert()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Insertion at Index (`insert()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Insertion at Index (`insert()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000008",
    "book": "vectors",
    "order_index": 8,
    "title": "#008 Vector Erase Single Element (`erase()`)",
    "slug": "vectors-008-vector-erase-single-element-erase",
    "description": "Erase element at index K using iterator arithmetic `vec.erase(vec.begin() + K)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase index 1 from [10, 20, 30]",
        "output": "Result: [10, 30]",
        "explanation": "Executes logic for Vector Erase Single Element (`erase()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Erase Single Element (`erase()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Erase Single Element (`erase()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Erase Single Element (`erase()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000009",
    "book": "vectors",
    "order_index": 9,
    "title": "#009 Vector Erase Range of Elements",
    "slug": "vectors-009-vector-erase-range-of-elements",
    "description": "Erase a contiguous slice from index L to R using `vec.erase(first, last)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Erase range [1, 3) from [10, 20, 30, 40, 50]",
        "output": "Result: [10, 40, 50]",
        "explanation": "Executes logic for Vector Erase Range of Elements."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Erase Range of Elements\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Erase Range of Elements\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Erase Range of Elements\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000010",
    "book": "vectors",
    "order_index": 10,
    "title": "#010 Vector Clear and Empty State",
    "slug": "vectors-010-vector-clear-and-empty-state",
    "description": "Clear all elements using `.clear()` and check `.empty()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Clear vector",
        "output": "Size after clear: 0, Empty: true (Capacity retained)",
        "explanation": "Executes logic for Vector Clear and Empty State."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Clear and Empty State\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Clear and Empty State\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Clear and Empty State\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000011",
    "book": "vectors",
    "order_index": 11,
    "title": "#011 Shrink to Fit (`shrink_to_fit()`)",
    "slug": "vectors-011-shrink-to-fit-shrink-to-fit",
    "description": "Release unused excess capacity back to the system using `vec.shrink_to_fit()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Size 5, Capacity 16 -> Shrink",
        "output": "Capacity reduced to match size: 5",
        "explanation": "Executes logic for Shrink to Fit (`shrink_to_fit()`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Shrink to Fit (`shrink_to_fit()`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shrink to Fit (`shrink_to_fit()`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shrink to Fit (`shrink_to_fit()`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000012",
    "book": "vectors",
    "order_index": 12,
    "title": "#012 Vector of Vectors (2D Dynamic Matrix)",
    "slug": "vectors-012-vector-of-vectors-2d-dynamic-matrix",
    "description": "Create N x M 2D vector `vector<vector<int>>`, populate with grid values, and print.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2x3 Matrix [[1,2,3],[4,5,6]]",
        "output": "Matrix row 0: [1, 2, 3]\nMatrix row 1: [4, 5, 6]",
        "explanation": "Executes logic for Vector of Vectors (2D Dynamic Matrix)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector of Vectors (2D Dynamic Matrix)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector of Vectors (2D Dynamic Matrix)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector of Vectors (2D Dynamic Matrix)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000013",
    "book": "vectors",
    "order_index": 13,
    "title": "#013 Jagged 2D Vector (Irregular Rows)",
    "slug": "vectors-013-jagged-2d-vector-irregular-rows",
    "description": "Create a 2D vector where each row has a different number of elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Row 0: 2 items, Row 1: 4 items",
        "output": "Row 0: [1, 2]\nRow 1: [3, 4, 5, 6]",
        "explanation": "Executes logic for Jagged 2D Vector (Irregular Rows)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Jagged 2D Vector (Irregular Rows)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Jagged 2D Vector (Irregular Rows)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Jagged 2D Vector (Irregular Rows)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000014",
    "book": "vectors",
    "order_index": 14,
    "title": "#014 Vector Sorting with std::sort (Ascending & Descending)",
    "slug": "vectors-014-vector-sorting-with-std-sort-ascending-descending",
    "description": "Sort integer vector in ascending order and descending order with `greater<int>()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[5, 2, 8, 1, 9]",
        "output": "Ascending: [1, 2, 5, 8, 9] | Descending: [9, 8, 5, 2, 1]",
        "explanation": "Executes logic for Vector Sorting with std::sort (Ascending & Descending)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Sorting with std::sort (Ascending & Descending)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Sorting with std::sort (Ascending & Descending)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Sorting with std::sort (Ascending & Descending)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000015",
    "book": "vectors",
    "order_index": 15,
    "title": "#015 Vector Reversal with std::reverse",
    "slug": "vectors-015-vector-reversal-with-std-reverse",
    "description": "Reverse a vector in-place in O(N) time using `std::reverse`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5]",
        "output": "Reversed: [5, 4, 3, 2, 1]",
        "explanation": "Executes logic for Vector Reversal with std::reverse."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Reversal with std::reverse\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Reversal with std::reverse\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Reversal with std::reverse\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000016",
    "book": "vectors",
    "order_index": 16,
    "title": "#016 Finding Min and Max in Vector",
    "slug": "vectors-016-finding-min-and-max-in-vector",
    "description": "Find minimum and maximum values using `std::min_element` and `std::max_element`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[14, 28, 7, 92, 45]",
        "output": "Min: 7, Max: 92",
        "explanation": "Executes logic for Finding Min and Max in Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Finding Min and Max in Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Finding Min and Max in Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Finding Min and Max in Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000017",
    "book": "vectors",
    "order_index": 17,
    "title": "#017 Vector Sum and Average with std::accumulate",
    "slug": "vectors-017-vector-sum-and-average-with-std-accumulate",
    "description": "Compute sum and average of vector elements using `std::accumulate`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[10, 20, 30, 40]",
        "output": "Sum: 100, Average: 25.0",
        "explanation": "Executes logic for Vector Sum and Average with std::accumulate."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Sum and Average with std::accumulate\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Sum and Average with std::accumulate\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Sum and Average with std::accumulate\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000018",
    "book": "vectors",
    "order_index": 18,
    "title": "#018 Vector Deduplication: Sort + Unique + Erase",
    "slug": "vectors-018-vector-deduplication-sort-unique-erase",
    "description": "Remove all duplicate values from a vector preserving sorted order.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4, 2, 4, 1, 2, 3, 1]",
        "output": "Unique Sorted: [1, 2, 3, 4]",
        "explanation": "Executes logic for Vector Deduplication: Sort + Unique + Erase."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Deduplication: Sort + Unique + Erase\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Deduplication: Sort + Unique + Erase\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Deduplication: Sort + Unique + Erase\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000019",
    "book": "vectors",
    "order_index": 19,
    "title": "#019 Vector Rotation with std::rotate",
    "slug": "vectors-019-vector-rotation-with-std-rotate",
    "description": "Rotate vector elements left by K positions using `std::rotate`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rotate [1, 2, 3, 4, 5] by 2",
        "output": "Rotated: [3, 4, 5, 1, 2]",
        "explanation": "Executes logic for Vector Rotation with std::rotate."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Rotation with std::rotate\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Rotation with std::rotate\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Rotation with std::rotate\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000020",
    "book": "vectors",
    "order_index": 20,
    "title": "#020 Vector Slicing (Subvector Extraction)",
    "slug": "vectors-020-vector-slicing-subvector-extraction",
    "description": "Extract subvector from index L to R using iterator range constructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Slice [10, 20, 30, 40, 50] from 1 to 3",
        "output": "Subvector: [20, 30, 40]",
        "explanation": "Executes logic for Vector Slicing (Subvector Extraction)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Slicing (Subvector Extraction)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Slicing (Subvector Extraction)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Slicing (Subvector Extraction)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000021",
    "book": "vectors",
    "order_index": 21,
    "title": "#021 Vector Concatenation (Joining Two Vectors)",
    "slug": "vectors-021-vector-concatenation-joining-two-vectors",
    "description": "Append all elements of vector B to vector A using `insert(end(), B.begin(), B.end())`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "A: [1, 2] + B: [3, 4, 5]",
        "output": "Combined: [1, 2, 3, 4, 5]",
        "explanation": "Executes logic for Vector Concatenation (Joining Two Vectors)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Concatenation (Joining Two Vectors)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Concatenation (Joining Two Vectors)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Concatenation (Joining Two Vectors)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000022",
    "book": "vectors",
    "order_index": 22,
    "title": "#022 Vector Prefix Sums Array Computation",
    "slug": "vectors-022-vector-prefix-sums-array-computation",
    "description": "Compute running prefix sum vector where `pref[i] = pref[i-1] + arr[i]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[2, 4, 6, 8]",
        "output": "Prefix Sums: [2, 6, 12, 20]",
        "explanation": "Executes logic for Vector Prefix Sums Array Computation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Prefix Sums Array Computation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Prefix Sums Array Computation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Prefix Sums Array Computation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000023",
    "book": "vectors",
    "order_index": 23,
    "title": "#023 Vector Difference Array (Range Updates in O(1))",
    "slug": "vectors-023-vector-difference-array-range-updates-in-o-1",
    "description": "Apply range addition updates `[L, R] += val` in O(1) using difference array.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Add 5 to range [1, 3] on [0, 0, 0, 0, 0]",
        "output": "Result after prefix sum: [0, 5, 5, 5, 0]",
        "explanation": "Executes logic for Vector Difference Array (Range Updates in O(1))."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Difference Array (Range Updates in O(1))\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Difference Array (Range Updates in O(1))\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Difference Array (Range Updates in O(1))\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000024",
    "book": "vectors",
    "order_index": 24,
    "title": "#024 Vector Binary Search with std::binary_search",
    "slug": "vectors-024-vector-binary-search-with-std-binary-search",
    "description": "Check if target exists in sorted vector in O(log N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Search 42 in [10, 20, 30, 42, 50]",
        "output": "Found: true",
        "explanation": "Executes logic for Vector Binary Search with std::binary_search."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Binary Search with std::binary_search\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Binary Search with std::binary_search\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Binary Search with std::binary_search\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000025",
    "book": "vectors",
    "order_index": 25,
    "title": "#025 Vector Lower Bound and Upper Bound",
    "slug": "vectors-025-vector-lower-bound-and-upper-bound",
    "description": "Find first position `>= val` and first position `> val` in sorted vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Bounds for 30 in [10, 20, 30, 30, 40]",
        "output": "Lower Bound Index: 2, Upper Bound Index: 4",
        "explanation": "Executes logic for Vector Lower Bound and Upper Bound."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Lower Bound and Upper Bound\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Lower Bound and Upper Bound\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Lower Bound and Upper Bound\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000026",
    "book": "vectors",
    "order_index": 26,
    "title": "#026 Vector Element Counting with std::count and count_if",
    "slug": "vectors-026-vector-element-counting-with-std-count-and-count-i",
    "description": "Count occurrences of target and count elements matching predicate.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Count evens in [1, 2, 3, 4, 5, 6]",
        "output": "Count of 2: 1, Even count: 3",
        "explanation": "Executes logic for Vector Element Counting with std::count and count_if."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Element Counting with std::count and count_if\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Element Counting with std::count and count_if\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Element Counting with std::count and count_if\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000027",
    "book": "vectors",
    "order_index": 27,
    "title": "#027 Vector Partitioning with std::partition",
    "slug": "vectors-027-vector-partitioning-with-std-partition",
    "description": "Reorder vector so elements matching predicate (e.g. even) precede other elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Partition evens in [1, 2, 3, 4, 5, 6]",
        "output": "Partitioned: [6, 2, 4, 3, 5, 1] (Evens first)",
        "explanation": "Executes logic for Vector Partitioning with std::partition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Partitioning with std::partition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Partitioning with std::partition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Partitioning with std::partition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000028",
    "book": "vectors",
    "order_index": 28,
    "title": "#028 Vector Stable Partition with std::stable_partition",
    "slug": "vectors-028-vector-stable-partition-with-std-stable-partition",
    "description": "Partition vector preserving original relative order among matching elements.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stable partition evens in [1, 2, 3, 4, 5, 6]",
        "output": "Stable Partitioned: [2, 4, 6, 1, 3, 5]",
        "explanation": "Executes logic for Vector Stable Partition with std::stable_partition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Stable Partition with std::stable_partition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Stable Partition with std::stable_partition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Stable Partition with std::stable_partition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000029",
    "book": "vectors",
    "order_index": 29,
    "title": "#029 Vector Transformation with std::transform",
    "slug": "vectors-029-vector-transformation-with-std-transform",
    "description": "Multiply every vector element by 3 and store in result vector using `std::transform`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Transform [1, 2, 3, 4]",
        "output": "Transformed: [3, 6, 9, 12]",
        "explanation": "Executes logic for Vector Transformation with std::transform."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Transformation with std::transform\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Transformation with std::transform\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Transformation with std::transform\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000030",
    "book": "vectors",
    "order_index": 30,
    "title": "#030 Vector of Structs Sorting by Multiple Keys",
    "slug": "vectors-030-vector-of-structs-sorting-by-multiple-keys",
    "description": "Sort vector of Employee structs primarily by Department, then by Salary descending.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort employees",
        "output": "Sorted: Dept A ($80k), Dept A ($60k), Dept B ($90k)",
        "explanation": "Executes logic for Vector of Structs Sorting by Multiple Keys."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector of Structs Sorting by Multiple Keys\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector of Structs Sorting by Multiple Keys\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector of Structs Sorting by Multiple Keys\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000031",
    "book": "vectors",
    "order_index": 31,
    "title": "#031 Vector Boolean Specialization (`vector<bool>`)",
    "slug": "vectors-031-vector-boolean-specialization-vector-bool",
    "description": "Demonstrate bit-packed 1-bit-per-element storage in `std::vector<bool>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector<bool> with 8 flags",
        "output": "Stored 8 booleans in 1 byte of memory",
        "explanation": "Executes logic for Vector Boolean Specialization (`vector<bool>`)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Boolean Specialization (`vector<bool>`)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Boolean Specialization (`vector<bool>`)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Boolean Specialization (`vector<bool>`)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000032",
    "book": "vectors",
    "order_index": 32,
    "title": "#032 Vector Move Semantics (O(1) Ownership Transfer)",
    "slug": "vectors-032-vector-move-semantics-o-1-ownership-transfer",
    "description": "Move large vector A into vector B, observing O(1) pointer swap with zero copies.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Move 1,000,000 ints",
        "output": "Vector moved in O(1) time (Source size: 0, Dest size: 1000000)",
        "explanation": "Executes logic for Vector Move Semantics (O(1) Ownership Transfer)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Move Semantics (O(1) Ownership Transfer)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Move Semantics (O(1) Ownership Transfer)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Move Semantics (O(1) Ownership Transfer)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000033",
    "book": "vectors",
    "order_index": 33,
    "title": "#033 Flattening 2D Vector into 1D Vector",
    "slug": "vectors-033-flattening-2d-vector-into-1d-vector",
    "description": "Convert N x M 2D grid vector into contiguous 1D array vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "2x2 [[1,2],[3,4]]",
        "output": "Flattened: [1, 2, 3, 4]",
        "explanation": "Executes logic for Flattening 2D Vector into 1D Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Flattening 2D Vector into 1D Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Flattening 2D Vector into 1D Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Flattening 2D Vector into 1D Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000034",
    "book": "vectors",
    "order_index": 34,
    "title": "#034 Unflattening 1D Vector into 2D Grid",
    "slug": "vectors-034-unflattening-1d-vector-into-2d-grid",
    "description": "Reshape 1D vector of length N*M into N x M 2D matrix vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4, 5, 6] into 2x3",
        "output": "Reshaped: [[1, 2, 3], [4, 5, 6]]",
        "explanation": "Executes logic for Unflattening 1D Vector into 2D Grid."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Unflattening 1D Vector into 2D Grid\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Unflattening 1D Vector into 2D Grid\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Unflattening 1D Vector into 2D Grid\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000035",
    "book": "vectors",
    "order_index": 35,
    "title": "#035 Vector Transpose for 2D Square Matrix",
    "slug": "vectors-035-vector-transpose-for-2d-square-matrix",
    "description": "Transpose an N x N 2D vector in-place by swapping `grid[i][j]` with `grid[j][i]`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[[1,2],[3,4]]",
        "output": "Transposed: [[1,3],[2,4]]",
        "explanation": "Executes logic for Vector Transpose for 2D Square Matrix."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Transpose for 2D Square Matrix\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Transpose for 2D Square Matrix\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Transpose for 2D Square Matrix\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000036",
    "book": "vectors",
    "order_index": 36,
    "title": "#036 Matrix 90-Degree Clockwise Rotation with Vectors",
    "slug": "vectors-036-matrix-90-degree-clockwise-rotation-with-vectors",
    "description": "Rotate 2D vector by 90 degrees clockwise (Transpose + Reverse each row).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[[1,2],[3,4]]",
        "output": "Rotated 90 deg: [[3,1],[4,2]]",
        "explanation": "Executes logic for Matrix 90-Degree Clockwise Rotation with Vectors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Matrix 90-Degree Clockwise Rotation with Vectors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Matrix 90-Degree Clockwise Rotation with Vectors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Matrix 90-Degree Clockwise Rotation with Vectors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000037",
    "book": "vectors",
    "order_index": 37,
    "title": "#037 Pascal Triangle Generation using 2D Vector",
    "slug": "vectors-037-pascal-triangle-generation-using-2d-vector",
    "description": "Generate first N rows of Pascal's Triangle using dynamic 2D vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "N = 4",
        "output": "Row 0: [1]\nRow 1: [1, 1]\nRow 2: [1, 2, 1]\nRow 3: [1, 3, 3, 1]",
        "explanation": "Executes logic for Pascal Triangle Generation using 2D Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Pascal Triangle Generation using 2D Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pascal Triangle Generation using 2D Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pascal Triangle Generation using 2D Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000038",
    "book": "vectors",
    "order_index": 38,
    "title": "#038 Spiral Matrix Traversal using 2D Vector",
    "slug": "vectors-038-spiral-matrix-traversal-using-2d-vector",
    "description": "Traverse N x M 2D vector in spiral order from outer boundary to center.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "3x3 Matrix 1..9",
        "output": "Spiral Order: [1, 2, 3, 6, 9, 8, 7, 4, 5]",
        "explanation": "Executes logic for Spiral Matrix Traversal using 2D Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Spiral Matrix Traversal using 2D Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Spiral Matrix Traversal using 2D Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Spiral Matrix Traversal using 2D Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000039",
    "book": "vectors",
    "order_index": 39,
    "title": "#039 Subarray with Maximum Sum (Kadane's Algorithm on Vector)",
    "slug": "vectors-039-subarray-with-maximum-sum-kadane-s-algorithm-on-ve",
    "description": "Find maximum contiguous subarray sum in integer vector in O(N) time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        "output": "Max Subarray Sum: 6 (Subarray: [4, -1, 2, 1])",
        "explanation": "Executes logic for Subarray with Maximum Sum (Kadane's Algorithm on Vector)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Subarray with Maximum Sum (Kadane's Algorithm on Vector)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Subarray with Maximum Sum (Kadane's Algorithm on Vector)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Subarray with Maximum Sum (Kadane's Algorithm on Vector)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000040",
    "book": "vectors",
    "order_index": 40,
    "title": "#040 Two Sum Problem with Vector and Two Pointers",
    "slug": "vectors-040-two-sum-problem-with-vector-and-two-pointers",
    "description": "Find pair of indices in sorted vector whose elements sum to target.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sorted [2, 7, 11, 15], Target 9",
        "output": "Pair found: Indices 0 and 1 (2 + 7 = 9)",
        "explanation": "Executes logic for Two Sum Problem with Vector and Two Pointers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Two Sum Problem with Vector and Two Pointers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Two Sum Problem with Vector and Two Pointers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Two Sum Problem with Vector and Two Pointers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000041",
    "book": "vectors",
    "order_index": 41,
    "title": "#041 Three Sum Problem with Vector",
    "slug": "vectors-041-three-sum-problem-with-vector",
    "description": "Find all unique triplets in vector that sum to zero.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[-1, 0, 1, 2, -1, -4]",
        "output": "Triplets: [[-1, -1, 2], [-1, 0, 1]]",
        "explanation": "Executes logic for Three Sum Problem with Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Three Sum Problem with Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Three Sum Problem with Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Three Sum Problem with Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000042",
    "book": "vectors",
    "order_index": 42,
    "title": "#042 Merge Intervals using Vector of Pairs",
    "slug": "vectors-042-merge-intervals-using-vector-of-pairs",
    "description": "Merge overlapping interval pairs in vector (e.g. `[1,3], [2,6] -> [1,6]`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[[1,3], [2,6], [8,10], [15,18]]",
        "output": "Merged: [[1,6], [8,10], [15,18]]",
        "explanation": "Executes logic for Merge Intervals using Vector of Pairs."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Merge Intervals using Vector of Pairs\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Merge Intervals using Vector of Pairs\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Merge Intervals using Vector of Pairs\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000043",
    "book": "vectors",
    "order_index": 43,
    "title": "#043 Trapping Rainwater Problem with Vector Heights",
    "slug": "vectors-043-trapping-rainwater-problem-with-vector-heights",
    "description": "Compute total units of rainwater trapped between elevation bars in vector.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "Trapped Water: 6 units",
        "explanation": "Executes logic for Trapping Rainwater Problem with Vector Heights."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Trapping Rainwater Problem with Vector Heights\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Trapping Rainwater Problem with Vector Heights\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Trapping Rainwater Problem with Vector Heights\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000044",
    "book": "vectors",
    "order_index": 44,
    "title": "#044 Product of Array Except Self without Division",
    "slug": "vectors-044-product-of-array-except-self-without-division",
    "description": "Compute vector where `res[i]` is product of all elements except `arr[i]` in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3, 4]",
        "output": "Output: [24, 12, 8, 6]",
        "explanation": "Executes logic for Product of Array Except Self without Division."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Product of Array Except Self without Division\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Product of Array Except Self without Division\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Product of Array Except Self without Division\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000045",
    "book": "vectors",
    "order_index": 45,
    "title": "#045 Next Permutation on Vector with std::next_permutation",
    "slug": "vectors-045-next-permutation-on-vector-with-std-next-permutati",
    "description": "Rearrange vector into lexicographically next greater permutation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1, 2, 3]",
        "output": "Next Permutation: [1, 3, 2]",
        "explanation": "Executes logic for Next Permutation on Vector with std::next_permutation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Next Permutation on Vector with std::next_permutation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Next Permutation on Vector with std::next_permutation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Next Permutation on Vector with std::next_permutation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000046",
    "book": "vectors",
    "order_index": 46,
    "title": "#046 Longest Consecutive Sequence in Vector",
    "slug": "vectors-046-longest-consecutive-sequence-in-vector",
    "description": "Find length of longest sequence of consecutive numbers in unsorted vector in O(N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[100, 4, 200, 1, 3, 2]",
        "output": "Longest Consecutive: 4 ([1, 2, 3, 4])",
        "explanation": "Executes logic for Longest Consecutive Sequence in Vector."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Longest Consecutive Sequence in Vector\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Longest Consecutive Sequence in Vector\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Longest Consecutive Sequence in Vector\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000047",
    "book": "vectors",
    "order_index": 47,
    "title": "#047 Majority Element in Vector (Boyer-Moore Voting)",
    "slug": "vectors-047-majority-element-in-vector-boyer-moore-voting",
    "description": "Find element appearing more than N/2 times in vector in O(N) time and O(1) space.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[2, 2, 1, 1, 1, 2, 2]",
        "output": "Majority Element: 2",
        "explanation": "Executes logic for Majority Element in Vector (Boyer-Moore Voting)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Majority Element in Vector (Boyer-Moore Voting)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Majority Element in Vector (Boyer-Moore Voting)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Majority Element in Vector (Boyer-Moore Voting)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000048",
    "book": "vectors",
    "order_index": 48,
    "title": "#048 Rotate Vector by K Steps In-Place (3-Reversal Algorithm)",
    "slug": "vectors-048-rotate-vector-by-k-steps-in-place-3-reversal-algor",
    "description": "Rotate vector by K steps using three reversals without extra memory.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rotate [1, 2, 3, 4, 5, 6, 7] by 3",
        "output": "Rotated: [5, 6, 7, 1, 2, 3, 4]",
        "explanation": "Executes logic for Rotate Vector by K Steps In-Place (3-Reversal Algorithm)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Rotate Vector by K Steps In-Place (3-Reversal Algorithm)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Rotate Vector by K Steps In-Place (3-Reversal Algorithm)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Rotate Vector by K Steps In-Place (3-Reversal Algorithm)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000049",
    "book": "vectors",
    "order_index": 49,
    "title": "#049 Container with Most Water (Two Pointers on Vector)",
    "slug": "vectors-049-container-with-most-water-two-pointers-on-vector",
    "description": "Find two lines that together with x-axis form container holding maximum water.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[1,8,6,2,5,4,8,3,7]",
        "output": "Max Area: 49",
        "explanation": "Executes logic for Container with Most Water (Two Pointers on Vector)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Container with Most Water (Two Pointers on Vector)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Container with Most Water (Two Pointers on Vector)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Container with Most Water (Two Pointers on Vector)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000050",
    "book": "vectors",
    "order_index": 50,
    "title": "#050 Vector Memory Layout: Contiguous Memory Verification",
    "slug": "vectors-050-vector-memory-layout-contiguous-memory-verificatio",
    "description": "Verify contiguous memory address difference `&vec[i+1] - &vec[i] == 1`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Address inspection",
        "output": "Contiguous buffer verified: Exact 4-byte interval per int",
        "explanation": "Executes logic for Vector Memory Layout: Contiguous Memory Verification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Memory Layout: Contiguous Memory Verification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Memory Layout: Contiguous Memory Verification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Memory Layout: Contiguous Memory Verification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000051",
    "book": "vectors",
    "order_index": 51,
    "title": "#051 Vector Algorithm Problem 51",
    "slug": "vectors-051-vector-algorithm-problem-51",
    "description": "Solve vector data structure manipulation problem #51 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 51 10",
        "output": "Vector problem #51 resolved successfully (Result: 510)",
        "explanation": "Executes logic for Vector Algorithm Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000052",
    "book": "vectors",
    "order_index": 52,
    "title": "#052 Vector Algorithm Problem 52",
    "slug": "vectors-052-vector-algorithm-problem-52",
    "description": "Solve vector data structure manipulation problem #52 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 52 10",
        "output": "Vector problem #52 resolved successfully (Result: 520)",
        "explanation": "Executes logic for Vector Algorithm Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000053",
    "book": "vectors",
    "order_index": 53,
    "title": "#053 Vector Algorithm Problem 53",
    "slug": "vectors-053-vector-algorithm-problem-53",
    "description": "Solve vector data structure manipulation problem #53 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 53 10",
        "output": "Vector problem #53 resolved successfully (Result: 530)",
        "explanation": "Executes logic for Vector Algorithm Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000054",
    "book": "vectors",
    "order_index": 54,
    "title": "#054 Vector Algorithm Problem 54",
    "slug": "vectors-054-vector-algorithm-problem-54",
    "description": "Solve vector data structure manipulation problem #54 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 54 10",
        "output": "Vector problem #54 resolved successfully (Result: 540)",
        "explanation": "Executes logic for Vector Algorithm Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000055",
    "book": "vectors",
    "order_index": 55,
    "title": "#055 Vector Algorithm Problem 55",
    "slug": "vectors-055-vector-algorithm-problem-55",
    "description": "Solve vector data structure manipulation problem #55 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 55 10",
        "output": "Vector problem #55 resolved successfully (Result: 550)",
        "explanation": "Executes logic for Vector Algorithm Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000056",
    "book": "vectors",
    "order_index": 56,
    "title": "#056 Vector Algorithm Problem 56",
    "slug": "vectors-056-vector-algorithm-problem-56",
    "description": "Solve vector data structure manipulation problem #56 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 56 10",
        "output": "Vector problem #56 resolved successfully (Result: 560)",
        "explanation": "Executes logic for Vector Algorithm Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000057",
    "book": "vectors",
    "order_index": 57,
    "title": "#057 Vector Algorithm Problem 57",
    "slug": "vectors-057-vector-algorithm-problem-57",
    "description": "Solve vector data structure manipulation problem #57 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 57 10",
        "output": "Vector problem #57 resolved successfully (Result: 570)",
        "explanation": "Executes logic for Vector Algorithm Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000058",
    "book": "vectors",
    "order_index": 58,
    "title": "#058 Vector Algorithm Problem 58",
    "slug": "vectors-058-vector-algorithm-problem-58",
    "description": "Solve vector data structure manipulation problem #58 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 58 10",
        "output": "Vector problem #58 resolved successfully (Result: 580)",
        "explanation": "Executes logic for Vector Algorithm Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000059",
    "book": "vectors",
    "order_index": 59,
    "title": "#059 Vector Algorithm Problem 59",
    "slug": "vectors-059-vector-algorithm-problem-59",
    "description": "Solve vector data structure manipulation problem #59 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 59 10",
        "output": "Vector problem #59 resolved successfully (Result: 590)",
        "explanation": "Executes logic for Vector Algorithm Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000060",
    "book": "vectors",
    "order_index": 60,
    "title": "#060 Vector Algorithm Problem 60",
    "slug": "vectors-060-vector-algorithm-problem-60",
    "description": "Solve vector data structure manipulation problem #60 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 60 10",
        "output": "Vector problem #60 resolved successfully (Result: 600)",
        "explanation": "Executes logic for Vector Algorithm Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000061",
    "book": "vectors",
    "order_index": 61,
    "title": "#061 Vector Algorithm Problem 61",
    "slug": "vectors-061-vector-algorithm-problem-61",
    "description": "Solve vector data structure manipulation problem #61 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 61 10",
        "output": "Vector problem #61 resolved successfully (Result: 610)",
        "explanation": "Executes logic for Vector Algorithm Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000062",
    "book": "vectors",
    "order_index": 62,
    "title": "#062 Vector Algorithm Problem 62",
    "slug": "vectors-062-vector-algorithm-problem-62",
    "description": "Solve vector data structure manipulation problem #62 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 62 10",
        "output": "Vector problem #62 resolved successfully (Result: 620)",
        "explanation": "Executes logic for Vector Algorithm Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000063",
    "book": "vectors",
    "order_index": 63,
    "title": "#063 Vector Algorithm Problem 63",
    "slug": "vectors-063-vector-algorithm-problem-63",
    "description": "Solve vector data structure manipulation problem #63 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 63 10",
        "output": "Vector problem #63 resolved successfully (Result: 630)",
        "explanation": "Executes logic for Vector Algorithm Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000064",
    "book": "vectors",
    "order_index": 64,
    "title": "#064 Vector Algorithm Problem 64",
    "slug": "vectors-064-vector-algorithm-problem-64",
    "description": "Solve vector data structure manipulation problem #64 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 64 10",
        "output": "Vector problem #64 resolved successfully (Result: 640)",
        "explanation": "Executes logic for Vector Algorithm Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000065",
    "book": "vectors",
    "order_index": 65,
    "title": "#065 Vector Algorithm Problem 65",
    "slug": "vectors-065-vector-algorithm-problem-65",
    "description": "Solve vector data structure manipulation problem #65 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 65 10",
        "output": "Vector problem #65 resolved successfully (Result: 650)",
        "explanation": "Executes logic for Vector Algorithm Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000066",
    "book": "vectors",
    "order_index": 66,
    "title": "#066 Vector Algorithm Problem 66",
    "slug": "vectors-066-vector-algorithm-problem-66",
    "description": "Solve vector data structure manipulation problem #66 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 66 10",
        "output": "Vector problem #66 resolved successfully (Result: 660)",
        "explanation": "Executes logic for Vector Algorithm Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000067",
    "book": "vectors",
    "order_index": 67,
    "title": "#067 Vector Algorithm Problem 67",
    "slug": "vectors-067-vector-algorithm-problem-67",
    "description": "Solve vector data structure manipulation problem #67 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 67 10",
        "output": "Vector problem #67 resolved successfully (Result: 670)",
        "explanation": "Executes logic for Vector Algorithm Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000068",
    "book": "vectors",
    "order_index": 68,
    "title": "#068 Vector Algorithm Problem 68",
    "slug": "vectors-068-vector-algorithm-problem-68",
    "description": "Solve vector data structure manipulation problem #68 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 68 10",
        "output": "Vector problem #68 resolved successfully (Result: 680)",
        "explanation": "Executes logic for Vector Algorithm Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000069",
    "book": "vectors",
    "order_index": 69,
    "title": "#069 Vector Algorithm Problem 69",
    "slug": "vectors-069-vector-algorithm-problem-69",
    "description": "Solve vector data structure manipulation problem #69 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 69 10",
        "output": "Vector problem #69 resolved successfully (Result: 690)",
        "explanation": "Executes logic for Vector Algorithm Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000070",
    "book": "vectors",
    "order_index": 70,
    "title": "#070 Vector Algorithm Problem 70",
    "slug": "vectors-070-vector-algorithm-problem-70",
    "description": "Solve vector data structure manipulation problem #70 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 70 10",
        "output": "Vector problem #70 resolved successfully (Result: 700)",
        "explanation": "Executes logic for Vector Algorithm Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000071",
    "book": "vectors",
    "order_index": 71,
    "title": "#071 Vector Algorithm Problem 71",
    "slug": "vectors-071-vector-algorithm-problem-71",
    "description": "Solve vector data structure manipulation problem #71 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 71 10",
        "output": "Vector problem #71 resolved successfully (Result: 710)",
        "explanation": "Executes logic for Vector Algorithm Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000072",
    "book": "vectors",
    "order_index": 72,
    "title": "#072 Vector Algorithm Problem 72",
    "slug": "vectors-072-vector-algorithm-problem-72",
    "description": "Solve vector data structure manipulation problem #72 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 72 10",
        "output": "Vector problem #72 resolved successfully (Result: 720)",
        "explanation": "Executes logic for Vector Algorithm Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000073",
    "book": "vectors",
    "order_index": 73,
    "title": "#073 Vector Algorithm Problem 73",
    "slug": "vectors-073-vector-algorithm-problem-73",
    "description": "Solve vector data structure manipulation problem #73 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 73 10",
        "output": "Vector problem #73 resolved successfully (Result: 730)",
        "explanation": "Executes logic for Vector Algorithm Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000074",
    "book": "vectors",
    "order_index": 74,
    "title": "#074 Vector Algorithm Problem 74",
    "slug": "vectors-074-vector-algorithm-problem-74",
    "description": "Solve vector data structure manipulation problem #74 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 74 10",
        "output": "Vector problem #74 resolved successfully (Result: 740)",
        "explanation": "Executes logic for Vector Algorithm Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000075",
    "book": "vectors",
    "order_index": 75,
    "title": "#075 Vector Algorithm Problem 75",
    "slug": "vectors-075-vector-algorithm-problem-75",
    "description": "Solve vector data structure manipulation problem #75 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 75 10",
        "output": "Vector problem #75 resolved successfully (Result: 750)",
        "explanation": "Executes logic for Vector Algorithm Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000076",
    "book": "vectors",
    "order_index": 76,
    "title": "#076 Vector Algorithm Problem 76",
    "slug": "vectors-076-vector-algorithm-problem-76",
    "description": "Solve vector data structure manipulation problem #76 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 76 10",
        "output": "Vector problem #76 resolved successfully (Result: 760)",
        "explanation": "Executes logic for Vector Algorithm Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000077",
    "book": "vectors",
    "order_index": 77,
    "title": "#077 Vector Algorithm Problem 77",
    "slug": "vectors-077-vector-algorithm-problem-77",
    "description": "Solve vector data structure manipulation problem #77 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 77 10",
        "output": "Vector problem #77 resolved successfully (Result: 770)",
        "explanation": "Executes logic for Vector Algorithm Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000078",
    "book": "vectors",
    "order_index": 78,
    "title": "#078 Vector Algorithm Problem 78",
    "slug": "vectors-078-vector-algorithm-problem-78",
    "description": "Solve vector data structure manipulation problem #78 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 78 10",
        "output": "Vector problem #78 resolved successfully (Result: 780)",
        "explanation": "Executes logic for Vector Algorithm Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000079",
    "book": "vectors",
    "order_index": 79,
    "title": "#079 Vector Algorithm Problem 79",
    "slug": "vectors-079-vector-algorithm-problem-79",
    "description": "Solve vector data structure manipulation problem #79 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 79 10",
        "output": "Vector problem #79 resolved successfully (Result: 790)",
        "explanation": "Executes logic for Vector Algorithm Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000080",
    "book": "vectors",
    "order_index": 80,
    "title": "#080 Vector Algorithm Problem 80",
    "slug": "vectors-080-vector-algorithm-problem-80",
    "description": "Solve vector data structure manipulation problem #80 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 80 10",
        "output": "Vector problem #80 resolved successfully (Result: 800)",
        "explanation": "Executes logic for Vector Algorithm Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000081",
    "book": "vectors",
    "order_index": 81,
    "title": "#081 Vector Algorithm Problem 81",
    "slug": "vectors-081-vector-algorithm-problem-81",
    "description": "Solve vector data structure manipulation problem #81 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 81 10",
        "output": "Vector problem #81 resolved successfully (Result: 810)",
        "explanation": "Executes logic for Vector Algorithm Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000082",
    "book": "vectors",
    "order_index": 82,
    "title": "#082 Vector Algorithm Problem 82",
    "slug": "vectors-082-vector-algorithm-problem-82",
    "description": "Solve vector data structure manipulation problem #82 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 82 10",
        "output": "Vector problem #82 resolved successfully (Result: 820)",
        "explanation": "Executes logic for Vector Algorithm Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000083",
    "book": "vectors",
    "order_index": 83,
    "title": "#083 Vector Algorithm Problem 83",
    "slug": "vectors-083-vector-algorithm-problem-83",
    "description": "Solve vector data structure manipulation problem #83 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 83 10",
        "output": "Vector problem #83 resolved successfully (Result: 830)",
        "explanation": "Executes logic for Vector Algorithm Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000084",
    "book": "vectors",
    "order_index": 84,
    "title": "#084 Vector Algorithm Problem 84",
    "slug": "vectors-084-vector-algorithm-problem-84",
    "description": "Solve vector data structure manipulation problem #84 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 84 10",
        "output": "Vector problem #84 resolved successfully (Result: 840)",
        "explanation": "Executes logic for Vector Algorithm Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000085",
    "book": "vectors",
    "order_index": 85,
    "title": "#085 Vector Algorithm Problem 85",
    "slug": "vectors-085-vector-algorithm-problem-85",
    "description": "Solve vector data structure manipulation problem #85 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 85 10",
        "output": "Vector problem #85 resolved successfully (Result: 850)",
        "explanation": "Executes logic for Vector Algorithm Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000086",
    "book": "vectors",
    "order_index": 86,
    "title": "#086 Vector Algorithm Problem 86",
    "slug": "vectors-086-vector-algorithm-problem-86",
    "description": "Solve vector data structure manipulation problem #86 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 86 10",
        "output": "Vector problem #86 resolved successfully (Result: 860)",
        "explanation": "Executes logic for Vector Algorithm Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000087",
    "book": "vectors",
    "order_index": 87,
    "title": "#087 Vector Algorithm Problem 87",
    "slug": "vectors-087-vector-algorithm-problem-87",
    "description": "Solve vector data structure manipulation problem #87 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 87 10",
        "output": "Vector problem #87 resolved successfully (Result: 870)",
        "explanation": "Executes logic for Vector Algorithm Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000088",
    "book": "vectors",
    "order_index": 88,
    "title": "#088 Vector Algorithm Problem 88",
    "slug": "vectors-088-vector-algorithm-problem-88",
    "description": "Solve vector data structure manipulation problem #88 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 88 10",
        "output": "Vector problem #88 resolved successfully (Result: 880)",
        "explanation": "Executes logic for Vector Algorithm Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000089",
    "book": "vectors",
    "order_index": 89,
    "title": "#089 Vector Algorithm Problem 89",
    "slug": "vectors-089-vector-algorithm-problem-89",
    "description": "Solve vector data structure manipulation problem #89 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 89 10",
        "output": "Vector problem #89 resolved successfully (Result: 890)",
        "explanation": "Executes logic for Vector Algorithm Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000090",
    "book": "vectors",
    "order_index": 90,
    "title": "#090 Vector Algorithm Problem 90",
    "slug": "vectors-090-vector-algorithm-problem-90",
    "description": "Solve vector data structure manipulation problem #90 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 90 10",
        "output": "Vector problem #90 resolved successfully (Result: 900)",
        "explanation": "Executes logic for Vector Algorithm Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000091",
    "book": "vectors",
    "order_index": 91,
    "title": "#091 Vector Algorithm Problem 91",
    "slug": "vectors-091-vector-algorithm-problem-91",
    "description": "Solve vector data structure manipulation problem #91 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 91 10",
        "output": "Vector problem #91 resolved successfully (Result: 910)",
        "explanation": "Executes logic for Vector Algorithm Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000092",
    "book": "vectors",
    "order_index": 92,
    "title": "#092 Vector Algorithm Problem 92",
    "slug": "vectors-092-vector-algorithm-problem-92",
    "description": "Solve vector data structure manipulation problem #92 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 92 10",
        "output": "Vector problem #92 resolved successfully (Result: 920)",
        "explanation": "Executes logic for Vector Algorithm Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000093",
    "book": "vectors",
    "order_index": 93,
    "title": "#093 Vector Algorithm Problem 93",
    "slug": "vectors-093-vector-algorithm-problem-93",
    "description": "Solve vector data structure manipulation problem #93 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 93 10",
        "output": "Vector problem #93 resolved successfully (Result: 930)",
        "explanation": "Executes logic for Vector Algorithm Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000094",
    "book": "vectors",
    "order_index": 94,
    "title": "#094 Vector Algorithm Problem 94",
    "slug": "vectors-094-vector-algorithm-problem-94",
    "description": "Solve vector data structure manipulation problem #94 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 94 10",
        "output": "Vector problem #94 resolved successfully (Result: 940)",
        "explanation": "Executes logic for Vector Algorithm Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000095",
    "book": "vectors",
    "order_index": 95,
    "title": "#095 Vector Algorithm Problem 95",
    "slug": "vectors-095-vector-algorithm-problem-95",
    "description": "Solve vector data structure manipulation problem #95 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 95 10",
        "output": "Vector problem #95 resolved successfully (Result: 950)",
        "explanation": "Executes logic for Vector Algorithm Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000096",
    "book": "vectors",
    "order_index": 96,
    "title": "#096 Vector Algorithm Problem 96",
    "slug": "vectors-096-vector-algorithm-problem-96",
    "description": "Solve vector data structure manipulation problem #96 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 96 10",
        "output": "Vector problem #96 resolved successfully (Result: 960)",
        "explanation": "Executes logic for Vector Algorithm Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000097",
    "book": "vectors",
    "order_index": 97,
    "title": "#097 Vector Algorithm Problem 97",
    "slug": "vectors-097-vector-algorithm-problem-97",
    "description": "Solve vector data structure manipulation problem #97 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 97 10",
        "output": "Vector problem #97 resolved successfully (Result: 970)",
        "explanation": "Executes logic for Vector Algorithm Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000098",
    "book": "vectors",
    "order_index": 98,
    "title": "#098 Vector Algorithm Problem 98",
    "slug": "vectors-098-vector-algorithm-problem-98",
    "description": "Solve vector data structure manipulation problem #98 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 98 10",
        "output": "Vector problem #98 resolved successfully (Result: 980)",
        "explanation": "Executes logic for Vector Algorithm Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000099",
    "book": "vectors",
    "order_index": 99,
    "title": "#099 Vector Algorithm Problem 99",
    "slug": "vectors-099-vector-algorithm-problem-99",
    "description": "Solve vector data structure manipulation problem #99 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 99 10",
        "output": "Vector problem #99 resolved successfully (Result: 990)",
        "explanation": "Executes logic for Vector Algorithm Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-6006-000000000100",
    "book": "vectors",
    "order_index": 100,
    "title": "#100 Vector Algorithm Problem 100",
    "slug": "vectors-100-vector-algorithm-problem-100",
    "description": "Solve vector data structure manipulation problem #100 managing capacity, elements, or multi-dimensional operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Vectors & Dynamic Arrays",
    "tags": [
      "Vectors",
      "std::vector",
      "Arrays",
      "Dynamic Array",
      "Algorithms"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VEC_INPUT 100 10",
        "output": "Vector problem #100 resolved successfully (Result: 1000)",
        "explanation": "Executes logic for Vector Algorithm Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n// Vector Algorithm Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Algorithm Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Algorithm Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
