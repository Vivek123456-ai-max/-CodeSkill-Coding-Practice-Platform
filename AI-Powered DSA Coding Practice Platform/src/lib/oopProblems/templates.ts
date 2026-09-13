import { Problem } from '../../types/problem';

export const TEMPLATES_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8010-000000000001",
    "book": "templates",
    "order_index": 1,
    "title": "#001 Generic Function Template (Max of Two Values)",
    "slug": "templates-001-generic-function-template-max-of-two-values",
    "description": "Write `template<typename T> T getMax(T a, T b)` working with int, double, string.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Max(10, 20), Max(3.14, 2.71), Max('apple', 'banana')",
        "output": "Max int: 20, Max double: 3.14, Max str: banana",
        "explanation": "Executes logic for Generic Function Template (Max of Two Values)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Function Template (Max of Two Values)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Function Template (Max of Two Values)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Function Template (Max of Two Values)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000002",
    "book": "templates",
    "order_index": 2,
    "title": "#002 Function Template with Multiple Type Parameters",
    "slug": "templates-002-function-template-with-multiple-type-parameters",
    "description": "Write `template<typename T, typename U> void printPair(T a, U b)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Print (101, 'Alice')",
        "output": "Pair: [101, Alice]",
        "explanation": "Executes logic for Function Template with Multiple Type Parameters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Function Template with Multiple Type Parameters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Function Template with Multiple Type Parameters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Function Template with Multiple Type Parameters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000003",
    "book": "templates",
    "order_index": 3,
    "title": "#003 Generic Swap Function Template",
    "slug": "templates-003-generic-swap-function-template",
    "description": "Implement `template<typename T> void mySwap(T& a, T& b)` swapping two variables of any type.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Swap 'foo' and 'bar'",
        "output": "Swapped: a='bar', b='foo'",
        "explanation": "Executes logic for Generic Swap Function Template."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Swap Function Template\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Swap Function Template\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Swap Function Template\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000004",
    "book": "templates",
    "order_index": 4,
    "title": "#004 Generic Array Min and Max Finder",
    "slug": "templates-004-generic-array-min-and-max-finder",
    "description": "Template function finding smallest and largest elements in an array of type T.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[4.5, 2.1, 9.8, 1.3]",
        "output": "Min: 1.3, Max: 9.8",
        "explanation": "Executes logic for Generic Array Min and Max Finder."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Array Min and Max Finder\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Array Min and Max Finder\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Array Min and Max Finder\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000005",
    "book": "templates",
    "order_index": 5,
    "title": "#005 Generic Bubble Sort Function Template",
    "slug": "templates-005-generic-bubble-sort-function-template",
    "description": "Template function sorting an array of any comparable type T.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort ['dog', 'cat', 'elephant', 'ant']",
        "output": "Sorted: ['ant', 'cat', 'dog', 'elephant']",
        "explanation": "Executes logic for Generic Bubble Sort Function Template."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Bubble Sort Function Template\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Bubble Sort Function Template\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Bubble Sort Function Template\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000006",
    "book": "templates",
    "order_index": 6,
    "title": "#006 Generic Binary Search Template Function",
    "slug": "templates-006-generic-binary-search-template-function",
    "description": "Template function performing binary search on sorted vector of type T.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Search 42 in [10, 20, 30, 42, 50]",
        "output": "Found at index: 3",
        "explanation": "Executes logic for Generic Binary Search Template Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Binary Search Template Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Binary Search Template Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Binary Search Template Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000007",
    "book": "templates",
    "order_index": 7,
    "title": "#007 Generic Class Template: Pair<T, U>",
    "slug": "templates-007-generic-class-template-pair-t-u",
    "description": "Implement `template<typename T, typename U> class MyPair` with getters and setters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MyPair<int, string>(1, 'One')",
        "output": "Pair: (1, One)",
        "explanation": "Executes logic for Generic Class Template: Pair<T, U>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Class Template: Pair<T, U>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Class Template: Pair<T, U>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Class Template: Pair<T, U>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000008",
    "book": "templates",
    "order_index": 8,
    "title": "#008 Generic Class Template: Stack<T>",
    "slug": "templates-008-generic-class-template-stack-t",
    "description": "Implement dynamic array-based `template<typename T> class MyStack` with push, pop, top.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Stack<string> push 'A', 'B', pop",
        "output": "Popped: 'B', Top: 'A'",
        "explanation": "Executes logic for Generic Class Template: Stack<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Class Template: Stack<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Class Template: Stack<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Class Template: Stack<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000009",
    "book": "templates",
    "order_index": 9,
    "title": "#009 Generic Class Template: Queue<T>",
    "slug": "templates-009-generic-class-template-queue-t",
    "description": "Implement FIFO `template<typename T> class MyQueue` with enqueue and dequeue.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Queue<double> enq 1.5, 2.5, deq",
        "output": "Dequeued: 1.5, Front: 2.5",
        "explanation": "Executes logic for Generic Class Template: Queue<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Class Template: Queue<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Class Template: Queue<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Class Template: Queue<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000010",
    "book": "templates",
    "order_index": 10,
    "title": "#010 Generic Class Template: Vector<T> (Dynamic Array)",
    "slug": "templates-010-generic-class-template-vector-t-dynamic-array",
    "description": "Implement dynamic array template managing capacity, push_back, size, and operator[].\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Vector<int> push 10, 20, 30",
        "output": "Vector: [10, 20, 30] (Size: 3)",
        "explanation": "Executes logic for Generic Class Template: Vector<T> (Dynamic Array)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Class Template: Vector<T> (Dynamic Array)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Class Template: Vector<T> (Dynamic Array)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Class Template: Vector<T> (Dynamic Array)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000011",
    "book": "templates",
    "order_index": 11,
    "title": "#011 Non-Type Template Parameters (Fixed Size Array)",
    "slug": "templates-011-non-type-template-parameters-fixed-size-array",
    "description": "Implement `template<typename T, size_t N> class FixedArray` with compile-time size checking.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "FixedArray<int, 5>",
        "output": "FixedArray of size 5 created on stack",
        "explanation": "Executes logic for Non-Type Template Parameters (Fixed Size Array)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Non-Type Template Parameters (Fixed Size Array)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Non-Type Template Parameters (Fixed Size Array)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Non-Type Template Parameters (Fixed Size Array)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000012",
    "book": "templates",
    "order_index": 12,
    "title": "#012 Class Template Full Specialization",
    "slug": "templates-012-class-template-full-specialization",
    "description": "Fully specialize `template<> class Printer<bool>` to print 'TRUE'/'FALSE' instead of 1/0.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Printer<bool> print true",
        "output": "TRUE (Specialized bool printer)",
        "explanation": "Executes logic for Class Template Full Specialization."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Template Full Specialization\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Template Full Specialization\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Template Full Specialization\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000013",
    "book": "templates",
    "order_index": 13,
    "title": "#013 Class Template Partial Specialization for Pointers",
    "slug": "templates-013-class-template-partial-specialization-for-pointers",
    "description": "Partially specialize `template<typename T> class TypeHelper<T*>` to dereference pointers safely.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TypeHelper<int*> on ptr to 42",
        "output": "Pointer helper dereferenced: 42",
        "explanation": "Executes logic for Class Template Partial Specialization for Pointers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Template Partial Specialization for Pointers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Template Partial Specialization for Pointers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Template Partial Specialization for Pointers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000014",
    "book": "templates",
    "order_index": 14,
    "title": "#014 Function Template Specialization (Explicit Specialization)",
    "slug": "templates-014-function-template-specialization-explicit-speciali",
    "description": "Specialize `getMax<const char*>` to use `strcmp` instead of pointer address comparison.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "getMax('apple', 'banana')",
        "output": "Max string: 'banana' (strcmp specialization used)",
        "explanation": "Executes logic for Function Template Specialization (Explicit Specialization)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Function Template Specialization (Explicit Specialization)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Function Template Specialization (Explicit Specialization)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Function Template Specialization (Explicit Specialization)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000015",
    "book": "templates",
    "order_index": 15,
    "title": "#015 Default Template Arguments",
    "slug": "templates-015-default-template-arguments",
    "description": "Define `template<typename T = int, size_t Size = 10> class Buffer` with default parameters.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Buffer<> b",
        "output": "Buffer initialized with T=int and Size=10",
        "explanation": "Executes logic for Default Template Arguments."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Default Template Arguments\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Default Template Arguments\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Default Template Arguments\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000016",
    "book": "templates",
    "order_index": 16,
    "title": "#016 Template Template Parameters",
    "slug": "templates-016-template-template-parameters",
    "description": "Define `template<typename T, template<typename> class Container> class Adaptor` accepting vector/list.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Adaptor<int, vector>",
        "output": "Adaptor initialized with std::vector container",
        "explanation": "Executes logic for Template Template Parameters."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Template Parameters\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Template Parameters\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Template Parameters\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000017",
    "book": "templates",
    "order_index": 17,
    "title": "#017 Member Function Templates Inside Class Template",
    "slug": "templates-017-member-function-templates-inside-class-template",
    "description": "Class template `Box<T>` has member template `template<typename U> bool fits(const Box<U>&)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Box<int>(5).fits(Box<double>(4.5))",
        "output": "Fits: true (4.5 <= 5)",
        "explanation": "Executes logic for Member Function Templates Inside Class Template."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Member Function Templates Inside Class Template\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Member Function Templates Inside Class Template\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Member Function Templates Inside Class Template\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000018",
    "book": "templates",
    "order_index": 18,
    "title": "#018 Variadic Function Templates (C++11 Parameter Packs)",
    "slug": "templates-018-variadic-function-templates-c-11-parameter-packs",
    "description": "Write `template<typename... Args> void printAll(Args... args)` using recursive unpacking or fold.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "printAll(1, 2.5, 'Hello', true)",
        "output": "1, 2.5, Hello, true",
        "explanation": "Executes logic for Variadic Function Templates (C++11 Parameter Packs)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Variadic Function Templates (C++11 Parameter Packs)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Variadic Function Templates (C++11 Parameter Packs)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Variadic Function Templates (C++11 Parameter Packs)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000019",
    "book": "templates",
    "order_index": 19,
    "title": "#019 Fold Expressions with Variadic Templates (C++17)",
    "slug": "templates-019-fold-expressions-with-variadic-templates-c-17",
    "description": "Implement `template<typename... Args> auto sum(Args... args) { return (... + args); }`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "sum(1, 2, 3, 4, 5)",
        "output": "Fold expression sum: 15",
        "explanation": "Executes logic for Fold Expressions with Variadic Templates (C++17)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Fold Expressions with Variadic Templates (C++17)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Fold Expressions with Variadic Templates (C++17)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Fold Expressions with Variadic Templates (C++17)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000020",
    "book": "templates",
    "order_index": 20,
    "title": "#020 Type Traits and std::is_integral Verification (C++11)",
    "slug": "templates-020-type-traits-and-std-is-integral-verification-c-11",
    "description": "Use `std::is_integral<T>::value` to verify whether template type is an integer type.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check int vs double",
        "output": "is_integral<int>: true, is_integral<double>: false",
        "explanation": "Executes logic for Type Traits and std::is_integral Verification (C++11)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Type Traits and std::is_integral Verification (C++11)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Type Traits and std::is_integral Verification (C++11)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Type Traits and std::is_integral Verification (C++11)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000021",
    "book": "templates",
    "order_index": 21,
    "title": "#021 SFINAE (Substitution Failure Is Not An Error) with std::enable_if",
    "slug": "templates-021-sfinae-substitution-failure-is-not-an-error-with-s",
    "description": "Enable function template only for numeric types using `std::enable_if_t<std::is_arithmetic<T>::value>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "add(5, 10)",
        "output": "Arithmetic addition enabled: 15",
        "explanation": "Executes logic for SFINAE (Substitution Failure Is Not An Error) with std::enable_if."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// SFINAE (Substitution Failure Is Not An Error) with std::enable_if\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# SFINAE (Substitution Failure Is Not An Error) with std::enable_if\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// SFINAE (Substitution Failure Is Not An Error) with std::enable_if\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000022",
    "book": "templates",
    "order_index": 22,
    "title": "#022 Compile-Time Factorial with Template Metaprogramming",
    "slug": "templates-022-compile-time-factorial-with-template-metaprogrammi",
    "description": "Compute factorial at compile time using `template<unsigned int N> struct Factorial { static const int val = N * Factorial<N-1>::val; };`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Factorial<5>::val",
        "output": "Compile-Time Factorial(5) = 120",
        "explanation": "Executes logic for Compile-Time Factorial with Template Metaprogramming."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Compile-Time Factorial with Template Metaprogramming\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compile-Time Factorial with Template Metaprogramming\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compile-Time Factorial with Template Metaprogramming\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000023",
    "book": "templates",
    "order_index": 23,
    "title": "#023 Compile-Time Fibonacci with Template Metaprogramming",
    "slug": "templates-023-compile-time-fibonacci-with-template-metaprogrammi",
    "description": "Compute Nth Fibonacci number at compile time via template struct recursion.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Fibonacci<10>::val",
        "output": "Compile-Time Fib(10) = 55",
        "explanation": "Executes logic for Compile-Time Fibonacci with Template Metaprogramming."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Compile-Time Fibonacci with Template Metaprogramming\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compile-Time Fibonacci with Template Metaprogramming\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compile-Time Fibonacci with Template Metaprogramming\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000024",
    "book": "templates",
    "order_index": 24,
    "title": "#024 Generic Matrix Class Template Matrix<T, Rows, Cols>",
    "slug": "templates-024-generic-matrix-class-template-matrix-t-rows-cols",
    "description": "Implement 2D Matrix template with compile-time dimension checking for multiplication.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix<int, 2, 3> * Matrix<int, 3, 2>",
        "output": "Resulting Matrix<int, 2, 2> computed at compile-time dimensions",
        "explanation": "Executes logic for Generic Matrix Class Template Matrix<T, Rows, Cols>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Matrix Class Template Matrix<T, Rows, Cols>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Matrix Class Template Matrix<T, Rows, Cols>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Matrix Class Template Matrix<T, Rows, Cols>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000025",
    "book": "templates",
    "order_index": 25,
    "title": "#025 Generic Linked List Template LinkedList<T>",
    "slug": "templates-025-generic-linked-list-template-linkedlist-t",
    "description": "Implement singly linked list template with push_front, pop_front, and traversal.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "List<string> push 'World', 'Hello'",
        "output": "Hello -> World -> NULL",
        "explanation": "Executes logic for Generic Linked List Template LinkedList<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Linked List Template LinkedList<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Linked List Template LinkedList<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Linked List Template LinkedList<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000026",
    "book": "templates",
    "order_index": 26,
    "title": "#026 Generic Binary Search Tree Template BST<T>",
    "slug": "templates-026-generic-binary-search-tree-template-bst-t",
    "description": "Implement templated BST supporting insert, find, and in-order traversal.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "BST<int> insert 50, 30, 70",
        "output": "In-Order: 30, 50, 70",
        "explanation": "Executes logic for Generic Binary Search Tree Template BST<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Binary Search Tree Template BST<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Binary Search Tree Template BST<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Binary Search Tree Template BST<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000027",
    "book": "templates",
    "order_index": 27,
    "title": "#027 Generic Priority Queue Template PriorityQueue<T, Compare>",
    "slug": "templates-027-generic-priority-queue-template-priorityqueue-t-co",
    "description": "Implement templated Min/Max heap priority queue with custom comparator template.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MinHeap<int> push 40, 10, 30",
        "output": "Min element popped: 10",
        "explanation": "Executes logic for Generic Priority Queue Template PriorityQueue<T, Compare>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Priority Queue Template PriorityQueue<T, Compare>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Priority Queue Template PriorityQueue<T, Compare>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Priority Queue Template PriorityQueue<T, Compare>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000028",
    "book": "templates",
    "order_index": 28,
    "title": "#028 Generic Hash Map Template (Key-Value Store) MyMap<K, V>",
    "slug": "templates-028-generic-hash-map-template-key-value-store-mymap-k",
    "description": "Implement templated hash table with bucket chaining for custom key-value pairs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Map<string, int> put 'Alice' 95",
        "output": "Map['Alice']: 95",
        "explanation": "Executes logic for Generic Hash Map Template (Key-Value Store) MyMap<K, V>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Hash Map Template (Key-Value Store) MyMap<K, V>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Hash Map Template (Key-Value Store) MyMap<K, V>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Hash Map Template (Key-Value Store) MyMap<K, V>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000029",
    "book": "templates",
    "order_index": 29,
    "title": "#029 Generic Graph Template Graph<VertexType, EdgeWeight>",
    "slug": "templates-029-generic-graph-template-graph-vertextype-edgeweight",
    "description": "Implement adjacency list graph template with Dijkstra shortest path.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Graph<string, int> A to B (weight 5)",
        "output": "Shortest path A -> B: Cost 5",
        "explanation": "Executes logic for Generic Graph Template Graph<VertexType, EdgeWeight>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Graph Template Graph<VertexType, EdgeWeight>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Graph Template Graph<VertexType, EdgeWeight>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Graph Template Graph<VertexType, EdgeWeight>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000030",
    "book": "templates",
    "order_index": 30,
    "title": "#030 Generic Optional Class Template (std::optional Simulation)",
    "slug": "templates-030-generic-optional-class-template-std-optional-simul",
    "description": "Implement `MyOptional<T>` representing value that may or may not be present.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Optional<int> with value 42",
        "output": "Has value: true, Value: 42",
        "explanation": "Executes logic for Generic Optional Class Template (std::optional Simulation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Optional Class Template (std::optional Simulation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Optional Class Template (std::optional Simulation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Optional Class Template (std::optional Simulation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000031",
    "book": "templates",
    "order_index": 31,
    "title": "#031 Generic Smart Pointer Template UniquePtr<T>",
    "slug": "templates-031-generic-smart-pointer-template-uniqueptr-t",
    "description": "Implement custom `MyUniquePtr<T>` managing dynamic ownership with move semantics.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "UniquePtr<int>(new int(100))",
        "output": "Managed heap value: 100 (Auto deleted)",
        "explanation": "Executes logic for Generic Smart Pointer Template UniquePtr<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Smart Pointer Template UniquePtr<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Smart Pointer Template UniquePtr<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Smart Pointer Template UniquePtr<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000032",
    "book": "templates",
    "order_index": 32,
    "title": "#032 Generic Smart Pointer Template SharedPtr<T>",
    "slug": "templates-032-generic-smart-pointer-template-sharedptr-t",
    "description": "Implement custom `MySharedPtr<T>` with atomic reference counting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SharedPtr<string> 2 owners",
        "output": "Ref count: 2 -> 1 -> 0 (Freed)",
        "explanation": "Executes logic for Generic Smart Pointer Template SharedPtr<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Smart Pointer Template SharedPtr<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Smart Pointer Template SharedPtr<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Smart Pointer Template SharedPtr<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000033",
    "book": "templates",
    "order_index": 33,
    "title": "#033 Generic Ring Buffer Template RingBuffer<T, Capacity>",
    "slug": "templates-033-generic-ring-buffer-template-ringbuffer-t-capacity",
    "description": "Implement circular ring buffer with compile-time capacity and FIFO overwrite.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "RingBuffer<int, 3> push 1,2,3,4",
        "output": "Ring Buffer: [4, 2, 3]",
        "explanation": "Executes logic for Generic Ring Buffer Template RingBuffer<T, Capacity>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Ring Buffer Template RingBuffer<T, Capacity>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Ring Buffer Template RingBuffer<T, Capacity>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Ring Buffer Template RingBuffer<T, Capacity>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000034",
    "book": "templates",
    "order_index": 34,
    "title": "#034 Generic Bitset Template Bitset<NumBits>",
    "slug": "templates-034-generic-bitset-template-bitset-numbits",
    "description": "Implement fixed-size bit array with bitwise AND, OR, XOR operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Bitset<8> set bit 0 and 7",
        "output": "Bitset: 10000001 (Decimal: 129)",
        "explanation": "Executes logic for Generic Bitset Template Bitset<NumBits>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Bitset Template Bitset<NumBits>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Bitset Template Bitset<NumBits>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Bitset Template Bitset<NumBits>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000035",
    "book": "templates",
    "order_index": 35,
    "title": "#035 Generic Observer Subject Template Subject<EventType>",
    "slug": "templates-035-generic-observer-subject-template-subject-eventtyp",
    "description": "Implement Subject notifying registered listener callbacks of templated event.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Subject<int> emit 42",
        "output": "Listener 1 received: 42, Listener 2 received: 42",
        "explanation": "Executes logic for Generic Observer Subject Template Subject<EventType>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Observer Subject Template Subject<EventType>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Observer Subject Template Subject<EventType>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Observer Subject Template Subject<EventType>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000036",
    "book": "templates",
    "order_index": 36,
    "title": "#036 Generic Command Pattern Template Command<Receiver>",
    "slug": "templates-036-generic-command-pattern-template-command-receiver",
    "description": "Implement templated command object encapsulating receiver action with undo.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Command<Light> execute",
        "output": "Light turned ON -> Undo: Light turned OFF",
        "explanation": "Executes logic for Generic Command Pattern Template Command<Receiver>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Command Pattern Template Command<Receiver>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Command Pattern Template Command<Receiver>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Command Pattern Template Command<Receiver>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000037",
    "book": "templates",
    "order_index": 37,
    "title": "#037 Generic Pool Allocator Template ObjectPool<T, PoolSize>",
    "slug": "templates-037-generic-pool-allocator-template-objectpool-t-pools",
    "description": "Pre-allocate pool of reusable objects avoiding heap fragmentation.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Acquire 2 objects from pool",
        "output": "Objects acquired from pre-allocated memory pool",
        "explanation": "Executes logic for Generic Pool Allocator Template ObjectPool<T, PoolSize>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Pool Allocator Template ObjectPool<T, PoolSize>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Pool Allocator Template ObjectPool<T, PoolSize>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Pool Allocator Template ObjectPool<T, PoolSize>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000038",
    "book": "templates",
    "order_index": 38,
    "title": "#038 Generic Trie Tree Template Trie<CharType>",
    "slug": "templates-038-generic-trie-tree-template-trie-chartype",
    "description": "Implement prefix tree template supporting insert and prefix search.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Insert 'apple', 'app', Search 'app'",
        "output": "Found prefix 'app': true",
        "explanation": "Executes logic for Generic Trie Tree Template Trie<CharType>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Trie Tree Template Trie<CharType>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Trie Tree Template Trie<CharType>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Trie Tree Template Trie<CharType>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000039",
    "book": "templates",
    "order_index": 39,
    "title": "#039 Generic Disjoint Set (Union-Find) Template DisjointSet<T>",
    "slug": "templates-039-generic-disjoint-set-union-find-template-disjoints",
    "description": "Implement Union-Find template with path compression and rank optimization.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Union(1, 2), Find(1) == Find(2)",
        "output": "Elements 1 and 2 in same set: true",
        "explanation": "Executes logic for Generic Disjoint Set (Union-Find) Template DisjointSet<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Disjoint Set (Union-Find) Template DisjointSet<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Disjoint Set (Union-Find) Template DisjointSet<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Disjoint Set (Union-Find) Template DisjointSet<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000040",
    "book": "templates",
    "order_index": 40,
    "title": "#040 Generic Segment Tree Template SegmentTree<T, Operation>",
    "slug": "templates-040-generic-segment-tree-template-segmenttree-t-operat",
    "description": "Implement segment tree template for range sum / min queries in O(log N).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "RangeSum(1, 4) on [1, 2, 3, 4, 5]",
        "output": "Range sum [1..4]: 14",
        "explanation": "Executes logic for Generic Segment Tree Template SegmentTree<T, Operation>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Segment Tree Template SegmentTree<T, Operation>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Segment Tree Template SegmentTree<T, Operation>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Segment Tree Template SegmentTree<T, Operation>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000041",
    "book": "templates",
    "order_index": 41,
    "title": "#041 Generic Fenwick Tree (Binary Indexed Tree) Template BIT<T>",
    "slug": "templates-041-generic-fenwick-tree-binary-indexed-tree-template",
    "description": "Implement 1D Fenwick tree template with point update and prefix sum queries.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Update idx 3 (+5), PrefixSum(4)",
        "output": "Prefix sum up to index 4: 15",
        "explanation": "Executes logic for Generic Fenwick Tree (Binary Indexed Tree) Template BIT<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Fenwick Tree (Binary Indexed Tree) Template BIT<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Fenwick Tree (Binary Indexed Tree) Template BIT<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Fenwick Tree (Binary Indexed Tree) Template BIT<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000042",
    "book": "templates",
    "order_index": 42,
    "title": "#042 Generic Thread-Safe Queue Template ConcurrentQueue<T>",
    "slug": "templates-042-generic-thread-safe-queue-template-concurrentqueue",
    "description": "Implement thread-safe queue template with mutex and condition variable.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Concurrent push and pop",
        "output": "Thread-safe item enqueued and dequeued safely",
        "explanation": "Executes logic for Generic Thread-Safe Queue Template ConcurrentQueue<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Thread-Safe Queue Template ConcurrentQueue<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Thread-Safe Queue Template ConcurrentQueue<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Thread-Safe Queue Template ConcurrentQueue<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000043",
    "book": "templates",
    "order_index": 43,
    "title": "#043 Generic LRU Cache Template LRUCache<Key, Value, Capacity>",
    "slug": "templates-043-generic-lru-cache-template-lrucache-key-value-capa",
    "description": "Implement templated LRU cache with O(1) get and put operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "LRU<string, int, 2> put A, B, get A, put C",
        "output": "Evicted B, Cache holds [A, C]",
        "explanation": "Executes logic for Generic LRU Cache Template LRUCache<Key, Value, Capacity>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic LRU Cache Template LRUCache<Key, Value, Capacity>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic LRU Cache Template LRUCache<Key, Value, Capacity>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic LRU Cache Template LRUCache<Key, Value, Capacity>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000044",
    "book": "templates",
    "order_index": 44,
    "title": "#044 Generic Mathematical Vector VectorND<T, N>",
    "slug": "templates-044-generic-mathematical-vector-vectornd-t-n",
    "description": "Implement N-dimensional vector template supporting dot product, cross product, norm.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "VectorND<double, 4> dot product",
        "output": "4D Vector Dot Product: 54.0",
        "explanation": "Executes logic for Generic Mathematical Vector VectorND<T, N>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Mathematical Vector VectorND<T, N>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Mathematical Vector VectorND<T, N>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Mathematical Vector VectorND<T, N>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000045",
    "book": "templates",
    "order_index": 45,
    "title": "#045 Generic State Machine Template StateMachine<StateEnum, EventEnum>",
    "slug": "templates-045-generic-state-machine-template-statemachine-statee",
    "description": "Implement table-driven state machine template executing transitions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Transition IDLE -> ACTIVE on START_EVENT",
        "output": "New state: ACTIVE",
        "explanation": "Executes logic for Generic State Machine Template StateMachine<StateEnum, EventEnum>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic State Machine Template StateMachine<StateEnum, EventEnum>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic State Machine Template StateMachine<StateEnum, EventEnum>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic State Machine Template StateMachine<StateEnum, EventEnum>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000046",
    "book": "templates",
    "order_index": 46,
    "title": "#046 Generic Type-Erased Any Container (std::any Simulation)",
    "slug": "templates-046-generic-type-erased-any-container-std-any-simulati",
    "description": "Implement `MyAny` storing any type using concept-model idiom.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "MyAny holding string 'Hello'",
        "output": "Any contains type 'string': 'Hello'",
        "explanation": "Executes logic for Generic Type-Erased Any Container (std::any Simulation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Type-Erased Any Container (std::any Simulation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Type-Erased Any Container (std::any Simulation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Type-Erased Any Container (std::any Simulation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000047",
    "book": "templates",
    "order_index": 47,
    "title": "#047 Generic Function Wrapper Template (std::function Simulation)",
    "slug": "templates-047-generic-function-wrapper-template-std-function-sim",
    "description": "Implement callable wrapper template storing functors, lambdas, and function pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Function<int(int, int)> f = add",
        "output": "f(3, 4) = 7",
        "explanation": "Executes logic for Generic Function Wrapper Template (std::function Simulation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Function Wrapper Template (std::function Simulation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Function Wrapper Template (std::function Simulation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Function Wrapper Template (std::function Simulation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000048",
    "book": "templates",
    "order_index": 48,
    "title": "#048 Generic Bloom Filter Template BloomFilter<T, NumHashes>",
    "slug": "templates-048-generic-bloom-filter-template-bloomfilter-t-numhas",
    "description": "Implement probabilistic bloom filter template with false positive analysis.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Add 'user_1', Check 'user_1'",
        "output": "May contain 'user_1': true (0% false positive)",
        "explanation": "Executes logic for Generic Bloom Filter Template BloomFilter<T, NumHashes>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Bloom Filter Template BloomFilter<T, NumHashes>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Bloom Filter Template BloomFilter<T, NumHashes>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Bloom Filter Template BloomFilter<T, NumHashes>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000049",
    "book": "templates",
    "order_index": 49,
    "title": "#049 Generic Interpolator Template Lerp<T>",
    "slug": "templates-049-generic-interpolator-template-lerp-t",
    "description": "Template linear interpolator for floating points, vectors, and custom colors.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Lerp(0.0, 100.0, 0.25)",
        "output": "Interpolated value: 25.0",
        "explanation": "Executes logic for Generic Interpolator Template Lerp<T>."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Interpolator Template Lerp<T>\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Interpolator Template Lerp<T>\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Interpolator Template Lerp<T>\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000050",
    "book": "templates",
    "order_index": 50,
    "title": "#050 Generic Matrix Inversion Template for 2x2 and 3x3",
    "slug": "templates-050-generic-matrix-inversion-template-for-2x2-and-3x3",
    "description": "Template calculating matrix inverse using adjugate and determinant.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Inverse of 2x2 [[4,7],[2,6]]",
        "output": "Inverse Matrix: [[0.6, -0.7], [-0.2, 0.4]]",
        "explanation": "Executes logic for Generic Matrix Inversion Template for 2x2 and 3x3."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Generic Matrix Inversion Template for 2x2 and 3x3\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Generic Matrix Inversion Template for 2x2 and 3x3\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Generic Matrix Inversion Template for 2x2 and 3x3\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000051",
    "book": "templates",
    "order_index": 51,
    "title": "#051 Template Problem 51",
    "slug": "templates-051-template-problem-51",
    "description": "Implement generic template component #51 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 51 10",
        "output": "Template #51 instantiated and executed for target type (Code: 510)",
        "explanation": "Executes logic for Template Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000052",
    "book": "templates",
    "order_index": 52,
    "title": "#052 Template Problem 52",
    "slug": "templates-052-template-problem-52",
    "description": "Implement generic template component #52 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 52 10",
        "output": "Template #52 instantiated and executed for target type (Code: 520)",
        "explanation": "Executes logic for Template Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000053",
    "book": "templates",
    "order_index": 53,
    "title": "#053 Template Problem 53",
    "slug": "templates-053-template-problem-53",
    "description": "Implement generic template component #53 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 53 10",
        "output": "Template #53 instantiated and executed for target type (Code: 530)",
        "explanation": "Executes logic for Template Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000054",
    "book": "templates",
    "order_index": 54,
    "title": "#054 Template Problem 54",
    "slug": "templates-054-template-problem-54",
    "description": "Implement generic template component #54 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 54 10",
        "output": "Template #54 instantiated and executed for target type (Code: 540)",
        "explanation": "Executes logic for Template Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000055",
    "book": "templates",
    "order_index": 55,
    "title": "#055 Template Problem 55",
    "slug": "templates-055-template-problem-55",
    "description": "Implement generic template component #55 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 55 10",
        "output": "Template #55 instantiated and executed for target type (Code: 550)",
        "explanation": "Executes logic for Template Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000056",
    "book": "templates",
    "order_index": 56,
    "title": "#056 Template Problem 56",
    "slug": "templates-056-template-problem-56",
    "description": "Implement generic template component #56 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 56 10",
        "output": "Template #56 instantiated and executed for target type (Code: 560)",
        "explanation": "Executes logic for Template Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000057",
    "book": "templates",
    "order_index": 57,
    "title": "#057 Template Problem 57",
    "slug": "templates-057-template-problem-57",
    "description": "Implement generic template component #57 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 57 10",
        "output": "Template #57 instantiated and executed for target type (Code: 570)",
        "explanation": "Executes logic for Template Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000058",
    "book": "templates",
    "order_index": 58,
    "title": "#058 Template Problem 58",
    "slug": "templates-058-template-problem-58",
    "description": "Implement generic template component #58 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 58 10",
        "output": "Template #58 instantiated and executed for target type (Code: 580)",
        "explanation": "Executes logic for Template Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000059",
    "book": "templates",
    "order_index": 59,
    "title": "#059 Template Problem 59",
    "slug": "templates-059-template-problem-59",
    "description": "Implement generic template component #59 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 59 10",
        "output": "Template #59 instantiated and executed for target type (Code: 590)",
        "explanation": "Executes logic for Template Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000060",
    "book": "templates",
    "order_index": 60,
    "title": "#060 Template Problem 60",
    "slug": "templates-060-template-problem-60",
    "description": "Implement generic template component #60 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 60 10",
        "output": "Template #60 instantiated and executed for target type (Code: 600)",
        "explanation": "Executes logic for Template Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000061",
    "book": "templates",
    "order_index": 61,
    "title": "#061 Template Problem 61",
    "slug": "templates-061-template-problem-61",
    "description": "Implement generic template component #61 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 61 10",
        "output": "Template #61 instantiated and executed for target type (Code: 610)",
        "explanation": "Executes logic for Template Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000062",
    "book": "templates",
    "order_index": 62,
    "title": "#062 Template Problem 62",
    "slug": "templates-062-template-problem-62",
    "description": "Implement generic template component #62 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 62 10",
        "output": "Template #62 instantiated and executed for target type (Code: 620)",
        "explanation": "Executes logic for Template Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000063",
    "book": "templates",
    "order_index": 63,
    "title": "#063 Template Problem 63",
    "slug": "templates-063-template-problem-63",
    "description": "Implement generic template component #63 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 63 10",
        "output": "Template #63 instantiated and executed for target type (Code: 630)",
        "explanation": "Executes logic for Template Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000064",
    "book": "templates",
    "order_index": 64,
    "title": "#064 Template Problem 64",
    "slug": "templates-064-template-problem-64",
    "description": "Implement generic template component #64 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 64 10",
        "output": "Template #64 instantiated and executed for target type (Code: 640)",
        "explanation": "Executes logic for Template Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000065",
    "book": "templates",
    "order_index": 65,
    "title": "#065 Template Problem 65",
    "slug": "templates-065-template-problem-65",
    "description": "Implement generic template component #65 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 65 10",
        "output": "Template #65 instantiated and executed for target type (Code: 650)",
        "explanation": "Executes logic for Template Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000066",
    "book": "templates",
    "order_index": 66,
    "title": "#066 Template Problem 66",
    "slug": "templates-066-template-problem-66",
    "description": "Implement generic template component #66 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 66 10",
        "output": "Template #66 instantiated and executed for target type (Code: 660)",
        "explanation": "Executes logic for Template Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000067",
    "book": "templates",
    "order_index": 67,
    "title": "#067 Template Problem 67",
    "slug": "templates-067-template-problem-67",
    "description": "Implement generic template component #67 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 67 10",
        "output": "Template #67 instantiated and executed for target type (Code: 670)",
        "explanation": "Executes logic for Template Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000068",
    "book": "templates",
    "order_index": 68,
    "title": "#068 Template Problem 68",
    "slug": "templates-068-template-problem-68",
    "description": "Implement generic template component #68 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 68 10",
        "output": "Template #68 instantiated and executed for target type (Code: 680)",
        "explanation": "Executes logic for Template Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000069",
    "book": "templates",
    "order_index": 69,
    "title": "#069 Template Problem 69",
    "slug": "templates-069-template-problem-69",
    "description": "Implement generic template component #69 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 69 10",
        "output": "Template #69 instantiated and executed for target type (Code: 690)",
        "explanation": "Executes logic for Template Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000070",
    "book": "templates",
    "order_index": 70,
    "title": "#070 Template Problem 70",
    "slug": "templates-070-template-problem-70",
    "description": "Implement generic template component #70 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 70 10",
        "output": "Template #70 instantiated and executed for target type (Code: 700)",
        "explanation": "Executes logic for Template Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000071",
    "book": "templates",
    "order_index": 71,
    "title": "#071 Template Problem 71",
    "slug": "templates-071-template-problem-71",
    "description": "Implement generic template component #71 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 71 10",
        "output": "Template #71 instantiated and executed for target type (Code: 710)",
        "explanation": "Executes logic for Template Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000072",
    "book": "templates",
    "order_index": 72,
    "title": "#072 Template Problem 72",
    "slug": "templates-072-template-problem-72",
    "description": "Implement generic template component #72 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 72 10",
        "output": "Template #72 instantiated and executed for target type (Code: 720)",
        "explanation": "Executes logic for Template Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000073",
    "book": "templates",
    "order_index": 73,
    "title": "#073 Template Problem 73",
    "slug": "templates-073-template-problem-73",
    "description": "Implement generic template component #73 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 73 10",
        "output": "Template #73 instantiated and executed for target type (Code: 730)",
        "explanation": "Executes logic for Template Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000074",
    "book": "templates",
    "order_index": 74,
    "title": "#074 Template Problem 74",
    "slug": "templates-074-template-problem-74",
    "description": "Implement generic template component #74 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 74 10",
        "output": "Template #74 instantiated and executed for target type (Code: 740)",
        "explanation": "Executes logic for Template Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000075",
    "book": "templates",
    "order_index": 75,
    "title": "#075 Template Problem 75",
    "slug": "templates-075-template-problem-75",
    "description": "Implement generic template component #75 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 75 10",
        "output": "Template #75 instantiated and executed for target type (Code: 750)",
        "explanation": "Executes logic for Template Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000076",
    "book": "templates",
    "order_index": 76,
    "title": "#076 Template Problem 76",
    "slug": "templates-076-template-problem-76",
    "description": "Implement generic template component #76 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 76 10",
        "output": "Template #76 instantiated and executed for target type (Code: 760)",
        "explanation": "Executes logic for Template Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000077",
    "book": "templates",
    "order_index": 77,
    "title": "#077 Template Problem 77",
    "slug": "templates-077-template-problem-77",
    "description": "Implement generic template component #77 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 77 10",
        "output": "Template #77 instantiated and executed for target type (Code: 770)",
        "explanation": "Executes logic for Template Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000078",
    "book": "templates",
    "order_index": 78,
    "title": "#078 Template Problem 78",
    "slug": "templates-078-template-problem-78",
    "description": "Implement generic template component #78 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 78 10",
        "output": "Template #78 instantiated and executed for target type (Code: 780)",
        "explanation": "Executes logic for Template Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000079",
    "book": "templates",
    "order_index": 79,
    "title": "#079 Template Problem 79",
    "slug": "templates-079-template-problem-79",
    "description": "Implement generic template component #79 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 79 10",
        "output": "Template #79 instantiated and executed for target type (Code: 790)",
        "explanation": "Executes logic for Template Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000080",
    "book": "templates",
    "order_index": 80,
    "title": "#080 Template Problem 80",
    "slug": "templates-080-template-problem-80",
    "description": "Implement generic template component #80 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 80 10",
        "output": "Template #80 instantiated and executed for target type (Code: 800)",
        "explanation": "Executes logic for Template Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000081",
    "book": "templates",
    "order_index": 81,
    "title": "#081 Template Problem 81",
    "slug": "templates-081-template-problem-81",
    "description": "Implement generic template component #81 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 81 10",
        "output": "Template #81 instantiated and executed for target type (Code: 810)",
        "explanation": "Executes logic for Template Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000082",
    "book": "templates",
    "order_index": 82,
    "title": "#082 Template Problem 82",
    "slug": "templates-082-template-problem-82",
    "description": "Implement generic template component #82 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 82 10",
        "output": "Template #82 instantiated and executed for target type (Code: 820)",
        "explanation": "Executes logic for Template Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000083",
    "book": "templates",
    "order_index": 83,
    "title": "#083 Template Problem 83",
    "slug": "templates-083-template-problem-83",
    "description": "Implement generic template component #83 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 83 10",
        "output": "Template #83 instantiated and executed for target type (Code: 830)",
        "explanation": "Executes logic for Template Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000084",
    "book": "templates",
    "order_index": 84,
    "title": "#084 Template Problem 84",
    "slug": "templates-084-template-problem-84",
    "description": "Implement generic template component #84 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 84 10",
        "output": "Template #84 instantiated and executed for target type (Code: 840)",
        "explanation": "Executes logic for Template Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000085",
    "book": "templates",
    "order_index": 85,
    "title": "#085 Template Problem 85",
    "slug": "templates-085-template-problem-85",
    "description": "Implement generic template component #85 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 85 10",
        "output": "Template #85 instantiated and executed for target type (Code: 850)",
        "explanation": "Executes logic for Template Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000086",
    "book": "templates",
    "order_index": 86,
    "title": "#086 Template Problem 86",
    "slug": "templates-086-template-problem-86",
    "description": "Implement generic template component #86 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 86 10",
        "output": "Template #86 instantiated and executed for target type (Code: 860)",
        "explanation": "Executes logic for Template Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000087",
    "book": "templates",
    "order_index": 87,
    "title": "#087 Template Problem 87",
    "slug": "templates-087-template-problem-87",
    "description": "Implement generic template component #87 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 87 10",
        "output": "Template #87 instantiated and executed for target type (Code: 870)",
        "explanation": "Executes logic for Template Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000088",
    "book": "templates",
    "order_index": 88,
    "title": "#088 Template Problem 88",
    "slug": "templates-088-template-problem-88",
    "description": "Implement generic template component #88 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 88 10",
        "output": "Template #88 instantiated and executed for target type (Code: 880)",
        "explanation": "Executes logic for Template Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000089",
    "book": "templates",
    "order_index": 89,
    "title": "#089 Template Problem 89",
    "slug": "templates-089-template-problem-89",
    "description": "Implement generic template component #89 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 89 10",
        "output": "Template #89 instantiated and executed for target type (Code: 890)",
        "explanation": "Executes logic for Template Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000090",
    "book": "templates",
    "order_index": 90,
    "title": "#090 Template Problem 90",
    "slug": "templates-090-template-problem-90",
    "description": "Implement generic template component #90 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 90 10",
        "output": "Template #90 instantiated and executed for target type (Code: 900)",
        "explanation": "Executes logic for Template Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000091",
    "book": "templates",
    "order_index": 91,
    "title": "#091 Template Problem 91",
    "slug": "templates-091-template-problem-91",
    "description": "Implement generic template component #91 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 91 10",
        "output": "Template #91 instantiated and executed for target type (Code: 910)",
        "explanation": "Executes logic for Template Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000092",
    "book": "templates",
    "order_index": 92,
    "title": "#092 Template Problem 92",
    "slug": "templates-092-template-problem-92",
    "description": "Implement generic template component #92 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 92 10",
        "output": "Template #92 instantiated and executed for target type (Code: 920)",
        "explanation": "Executes logic for Template Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000093",
    "book": "templates",
    "order_index": 93,
    "title": "#093 Template Problem 93",
    "slug": "templates-093-template-problem-93",
    "description": "Implement generic template component #93 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 93 10",
        "output": "Template #93 instantiated and executed for target type (Code: 930)",
        "explanation": "Executes logic for Template Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000094",
    "book": "templates",
    "order_index": 94,
    "title": "#094 Template Problem 94",
    "slug": "templates-094-template-problem-94",
    "description": "Implement generic template component #94 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 94 10",
        "output": "Template #94 instantiated and executed for target type (Code: 940)",
        "explanation": "Executes logic for Template Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000095",
    "book": "templates",
    "order_index": 95,
    "title": "#095 Template Problem 95",
    "slug": "templates-095-template-problem-95",
    "description": "Implement generic template component #95 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 95 10",
        "output": "Template #95 instantiated and executed for target type (Code: 950)",
        "explanation": "Executes logic for Template Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000096",
    "book": "templates",
    "order_index": 96,
    "title": "#096 Template Problem 96",
    "slug": "templates-096-template-problem-96",
    "description": "Implement generic template component #96 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 96 10",
        "output": "Template #96 instantiated and executed for target type (Code: 960)",
        "explanation": "Executes logic for Template Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000097",
    "book": "templates",
    "order_index": 97,
    "title": "#097 Template Problem 97",
    "slug": "templates-097-template-problem-97",
    "description": "Implement generic template component #97 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 97 10",
        "output": "Template #97 instantiated and executed for target type (Code: 970)",
        "explanation": "Executes logic for Template Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000098",
    "book": "templates",
    "order_index": 98,
    "title": "#098 Template Problem 98",
    "slug": "templates-098-template-problem-98",
    "description": "Implement generic template component #98 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 98 10",
        "output": "Template #98 instantiated and executed for target type (Code: 980)",
        "explanation": "Executes logic for Template Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000099",
    "book": "templates",
    "order_index": 99,
    "title": "#099 Template Problem 99",
    "slug": "templates-099-template-problem-99",
    "description": "Implement generic template component #99 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 99 10",
        "output": "Template #99 instantiated and executed for target type (Code: 990)",
        "explanation": "Executes logic for Template Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8010-000000000100",
    "book": "templates",
    "order_index": 100,
    "title": "#100 Template Problem 100",
    "slug": "templates-100-template-problem-100",
    "description": "Implement generic template component #100 supporting flexible types, compile-time parameters, or metaprogramming constructs.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Templates & Generic Programming",
    "tags": [
      "Templates",
      "Generics",
      "Metaprogramming",
      "Type Traits",
      "STL"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "TEMPLATE_INPUT 100 10",
        "output": "Template #100 instantiated and executed for target type (Code: 1000)",
        "explanation": "Executes logic for Template Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Template Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Template Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Template Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
