import { Problem } from '../../types/problem';

export const POLYMORPHISM_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8009-000000000001",
    "book": "polymorphism",
    "order_index": 1,
    "title": "#001 Compile-Time vs Run-Time Polymorphism Identification",
    "slug": "polymorphism-001-compile-time-vs-run-time-polymorphism-identificati",
    "description": "Distinguish function overloading / operator overloading from virtual function dynamic dispatch.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Overloading vs Virtual",
        "output": "Compile-Time: Fast static binding | Run-Time: Dynamic vtable dispatch",
        "explanation": "Executes logic for Compile-Time vs Run-Time Polymorphism Identification."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Compile-Time vs Run-Time Polymorphism Identification\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Compile-Time vs Run-Time Polymorphism Identification\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Compile-Time vs Run-Time Polymorphism Identification\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000002",
    "book": "polymorphism",
    "order_index": 2,
    "title": "#002 Virtual Function and Dynamic Binding",
    "slug": "polymorphism-002-virtual-function-and-dynamic-binding",
    "description": "Base pointer to Derived object executes Derived's overridden virtual function.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Base* b = new Derived(); b->speak()",
        "output": "Derived virtual speak() executed",
        "explanation": "Executes logic for Virtual Function and Dynamic Binding."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Function and Dynamic Binding\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Function and Dynamic Binding\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Function and Dynamic Binding\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000003",
    "book": "polymorphism",
    "order_index": 3,
    "title": "#003 Pure Virtual Function and Abstract Base Class",
    "slug": "polymorphism-003-pure-virtual-function-and-abstract-base-class",
    "description": "Define pure virtual `virtual void draw() = 0;` and implement in derived Circle and Square.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Draw Circle and Square",
        "output": "Circle rendered (O) | Square rendered ([])",
        "explanation": "Executes logic for Pure Virtual Function and Abstract Base Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Pure Virtual Function and Abstract Base Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pure Virtual Function and Abstract Base Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pure Virtual Function and Abstract Base Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000004",
    "book": "polymorphism",
    "order_index": 4,
    "title": "#004 Virtual Table (Vtable) and Vptr Inspection",
    "slug": "polymorphism-004-virtual-table-vtable-and-vptr-inspection",
    "description": "Demonstrate how the compiler embeds a virtual table pointer (vptr) inside objects with virtual methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "sizeof(ClassWithVirtual) vs sizeof(Empty)",
        "output": "Object with virtual method has vptr overhead (8 bytes on 64-bit)",
        "explanation": "Executes logic for Virtual Table (Vtable) and Vptr Inspection."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Table (Vtable) and Vptr Inspection\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Table (Vtable) and Vptr Inspection\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Table (Vtable) and Vptr Inspection\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000005",
    "book": "polymorphism",
    "order_index": 5,
    "title": "#005 Virtual Destructor Essential Pattern",
    "slug": "polymorphism-005-virtual-destructor-essential-pattern",
    "description": "Demonstrate clean deletion of derived dynamic resources through base pointer with virtual destructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "delete basePtr",
        "output": "Derived resources freed -> Base resources freed cleanly",
        "explanation": "Executes logic for Virtual Destructor Essential Pattern."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Destructor Essential Pattern\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Destructor Essential Pattern\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Destructor Essential Pattern\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000006",
    "book": "polymorphism",
    "order_index": 6,
    "title": "#006 Overloading Binary Operator (+) for Complex Numbers",
    "slug": "polymorphism-006-overloading-binary-operator-for-complex-numbers",
    "description": "Implement `Complex operator+(const Complex& other) const` adding real and imaginary parts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(3+4i) + (1+2i)",
        "output": "Result: 4 + 6i",
        "explanation": "Executes logic for Overloading Binary Operator (+) for Complex Numbers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Binary Operator (+) for Complex Numbers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Binary Operator (+) for Complex Numbers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Binary Operator (+) for Complex Numbers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000007",
    "book": "polymorphism",
    "order_index": 7,
    "title": "#007 Overloading Binary Operator (-) for 2D Vectors",
    "slug": "polymorphism-007-overloading-binary-operator-for-2d-vectors",
    "description": "Implement `Vector2D operator-(const Vector2D& other) const` subtracting components.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(10, 20) - (3, 5)",
        "output": "Result: (7, 15)",
        "explanation": "Executes logic for Overloading Binary Operator (-) for 2D Vectors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Binary Operator (-) for 2D Vectors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Binary Operator (-) for 2D Vectors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Binary Operator (-) for 2D Vectors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000008",
    "book": "polymorphism",
    "order_index": 8,
    "title": "#008 Overloading Multiplication Operator (*) for Matrix Scaling",
    "slug": "polymorphism-008-overloading-multiplication-operator-for-matrix-sca",
    "description": "Implement `Matrix operator*(double scalar) const` scaling all matrix cells.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Matrix [[1,2],[3,4]] * 3",
        "output": "Scaled: [[3,6],[9,12]]",
        "explanation": "Executes logic for Overloading Multiplication Operator (*) for Matrix Scaling."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Multiplication Operator (*) for Matrix Scaling\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Multiplication Operator (*) for Matrix Scaling\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Multiplication Operator (*) for Matrix Scaling\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000009",
    "book": "polymorphism",
    "order_index": 9,
    "title": "#009 Overloading Equality Operator (==) and Inequality (!=)",
    "slug": "polymorphism-009-overloading-equality-operator-and-inequality",
    "description": "Overload `operator==` and `operator!=` comparing Point coordinates.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Point(3,4) == Point(3,4)",
        "output": "Equal: true",
        "explanation": "Executes logic for Overloading Equality Operator (==) and Inequality (!=)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Equality Operator (==) and Inequality (!=)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Equality Operator (==) and Inequality (!=)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Equality Operator (==) and Inequality (!=)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000010",
    "book": "polymorphism",
    "order_index": 10,
    "title": "#010 Overloading Less Than Operator (<) for std::sort Integration",
    "slug": "polymorphism-010-overloading-less-than-operator-for-std-sort-integr",
    "description": "Overload `operator<` on a Student class comparing GPA for automatic sorting.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sort [Alice(3.5), Bob(3.9), Charlie(3.2)]",
        "output": "Sorted: Charlie (3.2), Alice (3.5), Bob (3.9)",
        "explanation": "Executes logic for Overloading Less Than Operator (<) for std::sort Integration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Less Than Operator (<) for std::sort Integration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Less Than Operator (<) for std::sort Integration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Less Than Operator (<) for std::sort Integration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000011",
    "book": "polymorphism",
    "order_index": 11,
    "title": "#011 Overloading Array Subscript Operator (operator[])",
    "slug": "polymorphism-011-overloading-array-subscript-operator-operator",
    "description": "Overload `int& operator[](size_t index)` and `const int& operator[](size_t index) const` with bounds check.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Arr[2] = 99",
        "output": "Element at index 2 updated to 99",
        "explanation": "Executes logic for Overloading Array Subscript Operator (operator[])."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Array Subscript Operator (operator[])\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Array Subscript Operator (operator[])\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Array Subscript Operator (operator[])\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000012",
    "book": "polymorphism",
    "order_index": 12,
    "title": "#012 Overloading Function Call Operator (operator()) - Functors",
    "slug": "polymorphism-012-overloading-function-call-operator-operator-functo",
    "description": "Create a Functor class `Multiplier` overloading `operator()(int x)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Multiplier(5)(10)",
        "output": "Functor result: 50",
        "explanation": "Executes logic for Overloading Function Call Operator (operator()) - Functors."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Function Call Operator (operator()) - Functors\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Function Call Operator (operator()) - Functors\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Function Call Operator (operator()) - Functors\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000013",
    "book": "polymorphism",
    "order_index": 13,
    "title": "#013 Overloading Pre-Increment (++x) and Post-Increment (x++) Operators",
    "slug": "polymorphism-013-overloading-pre-increment-x-and-post-increment-x-o",
    "description": "Implement prefix `Counter& operator++()` and postfix `Counter operator++(int)`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "c++ and ++c",
        "output": "Prefix: incremented then returned; Postfix: returned old then incremented",
        "explanation": "Executes logic for Overloading Pre-Increment (++x) and Post-Increment (x++) Operators."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Pre-Increment (++x) and Post-Increment (x++) Operators\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Pre-Increment (++x) and Post-Increment (x++) Operators\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Pre-Increment (++x) and Post-Increment (x++) Operators\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000014",
    "book": "polymorphism",
    "order_index": 14,
    "title": "#014 Overloading Dereference (*) and Arrow (->) Operators (Smart Pointer)",
    "slug": "polymorphism-014-overloading-dereference-and-arrow-operators-smart",
    "description": "Implement a custom UniquePointer class overloading `operator*` and `operator->`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "smartPtr->print()",
        "output": "Smart pointer dereferenced safely",
        "explanation": "Executes logic for Overloading Dereference (*) and Arrow (->) Operators (Smart Pointer)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Dereference (*) and Arrow (->) Operators (Smart Pointer)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Dereference (*) and Arrow (->) Operators (Smart Pointer)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Dereference (*) and Arrow (->) Operators (Smart Pointer)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000015",
    "book": "polymorphism",
    "order_index": 15,
    "title": "#015 Overloading Stream Insertion (<<) and Extraction (>>)",
    "slug": "polymorphism-015-overloading-stream-insertion-and-extraction",
    "description": "Overload `<<` and `>>` as friends for reading and printing custom Fraction objects.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Cin '3/4' -> Cout",
        "output": "Fraction: 3/4",
        "explanation": "Executes logic for Overloading Stream Insertion (<<) and Extraction (>>)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Stream Insertion (<<) and Extraction (>>)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Stream Insertion (<<) and Extraction (>>)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Stream Insertion (<<) and Extraction (>>)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000016",
    "book": "polymorphism",
    "order_index": 16,
    "title": "#016 Overloading Type Conversion Operator (operator T())",
    "slug": "polymorphism-016-overloading-type-conversion-operator-operator-t",
    "description": "Implement `operator double()` on Fraction class allowing implicit/explicit cast to floating point.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Fraction(3, 4) to double",
        "output": "Double value: 0.75",
        "explanation": "Executes logic for Overloading Type Conversion Operator (operator T())."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloading Type Conversion Operator (operator T())\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloading Type Conversion Operator (operator T())\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloading Type Conversion Operator (operator T())\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000017",
    "book": "polymorphism",
    "order_index": 17,
    "title": "#017 Dynamic Casting (`dynamic_cast`) for Safe Downcasting",
    "slug": "polymorphism-017-dynamic-casting-dynamic-cast-for-safe-downcasting",
    "description": "Safely downcast `Base*` to `Derived*` using `dynamic_cast`, verifying nullptr on failure.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "dynamic_cast<Dog*>(animalPtr)",
        "output": "Downcast succeeded: Dog barking",
        "explanation": "Executes logic for Dynamic Casting (`dynamic_cast`) for Safe Downcasting."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Dynamic Casting (`dynamic_cast`) for Safe Downcasting\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Dynamic Casting (`dynamic_cast`) for Safe Downcasting\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Dynamic Casting (`dynamic_cast`) for Safe Downcasting\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000018",
    "book": "polymorphism",
    "order_index": 18,
    "title": "#018 Static Casting (`static_cast`) in Class Hierarchies",
    "slug": "polymorphism-018-static-casting-static-cast-in-class-hierarchies",
    "description": "Demonstrate compile-time upcasting and downcasting with `static_cast` without runtime check.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "static_cast<Base*>(derivedPtr)",
        "output": "Upcast completed at compile-time",
        "explanation": "Executes logic for Static Casting (`static_cast`) in Class Hierarchies."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Static Casting (`static_cast`) in Class Hierarchies\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Static Casting (`static_cast`) in Class Hierarchies\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Static Casting (`static_cast`) in Class Hierarchies\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000019",
    "book": "polymorphism",
    "order_index": 19,
    "title": "#019 Reinterpret Casting (`reinterpret_cast`) for Raw Byte Inspection",
    "slug": "polymorphism-019-reinterpret-casting-reinterpret-cast-for-raw-byte",
    "description": "Inspect raw byte representation of a struct using `reinterpret_cast<const char*>`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Struct bytes inspection",
        "output": "Raw memory bytes read: 0x41 0x00 0x00 0x00",
        "explanation": "Executes logic for Reinterpret Casting (`reinterpret_cast`) for Raw Byte Inspection."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Reinterpret Casting (`reinterpret_cast`) for Raw Byte Inspection\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Reinterpret Casting (`reinterpret_cast`) for Raw Byte Inspection\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Reinterpret Casting (`reinterpret_cast`) for Raw Byte Inspection\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000020",
    "book": "polymorphism",
    "order_index": 20,
    "title": "#020 Const Casting (`const_cast`) to Remove Constness in C API Interop",
    "slug": "polymorphism-020-const-casting-const-cast-to-remove-constness-in-c",
    "description": "Use `const_cast` to pass const string into legacy C API taking non-const `char*`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "const char* to char*",
        "output": "Constness safely removed for legacy function call",
        "explanation": "Executes logic for Const Casting (`const_cast`) to Remove Constness in C API Interop."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Const Casting (`const_cast`) to Remove Constness in C API Interop\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Const Casting (`const_cast`) to Remove Constness in C API Interop\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Const Casting (`const_cast`) to Remove Constness in C API Interop\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000021",
    "book": "polymorphism",
    "order_index": 21,
    "title": "#021 Type Identification at Runtime (`typeid` & RTTI)",
    "slug": "polymorphism-021-type-identification-at-runtime-typeid-rtti",
    "description": "Inspect runtime type name of polymorphic object using `typeid(*basePtr).name()`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "typeid(*shapePtr)",
        "output": "Type name resolved at runtime: Circle",
        "explanation": "Executes logic for Type Identification at Runtime (`typeid` & RTTI)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Type Identification at Runtime (`typeid` & RTTI)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Type Identification at Runtime (`typeid` & RTTI)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Type Identification at Runtime (`typeid` & RTTI)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000022",
    "book": "polymorphism",
    "order_index": 22,
    "title": "#022 Pure Virtual Destructor",
    "slug": "polymorphism-022-pure-virtual-destructor",
    "description": "Declare `virtual ~AbstractBase() = 0;` and provide external definition body.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Pure virtual dtor",
        "output": "Pure virtual destructor executed cleanly",
        "explanation": "Executes logic for Pure Virtual Destructor."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Pure Virtual Destructor\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pure Virtual Destructor\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pure Virtual Destructor\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000023",
    "book": "polymorphism",
    "order_index": 23,
    "title": "#023 Interface Class Implementation (No Data Members, All Pure Virtual)",
    "slug": "polymorphism-023-interface-class-implementation-no-data-members-all",
    "description": "Define pure interface `IComparable` with `virtual int compareTo(const IComparable&) = 0`.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compare two objects",
        "output": "Interface contract verified: Return -1 (Less than)",
        "explanation": "Executes logic for Interface Class Implementation (No Data Members, All Pure Virtual)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Interface Class Implementation (No Data Members, All Pure Virtual)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Interface Class Implementation (No Data Members, All Pure Virtual)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Interface Class Implementation (No Data Members, All Pure Virtual)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000024",
    "book": "polymorphism",
    "order_index": 24,
    "title": "#024 Heterogeneous Container of Polymorphic Base Pointers",
    "slug": "polymorphism-024-heterogeneous-container-of-polymorphic-base-pointe",
    "description": "Store `vector<unique_ptr<Shape>>` and compute total perimeter polymorphically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Circle(5), Rect(4,6)",
        "output": "Perimeter sum: 31.42 + 20.00 = 51.42",
        "explanation": "Executes logic for Heterogeneous Container of Polymorphic Base Pointers."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Heterogeneous Container of Polymorphic Base Pointers\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Heterogeneous Container of Polymorphic Base Pointers\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Heterogeneous Container of Polymorphic Base Pointers\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000025",
    "book": "polymorphism",
    "order_index": 25,
    "title": "#025 Double Dispatch Pattern (Visitor Pattern Simulation)",
    "slug": "polymorphism-025-double-dispatch-pattern-visitor-pattern-simulation",
    "description": "Implement double dispatch between Shape types to compute intersection area.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Circle intersects Rectangle",
        "output": "Double dispatch resolved: Intersection computed",
        "explanation": "Executes logic for Double Dispatch Pattern (Visitor Pattern Simulation)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Double Dispatch Pattern (Visitor Pattern Simulation)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Double Dispatch Pattern (Visitor Pattern Simulation)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Double Dispatch Pattern (Visitor Pattern Simulation)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000026",
    "book": "polymorphism",
    "order_index": 26,
    "title": "#026 Virtual Method with Default Arguments Pitfall",
    "slug": "polymorphism-026-virtual-method-with-default-arguments-pitfall",
    "description": "Demonstrate that default arguments are statically bound at compile time, not dynamically bound.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call virtual with default",
        "output": "Static default argument used with dynamic method body",
        "explanation": "Executes logic for Virtual Method with Default Arguments Pitfall."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Method with Default Arguments Pitfall\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Method with Default Arguments Pitfall\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Method with Default Arguments Pitfall\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000027",
    "book": "polymorphism",
    "order_index": 27,
    "title": "#027 Calling Virtual Functions Inside Constructors Warning",
    "slug": "polymorphism-027-calling-virtual-functions-inside-constructors-warn",
    "description": "Show that virtual functions called inside a constructor bind to the current class, not derived.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call in constructor",
        "output": "Base constructor called Base::init(), not Derived::init()",
        "explanation": "Executes logic for Calling Virtual Functions Inside Constructors Warning."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Calling Virtual Functions Inside Constructors Warning\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Calling Virtual Functions Inside Constructors Warning\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Calling Virtual Functions Inside Constructors Warning\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000028",
    "book": "polymorphism",
    "order_index": 28,
    "title": "#028 Calling Virtual Functions Inside Destructors Warning",
    "slug": "polymorphism-028-calling-virtual-functions-inside-destructors-warni",
    "description": "Show that virtual calls inside destructors dispatch only to currently destructing class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call in destructor",
        "output": "Destructor called local virtual method, derived already destroyed",
        "explanation": "Executes logic for Calling Virtual Functions Inside Destructors Warning."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Calling Virtual Functions Inside Destructors Warning\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Calling Virtual Functions Inside Destructors Warning\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Calling Virtual Functions Inside Destructors Warning\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000029",
    "book": "polymorphism",
    "order_index": 29,
    "title": "#029 Non-Virtual Interface (NVI) Idiom",
    "slug": "polymorphism-029-non-virtual-interface-nvi-idiom",
    "description": "Public non-virtual method calls private virtual hook method for invariant pre/post checking.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call execute()",
        "output": "Pre-check passed -> Private virtual run() -> Post-check verified",
        "explanation": "Executes logic for Non-Virtual Interface (NVI) Idiom."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Non-Virtual Interface (NVI) Idiom\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Non-Virtual Interface (NVI) Idiom\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Non-Virtual Interface (NVI) Idiom\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000030",
    "book": "polymorphism",
    "order_index": 30,
    "title": "#030 Curiously Recurring Template Pattern (CRTP) - Static Polymorphism",
    "slug": "polymorphism-030-curiously-recurring-template-pattern-crtp-static-p",
    "description": "Implement static polymorphism using CRTP `class Derived : public Base<Derived>` with 0 overhead.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CRTP dispatch",
        "output": "Static polymorphism executed with 0 virtual table overhead",
        "explanation": "Executes logic for Curiously Recurring Template Pattern (CRTP) - Static Polymorphism."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Curiously Recurring Template Pattern (CRTP) - Static Polymorphism\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Curiously Recurring Template Pattern (CRTP) - Static Polymorphism\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Curiously Recurring Template Pattern (CRTP) - Static Polymorphism\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000031",
    "book": "polymorphism",
    "order_index": 31,
    "title": "#031 Polymorphic Shape Renderer Pipeline",
    "slug": "polymorphism-031-polymorphic-shape-renderer-pipeline",
    "description": "Process polymorphic list of shapes rendering rasterized representations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Render [Triangle, Circle, Square]",
        "output": "Triangle rendered, Circle rendered, Square rendered",
        "explanation": "Executes logic for Polymorphic Shape Renderer Pipeline."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Shape Renderer Pipeline\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Shape Renderer Pipeline\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Shape Renderer Pipeline\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000032",
    "book": "polymorphism",
    "order_index": 32,
    "title": "#032 Polymorphic Audio Synthesizer: SineWave, SquareWave, SawtoothWave",
    "slug": "polymorphism-032-polymorphic-audio-synthesizer-sinewave-squarewave",
    "description": "Generate audio samples from polymorphic oscillator classes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Play 440Hz Sine & Square",
        "output": "Generated audio buffers for Sine and Square waves",
        "explanation": "Executes logic for Polymorphic Audio Synthesizer: SineWave, SquareWave, SawtoothWave."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Audio Synthesizer: SineWave, SquareWave, SawtoothWave\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Audio Synthesizer: SineWave, SquareWave, SawtoothWave\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Audio Synthesizer: SineWave, SquareWave, SawtoothWave\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000033",
    "book": "polymorphism",
    "order_index": 33,
    "title": "#033 Polymorphic Document Exporter: PDF, HTML, Markdown, EPUB",
    "slug": "polymorphism-033-polymorphic-document-exporter-pdf-html-markdown-ep",
    "description": "Export single Document object to selected format via polymorphic Exporter.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Export Doc to HTML",
        "output": "Exported HTML: <html><body>Content</body></html>",
        "explanation": "Executes logic for Polymorphic Document Exporter: PDF, HTML, Markdown, EPUB."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Document Exporter: PDF, HTML, Markdown, EPUB\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Document Exporter: PDF, HTML, Markdown, EPUB\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Document Exporter: PDF, HTML, Markdown, EPUB\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000034",
    "book": "polymorphism",
    "order_index": 34,
    "title": "#034 Polymorphic Payment Processing Engine",
    "slug": "polymorphism-034-polymorphic-payment-processing-engine",
    "description": "Charge customer through polymorphic PaymentGateway (Stripe, PayPal, Crypto).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Charge $99.99 via Stripe",
        "output": "Stripe payment authorized: $99.99 (TransID: ch_9a8b7c)",
        "explanation": "Executes logic for Polymorphic Payment Processing Engine."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Payment Processing Engine\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Payment Processing Engine\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Payment Processing Engine\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000035",
    "book": "polymorphism",
    "order_index": 35,
    "title": "#035 Polymorphic Game AI Behavior Tree Nodes",
    "slug": "polymorphism-035-polymorphic-game-ai-behavior-tree-nodes",
    "description": "Evaluate Sequence, Selector, and Action nodes polymorphically in behavior tree.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Run AI Selector Node",
        "output": "Selector evaluated: Action 'Attack' succeeded",
        "explanation": "Executes logic for Polymorphic Game AI Behavior Tree Nodes."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Game AI Behavior Tree Nodes\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Game AI Behavior Tree Nodes\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Game AI Behavior Tree Nodes\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000036",
    "book": "polymorphism",
    "order_index": 36,
    "title": "#036 Polymorphic Enemy Attack Strategies: Melee, Ranged, Magic",
    "slug": "polymorphism-036-polymorphic-enemy-attack-strategies-melee-ranged-m",
    "description": "Boss enemy switches attack strategy dynamically at runtime.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Boss enters Phase 2 (Magic)",
        "output": "Strategy switched to Magic: Cast Meteor for 150 dmg",
        "explanation": "Executes logic for Polymorphic Enemy Attack Strategies: Melee, Ranged, Magic."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Enemy Attack Strategies: Melee, Ranged, Magic\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Enemy Attack Strategies: Melee, Ranged, Magic\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Enemy Attack Strategies: Melee, Ranged, Magic\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000037",
    "book": "polymorphism",
    "order_index": 37,
    "title": "#037 Polymorphic File Compression System",
    "slug": "polymorphism-037-polymorphic-file-compression-system",
    "description": "Compress file stream using Zip, Gzip, or Bzip2 polymorphic compressor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compress using Gzip",
        "output": "Gzip compressor applied: 50% ratio",
        "explanation": "Executes logic for Polymorphic File Compression System."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic File Compression System\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic File Compression System\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic File Compression System\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000038",
    "book": "polymorphism",
    "order_index": 38,
    "title": "#038 Polymorphic Database Query Builder",
    "slug": "polymorphism-038-polymorphic-database-query-builder",
    "description": "Generate dialect-specific SQL (PostgreSQL, MySQL, Oracle, SQLite) polymorphically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Generate LIMIT query for Oracle vs Postgres",
        "output": "Postgres: 'LIMIT 10' | Oracle: 'FETCH FIRST 10 ROWS ONLY'",
        "explanation": "Executes logic for Polymorphic Database Query Builder."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Database Query Builder\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Database Query Builder\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Database Query Builder\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000039",
    "book": "polymorphism",
    "order_index": 39,
    "title": "#039 Polymorphic GUI Layout Manager: FlowLayout, GridLayout, BorderLayout",
    "slug": "polymorphism-039-polymorphic-gui-layout-manager-flowlayout-gridlayo",
    "description": "Calculate child widget positions polymorphically based on active layout manager.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "GridLayout (2x2) with 4 buttons",
        "output": "Buttons positioned at (0,0), (0,1), (1,0), (1,1)",
        "explanation": "Executes logic for Polymorphic GUI Layout Manager: FlowLayout, GridLayout, BorderLayout."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic GUI Layout Manager: FlowLayout, GridLayout, BorderLayout\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic GUI Layout Manager: FlowLayout, GridLayout, BorderLayout\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic GUI Layout Manager: FlowLayout, GridLayout, BorderLayout\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000040",
    "book": "polymorphism",
    "order_index": 40,
    "title": "#040 Polymorphic Cache Eviction Policy: LRU, LFU, FIFO, Random",
    "slug": "polymorphism-040-polymorphic-cache-eviction-policy-lru-lfu-fifo-ran",
    "description": "Evict item from cache using active polymorphic eviction strategy.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Evict from full cache (LRU)",
        "output": "LRU strategy selected item 'KeyB' for eviction",
        "explanation": "Executes logic for Polymorphic Cache Eviction Policy: LRU, LFU, FIFO, Random."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Cache Eviction Policy: LRU, LFU, FIFO, Random\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Cache Eviction Policy: LRU, LFU, FIFO, Random\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Cache Eviction Policy: LRU, LFU, FIFO, Random\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000041",
    "book": "polymorphism",
    "order_index": 41,
    "title": "#041 Polymorphic Sorting Algorithm Benchmarking Suite",
    "slug": "polymorphism-041-polymorphic-sorting-algorithm-benchmarking-suite",
    "description": "Benchmark QuickSort, MergeSort, HeapSort polymorphically on 100k integers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Run benchmark on all sorters",
        "output": "QuickSort: 12ms, MergeSort: 15ms, HeapSort: 18ms",
        "explanation": "Executes logic for Polymorphic Sorting Algorithm Benchmarking Suite."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Sorting Algorithm Benchmarking Suite\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Sorting Algorithm Benchmarking Suite\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Sorting Algorithm Benchmarking Suite\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000042",
    "book": "polymorphism",
    "order_index": 42,
    "title": "#042 Polymorphic Serializer: JSON, XML, ProtocolBuffers, MessagePack",
    "slug": "polymorphism-042-polymorphic-serializer-json-xml-protocolbuffers-me",
    "description": "Serialize game state object polymorphically to binary or text formats.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Serialize state to ProtoBuf",
        "output": "State serialized into 48-byte ProtoBuf binary payload",
        "explanation": "Executes logic for Polymorphic Serializer: JSON, XML, ProtocolBuffers, MessagePack."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Serializer: JSON, XML, ProtocolBuffers, MessagePack\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Serializer: JSON, XML, ProtocolBuffers, MessagePack\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Serializer: JSON, XML, ProtocolBuffers, MessagePack\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000043",
    "book": "polymorphism",
    "order_index": 43,
    "title": "#043 Polymorphic Network Socket: TCPSocket, UDPSocket, UnixDomainSocket",
    "slug": "polymorphism-043-polymorphic-network-socket-tcpsocket-udpsocket-uni",
    "description": "Send packets through polymorphic Socket interface.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Send datagram via UDPSocket",
        "output": "UDP Socket sent 64 bytes to 192.168.1.1:8080",
        "explanation": "Executes logic for Polymorphic Network Socket: TCPSocket, UDPSocket, UnixDomainSocket."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Network Socket: TCPSocket, UDPSocket, UnixDomainSocket\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Network Socket: TCPSocket, UDPSocket, UnixDomainSocket\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Network Socket: TCPSocket, UDPSocket, UnixDomainSocket\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000044",
    "book": "polymorphism",
    "order_index": 44,
    "title": "#044 Polymorphic Machine Learning Activation Functions: ReLU, Sigmoid, Tanh, Softmax",
    "slug": "polymorphism-044-polymorphic-machine-learning-activation-functions",
    "description": "Compute activation and derivative polymorphically for neural network layer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Compute ReLU(-3.5) and ReLU(2.0)",
        "output": "ReLU(-3.5) = 0.0, ReLU(2.0) = 2.0",
        "explanation": "Executes logic for Polymorphic Machine Learning Activation Functions: ReLU, Sigmoid, Tanh, Softmax."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Machine Learning Activation Functions: ReLU, Sigmoid, Tanh, Softmax\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Machine Learning Activation Functions: ReLU, Sigmoid, Tanh, Softmax\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Machine Learning Activation Functions: ReLU, Sigmoid, Tanh, Softmax\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000045",
    "book": "polymorphism",
    "order_index": 45,
    "title": "#045 Polymorphic Route Planning Engine: Walking, Bicycling, Driving, Transit",
    "slug": "polymorphism-045-polymorphic-route-planning-engine-walking-bicyclin",
    "description": "Calculate shortest path between two points using modality-specific graph weights.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Route A to B (Transit)",
        "output": "Transit Route: Bus Line 42 (Duration: 25 mins)",
        "explanation": "Executes logic for Polymorphic Route Planning Engine: Walking, Bicycling, Driving, Transit."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Route Planning Engine: Walking, Bicycling, Driving, Transit\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Route Planning Engine: Walking, Bicycling, Driving, Transit\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Route Planning Engine: Walking, Bicycling, Driving, Transit\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000046",
    "book": "polymorphism",
    "order_index": 46,
    "title": "#046 Polymorphic Image Filter Pipeline: Grayscale, Sepia, Blur, Invert",
    "slug": "polymorphism-046-polymorphic-image-filter-pipeline-grayscale-sepia",
    "description": "Apply chain of polymorphic image filters to pixel buffer.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Apply Blur then Sepia",
        "output": "Image processed: Blur filter applied -> Sepia filter applied",
        "explanation": "Executes logic for Polymorphic Image Filter Pipeline: Grayscale, Sepia, Blur, Invert."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Image Filter Pipeline: Grayscale, Sepia, Blur, Invert\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Image Filter Pipeline: Grayscale, Sepia, Blur, Invert\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Image Filter Pipeline: Grayscale, Sepia, Blur, Invert\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000047",
    "book": "polymorphism",
    "order_index": 47,
    "title": "#047 Polymorphic Authentication Provider: OAuth2, SAML, LDAP, Password",
    "slug": "polymorphism-047-polymorphic-authentication-provider-oauth2-saml-ld",
    "description": "Authenticate credentials through polymorphic AuthProvider.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Auth via OAuth2 (Google)",
        "output": "OAuth2 token verified: User logged in",
        "explanation": "Executes logic for Polymorphic Authentication Provider: OAuth2, SAML, LDAP, Password."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Authentication Provider: OAuth2, SAML, LDAP, Password\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Authentication Provider: OAuth2, SAML, LDAP, Password\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Authentication Provider: OAuth2, SAML, LDAP, Password\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000048",
    "book": "polymorphism",
    "order_index": 48,
    "title": "#048 Polymorphic Cryptographic Hash Function: SHA256, MD5, Keccak256, BLAKE3",
    "slug": "polymorphism-048-polymorphic-cryptographic-hash-function-sha256-md5",
    "description": "Compute hash digest of input message polymorphically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Hash 'Hello World' via SHA256",
        "output": "SHA256: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e",
        "explanation": "Executes logic for Polymorphic Cryptographic Hash Function: SHA256, MD5, Keccak256, BLAKE3."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Cryptographic Hash Function: SHA256, MD5, Keccak256, BLAKE3\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Cryptographic Hash Function: SHA256, MD5, Keccak256, BLAKE3\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Cryptographic Hash Function: SHA256, MD5, Keccak256, BLAKE3\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000049",
    "book": "polymorphism",
    "order_index": 49,
    "title": "#049 Polymorphic Task Queue Worker: EmailWorker, PDFRenderWorker, VideoEncodeWorker",
    "slug": "polymorphism-049-polymorphic-task-queue-worker-emailworker-pdfrende",
    "description": "Worker pool processes diverse job objects polymorphically.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Process VideoEncode Job",
        "output": "VideoEncodeWorker: Encoded 1080p clip in 3.2s",
        "explanation": "Executes logic for Polymorphic Task Queue Worker: EmailWorker, PDFRenderWorker, VideoEncodeWorker."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Task Queue Worker: EmailWorker, PDFRenderWorker, VideoEncodeWorker\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Task Queue Worker: EmailWorker, PDFRenderWorker, VideoEncodeWorker\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Task Queue Worker: EmailWorker, PDFRenderWorker, VideoEncodeWorker\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000050",
    "book": "polymorphism",
    "order_index": 50,
    "title": "#050 Polymorphic Text Spell Checker: English, Spanish, French, German",
    "slug": "polymorphism-050-polymorphic-text-spell-checker-english-spanish-fre",
    "description": "Check word spelling using language-specific polymorphic dictionary.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Check 'Bonjour' (French)",
        "output": "French SpellChecker: 'Bonjour' is valid",
        "explanation": "Executes logic for Polymorphic Text Spell Checker: English, Spanish, French, German."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphic Text Spell Checker: English, Spanish, French, German\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphic Text Spell Checker: English, Spanish, French, German\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphic Text Spell Checker: English, Spanish, French, German\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000051",
    "book": "polymorphism",
    "order_index": 51,
    "title": "#051 Polymorphism Problem 51",
    "slug": "polymorphism-051-polymorphism-problem-51",
    "description": "Implement polymorphic design #51 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 51 10",
        "output": "Dynamic dispatch #51 executed with polymorphic type binding (Code: 510)",
        "explanation": "Executes logic for Polymorphism Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000052",
    "book": "polymorphism",
    "order_index": 52,
    "title": "#052 Polymorphism Problem 52",
    "slug": "polymorphism-052-polymorphism-problem-52",
    "description": "Implement polymorphic design #52 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 52 10",
        "output": "Dynamic dispatch #52 executed with polymorphic type binding (Code: 520)",
        "explanation": "Executes logic for Polymorphism Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000053",
    "book": "polymorphism",
    "order_index": 53,
    "title": "#053 Polymorphism Problem 53",
    "slug": "polymorphism-053-polymorphism-problem-53",
    "description": "Implement polymorphic design #53 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 53 10",
        "output": "Dynamic dispatch #53 executed with polymorphic type binding (Code: 530)",
        "explanation": "Executes logic for Polymorphism Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000054",
    "book": "polymorphism",
    "order_index": 54,
    "title": "#054 Polymorphism Problem 54",
    "slug": "polymorphism-054-polymorphism-problem-54",
    "description": "Implement polymorphic design #54 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 54 10",
        "output": "Dynamic dispatch #54 executed with polymorphic type binding (Code: 540)",
        "explanation": "Executes logic for Polymorphism Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000055",
    "book": "polymorphism",
    "order_index": 55,
    "title": "#055 Polymorphism Problem 55",
    "slug": "polymorphism-055-polymorphism-problem-55",
    "description": "Implement polymorphic design #55 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 55 10",
        "output": "Dynamic dispatch #55 executed with polymorphic type binding (Code: 550)",
        "explanation": "Executes logic for Polymorphism Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000056",
    "book": "polymorphism",
    "order_index": 56,
    "title": "#056 Polymorphism Problem 56",
    "slug": "polymorphism-056-polymorphism-problem-56",
    "description": "Implement polymorphic design #56 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 56 10",
        "output": "Dynamic dispatch #56 executed with polymorphic type binding (Code: 560)",
        "explanation": "Executes logic for Polymorphism Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000057",
    "book": "polymorphism",
    "order_index": 57,
    "title": "#057 Polymorphism Problem 57",
    "slug": "polymorphism-057-polymorphism-problem-57",
    "description": "Implement polymorphic design #57 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 57 10",
        "output": "Dynamic dispatch #57 executed with polymorphic type binding (Code: 570)",
        "explanation": "Executes logic for Polymorphism Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000058",
    "book": "polymorphism",
    "order_index": 58,
    "title": "#058 Polymorphism Problem 58",
    "slug": "polymorphism-058-polymorphism-problem-58",
    "description": "Implement polymorphic design #58 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 58 10",
        "output": "Dynamic dispatch #58 executed with polymorphic type binding (Code: 580)",
        "explanation": "Executes logic for Polymorphism Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000059",
    "book": "polymorphism",
    "order_index": 59,
    "title": "#059 Polymorphism Problem 59",
    "slug": "polymorphism-059-polymorphism-problem-59",
    "description": "Implement polymorphic design #59 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 59 10",
        "output": "Dynamic dispatch #59 executed with polymorphic type binding (Code: 590)",
        "explanation": "Executes logic for Polymorphism Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000060",
    "book": "polymorphism",
    "order_index": 60,
    "title": "#060 Polymorphism Problem 60",
    "slug": "polymorphism-060-polymorphism-problem-60",
    "description": "Implement polymorphic design #60 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 60 10",
        "output": "Dynamic dispatch #60 executed with polymorphic type binding (Code: 600)",
        "explanation": "Executes logic for Polymorphism Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000061",
    "book": "polymorphism",
    "order_index": 61,
    "title": "#061 Polymorphism Problem 61",
    "slug": "polymorphism-061-polymorphism-problem-61",
    "description": "Implement polymorphic design #61 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 61 10",
        "output": "Dynamic dispatch #61 executed with polymorphic type binding (Code: 610)",
        "explanation": "Executes logic for Polymorphism Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000062",
    "book": "polymorphism",
    "order_index": 62,
    "title": "#062 Polymorphism Problem 62",
    "slug": "polymorphism-062-polymorphism-problem-62",
    "description": "Implement polymorphic design #62 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 62 10",
        "output": "Dynamic dispatch #62 executed with polymorphic type binding (Code: 620)",
        "explanation": "Executes logic for Polymorphism Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000063",
    "book": "polymorphism",
    "order_index": 63,
    "title": "#063 Polymorphism Problem 63",
    "slug": "polymorphism-063-polymorphism-problem-63",
    "description": "Implement polymorphic design #63 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 63 10",
        "output": "Dynamic dispatch #63 executed with polymorphic type binding (Code: 630)",
        "explanation": "Executes logic for Polymorphism Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000064",
    "book": "polymorphism",
    "order_index": 64,
    "title": "#064 Polymorphism Problem 64",
    "slug": "polymorphism-064-polymorphism-problem-64",
    "description": "Implement polymorphic design #64 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 64 10",
        "output": "Dynamic dispatch #64 executed with polymorphic type binding (Code: 640)",
        "explanation": "Executes logic for Polymorphism Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000065",
    "book": "polymorphism",
    "order_index": 65,
    "title": "#065 Polymorphism Problem 65",
    "slug": "polymorphism-065-polymorphism-problem-65",
    "description": "Implement polymorphic design #65 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 65 10",
        "output": "Dynamic dispatch #65 executed with polymorphic type binding (Code: 650)",
        "explanation": "Executes logic for Polymorphism Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000066",
    "book": "polymorphism",
    "order_index": 66,
    "title": "#066 Polymorphism Problem 66",
    "slug": "polymorphism-066-polymorphism-problem-66",
    "description": "Implement polymorphic design #66 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 66 10",
        "output": "Dynamic dispatch #66 executed with polymorphic type binding (Code: 660)",
        "explanation": "Executes logic for Polymorphism Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000067",
    "book": "polymorphism",
    "order_index": 67,
    "title": "#067 Polymorphism Problem 67",
    "slug": "polymorphism-067-polymorphism-problem-67",
    "description": "Implement polymorphic design #67 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 67 10",
        "output": "Dynamic dispatch #67 executed with polymorphic type binding (Code: 670)",
        "explanation": "Executes logic for Polymorphism Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000068",
    "book": "polymorphism",
    "order_index": 68,
    "title": "#068 Polymorphism Problem 68",
    "slug": "polymorphism-068-polymorphism-problem-68",
    "description": "Implement polymorphic design #68 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 68 10",
        "output": "Dynamic dispatch #68 executed with polymorphic type binding (Code: 680)",
        "explanation": "Executes logic for Polymorphism Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000069",
    "book": "polymorphism",
    "order_index": 69,
    "title": "#069 Polymorphism Problem 69",
    "slug": "polymorphism-069-polymorphism-problem-69",
    "description": "Implement polymorphic design #69 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 69 10",
        "output": "Dynamic dispatch #69 executed with polymorphic type binding (Code: 690)",
        "explanation": "Executes logic for Polymorphism Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000070",
    "book": "polymorphism",
    "order_index": 70,
    "title": "#070 Polymorphism Problem 70",
    "slug": "polymorphism-070-polymorphism-problem-70",
    "description": "Implement polymorphic design #70 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 70 10",
        "output": "Dynamic dispatch #70 executed with polymorphic type binding (Code: 700)",
        "explanation": "Executes logic for Polymorphism Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000071",
    "book": "polymorphism",
    "order_index": 71,
    "title": "#071 Polymorphism Problem 71",
    "slug": "polymorphism-071-polymorphism-problem-71",
    "description": "Implement polymorphic design #71 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 71 10",
        "output": "Dynamic dispatch #71 executed with polymorphic type binding (Code: 710)",
        "explanation": "Executes logic for Polymorphism Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000072",
    "book": "polymorphism",
    "order_index": 72,
    "title": "#072 Polymorphism Problem 72",
    "slug": "polymorphism-072-polymorphism-problem-72",
    "description": "Implement polymorphic design #72 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 72 10",
        "output": "Dynamic dispatch #72 executed with polymorphic type binding (Code: 720)",
        "explanation": "Executes logic for Polymorphism Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000073",
    "book": "polymorphism",
    "order_index": 73,
    "title": "#073 Polymorphism Problem 73",
    "slug": "polymorphism-073-polymorphism-problem-73",
    "description": "Implement polymorphic design #73 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 73 10",
        "output": "Dynamic dispatch #73 executed with polymorphic type binding (Code: 730)",
        "explanation": "Executes logic for Polymorphism Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000074",
    "book": "polymorphism",
    "order_index": 74,
    "title": "#074 Polymorphism Problem 74",
    "slug": "polymorphism-074-polymorphism-problem-74",
    "description": "Implement polymorphic design #74 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 74 10",
        "output": "Dynamic dispatch #74 executed with polymorphic type binding (Code: 740)",
        "explanation": "Executes logic for Polymorphism Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000075",
    "book": "polymorphism",
    "order_index": 75,
    "title": "#075 Polymorphism Problem 75",
    "slug": "polymorphism-075-polymorphism-problem-75",
    "description": "Implement polymorphic design #75 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 75 10",
        "output": "Dynamic dispatch #75 executed with polymorphic type binding (Code: 750)",
        "explanation": "Executes logic for Polymorphism Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000076",
    "book": "polymorphism",
    "order_index": 76,
    "title": "#076 Polymorphism Problem 76",
    "slug": "polymorphism-076-polymorphism-problem-76",
    "description": "Implement polymorphic design #76 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 76 10",
        "output": "Dynamic dispatch #76 executed with polymorphic type binding (Code: 760)",
        "explanation": "Executes logic for Polymorphism Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000077",
    "book": "polymorphism",
    "order_index": 77,
    "title": "#077 Polymorphism Problem 77",
    "slug": "polymorphism-077-polymorphism-problem-77",
    "description": "Implement polymorphic design #77 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 77 10",
        "output": "Dynamic dispatch #77 executed with polymorphic type binding (Code: 770)",
        "explanation": "Executes logic for Polymorphism Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000078",
    "book": "polymorphism",
    "order_index": 78,
    "title": "#078 Polymorphism Problem 78",
    "slug": "polymorphism-078-polymorphism-problem-78",
    "description": "Implement polymorphic design #78 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 78 10",
        "output": "Dynamic dispatch #78 executed with polymorphic type binding (Code: 780)",
        "explanation": "Executes logic for Polymorphism Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000079",
    "book": "polymorphism",
    "order_index": 79,
    "title": "#079 Polymorphism Problem 79",
    "slug": "polymorphism-079-polymorphism-problem-79",
    "description": "Implement polymorphic design #79 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 79 10",
        "output": "Dynamic dispatch #79 executed with polymorphic type binding (Code: 790)",
        "explanation": "Executes logic for Polymorphism Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000080",
    "book": "polymorphism",
    "order_index": 80,
    "title": "#080 Polymorphism Problem 80",
    "slug": "polymorphism-080-polymorphism-problem-80",
    "description": "Implement polymorphic design #80 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 80 10",
        "output": "Dynamic dispatch #80 executed with polymorphic type binding (Code: 800)",
        "explanation": "Executes logic for Polymorphism Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000081",
    "book": "polymorphism",
    "order_index": 81,
    "title": "#081 Polymorphism Problem 81",
    "slug": "polymorphism-081-polymorphism-problem-81",
    "description": "Implement polymorphic design #81 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 81 10",
        "output": "Dynamic dispatch #81 executed with polymorphic type binding (Code: 810)",
        "explanation": "Executes logic for Polymorphism Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000082",
    "book": "polymorphism",
    "order_index": 82,
    "title": "#082 Polymorphism Problem 82",
    "slug": "polymorphism-082-polymorphism-problem-82",
    "description": "Implement polymorphic design #82 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 82 10",
        "output": "Dynamic dispatch #82 executed with polymorphic type binding (Code: 820)",
        "explanation": "Executes logic for Polymorphism Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000083",
    "book": "polymorphism",
    "order_index": 83,
    "title": "#083 Polymorphism Problem 83",
    "slug": "polymorphism-083-polymorphism-problem-83",
    "description": "Implement polymorphic design #83 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 83 10",
        "output": "Dynamic dispatch #83 executed with polymorphic type binding (Code: 830)",
        "explanation": "Executes logic for Polymorphism Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000084",
    "book": "polymorphism",
    "order_index": 84,
    "title": "#084 Polymorphism Problem 84",
    "slug": "polymorphism-084-polymorphism-problem-84",
    "description": "Implement polymorphic design #84 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 84 10",
        "output": "Dynamic dispatch #84 executed with polymorphic type binding (Code: 840)",
        "explanation": "Executes logic for Polymorphism Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000085",
    "book": "polymorphism",
    "order_index": 85,
    "title": "#085 Polymorphism Problem 85",
    "slug": "polymorphism-085-polymorphism-problem-85",
    "description": "Implement polymorphic design #85 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 85 10",
        "output": "Dynamic dispatch #85 executed with polymorphic type binding (Code: 850)",
        "explanation": "Executes logic for Polymorphism Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000086",
    "book": "polymorphism",
    "order_index": 86,
    "title": "#086 Polymorphism Problem 86",
    "slug": "polymorphism-086-polymorphism-problem-86",
    "description": "Implement polymorphic design #86 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 86 10",
        "output": "Dynamic dispatch #86 executed with polymorphic type binding (Code: 860)",
        "explanation": "Executes logic for Polymorphism Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000087",
    "book": "polymorphism",
    "order_index": 87,
    "title": "#087 Polymorphism Problem 87",
    "slug": "polymorphism-087-polymorphism-problem-87",
    "description": "Implement polymorphic design #87 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 87 10",
        "output": "Dynamic dispatch #87 executed with polymorphic type binding (Code: 870)",
        "explanation": "Executes logic for Polymorphism Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000088",
    "book": "polymorphism",
    "order_index": 88,
    "title": "#088 Polymorphism Problem 88",
    "slug": "polymorphism-088-polymorphism-problem-88",
    "description": "Implement polymorphic design #88 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 88 10",
        "output": "Dynamic dispatch #88 executed with polymorphic type binding (Code: 880)",
        "explanation": "Executes logic for Polymorphism Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000089",
    "book": "polymorphism",
    "order_index": 89,
    "title": "#089 Polymorphism Problem 89",
    "slug": "polymorphism-089-polymorphism-problem-89",
    "description": "Implement polymorphic design #89 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 89 10",
        "output": "Dynamic dispatch #89 executed with polymorphic type binding (Code: 890)",
        "explanation": "Executes logic for Polymorphism Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000090",
    "book": "polymorphism",
    "order_index": 90,
    "title": "#090 Polymorphism Problem 90",
    "slug": "polymorphism-090-polymorphism-problem-90",
    "description": "Implement polymorphic design #90 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 90 10",
        "output": "Dynamic dispatch #90 executed with polymorphic type binding (Code: 900)",
        "explanation": "Executes logic for Polymorphism Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000091",
    "book": "polymorphism",
    "order_index": 91,
    "title": "#091 Polymorphism Problem 91",
    "slug": "polymorphism-091-polymorphism-problem-91",
    "description": "Implement polymorphic design #91 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 91 10",
        "output": "Dynamic dispatch #91 executed with polymorphic type binding (Code: 910)",
        "explanation": "Executes logic for Polymorphism Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000092",
    "book": "polymorphism",
    "order_index": 92,
    "title": "#092 Polymorphism Problem 92",
    "slug": "polymorphism-092-polymorphism-problem-92",
    "description": "Implement polymorphic design #92 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 92 10",
        "output": "Dynamic dispatch #92 executed with polymorphic type binding (Code: 920)",
        "explanation": "Executes logic for Polymorphism Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000093",
    "book": "polymorphism",
    "order_index": 93,
    "title": "#093 Polymorphism Problem 93",
    "slug": "polymorphism-093-polymorphism-problem-93",
    "description": "Implement polymorphic design #93 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 93 10",
        "output": "Dynamic dispatch #93 executed with polymorphic type binding (Code: 930)",
        "explanation": "Executes logic for Polymorphism Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000094",
    "book": "polymorphism",
    "order_index": 94,
    "title": "#094 Polymorphism Problem 94",
    "slug": "polymorphism-094-polymorphism-problem-94",
    "description": "Implement polymorphic design #94 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 94 10",
        "output": "Dynamic dispatch #94 executed with polymorphic type binding (Code: 940)",
        "explanation": "Executes logic for Polymorphism Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000095",
    "book": "polymorphism",
    "order_index": 95,
    "title": "#095 Polymorphism Problem 95",
    "slug": "polymorphism-095-polymorphism-problem-95",
    "description": "Implement polymorphic design #95 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 95 10",
        "output": "Dynamic dispatch #95 executed with polymorphic type binding (Code: 950)",
        "explanation": "Executes logic for Polymorphism Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000096",
    "book": "polymorphism",
    "order_index": 96,
    "title": "#096 Polymorphism Problem 96",
    "slug": "polymorphism-096-polymorphism-problem-96",
    "description": "Implement polymorphic design #96 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 96 10",
        "output": "Dynamic dispatch #96 executed with polymorphic type binding (Code: 960)",
        "explanation": "Executes logic for Polymorphism Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000097",
    "book": "polymorphism",
    "order_index": 97,
    "title": "#097 Polymorphism Problem 97",
    "slug": "polymorphism-097-polymorphism-problem-97",
    "description": "Implement polymorphic design #97 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 97 10",
        "output": "Dynamic dispatch #97 executed with polymorphic type binding (Code: 970)",
        "explanation": "Executes logic for Polymorphism Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000098",
    "book": "polymorphism",
    "order_index": 98,
    "title": "#098 Polymorphism Problem 98",
    "slug": "polymorphism-098-polymorphism-problem-98",
    "description": "Implement polymorphic design #98 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 98 10",
        "output": "Dynamic dispatch #98 executed with polymorphic type binding (Code: 980)",
        "explanation": "Executes logic for Polymorphism Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000099",
    "book": "polymorphism",
    "order_index": 99,
    "title": "#099 Polymorphism Problem 99",
    "slug": "polymorphism-099-polymorphism-problem-99",
    "description": "Implement polymorphic design #99 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 99 10",
        "output": "Dynamic dispatch #99 executed with polymorphic type binding (Code: 990)",
        "explanation": "Executes logic for Polymorphism Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8009-000000000100",
    "book": "polymorphism",
    "order_index": 100,
    "title": "#100 Polymorphism Problem 100",
    "slug": "polymorphism-100-polymorphism-problem-100",
    "description": "Implement polymorphic design #100 leveraging operator overloading, dynamic dispatch, or abstract interfaces.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Polymorphism & Operator Overloading",
    "tags": [
      "Polymorphism",
      "Virtual Functions",
      "Operator Overloading",
      "Abstract Classes",
      "Dynamic Dispatch"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "POLY_DISPATCH 100 10",
        "output": "Dynamic dispatch #100 executed with polymorphic type binding (Code: 1000)",
        "explanation": "Executes logic for Polymorphism Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Polymorphism Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Polymorphism Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Polymorphism Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
