import { Problem } from '../../types/problem';

export const CLASS_METHODS_PROBLEMS: Problem[] = [
  {
    "id": "00000000-0000-4000-8003-000000000001",
    "book": "classmethods",
    "order_index": 1,
    "title": "#001 Inside Class Method Definition",
    "slug": "classmethods-001-inside-class-method-definition",
    "description": "Define a member function inside the class body and invoke it via object instance.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "John",
        "output": "Hello from inside class, John!",
        "explanation": "Executes logic for Inside Class Method Definition."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inside Class Method Definition\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inside Class Method Definition\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inside Class Method Definition\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:01Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000002",
    "book": "classmethods",
    "order_index": 2,
    "title": "#002 Outside Class Method Definition (Scope Resolution)",
    "slug": "classmethods-002-outside-class-method-definition-scope-resolution",
    "description": "Declare a member function inside class and define it outside class using ClassName::methodName.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 20",
        "output": "Outside method calculated sum: 30",
        "explanation": "Executes logic for Outside Class Method Definition (Scope Resolution)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Outside Class Method Definition (Scope Resolution)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Outside Class Method Definition (Scope Resolution)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Outside Class Method Definition (Scope Resolution)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:02Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000003",
    "book": "classmethods",
    "order_index": 3,
    "title": "#003 Inline Member Functions",
    "slug": "classmethods-003-inline-member-functions",
    "description": "Explicitly mark a small outside member function with the `inline` keyword for compiler optimization.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5",
        "output": "Inline square: 25",
        "explanation": "Executes logic for Inline Member Functions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Inline Member Functions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Inline Member Functions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Inline Member Functions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:03Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000004",
    "book": "classmethods",
    "order_index": 4,
    "title": "#004 Const Member Functions",
    "slug": "classmethods-004-const-member-functions",
    "description": "Define a const member function that guarantees it will not modify any object attributes.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Radius 4",
        "output": "Area: 50.27 (Const member function invoked)",
        "explanation": "Executes logic for Const Member Functions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Const Member Functions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Const Member Functions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Const Member Functions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:04Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000005",
    "book": "classmethods",
    "order_index": 5,
    "title": "#005 The 'this' Pointer for Disambiguation",
    "slug": "classmethods-005-the-this-pointer-for-disambiguation",
    "description": "Use `this->variable` to distinguish member variables from function parameter names.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice 25",
        "output": "Stored: Name=Alice, Age=25 via this pointer",
        "explanation": "Executes logic for The 'this' Pointer for Disambiguation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// The 'this' Pointer for Disambiguation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# The 'this' Pointer for Disambiguation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// The 'this' Pointer for Disambiguation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:05Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000006",
    "book": "classmethods",
    "order_index": 6,
    "title": "#006 Method Chaining via 'this' Pointer Reference",
    "slug": "classmethods-006-method-chaining-via-this-pointer-reference",
    "description": "Return `*this` by reference from setter methods to enable method chaining: obj.setX(5).setY(10).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET 5 10",
        "output": "Point: (5, 10) [Chained calls]",
        "explanation": "Executes logic for Method Chaining via 'this' Pointer Reference."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Method Chaining via 'this' Pointer Reference\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Method Chaining via 'this' Pointer Reference\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Method Chaining via 'this' Pointer Reference\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:06Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000007",
    "book": "classmethods",
    "order_index": 7,
    "title": "#007 Static Member Function",
    "slug": "classmethods-007-static-member-function",
    "description": "Implement a static member function that performs calculation without accessing non-static members.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "5 10",
        "output": "Static MathHelper::max(5, 10) = 10",
        "explanation": "Executes logic for Static Member Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Static Member Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Static Member Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Static Member Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:07Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000008",
    "book": "classmethods",
    "order_index": 8,
    "title": "#008 Overloaded Member Functions",
    "slug": "classmethods-008-overloaded-member-functions",
    "description": "Overload a member function `print()` to accept integer, double, or string arguments.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Print 42, 3.14, Hi",
        "output": "Int: 42, Double: 3.14, String: Hi",
        "explanation": "Executes logic for Overloaded Member Functions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Overloaded Member Functions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Overloaded Member Functions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Overloaded Member Functions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:08Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000009",
    "book": "classmethods",
    "order_index": 9,
    "title": "#009 Private Helper Methods",
    "slug": "classmethods-009-private-helper-methods",
    "description": "Implement a private validation method invoked internally by public interface methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Age -5",
        "output": "Validation failed: Age cannot be negative",
        "explanation": "Executes logic for Private Helper Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Private Helper Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Private Helper Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Private Helper Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:09Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000010",
    "book": "classmethods",
    "order_index": 10,
    "title": "#010 Default Arguments in Member Functions",
    "slug": "classmethods-010-default-arguments-in-member-functions",
    "description": "Define a member function with default parameter values in its class declaration.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Greet without name",
        "output": "Hello, Guest!",
        "explanation": "Executes logic for Default Arguments in Member Functions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Default Arguments in Member Functions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Default Arguments in Member Functions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Default Arguments in Member Functions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:10Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000011",
    "book": "classmethods",
    "order_index": 11,
    "title": "#011 Passing Object by Reference to Method",
    "slug": "classmethods-011-passing-object-by-reference-to-method",
    "description": "Write a member function `compare(const Student& other)` comparing current object with another.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Alice(85) Bob(92)",
        "output": "Bob has higher score",
        "explanation": "Executes logic for Passing Object by Reference to Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Passing Object by Reference to Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Passing Object by Reference to Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Passing Object by Reference to Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:11Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000012",
    "book": "classmethods",
    "order_index": 12,
    "title": "#012 Returning Reference to Member Variable",
    "slug": "classmethods-012-returning-reference-to-member-variable",
    "description": "Write a method returning a reference to an internal vector element allowing direct update.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Update idx 1 to 99",
        "output": "Vector updated: [10, 99, 30]",
        "explanation": "Executes logic for Returning Reference to Member Variable."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Returning Reference to Member Variable\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Returning Reference to Member Variable\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Returning Reference to Member Variable\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:12Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000013",
    "book": "classmethods",
    "order_index": 13,
    "title": "#013 Recursive Member Function",
    "slug": "classmethods-013-recursive-member-function",
    "description": "Implement a recursive member function inside a Tree class calculating total node count.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tree with 5 nodes",
        "output": "Node count: 5",
        "explanation": "Executes logic for Recursive Member Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Recursive Member Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Recursive Member Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Recursive Member Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:13Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000014",
    "book": "classmethods",
    "order_index": 14,
    "title": "#014 Friend Function vs Member Function Comparison",
    "slug": "classmethods-014-friend-function-vs-member-function-comparison",
    "description": "Demonstrate when to choose a member function vs a friend function for binary operations.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Complex addition",
        "output": "Member: c1.add(c2) -> 5 + 7i",
        "explanation": "Executes logic for Friend Function vs Member Function Comparison."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Friend Function vs Member Function Comparison\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Friend Function vs Member Function Comparison\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Friend Function vs Member Function Comparison\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:14Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000015",
    "book": "classmethods",
    "order_index": 15,
    "title": "#015 Const Overloading of Member Functions",
    "slug": "classmethods-015-const-overloading-of-member-functions",
    "description": "Provide two overloads of `operator[]`: one const returning const T& and one non-const returning T&.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read and Write",
        "output": "Const: Read-only access, Non-const: Modifiable access",
        "explanation": "Executes logic for Const Overloading of Member Functions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Const Overloading of Member Functions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Const Overloading of Member Functions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Const Overloading of Member Functions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:15Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000016",
    "book": "classmethods",
    "order_index": 16,
    "title": "#016 Member Function Pointer Declaration and Invocation",
    "slug": "classmethods-016-member-function-pointer-declaration-and-invocation",
    "description": "Declare a pointer to a member function and invoke it on an object instance using .* operator.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call via pointer",
        "output": "Invoked Member Function via pointer",
        "explanation": "Executes logic for Member Function Pointer Declaration and Invocation."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Member Function Pointer Declaration and Invocation\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Member Function Pointer Declaration and Invocation\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Member Function Pointer Declaration and Invocation\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:16Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000017",
    "book": "classmethods",
    "order_index": 17,
    "title": "#017 Array of Member Function Pointers (Dispatch Table)",
    "slug": "classmethods-017-array-of-member-function-pointers-dispatch-table",
    "description": "Create a dispatch table mapping command opcodes to class member function pointers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "OP_ADD 10 20",
        "output": "Executed OP_ADD: Result = 30",
        "explanation": "Executes logic for Array of Member Function Pointers (Dispatch Table)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Array of Member Function Pointers (Dispatch Table)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Array of Member Function Pointers (Dispatch Table)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Array of Member Function Pointers (Dispatch Table)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:17Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000018",
    "book": "classmethods",
    "order_index": 18,
    "title": "#018 Volatile Member Functions",
    "slug": "classmethods-018-volatile-member-functions",
    "description": "Demonstrate volatile member function invoked on volatile object instances for hardware registers.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Read hardware reg",
        "output": "Volatile register read: 0xFA3C",
        "explanation": "Executes logic for Volatile Member Functions."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Volatile Member Functions\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Volatile Member Functions\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Volatile Member Functions\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:18Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000019",
    "book": "classmethods",
    "order_index": 19,
    "title": "#019 Deleted Member Functions (= delete)",
    "slug": "classmethods-019-deleted-member-functions-delete",
    "description": "Explicitly delete copy assignment operator `operator= = delete` to prevent copying.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Attempt copy",
        "output": "Compilation prevented: Copy assignment is deleted",
        "explanation": "Executes logic for Deleted Member Functions (= delete)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Deleted Member Functions (= delete)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Deleted Member Functions (= delete)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Deleted Member Functions (= delete)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:19Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000020",
    "book": "classmethods",
    "order_index": 20,
    "title": "#020 Defaulted Member Functions (= default)",
    "slug": "classmethods-020-defaulted-member-functions-default",
    "description": "Use `= default` to instruct compiler to synthesize default constructor and destructor.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Construct default",
        "output": "Default synthesized constructor executed",
        "explanation": "Executes logic for Defaulted Member Functions (= default)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Defaulted Member Functions (= default)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Defaulted Member Functions (= default)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Defaulted Member Functions (= default)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:20Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000021",
    "book": "classmethods",
    "order_index": 21,
    "title": "#021 Pure Virtual Member Function Declaration",
    "slug": "classmethods-021-pure-virtual-member-function-declaration",
    "description": "Declare `virtual void render() = 0;` defining an abstract contract for subclasses.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Call render on shape",
        "output": "Derived render() executed",
        "explanation": "Executes logic for Pure Virtual Member Function Declaration."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Pure Virtual Member Function Declaration\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Pure Virtual Member Function Declaration\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Pure Virtual Member Function Declaration\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:21Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000022",
    "book": "classmethods",
    "order_index": 22,
    "title": "#022 Override Specifier on Member Function",
    "slug": "classmethods-022-override-specifier-on-member-function",
    "description": "Use `override` keyword to ensure derived class correctly overrides base virtual method.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Derived override",
        "output": "Derived method properly overridden",
        "explanation": "Executes logic for Override Specifier on Member Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Override Specifier on Member Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Override Specifier on Member Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Override Specifier on Member Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:22Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000023",
    "book": "classmethods",
    "order_index": 23,
    "title": "#023 Final Specifier on Virtual Member Function",
    "slug": "classmethods-023-final-specifier-on-virtual-member-function",
    "description": "Use `final` keyword to prevent further overriding of a virtual method in derived hierarchy.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Final method",
        "output": "Method sealed from further derivation",
        "explanation": "Executes logic for Final Specifier on Virtual Member Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Final Specifier on Virtual Member Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Final Specifier on Virtual Member Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Final Specifier on Virtual Member Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:23Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000024",
    "book": "classmethods",
    "order_index": 24,
    "title": "#024 Virtual Destructor Member Function",
    "slug": "classmethods-024-virtual-destructor-member-function",
    "description": "Declare `virtual ~Base()` ensuring derived destructors are properly called during polymorphic deletion.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Delete base ptr",
        "output": "Derived destructor -> Base destructor called cleanly",
        "explanation": "Executes logic for Virtual Destructor Member Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Virtual Destructor Member Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Virtual Destructor Member Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Virtual Destructor Member Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:24Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000025",
    "book": "classmethods",
    "order_index": 25,
    "title": "#025 Static Member Method Accessing Private Static Member",
    "slug": "classmethods-025-static-member-method-accessing-private-static-memb",
    "description": "Demonstrate static method modifying and returning private static configuration flag.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Toggle debug mode",
        "output": "Debug Mode: Enabled (Static flag updated)",
        "explanation": "Executes logic for Static Member Method Accessing Private Static Member."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Static Member Method Accessing Private Static Member\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Static Member Method Accessing Private Static Member\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Static Member Method Accessing Private Static Member\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:25Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000026",
    "book": "classmethods",
    "order_index": 26,
    "title": "#026 Member Method Template Inside Regular Class",
    "slug": "classmethods-026-member-method-template-inside-regular-class",
    "description": "Define a templated member function `template<typename T> void printVal(T val)` in a non-template class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Print int & string",
        "output": "Int: 100, String: General",
        "explanation": "Executes logic for Member Method Template Inside Regular Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Member Method Template Inside Regular Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Member Method Template Inside Regular Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Member Method Template Inside Regular Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:26Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000027",
    "book": "classmethods",
    "order_index": 27,
    "title": "#027 Calling Member Function from Another Member Function",
    "slug": "classmethods-027-calling-member-function-from-another-member-functi",
    "description": "Demonstrate member function reusing existing methods (e.g. `computeTotal()` calling `computeTax()`).\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Subtotal 100",
        "output": "Total: 110 (Subtotal + 10% tax)",
        "explanation": "Executes logic for Calling Member Function from Another Member Function."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Calling Member Function from Another Member Function\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Calling Member Function from Another Member Function\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Calling Member Function from Another Member Function\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:27Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000028",
    "book": "classmethods",
    "order_index": 28,
    "title": "#028 Member Function with Variable Number of Arguments (Variadic Template)",
    "slug": "classmethods-028-member-function-with-variable-number-of-arguments",
    "description": "Write a variadic member function `log(Args... args)` printing any count of values.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Log 'User', 101, 'Active'",
        "output": "Log: User 101 Active",
        "explanation": "Executes logic for Member Function with Variable Number of Arguments (Variadic Template)."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Member Function with Variable Number of Arguments (Variadic Template)\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Member Function with Variable Number of Arguments (Variadic Template)\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Member Function with Variable Number of Arguments (Variadic Template)\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:28Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000029",
    "book": "classmethods",
    "order_index": 29,
    "title": "#029 Getter and Setter Method Pair",
    "slug": "classmethods-029-getter-and-setter-method-pair",
    "description": "Implement standard getX() and setX() accessor methods with value bounds enforcement.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "SET X 45",
        "output": "Get X: 45",
        "explanation": "Executes logic for Getter and Setter Method Pair."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Getter and Setter Method Pair\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Getter and Setter Method Pair\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Getter and Setter Method Pair\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:29Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000030",
    "book": "classmethods",
    "order_index": 30,
    "title": "#030 Bulk Data Processing Member Method",
    "slug": "classmethods-030-bulk-data-processing-member-method",
    "description": "Implement `processBatch(const vector<int>& data)` computing aggregate statistics.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "10 20 30 40",
        "output": "Processed 4 items: Sum=100, Min=10, Max=40",
        "explanation": "Executes logic for Bulk Data Processing Member Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Bulk Data Processing Member Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bulk Data Processing Member Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bulk Data Processing Member Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:30Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000031",
    "book": "classmethods",
    "order_index": 31,
    "title": "#031 Bank Account Withdraw Method with Error Code",
    "slug": "classmethods-031-bank-account-withdraw-method-with-error-code",
    "description": "Implement `bool withdraw(double amount)` returning true on success, false on insufficient funds.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Withdraw 1500 from 1000",
        "output": "Withdraw failed: Insufficient funds (Balance: 1000)",
        "explanation": "Executes logic for Bank Account Withdraw Method with Error Code."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Bank Account Withdraw Method with Error Code\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Bank Account Withdraw Method with Error Code\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Bank Account Withdraw Method with Error Code\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:31Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000032",
    "book": "classmethods",
    "order_index": 32,
    "title": "#032 String Manipulation Member Functions in Text Class",
    "slug": "classmethods-032-string-manipulation-member-functions-in-text-class",
    "description": "Implement `toUpperCase()`, `trim()`, and `reverse()` methods inside a TextProcessor class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "  hello world  ",
        "output": "Trimmed & Uppercased: 'HELLO WORLD'",
        "explanation": "Executes logic for String Manipulation Member Functions in Text Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// String Manipulation Member Functions in Text Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# String Manipulation Member Functions in Text Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// String Manipulation Member Functions in Text Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:32Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000033",
    "book": "classmethods",
    "order_index": 33,
    "title": "#033 Complex Number Arithmetic Member Methods",
    "slug": "classmethods-033-complex-number-arithmetic-member-methods",
    "description": "Implement `add()`, `subtract()`, and `multiply()` methods on ComplexNumber class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(2+3i) * (1+4i)",
        "output": "Result: -10 + 11i",
        "explanation": "Executes logic for Complex Number Arithmetic Member Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Complex Number Arithmetic Member Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Complex Number Arithmetic Member Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Complex Number Arithmetic Member Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:33Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000034",
    "book": "classmethods",
    "order_index": 34,
    "title": "#034 Stack Class Push, Pop, Top, IsEmpty Methods",
    "slug": "classmethods-034-stack-class-push-pop-top-isempty-methods",
    "description": "Implement complete array-based Stack class with member methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "PUSH 10 PUSH 20 POP TOP",
        "output": "Popped: 20, Current Top: 10",
        "explanation": "Executes logic for Stack Class Push, Pop, Top, IsEmpty Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Stack Class Push, Pop, Top, IsEmpty Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Stack Class Push, Pop, Top, IsEmpty Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Stack Class Push, Pop, Top, IsEmpty Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:34Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000035",
    "book": "classmethods",
    "order_index": 35,
    "title": "#035 Queue Class Enqueue, Dequeue, Front Methods",
    "slug": "classmethods-035-queue-class-enqueue-dequeue-front-methods",
    "description": "Implement Queue class with FIFO member methods.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "ENQ 1 ENQ 2 DEQ FRONT",
        "output": "Dequeued: 1, Current Front: 2",
        "explanation": "Executes logic for Queue Class Enqueue, Dequeue, Front Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Queue Class Enqueue, Dequeue, Front Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Queue Class Enqueue, Dequeue, Front Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Queue Class Enqueue, Dequeue, Front Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:35Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000036",
    "book": "classmethods",
    "order_index": 36,
    "title": "#036 Circular Buffer Member Methods",
    "slug": "classmethods-036-circular-buffer-member-methods",
    "description": "Implement `push_back()` and `pop_front()` with wrap-around index arithmetic.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Push 1,2,3,4, Pop 1",
        "output": "Buffer: [2, 3, 4]",
        "explanation": "Executes logic for Circular Buffer Member Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Circular Buffer Member Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Circular Buffer Member Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Circular Buffer Member Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:36Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000037",
    "book": "classmethods",
    "order_index": 37,
    "title": "#037 Timer Tick and Reset Member Methods",
    "slug": "classmethods-037-timer-tick-and-reset-member-methods",
    "description": "Implement `tick()` incrementing seconds and `reset()` clearing elapsed time.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Tick 5 times",
        "output": "Elapsed: 5 seconds",
        "explanation": "Executes logic for Timer Tick and Reset Member Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Timer Tick and Reset Member Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Timer Tick and Reset Member Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Timer Tick and Reset Member Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:37Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000038",
    "book": "classmethods",
    "order_index": 38,
    "title": "#038 Vector Math Normalize Method",
    "slug": "classmethods-038-vector-math-normalize-method",
    "description": "Implement `normalize()` method that scales 3D vector to unit length in-place.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "(3, 0, 4)",
        "output": "Normalized: (0.6, 0.0, 0.8)",
        "explanation": "Executes logic for Vector Math Normalize Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Vector Math Normalize Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Vector Math Normalize Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Vector Math Normalize Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:38Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000039",
    "book": "classmethods",
    "order_index": 39,
    "title": "#039 Temperature Converter Member Methods",
    "slug": "classmethods-039-temperature-converter-member-methods",
    "description": "Implement `toFahrenheit()`, `toKelvin()`, and `toCelsius()` in Temperature class.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "25 C",
        "output": "Fahrenheit: 77.0 F, Kelvin: 298.15 K",
        "explanation": "Executes logic for Temperature Converter Member Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Temperature Converter Member Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Temperature Converter Member Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Temperature Converter Member Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:39Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000040",
    "book": "classmethods",
    "order_index": 40,
    "title": "#040 Password Validator Member Method",
    "slug": "classmethods-040-password-validator-member-method",
    "description": "Implement `isStrong()` method checking minimum 8 chars, uppercase, digit, and special char.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Secret123!",
        "output": "Password valid: true",
        "explanation": "Executes logic for Password Validator Member Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Password Validator Member Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Password Validator Member Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Password Validator Member Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:40Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000041",
    "book": "classmethods",
    "order_index": 41,
    "title": "#041 Geometric Shape Scaling Method",
    "slug": "classmethods-041-geometric-shape-scaling-method",
    "description": "Implement `scale(double factor)` on Shape class multiplying all dimensions.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Rect(4, 5) scale 2.0",
        "output": "Scaled Rect: 8 x 10, Area: 80",
        "explanation": "Executes logic for Geometric Shape Scaling Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Geometric Shape Scaling Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Geometric Shape Scaling Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Geometric Shape Scaling Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:41Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000042",
    "book": "classmethods",
    "order_index": 42,
    "title": "#042 Coordinate Distance Calculator Method",
    "slug": "classmethods-042-coordinate-distance-calculator-method",
    "description": "Implement `distanceTo(const Point& other)` using Euclidean distance formula.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "P1(0,0) P2(3,4)",
        "output": "Distance: 5.0",
        "explanation": "Executes logic for Coordinate Distance Calculator Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Coordinate Distance Calculator Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Coordinate Distance Calculator Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Coordinate Distance Calculator Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:42Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000043",
    "book": "classmethods",
    "order_index": 43,
    "title": "#043 Book Rental and Return Methods in Library Class",
    "slug": "classmethods-043-book-rental-and-return-methods-in-library-class",
    "description": "Implement `borrowBook(id)` and `returnBook(id)` updating availability status.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Borrow #101",
        "output": "Book #101 checked out successfully",
        "explanation": "Executes logic for Book Rental and Return Methods in Library Class."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Book Rental and Return Methods in Library Class\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Book Rental and Return Methods in Library Class\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Book Rental and Return Methods in Library Class\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:43Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000044",
    "book": "classmethods",
    "order_index": 44,
    "title": "#044 Shopping Cart Discount Application Method",
    "slug": "classmethods-044-shopping-cart-discount-application-method",
    "description": "Implement `applyCoupon(code)` reducing total price by percentage.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Total: 100, Coupon: SAVE20",
        "output": "Discounted Total: 80",
        "explanation": "Executes logic for Shopping Cart Discount Application Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Shopping Cart Discount Application Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Shopping Cart Discount Application Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Shopping Cart Discount Application Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:44Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000045",
    "book": "classmethods",
    "order_index": 45,
    "title": "#045 Search Member Method in Custom List",
    "slug": "classmethods-045-search-member-method-in-custom-list",
    "description": "Implement `contains(val)` returning true if value exists in internal storage.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Find 42 in [10, 42, 99]",
        "output": "Found: true",
        "explanation": "Executes logic for Search Member Method in Custom List."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Search Member Method in Custom List\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Search Member Method in Custom List\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Search Member Method in Custom List\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:45Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000046",
    "book": "classmethods",
    "order_index": 46,
    "title": "#046 Matrix Transpose In-Place Method",
    "slug": "classmethods-046-matrix-transpose-in-place-method",
    "description": "Implement `transpose()` modifying an N x N matrix in-place.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "[[1,2],[3,4]]",
        "output": "Transposed: [[1,3],[2,4]]",
        "explanation": "Executes logic for Matrix Transpose In-Place Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Matrix Transpose In-Place Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Matrix Transpose In-Place Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Matrix Transpose In-Place Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:46Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000047",
    "book": "classmethods",
    "order_index": 47,
    "title": "#047 Flight Booking Seat Reservation Method",
    "slug": "classmethods-047-flight-booking-seat-reservation-method",
    "description": "Implement `bookSeat(row, col)` with duplicate booking guard.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Book (2, 3)",
        "output": "Seat (2, 3) confirmed",
        "explanation": "Executes logic for Flight Booking Seat Reservation Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Flight Booking Seat Reservation Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Flight Booking Seat Reservation Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Flight Booking Seat Reservation Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:47Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000048",
    "book": "classmethods",
    "order_index": 48,
    "title": "#048 Game Character Level Up Method",
    "slug": "classmethods-048-game-character-level-up-method",
    "description": "Implement `gainXP(amount)` triggering `levelUp()` and stat boosts when threshold is met.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Gain 150 XP",
        "output": "Leveled up to Level 2! HP increased to 120",
        "explanation": "Executes logic for Game Character Level Up Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Game Character Level Up Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Game Character Level Up Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Game Character Level Up Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:48Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000049",
    "book": "classmethods",
    "order_index": 49,
    "title": "#049 Crypto Wallet Sign Transaction Method",
    "slug": "classmethods-049-crypto-wallet-sign-transaction-method",
    "description": "Implement `signTransaction(amount, recipient)` checking balance and creating signature.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "Sign 50 to Alice",
        "output": "Transaction Signed: [Hash: 0x9B4E, Amount: 50]",
        "explanation": "Executes logic for Crypto Wallet Sign Transaction Method."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Crypto Wallet Sign Transaction Method\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Crypto Wallet Sign Transaction Method\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Crypto Wallet Sign Transaction Method\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:49Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000050",
    "book": "classmethods",
    "order_index": 50,
    "title": "#050 Date NextDay and PreviousDay Methods",
    "slug": "classmethods-050-date-nextday-and-previousday-methods",
    "description": "Implement `nextDay()` incrementing calendar date handling end of month and year rollover.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "31 Dec 2024 nextDay",
        "output": "01 Jan 2025",
        "explanation": "Executes logic for Date NextDay and PreviousDay Methods."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Date NextDay and PreviousDay Methods\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Date NextDay and PreviousDay Methods\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Date NextDay and PreviousDay Methods\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:50Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000051",
    "book": "classmethods",
    "order_index": 51,
    "title": "#051 Class Method Specification Problem 51",
    "slug": "classmethods-051-class-method-specification-problem-51",
    "description": "Implement class member method #51 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 51 10",
        "output": "Method #51 executed with return code 0 (Value: 510)",
        "explanation": "Executes logic for Class Method Specification Problem 51."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 51\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 51\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 51\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:51Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000052",
    "book": "classmethods",
    "order_index": 52,
    "title": "#052 Class Method Specification Problem 52",
    "slug": "classmethods-052-class-method-specification-problem-52",
    "description": "Implement class member method #52 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 52 10",
        "output": "Method #52 executed with return code 0 (Value: 520)",
        "explanation": "Executes logic for Class Method Specification Problem 52."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 52\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 52\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 52\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:52Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000053",
    "book": "classmethods",
    "order_index": 53,
    "title": "#053 Class Method Specification Problem 53",
    "slug": "classmethods-053-class-method-specification-problem-53",
    "description": "Implement class member method #53 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 53 10",
        "output": "Method #53 executed with return code 0 (Value: 530)",
        "explanation": "Executes logic for Class Method Specification Problem 53."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 53\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 53\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 53\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:53Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000054",
    "book": "classmethods",
    "order_index": 54,
    "title": "#054 Class Method Specification Problem 54",
    "slug": "classmethods-054-class-method-specification-problem-54",
    "description": "Implement class member method #54 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 54 10",
        "output": "Method #54 executed with return code 0 (Value: 540)",
        "explanation": "Executes logic for Class Method Specification Problem 54."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 54\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 54\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 54\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:54Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000055",
    "book": "classmethods",
    "order_index": 55,
    "title": "#055 Class Method Specification Problem 55",
    "slug": "classmethods-055-class-method-specification-problem-55",
    "description": "Implement class member method #55 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 55 10",
        "output": "Method #55 executed with return code 0 (Value: 550)",
        "explanation": "Executes logic for Class Method Specification Problem 55."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 55\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 55\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 55\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:55Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000056",
    "book": "classmethods",
    "order_index": 56,
    "title": "#056 Class Method Specification Problem 56",
    "slug": "classmethods-056-class-method-specification-problem-56",
    "description": "Implement class member method #56 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 56 10",
        "output": "Method #56 executed with return code 0 (Value: 560)",
        "explanation": "Executes logic for Class Method Specification Problem 56."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 56\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 56\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 56\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:56Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000057",
    "book": "classmethods",
    "order_index": 57,
    "title": "#057 Class Method Specification Problem 57",
    "slug": "classmethods-057-class-method-specification-problem-57",
    "description": "Implement class member method #57 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 57 10",
        "output": "Method #57 executed with return code 0 (Value: 570)",
        "explanation": "Executes logic for Class Method Specification Problem 57."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 57\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 57\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 57\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:57Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000058",
    "book": "classmethods",
    "order_index": 58,
    "title": "#058 Class Method Specification Problem 58",
    "slug": "classmethods-058-class-method-specification-problem-58",
    "description": "Implement class member method #58 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 58 10",
        "output": "Method #58 executed with return code 0 (Value: 580)",
        "explanation": "Executes logic for Class Method Specification Problem 58."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 58\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 58\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 58\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:58Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000059",
    "book": "classmethods",
    "order_index": 59,
    "title": "#059 Class Method Specification Problem 59",
    "slug": "classmethods-059-class-method-specification-problem-59",
    "description": "Implement class member method #59 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 59 10",
        "output": "Method #59 executed with return code 0 (Value: 590)",
        "explanation": "Executes logic for Class Method Specification Problem 59."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 59\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 59\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 59\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:00:59Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000060",
    "book": "classmethods",
    "order_index": 60,
    "title": "#060 Class Method Specification Problem 60",
    "slug": "classmethods-060-class-method-specification-problem-60",
    "description": "Implement class member method #60 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 60 10",
        "output": "Method #60 executed with return code 0 (Value: 600)",
        "explanation": "Executes logic for Class Method Specification Problem 60."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 60\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 60\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 60\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:00Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000061",
    "book": "classmethods",
    "order_index": 61,
    "title": "#061 Class Method Specification Problem 61",
    "slug": "classmethods-061-class-method-specification-problem-61",
    "description": "Implement class member method #61 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 61 10",
        "output": "Method #61 executed with return code 0 (Value: 610)",
        "explanation": "Executes logic for Class Method Specification Problem 61."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 61\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 61\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 61\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:01Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000062",
    "book": "classmethods",
    "order_index": 62,
    "title": "#062 Class Method Specification Problem 62",
    "slug": "classmethods-062-class-method-specification-problem-62",
    "description": "Implement class member method #62 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 62 10",
        "output": "Method #62 executed with return code 0 (Value: 620)",
        "explanation": "Executes logic for Class Method Specification Problem 62."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 62\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 62\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 62\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:02Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000063",
    "book": "classmethods",
    "order_index": 63,
    "title": "#063 Class Method Specification Problem 63",
    "slug": "classmethods-063-class-method-specification-problem-63",
    "description": "Implement class member method #63 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 63 10",
        "output": "Method #63 executed with return code 0 (Value: 630)",
        "explanation": "Executes logic for Class Method Specification Problem 63."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 63\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 63\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 63\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:03Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000064",
    "book": "classmethods",
    "order_index": 64,
    "title": "#064 Class Method Specification Problem 64",
    "slug": "classmethods-064-class-method-specification-problem-64",
    "description": "Implement class member method #64 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 64 10",
        "output": "Method #64 executed with return code 0 (Value: 640)",
        "explanation": "Executes logic for Class Method Specification Problem 64."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 64\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 64\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 64\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:04Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000065",
    "book": "classmethods",
    "order_index": 65,
    "title": "#065 Class Method Specification Problem 65",
    "slug": "classmethods-065-class-method-specification-problem-65",
    "description": "Implement class member method #65 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Easy",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 65 10",
        "output": "Method #65 executed with return code 0 (Value: 650)",
        "explanation": "Executes logic for Class Method Specification Problem 65."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 65\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 65\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 65\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:05Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000066",
    "book": "classmethods",
    "order_index": 66,
    "title": "#066 Class Method Specification Problem 66",
    "slug": "classmethods-066-class-method-specification-problem-66",
    "description": "Implement class member method #66 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 66 10",
        "output": "Method #66 executed with return code 0 (Value: 660)",
        "explanation": "Executes logic for Class Method Specification Problem 66."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 66\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 66\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 66\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:06Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000067",
    "book": "classmethods",
    "order_index": 67,
    "title": "#067 Class Method Specification Problem 67",
    "slug": "classmethods-067-class-method-specification-problem-67",
    "description": "Implement class member method #67 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 67 10",
        "output": "Method #67 executed with return code 0 (Value: 670)",
        "explanation": "Executes logic for Class Method Specification Problem 67."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 67\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 67\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 67\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:07Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000068",
    "book": "classmethods",
    "order_index": 68,
    "title": "#068 Class Method Specification Problem 68",
    "slug": "classmethods-068-class-method-specification-problem-68",
    "description": "Implement class member method #68 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 68 10",
        "output": "Method #68 executed with return code 0 (Value: 680)",
        "explanation": "Executes logic for Class Method Specification Problem 68."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 68\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 68\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 68\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:08Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000069",
    "book": "classmethods",
    "order_index": 69,
    "title": "#069 Class Method Specification Problem 69",
    "slug": "classmethods-069-class-method-specification-problem-69",
    "description": "Implement class member method #69 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 69 10",
        "output": "Method #69 executed with return code 0 (Value: 690)",
        "explanation": "Executes logic for Class Method Specification Problem 69."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 69\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 69\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 69\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:09Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000070",
    "book": "classmethods",
    "order_index": 70,
    "title": "#070 Class Method Specification Problem 70",
    "slug": "classmethods-070-class-method-specification-problem-70",
    "description": "Implement class member method #70 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 70 10",
        "output": "Method #70 executed with return code 0 (Value: 700)",
        "explanation": "Executes logic for Class Method Specification Problem 70."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 70\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 70\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 70\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:10Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000071",
    "book": "classmethods",
    "order_index": 71,
    "title": "#071 Class Method Specification Problem 71",
    "slug": "classmethods-071-class-method-specification-problem-71",
    "description": "Implement class member method #71 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 71 10",
        "output": "Method #71 executed with return code 0 (Value: 710)",
        "explanation": "Executes logic for Class Method Specification Problem 71."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 71\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 71\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 71\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:11Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000072",
    "book": "classmethods",
    "order_index": 72,
    "title": "#072 Class Method Specification Problem 72",
    "slug": "classmethods-072-class-method-specification-problem-72",
    "description": "Implement class member method #72 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 72 10",
        "output": "Method #72 executed with return code 0 (Value: 720)",
        "explanation": "Executes logic for Class Method Specification Problem 72."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 72\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 72\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 72\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:12Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000073",
    "book": "classmethods",
    "order_index": 73,
    "title": "#073 Class Method Specification Problem 73",
    "slug": "classmethods-073-class-method-specification-problem-73",
    "description": "Implement class member method #73 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 73 10",
        "output": "Method #73 executed with return code 0 (Value: 730)",
        "explanation": "Executes logic for Class Method Specification Problem 73."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 73\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 73\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 73\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:13Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000074",
    "book": "classmethods",
    "order_index": 74,
    "title": "#074 Class Method Specification Problem 74",
    "slug": "classmethods-074-class-method-specification-problem-74",
    "description": "Implement class member method #74 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 74 10",
        "output": "Method #74 executed with return code 0 (Value: 740)",
        "explanation": "Executes logic for Class Method Specification Problem 74."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 74\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 74\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 74\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:14Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000075",
    "book": "classmethods",
    "order_index": 75,
    "title": "#075 Class Method Specification Problem 75",
    "slug": "classmethods-075-class-method-specification-problem-75",
    "description": "Implement class member method #75 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 75 10",
        "output": "Method #75 executed with return code 0 (Value: 750)",
        "explanation": "Executes logic for Class Method Specification Problem 75."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 75\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 75\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 75\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:15Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000076",
    "book": "classmethods",
    "order_index": 76,
    "title": "#076 Class Method Specification Problem 76",
    "slug": "classmethods-076-class-method-specification-problem-76",
    "description": "Implement class member method #76 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 76 10",
        "output": "Method #76 executed with return code 0 (Value: 760)",
        "explanation": "Executes logic for Class Method Specification Problem 76."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 76\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 76\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 76\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:16Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000077",
    "book": "classmethods",
    "order_index": 77,
    "title": "#077 Class Method Specification Problem 77",
    "slug": "classmethods-077-class-method-specification-problem-77",
    "description": "Implement class member method #77 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 77 10",
        "output": "Method #77 executed with return code 0 (Value: 770)",
        "explanation": "Executes logic for Class Method Specification Problem 77."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 77\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 77\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 77\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:17Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000078",
    "book": "classmethods",
    "order_index": 78,
    "title": "#078 Class Method Specification Problem 78",
    "slug": "classmethods-078-class-method-specification-problem-78",
    "description": "Implement class member method #78 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 78 10",
        "output": "Method #78 executed with return code 0 (Value: 780)",
        "explanation": "Executes logic for Class Method Specification Problem 78."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 78\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 78\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 78\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:18Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000079",
    "book": "classmethods",
    "order_index": 79,
    "title": "#079 Class Method Specification Problem 79",
    "slug": "classmethods-079-class-method-specification-problem-79",
    "description": "Implement class member method #79 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 79 10",
        "output": "Method #79 executed with return code 0 (Value: 790)",
        "explanation": "Executes logic for Class Method Specification Problem 79."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 79\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 79\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 79\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:19Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000080",
    "book": "classmethods",
    "order_index": 80,
    "title": "#080 Class Method Specification Problem 80",
    "slug": "classmethods-080-class-method-specification-problem-80",
    "description": "Implement class member method #80 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 80 10",
        "output": "Method #80 executed with return code 0 (Value: 800)",
        "explanation": "Executes logic for Class Method Specification Problem 80."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 80\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 80\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 80\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:20Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000081",
    "book": "classmethods",
    "order_index": 81,
    "title": "#081 Class Method Specification Problem 81",
    "slug": "classmethods-081-class-method-specification-problem-81",
    "description": "Implement class member method #81 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 81 10",
        "output": "Method #81 executed with return code 0 (Value: 810)",
        "explanation": "Executes logic for Class Method Specification Problem 81."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 81\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 81\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 81\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:21Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000082",
    "book": "classmethods",
    "order_index": 82,
    "title": "#082 Class Method Specification Problem 82",
    "slug": "classmethods-082-class-method-specification-problem-82",
    "description": "Implement class member method #82 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 82 10",
        "output": "Method #82 executed with return code 0 (Value: 820)",
        "explanation": "Executes logic for Class Method Specification Problem 82."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 82\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 82\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 82\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:22Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000083",
    "book": "classmethods",
    "order_index": 83,
    "title": "#083 Class Method Specification Problem 83",
    "slug": "classmethods-083-class-method-specification-problem-83",
    "description": "Implement class member method #83 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 83 10",
        "output": "Method #83 executed with return code 0 (Value: 830)",
        "explanation": "Executes logic for Class Method Specification Problem 83."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 83\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 83\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 83\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:23Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000084",
    "book": "classmethods",
    "order_index": 84,
    "title": "#084 Class Method Specification Problem 84",
    "slug": "classmethods-084-class-method-specification-problem-84",
    "description": "Implement class member method #84 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 84 10",
        "output": "Method #84 executed with return code 0 (Value: 840)",
        "explanation": "Executes logic for Class Method Specification Problem 84."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 84\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 84\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 84\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:24Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000085",
    "book": "classmethods",
    "order_index": 85,
    "title": "#085 Class Method Specification Problem 85",
    "slug": "classmethods-085-class-method-specification-problem-85",
    "description": "Implement class member method #85 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 85 10",
        "output": "Method #85 executed with return code 0 (Value: 850)",
        "explanation": "Executes logic for Class Method Specification Problem 85."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 85\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 85\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 85\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:25Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000086",
    "book": "classmethods",
    "order_index": 86,
    "title": "#086 Class Method Specification Problem 86",
    "slug": "classmethods-086-class-method-specification-problem-86",
    "description": "Implement class member method #86 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 86 10",
        "output": "Method #86 executed with return code 0 (Value: 860)",
        "explanation": "Executes logic for Class Method Specification Problem 86."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 86\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 86\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 86\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:26Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000087",
    "book": "classmethods",
    "order_index": 87,
    "title": "#087 Class Method Specification Problem 87",
    "slug": "classmethods-087-class-method-specification-problem-87",
    "description": "Implement class member method #87 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 87 10",
        "output": "Method #87 executed with return code 0 (Value: 870)",
        "explanation": "Executes logic for Class Method Specification Problem 87."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 87\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 87\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 87\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:27Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000088",
    "book": "classmethods",
    "order_index": 88,
    "title": "#088 Class Method Specification Problem 88",
    "slug": "classmethods-088-class-method-specification-problem-88",
    "description": "Implement class member method #88 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 88 10",
        "output": "Method #88 executed with return code 0 (Value: 880)",
        "explanation": "Executes logic for Class Method Specification Problem 88."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 88\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 88\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 88\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:28Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000089",
    "book": "classmethods",
    "order_index": 89,
    "title": "#089 Class Method Specification Problem 89",
    "slug": "classmethods-089-class-method-specification-problem-89",
    "description": "Implement class member method #89 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 89 10",
        "output": "Method #89 executed with return code 0 (Value: 890)",
        "explanation": "Executes logic for Class Method Specification Problem 89."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 89\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 89\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 89\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:29Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000090",
    "book": "classmethods",
    "order_index": 90,
    "title": "#090 Class Method Specification Problem 90",
    "slug": "classmethods-090-class-method-specification-problem-90",
    "description": "Implement class member method #90 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Medium",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 90 10",
        "output": "Method #90 executed with return code 0 (Value: 900)",
        "explanation": "Executes logic for Class Method Specification Problem 90."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 90\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 90\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 90\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:30Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000091",
    "book": "classmethods",
    "order_index": 91,
    "title": "#091 Class Method Specification Problem 91",
    "slug": "classmethods-091-class-method-specification-problem-91",
    "description": "Implement class member method #91 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 91 10",
        "output": "Method #91 executed with return code 0 (Value: 910)",
        "explanation": "Executes logic for Class Method Specification Problem 91."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 91\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 91\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 91\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:31Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000092",
    "book": "classmethods",
    "order_index": 92,
    "title": "#092 Class Method Specification Problem 92",
    "slug": "classmethods-092-class-method-specification-problem-92",
    "description": "Implement class member method #92 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 92 10",
        "output": "Method #92 executed with return code 0 (Value: 920)",
        "explanation": "Executes logic for Class Method Specification Problem 92."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 92\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 92\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 92\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:32Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000093",
    "book": "classmethods",
    "order_index": 93,
    "title": "#093 Class Method Specification Problem 93",
    "slug": "classmethods-093-class-method-specification-problem-93",
    "description": "Implement class member method #93 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 93 10",
        "output": "Method #93 executed with return code 0 (Value: 930)",
        "explanation": "Executes logic for Class Method Specification Problem 93."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 93\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 93\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 93\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:33Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000094",
    "book": "classmethods",
    "order_index": 94,
    "title": "#094 Class Method Specification Problem 94",
    "slug": "classmethods-094-class-method-specification-problem-94",
    "description": "Implement class member method #94 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 94 10",
        "output": "Method #94 executed with return code 0 (Value: 940)",
        "explanation": "Executes logic for Class Method Specification Problem 94."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 94\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 94\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 94\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:34Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000095",
    "book": "classmethods",
    "order_index": 95,
    "title": "#095 Class Method Specification Problem 95",
    "slug": "classmethods-095-class-method-specification-problem-95",
    "description": "Implement class member method #95 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 95 10",
        "output": "Method #95 executed with return code 0 (Value: 950)",
        "explanation": "Executes logic for Class Method Specification Problem 95."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 95\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 95\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 95\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:35Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000096",
    "book": "classmethods",
    "order_index": 96,
    "title": "#096 Class Method Specification Problem 96",
    "slug": "classmethods-096-class-method-specification-problem-96",
    "description": "Implement class member method #96 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 96 10",
        "output": "Method #96 executed with return code 0 (Value: 960)",
        "explanation": "Executes logic for Class Method Specification Problem 96."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 96\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 96\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 96\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:36Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000097",
    "book": "classmethods",
    "order_index": 97,
    "title": "#097 Class Method Specification Problem 97",
    "slug": "classmethods-097-class-method-specification-problem-97",
    "description": "Implement class member method #97 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 97 10",
        "output": "Method #97 executed with return code 0 (Value: 970)",
        "explanation": "Executes logic for Class Method Specification Problem 97."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 97\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 97\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 97\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:37Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000098",
    "book": "classmethods",
    "order_index": 98,
    "title": "#098 Class Method Specification Problem 98",
    "slug": "classmethods-098-class-method-specification-problem-98",
    "description": "Implement class member method #98 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 98 10",
        "output": "Method #98 executed with return code 0 (Value: 980)",
        "explanation": "Executes logic for Class Method Specification Problem 98."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 98\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 98\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 98\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:38Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000099",
    "book": "classmethods",
    "order_index": 99,
    "title": "#099 Class Method Specification Problem 99",
    "slug": "classmethods-099-class-method-specification-problem-99",
    "description": "Implement class member method #99 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 99 10",
        "output": "Method #99 executed with return code 0 (Value: 990)",
        "explanation": "Executes logic for Class Method Specification Problem 99."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 99\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 99\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 99\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:39Z"
  },
  {
    "id": "00000000-0000-4000-8003-000000000100",
    "book": "classmethods",
    "order_index": 100,
    "title": "#100 Class Method Specification Problem 100",
    "slug": "classmethods-100-class-method-specification-problem-100",
    "description": "Implement class member method #100 handling domain logic, internal member mutation, and return contracts.\n\n### Input\nAs specified in the problem statement.\n\n### Output\nPrint the result matching expected output.",
    "difficulty": "Hard",
    "category": "C++ Class Methods",
    "tags": [
      "Methods",
      "Member Functions",
      "Scope Resolution",
      "this Pointer"
    ],
    "source": "built_in",
    "status": "not_started",
    "sample_test_cases": [
      {
        "input": "CALL_METHOD 100 10",
        "output": "Method #100 executed with return code 0 (Value: 1000)",
        "explanation": "Executes logic for Class Method Specification Problem 100."
      }
    ],
    "starter_templates": {
      "cpp": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class Method Specification Problem 100\nint main() {\n    // Write your solution here\n    return 0;\n}\n",
      "python": "# Class Method Specification Problem 100\ndef solve():\n    # Write your solution here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
      "javascript": "// Class Method Specification Problem 100\nfunction solve() {\n    // Write your solution here\n}\n\nsolve();\n",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your solution here\n    }\n}\n"
    },
    "created_at": "2026-03-01T00:01:40Z"
  }
];
